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

from build import SCHEMA, load, slugify

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
    kinds = {key: {
        "label": spec["label"],
        "plural": spec["plural"],
        "path": spec["path"],
        "voice": spec["voice"],
        "blurb": spec["blurb"],
        "identification": [
            {"key": row["key"], "label": row["label"], "type": row["type"]}
            for row in spec["identification"]
        ],
    } for key, spec in SCHEMA["kinds"].items()}

    relations = SCHEMA["relations"]

    entries, chapters = [], []
    for chapter in doc["chapters"]:
        own = [e for e in doc["entries"] if e["chapter"] == chapter["id"]]
        if not own:
            continue
        chapters.append({
            "id": chapter["id"],
            "roman": chapter["roman"],
            "title": chapter["title"],
            "slugs": [slugify(e["term"]) for e in own],
        })
        for entry in own:
            spec = kinds[entry["kind"]]
            slug = slugify(entry["term"])
            entries.append({
                "term": entry["term"],
                "slug": slug,
                "kind": entry["kind"],
                "kindLabel": spec["label"],
                "path": f"{spec['path']}{slug}/",
                "chapter": chapter["id"],
                "chapterRoman": chapter["roman"],
                "chapterTitle": chapter["title"],
                "partOfSpeech": entry["part_of_speech"],
                "ipa": entry["ipa"],
                "etymology": entry["etymology"],
                "identification": [
                    {
                        "key": row["key"],
                        "label": row["label"],
                        "type": row["type"],
                        "value": ([typographic(item) for item in entry[row["key"]]]
                                  if row["type"] == "list" else typographic(entry[row["key"]])),
                    }
                    for row in spec["identification"]
                ],
                "voice": typographic(entry[spec["voice"]]),
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
                # Authored edges only. The reverse direction is derived below,
                # so a page shows what it does and what is done to it from one
                # authoring site.
                "edges": [
                    {
                        "rel": edge["rel"],
                        "label": relations[edge["rel"]]["label"],
                        "term": edge["to"],
                        "slug": slugify(edge["to"]),
                    }
                    for edge in entry.get("edges", [])
                ],
                "backlinks": [],
            })
    # Cross-references carry their own URL: a target may be any kind, so a link
    # built as /species/<slug>/ would 404 the moment a move is referenced.
    path_of = {entry["slug"]: entry["path"] for entry in entries}
    by_slug = {entry["slug"]: entry for entry in entries}
    for entry in entries:
        for link in [*entry["related"], *entry["confusedWith"], *entry["edges"]]:
            link["path"] = path_of.get(link["slug"], f"/species/{link['slug']}/")
    # Derive the reverse of every authored edge, so the target page can say
    # "staged in Patriotainment" without anyone writing that sentence.
    for entry in entries:
        for edge in entry["edges"]:
            target = by_slug.get(edge["slug"])
            if target is not None:
                target["backlinks"].append({
                    "rel": edge["rel"],
                    "label": relations[edge["rel"]]["inverse"],
                    "term": entry["term"],
                    "slug": entry["slug"],
                    "path": entry["path"],
                })

    counts = {key: sum(1 for entry in entries if entry["kind"] == key) for key in kinds}
    return {
        "meta": {"title": doc["title"], "description": doc["description"]},
        "preface": doc.get("preface", []),
        "stats": {"entries": len(entries), "chapters": len(chapters), "kinds": counts},
        "kinds": kinds,
        "chapters": chapters,
        "entries": entries,
    }


def render(data):
    parts = [BANNER, ""]
    for key in ("meta", "preface", "stats", "kinds", "chapters", "entries"):
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
