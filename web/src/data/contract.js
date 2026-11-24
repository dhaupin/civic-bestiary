// Generated from schema/record.json by build_schema.py - edit the schema, not this file.
export default {
  "recordPath": "data/entries/<slug>.json",
  "recordDescription": "One file per term, named for the term's slug. Every audience reads this file: the README, the site, and the issue form a contributor fills in.",
  "issue": {
    "name": "New entry",
    "titlePrefix": "[New entry] ",
    "template": "new-entry.yml",
    "identificationHint": "Describe it the way its kind is described. Species: range, call, field marks. Move: trigger, tell, counter. Ability: effect, available to, counter. Format: carriers, economics, signature. Buff: effect, tell, expires."
  },
  "chapters": [
    {
      "id": "performative-identity",
      "roman": "I",
      "title": "Performative Identity & Weaponized Liberty"
    },
    {
      "id": "bad-faith-debate",
      "roman": "II",
      "title": "Bad-Faith Debate & Epistemic Breakdown"
    },
    {
      "id": "hypocrisy-revisionism",
      "roman": "III",
      "title": "Hypocrisy, Revisionism & Authoritarian Submission"
    },
    {
      "id": "fearmongering-grift",
      "roman": "IV",
      "title": "Fearmongering, Grift & Algorithmic Radicalization"
    }
  ],
  "kinds": {
    "species": {
      "label": "Species",
      "plural": "Species",
      "path": "/species/",
      "blurb": "An actor you can point at: the person running the bit.",
      "identification": [
        {
          "key": "range",
          "label": "Range",
          "hint": "Where you meet it. Concrete places, not abstractions - truck beds, county fairs, a specific comment section.",
          "example": "Truck beds, county fairs, and the comment section under any local news post."
        },
        {
          "key": "call",
          "label": "Call",
          "hint": "The thing it says. A short quotation, ideally something you have actually heard.",
          "example": "\"Do you support the troops?\""
        },
        {
          "key": "field_marks",
          "label": "Field marks",
          "hint": "How you recognise it at a distance. Three is the house number.",
          "example": "Flag decal on a leased vehicle"
        }
      ]
    },
    "move": {
      "label": "Move",
      "plural": "Moves",
      "path": "/moves/",
      "blurb": "An action performed in the open, in front of witnesses.",
      "identification": [
        {
          "key": "trigger",
          "label": "Trigger",
          "hint": "The moment it gets played - what has just happened that makes this the move to make.",
          "example": "A question it cannot answer is on the floor."
        },
        {
          "key": "tell",
          "label": "Tell",
          "hint": "What the move looks like from the gallery. The visible behaviour, not the motive.",
          "example": "A request for definitions, repeated until the clock runs out."
        },
        {
          "key": "counter",
          "label": "Counter",
          "hint": "The thing that ends it, or makes it cost more than it returns.",
          "example": "Answer the question once, in writing, and move to close."
        }
      ]
    },
    "ability": {
      "label": "Ability",
      "plural": "Abilities",
      "path": "/abilities/",
      "blurb": "A capability an office, body, or machine can wield - no single person owns it.",
      "identification": [
        {
          "key": "effect",
          "label": "Effect",
          "hint": "What it does to the board, in one sentence.",
          "example": "Converts a map into a majority before a single vote is cast."
        },
        {
          "key": "available_to",
          "label": "Available to",
          "hint": "Who can play it: an office, a chamber, a platform, a committee.",
          "example": "State legislatures, once a decade, in a room with no cameras."
        },
        {
          "key": "counter",
          "label": "Counter",
          "hint": "The rule, court, or practice that blunts it.",
          "example": "An independent commission with a map-drawing mandate."
        }
      ]
    },
    "format": {
      "label": "Format",
      "plural": "Formats",
      "path": "/formats/",
      "blurb": "A medium that stages the others - the show, not the performer.",
      "identification": [
        {
          "key": "carriers",
          "label": "Carriers",
          "hint": "Where the format lives: which channels, slots, or platforms.",
          "example": "Cable primetime, streaming specials, and the merch drop that follows."
        },
        {
          "key": "economics",
          "label": "Economics",
          "hint": "How it pays for itself.",
          "example": "Ad rates keyed to outrage, plus a subscription tier for the uncut version."
        },
        {
          "key": "signature",
          "label": "Signature",
          "hint": "The unmistakable formal tic - what makes it recognisably this format and not the news.",
          "example": "A countdown clock over a battlefield."
        }
      ]
    },
    "buff": {
      "label": "Buff",
      "plural": "Buffs",
      "path": "/buffs/",
      "blurb": "A temporary condition that changes what a creature can get away with.",
      "identification": [
        {
          "key": "effect",
          "label": "Effect",
          "hint": "What it changes about the bearer's behaviour or standing.",
          "example": "Excuses any contradiction for the length of the news cycle."
        },
        {
          "key": "tell",
          "label": "Tell",
          "hint": "How you spot someone carrying it.",
          "example": "Confident mispronunciation of a thing they claim to have served in."
        },
        {
          "key": "expires",
          "label": "Expires",
          "hint": "What ends it, and roughly when.",
          "example": "The first primary debate, or the first subpoena - whichever lands first."
        }
      ]
    }
  },
  "contributor": [
    {
      "key": "term",
      "label": "Term",
      "type": "text",
      "required": true,
      "requiredInIssue": true,
      "hint": "The coinage, spelled the way it should be listed. Title case, no quotes.",
      "example": "Playtriot"
    },
    {
      "key": "kind",
      "label": "Kind",
      "type": "select",
      "required": true,
      "requiredInIssue": true,
      "hint": "What sort of thing this is. A species is a person-shaped pattern, a move is an action, an ability belongs to an office, a format is a show, and a buff is a condition.",
      "example": "Species"
    },
    {
      "key": "chapter",
      "label": "Chapter",
      "type": "select",
      "required": true,
      "requiredInIssue": true,
      "hint": "Which chapter the entry belongs to. The maintainers will move it if it belongs elsewhere.",
      "example": "I. Performative Identity & Weaponized Liberty"
    },
    {
      "key": "part_of_speech",
      "label": "Part of speech",
      "type": "select",
      "required": true,
      "requiredInIssue": true,
      "hint": "What the term is grammatically. Most species are nouns; moves are usually gerunds.",
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
      "key": "senses",
      "label": "Senses",
      "type": "list",
      "required": true,
      "requiredInIssue": true,
      "hint": "Two definitions: the thing itself, then the pattern it runs. Full sentences, one per line. The first sense becomes the page description, so make it stand alone.",
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
      "key": "position",
      "label": "Position in chapter",
      "type": "number",
      "required": true,
      "requiredInIssue": false,
      "hint": "Where the entry sits inside its chapter. Appending means one past the current highest.",
      "example": "7"
    },
    {
      "key": "related",
      "label": "Cross-references",
      "type": "list",
      "required": true,
      "requiredInIssue": false,
      "hint": "Two or three existing terms this one belongs beside. The graph must stay connected, so every term needs at least one inbound reference.",
      "example": "Sabotriot, LARPtarian"
    }
  ]
}
