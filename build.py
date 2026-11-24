#!/usr/bin/env python3
"""Render README.md from the data/ records.

`data/lexicon.json` holds the meta (title, description, preface, chapters);
`data/entries/*.json` holds one record per term, each carrying its `kind`, its
`chapter`, and its `position` within that chapter. The split is what lets the
relation graph be linted record by record, and it keeps two people adding
entries from colliding in one file.

Usage:
    python3 build.py           # regenerate README.md
    python3 build.py --check   # exit 1 if README.md is out of date
"""

import json
import re
import unicodedata
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "data"
META = DATA / "lexicon.json"
ENTRIES = DATA / "entries"
OUTPUT = ROOT / "README.md"

BANNER = "<!-- Generated from data/ by build.py - edit the records, not this file. -->"

# The record contract lives in schema/record.json, because the issue form and the
# contribute page derive from it too. Requiring a field here without adding it
# there would mean a contributor cannot supply what the validator demands.
SCHEMA = json.loads((ROOT / "schema" / "record.json").read_text(encoding="utf-8"))
KINDS = SCHEMA["kinds"]
# Relation edges are a controlled vocabulary, not free prose: the vocabulary
# decides which kinds may point at which, and each edge renders backwards on
# its target page without anyone authoring the inverse.
RELATIONS = SCHEMA["relations"]
# Sort axes are schema, not presentation: a kind declares which ones it supports
# and every record scores all of them, so a view can order by any axis without
# knowing what a record is about.
SORTS = SCHEMA["sorts"]
REQUIRED = tuple(field["key"] for field in SCHEMA["fields"] if field.get("required"))


def slugify(text):
    """Approximate the anchor GitHub derives from a heading.

    Accents are folded rather than kept: the anchor and the URL have to agree,
    and a URL with a non-ASCII character in it is a different kind of promise
    than one without.
    """
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^\w\- ]", "", ascii_text.lower()).replace(" ", "-")


def identification_keys(kind):
    """The block a kind must carry - a species has range/call/field marks, a
    move has trigger/tell/counter, and so on."""
    return tuple(row["key"] for row in KINDS[kind]["identification"])


def load():
    meta = json.loads(META.read_text(encoding="utf-8"))
    order_of = {chapter["id"]: index for index, chapter in enumerate(meta["chapters"])}
    records = []
    for path in sorted(ENTRIES.glob("*.json")):
        record = json.loads(path.read_text(encoding="utf-8"))
        record["_file"] = path.name
        records.append(record)
    # chapter order first, then the record's own position inside it: the README
    # numbering and the site's prev/next both run off this one sort
    records.sort(key=lambda r: (order_of.get(r.get("chapter"), len(order_of)), r.get("position", 0), r["term"]))
    doc = {**meta, "entries": records, "by_term": {r["term"].lower(): r for r in records}}
    validate(doc)
    return doc


def validate(doc):
    chapters = {c["id"] for c in doc["chapters"]}
    terms = [e["term"] for e in doc["entries"]]
    known = {t.lower() for t in terms}
    errors = []

    for term in sorted({t for t in terms if terms.count(t) > 1}):
        errors.append(f"duplicate term: {term}")

    for entry in doc["entries"]:
        name = entry.get("_file", "?")
        expected = slugify(entry.get("term", ""))
        if entry.get("_file") != f"{expected}.json":
            errors.append(f"{name}: file name should be {expected}.json (from the term)")
    for chapter in chapters:
        positions = [e.get("position") for e in doc["entries"] if e.get("chapter") == chapter]
        dupes = sorted({p for p in positions if positions.count(p) > 1})
        if dupes:
            errors.append(f"{chapter}: duplicate position {dupes}")
        if not positions:
            errors.append(f"{chapter}: no entries")
    # The graph has to stay connected, but "related" is only one of the ways to
    # connect now: a fallacy is reached through the creatures that commit it.
    referenced = {ref.lower() for e in doc["entries"] for ref in e.get("related", [])}
    referenced |= {edge.get("to", "").lower() for e in doc["entries"] for edge in e.get("edges", [])}
    for term in terms:
        if term.lower() not in referenced:
            errors.append(f"{term}: unreferenced - add it to a related list or target it with an edge; the graph must stay connected")
    for entry in doc["entries"]:
        name = entry.get("term", "?")
        kind = entry.get("kind")
        if kind not in KINDS:
            errors.append(f"{name}: unknown kind {kind!r}; known: {', '.join(KINDS)}")
            continue
        omitted = set(KINDS[kind].get("omit", []))
        missing = [k for k in (*REQUIRED, *identification_keys(kind)) if k not in omitted and not entry.get(k)]
        if missing:
            errors.append(f"{name}: missing {', '.join(missing)}")
        # Kinds share row names (a move and a buff both have a `tell`), so the
        # test is membership in this kind's block, not in some other kind's.
        own = set(identification_keys(kind))
        stray = sorted({row["key"] for spec in KINDS.values() for row in spec["identification"]
                        if row["key"] not in own and entry.get(row["key"])})
        if stray:
            errors.append(f"{name}: a {kind} should not carry {', '.join(stray)}")
        if not isinstance(entry.get("position"), int):
            errors.append(f"{name}: position must be an integer")
        axes = KINDS[kind].get("sorts", [])
        scores = entry.get("sort") or {}
        unscored = [axis for axis in axes if axis not in scores]
        if unscored:
            errors.append(f"{name}: missing sort scores for {', '.join(unscored)}")
        unknown_axis = [axis for axis in scores if axis not in axes]
        if unknown_axis:
            errors.append(f"{name}: {kind} does not sort by {', '.join(unknown_axis)}")
        for axis, value in scores.items():
            if axis not in SORTS:
                continue
            top = SORTS[axis].get("scale", 5)
            if not isinstance(value, int) or not 1 <= value <= top:
                errors.append(f"{name}: sort.{axis} must be an integer 1-{top}")
        if entry.get("chapter") not in chapters:
            errors.append(f"{name}: unknown chapter {entry.get('chapter')!r}")
        for row in KINDS[kind]["identification"]:
            if row["type"] != "list":
                continue
            values = entry.get(row["key"]) or []
            if not isinstance(values, list) or not all(isinstance(v, str) and v.strip() for v in values):
                errors.append(f"{name}: {row['key']} must be a non-empty list of strings")
        for twin in entry.get("confused_with", []):
            if not twin.get("tell"):
                errors.append(f"{entry.get('term', '?')}: confused_with needs a tell")
            if twin.get("term", "").lower() not in known:
                errors.append(f"{entry.get('term', '?')}: confused_with term {twin.get('term')!r} is not defined")
            if twin.get("term", "").lower() == entry.get("term", "").lower():
                errors.append(f"{entry.get('term', '?')}: confused with itself")
        for ref in entry.get("related", []):
            if ref.lower() not in known:
                errors.append(f"{entry.get('term', '?')}: related term {ref!r} is not defined")
            if ref.lower() == entry.get("term", "").lower():
                errors.append(f"{entry.get('term', '?')}: relates to itself")
        cite = entry.get("cite")
        if cite is not None:
            if not isinstance(cite, dict) or not cite.get("label") or not str(cite.get("url", "")).startswith("http"):
                errors.append(f"{name}: cite needs a label and an http(s) url")
        seen_edges = set()
        for edge in entry.get("edges", []):
            rel = edge.get("rel")
            target = edge.get("to", "")
            spec = RELATIONS.get(rel)
            if spec is None:
                errors.append(f"{name}: unknown relation {rel!r}; known: {', '.join(RELATIONS)}")
                continue
            if spec["from"] != "*" and kind not in spec["from"]:
                errors.append(f"{name}: a {kind} cannot {rel}; allowed from {', '.join(spec['from'])}")
            other = doc["by_term"].get(target.lower())
            if other is None:
                errors.append(f"{name}: {rel} target {target!r} is not defined")
                continue
            if spec["to"] != "*" and other["kind"] not in spec["to"]:
                errors.append(f"{name}: cannot {rel} a {other['kind']} ({target})")
            if other["term"].lower() == entry["term"].lower():
                errors.append(f"{name}: cannot {rel} itself")
            if (rel, other["term"].lower()) in seen_edges:
                errors.append(f"{name}: duplicate edge {rel} -> {target}")
            seen_edges.add((rel, other["term"].lower()))
            # Both directions authored is a mistake: the inverse renders for
            # free, and authoring it twice would show the pair twice.
            inverse = rel
            if any(e.get("rel") == inverse and e.get("to", "").lower() == entry["term"].lower()
                   for e in other.get("edges", [])):
                errors.append(f"{name}: {rel} -> {target} is already authored as {inverse} on {target}")

    if errors:
        sys.exit("data/ is invalid:\n  " + "\n  ".join(errors))


def number_entries(doc):
    """Assign running numbers and heading anchors; anchors are needed before rendering."""
    numbered, anchors, number = [], {}, 0
    for chapter in doc["chapters"]:
        entries = [e for e in doc["entries"] if e["chapter"] == chapter["id"]]
        if not entries:
            continue
        pairs = []
        for entry in entries:
            number += 1
            heading = f"{number}. {entry['term']}"
            anchors[entry["term"].lower()] = slugify(heading)
            pairs.append((number, entry))
        numbered.append((chapter, pairs))
    return numbered, anchors


def render_edges(entry, anchors):
    """Authored edges, grouped by relation, in vocabulary order."""
    lines = []
    for rel, spec in RELATIONS.items():
        targets = [edge["to"] for edge in entry.get("edges", []) if edge.get("rel") == rel]
        if not targets:
            continue
        links = ", ".join(f"[*{term}*](#{anchors[term.lower()]})" for term in targets)
        lines.append(f"* **{spec['label']}:** {links}")
    return lines


def render_entry(number, entry, anchors):
    # A reference entry has no pronunciation, so the line adapts rather than
    # printing an empty code span.
    spoken = f" `{entry['ipa']}`" if entry.get("ipa") else ""
    lines = [
        f"### {number}. {entry['term']}",
        f"*({entry['part_of_speech']})*{spoken} - *{KINDS[entry['kind']]['label'].lower()}*  ",
        f"*{entry['etymology']}*",
        "",
    ]
    for row in KINDS[entry["kind"]]["identification"]:
        value = entry[row["key"]]
        if isinstance(value, list):
            value = " \u00b7 ".join(value)
        lines.append(f"**{row['label']}:** {value}  ")
    lines.append("")
    for i, sense in enumerate(entry["senses"], 1):
        lines.append(f"{i}. {sense}")
    lines.append("")
    for note in entry.get("notes", []):
        lines.append(f"* **{note['label']}:** {note['text']}")
    lines.append(f"* **Example:** {entry['example']}")
    # A twin named above is not repeated in the plain cross-reference list.
    twins = {twin["term"].lower() for twin in entry.get("confused_with", [])}
    for twin in entry.get("confused_with", []):
        lines.append(f"* **Easily confused with:** *{twin['term']}* - {twin['tell']}")
    related = ", ".join(
        f"[*{term}*](#{anchors[term.lower()]})" for term in entry["related"] if term.lower() not in twins
    )
    lines.extend(render_edges(entry, anchors))
    lines.append(f"* **Related Terms:** {related}")
    if entry.get("cite"):
        lines.append(f"* **Source:** [{entry['cite']['label']}]({entry['cite']['url']})")
    return lines


def render_contents(numbered):
    lines = ["## Contents", ""]
    for chapter, pairs in numbered:
        chapter_heading = f"{chapter['roman']}. {chapter['title']}"
        lines.append(f"- [{chapter_heading}](#{slugify(chapter_heading)})")
        for number, entry in pairs:
            heading = f"{number}. {entry['term']}"
            lines.append(f"  - [{heading}](#{slugify(heading)})")
    return lines


def render_index(doc, anchors):
    lines = ["## Index", ""]
    for term in sorted((e["term"] for e in doc["entries"]), key=str.lower):
        lines.append(f"- [{term}](#{anchors[term.lower()]})")
    return lines


def render(doc):
    numbered, anchors = number_entries(doc)
    blocks = [("prose", render_contents(numbered))]
    for chapter, pairs in numbered:
        blocks.append(("heading", [f"## {chapter['roman']}. {chapter['title']}"]))
        for number, entry in pairs:
            blocks.append(("entry", render_entry(number, entry, anchors)))
    blocks.append(("prose", render_index(doc, anchors)))

    out = [BANNER, "", f"# {doc['title']}", "", doc["description"]]
    if doc.get("preface"):
        out.extend(["", "## Preface"])
        for paragraph in doc["preface"]:
            out.extend(["", paragraph])

    previous = None
    for kind, block in blocks:
        if not (kind == "entry" and previous == "heading"):
            out.extend(["", "---"])
        out.append("")
        out.extend(block)
        previous = kind
    return "\n".join(out) + "\n"


def main():
    doc = load()
    text = render(doc)
    if "--check" in sys.argv:
        current = OUTPUT.read_text(encoding="utf-8") if OUTPUT.exists() else ""
        if current != text:
            sys.exit("README.md is out of date; run `python3 build.py`")
        print("README.md is up to date")
        return
    OUTPUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUTPUT.name} ({len(doc['entries'])} entries)")


if __name__ == "__main__":
    main()
