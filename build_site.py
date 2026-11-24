#!/usr/bin/env python3
"""Render the site's data module from lexicon.json.

Writes web/src/data/lexicon.js, which the React app and web/ssr.config.js both
import. It is a JS module rather than a JSON import because prestruct loads
ssr.config.js through plain Node ESM, where JSON imports need import
attributes.

Usage:
    python3 build_site.py           # regenerate web/src/data/lexicon.js
    python3 build_site.py --check   # exit 1 if the module is out of date
"""

import json
import re
import sys
from pathlib import Path

from build import load, slugify

ROOT = Path(__file__).parent
OUTPUT = ROOT / "web" / "src" / "data" / "lexicon.js"
BANNER = "// Generated from lexicon.json by build_site.py - edit the JSON, not this file."
SUMMARY_LIMIT = 150


def typographic(text):
    """Straight quotes to curly ones - the site's editorial voice, and 1 char
    instead of the 6 an HTML entity costs in a meta description."""
    text = re.sub(r'"([^"]*)"', lambda m: "\u201c" + m.group(1) + "\u201d", text)
    text = re.sub(r"(^|[\s(\[])'", lambda m: m.group(1) + "\u2018", text)
    return text.replace("'", "\u2019")


def unwrap_emphasis(text):
    """Drop the README's outer *...* wrapper so only the inner **term** survives."""
    stripped = text.strip()
    if len(stripped) > 2 and stripped[0] == "*" and stripped[-1] == "*" \
            and not stripped.startswith("**") and not stripped.endswith("**"):
        return stripped[1:-1]
    return stripped


def summarize(text):
    """First sense as a meta description: POS prefix and markdown stripped."""
    plain = " ".join(text.replace("**", "").replace("*", "").split())
    plain = re.sub(r"^\((noun|adjective|verb|adverb)\)\s*", "", plain)
    if len(plain) <= SUMMARY_LIMIT:
        return plain
    return plain[:SUMMARY_LIMIT].rsplit(" ", 1)[0].rstrip(" ,;:-") + "..."


def build(doc):
    entries, sections = [], []
    for section in doc["sections"]:
        own = [e for e in doc["entries"] if e["section"] == section["id"]]
        if not own:
            continue
        sections.append({
            "id": section["id"],
            "roman": section["roman"],
            "title": section["title"],
            "slugs": [slugify(e["term"]) for e in own],
        })
        for entry in own:
            entries.append({
                "term": entry["term"],
                "slug": slugify(entry["term"]),
                "section": section["id"],
                "sectionRoman": section["roman"],
                "sectionTitle": section["title"],
                "partOfSpeech": entry["part_of_speech"],
                "ipa": entry["ipa"],
                "etymology": entry["etymology"],
                "range": typographic(entry["range"]),
                "call": typographic(entry["call"]),
                "fieldMarks": [typographic(mark) for mark in entry["field_marks"]],
                "senses": [typographic(sense) for sense in entry["senses"]],
                "notes": [
                    {"label": note["label"], "text": typographic(note["text"])}
                    for note in entry.get("notes", [])
                ],
                "example": typographic(unwrap_emphasis(entry["example"])),
                "summary": typographic(summarize(entry["senses"][0])),
                "confusedWith": [
                    {"term": twin["term"], "slug": slugify(twin["term"]), "tell": typographic(twin["tell"])}
                    for twin in entry["confused_with"]
                ],
                "related": [
                    {"term": term, "slug": slugify(term)}
                    for term in entry["related"]
                    if term.lower() not in {twin["term"].lower() for twin in entry["confused_with"]}
                ],
            })
    return {
        "meta": {"title": doc["title"], "description": doc["description"]},
        "preface": doc.get("preface", []),
        "stats": {"entries": len(entries), "sections": len(sections)},
        "sections": sections,
        "entries": entries,
    }


def render(data):
    parts = [BANNER, ""]
    for key in ("meta", "preface", "stats", "sections", "entries"):
        parts.append(f"export const {key} = {json.dumps(data[key], indent=2, ensure_ascii=False)}")
        parts.append("")
    return "\n".join(parts).rstrip() + "\n"


def main():
    data = build(load())
    text = render(data)
    if "--check" in sys.argv:
        current = OUTPUT.read_text(encoding="utf-8") if OUTPUT.exists() else ""
        if current != text:
            sys.exit("web/src/data/lexicon.js is out of date; run `python3 build_site.py`")
        print("web/src/data/lexicon.js is up to date")
        return
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(ROOT)} ({data['stats']['entries']} entries)")


if __name__ == "__main__":
    main()
