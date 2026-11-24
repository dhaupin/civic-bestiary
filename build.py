#!/usr/bin/env python3
"""Render README.md from the data/ records.

`data/lexicon.json` holds the meta (title, description, preface, sections);
`data/species/*.json` holds one record per species, each carrying its `section`
and its `order` within that section. The split is what lets the relation graph
be linted record by record, and it keeps two people adding species from
colliding in one file.

Usage:
    python3 build.py           # regenerate README.md
    python3 build.py --check   # exit 1 if README.md is out of date
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "data"
META = DATA / "lexicon.json"
SPECIES = DATA / "species"
OUTPUT = ROOT / "README.md"

BANNER = "<!-- Generated from data/ by build.py - edit the records, not this file. -->"
REQUIRED = (
    "term", "section", "part_of_speech", "ipa", "etymology",
    "range", "call", "field_marks", "confused_with", "senses", "example", "related",
)


def slugify(text):
    """Approximate the anchor GitHub derives from a heading."""
    return re.sub(r"[^\w\- ]", "", text.lower()).replace(" ", "-")


def load():
    meta = json.loads(META.read_text(encoding="utf-8"))
    order_of = {section["id"]: index for index, section in enumerate(meta["sections"])}
    records = []
    for path in sorted(SPECIES.glob("*.json")):
        record = json.loads(path.read_text(encoding="utf-8"))
        record["_file"] = path.name
        records.append(record)
    # section order first, then the record's own order inside it: the README
    # numbering and the site's prev/next both run off this one sort
    records.sort(key=lambda r: (order_of.get(r.get("section"), len(order_of)), r.get("order", 0), r["term"]))
    doc = {**meta, "entries": records}
    validate(doc)
    return doc


def validate(doc):
    sections = {s["id"] for s in doc["sections"]}
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
    for section in sections:
        orders = [e.get("order") for e in doc["entries"] if e.get("section") == section]
        dupes = sorted({o for o in orders if orders.count(o) > 1})
        if dupes:
            errors.append(f"{section}: duplicate order {dupes}")
        if not orders:
            errors.append(f"{section}: no species")
    referenced = {ref.lower() for e in doc["entries"] for ref in e.get("related", [])}
    for term in terms:
        if term.lower() not in referenced:
            errors.append(f"{term}: never listed as a related term; the cross-reference graph must stay connected")
    for entry in doc["entries"]:
        missing = [k for k in REQUIRED if not entry.get(k)]
        if missing:
            errors.append(f"{entry.get('term', '?')}: missing {', '.join(missing)}")
        if not isinstance(entry.get("order"), int):
            errors.append(f"{entry.get('term', '?')}: order must be an integer")
        if entry.get("section") not in sections:
            errors.append(f"{entry.get('term', '?')}: unknown section {entry.get('section')!r}")
        marks = entry.get("field_marks") or []
        if not isinstance(marks, list) or not all(isinstance(m, str) and m.strip() for m in marks):
            errors.append(f"{entry.get('term', '?')}: field_marks must be a non-empty list of strings")
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

    if errors:
        sys.exit("data/ is invalid:\n  " + "\n  ".join(errors))


def number_entries(doc):
    """Assign running numbers and heading anchors; anchors are needed before rendering."""
    numbered, anchors, number = [], {}, 0
    for section in doc["sections"]:
        entries = [e for e in doc["entries"] if e["section"] == section["id"]]
        if not entries:
            continue
        pairs = []
        for entry in entries:
            number += 1
            heading = f"{number}. {entry['term']}"
            anchors[entry["term"].lower()] = slugify(heading)
            pairs.append((number, entry))
        numbered.append((section, pairs))
    return numbered, anchors


def render_entry(number, entry, anchors):
    lines = [
        f"### {number}. {entry['term']}",
        f"*({entry['part_of_speech']})* `{entry['ipa']}`  ",
        f"*{entry['etymology']}*",
        "",
        f"**Range:** {entry['range']}  ",
        f"**Call:** {entry['call']}  ",
        f"**Field marks:** {' \u00b7 '.join(entry['field_marks'])}",
        "",
    ]
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
    lines.append(f"* **Related Terms:** {related}")
    return lines


def render_contents(numbered):
    lines = ["## Contents", ""]
    for section, pairs in numbered:
        section_heading = f"{section['roman']}. {section['title']}"
        lines.append(f"- [{section_heading}](#{slugify(section_heading)})")
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
    for section, pairs in numbered:
        blocks.append(("heading", [f"## {section['roman']}. {section['title']}"]))
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
