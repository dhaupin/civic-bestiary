#!/usr/bin/env python3
"""Render the record contract's two audiences from schema/record.json.

The schema is the single source for what a record must contain. Two artifacts
derive from it, so neither can drift:

  .github/ISSUE_TEMPLATE/new-species.yml   the issue form a contributor fills in
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
ISSUE = ROOT / ".github" / "ISSUE_TEMPLATE" / "new-species.yml"
CONTRACT = ROOT / "web" / "src" / "data" / "contract.js"

YAML_BANNER = "# Generated from schema/record.json by build_schema.py - edit the schema, not this file.\n"
JS_BANNER = "// Generated from schema/record.json by build_schema.py - edit the schema, not this file.\n"

# Issue-form element per record type. `list` and `pairs` are textareas because
# GitHub forms have no repeatable field; the hint says how to separate entries.
ELEMENT = {"text": "input", "number": "input", "textarea": "textarea", "list": "textarea", "pairs": "textarea"}


def scalar(value):
    """JSON is valid YAML, and json.dumps gets quoting right where hand-rolled
    YAML does not - one stray colon in a hint would otherwise break the form."""
    return json.dumps(str(value), ensure_ascii=False)


def options_for(field, sections):
    options = field.get("options")
    if options == "sections":
        # Contributor-facing labels: the order's roman numeral and title. The
        # record itself stores the id, which the maintainer maps back when the
        # proposal lands.
        return [f"{section['roman']}. {section['title']}" for section in sections]
    return options or []


def render_issue(schema, sections):
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
            for option in options_for(field, sections):
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

    out.append("  - type: markdown\n    attributes:\n")
    out.append(f"      value: {scalar(issue['outro'])}\n")
    return "".join(out)


def render_contract(schema):
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

    contributor = [project(f) for f in schema["fields"] if f.get("addressed_to") != "maintainer"]
    maintainer = [project(f) for f in schema["fields"] if f.get("addressed_to") == "maintainer"]
    doc = {
        "recordPath": schema["record"]["path"],
        "recordDescription": schema["record"]["description"],
        "issue": {
            "name": schema["issue"]["name"],
            "titlePrefix": schema["issue"]["title_prefix"],
            "template": schema["issue"]["file"],
        },
        "contributor": contributor,
        "maintainer": maintainer,
    }
    return JS_BANNER + "export default " + json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def main():
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    meta = json.loads(META.read_text(encoding="utf-8"))
    sections = meta["sections"]

    generated = {
        ISSUE: render_issue(schema, sections),
        CONTRACT: render_contract(schema),
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
