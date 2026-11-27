#!/usr/bin/env python3
"""Render the site's data modules from lexicon.json and data/releases.

Writes web/src/data/lexicon.js, which the React app and web/ssr.config.js both
import. It is a JS module rather than a JSON import because prestruct loads
ssr.config.js through plain Node ESM, where JSON imports need import
attributes.

Also writes web/src/data/releases.js (the /latest chronology) and the Atom feed
at web/public/latest.xml, both derived from data/releases/*.json.

Usage:
    python3 build_site.py           # regenerate the modules and the feed
    python3 build_site.py --check   # exit 1 if any of them is out of date
"""

import json
import html
import hashlib
import re
import sys
from datetime import datetime
from pathlib import Path

from build import SCHEMA, SORTS, load, slugify

ROOT = Path(__file__).parent
OUTPUT = ROOT / "web" / "src" / "data" / "lexicon.js"
RELEASES = ROOT / "data" / "releases"
RELEASES_OUTPUT = ROOT / "web" / "src" / "data" / "releases.js"
FEED_OUTPUT = ROOT / "web" / "public" / "latest.xml"
BANNER = "// Generated from lexicon.json by build_site.py - edit the JSON, not this file."
RELEASES_BANNER = "// Generated from data/releases/*.json by build_site.py - edit the JSON, not this file."
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


# --- the latest chronology -------------------------------------------------
# data/releases/*.json is the editorial record of what landed when, because the
# order cannot be derived: the repository history was squashed, and CI checks
# out a single commit, so a build that read git would disagree with a local one
# and break --check. The post is the record.

TYPOGRAPHY = {
    "\u2014": "an em dash",
    "\u2013": "an en dash",
    "\u201c": "a curly quote",
    "\u201d": "a curly quote",
    "\u2019": "a curly apostrophe",
}
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
# Rendered in Python so the prerender is the same on every machine and in every
# locale, and so the date a reader sees is the author's date, not UTC's.
MONTHS = ("January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December")
INLINE_LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
BOLD = re.compile(r"\*\*([^*]+)\*\*")
ITALIC = re.compile(r"\*([^*]+)\*")


def read_author():
    """site.config.js is the identity file, and Python cannot import it."""
    text = (ROOT / "site.config.js").read_text(encoding="utf-8")
    match = re.search(r"^\s*author:\s*'([^']+)'", text, re.M)
    return match.group(1) if match else ""


def check_prose(where, text, errors):
    for char, name in TYPOGRAPHY.items():
        if char in text:
            errors.append(f"{where}: contains {name}; the book uses a hyphen and a straight quote")
    if text != text.strip():
        errors.append(f"{where}: leading or trailing space")
    if not text:
        errors.append(f"{where}: empty")


def entry_link(entry):
    return {
        "term": entry["term"],
        "slug": entry["slug"],
        "path": entry["path"],
        "kind": entry["kind"],
        "kindLabel": entry["kindLabel"],
        "summary": summarize(entry["senses"][0]),
    }


def unclaimed(entries, claimed):
    """Entries no release has named yet, alphabetically.

    Deliberately not ordered by recency: the positions a new entry gets are the
    ones after it, but the fallacy seam (the appendix starts at 101) means a
    high position is as likely to be an old reference entry as a new one. The
    count is the signal that something landed unwritten-up, not the order."""
    rest = [entry for entry in entries if entry["term"] not in claimed]
    rest.sort(key=lambda entry: entry["term"].lower())
    return [entry_link(entry) for entry in rest]


def known_paths(data, posts):
    """Every page a post body may link to. A post about dead links should not
    ship one, and the check is cheap because the site knows all its routes."""
    paths = {"/", "/guide/", "/about/", "/contribute/", "/latest/"}
    paths |= {spec["path"] for spec in data["kinds"].values()}
    paths |= {f"/chapters/{chapter['id']}/" for chapter in data["chapters"]}
    paths |= {entry["path"] for entry in data["entries"]}
    paths |= {post["path"] for post in posts}
    return paths


def load_releases(data):
    entries = data["entries"]
    by_term = {entry["term"]: entry for entry in entries}
    errors = []
    posts = []
    claimed = {}
    internal = []
    for path in sorted(RELEASES.glob("*.json")) if RELEASES.is_dir() else []:
        name = path.name
        try:
            post = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as error:
            errors.append(f"{name}: {error}")
            continue
        kind = post.get("type")
        if kind not in ("release", "note"):
            errors.append(f"{name}: type must be 'release' or 'note', not {kind!r}")
            continue
        slug = post.get("slug", "")
        if not SLUG_RE.match(slug):
            errors.append(f"{name}: slug must be kebab-case, not {slug!r}")
        published = post.get("published", "")
        try:
            stamp = datetime.fromisoformat(published)
        except ValueError:
            errors.append(f"{name}: published must be an ISO timestamp, not {published!r}")
            stamp = None
        if stamp is not None:
            if stamp.tzinfo is None:
                errors.append(f"{name}: published needs a UTC offset; a feed without one is ambiguous")
            elif name != f"{stamp.date().isoformat()}-{slug}.json":
                errors.append(f"{name}: file name should be {stamp.date().isoformat()}-{slug}.json")
        updated = post.get("updated", published)
        revised = None
        if updated != published:
            try:
                revised = datetime.fromisoformat(updated)
            except ValueError:
                errors.append(f"{name}: updated must be an ISO timestamp, not {updated!r}")
                revised = None
            if revised is not None:
                if revised.tzinfo is None:
                    errors.append(f"{name}: updated needs a UTC offset")
                elif stamp is not None and revised < stamp:
                    errors.append(f"{name}: updated is before published; dateModified would go backwards")
        for key in ("title", "lede"):
            check_prose(f"{name}: {key}", post.get(key, ""), errors)
        if meta_length(post.get("lede", "")) > META_LIMIT:
            errors.append(f"{name}: lede runs past a meta description ({META_LIMIT} escaped characters)")
        body = post.get("body")
        if not isinstance(body, list) or not body:
            errors.append(f"{name}: body must be a non-empty list of paragraphs")
            body = []
        for index, paragraph in enumerate(body, 1):
            check_prose(f"{name}: body[{index}]", paragraph, errors)
            for label, target in INLINE_LINK.findall(paragraph):
                if target.startswith("https://"):
                    continue
                if target.startswith("/"):
                    internal.append((name, index, target))
                else:
                    errors.append(f"{name}: body[{index}] links {label!r} to {target!r}; "
                                  "a link is either /path/ or an https:// URL")
        wanted = post.get("entries") or []
        mentions = post.get("mentions") or []
        if kind == "note" and wanted:
            errors.append(f"{name}: a note does not claim entries - use mentions, or file it as a release")
        if kind == "release" and not wanted:
            errors.append(f"{name}: a release must name at least one entry")
        for field, terms in (("entries", wanted), ("mentions", mentions)):
            for term in terms:
                if term not in by_term:
                    errors.append(f"{name}: {field} names {term!r}, which is not an entry")
            for term in sorted({term for term in terms if terms.count(term) > 1}):
                errors.append(f"{name}: {field} names {term!r} twice")
        for term in sorted(set(mentions) & set(wanted)):
            errors.append(f"{name}: {term!r} is both claimed and mentioned; the post renders it once")
        for term in wanted:
            if term in claimed:
                errors.append(f"{name}: {term!r} is already claimed by {claimed[term]}")
            else:
                claimed[term] = slug
        posts.append({
            "type": kind,
            "published": published,
            "updated": updated,
            # A revision the reader cannot see is a timestamp, not news: the line
            # only appears when the note was revised on a later day.
            "updatedDisplay": (
                f"{revised.day} {MONTHS[revised.month - 1]} {revised.year}"
                if revised and stamp and revised.date() != stamp.date()
                else ""
            ),
            "words": sum(len(text.split()) for text in [post.get("lede", ""), *body]),
            "date": stamp.date().isoformat() if stamp else "",
            "display": f"{stamp.day} {MONTHS[stamp.month - 1]} {stamp.year}" if stamp else published[:10],
            "slug": slug,
            "title": post.get("title", ""),
            "lede": post.get("lede", ""),
            "path": f"/latest/{slug}/",
            "body": body,
            "entries": [entry_link(by_term[term]) for term in wanted if term in by_term],
            "mentions": [entry_link(by_term[term]) for term in mentions if term in by_term],
        })
    known = known_paths(data, posts)
    for name, index, target in internal:
        if target not in known:
            errors.append(f"{name}: body[{index}] links to {target}, which is no page: "
                          "no entry, post, or route has that path")
    if errors:
        sys.exit("data/releases:" + "".join(f"\n  {error}" for error in errors))
    posts.sort(key=lambda post: (post["published"], post["slug"]), reverse=True)
    return posts, claimed, unclaimed(entries, claimed)


def render_releases(posts, claimed, rest):
    payload = {
        "posts": posts,
        "claimed": claimed,
        "unreleased": rest,
        "latest": posts[0] if posts else None,
    }
    parts = [RELEASES_BANNER, ""]
    for key in ("posts", "claimed", "unreleased", "latest"):
        parts.append(f"export const {key} = {json.dumps(payload[key], indent=2, ensure_ascii=False)}")
        parts.append("")
    return "\n".join(parts).rstrip() + "\n"


def inline_html(text, origin):
    """The three inline forms the book uses, as HTML for the feed."""
    out = html.escape(text, quote=False)
    out = INLINE_LINK.sub(
        lambda m: f'<a href="{m.group(2) if m.group(2).startswith("http") else origin + m.group(2)}">'
                  f"{m.group(1)}</a>", out)
    out = BOLD.sub(r"<strong>\1</strong>", out)
    return ITALIC.sub(r"<em>\1</em>", out)


def render_feed(posts, doc):
    origin = doc["site"].rstrip("/")
    updated = max((post["updated"] for post in posts), default="1970-01-01T00:00:00+00:00")
    lines = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<feed xmlns="http://www.w3.org/2005/Atom">',
        f"  <title>{html.escape(doc['title'])} - latest</title>",
        "  <subtitle>New entries, and notes on the ones already in the guide.</subtitle>",
        f'  <link rel="self" type="application/atom+xml" href="{origin}/latest.xml"/>',
        f'  <link rel="alternate" type="text/html" href="{origin}/latest/"/>',
        f"  <id>{origin}/latest/</id>",
        f"  <updated>{updated}</updated>",
        f"  <author><name>{html.escape(read_author())}</name></author>",
    ]
    for post in posts:
        content = "".join(f"<p>{inline_html(paragraph, origin)}</p>" for paragraph in post["body"])
        lines.extend([
            "  <entry>",
            f"    <title>{html.escape(post['title'])}</title>",
            f'    <link rel="alternate" type="text/html" href="{origin}{post["path"]}"/>',
            f"    <id>{origin}{post['path']}</id>",
            f"    <published>{post['published']}</published>",
            f"    <updated>{post['updated']}</updated>",
            f"    <summary>{html.escape(post['lede'])}</summary>",
            f'    <content type="html">{html.escape(content)}</content>',
            "  </entry>",
        ])
    lines.append("</feed>")
    return "\n".join(lines) + "\n"


def check_file(path, text):
    current = path.read_text(encoding="utf-8") if path.exists() else ""
    if current != text:
        sys.exit(f"{path.relative_to(ROOT)} is out of date; run `python3 build_site.py`")
    print(f"{path.relative_to(ROOT)} is up to date")


def main():
    doc = load()
    data = build(doc)
    text = render(data)
    posts, claimed, rest = load_releases(data)
    release_text = render_releases(posts, claimed, rest)
    feed_text = render_feed(posts, doc)
    if "--check" in sys.argv:
        check_file(OUTPUT, text)
        check_file(RELEASES_OUTPUT, release_text)
        check_file(FEED_OUTPUT, feed_text)
        return
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(text, encoding="utf-8")
    RELEASES_OUTPUT.write_text(release_text, encoding="utf-8")
    FEED_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    FEED_OUTPUT.write_text(feed_text, encoding="utf-8")
    sync_labs()
    print(f"wrote {OUTPUT.relative_to(ROOT)} ({data['stats']['entries']} entries), "
          f"{RELEASES_OUTPUT.relative_to(ROOT)} ({len(posts)} posts, {len(rest)} entries not yet written up), "
          f"and {FEED_OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
