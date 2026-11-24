// Generated from schema/record.json by build_schema.py - edit the schema, not this file.
export default {
  "recordPath": "data/species/<slug>.json",
  "recordDescription": "One file per term, named for the term's slug. Every audience reads this file: the README, the site, and the issue form a contributor fills in.",
  "issue": {
    "name": "New species",
    "titlePrefix": "[New species] ",
    "template": "new-species.yml"
  },
  "contributor": [
    {
      "key": "term",
      "label": "Term",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "The portmanteau, spelled the way it should be listed. Title case, no quotes.",
      "example": "Playtriot"
    },
    {
      "key": "section",
      "label": "Order",
      "type": "select",
      "required": true,
      "requiredInIssue": true,
      "hint": "Which order the creature keeps. The maintainers will move it if it belongs elsewhere.",
      "example": "I. Performative Identity & Weaponized Liberty"
    },
    {
      "key": "part_of_speech",
      "label": "Part of speech",
      "type": "select",
      "required": true,
      "requiredInIssue": true,
      "hint": "What the term is grammatically. Most are nouns.",
      "example": "noun"
    },
    {
      "key": "ipa",
      "label": "Pronunciation",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "IPA between slashes. Approximate is fine.",
      "example": "/ˈpleɪ.tri.ət/"
    },
    {
      "key": "etymology",
      "label": "Etymology",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "Where the word came from, in one line. Name both parents if it is a blend.",
      "example": "Blend of \"play\" + \"patriot\""
    },
    {
      "key": "range",
      "label": "Range",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "Where you meet it. Concrete places, not abstractions - truck beds, county fairs, a specific comment section.",
      "example": "Truck beds, county fairs, and the comment section under any local news post."
    },
    {
      "key": "call",
      "label": "Call",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "The thing it says. A short quotation, ideally something you have actually heard.",
      "example": "\"Do you support the troops?\""
    },
    {
      "key": "field_marks",
      "label": "Field marks",
      "type": "list",
      "required": true,
      "requiredInIssue": true,
      "hint": "How you recognise it at a distance. Three is the house number; one per line.",
      "example": "Flag decal on a leased vehicle"
    },
    {
      "key": "senses",
      "label": "Senses",
      "type": "list",
      "required": true,
      "requiredInIssue": true,
      "hint": "Two definitions: the creature, then the pattern it runs. Full sentences, one per line. The first sense becomes the page description, so make it stand alone.",
      "example": "A citizen who performs patriotism as a shield while undermining the civic obligations it claims to honour."
    },
    {
      "key": "example",
      "label": "Example",
      "type": "textarea",
      "required": true,
      "requiredInIssue": true,
      "hint": "One sentence in the wild, with the term in bold. Wrap the quotation in *asterisks*; the README renders it as an aside.",
      "example": "*\"He wrapped himself in the flag at every rally, yet his refusal to respect basic civic responsibilities showed he was more of a **playtriot** than a true patriot.\"*"
    },
    {
      "key": "confused_with",
      "label": "Easily confused with",
      "type": "pairs",
      "required": true,
      "requiredInIssue": false,
      "hint": "Existing terms it could be mistaken for, and the one thing that tells them apart. Optional at proposal time - the maintainers add twins when the confusion is real.",
      "example": "LARPtarian - both dress the part; the playtriot buys the flag, the LARPtarian buys the surplus rifle."
    }
  ],
  "maintainer": [
    {
      "key": "related",
      "label": "Cross-references",
      "type": "list",
      "required": true,
      "requiredInIssue": false,
      "hint": "Two or three existing terms this one belongs beside. The graph must stay connected, so every term needs at least one inbound reference.",
      "example": "Sabotriot, LARPtarian"
    },
    {
      "key": "order",
      "label": "Position in order",
      "type": "number",
      "required": true,
      "requiredInIssue": false,
      "hint": "Where the entry sits inside its order. Appending means one past the current highest.",
      "example": "7"
    }
  ]
}
