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
import html
import hashlib
import re
import sys
from pathlib import Path

from build import SCHEMA, SORTS, load, slugify

ROOT = Path(__file__).parent
OUTPUT = ROOT / "web" / "src" / "data" / "lexicon.js"
BANNER = "// Generated from lexicon.json by build_site.py - edit the JSON, not this file."
SUMMARY_LIMIT = 150
META_LIMIT = 158


def unwrap_emphasis(text):
    """Drop the book's outer *...* wrapper so only the inner **term** survives."""
    stripped = text.strip()
    if len(stripped) > 2 and stripped[0] == "*" and stripped[-1] == "*" \
            and not stripped.startswith("**") and not stripped.endswith("**"):
        return stripped[1:-1]
    return stripped


def meta_length(text):
    """Length as the tag renders it: a straight quote is &quot;, six characters."""
    return len(html.escape(text))


# Function words that read as a mistake when a clipped sentence ends on them
# ("...draft maps released for comment, and a...").
DANGLING = {"a", "an", "and", "as", "at", "but", "by", "for", "from", "in",
            "into", "is", "its", "nor", "of", "on", "or", "so", "than", "that",
            "the", "their", "then", "to", "with", "yet"}


def clip(text, limit):
    """Trim to a word boundary, so a meta description never ends mid-word. The
    budget is measured after escaping, since that is what the tag costs."""
    if meta_length(text) <= limit:
        return text
    words = text.split()
    while words and meta_length(" ".join(words).rstrip(" ,;:-") + "...") > limit:
        words.pop()
    while len(words) > 1 and words[-1].strip(".,;:").lower() in DANGLING:
        words.pop()
    return " ".join(words).rstrip(" ,;:-") + "..."


def entry_summary(entry, spec):
    """Meta description: the definition, framed by kind when it is a reference
    entry, so a two-clause definition still reads as a complete sentence."""
    plain = summarize(entry["senses"][0])
    if entry["kind"] == "fallacy":
        return clip(f"{entry['family']} fallacy: {plain}", META_LIMIT)
    return plain


def plain_sense(text):
    """A sense with its POS prefix and markdown stripped, nothing removed."""
    plain = " ".join(text.replace("**", "").replace("*", "").split())
    return re.sub(r"^\((noun|adjective|verb|adverb)\)\s*", "", plain)


def summarize(text):
    """First sense as a meta description, clipped to fit a search result."""
    return clip(plain_sense(text), SUMMARY_LIMIT)


def build(doc):
    kinds = {key: {
        "label": spec["label"],
        "plural": spec["plural"],
        "coined": bool(spec.get("coined")),
        "path": spec["path"],
        "voice": spec["voice"],
        "blurb": spec["blurb"],
        "identification": [
            {"key": row["key"], "label": row["label"], "type": row["type"]}
            for row in spec["identification"]
        ],
        "sorts": spec.get("sorts", []),
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
            "note": chapter.get("note"),
            "slugs": [slugify(e["term"]) for e in own],
        })
        for entry in own:
            spec = kinds[entry["kind"]]
            slug = slugify(entry["term"])
            summary = entry_summary(entry, spec)
            # The card's URL carries a hash of what the card prints, so an entry
            # that changes is an entry whose image URL changes - scrapers cache
            # by URL, and an unchanged one would keep serving the old card.
            og_version = hashlib.sha256("|".join([
                entry["kind"], slug, entry["term"], chapter["roman"], chapter["title"], summary,
            ]).encode()).hexdigest()[:8]
            entries.append({
                "term": entry["term"],
                "slug": slug,
                "kind": entry["kind"],
                "kindLabel": spec["label"],
                # The record's own file, so every page can offer "view data"
                # without anyone hand-maintaining a second path.
                "source": f"data/entries/{entry['_folder']}/{entry['_file']}",
                "path": f"{spec['path']}{slug}/",
                "chapter": chapter["id"],
                "chapterRoman": chapter["roman"],
                "chapterTitle": chapter["title"],
                "partOfSpeech": entry["part_of_speech"],
                "ipa": entry.get("ipa"),
                "position": entry["position"],
                "sort": entry.get("sort", {}),
                "etymology": entry["etymology"],
                "identification": [
                    {
                        "key": row["key"],
                        "label": row["label"],
                        "type": row["type"],
                        "value": ([item for item in entry[row["key"]]]
                                  if row["type"] == "list" else entry[row["key"]]),
                    }
                    for row in spec["identification"]
                ],
                "voice": entry[spec["voice"]],
                "senses": list(entry["senses"]),
                "notes": [
                    {"label": note["label"], "text": note["text"]}
                    for note in entry.get("notes", [])
                ],
                "example": unwrap_emphasis(entry["example"]),
                "cite": entry.get("cite"),
                "summary": summary,
                "og": f"/og/{entry['kind']}/{slug}.png?v={og_version}",
                "definition": plain_sense(entry["senses"][0]),
                "confusedWith": [
                    {"term": twin["term"], "slug": slugify(twin["term"]), "tell": twin["tell"]}
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
            # Every link says what it points at. A list that mixes kinds - a
            # habitat's houses - cannot label itself without it.
            target = by_slug.get(link["slug"])
            link["kind"] = target["kind"] if target is not None else None
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
                    "kind": entry["kind"],
                })

    # A fallacy is filed by the argument it names; the characters that commit it
    # are filed by what they do. Deriving the spread lets a page say where the
    # fallacy turns up without moving the authored chapter.
    for entry in entries:
        sources = [by_slug[link["slug"]] for link in entry["backlinks"]
                   if link["rel"] == "commits" and link["slug"] in by_slug]
        seen = {source["chapter"] for source in sources}
        entry["committedFrom"] = [
            {"id": chapter["id"], "roman": chapter["roman"], "title": chapter["title"]}
            for chapter in chapters if chapter["id"] in seen
        ]

    counts = {key: sum(1 for entry in entries if entry["kind"] == key) for key in kinds}
    fallacies = counts.get("fallacy", 0)
    # A coinage is an invented name for a character or its gear. The documented
    # fallacies and the keystones are borrowed from the literature and from the
    # public service, so counting them as coinages would overstate the joke. The
    # schema says which is which, so a new kind declares its own nature.
    coined = sum(count for key, count in counts.items() if kinds[key]["coined"])
    return {
        "meta": {"title": doc["title"], "description": doc["description"]},
        "preface": doc.get("preface", []),
        "stats": {
            "entries": len(entries),
            "coinages": coined,
            "fallacies": fallacies,
            "chapters": len(chapters),
            "kinds": counts,
        },
        "kinds": kinds,
        "sorts": [
            {"id": axis, "label": spec["label"], "hint": spec.get("hint", ""),
             "scale": spec.get("scale", 5)}
            for axis, spec in SORTS.items()
        ],
        "chapters": chapters,
        "entries": entries,
    }


def render(data):
    parts = [BANNER, ""]
    for key in ("meta", "preface", "stats", "sorts", "kinds", "chapters", "entries"):
        parts.append(f"export const {key} = {json.dumps(data[key], indent=2, ensure_ascii=False)}")
        parts.append("")
    return "\n".join(parts).rstrip() + "\n"


def sync_labs():
    """Serve labs/*.md from the site: the record contract the contribute page links to."""
    src = ROOT / "labs"
    dest = ROOT / "web" / "public" / "labs"
    if not src.is_dir():
        return
    dest.mkdir(parents=True, exist_ok=True)
    for path in src.glob("*.md"):
        (dest / path.name).write_text(path.read_text(encoding="utf-8"), encoding="utf-8")


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
    sync_labs()
    print(f"wrote {OUTPUT.relative_to(ROOT)} ({data['stats']['entries']} entries)")


if __name__ == "__main__":
    main()
