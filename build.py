#!/usr/bin/env python3
"""Render README.md from lexicon.json.

Usage:
    python3 build.py           # regenerate README.md
    python3 build.py --check   # exit 1 if README.md is out of date
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "lexicon.json"
OUTPUT = ROOT / "README.md"

REQUIRED = ("term", "section", "part_of_speech", "ipa", "etymology", "senses", "example", "related")


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
        for ref in entry.get("related", []):
            if ref.lower() not in known:
                errors.append(f"{entry.get('term', '?')}: related term {ref!r} is not defined")
            if ref.lower() == entry.get("term", "").lower():
                errors.append(f"{entry.get('term', '?')}: relates to itself")

    if errors:
        sys.exit("lexicon.json is invalid:\n  " + "\n  ".join(errors))


def render_entry(number, entry):
    lines = [
        f"### {number}. {entry['term']}",
        f"*({entry['part_of_speech']})* `{entry['ipa']}`  ",
        f"*{entry['etymology']}*",
        "",
    ]
    for i, sense in enumerate(entry["senses"], 1):
        lines.append(f"{i}. {sense}")
    lines.append("")
    for note in entry.get("notes", []):
        lines.append(f"* **{note['label']}:** {note['text']}")
    lines.append(f"* **Example:** {entry['example']}")
    related = ", ".join(f"*{term}*" for term in entry["related"])
    lines.append(f"* **Related Terms:** {related}")
    return lines


def render(doc):
    blocks = []
    number = 0
    for section in doc["sections"]:
        entries = [e for e in doc["entries"] if e["section"] == section["id"]]
        if not entries:
            continue
        blocks.append(("heading", [f"## {section['roman']}. {section['title']}"]))
        for entry in entries:
            number += 1
            blocks.append(("entry", render_entry(number, entry)))

    out = ["<!-- Generated from lexicon.json by build.py - edit the JSON, not this file. -->", "",
           f"# {doc['title']}", "", doc["description"]]
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
