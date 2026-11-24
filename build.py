#!/usr/bin/env python3
"""Render README.md from lexicon.json.

Usage:
    python3 build.py           # regenerate README.md
    python3 build.py --check   # exit 1 if README.md is out of date
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "lexicon.json"
OUTPUT = ROOT / "README.md"

BANNER = "<!-- Generated from lexicon.json by build.py - edit the JSON, not this file. -->"
REQUIRED = (
    "term", "section", "part_of_speech", "ipa", "etymology",
    "range", "call", "field_marks", "senses", "example", "related",
)


def slugify(text):
    """Approximate the anchor GitHub derives from a heading."""
    return re.sub(r"[^\w\- ]", "", text.lower()).replace(" ", "-")


def load():
    doc = json.loads(DATA.read_text(encoding="utf-8"))
    validate(doc)
    return doc


def validate(doc):
    sections = {s["id"] for s in doc["sections"]}
    terms = [e["term"] for e in doc["entries"]]
    known = {t.lower() for t in terms}
    errors = []

    for term in sorted({t for t in terms if terms.count(t) > 1}):
        errors.append(f"duplicate term: {term}")
    referenced = {ref.lower() for e in doc["entries"] for ref in e.get("related", [])}
    for term in terms:
        if term.lower() not in referenced:
            errors.append(f"{term}: never listed as a related term; the cross-reference graph must stay connected")
    for entry in doc["entries"]:
        missing = [k for k in REQUIRED if not entry.get(k)]
        if missing:
            errors.append(f"{entry.get('term', '?')}: missing {', '.join(missing)}")
        if entry.get("section") not in sections:
            errors.append(f"{entry.get('term', '?')}: unknown section {entry.get('section')!r}")
        marks = entry.get("field_marks") or []
        if not isinstance(marks, list) or not all(isinstance(m, str) and m.strip() for m in marks):
            errors.append(f"{entry.get('term', '?')}: field_marks must be a non-empty list of strings")
        for ref in entry.get("related", []):
            if ref.lower() not in known:
                errors.append(f"{entry.get('term', '?')}: related term {ref!r} is not defined")
            if ref.lower() == entry.get("term", "").lower():
                errors.append(f"{entry.get('term', '?')}: relates to itself")

    if errors:
        sys.exit("lexicon.json is invalid:\n  " + "\n  ".join(errors))


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
    related = ", ".join(f"[*{term}*](#{anchors[term.lower()]})" for term in entry["related"])
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
