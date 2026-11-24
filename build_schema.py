#!/usr/bin/env python3
"""Render the record contract's two audiences from schema/record.json.

The schema is the single source for what a record must contain. Two artifacts
derive from it, so neither can drift:

  .github/ISSUE_TEMPLATE/new-entry.yml     the issue form a contributor fills in
  web/src/data/contract.js                 the same fields, for the contribute page

Usage:
    python3 build_schema.py           # regenerate both
    python3 build_schema.py --check   # exit 1 if either is out of date
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).parent
SCHEMA = ROOT / "schema" / "record.json"
META = ROOT / "data" / "lexicon.json"
CONTRACT = ROOT / "web" / "src" / "data" / "contract.js"

YAML_BANNER = "# Generated from schema/record.json by build_schema.py - edit the schema, not this file.\n"
JS_BANNER = "// Generated from schema/record.json by build_schema.py - edit the schema, not this file.\n"

# Issue-form element per record type. `list` and `pairs` are textareas because
# GitHub forms have no repeatable field; the hint says how to separate entries.
ELEMENT = {"text": "input", "number": "input", "textarea": "textarea", "list": "textarea", "pairs": "textarea"}


def identification_example(kinds):
    """The species block, spelled out - the shape most proposals need."""
    return " ".join(f"{row['label']}: ..." for row in kinds["species"]["identification"])


def scalar(value):
    """JSON is valid YAML, and json.dumps gets quoting right where hand-rolled
    YAML does not - one stray colon in a hint would otherwise break the form."""
    return json.dumps(str(value), ensure_ascii=False)


def options_for(field, chapters, kinds):
    options = field.get("options")
    if options == "chapters":
        return [f"{chapter['roman']}. {chapter['title']}" for chapter in chapters]
    if options == "kinds":
        return [spec["label"] for spec in kinds.values()]
    return options or []


def render_issue(schema, chapters, kinds):
    issue = schema["issue"]
    out = [YAML_BANNER, f"name: {scalar(issue['name'])}\n"]
    out.append(f"description: {scalar(issue['description'])}\n")
    out.append(f"title: {scalar(issue['title_prefix'])}\n")
    out.append(f"labels: {json.dumps(issue['labels'])}\n")
    out.append("body:\n")
    out.append("  - type: markdown\n    attributes:\n")
    out.append(f"      value: {scalar(issue['intro'])}\n")

    for field in schema["fields"]:
        if not field.get("required_in_issue") and field.get("addressed_to") == "maintainer":
            continue
        if field["type"] == "select":
            out.append("  - type: dropdown\n")
            out.append(f"    id: {field['key']}\n")
            out.append("    attributes:\n")
            out.append(f"      label: {scalar(field['label'])}\n")
            out.append(f"      description: {scalar(field['hint'])}\n")
            out.append("      options:\n")
            for option in options_for(field, chapters, kinds):
                out.append(f"        - {scalar(option)}\n")
        else:
            out.append(f"  - type: {ELEMENT[field['type']]}\n")
            out.append(f"    id: {field['key']}\n")
            out.append("    attributes:\n")
            out.append(f"      label: {scalar(field['label'])}\n")
            out.append(f"      description: {scalar(field['hint'])}\n")
            out.append(f"      placeholder: {scalar(field['example'])}\n")
        if field.get("required_in_issue"):
            out.append("    validations:\n      required: true\n")

    # GitHub forms cannot branch on a dropdown, so the kind-specific block is one
    # textarea whose description names every block. The maintainer reshapes it.
    out.append("  - type: textarea\n")
    out.append("    id: identification\n")
    out.append("    attributes:\n")
    out.append(f"      label: {scalar('The identification block')}\n")
    out.append(f"      description: {scalar(issue['identification_hint'])}\n")
    out.append(f"      placeholder: {scalar(identification_example(kinds))}\n")

    out.append("  - type: markdown\n    attributes:\n")
    out.append(f"      value: {scalar(issue['outro'])}\n")
    return "".join(out)


def render_contract(schema, chapters):
    def project(field):
        return {
            "key": field["key"],
            "label": field["label"],
            "type": field["type"],
            "required": bool(field.get("required")),
            "requiredInIssue": bool(field.get("required_in_issue")),
            "hint": field["hint"],
            "example": field["example"],
        }

    kinds = {
        key: {
            "label": spec["label"],
            "plural": spec["plural"],
            "path": spec["path"],
            "blurb": spec["blurb"],
            "identification": [
                {"key": row["key"], "label": row["label"], "hint": row["hint"], "example": row["example"]}
                for row in spec["identification"]
            ],
        }
        for key, spec in schema["kinds"].items()
    }
    doc = {
        "recordPath": schema["record"]["path"],
        "recordDescription": schema["record"]["description"],
        "issue": {
            "name": schema["issue"]["name"],
            "titlePrefix": schema["issue"]["title_prefix"],
            "template": schema["issue"]["file"],
            "identificationHint": schema["issue"]["identification_hint"],
        },
        "chapters": [
            {"id": chapter["id"], "roman": chapter["roman"], "title": chapter["title"]}
            for chapter in chapters
        ],
        "kinds": kinds,
        "contributor": [project(f) for f in schema["fields"] if f.get("addressed_to") != "maintainer"]
        + [{
            "key": "identification",
            "label": "The identification block",
            "type": "textarea",
            "required": True,
            "requiredInIssue": False,
            "hint": schema["issue"]["identification_hint"],
            "example": identification_example(kinds),
        }],
        "maintainer": [project(f) for f in schema["fields"] if f.get("addressed_to") == "maintainer"],
    }
    return JS_BANNER + "export default " + json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def main():
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    meta = json.loads(META.read_text(encoding="utf-8"))
    chapters, kinds = meta["chapters"], schema["kinds"]

    generated = {
        ROOT / ".github" / "ISSUE_TEMPLATE" / schema["issue"]["file"]: render_issue(schema, chapters, kinds),
        CONTRACT: render_contract(schema, chapters),
    }

    if "--check" in sys.argv:
        stale = [str(path.relative_to(ROOT)) for path, text in generated.items()
                 if not path.exists() or path.read_text(encoding="utf-8") != text]
        if stale:
            sys.exit("stale against schema/record.json: " + ", ".join(stale) +
                     "\n  run: python3 build_schema.py")
        print(f"schema contract current: {', '.join(str(p.relative_to(ROOT)) for p in generated)}")
        return

    for path, text in generated.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
