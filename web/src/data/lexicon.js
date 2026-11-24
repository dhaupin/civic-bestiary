// Generated from lexicon.json by build_site.py - edit the JSON, not this file.

export const meta = {
  "title": "The Civic Bestiary",
  "description": "A field guide to the creatures of the body politic: portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization - plus the documented fallacies they commit."
}

export const preface = [
  "This is a bestiary, not a dictionary. The creatures in it are real, common, and close by - the man in the flag hoodie, the centrist with one newsletter, the commentator monetizing your uncle’s anger. Each species is named the way a naturalist would name it: by the trait that makes it unmistakable, and by the psy-loop it runs.",
  "Two rules keep the guide from collapsing into a list of insults. The species is a pattern, not a person - a costume that wears people, not a kind of human, and one you can catch yourself in. And every entry describes a mechanism you could point at in a transcript, a rally, or a comment thread, so the name stays a tool for recognition rather than a way to end an argument.",
  "The coinages are portmanteaus on purpose: legible on first contact, slightly ridiculous on second thought. Some of these creatures are trolls in the old sense, things that live under bridges and demand a toll; some are trolls in the newer one. Both are field-observed here. That is roughly the right posture for the subject.",
  "The fallacies work the other way round. They are not coinages and are not ours: they are documented errors in reasoning, named by logicians and studied by psychologists, and every one of them links to its source. Each chapter ends with the documented errors its own creatures commit, so the joke arrives with its receipt attached. The definitions here are written in this guide's voice, but nothing in them is invented - if a claim about a fallacy cannot be traced to the literature, it does not go in the record. The few that turn up in every chapter and belong to none are collected at the end as strays. The coinages are the joke; the fallacies are the part you can cite."
]

export const stats = {
  "entries": 147,
  "coinages": 78,
  "fallacies": 50,
  "chapters": 6,
  "kinds": {
    "species": 24,
    "move": 14,
    "ability": 17,
    "habitat": 12,
    "buff": 11,
    "fallacy": 50,
    "remedy": 11,
    "keystone": 8
  }
}

export const sorts = [
  {
    "id": "impact",
    "label": "Impact",
    "hint": "How much damage it does to the thing it touches - public trust, a person's standing, the soundness of an argument.",
    "scale": 5
  },
  {
    "id": "abuse",
    "label": "Abuse",
    "hint": "How often you actually meet it. The axis that puts the popular ones first.",
    "scale": 5
  },
  {
    "id": "blowback",
    "label": "Blowback",
    "hint": "What it costs the one who uses it, once somebody notices.",
    "scale": 5
  }
]

export const kinds = {
  "species": {
    "label": "Species",
    "plural": "Species",
    "path": "/species/",
    "voice": "call",
    "blurb": "A recognisable pattern of behaviour, worn like a costume - point at the pattern, not at a person.",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text"
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list"
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "move": {
    "label": "Move",
    "plural": "Moves",
    "path": "/moves/",
    "voice": "tell",
    "blurb": "An action performed in the open, in front of witnesses.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text"
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "ability": {
    "label": "Ability",
    "plural": "Abilities",
    "path": "/abilities/",
    "voice": "effect",
    "blurb": "A capability an office, body, or machine can wield - no single person owns it.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text"
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text"
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "habitat": {
    "label": "Habitat",
    "plural": "Habitats",
    "path": "/habitats/",
    "voice": "signature",
    "blurb": "The place a creature is found and fed - the show, the rally, the forum. Broadcast or physical, it is where the performance has a home.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text"
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text"
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "buff": {
    "label": "Buff",
    "plural": "Buffs",
    "path": "/buffs/",
    "voice": "tell",
    "blurb": "A temporary condition that changes what a creature can get away with.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text"
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "fallacy": {
    "label": "Fallacy",
    "plural": "Fallacies",
    "path": "/fallacies/",
    "voice": "tell",
    "blurb": "A documented error in reasoning, named by logicians and psychologists - not a coinage, a real thing the creatures commit.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text"
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "remedy": {
    "label": "Remedy",
    "plural": "Remedies",
    "path": "/remedies/",
    "voice": "effect",
    "blurb": "A procedure that works: what it does, what it costs the person using it, and how it gets captured.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text"
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text"
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  },
  "keystone": {
    "label": "Keystone",
    "plural": "Keystones",
    "path": "/keystones/",
    "voice": "call",
    "blurb": "A species whose presence holds the ecosystem together - and whose absence is the whole problem.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text"
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list"
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text"
      }
    ],
    "sorts": [
      "impact",
      "abuse",
      "blowback"
    ]
  }
}

export const chapters = [
  {
    "id": "performative-identity",
    "roman": "I",
    "title": "Performative Identity & Weaponized Liberty",
    "note": null,
    "slugs": [
      "playtriot",
      "freetard",
      "larptarian",
      "sovereign-shillizen",
      "sabotriot",
      "patriotainment",
      "patriotainer",
      "filibluster",
      "gerrythm",
      "omnibust",
      "honeymoan",
      "pocketveto",
      "nightdocket",
      "coattails",
      "convention-bounce",
      "cloture",
      "discharge-petition",
      "slippery-slope",
      "no-true-scotsman",
      "appeal-to-tradition",
      "appeal-to-nature",
      "proof-by-assertion",
      "sunk-cost-fallacy",
      "im-entitled-to-my-opinion"
    ]
  },
  {
    "id": "bad-faith-debate",
    "roman": "II",
    "title": "Bad-Faith Debate & Epistemic Breakdown",
    "note": null,
    "slugs": [
      "sophistroll",
      "illogician",
      "jaqing-off",
      "trust-me-brofessor",
      "biasographer",
      "bleatkeeper",
      "equivangelist",
      "gallopologist",
      "decorumancer",
      "comment-section",
      "bothsidesing",
      "vaguebooking",
      "receiptbomb",
      "dead-cat",
      "trial-balloon",
      "friday-news-dump",
      "astroturfing",
      "motte-hop",
      "hecklers-veto",
      "flood-the-zone",
      "ad-hominem",
      "straw-man",
      "appeal-to-authority",
      "false-dilemma",
      "loaded-question",
      "circular-reasoning",
      "argument-from-ignorance",
      "tone-policing",
      "motte-and-bailey-fallacy",
      "texas-sharpshooter-fallacy",
      "poisoning-the-well",
      "nut-picking",
      "sealioning"
    ]
  },
  {
    "id": "hypocrisy-revisionism",
    "roman": "III",
    "title": "Hypocrisy, Revisionism & Authoritarian Submission",
    "note": null,
    "slugs": [
      "hypocontortionist",
      "mythstorian",
      "bootcurious",
      "crookmaxxing",
      "capitulectual",
      "subpoenado",
      "cronycle",
      "nonpology",
      "school-board-meeting",
      "blueslip",
      "recessure",
      "signaway",
      "lame-duck",
      "judge-shopping",
      "slapp",
      "nda",
      "qualified-immunity",
      "consent-decree",
      "two-wrongs-make-a-right",
      "post-hoc-ergo-propter-hoc",
      "special-pleading",
      "argument-to-moderation",
      "false-balance",
      "argument-from-silence"
    ]
  },
  {
    "id": "fearmongering-grift",
    "roman": "IV",
    "title": "Fearmongering, Grift & Algorithmic Radicalization",
    "note": null,
    "slugs": [
      "xenophobricator",
      "dramagogue",
      "ragesturbationist",
      "martyrholic",
      "algodemic",
      "plutomartyr",
      "slopagandist",
      "cable-panel",
      "group-chat",
      "bluecheck",
      "crisisglow",
      "indictbump",
      "the-feed",
      "rubber-chicken-circuit",
      "push-poll",
      "briefing-room",
      "spin-room",
      "rally",
      "frankincense",
      "pseudo-event",
      "perp-walk",
      "access",
      "hot-mic",
      "appeal-to-emotion",
      "appeal-to-fear",
      "moving-the-goalposts",
      "survivorship-bias",
      "association-fallacy",
      "appeal-to-motive",
      "appeal-to-pity",
      "ad-nauseam",
      "appeal-to-novelty",
      "appeal-to-consequences"
    ]
  },
  {
    "id": "strays",
    "roman": "V",
    "title": "Stray Arguments",
    "note": "Fallacies that turn up in every chapter and belong to none: the ones the whole guide commits, filed here so the record is complete.",
    "slugs": [
      "hasty-generalization",
      "cherry-picking",
      "false-equivalence",
      "anecdotal-evidence",
      "equivocation",
      "tu-quoque",
      "whataboutism",
      "appeal-to-ridicule",
      "argumentum-ad-populum",
      "thought-terminating-cliche",
      "false-attribution",
      "shifting-the-burden-of-proof",
      "gish-gallop",
      "appeal-to-the-stone"
    ]
  },
  {
    "id": "keystones",
    "roman": "VI",
    "title": "The Keystones",
    "note": "Every creature in chapters I to IV has a counterpart with a job title: the clerk who keeps the record, the auditor who reads the books, the poll worker who counts in public. These are the species whose absence is the pathology - and the procedures they actually run.",
    "slugs": [
      "the-clerk",
      "the-poll-worker",
      "the-archivist",
      "the-librarian",
      "the-caseworker",
      "the-editor",
      "the-moderator",
      "the-auditor",
      "records-request",
      "the-transcript",
      "lateral-reading",
      "the-second-source",
      "the-steelman",
      "the-public-count",
      "the-written-reason",
      "the-audit",
      "random-draw",
      "fee-shift",
      "sunset-clause"
    ]
  }
]

export const entries = [
  {
    "term": "Playtriot",
    "slug": "playtriot",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/playtriot/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈpleɪ.tri.ət/",
    "position": 1,
    "sort": {
      "impact": 5,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "Blend of \"play\" + \"patriot\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A question about policy that has just been answered with a question about loyalty."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Do you support the troops?”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Flag decal on a leased vehicle",
          "Quotes a founder, never a statute",
          "Knows the anthem’s tune, not its third verse"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer the flag question, then ask the policy question again. Patriotism is not a reply, and it does not survive being asked what it costs."
      }
    ],
    "voice": "“Do you support the troops?”",
    "senses": [
      "A U.S. citizen who performs shallow, theatrical displays of nationalism - such as wearing flag-themed apparel or using patriotic slogans - while actively undermining democratic norms, community well-being, or the rule of law.",
      "An individual who adopts the aesthetics and rhetoric of love for their country as a shield or justification to engage in divisive, harmful, or anti-social behavior against fellow citizens."
    ],
    "notes": [],
    "example": "“He wrapped himself in the flag at every rally, yet his refusal to respect basic civic responsibilities showed he was more of a **playtriot** than a true patriot.”",
    "cite": null,
    "summary": "A U.S. citizen who performs shallow, theatrical displays of nationalism - such as wearing flag-themed apparel or using patriotic slogans - while...",
    "confusedWith": [
      {
        "term": "LARPtarian",
        "slug": "larptarian",
        "tell": "Both dress the part; the playtriot buys the flag, the LARPtarian buys the surplus rifle.",
        "path": "/species/larptarian/"
      }
    ],
    "related": [
      {
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      },
      {
        "term": "Frankincense",
        "slug": "frankincense",
        "path": "/buffs/frankincense/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Sunk cost fallacy",
        "slug": "sunk-cost-fallacy",
        "path": "/fallacies/sunk-cost-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      }
    ]
  },
  {
    "term": "Freetard",
    "slug": "freetard",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/freetard/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈfriː.tɑːrd/",
    "position": 2,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "Blend of \"free\" + \"retard\" [verb: to delay, hinder, or impede progress]",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A rule that applies to everyone, and a person who has just found out it applies to them."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“It’s a free country.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Confuses a right with an exemption",
          "Cites freedom, never a clause",
          "Loudest where the line is longest"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which clause, and what it says. A right that cannot be quoted is a preference with a flag on it."
      }
    ],
    "voice": "“It’s a free country.”",
    "senses": [
      "An individual whose grasp of genuine liberty is hindered or stunted by ideological bias, partisan agendas, or self-interest - leading them to mistake reckless, anti-social, or harmful behavior for the exercise of freedom.",
      "A person who invokes a distorted, one-sided view of personal rights to justify actions that undermine public safety, civic duty, or the well-being of society."
    ],
    "notes": [
      {
        "label": "Etymology & Usage Note",
        "text": "Derived from the traditional verb *retard* (as in *fire-retardant*), signifying an understanding of freedom actively slowed or stunted by external agendas. Because the suffix *-tard* is commonly used online as an ableist slur, readers unfamiliar with this specific root framing may still interpret the word as derogatory without context."
      }
    ],
    "example": "“Because his view of liberty was completely **retarded** by partisan talking points, the **freetard** argued that endangering his neighbors was his constitutional right.”",
    "cite": null,
    "summary": "An individual whose grasp of genuine liberty is hindered or stunted by ideological bias, partisan agendas, or self-interest - leading them to mistake...",
    "confusedWith": [
      {
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "tell": "The freetard wants no rules; the shillizen insists there already are none that apply to him.",
        "path": "/species/sovereign-shillizen/"
      }
    ],
    "related": [
      {
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      },
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to nature",
        "slug": "appeal-to-nature",
        "path": "/fallacies/appeal-to-nature/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Two wrongs make a right",
        "slug": "two-wrongs-make-a-right",
        "path": "/fallacies/two-wrongs-make-a-right/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "LARPtarian",
    "slug": "larptarian",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/larptarian/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈlɑːrpˌtɛər.i.ən/",
    "position": 3,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"LARP\" [Live Action Role-Play] + \"libertarian\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A conversation about self-reliance, held by someone with a mortgage and a subscription list."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I could live off the grid tomorrow.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Solar panels on a financed roof",
          "Owns a crossbow, no arrows",
          "Files an HOA complaint about a fence"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what happens on the third day. Preparedness is a supply chain, and the fantasy usually ends where the delivery does."
      }
    ],
    "voice": "“I could live off the grid tomorrow.”",
    "senses": [
      "An individual who role-plays as a rugged, self-reliant rebel or oppressed freedom fighter while actively relying on - and taking for granted - the laws, infrastructure, and safety nets of a stable society.",
      "Someone who adopts the rhetoric of radical individualism and anti-government defiance as a theatrical identity, without facing any real tyranny or sacrificing the comforts of modern civic life."
    ],
    "notes": [],
    "example": "“Posting about ‘living off the grid’ from a climate-controlled suburb with municipal water and paved roads is peak **LARPtarian** behavior.”",
    "cite": null,
    "summary": "An individual who role-plays as a rugged, self-reliant rebel or oppressed freedom fighter while actively relying on - and taking for granted - the...",
    "confusedWith": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "tell": "The LARPtarian can name the rifle’s caliber; the playtriot can only name the flag’s manufacturer.",
        "path": "/species/playtriot/"
      }
    ],
    "related": [
      {
        "term": "Sovereign shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      },
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "term": "Freetard",
        "slug": "freetard",
        "path": "/species/freetard/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "No true Scotsman",
        "slug": "no-true-scotsman",
        "path": "/fallacies/no-true-scotsman/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to the stone",
        "slug": "appeal-to-the-stone",
        "path": "/fallacies/appeal-to-the-stone/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Sovereign Shillizen",
    "slug": "sovereign-shillizen",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/sovereign-shillizen/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈsɒv.rɪn ˈʃɪl.ɪ.zən/",
    "position": 4,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 5
    },
    "etymology": "Blend of \"sovereign citizen\" + \"shill\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A form that has to be signed, at a counter, with a queue behind it."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I do not consent.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Hand-lettered plate, no registration",
          "Argues in maritime law",
          "Owes back taxes on principle"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which law, and read it. Consent is a doctrine with a text, and the text is not on the hand-lettered plate."
      }
    ],
    "voice": "“I do not consent.”",
    "senses": [
      "An individual who promotes, sells, or hides behind pseudo-legal “sovereign citizen” theories to evade taxes, licensing, or basic civic accountability - often profiting from or encouraging others to adopt the same self-serving legal fictions.",
      "Someone who selectively rejects the authority of the law and the responsibilities of citizenship while actively benefiting from public infrastructure, legal protections, and societal stability."
    ],
    "notes": [],
    "example": "“After getting pulled over with fake license plates, the **sovereign shillizen** tried to hand the officer a ‘fee schedule’ he bought from an online guru.”",
    "cite": null,
    "summary": "An individual who promotes, sells, or hides behind pseudo-legal “sovereign citizen” theories to evade taxes, licensing, or basic civic accountability...",
    "confusedWith": [
      {
        "term": "Freetard",
        "slug": "freetard",
        "tell": "The shillizen files paperwork to escape the law; the freetard simply ignores it.",
        "path": "/species/freetard/"
      }
    ],
    "related": [
      {
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      },
      {
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      },
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "path": "/fallacies/argument-from-ignorance/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "I'm entitled to my opinion",
        "slug": "im-entitled-to-my-opinion",
        "path": "/fallacies/im-entitled-to-my-opinion/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The poll worker",
        "slug": "the-poll-worker",
        "path": "/keystones/the-poll-worker/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The public count",
        "slug": "the-public-count",
        "path": "/remedies/the-public-count/"
      }
    ]
  },
  {
    "term": "Sabotriot",
    "slug": "sabotriot",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/sabotriot/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈsæb.ə.tri.ət/",
    "position": 5,
    "sort": {
      "impact": 5,
      "abuse": 3,
      "blowback": 5
    },
    "etymology": "Blend of \"saboteur\" + \"patriot\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A service that has just closed, and a ballot that closed it."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I voted for the guy who’ll cut it.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Votes against the subsidy, keeps the check",
          "Waves the flag at the shuttered plant",
          "Blames the other party for the closure"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Put the vote next to the closure. This is not a private hypocrisy; it is a public choice with a public receipt."
      }
    ],
    "voice": "“I voted for the guy who’ll cut it.”",
    "senses": [
      "An empathy-devoid spite-voter who actively undermines their own healthcare, wages, public infrastructure, and community well-being - all while waving a flag - purely for the satisfaction of believing it will hurt the fellow citizens they hate.",
      "Someone who treats self-destruction as a civic virtue, eagerly burning down the very institutions and safety nets their own family relies on just to “own” political rivals and watch their neighbors suffer."
    ],
    "notes": [],
    "example": "“Cheerfully voting to defund his own town’s hospital and public schools just to spite people in another zip code makes him a textbook **sabotriot**.”",
    "cite": null,
    "summary": "An empathy-devoid spite-voter who actively undermines their own healthcare, wages, public infrastructure, and community well-being - all while waving...",
    "confusedWith": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "tell": "A playtriot performs the loyalty; a sabotriot votes it into your hospital’s closure.",
        "path": "/species/playtriot/"
      }
    ],
    "related": [
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      },
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Slippery slope",
        "slug": "slippery-slope",
        "path": "/fallacies/slippery-slope/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      }
    ]
  },
  {
    "term": "Patriotainment",
    "slug": "patriotainment",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/patriotainment/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈpeɪ.tri.ə.ˌteɪn.mənt/",
    "position": 6,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "Blend of \"patriot\" + \"entertainment\"",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "Cable primetime, streaming specials, rally tours, and the merch drop that follows each one."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Ad rates keyed to outrage, an eighty-dollar hoodie, and a subscription tier for the uncut version."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A countdown clock over a battlefield, and a sponsor read that starts before the anthem finishes."
      }
    ],
    "voice": "A countdown clock over a battlefield, and a sponsor read that starts before the anthem finishes.",
    "senses": [
      "The commercial apparatus that converts national identity into subscription content - merch lines, streaming specials, rally tours - where loving the country is something you buy a ticket to watch rather than something you owe the people living in it.",
      "A mode of civic life in which the spectacle of patriotism substitutes entirely for its obligations, so that cheering loudest counts as service and noticing anything else counts as betrayal."
    ],
    "notes": [],
    "example": "“Eighty-dollar hoodies, four-hundred-dollar seats, and a two-hour set about how the country is under attack - that isn’t a movement, that’s **patriotainment** at arena scale.”",
    "cite": null,
    "summary": "The commercial apparatus that converts national identity into subscription content - merch lines, streaming specials, rally tours - where loving the...",
    "confusedWith": [
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "tell": "The ragesturbationist sells the anger; the patriotainer sells the merchandise that goes with it.",
        "path": "/species/ragesturbationist/"
      }
    ],
    "related": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      },
      {
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Thought-terminating cliché",
        "slug": "thought-terminating-cliche",
        "path": "/fallacies/thought-terminating-cliche/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Patriotainer",
    "slug": "patriotainer",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/patriotainer/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈpeɪ.tri.ə.ˌteɪ.nər/",
    "position": 7,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Back-formation from \"patriotainment\": the performer the format cannot run without",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A commercial break that needs a grievance to sell the next segment."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Folks, they don’t want you to know this.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Every segment ends on a sponsor read",
          "Owns the flag as a prop and licenses the footage",
          "Says “the country” when meaning “my audience”",
          "No position survives a ratings dip"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what was withheld and who was paid. The audience is the product, and the “they” is usually the sponsor."
      }
    ],
    "voice": "“Folks, they don’t want you to know this.”",
    "senses": [
      "The on-air performer who converts national identity into a segment: hired to be certain, paid to be angry, and never once required to be right.",
      "A broadcaster whose only consistent commitment is the next hour of programming. The flag is a prop, the outrage is inventory, and moral clarity is a liability no sponsor will underwrite."
    ],
    "notes": [],
    "example": "“He spent one segment mourning the republic and the next selling the supplement that would save it - a **patriotainer** to the last ad break.”",
    "cite": null,
    "summary": "The on-air performer who converts national identity into a segment: hired to be certain, paid to be angry, and never once required to be right.",
    "confusedWith": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "tell": "The playtriot performs for free and believes it; the patriotainer performs on contract and invoices for it.",
        "path": "/species/playtriot/"
      },
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "tell": "The format is the show; the patriotainer is the person the show is built around - and the one who gets replaced when the timeslot moves.",
        "path": "/habitats/patriotainment/"
      }
    ],
    "related": [
      {
        "term": "Rubber chicken circuit",
        "slug": "rubber-chicken-circuit",
        "path": "/habitats/rubber-chicken-circuit/"
      }
    ],
    "edges": [
      {
        "rel": "performs",
        "label": "Performs",
        "term": "JAQing Off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to ridicule",
        "slug": "appeal-to-ridicule",
        "path": "/fallacies/appeal-to-ridicule/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Rubber chicken circuit",
        "slug": "rubber-chicken-circuit",
        "path": "/habitats/rubber-chicken-circuit/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Pseudo-event",
        "slug": "pseudo-event",
        "path": "/habitats/pseudo-event/"
      }
    ]
  },
  {
    "term": "Filibluster",
    "slug": "filibluster",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/filibluster/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈfɪl.ɪˌblʌs.tər/",
    "position": 8,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"filibuster\" + \"bluster\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Converts a minority into a veto by outlasting the clock, without ever having to win the argument."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Any member of a chamber that still keeps a speaking clock, a quorum, and a camera."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Cloture, a quorum that stays awake, or the nuclear option - each of which spends the institution to buy back the hour."
      }
    ],
    "voice": "Converts a minority into a veto by outlasting the clock, without ever having to win the argument.",
    "senses": [
      "The procedural power of a legislative minority to stop the body from acting by refusing to stop talking - a capability of the seat rather than the person, available to anyone willing to read the phone book into the record.",
      "It works because the rules protect the speaker, not the subject. The longer a speech runs, the more the room’s patience - and not its argument - becomes the thing under negotiation, so the win goes to whoever has least to lose by staying."
    ],
    "notes": [],
    "example": "“He read the bill’s table of contents, then the Bible, then his own memoir; by hour nine the compromise was dead and the cameras had gone home - a textbook **filibluster**.”",
    "cite": null,
    "summary": "The procedural power of a legislative minority to stop the body from acting by refusing to stop talking - a capability of the seat rather than the...",
    "confusedWith": [
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "tell": "The filibluster is performed aloud, for the clock; the omnibust is performed at 3 a.m., for the printer.",
        "path": "/abilities/omnibust/"
      }
    ],
    "related": [
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      },
      {
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Ad nauseam",
        "slug": "ad-nauseam",
        "path": "/fallacies/ad-nauseam/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Gerrythm",
    "slug": "gerrythm",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/gerrythm/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈdʒɛr.iˌðəm/",
    "position": 9,
    "sort": {
      "impact": 5,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"gerrymander\" + \"algorithm\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Draws the district you are going to win, at machine speed, before anyone has voted."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "State legislatures with a census, a map, and a data vendor on retainer."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "An independent commission with a drawing mandate, or a court willing to read the code."
      }
    ],
    "voice": "Draws the district you are going to win, at machine speed, before anyone has voted.",
    "senses": [
      "The capability of a legislature to choose its voters instead of the reverse - now run by software that tests ten thousand maps overnight against turnout history and keeps the one most likely to survive a court.",
      "It works because a district line is not an argument, so it never has to be defended as one. By the time anyone can prove the intent, the map has already elected three cycles of the people who drew it."
    ],
    "notes": [],
    "example": "“The county split cleanly down a cul-de-sac, and the incumbent’s house landed in a district with none of his old voters - the **gerrythm** had run overnight and nobody had seen the code.”",
    "cite": null,
    "summary": "The capability of a legislature to choose its voters instead of the reverse - now run by software that tests ten thousand maps overnight against...",
    "confusedWith": [
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "tell": "The filibluster wins the hour; the gerrythm wins the decade.",
        "path": "/abilities/filibluster/"
      }
    ],
    "related": [
      {
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      },
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Texas sharpshooter fallacy",
        "slug": "texas-sharpshooter-fallacy",
        "path": "/fallacies/texas-sharpshooter-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Omnibust",
    "slug": "omnibust",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/omnibust/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈɒm.nɪˌbʌst/",
    "position": 10,
    "sort": {
      "impact": 5,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"omnibus\" + \"bust\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Passes a thousand pages nobody has read by making the reading of them the thing that keeps the lights off."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Appropriators, at three in the morning, with a shutdown clock on the wall."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "A single-subject rule, a mandatory reading period, or a clerk with stamina and a public log."
      }
    ],
    "voice": "Passes a thousand pages nobody has read by making the reading of them the thing that keeps the lights off.",
    "senses": [
      "The capability of a legislature to bundle everything it cannot defend separately into one document too large to read and too urgent to refuse.",
      "It works because the deadline does the arguing. Every objection can be answered with the same sentence - the government closes Friday - so the bill’s contents are never weighed against each other, only against the clock."
    ],
    "notes": [],
    "example": "“The **omnibust** carried a bridge, a ban, three tax credits and a paragraph nobody has explained, and it passed at 3:41 a.m. because the alternative was a shutdown.”",
    "cite": null,
    "summary": "The capability of a legislature to bundle everything it cannot defend separately into one document too large to read and too urgent to refuse.",
    "confusedWith": [
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "tell": "The filibluster stops a bill by talking; the omnibust passes one by making sure nobody can.",
        "path": "/abilities/filibluster/"
      }
    ],
    "related": [
      {
        "term": "Gerrythm",
        "slug": "gerrythm",
        "path": "/abilities/gerrythm/"
      },
      {
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False dilemma",
        "slug": "false-dilemma",
        "path": "/fallacies/false-dilemma/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Honeymoan",
    "slug": "honeymoan",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/honeymoan/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈhʌn.iˌməʊn/",
    "position": 11,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"honeymoon\" + \"moan\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "For the first hundred days, any criticism of the winner is heard as grief, and any objection as sour grapes."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "“Give him a chance” from someone who gave the last one four years of scrutiny and no chance at all."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "The first budget, the first appointment, or the first scandal - whichever lands before the hundred days are up."
      }
    ],
    "voice": "“Give him a chance” from someone who gave the last one four years of scrutiny and no chance at all.",
    "senses": [
      "A temporary condition in which a fresh mandate excuses everything the campaign did not explain, and the losing side is expected to be quiet about it.",
      "It works because a new administration is owed a hearing, and a hearing is easy to extend into a silence. The grace period is real; the only open question is who gets to decide when it ends."
    ],
    "notes": [],
    "example": "“Every question about the transition was met with **honeymoan** - he just got there, give him time - and the time ran out with the ethics waivers still unsigned.”",
    "cite": null,
    "summary": "A temporary condition in which a fresh mandate excuses everything the campaign did not explain, and the losing side is expected to be quiet about it.",
    "confusedWith": [
      {
        "term": "Crisisglow",
        "slug": "crisisglow",
        "tell": "The honeymoan is grace after a win; the crisisglow is authority during a panic. One is granted by the calendar, the other by the alarm.",
        "path": "/buffs/crisisglow/"
      }
    ],
    "related": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to novelty",
        "slug": "appeal-to-novelty",
        "path": "/fallacies/appeal-to-novelty/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Pocketveto",
    "slug": "pocketveto",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/pocketveto/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈpɒk.ɪtˌviː.təʊ/",
    "position": 12,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 4
    },
    "etymology": "Blend of \"pocket\" + \"veto\", from the constitutional pocket veto",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Kills a bill by doing nothing, inside a ten-day window the chamber is not allowed to watch."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A president, a bill passed near the end of a session, and a Congress that has gone home."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Stay in session. A pro forma gavel every few days keeps the ten-day clock running and forces the objection into writing."
      }
    ],
    "voice": "Kills a bill by doing nothing, inside a ten-day window the chamber is not allowed to watch.",
    "senses": [
      "The constitutional power to let a bill die unsigned: the president neither signs nor returns it, Congress adjourns within ten days, and the bill is simply not law - no message, no veto to override, no vote to defend.",
      "It works because absence is not an act. A regular veto is a public document that invites a two-thirds fight; a pocket veto is a calendar, and there is nobody to argue with. The clause was written for a president travelling by horse, and it still works because Congress still goes home."
    ],
    "notes": [],
    "example": "“The bill passed in December, the president went to Camp David, and the **pocketveto** did what a veto message could not - it ended the argument without leaving a record to run against.”",
    "cite": null,
    "summary": "The constitutional power to let a bill die unsigned: the president neither signs nor returns it, Congress adjourns within ten days, and the bill is...",
    "confusedWith": [
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "tell": "The filibluster stops a bill by refusing to sit down; the pocketveto stops one by standing up and leaving.",
        "path": "/abilities/filibluster/"
      }
    ],
    "related": [
      {
        "term": "Signaway",
        "slug": "signaway",
        "path": "/abilities/signaway/"
      },
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "term": "Recessure",
        "slug": "recessure",
        "path": "/abilities/recessure/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Nightdocket",
    "slug": "nightdocket",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/nightdocket/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈnaɪtˌdɒk.ɪt/",
    "position": 13,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"night\" + \"docket\", from the emergency docket the court keeps after hours",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Decides the emergency case at midnight, in one unsigned paragraph, before anyone has argued it."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "An appellate court with an emergency application, a filing deadline, and no argument on the calendar."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Publish the reasoning and treat the order as precedent. A docket that leaves a record is harder to use as a shortcut."
      }
    ],
    "voice": "Decides the emergency case at midnight, in one unsigned paragraph, before anyone has argued it.",
    "senses": [
      "The emergency or shadow docket: applications decided on the papers, often within hours, frequently unsigned and unexplained - relief that shapes the law without the hearing the law usually requires.",
      "It works because emergencies are real and calendars are not. A stay granted at midnight is legally identical to a stay granted after argument, but it arrives without the record that would let anyone argue with it - and the emergency is often the point."
    ],
    "notes": [],
    "example": "“The **nightdocket** granted the stay at 11:40 p.m., one paragraph, no signature, and by morning the policy was suspended and the reasoning was a footnote in somebody else’s brief.”",
    "cite": null,
    "summary": "The emergency or shadow docket: applications decided on the papers, often within hours, frequently unsigned and unexplained - relief that shapes the...",
    "confusedWith": [
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "tell": "The subpoenado is a hearing staged for cameras; the nightdocket is a ruling staged for nobody.",
        "path": "/abilities/subpoenado/"
      }
    ],
    "related": [
      {
        "term": "Blueslip",
        "slug": "blueslip",
        "path": "/abilities/blueslip/"
      },
      {
        "term": "Pocketveto",
        "slug": "pocketveto",
        "path": "/abilities/pocketveto/"
      },
      {
        "term": "Recessure",
        "slug": "recessure",
        "path": "/abilities/recessure/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Coattails",
    "slug": "coattails",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/coattails/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈkəʊt.teɪlz/",
    "position": 14,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "English: the hem of the top-of-ticket coat, which every down-ballot candidate rides.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Carries the down-ballot races along on the top of the ticket, and lends a margin to people the voter never met."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A state legislator whose ads feature somebody else’s name, and a victory speech that says “we” about a race the speaker did not run."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "The first midterm, when the coat is not on the ballot and the hem has to stand up on its own."
      }
    ],
    "voice": "A state legislator whose ads feature somebody else’s name, and a victory speech that says “we” about a race the speaker did not run.",
    "senses": [
      "The down-ballot pull of a strong top-of-ticket candidate: when the presidential margin is large, legislators, sheriffs, and ballot measures ride the same wave, whether or not the wave was about them.",
      "It works because most voters do not finish the ballot. They pick a top and stop, and the stopping point is the gift - which is why a legislature can swing wildly without a single district changing its mind."
    ],
    "notes": [],
    "example": "“She won by nine, and the **coattails** carried a county clerk who had run on a road-repair budget and never mentioned the president once.”",
    "cite": null,
    "summary": "The down-ballot pull of a strong top-of-ticket candidate: when the presidential margin is large, legislators, sheriffs, and ballot measures ride the...",
    "confusedWith": [
      {
        "term": "Honeymoan",
        "slug": "honeymoan",
        "tell": "The honeymoan is grace granted to the winner; the coattails are the margin the winner lends to everyone standing behind them.",
        "path": "/buffs/honeymoan/"
      }
    ],
    "related": [
      {
        "term": "Convention bounce",
        "slug": "convention-bounce",
        "path": "/buffs/convention-bounce/"
      },
      {
        "term": "Lame duck",
        "slug": "lame-duck",
        "path": "/buffs/lame-duck/"
      },
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Convention bounce",
    "slug": "convention-bounce",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/convention-bounce/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/kənˈvɛn.ʃən baʊns/",
    "position": 15,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "English: the polling lift after a party convention, named for the week it lives in.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Adds five points for a fortnight, and lets everyone in the building call it momentum."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A poll released on the last night of the convention, and a surrogate saying “the map has expanded” before the ballots are printed."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "Ten days after the balloons, or the first post-convention poll that disagrees with the first post-convention poll."
      }
    ],
    "voice": "A poll released on the last night of the convention, and a surrogate saying “the map has expanded” before the ballots are printed.",
    "senses": [
      "The polling lift a party gets from its own convention: four days of unchallenged messaging, a balloon drop, and a sample that is briefly paying attention.",
      "It works because attention is the mechanism, not persuasion. The bounce measures who was watching, so it decays as the audience returns to its habits - which is why the number is real and the meaning is mostly theatrical. Conventions have also stopped being news; the bounce shrank as the broadcast became an infomercial."
    ],
    "notes": [],
    "example": "“The **convention bounce** put him up six, the coverage called it a reset, and three weeks later the same pollster found the race exactly where it started.”",
    "cite": null,
    "summary": "The polling lift a party gets from its own convention: four days of unchallenged messaging, a balloon drop, and a sample that is briefly paying...",
    "confusedWith": [
      {
        "term": "Honeymoan",
        "slug": "honeymoan",
        "tell": "The bounce is measured in polls and the honeymoan is spent in arguments; both expire on a calendar nobody printed.",
        "path": "/buffs/honeymoan/"
      }
    ],
    "related": [
      {
        "term": "Coattails",
        "slug": "coattails",
        "path": "/buffs/coattails/"
      },
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Cloture",
    "slug": "cloture",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/cloture/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/ˈkləʊ.tʃə/",
    "position": 16,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "English: from the French clôture, the closing - the motion that ends debate.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Ends a debate by arithmetic, at a price the majority has to pay out of its own calendar."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Sixty senators, or a majority willing to spend the days it takes to get to sixty."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Count the votes before you need them. Cloture is cheap for a majority that already has the number, and a week it cannot spare for one that does not."
      }
    ],
    "voice": "Ends a debate by arithmetic, at a price the majority has to pay out of its own calendar.",
    "senses": [
      "The motion that closes debate: a supermajority votes to stop talking and the chamber moves to the question - the procedural exit from a filibuster, priced in session days rather than in votes.",
      "It works because the price is time, and time is the one thing a majority cannot borrow. The two-step - cloture on the motion to proceed, then cloture on the bill - means a determined minority is charged twice for the same hour."
    ],
    "notes": [],
    "example": "“They had the votes for the bill and not the votes for **cloture**, so the week went to the calendar and the bill went to the next session.”",
    "cite": null,
    "summary": "The motion that closes debate: a supermajority votes to stop talking and the chamber moves to the question - the procedural exit from a filibuster...",
    "confusedWith": [
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "tell": "The filibluster spends the clock to stop a vote; cloture spends the clock to force one. Same clock, opposite buyer.",
        "path": "/abilities/filibluster/"
      }
    ],
    "related": [
      {
        "term": "Discharge petition",
        "slug": "discharge-petition",
        "path": "/abilities/discharge-petition/"
      },
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "term": "Pocketveto",
        "slug": "pocketveto",
        "path": "/abilities/pocketveto/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Discharge petition",
    "slug": "discharge-petition",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/discharge-petition/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": "/dɪsˈtʃɑːdʒ pəˈtɪʃ.ən/",
    "position": 17,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: the motion that discharges a bill from the committee that is holding it.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Pulls a bill out of a committee that will not move it, using a majority that has to sign its name."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A majority of the House - 218 signatures - and a bill that a chair has decided to bury."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Keep the signatures public and the bill moving. A petition is expensive to sign and cheap to schedule, so the cheapest counter is a hearing."
      }
    ],
    "voice": "Pulls a bill out of a committee that will not move it, using a majority that has to sign its name.",
    "senses": [
      "The House’s escape hatch: when a committee refuses to report a bill, a majority of the whole House can sign a petition to bring it to the floor - 218 names, filed with the clerk, open for anyone to read.",
      "It works because the signature is public and the alternative is invisible. A chair can kill a bill in private; a discharge petition makes every member choose in the open, which is why it is used rarely and threatened constantly."
    ],
    "notes": [],
    "example": "“The bill sat in committee for a year, the **discharge petition** reached 218 on a Tuesday, and the chair scheduled a hearing by Thursday.”",
    "cite": null,
    "summary": "The House’s escape hatch: when a committee refuses to report a bill, a majority of the whole House can sign a petition to bring it to the floor - 218...",
    "confusedWith": [
      {
        "term": "Cloture",
        "slug": "cloture",
        "tell": "Cloture ends a debate in the chamber that is having it; a discharge petition takes the bill away from the chamber that is not.",
        "path": "/abilities/cloture/"
      }
    ],
    "related": [
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "path": "/abilities/filibluster/"
      },
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Slippery slope",
    "slug": "slippery-slope",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/slippery-slope/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 101,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "The image is physical: one step onto the incline, and gravity is left to finish the argument.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A modest change is proposed that the speaker opposes."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The sentence jumps from a small rule to a catastrophe with no institution in between."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what stops the slide at each step. If the answer is nothing, ask why the previous steps never slid."
      }
    ],
    "voice": "The sentence jumps from a small rule to a catastrophe with no institution in between.",
    "senses": [
      "Claiming that a small first step will inevitably lead to an extreme outcome, without showing the mechanism that carries it there.",
      "It works because nobody can audit a chain of consequences they have not seen. Each link sounds plausible alone; the whole chain is narrated rather than argued."
    ],
    "notes": [],
    "example": "“First they ban the plastic bag, then they ban the car.” Between the two there are four legislatures, a court, and an election, none of which appears in the sentence.",
    "cite": {
      "label": "Wikipedia · Slippery slope",
      "url": "https://en.wikipedia.org/wiki/Slippery_slope"
    },
    "summary": "Informal · Presumption fallacy: Claiming that a small first step will inevitably lead to an extreme outcome, without showing the mechanism that carries it...",
    "confusedWith": [
      {
        "term": "False dilemma",
        "slug": "false-dilemma",
        "tell": "The slope hides a chain of steps; the dilemma hides the options that are not steps.",
        "path": "/fallacies/false-dilemma/"
      }
    ],
    "related": [
      {
        "term": "Post hoc ergo propter hoc",
        "slug": "post-hoc-ergo-propter-hoc",
        "path": "/fallacies/post-hoc-ergo-propter-hoc/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      }
    ]
  },
  {
    "term": "No true Scotsman",
    "slug": "no-true-scotsman",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/no-true-scotsman/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 102,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "From Antony Flew's example: no Scotsman puts sugar on his porridge - and any Scot who does is reclassified.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A counterexample has just been produced against a generalisation about a group."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The group acquires a new membership test, applied only to the case at hand."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Fix the definition before the counterexamples arrive, and ask which rule excluded this one and why that rule was not mentioned earlier."
      }
    ],
    "voice": "The group acquires a new membership test, applied only to the case at hand.",
    "senses": [
      "Protecting a generalisation from counterexamples by redefining the category until the counterexamples fall outside it.",
      "It works because definitions are genuinely negotiable. The sentence sounds like a clarification, and a clarification is much harder to argue with than a false claim."
    ],
    "notes": [],
    "example": "“No real conservative would vote for that.” The vote happened; the sentence has quietly moved the boundary so it cannot count against the brand.",
    "cite": {
      "label": "Wikipedia · No true Scotsman",
      "url": "https://en.wikipedia.org/wiki/No_true_Scotsman"
    },
    "summary": "Informal · Faulty generalization fallacy: Protecting a generalisation from counterexamples by redefining the category until the counterexamples fall outside...",
    "confusedWith": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "tell": "The straw man weakens the opponent’s claim; the Scotsman strengthens the speaker’s, by shrinking the group until the counterexample is expelled.",
        "path": "/fallacies/straw-man/"
      }
    ],
    "related": [
      {
        "term": "Moving the goalposts",
        "slug": "moving-the-goalposts",
        "path": "/fallacies/moving-the-goalposts/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      }
    ]
  },
  {
    "term": "Appeal to tradition",
    "slug": "appeal-to-tradition",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-tradition/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 103,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: argumentum ad antiquitatem - the old is treated as the proven.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A practice is being questioned and its defenders have no account of why it works."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The argument’s only support is that the practice has always been there."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the practice does now. Duration is a reason to be careful, not a reason to stop asking."
      }
    ],
    "voice": "The argument’s only support is that the practice has always been there.",
    "senses": [
      "Treating a practice as correct because it is old, without showing that age is evidence of anything.",
      "It works because inherited arrangements carry the weight of everyone who lived with them. Age is genuine information about endurance; it is not information about fairness or function."
    ],
    "notes": [],
    "example": "“We have always opened with a prayer.” The question was whether the chamber should, and always is not an answer to should.",
    "cite": {
      "label": "Wikipedia · Appeal to tradition",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_tradition"
    },
    "summary": "Informal · Red herring fallacy: Treating a practice as correct because it is old, without showing that age is evidence of anything.",
    "confusedWith": [
      {
        "term": "Appeal to nature",
        "slug": "appeal-to-nature",
        "tell": "Tradition says it is old, nature says it is natural; both replace a reason with a pedigree.",
        "path": "/fallacies/appeal-to-nature/"
      }
    ],
    "related": [
      {
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Blueslip",
        "slug": "blueslip",
        "path": "/abilities/blueslip/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "Appeal to nature",
    "slug": "appeal-to-nature",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-nature/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 104,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "Latin: argumentum ad naturam - the natural is treated as the good, as though the word carried a verdict.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A product, practice, or hierarchy needs a justification."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The justification is a claim about what is natural, with no account of why natural is good."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which part of nature is the model. Nature also contains arsenic, parasites, and every hierarchy that ever existed."
      }
    ],
    "voice": "The justification is a claim about what is natural, with no account of why natural is good.",
    "senses": [
      "Concluding that something is right or healthy because it is natural, or wrong because it is artificial.",
      "It works because “natural” smuggles in a standard it never defends. Nature is a description; the sentence spends it as an endorsement."
    ],
    "notes": [],
    "example": "“It is natural for people to sort themselves by tribe.” It is also natural to die of an infected cut, and we stopped doing that on purpose.",
    "cite": {
      "label": "Wikipedia · Appeal to nature",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_nature"
    },
    "summary": "Informal · Red herring fallacy: Concluding that something is right or healthy because it is natural, or wrong because it is artificial.",
    "confusedWith": [
      {
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "tell": "Tradition cites age, nature cites origin; both answer a question about value with a question about ancestry.",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "related": [
      {
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Freetard",
        "slug": "freetard",
        "path": "/species/freetard/"
      }
    ]
  },
  {
    "term": "Proof by assertion",
    "slug": "proof-by-assertion",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/proof-by-assertion/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 105,
    "sort": {
      "impact": 3,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "From mathematics, where a proof is a demonstration - and this is the counterfeit: the conclusion, repeated.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "The claim cannot be supported and must not be conceded."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The same sentence returns, louder, with no new reason attached."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the reason once, then note that none has arrived. Repetition is not a premise, and saying so out loud is usually enough."
      }
    ],
    "voice": "The same sentence returns, louder, with no new reason attached.",
    "senses": [
      "Repeating a claim with confidence as though repetition were support, and treating objection as noise.",
      "It works because certainty is contagious. An audience without the means to check infers from composure that there is something to check against."
    ],
    "notes": [],
    "example": "“It is the worst deal in history. The worst deal. Everybody knows it is the worst deal.” Four sentences, one assertion, zero evidence.",
    "cite": {
      "label": "Wikipedia · Proof by assertion",
      "url": "https://en.wikipedia.org/wiki/Proof_by_assertion"
    },
    "summary": "Informal · Presumption fallacy: Repeating a claim with confidence as though repetition were support, and treating objection as noise.",
    "confusedWith": [
      {
        "term": "Circular reasoning",
        "slug": "circular-reasoning",
        "tell": "The assertion adds no support and repeats itself; the circle adds a step and returns to the start.",
        "path": "/fallacies/circular-reasoning/"
      }
    ],
    "related": [
      {
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bluecheck",
        "slug": "bluecheck",
        "path": "/buffs/bluecheck/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Pseudo-event",
        "slug": "pseudo-event",
        "path": "/habitats/pseudo-event/"
      }
    ]
  },
  {
    "term": "Sunk cost fallacy",
    "slug": "sunk-cost-fallacy",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/sunk-cost-fallacy/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 106,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "From accounting: money already spent is gone, and no decision can bring it back.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Statistical"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A strategy has failed and its defenders are counting what it cost to start."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The case for continuing is entirely about the past, and the future is not mentioned."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what you would do if the sunk cost did not exist. That answer is the decision; the ledger is history."
      }
    ],
    "voice": "The case for continuing is entirely about the past, and the future is not mentioned.",
    "senses": [
      "Continuing a failing course of action because of what has already been invested in it.",
      "It works because abandoning a cost feels like admitting the cost was wasted. The loss is already real; the sentence only makes it feel avoidable."
    ],
    "notes": [],
    "example": "“We cannot withdraw now, after everything we have spent.” The spending is the reason the account is empty, not the reason to keep filling it.",
    "cite": {
      "label": "Wikipedia · Sunk cost",
      "url": "https://en.wikipedia.org/wiki/Sunk_cost"
    },
    "summary": "Informal · Statistical fallacy: Continuing a failing course of action because of what has already been invested in it.",
    "confusedWith": [
      {
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "tell": "Tradition binds the future to the distant past; sunk cost binds it to expenses still inside the fiscal year.",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "related": [
      {
        "term": "Post hoc ergo propter hoc",
        "slug": "post-hoc-ergo-propter-hoc",
        "path": "/fallacies/post-hoc-ergo-propter-hoc/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      }
    ]
  },
  {
    "term": "I'm entitled to my opinion",
    "slug": "im-entitled-to-my-opinion",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/im-entitled-to-my-opinion/",
    "chapter": "performative-identity",
    "chapterRoman": "I",
    "chapterTitle": "Performative Identity & Weaponized Liberty",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 107,
    "sort": {
      "impact": 2,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "A legal phrase spent as an epistemic one: the right to hold a view is offered as a reason it cannot be challenged.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A factual claim has been challenged with evidence."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply asserts a right rather than an argument, and the evidence is left standing."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Grant the right and return to the claim: opinions are free, and claims are still true or false."
      }
    ],
    "voice": "The reply asserts a right rather than an argument, and the evidence is left standing.",
    "senses": [
      "Ending a dispute about facts by asserting the right to hold an opinion, as though the right settled the question.",
      "It works because the entitlement is real. Everyone is entitled to their opinion, and nobody is entitled to their own facts - the sentence fuses the two so the second disappears into the first."
    ],
    "notes": [],
    "example": "“I am entitled to my opinion.” You are. The water is still poisoned, and the entitlement has not tested it.",
    "cite": {
      "label": "Wikipedia · I'm entitled to my opinion",
      "url": "https://en.wikipedia.org/wiki/I%27m_entitled_to_my_opinion"
    },
    "summary": "Informal · Red herring fallacy: Ending a dispute about facts by asserting the right to hold an opinion, as though the right settled the question.",
    "confusedWith": [
      {
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "tell": "The assertion defends the claim; the entitlement defends the person holding it.",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "related": [
      {
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      }
    ]
  },
  {
    "term": "Sophistroll",
    "slug": "sophistroll",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/sophistroll/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˈsɒf.ɪ.stroʊl/",
    "position": 1,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Blend of \"sophist\" + \"troll\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A thread where winning is cheaper than being right."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I’m just asking questions.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Moves the goalpost, never the argument",
          "One straw man, three fallacies",
          "Treats volume as evidence"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what would settle it, then settle it. The troll needs the argument to continue; the answer is to end it."
      }
    ],
    "voice": "“I’m just asking questions.”",
    "senses": [
      "A bad-faith debater whose sole tactic is deploying logical fallacies - such as straw men, whataboutism, ad hominem attacks, and moving the goalposts - to derail discussions and frustrate opponents rather than engage with facts.",
      "Someone who treats debate as a game of rhetorical attrition, relying on volume, deflection, and deceptive reasoning to claim victory while avoiding the actual issue."
    ],
    "notes": [],
    "example": "“You can’t have a productive discussion with a **sophistroll**; the second you disprove his point, he’ll pivot to three different straw men and an ad hominem attack.”",
    "cite": null,
    "summary": "A bad-faith debater whose sole tactic is deploying logical fallacies - such as straw men, whataboutism, ad hominem attacks, and moving the goalposts...",
    "confusedWith": [
      {
        "term": "Illogician",
        "slug": "illogician",
        "tell": "The sophistroll knows the fallacy is a fallacy; the illogician believes it.",
        "path": "/species/illogician/"
      }
    ],
    "related": [
      {
        "term": "JAQing off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "term": "Equivangelist",
        "slug": "equivangelist",
        "path": "/species/equivangelist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "path": "/fallacies/ad-hominem/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Whataboutism",
        "slug": "whataboutism",
        "path": "/fallacies/whataboutism/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The moderator",
        "slug": "the-moderator",
        "path": "/keystones/the-moderator/"
      }
    ]
  },
  {
    "term": "Illogician",
    "slug": "illogician",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/illogician/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˌɪl.əˈdʒɪʃ.ən/",
    "position": 2,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"illogical\" + \"logician\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A claim that sounds settled, delivered to a room that will not check it."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Do your own research.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Confuses confidence with proof",
          "Anecdote over data, always",
          "Debates the definition, not the claim"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the best single source and read it together. Research is a task, and a task handed to the audience is not an argument."
      }
    ],
    "voice": "“Do your own research.”",
    "senses": [
      "A self-styled “rational thinker” or debater who treats broken reasoning as a fine art - deploying a relentless barrage of logical fallacies with the smug confidence of a formal philosopher while completely missing the point.",
      "Someone who mistakes loud, circular, or fallacious arguments for intellectual superiority, using pseudo-academic jargon to disguise the fact that their premise collapses under five seconds of scrutiny."
    ],
    "notes": [],
    "example": "“He spent twenty minutes smugly lecturing the thread about ‘facts and logic’ while committing four textbook fallacies per paragraph - a true **illogician** at work.”",
    "cite": null,
    "summary": "A self-styled “rational thinker” or debater who treats broken reasoning as a fine art - deploying a relentless barrage of logical fallacies with the...",
    "confusedWith": [
      {
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "tell": "Both skip the evidence; the illogician has a method, the brofessor has a mood.",
        "path": "/species/trust-me-brofessor/"
      }
    ],
    "related": [
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Circular reasoning",
        "slug": "circular-reasoning",
        "path": "/fallacies/circular-reasoning/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False dilemma",
        "slug": "false-dilemma",
        "path": "/fallacies/false-dilemma/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to ridicule",
        "slug": "appeal-to-ridicule",
        "path": "/fallacies/appeal-to-ridicule/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to the stone",
        "slug": "appeal-to-the-stone",
        "path": "/fallacies/appeal-to-the-stone/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The librarian",
        "slug": "the-librarian",
        "path": "/keystones/the-librarian/"
      }
    ]
  },
  {
    "term": "JAQing Off",
    "slug": "jaqing-off",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/jaqing-off/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "verb phrase / gerund",
    "ipa": "/ˈdʒæk.ɪŋ ɒf/",
    "position": 3,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"JAQ\" [\"Just Asking Questions\"] + vulgar slang \"jacking off\"",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A claim the speaker cannot defend has just been said plainly, and the room has noticed."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "Questions shaped like accusations - “just asking” - and never the claim itself. Ask for evidence and it retreats behind the question."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer once, in writing, then ask what evidence would change their mind. The move dies when the question stops being cheaper than the answer."
      }
    ],
    "voice": "Questions shaped like accusations - “just asking” - and never the claim itself. Ask for evidence and it retreats behind the question.",
    "senses": [
      "The bad-faith rhetorical tactic of floating wild accusations, baseless smears, or conspiracy theories disguised as “innocent questions,” solely for self-gratification and plausible deniability - immediately retreating behind *“Hey, I’m just asking questions!”* the second anyone demands accountability.",
      "Weaponizing feigned curiosity to plant poisonous insinuations in an audience’s head without ever having to back them up with evidence, facts, or the courage to own the claim outright."
    ],
    "notes": [],
    "example": "“Instead of presenting a shred of evidence, the podcast host spent two hours **JAQing off** about rigged weather machines before hiding behind ‘I’m not saying it’s true, I’m just asking questions!’”",
    "cite": null,
    "summary": "The bad-faith rhetorical tactic of floating wild accusations, baseless smears, or conspiracy theories disguised as “innocent questions,” solely for...",
    "confusedWith": [
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "tell": "The sophistroll argues badly; the JAQer never argues at all, only asks.",
        "path": "/species/sophistroll/"
      }
    ],
    "related": [
      {
        "term": "Trust-me-brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "path": "/fallacies/argument-from-ignorance/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Sealioning",
        "slug": "sealioning",
        "path": "/fallacies/sealioning/"
      }
    ],
    "backlinks": [
      {
        "rel": "performs",
        "label": "Performed by",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ]
  },
  {
    "term": "Trust-Me-Brofessor",
    "slug": "trust-me-brofessor",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/trust-me-brofessor/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˌtrʌst.miː.broʊˈfɛs.ər/",
    "position": 4,
    "sort": {
      "impact": 3,
      "abuse": 5,
      "blowback": 4
    },
    "etymology": "Blend of \"trust me, bro\" + \"professor\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A claim that needs an authority it cannot name."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Trust me, bro.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Credentials never named",
          "One graph, no axis",
          "Cites a guy who cites him"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the name, the field, and the paper. Authority is checkable, and the check takes a minute."
      }
    ],
    "voice": "“Trust me, bro.”",
    "senses": [
      "An armchair authority with zero credentials, expertise, or verifiable knowledge who lectures others with absolute certainty - yet immediately deflects, stalls, or throws a tantrum the second they are asked to provide a single source, citation, or piece of data.",
      "A self-appointed expert whose entire bibliography consists of half-remembered memes, gut feelings, and the demand that you “do your own research” rather than hold them accountable for proving their own claims."
    ],
    "notes": [],
    "example": "“He spent three paragraphs lecturing virologists on how vaccines work, but the second someone asked for a single peer-reviewed study, the **trust-me-brofessor** told everyone to ‘look it up themselves.’”",
    "cite": null,
    "summary": "An armchair authority with zero credentials, expertise, or verifiable knowledge who lectures others with absolute certainty - yet immediately...",
    "confusedWith": [
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "tell": "The brofessor names no authority; the biasographer names every authority and discredits each.",
        "path": "/species/biasographer/"
      }
    ],
    "related": [
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      },
      {
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "path": "/fallacies/argument-from-ignorance/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Biasographer",
    "slug": "biasographer",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/biasographer/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˌbaɪ.əˈsɒɡ.rə.fər/",
    "position": 5,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "Blend of \"bias\" + \"biographer\" / \"bibliographer\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A finding that is inconvenient, and a speaker who would rather discuss the person who found it."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Consider the source.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Answers proof with a résumé",
          "Curates a bibliography, reads none",
          "Every source is compromised"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the claim gets wrong. The source’s history can be real and the claim can still be right, and only one of those is on the table."
      }
    ],
    "voice": "“Consider the source.”",
    "senses": [
      "An arguer who responds to requests for proof by producing a curated bibliography of hyper-partisan blogs, opinion pieces, and unverified fringe outlets - passing off pure ideological spin as rigorous, peer-reviewed truth.",
      "Someone who builds an entire “factual” narrative out of zoomed-in anomalies, cropped charts, and cherry-picked outliers while deliberately ignoring the broader, consensus data sets that dismantle their claim."
    ],
    "notes": [],
    "example": "“Don’t bother asking him for actual peer-reviewed studies; he’s a seasoned **biasographer** with a bookmark folder full of unhinged op-eds and cropped charts ready to deploy.”",
    "cite": null,
    "summary": "An arguer who responds to requests for proof by producing a curated bibliography of hyper-partisan blogs, opinion pieces, and unverified fringe...",
    "confusedWith": [
      {
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "tell": "The brofessor has no sources; the biasographer has a bibliography he has not read.",
        "path": "/species/trust-me-brofessor/"
      }
    ],
    "related": [
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      },
      {
        "term": "Mythstorian",
        "slug": "mythstorian",
        "path": "/species/mythstorian/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Texas sharpshooter fallacy",
        "slug": "texas-sharpshooter-fallacy",
        "path": "/fallacies/texas-sharpshooter-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Nut-picking",
        "slug": "nut-picking",
        "path": "/fallacies/nut-picking/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False attribution",
        "slug": "false-attribution",
        "path": "/fallacies/false-attribution/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Bleatkeeper",
    "slug": "bleatkeeper",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/bleatkeeper/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˈbliːtˌkiː.pər/",
    "position": 6,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 4
    },
    "etymology": "Blend of \"bleat\" + \"gatekeeper\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A correction that has just been published, in front of people who repeated the error."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Fake news.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Repeats the phrase, not the claim",
          "Never opens the link",
          "Corrects the correction"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Read the correction aloud, then ask what else they repeated. The phrase is not a reply to a story, and it does not survive being asked about one."
      }
    ],
    "voice": "“Fake news.”",
    "senses": [
      "A reality-denier who reflexively bleats “fake news” or “hoax” at overwhelming expert consensus, hard data, and primary evidence - guarding their echo chamber by claiming exclusive access to “what’s really going on.”",
      "An individual who parrots spoon-fed herd talking points while smugly lecturing the person holding the facts that *they* are too naive or brainwashed to understand the truth."
    ],
    "notes": [],
    "example": "“Even after being shown primary court records and decades of peer-reviewed data, the **bleatkeeper** dismissed it all as ‘fake news’ and patronizingly told the researcher to ‘wake up and learn how the world actually works.’”",
    "cite": null,
    "summary": "A reality-denier who reflexively bleats “fake news” or “hoax” at overwhelming expert consensus, hard data, and primary evidence - guarding their echo...",
    "confusedWith": [
      {
        "term": "Algodemic",
        "slug": "algodemic",
        "tell": "The bleatkeeper rejects the report; the algodemic rejects the method behind it, at greater length.",
        "path": "/species/algodemic/"
      }
    ],
    "related": [
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "term": "Trust-me-brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Records request",
        "slug": "records-request",
        "path": "/remedies/records-request/"
      }
    ]
  },
  {
    "term": "Equivangelist",
    "slug": "equivangelist",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/equivangelist/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ɪˈkwɪv.æn.dʒə.lɪst/",
    "position": 7,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"equivocate\" + \"evangelist\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A panel booked to be balanced, and a fact that arrived unbalanced."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Both sides do it.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Weighs a fact against a feeling",
          "Finds the middle of a mob",
          "Treats balance as truth"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which side the evidence is on. Symmetry is a claim about the evidence, not a courtesy owed to the guests."
      }
    ],
    "voice": "“Both sides do it.”",
    "senses": [
      "A pundit who evangelizes false equivalence, treating a documented fact and a fabricated claim as two sides that both deserve equal airtime - converting “both sides” from a reporting standard into a religious commitment.",
      "Someone who experiences moral asymmetry as bad manners, insisting that overwhelming evidence and baseless assertion be seated at the same table so that no conclusion can ever be reached and no one can ever be blamed."
    ],
    "notes": [],
    "example": "“Asked about a collapsed bridge and a rumor about one, the **equivangelist** spent the segment noting that both claims ‘raise real questions’ before cutting to commercial.”",
    "cite": null,
    "summary": "A pundit who evangelizes false equivalence, treating a documented fact and a fabricated claim as two sides that both deserve equal airtime...",
    "confusedWith": [
      {
        "term": "Capitulectual",
        "slug": "capitulectual",
        "tell": "The equivangelist weighs both sides; the capitulectual gives one away before weighing.",
        "path": "/species/capitulectual/"
      }
    ],
    "related": [
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      },
      {
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The steelman",
        "slug": "the-steelman",
        "path": "/remedies/the-steelman/"
      }
    ]
  },
  {
    "term": "Gallopologist",
    "slug": "gallopologist",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/gallopologist/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ɡəˈlɒp.ɒl.ə.dʒɪst/",
    "position": 8,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"gish gallop\" + \"-ologist\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A hearing or a podcast where the clock, and not the argument, decides when it ends."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“And another thing -”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Twelve claims, no sources",
          "Wins by exhausting the clock",
          "Changes the subject before the answer"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer one claim, and name which one. A gallop is a race against the clock; the counter is to stop running it."
      }
    ],
    "voice": "“And another thing -”",
    "senses": [
      "A debater who buries an opponent under a firehose of loosely related claims, each one cheap to make and expensive to refute, then declares victory when the clock runs out.",
      "Someone who mistakes the sheer volume of assertions for the strength of an argument, reading an opponent’s inability to keep up as an inability to answer."
    ],
    "notes": [],
    "example": "“In ninety seconds he cited eleven studies, four of which existed; the **gallopologist** called the moderator’s time limit ‘proof’ that he’d won.”",
    "cite": null,
    "summary": "A debater who buries an opponent under a firehose of loosely related claims, each one cheap to make and expensive to refute, then declares victory...",
    "confusedWith": [
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "tell": "The sophistroll derails with fallacies; the gallopologist derails with claims, too many and too fast.",
        "path": "/species/sophistroll/"
      }
    ],
    "related": [
      {
        "term": "JAQing off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "term": "Trust-me-brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Anecdotal evidence",
        "slug": "anecdotal-evidence",
        "path": "/fallacies/anecdotal-evidence/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Nut-picking",
        "slug": "nut-picking",
        "path": "/fallacies/nut-picking/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Cloture",
        "slug": "cloture",
        "path": "/abilities/cloture/"
      }
    ]
  },
  {
    "term": "Decorumancer",
    "slug": "decorumancer",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/decorumancer/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˈdɛk.ər.əm.ˌæn.sər/",
    "position": 9,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"decorum\" + \"necromancer\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A meeting where someone has just raised their voice about something that was done to them."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Let’s keep this civil.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Polite tone, hostile substance",
          "Cites procedure, never the record",
          "Calls anger unprofessional"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer the substance first, then the tone. Civility is a rule for how to disagree, not a reason not to."
      }
    ],
    "voice": "“Let’s keep this civil.”",
    "senses": [
      "Someone who conjures civility and procedure to shut down anger that happens to be correct - insisting on tone, process, and “respectful disagreement” as the only legitimate response to open cruelty.",
      "A moderator by temperament who treats the volume of a protest as a graver offense than the thing being protested, turning decorum into a weapon against the people it excludes."
    ],
    "notes": [],
    "example": "“The panel spent four minutes on the policy and twenty on whether the audience’s booing was ‘divisive’ - a textbook **decorumancer** performance.”",
    "cite": null,
    "summary": "Someone who conjures civility and procedure to shut down anger that happens to be correct - insisting on tone, process, and “respectful disagreement”...",
    "confusedWith": [
      {
        "term": "Equivangelist",
        "slug": "equivangelist",
        "tell": "The equivangelist calls it balance; the decorumancer calls it procedure.",
        "path": "/species/equivangelist/"
      }
    ],
    "related": [
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "term": "Capitulectual",
        "slug": "capitulectual",
        "path": "/species/capitulectual/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tone policing",
        "slug": "tone-policing",
        "path": "/fallacies/tone-policing/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Discharge petition",
        "slug": "discharge-petition",
        "path": "/abilities/discharge-petition/"
      }
    ]
  },
  {
    "term": "Comment section",
    "slug": "comment-section",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/comment-section/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˈkɒm.ɛnt ˌsɛk.ʃən/",
    "position": 10,
    "sort": {
      "impact": 3,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "English: the box under the article - named for the conversation it was meant to continue.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "Article comments, video replies, live chats, and the replies under the replies."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Engagement: replies, quote-posts, dwell time. Nobody in it is being paid, and everything in it is being monetised."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "One sentence, no context, and a number next to a username."
      }
    ],
    "voice": "One sentence, no context, and a number next to a username.",
    "senses": [
      "The space under a published thing where the public answers it in public, at a speed and volume that no editor ever intended.",
      "It rewards the reply that travels over the reply that is right. Because the cheapest sentence to write is a verdict, the habitat selects for verdicts - which is why so many of the fallacies filed at the end of this chapter are at home here."
    ],
    "notes": [],
    "example": "“Four hundred comments under a budget story, and not one of them about the budget - three about the mayor’s brother, two hundred about each other, and a bot selling a supplement.”",
    "cite": null,
    "summary": "The space under a published thing where the public answers it in public, at a speed and volume that no editor ever intended.",
    "confusedWith": [
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "tell": "The panel is paced and produced; the comment section is feral and asynchronous. Both are venues for the verdict.",
        "path": "/habitats/cable-panel/"
      }
    ],
    "related": [
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "path": "/fallacies/ad-hominem/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Whataboutism",
        "slug": "whataboutism",
        "path": "/fallacies/whataboutism/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Sealioning",
        "slug": "sealioning",
        "path": "/fallacies/sealioning/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Nut-picking",
        "slug": "nut-picking",
        "path": "/fallacies/nut-picking/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to the stone",
        "slug": "appeal-to-the-stone",
        "path": "/fallacies/appeal-to-the-stone/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Vaguebooking",
        "slug": "vaguebooking",
        "path": "/moves/vaguebooking/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Receiptbomb",
        "slug": "receiptbomb",
        "path": "/moves/receiptbomb/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Motte hop",
        "slug": "motte-hop",
        "path": "/moves/motte-hop/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Bothsidesing",
    "slug": "bothsidesing",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/bothsidesing/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈbəʊθ.saɪ.dɪŋ/",
    "position": 11,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "Blend of \"both sides\" + the \"-ing\" of an argument still running",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A fact has just been stated plainly, and the segment has two chairs to fill."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "“Well, to be fair -” arrives before the fact is acknowledged. The two sides are named, weighed, and never once measured."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which side the evidence is on, and whether the question was ever symmetric to begin with."
      }
    ],
    "voice": "“Well, to be fair -” arrives before the fact is acknowledged. The two sides are named, weighed, and never once measured.",
    "senses": [
      "The move of answering a documented fact with the existence of a contrary claim, as though the claim’s existence were evidence of its weight.",
      "It works because fairness is a procedure and procedures are easier to perform than judgments. The panel that gives equal time feels impartial to the audience and safe to the sponsor, and the fact leaves the room exactly as contested as it arrived."
    ],
    "notes": [],
    "example": "“Asked about the audit, the host **bothsidesed** it: two minutes for the accountant, two for the man who says audits are a myth, and a promise to keep following the story.”",
    "cite": null,
    "summary": "The move of answering a documented fact with the existence of a contrary claim, as though the claim’s existence were evidence of its weight.",
    "confusedWith": [
      {
        "term": "Equivangelist",
        "slug": "equivangelist",
        "tell": "The equivangelist preaches the symmetry as a virtue; the bothsideser performs it as a booking decision.",
        "path": "/species/equivangelist/"
      }
    ],
    "related": [
      {
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      },
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False balance",
        "slug": "false-balance",
        "path": "/fallacies/false-balance/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument to moderation",
        "slug": "argument-to-moderation",
        "path": "/fallacies/argument-to-moderation/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Spin room",
        "slug": "spin-room",
        "path": "/habitats/spin-room/"
      }
    ]
  },
  {
    "term": "Vaguebooking",
    "slug": "vaguebooking",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/vaguebooking/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈveɪɡ.bʊk.ɪŋ/",
    "position": 12,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"vague\" + \"Facebook\" + the \"-ing\" of a status update",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "Something has gone wrong with a person who is present in the feed but not in the room."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A post about “some people” and “certain behaviour”, with no names, no dates, and a comment section full of allies asking if they are okay."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask in public who, and what. The move only pays while the accusation stays unspecific enough to be unfalsifiable."
      }
    ],
    "voice": "A post about “some people” and “certain behaviour”, with no names, no dates, and a comment section full of allies asking if they are okay.",
    "senses": [
      "The move of publishing a grievance without its subject, so that every reader supplies the name they already suspected.",
      "It works because the audience does the accusing. The poster keeps deniability, the crowd does the damage, and the target cannot answer a sentence that was never finished."
    ],
    "notes": [],
    "example": "“No names, no context, just ‘some people showed their true colours today’ - and by evening three of us were **vaguebooking** about each other.”",
    "cite": null,
    "summary": "The move of publishing a grievance without its subject, so that every reader supplies the name they already suspected.",
    "confusedWith": [
      {
        "term": "JAQing Off",
        "slug": "jaqing-off",
        "tell": "The JAQer hides a claim inside a question; the vaguebooker hides one inside a mood.",
        "path": "/moves/jaqing-off/"
      }
    ],
    "related": [
      {
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The transcript",
        "slug": "the-transcript",
        "path": "/remedies/the-transcript/"
      }
    ]
  },
  {
    "term": "Receiptbomb",
    "slug": "receiptbomb",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/receiptbomb/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/rɪˈsiːt.bɒm/",
    "position": 13,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"receipts\", the slang for evidence, + \"bomb\"",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A claim has just been made that the other person could probably support, if anyone asked one question at a time."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "Forty screenshots, no captions, no order, and a demand to “do your own research” attached to the last one."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the single best screenshot and read it. The move depends on nobody reading all of them."
      }
    ],
    "voice": "Forty screenshots, no captions, no order, and a demand to “do your own research” attached to the last one.",
    "senses": [
      "The move of answering an argument with an unreadable quantity of genuine documentation, so that the reply costs more to check than the claim cost to make.",
      "It works because evidence has an optimum and the bomb goes well past it. A single document can be read and answered; forty cannot, and the unanswered pile looks exactly like a refutation."
    ],
    "notes": [],
    "example": "“He replied with forty-one screenshots, three of them duplicates and a link to a folder - a **receiptbomb** that took an hour to find the one paragraph that mattered in.”",
    "cite": null,
    "summary": "The move of answering an argument with an unreadable quantity of genuine documentation, so that the reply costs more to check than the claim cost to...",
    "confusedWith": [
      {
        "term": "Gallopologist",
        "slug": "gallopologist",
        "tell": "The gallopologist invents the claims; the receiptbomber buries real ones. Both win on volume.",
        "path": "/species/gallopologist/"
      }
    ],
    "related": [
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "Dead cat",
    "slug": "dead-cat",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/dead-cat/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/dɛd kæt/",
    "position": 14,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "From the strategy credited to the campaign strategist Lynton Crosby: to end an argument you are losing, put a dead cat on the table.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A story that will not stop, and a week that needs a different one."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "Something outrageous appears at eight in the morning, unrelated to the story it replaced, and the people who were answering questions stop answering them."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name the cat. Keep asking the original question, on the record, until the answer is on the record too."
      }
    ],
    "voice": "Something outrageous appears at eight in the morning, unrelated to the story it replaced, and the people who were answering questions stop answering them.",
    "senses": [
      "The move of putting something so shocking on the table that the conversation has to be about it: the story you were asked about is replaced by the thing nobody can stop looking at.",
      "It works because attention is finite and news is a queue. Coverage can only hold one thing at a time, so the object does not have to be relevant - it only has to be louder, and the agenda moves while the question stays unanswered. What changed was never the facts; it was what everyone was looking at."
    ],
    "notes": [],
    "example": "“The contract story was finally landing, and then a **dead cat** hit the table at eight in the morning - by noon nobody could remember what the contract said.”",
    "cite": null,
    "summary": "The move of putting something so shocking on the table that the conversation has to be about it: the story you were asked about is replaced by the...",
    "confusedWith": [
      {
        "term": "Slopagandist",
        "slug": "slopagandist",
        "tell": "The slopagandist drowns the zone in volume; the dead cat changes the subject with one loud object.",
        "path": "/species/slopagandist/"
      }
    ],
    "related": [
      {
        "term": "Trial balloon",
        "slug": "trial-balloon",
        "path": "/moves/trial-balloon/"
      },
      {
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ]
  },
  {
    "term": "Trial balloon",
    "slug": "trial-balloon",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/trial-balloon/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈtraɪ.əl bəˈluːn/",
    "position": 15,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "English: from ballooning, where a ballon d'essai is released to see which way the wind blows.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A policy that would be expensive to announce and cheap to deny."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "An unnamed official, a draft that “circulated”, and a story that is neither confirmed nor denied for exactly one day."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the name and the document. A balloon with an author is a policy; one without is a rumour with a schedule."
      }
    ],
    "voice": "An unnamed official, a draft that “circulated”, and a story that is neither confirmed nor denied for exactly one day.",
    "senses": [
      "The move of leaking a proposal to see how it lands: if the reaction is survivable, the leak becomes an announcement; if not, it was never the policy.",
      "It works because denial is free and attention is not. The public pays for the trial with a day of argument, and the office keeps both outcomes - the policy if it flies, the disavowal if it does not. The unnamed source is the mechanism, not the courtesy."
    ],
    "notes": [],
    "example": "“A **trial balloon** went up on a Sunday: a mileage tax, unnamed officials, no bill - and by Wednesday it was ‘not under consideration’.”",
    "cite": null,
    "summary": "The move of leaking a proposal to see how it lands: if the reaction is survivable, the leak becomes an announcement; if not, it was never the policy.",
    "confusedWith": [
      {
        "term": "Dead cat",
        "slug": "dead-cat",
        "tell": "The dead cat replaces the story in front of you; the trial balloon tests the story you are about to be given.",
        "path": "/moves/dead-cat/"
      }
    ],
    "related": [
      {
        "term": "Friday news dump",
        "slug": "friday-news-dump",
        "path": "/moves/friday-news-dump/"
      },
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Friday news dump",
    "slug": "friday-news-dump",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/friday-news-dump/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈfraɪ.deɪ njuːz dʌmp/",
    "position": 16,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "English: the hour after the last deadline, when the week's worst news gets filed.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A story that has to be released and must not be discussed."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A 5:40 p.m. Friday email, a PDF with no summary, and a press office that has stopped answering the phone."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Read it on Saturday. Publish the number rather than the timing - the dump only works if the story is allowed to arrive on its own schedule."
      }
    ],
    "voice": "A 5:40 p.m. Friday email, a PDF with no summary, and a press office that has stopped answering the phone.",
    "senses": [
      "The move of releasing inconvenient information at the end of the week, when the audience is gone and the reporters who remain are tired.",
      "It works because attention has a shape. Friday evening is the bottom of the news week, and a story that lands there gets one cycle instead of five - so the document is public and unnoticed at the same time, which is the whole design.",
      "The feed has bent this rather than broken it: the release is now permanent and searchable, so the dump no longer hides the story, it only starves it of the attention it would have had."
    ],
    "notes": [],
    "example": "“The settlement went out at 5:47 on a Friday, in a **Friday news dump** with a cover note that said ‘for immediate release’.”",
    "cite": null,
    "summary": "The move of releasing inconvenient information at the end of the week, when the audience is gone and the reporters who remain are tired.",
    "confusedWith": [
      {
        "term": "Nonpology",
        "slug": "nonpology",
        "tell": "The nonpology buries the harm in the wording; the dump buries it in the timing.",
        "path": "/moves/nonpology/"
      }
    ],
    "related": [
      {
        "term": "Trial balloon",
        "slug": "trial-balloon",
        "path": "/moves/trial-balloon/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Astroturfing",
    "slug": "astroturfing",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/astroturfing/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈæs.trəʊˌtɜː.fɪŋ/",
    "position": 17,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "From Astroturf, the artificial grass - a grassroots movement with the lawn manufactured.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A decision that needs to look like it has a constituency."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A burst of new accounts using the same phrase, a “local” group with a Washington address, and a comment section that agrees too quickly."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask who is paying, and when the group was incorporated. Grassroots has a membership list; astroturf has an invoice."
      }
    ],
    "voice": "A burst of new accounts using the same phrase, a “local” group with a Washington address, and a comment section that agrees too quickly.",
    "senses": [
      "The move of manufacturing the appearance of a movement: front groups, purchased lists, rented crowds, and comment sections that arrive on schedule.",
      "It works because numbers are read as consent. A legislator cannot count the people behind the letters, so forty identical emails from forty constituents and forty from a vendor look the same in the inbox - and the vendor knows it."
    ],
    "notes": [],
    "example": "“Two hundred identical letters, three local groups sharing a PO box, and an **astroturfing** campaign that one staffer had drafted on a Tuesday.”",
    "cite": null,
    "summary": "The move of manufacturing the appearance of a movement: front groups, purchased lists, rented crowds, and comment sections that arrive on schedule.",
    "confusedWith": [
      {
        "term": "Rally",
        "slug": "rally",
        "tell": "The rally is a crowd that showed up; astroturfing is a crowd that was ordered.",
        "path": "/habitats/rally/"
      }
    ],
    "related": [
      {
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ]
  },
  {
    "term": "Motte hop",
    "slug": "motte-hop",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/motte-hop/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈmɒt hɒp/",
    "position": 18,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "From the motte-and-bailey castle: the defensible tower and the indefensible yard, and the walk between them.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A claim has just been challenged by someone who can reach the evidence."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "The bold claim is restated as a modest one, the modest one is defended, and the bold one returns when the challenger leaves."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Write both versions down, and ask which one the argument was for. The hop is only invisible while nobody keeps the receipt."
      }
    ],
    "voice": "The bold claim is restated as a modest one, the modest one is defended, and the bold one returns when the challenger leaves.",
    "senses": [
      "The move of retreating from an indefensible claim to a defensible one, winning the argument about the small claim, then re-advancing the large one once the pressure is off.",
      "It works because each step is individually reasonable. Nobody has to defend the yard if they can be seen defending the tower, and the audience remembers the exchange as a win for the side that never left the tower."
    ],
    "notes": [],
    "example": "“He said the policy was a plot, then said he only meant it was a mistake, then said the plot again on Friday - a **motte hop** in three acts.”",
    "cite": null,
    "summary": "The move of retreating from an indefensible claim to a defensible one, winning the argument about the small claim, then re-advancing the large one...",
    "confusedWith": [
      {
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "tell": "The fallacy is the structure; the hop is the performance. One is named in the literature, the other is what you watch happen in a thread.",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      }
    ],
    "related": [
      {
        "term": "Equivangelist",
        "slug": "equivangelist",
        "path": "/species/equivangelist/"
      },
      {
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "term": "Moving the goalposts",
        "slug": "moving-the-goalposts",
        "path": "/fallacies/moving-the-goalposts/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "Heckler's veto",
    "slug": "hecklers-veto",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/hecklers-veto/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": "/ˈhɛk.ləz ˈviː.təʊ/",
    "position": 19,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "English: the heckler who does not win the argument, and ends the event instead.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A speaker whose event can be shut down more cheaply than it can be answered."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A chant timed to the microphone, a fire alarm at the right minute, and a venue that decides the booking is not worth the police."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Do not cancel. Move the room, publish the transcript, and let the disruption cost the disruptor the audience."
      }
    ],
    "voice": "A chant timed to the microphone, a fire alarm at the right minute, and a venue that decides the booking is not worth the police.",
    "senses": [
      "The move of making speech impossible rather than answering it: enough disruption that the venue, the police, or the platform decides the event is not worth holding.",
      "It works because the cost is carried by somebody else. The heckler risks a fine; the organiser risks the insurance, and the calculation that ends the event is made by a third party who was never part of the argument."
    ],
    "notes": [],
    "example": "“The talk was cancelled ninety minutes before it started, not because anyone won the argument but because the **heckler’s veto** made the room uninsurable.”",
    "cite": null,
    "summary": "The move of making speech impossible rather than answering it: enough disruption that the venue, the police, or the platform decides the event is not...",
    "confusedWith": [
      {
        "term": "Decorumancer",
        "slug": "decorumancer",
        "tell": "The decorumancer silences with the rule; the heckler’s veto silences with the noise the rule cannot stop.",
        "path": "/species/decorumancer/"
      }
    ],
    "related": [
      {
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      },
      {
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      }
    ]
  },
  {
    "term": "Flood the zone",
    "slug": "flood-the-zone",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/flood-the-zone/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "verb phrase / gerund",
    "ipa": "/flʌd ðə zəʊn/",
    "position": 20,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "From the advice attributed to Steve Bannon: drown the press in so much material that nothing can be checked.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A story that has to be survived rather than answered, and a press corps with finite hours."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "Eleven announcements in one afternoon, three of them real, and a briefing that outruns the fact-checkers by design."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Pick one thread and pull it to the end. A flood is only a defence if the other side tries to drink all of it."
      }
    ],
    "voice": "Eleven announcements in one afternoon, three of them real, and a briefing that outruns the fact-checkers by design.",
    "senses": [
      "The move of releasing more than anyone can process: real stories, fake stories and irrelevant stories in the same hour, so the true ones cannot be separated in time to matter.",
      "It works because verification is slower than publication. Each item costs the press minutes to check and the source seconds to produce, and that asymmetry is the whole tactic - the flood does not have to convince anybody, only to keep them busy."
    ],
    "notes": [],
    "example": "“Nine press releases before noon, two of them true, and **flood the zone** worked exactly as designed: by Friday the story was a list nobody had finished.”",
    "cite": null,
    "summary": "The move of releasing more than anyone can process: real stories, fake stories and irrelevant stories in the same hour, so the true ones cannot be...",
    "confusedWith": [
      {
        "term": "Slopagandist",
        "slug": "slopagandist",
        "tell": "The slopagandist fills the feed with volume for money; flooding the zone fills it with volume for cover.",
        "path": "/species/slopagandist/"
      }
    ],
    "related": [
      {
        "term": "Dead cat",
        "slug": "dead-cat",
        "path": "/moves/dead-cat/"
      },
      {
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      }
    ]
  },
  {
    "term": "Ad hominem",
    "slug": "ad-hominem",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/ad-hominem/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 101,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "Latin: argumentum ad hominem, “argument to the person” - the target moves from the claim to the one who made it.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has just been made that cannot be answered on the merits."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply contains no content about the claim, only about the claimant."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Restate the claim and ask what is wrong with it. Character is a separate question, and it can be answered later, by evidence."
      }
    ],
    "voice": "The reply contains no content about the claim, only about the claimant.",
    "senses": [
      "Answering an argument by attacking the person who advanced it rather than the claim they advanced.",
      "It works because people are credulous about character: once you dislike the speaker, their sentence loses weight even when it is true. The claim is never touched, so it is never answered."
    ],
    "notes": [],
    "example": "“You want to talk about the audit? You were late on your taxes in 2011.” The audit is still late, and now nobody is looking at it.",
    "cite": {
      "label": "Wikipedia · Ad hominem",
      "url": "https://en.wikipedia.org/wiki/Ad_hominem"
    },
    "summary": "Informal · Red herring fallacy: Answering an argument by attacking the person who advanced it rather than the claim they advanced.",
    "confusedWith": [
      {
        "term": "Tone policing",
        "slug": "tone-policing",
        "tell": "Ad hominem attacks the person’s record or character; tone policing attacks the manner of the delivery.",
        "path": "/fallacies/tone-policing/"
      }
    ],
    "related": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "Straw man",
    "slug": "straw-man",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/straw-man/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 102,
    "sort": {
      "impact": 5,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "From the training dummy: a figure stuffed with straw is easier to knock down than the man holding the argument.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "An opponent’s position is paraphrased before it is answered."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The refutation lands cleanly, and the person refuted never said the thing."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Quote the position back in its own words and ask whether the reply still lands. If it does not, the reply was aimed elsewhere."
      }
    ],
    "voice": "The refutation lands cleanly, and the person refuted never said the thing.",
    "senses": [
      "Replacing someone’s position with a weaker, sillier version of it and then defeating the version you built.",
      "It works because the audience rarely holds the original wording in mind. Whoever supplies the paraphrase controls what gets refuted, so an argument can be lost without ever being made."
    ],
    "notes": [],
    "example": "“They want to fund the libraries because they think books are free and nobody should work.” Nobody said that. The library budget passed anyway, because the argument on the table was the straw one.",
    "cite": {
      "label": "Wikipedia · Straw man",
      "url": "https://en.wikipedia.org/wiki/Straw_man"
    },
    "summary": "Informal · Red herring fallacy: Replacing someone’s position with a weaker, sillier version of it and then defeating the version you built.",
    "confusedWith": [
      {
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "tell": "The straw man misstates a position you reject; the motte retreats to a modest claim you never disputed.",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      }
    ],
    "related": [
      {
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      },
      {
        "term": "False dilemma",
        "slug": "false-dilemma",
        "path": "/fallacies/false-dilemma/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      }
    ]
  },
  {
    "term": "Appeal to authority",
    "slug": "appeal-to-authority",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-authority/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 103,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Latin: argumentum ad verecundiam, an appeal to deference - the argument from the shame of disagreeing with a great name.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A name with standing is available and the evidence is not."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The credentials arrive before the findings, and the findings never arrive."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the expert’s evidence is, and whether their expertise covers this question. A title is a pointer to evidence, not a substitute for it."
      }
    ],
    "voice": "The credentials arrive before the findings, and the findings never arrive.",
    "senses": [
      "Treating a claim as settled because someone respected said it, in place of the evidence that made them worth respecting.",
      "It works because expertise is a genuine shortcut: nobody can verify everything, so we trust the people who did. The fallacy is trusting the title outside the field, or after the field has moved."
    ],
    "notes": [],
    "example": "“A Nobel laureate says the water is safe.” He holds the prize in economics. The water has never met him.",
    "cite": {
      "label": "Wikipedia · Appeal to authority",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_authority"
    },
    "summary": "Informal · Red herring fallacy: Treating a claim as settled because someone respected said it, in place of the evidence that made them worth respecting.",
    "confusedWith": [
      {
        "term": "Circular reasoning",
        "slug": "circular-reasoning",
        "tell": "Authority outsources the premises to a person; the circle outsources them to the conclusion itself.",
        "path": "/fallacies/circular-reasoning/"
      }
    ],
    "related": [
      {
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "path": "/fallacies/argument-from-ignorance/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Cronycle",
        "slug": "cronycle",
        "path": "/abilities/cronycle/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bluecheck",
        "slug": "bluecheck",
        "path": "/buffs/bluecheck/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Frankincense",
        "slug": "frankincense",
        "path": "/buffs/frankincense/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Access",
        "slug": "access",
        "path": "/buffs/access/"
      }
    ]
  },
  {
    "term": "False dilemma",
    "slug": "false-dilemma",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/false-dilemma/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 104,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Also the either-or fallacy: the Greek dilemma names two horns, and the trick is to admit only two.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A decision is framed as a choice between the speaker’s option and a disaster."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The sentence has exactly two branches, and one of them is unthinkable."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name the third option out loud. A dilemma dies the moment a listener can see a door in the wall."
      }
    ],
    "voice": "The sentence has exactly two branches, and one of them is unthinkable.",
    "senses": [
      "Presenting a choice between two options when more exist, so that refusing one is treated as choosing the other.",
      "It works by shrinking the field. Most real disputes have a third, boring option - wait, fund it differently, do half of it - and the boring option is exactly what the dilemma is built to hide."
    ],
    "notes": [],
    "example": "“You are either with us or with the terrorists.” There is a third position - a citizen with a question about the evidence - and the sentence has just made it unsayable.",
    "cite": {
      "label": "Wikipedia · False dilemma",
      "url": "https://en.wikipedia.org/wiki/False_dilemma"
    },
    "summary": "Informal · Presumption fallacy: Presenting a choice between two options when more exist, so that refusing one is treated as choosing the other.",
    "confusedWith": [
      {
        "term": "False equivalence",
        "slug": "false-equivalence",
        "tell": "The dilemma collapses the field to two; equivalence claims those two weigh the same.",
        "path": "/fallacies/false-equivalence/"
      }
    ],
    "related": [
      {
        "term": "Argument to moderation",
        "slug": "argument-to-moderation",
        "path": "/fallacies/argument-to-moderation/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Crisisglow",
        "slug": "crisisglow",
        "path": "/buffs/crisisglow/"
      }
    ]
  },
  {
    "term": "Loaded question",
    "slug": "loaded-question",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/loaded-question/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 105,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Also the fallacy of many questions: a question that carries its conclusion in the presupposition.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Improper premise"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "The speaker wants a concession that cannot be asked for directly."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The question has an assumption in it, and every answer is an admission."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer the presupposition, not the question: “there is no plan yet, so the question does not apply.”"
      }
    ],
    "voice": "The question has an assumption in it, and every answer is an admission.",
    "senses": [
      "Asking a question that presupposes the very thing under dispute, so that any direct answer concedes it.",
      "It works because a question feels like an invitation, not an assertion. Answering accepts its frame; refusing looks evasive. The frame is the argument."
    ],
    "notes": [],
    "example": "“Why does your plan keep raising costs?” There is no plan yet. Answer the question and you have agreed there is one, and that it costs more.",
    "cite": {
      "label": "Wikipedia · Loaded question",
      "url": "https://en.wikipedia.org/wiki/Loaded_question"
    },
    "summary": "Informal · Improper premise fallacy: Asking a question that presupposes the very thing under dispute, so that any direct answer concedes it.",
    "confusedWith": [
      {
        "term": "Circular reasoning",
        "slug": "circular-reasoning",
        "tell": "Both smuggle the conclusion in; the loaded question does it through what it asks.",
        "path": "/fallacies/circular-reasoning/"
      }
    ],
    "related": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "JAQing Off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Push poll",
        "slug": "push-poll",
        "path": "/moves/push-poll/"
      }
    ]
  },
  {
    "term": "Circular reasoning",
    "slug": "circular-reasoning",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/circular-reasoning/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 106,
    "sort": {
      "impact": 3,
      "abuse": 2,
      "blowback": 4
    },
    "etymology": "Latin: circulus in probando, “a circle in the proving” - the premise and the conclusion take turns holding each other up.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Improper premise"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A conclusion is wanted and the evidence is thin."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "Follow the chain of because, and it arrives back where it started."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Write the argument as a numbered list of premises. The moment a premise repeats the conclusion, the circle is visible."
      }
    ],
    "voice": "Follow the chain of because, and it arrives back where it started.",
    "senses": [
      "Using a claim as its own support, often with an extra step so the circle is harder to see.",
      "It works because a short loop reads as an argument. Each sentence sounds like it is adding something, and the last one sounds like a conclusion because it is the last one."
    ],
    "notes": [],
    "example": "“The policy is sound because it is what serious people support, and serious people support it because it is sound.” Two sentences, one step each, no ground.",
    "cite": {
      "label": "Wikipedia · Circular reasoning",
      "url": "https://en.wikipedia.org/wiki/Circular_reasoning"
    },
    "summary": "Informal · Improper premise fallacy: Using a claim as its own support, often with an extra step so the circle is harder to see.",
    "confusedWith": [
      {
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "tell": "The circle restates itself; the appeal to authority borrows a person to stand where the premise should be.",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "related": [
      {
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      }
    ]
  },
  {
    "term": "Argument from ignorance",
    "slug": "argument-from-ignorance",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/argument-from-ignorance/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 107,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "Latin: argumentum ad ignorantiam - the absence of proof is offered as proof.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Nobody has produced evidence either way."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The conclusion rests on what has not been found."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask who holds the burden. A claim still needs support; an absence of evidence is evidence only when the evidence would be expected."
      }
    ],
    "voice": "The conclusion rests on what has not been found.",
    "senses": [
      "Treating a claim as true because it has not been proven false, or false because it has not been proven true.",
      "It works because the burden of proof feels like a formality. Most audiences assume a claim is either established or refuted, and the sentence supplies the third option, absence, as if it settled the matter."
    ],
    "notes": [],
    "example": "“Nobody has proven the machines are safe.” Nobody has proven them unsafe either; the sentence treats the missing study as a finding.",
    "cite": {
      "label": "Wikipedia · Argument from ignorance",
      "url": "https://en.wikipedia.org/wiki/Argument_from_ignorance"
    },
    "summary": "Informal · Relevance fallacy: Treating a claim as true because it has not been proven false, or false because it has not been proven true.",
    "confusedWith": [
      {
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "tell": "Both outsource the support; ignorance to a gap, authority to a person.",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "related": [
      {
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "JAQing Off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      }
    ]
  },
  {
    "term": "Tone policing",
    "slug": "tone-policing",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/tone-policing/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 108,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "From policing: the offence is not what was said but the manner of saying it.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring (ad hominem family)"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has landed and its content is inconvenient."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is about volume, spelling, or mood rather than the sentence that was said."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Separate the manner from the claim and answer the claim. If the manner really was the problem, it can be raised after."
      }
    ],
    "voice": "The reply is about volume, spelling, or mood rather than the sentence that was said.",
    "senses": [
      "Deflecting an argument by criticising how it was delivered - too angry, too shrill, too soon.",
      "It works because tone is a real problem sometimes and a distraction every time. The complaint is unfalsifiable, so answering it costs a turn and concedes the frame."
    ],
    "notes": [],
    "example": "“I agree with the concern, but the way you said it lost the room.” The room was lost by the sentence, not the volume, and the sentence is still standing.",
    "cite": {
      "label": "Wikipedia · Tone policing",
      "url": "https://en.wikipedia.org/wiki/Tone_policing"
    },
    "summary": "Informal · Red herring (ad hominem family) fallacy: Deflecting an argument by criticising how it was delivered - too angry, too shrill, too soon.",
    "confusedWith": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "tell": "Tone policing attacks how the speaker spoke; ad hominem attacks who the speaker is.",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "related": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Nonpology",
        "slug": "nonpology",
        "path": "/moves/nonpology/"
      }
    ]
  },
  {
    "term": "Motte-and-bailey fallacy",
    "slug": "motte-and-bailey-fallacy",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/motte-and-bailey-fallacy/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 109,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "From the medieval castle: a modest motte that is easy to defend, and a rich bailey that is not.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "The strong version of a claim has just been contested."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The position shrinks under pressure and grows again in the next conversation."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name both claims and ask which one is being defended. Accepting the motte does not concede the bailey."
      }
    ],
    "voice": "The position shrinks under pressure and grows again in the next conversation.",
    "senses": [
      "Advancing a strong, controversial claim, then retreating to a modest, uncontroversial one when challenged - and re-advancing the strong claim once the pressure is off.",
      "It works because the two claims are related. The retreat is sincere-sounding because the modest claim is genuinely held; the strong claim is never withdrawn, only set down."
    ],
    "notes": [],
    "example": "“Defund the police” argued, then “we only mean reallocating the overtime budget” defended, then argued again by Thursday.",
    "cite": {
      "label": "Wikipedia · Motte-and-bailey fallacy",
      "url": "https://en.wikipedia.org/wiki/Motte-and-bailey_fallacy"
    },
    "summary": "Informal · Presumption fallacy: Advancing a strong, controversial claim, then retreating to a modest, uncontroversial one when challenged - and re-advancing...",
    "confusedWith": [
      {
        "term": "Equivocation",
        "slug": "equivocation",
        "tell": "The motte switches between two claims; equivocation switches between two meanings of one word.",
        "path": "/fallacies/equivocation/"
      }
    ],
    "related": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Motte hop",
        "slug": "motte-hop",
        "path": "/moves/motte-hop/"
      }
    ]
  },
  {
    "term": "Texas sharpshooter fallacy",
    "slug": "texas-sharpshooter-fallacy",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/texas-sharpshooter-fallacy/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 110,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 5
    },
    "etymology": "From the marksman who fires into a barn and then paints the target around the tightest cluster.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A large dataset is available and a story is wanted."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The hypothesis was formed after the data was seen, and this is not mentioned."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the prediction was before the data arrived, and what the same measure shows in the cases not chosen."
      }
    ],
    "voice": "The hypothesis was formed after the data was seen, and this is not mentioned.",
    "senses": [
      "Finding a pattern in data after the fact, then presenting the pattern as though it had been predicted.",
      "It works because a cluster really is a cluster. With enough data, some grouping will be tight; the fallacy is the order of operations, which nobody can see in the finished result."
    ],
    "notes": [],
    "example": "“Crimes cluster around these three blocks.” So does every address in the city, when you draw the box around three blocks.",
    "cite": {
      "label": "Wikipedia · Texas sharpshooter fallacy",
      "url": "https://en.wikipedia.org/wiki/Texas_sharpshooter_fallacy"
    },
    "summary": "Informal · Faulty generalization fallacy: Finding a pattern in data after the fact, then presenting the pattern as though it had been predicted.",
    "confusedWith": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "tell": "The sharpshooter keeps all the data and moves the target; the cherry picker keeps the target and drops the data.",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "related": [
      {
        "term": "Post hoc ergo propter hoc",
        "slug": "post-hoc-ergo-propter-hoc",
        "path": "/fallacies/post-hoc-ergo-propter-hoc/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Gerrythm",
        "slug": "gerrythm",
        "path": "/abilities/gerrythm/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "path": "/abilities/judge-shopping/"
      }
    ]
  },
  {
    "term": "Poisoning the well",
    "slug": "poisoning-the-well",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/poisoning-the-well/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 111,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "From the siege tactic: foul the water before the argument arrives, and it never has to be fought.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Someone is about to be heard whose account would be inconvenient."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The discrediting arrives before the claim, and usually about something the audience cannot check."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name the move, then judge the claim on its evidence. Whatever the source did, the claim is still either true or false."
      }
    ],
    "voice": "The discrediting arrives before the claim, and usually about something the audience cannot check.",
    "senses": [
      "Discrediting a source in advance, so that anything they say afterwards is discounted before it is heard.",
      "It works because a prior doubt is hard to unhear. The audience now listens for confirmation of the warning rather than for the content, and the content is never engaged."
    ],
    "notes": [],
    "example": "“Before you read that report, remember who wrote it.” The report is unread and already dismissed; nobody has said what is wrong in it.",
    "cite": {
      "label": "Wikipedia · Poisoning the well",
      "url": "https://en.wikipedia.org/wiki/Poisoning_the_well"
    },
    "summary": "Informal · Red herring fallacy: Discrediting a source in advance, so that anything they say afterwards is discounted before it is heard.",
    "confusedWith": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "tell": "Poisoning the well attacks in advance and by implication; ad hominem answers something that was actually said.",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "related": [
      {
        "term": "Appeal to motive",
        "slug": "appeal-to-motive",
        "path": "/fallacies/appeal-to-motive/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Vaguebooking",
        "slug": "vaguebooking",
        "path": "/moves/vaguebooking/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Indictbump",
        "slug": "indictbump",
        "path": "/buffs/indictbump/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Push poll",
        "slug": "push-poll",
        "path": "/moves/push-poll/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Perp walk",
        "slug": "perp-walk",
        "path": "/habitats/perp-walk/"
      }
    ]
  },
  {
    "term": "Nut-picking",
    "slug": "nut-picking",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/nut-picking/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 112,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "From “nut” in the American sense: cherry picking the most extreme case and calling it the group.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A group’s worst member is easier to find than its actual position."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is a screenshot of someone unrepresentative, presented as the movement’s face."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask whether the case is typical, and who speaks for the group. If nobody does, the loudest member is a poor proxy."
      }
    ],
    "voice": "The reply is a screenshot of someone unrepresentative, presented as the movement’s face.",
    "senses": [
      "Judging a movement by its worst adherents, or defending it by its most reasonable ones.",
      "It works because the extreme case is vivid and the movement is large. Any sizeable group contains someone who will embarrass it, so the example is always available and never representative."
    ],
    "notes": [],
    "example": "“Look at this comment, this is what they all think.” One comment, four hundred thousand readers, no survey.",
    "cite": {
      "label": "Wikipedia · Nutpicking",
      "url": "https://en.wikipedia.org/wiki/Nutpicking"
    },
    "summary": "Informal · Faulty generalization fallacy: Judging a movement by its worst adherents, or defending it by its most reasonable ones.",
    "confusedWith": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "tell": "Nut-picking is cherry picking where the cherries are people, chosen for being the worst available.",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "related": [
      {
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "Sealioning",
    "slug": "sealioning",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/sealioning/",
    "chapter": "bad-faith-debate",
    "chapterRoman": "II",
    "chapterTitle": "Bad-Faith Debate & Epistemic Breakdown",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 113,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 1
    },
    "etymology": "From the webcomic: a sea lion follows you home, politely demanding that you justify yourself, forever.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Someone has made a point and stopped engaging."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "A polite question arrives, then another, each one requiring homework, none of them answering anything."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name the pattern, not the message: state that the questions are endless and invite one. Answering the tenth is what keeps it going."
      }
    ],
    "voice": "A polite question arrives, then another, each one requiring homework, none of them answering anything.",
    "senses": [
      "Demanding endless evidence and civility from an opponent while offering none, so the exchange becomes the punishment.",
      "It works because every single request is reasonable. Only the sequence is the tactic, and a sequence is invisible in any one message - which is why it is so hard to call out without looking rude."
    ],
    "notes": [],
    "example": "“I am just asking for a source. And for the methodology. And for the raw data. And for your credentials.” Four polite requests, one derailed argument.",
    "cite": {
      "label": "Wikipedia · Sealioning",
      "url": "https://en.wikipedia.org/wiki/Sealioning"
    },
    "summary": "Informal · Relevance fallacy: Demanding endless evidence and civility from an opponent while offering none, so the exchange becomes the punishment.",
    "confusedWith": [
      {
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "tell": "The shift hands over the burden once; sealioning hands it over indefinitely, one request at a time.",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      }
    ],
    "related": [
      {
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "JAQing Off",
        "slug": "jaqing-off",
        "path": "/moves/jaqing-off/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "Hypocontortionist",
    "slug": "hypocontortionist",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/hypocontortionist/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˌhɪp.oʊ.kənˈtɔːr.ʃən.ɪst/",
    "position": 1,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "Blend of \"hypocrite\" + \"contortionist\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A principle the speaker has just been caught applying to somebody else."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“That was different.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Principles that bend at the wallet",
          "Public austerity, private indulgence",
          "Repents only after the photo"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the difference is, and who it protects. The contortion only shows when the same rule is read twice."
      }
    ],
    "voice": "“That was different.”",
    "senses": [
      "A performative moralist capable of twisting their “unshakeable” core principles into a complete 180-degree pretzel the exact second their own side is caught violating them - all without a trace of self-awareness or shame.",
      "An ideological shape-shifter who weaponizes self-righteous outrage against opponents for minor infractions, only to perform Olympic-level mental gymnastics to excuse, praise, or ignore identical behavior from their allies or benefactors."
    ],
    "notes": [],
    "example": "“After spending years screaming about ‘law and order’ and ‘treason,’ the **hypocontortionist** instantly folded himself into a pretzel to insist that Trump’s latest authoritarian threat was ‘obviously just a joke.’”",
    "cite": null,
    "summary": "A performative moralist capable of twisting their “unshakeable” core principles into a complete 180-degree pretzel the exact second their own side is...",
    "confusedWith": [
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "tell": "The hypocontortionist bends the principle; the martyrholic weeps about being judged for it.",
        "path": "/species/martyrholic/"
      }
    ],
    "related": [
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      },
      {
        "term": "Capitulectual",
        "slug": "capitulectual",
        "path": "/species/capitulectual/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Two wrongs make a right",
        "slug": "two-wrongs-make-a-right",
        "path": "/fallacies/two-wrongs-make-a-right/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Mythstorian",
    "slug": "mythstorian",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/mythstorian/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˈmɪθˌstɔːr.i.ən/",
    "position": 2,
    "sort": {
      "impact": 5,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"myth\" + \"historian\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A policy argument that has just been moved from the present into a golden age."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“In my day -”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Nostalgic for a decade it cannot date",
          "Sanitized, never sourced",
          "Confuses a monument with a record"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the year, the statute, and the source. Nostalgia cannot survive a date."
      }
    ],
    "voice": "“In my day -”",
    "senses": [
      "A nostalgia-poisoned revisionist who worships an imaginary, sanitized “golden age” that never actually existed - aggressively rewriting, censoring, or whitewashing real history to pretend past atrocities, systemic injustices, or national failures were harmless or heroic.",
      "Someone who treats historical fact as an enemy to be erased whenever it threatens their curated fairy tale, replacing documented reality with patriotic folklore to justify repeating the worst mistakes of the past."
    ],
    "notes": [],
    "example": "“Trying to ban primary historical documents while claiming the past was a peaceful utopia without systemic injustice is pure **mythstorian** revisionism.”",
    "cite": null,
    "summary": "A nostalgia-poisoned revisionist who worships an imaginary, sanitized “golden age” that never actually existed - aggressively rewriting, censoring...",
    "confusedWith": [
      {
        "term": "Algodemic",
        "slug": "algodemic",
        "tell": "The mythstorian invents the past; the algodemic invents the study of it.",
        "path": "/species/algodemic/"
      }
    ],
    "related": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Post hoc ergo propter hoc",
        "slug": "post-hoc-ergo-propter-hoc",
        "path": "/fallacies/post-hoc-ergo-propter-hoc/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False attribution",
        "slug": "false-attribution",
        "path": "/fallacies/false-attribution/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The archivist",
        "slug": "the-archivist",
        "path": "/keystones/the-archivist/"
      }
    ]
  },
  {
    "term": "Bootcurious",
    "slug": "bootcurious",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/bootcurious/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / adjective",
    "ipa": "/ˈbuːtˌkjʊər.i.əs/",
    "position": 3,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"bootlicker\" + \"curious\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Excuses any contradiction for the length of one news cycle, and relabels deference as independence."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "“I’m socially liberal, but -” arrives before the argument does. Reads exactly one newsletter, and finds the boot reasonable."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "The next story that forces a choice between the strongman and the neighbour - usually within a month, rarely at a ballot."
      }
    ],
    "voice": "“I’m socially liberal, but -” arrives before the argument does. Reads exactly one newsletter, and finds the boot reasonable.",
    "senses": [
      "*(noun)* An individual who claims to be an “independent thinker,” “centrist,” or “anti-establishment rebel,” yet consistently finds themselves drawn to, making excuses for, or defending authoritarian strongmen, billionaires, and state overreach.",
      "*(adjective)* Exhibiting a submissive fascination with unchecked authority - eagerly surrendering personal dignity, critical thinking, and civic principles to worship powerful figures who openly hold them in contempt."
    ],
    "notes": [],
    "example": "“For someone who claims to hate government overreach, he sure acts **bootcurious** every time a strongman threatens to jail political rivals or crush protests.”",
    "cite": null,
    "summary": "An individual who claims to be an “independent thinker,” “centrist,” or “anti-establishment rebel,” yet consistently finds themselves drawn to...",
    "confusedWith": [
      {
        "term": "Capitulectual",
        "slug": "capitulectual",
        "tell": "The capitulectual concedes out loud; the bootcurious one concedes in advance and calls it independence.",
        "path": "/species/capitulectual/"
      }
    ],
    "related": [
      {
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      },
      {
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Crookmaxxing",
    "slug": "crookmaxxing",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/crookmaxxing/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈkrʊkˌmæk.sɪŋ/",
    "position": 4,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 5
    },
    "etymology": "Blend of \"crook\" + \"-maxxing\"",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "An audit, a filing deadline, or a reporter holding the receipts - the moment the paperwork becomes the story."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "Blatant, unbothered, on the record: “It’s not illegal,” delivered as a defence rather than a confession, while the same accusation is levelled at whoever is closest."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Price it in public - name the number, the hour, the invoice. Crookmaxxing runs on the cost staying abstract."
      }
    ],
    "voice": "Blatant, unbothered, on the record: “It’s not illegal,” delivered as a defence rather than a confession, while the same accusation is levelled at whoever is closest.",
    "senses": [
      "*(noun)* The shameless, full-throttle practice of committing blatant corruption, grift, or abuse of power in broad daylight while simultaneously accusing political rivals and critics of the exact same crimes.",
      "*(verb)* Aggressively projecting one’s own fraud, censorship, or rule-breaking onto opponents as a preemptive smoke screen - treating every accusation as a confession while maximizing personal enrichment and impunity."
    ],
    "notes": [],
    "example": "“Using a public office to sell sketchy crypto tokens while screaming that your opponents are running a criminal syndicate is peak **crookmaxxing**.”",
    "cite": null,
    "summary": "The shameless, full-throttle practice of committing blatant corruption, grift, or abuse of power in broad daylight while simultaneously accusing...",
    "confusedWith": [
      {
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "tell": "The shillizen believes the law does not apply; the crookmaxxer knows it does and prices it in.",
        "path": "/species/sovereign-shillizen/"
      }
    ],
    "related": [
      {
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Two wrongs make a right",
        "slug": "two-wrongs-make-a-right",
        "path": "/fallacies/two-wrongs-make-a-right/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Whataboutism",
        "slug": "whataboutism",
        "path": "/fallacies/whataboutism/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Rubber chicken circuit",
        "slug": "rubber-chicken-circuit",
        "path": "/habitats/rubber-chicken-circuit/"
      }
    ]
  },
  {
    "term": "Capitulectual",
    "slug": "capitulectual",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/capitulectual/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/kəˌpɪtʃ.uˈlɛk.tʃu.əl/",
    "position": 5,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"capitulate\" + \"intellectual\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "An atrocity that has just happened, and a column that is due on Friday."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“We have to understand both sides.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Surrenders before the argument",
          "Prefaces every concession",
          "Finds symmetry where there is none"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what would be too far. An analysis that cannot name a limit is not analysis; it is a mood with footnotes."
      }
    ],
    "voice": "“We have to understand both sides.”",
    "senses": [
      "A commentator who surrenders the argument before it is made - softening, hedging, and pre-apologizing for authoritarian moves in advance, then presenting the retreat as sober pragmatism.",
      "Someone whose celebrated “independence” consists entirely of arriving early at the conclusion power wanted, and being thanked for their seriousness."
    ],
    "notes": [],
    "example": "“The order hadn’t been signed yet and the **capitulectual** already had a column explaining why resistance would be ‘counterproductive’ and ‘unserious.’”",
    "cite": null,
    "summary": "A commentator who surrenders the argument before it is made - softening, hedging, and pre-apologizing for authoritarian moves in advance, then...",
    "confusedWith": [
      {
        "term": "Equivangelist",
        "slug": "equivangelist",
        "tell": "The same surrender: the equivangelist frames it as fairness, the capitulectual as maturity.",
        "path": "/species/equivangelist/"
      }
    ],
    "related": [
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "term": "Decorumancer",
        "slug": "decorumancer",
        "path": "/species/decorumancer/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument to moderation",
        "slug": "argument-to-moderation",
        "path": "/fallacies/argument-to-moderation/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False equivalence",
        "slug": "false-equivalence",
        "path": "/fallacies/false-equivalence/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False balance",
        "slug": "false-balance",
        "path": "/fallacies/false-balance/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Subpoenado",
    "slug": "subpoenado",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/subpoenado/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/səbˈpiː.nɑː.dəʊ/",
    "position": 6,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"subpoena\" + \"tornado\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Summons the truth with enormous force, spins for a news cycle, and sets down in an empty field."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Any committee with a gavel, a camera, and a calendar that ends before the hearing does."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "A deadline that outlives the coverage, or a witness who answers in writing and publishes it."
      }
    ],
    "voice": "Summons the truth with enormous force, spins for a news cycle, and sets down in an empty field.",
    "senses": [
      "The oversight power of a legislative body to compel testimony and documents - a real capability that becomes theatre the moment the summons is timed for the cameras rather than the calendar.",
      "It works because a subpoena looks like accountability from a distance. The audience sees the summons and stops watching, the witness sees the clock and runs it out, and the file closes when the cycle does rather than when the question is answered."
    ],
    "notes": [],
    "example": "“Three **subpoenados** in one month, each announced with a graphic, none of them producing a report - and the base counted it as three wins.”",
    "cite": null,
    "summary": "The oversight power of a legislative body to compel testimony and documents - a real capability that becomes theatre the moment the summons is timed...",
    "confusedWith": [
      {
        "term": "Cronycle",
        "slug": "cronycle",
        "tell": "The subpoenado investigates the enemy; the cronycle installs the friend. Same gavel, opposite direction.",
        "path": "/abilities/cronycle/"
      }
    ],
    "related": [
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "term": "Filibluster",
        "slug": "filibluster",
        "path": "/abilities/filibluster/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "path": "/fallacies/argument-from-ignorance/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Shifting the burden of proof",
        "slug": "shifting-the-burden-of-proof",
        "path": "/fallacies/shifting-the-burden-of-proof/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Cronycle",
    "slug": "cronycle",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/cronycle/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˈkrəʊ.nɪ.kəl/",
    "position": 7,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"crony\" + \"cycle\" - and a chronicle is what it writes over the machinery",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Converts a hiring freeze into a family reunion."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "An incoming administration with a spreadsheet, a schedule, and a legal opinion about the schedule."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "A civil-service rule with a spine, or a senate that reads resumes instead of counting them."
      }
    ],
    "voice": "Converts a hiring freeze into a family reunion.",
    "senses": [
      "The capability of an administration to replace the people who run the machinery with the people who donated to it - not by firing anyone, but by reclassifying the jobs until loyalty is a qualification.",
      "It works because the machinery is invisible. Nobody votes on a personnel schedule, so a government can be rebuilt in a year and no headline has to say so; the effect surfaces later, as a service that quietly stops answering."
    ],
    "notes": [],
    "example": "“The agency’s new senior advisers were the donor list with titles, and the **cronycle** had finished before the ethics waiver was filed.”",
    "cite": null,
    "summary": "The capability of an administration to replace the people who run the machinery with the people who donated to it - not by firing anyone, but by...",
    "confusedWith": [
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "tell": "The subpoenado investigates the enemy; the cronycle installs the friend. Both are the same gavel.",
        "path": "/abilities/subpoenado/"
      }
    ],
    "related": [
      {
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The auditor",
        "slug": "the-auditor",
        "path": "/keystones/the-auditor/"
      }
    ]
  },
  {
    "term": "Nonpology",
    "slug": "nonpology",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/nonpology/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / verb",
    "ipa": "/nɒnˈpɒl.ə.dʒi/",
    "position": 8,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "Blend of \"non-\" + \"apology\"",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "The offence is documented, the audience has noticed, and the sponsor has not yet pulled the slot."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "“I’m sorry if anyone was offended” - the conditional does the work, and the second sentence explains why the offended person is the problem."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the sentence that names the act, the person, and the remedy. Anything less is the move continuing."
      }
    ],
    "voice": "“I’m sorry if anyone was offended” - the conditional does the work, and the second sentence explains why the offended person is the problem.",
    "senses": [
      "The move of answering a documented harm with regret about its reception, so that the apology becomes a second accusation.",
      "It works because the form is satisfied without the substance. Listeners hear the cadence of contrition and stop listening for the object of it; the record now shows an apology, and the harm is still standing."
    ],
    "notes": [],
    "example": "“He **nonpologised** for ninety seconds - sorry if people misread it, sorry the media was unfair - and by the end the only person still at fault was the one who complained.”",
    "cite": null,
    "summary": "The move of answering a documented harm with regret about its reception, so that the apology becomes a second accusation.",
    "confusedWith": [
      {
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "tell": "The bothsideser spreads the blame across the aisle; the nonpologiser spreads it across the audience.",
        "path": "/moves/bothsidesing/"
      }
    ],
    "related": [
      {
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "term": "Hot mic",
        "slug": "hot-mic",
        "path": "/buffs/hot-mic/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tone policing",
        "slug": "tone-policing",
        "path": "/fallacies/tone-policing/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      }
    ]
  },
  {
    "term": "School board meeting",
    "slug": "school-board-meeting",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/school-board-meeting/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˈskuːl bɔːd ˌmiː.tɪŋ/",
    "position": 9,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "English: the smallest chamber in the republic, named for the building it meets in.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "A library basement, a folding table, a public-comment card, and a livestream that will be clipped by morning."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Unpaid members, a municipal budget, and a national audience. The clip pays better than the seat ever will."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "Three minutes at the microphone, a parent who has never spoken publicly before, and a camera that is not local."
      }
    ],
    "voice": "Three minutes at the microphone, a parent who has never spoken publicly before, and a camera that is not local.",
    "senses": [
      "The room where a national argument goes to be local: the smallest elected body with the largest camera, deciding what a library stocks while the country watches the clip.",
      "It works because the stakes are real and the audience is not. A curriculum vote can be swung by people who will never send a child to the school, and the members who live there have to sit through it, in public, on a Tuesday."
    ],
    "notes": [],
    "example": "“The **school board meeting** ran four hours, three of them about a book, and the budget passed at eleven with nobody left in the room.”",
    "cite": null,
    "summary": "The room where a national argument goes to be local: the smallest elected body with the largest camera, deciding what a library stocks while the...",
    "confusedWith": [
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "tell": "The panel is booked and the board is elected. Both are lit for cameras, but only one of them can change a policy by Friday.",
        "path": "/habitats/cable-panel/"
      }
    ],
    "related": [
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      },
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "path": "/moves/bothsidesing/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Heckler's veto",
        "slug": "hecklers-veto",
        "path": "/moves/hecklers-veto/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Blueslip",
    "slug": "blueslip",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/blueslip/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˈbluː.slɪp/",
    "position": 10,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "English: the slip of blue paper a home-state senator returns, or does not, on a judicial nominee.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Deletes a nominee from the map with a piece of paper that never enters the record."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A home-state senator on the judiciary committee, with a nominee the president would like confirmed."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Publish the slips, or retire the practice. A veto that leaves no trace cannot be argued with."
      }
    ],
    "voice": "Deletes a nominee from the map with a piece of paper that never enters the record.",
    "senses": [
      "Senatorial courtesy as a procedure: the committee asks both home-state senators to return a blue slip on each nominee, and a slip that never comes back is a nomination that never gets a hearing.",
      "It works because the courtesy is custom, not rule. Nothing requires the committee to honour a withheld slip, which makes the veto real but unattributable - the nominee is not rejected, only never scheduled, and the seat is not empty, only unfilled."
    ],
    "notes": [],
    "example": "“The judge had been confirmed twice before, and never got a hearing - the **blueslip** went out in March and came back in a drawer.”",
    "cite": null,
    "summary": "Senatorial courtesy as a procedure: the committee asks both home-state senators to return a blue slip on each nominee, and a slip that never comes...",
    "confusedWith": [
      {
        "term": "Cronycle",
        "slug": "cronycle",
        "tell": "The cronycle fills the seat with a friend; the blueslip makes sure the seat stays empty long enough to matter.",
        "path": "/abilities/cronycle/"
      }
    ],
    "related": [
      {
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      },
      {
        "term": "Recessure",
        "slug": "recessure",
        "path": "/abilities/recessure/"
      },
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Recessure",
    "slug": "recessure",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/recessure/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/rɪˈsɛʃ.ə/",
    "position": 11,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"recess\" + \"seizure\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Installs an official while the chamber is empty, and calls the emptiness a recess."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A president, a Senate that has left town, and a vacancy that has been waiting for a vote."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Pro forma sessions. A gavel every few days means the Senate is never in recess, and the appointment never happens."
      }
    ],
    "voice": "Installs an official while the chamber is empty, and calls the emptiness a recess.",
    "senses": [
      "The recess appointment: a constitutional power to fill a vacancy while the Senate is out of session, good only until the end of the next session - a temporary official holding a permanent-looking title.",
      "It works because recess is a word the Senate can disprove by showing up. The power is real but the trigger is procedural, so the fight is never about the nominee’s qualifications; it is about whether anyone is standing in the chamber to object."
    ],
    "notes": [],
    "example": "“The nominee had been stalled for eight months, so the **recessure** happened on a Tuesday when the Senate was technically out of town, and the oath was administered by Thursday.”",
    "cite": null,
    "summary": "The recess appointment: a constitutional power to fill a vacancy while the Senate is out of session, good only until the end of the next session - a...",
    "confusedWith": [
      {
        "term": "Cronycle",
        "slug": "cronycle",
        "tell": "The cronycle installs friends with the chamber’s consent; the recessure installs them without it.",
        "path": "/abilities/cronycle/"
      }
    ],
    "related": [
      {
        "term": "Blueslip",
        "slug": "blueslip",
        "path": "/abilities/blueslip/"
      },
      {
        "term": "Pocketveto",
        "slug": "pocketveto",
        "path": "/abilities/pocketveto/"
      },
      {
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Signaway",
    "slug": "signaway",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/signaway/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / verb",
    "ipa": "/ˈsaɪn.əˌweɪ/",
    "position": 12,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Blend of \"signing statement\" + \"sign away\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Signs the law, then publishes a note explaining which parts of it the signature did not mean."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A president, a bill he cannot afford to veto, and a legal office with a printer."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Read the statement into the record, fund only what the statute says, and let a court decide what the signature bought."
      }
    ],
    "voice": "Signs the law, then publishes a note explaining which parts of it the signature did not mean.",
    "senses": [
      "The signing statement: a message issued alongside a signature, claiming a constitutional objection to part of the law just signed - a veto that arrives after the bill is already law.",
      "It works because a signature is the only thing the Constitution actually requires. The statement carries no vote and binds no court, but it is a public instruction to the agencies that have to enforce the statute, and instructions are followed more often than they are litigated."
    ],
    "notes": [],
    "example": "“He signed the oversight bill with a **signaway** attached, and the agency read the note instead of the statute.”",
    "cite": null,
    "summary": "The signing statement: a message issued alongside a signature, claiming a constitutional objection to part of the law just signed - a veto that...",
    "confusedWith": [
      {
        "term": "Pocketveto",
        "slug": "pocketveto",
        "tell": "The pocketveto kills the bill; the signaway keeps the bill and kills the part of it he dislikes.",
        "path": "/abilities/pocketveto/"
      }
    ],
    "related": [
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      },
      {
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "term": "Recessure",
        "slug": "recessure",
        "path": "/abilities/recessure/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Equivocation",
        "slug": "equivocation",
        "path": "/fallacies/equivocation/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Lame duck",
    "slug": "lame-duck",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/lame-duck/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/leɪm dʌk/",
    "position": 13,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: from the exchange, where a lame duck was a broker who could not pay - a duck that cannot fly.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Lets a defeated officeholder govern without consequences until a date everybody knows and nobody enforces."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A pardon list, a regulation filed in December, and a press office that has stopped scheduling interviews."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "Inauguration Day, or the moment the successor’s transition team starts answering the phone instead."
      }
    ],
    "voice": "A pardon list, a regulation filed in December, and a press office that has stopped scheduling interviews.",
    "senses": [
      "The condition of an officeholder whose replacement is already elected: still holding the powers, no longer holding the future - the stretch between the vote and the oath.",
      "It works because the clock is the only constraint left. The voters have spoken, the donors have moved on, and the remaining costs are historical - which is why the last weeks of a term produce the pardons, the midnight rules, and the appointments nobody would defend on a ballot."
    ],
    "notes": [],
    "example": "“In six weeks of **lame duck** he issued forty-one pardons, three of them for people who had donated to the transition.”",
    "cite": null,
    "summary": "The condition of an officeholder whose replacement is already elected: still holding the powers, no longer holding the future - the stretch between...",
    "confusedWith": [
      {
        "term": "Honeymoan",
        "slug": "honeymoan",
        "tell": "The honeymoan is the grace before the first mistake; the lame duck is the grace after the last election.",
        "path": "/buffs/honeymoan/"
      }
    ],
    "related": [
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      },
      {
        "term": "Pocketveto",
        "slug": "pocketveto",
        "path": "/abilities/pocketveto/"
      },
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Judge shopping",
    "slug": "judge-shopping",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/judge-shopping/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / verb",
    "ipa": "/dʒʌdʒ ˈʃɒp.ɪŋ/",
    "position": 14,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "English: from forum shopping, the older practice of choosing the courtroom most likely to agree with you.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Lets a litigant choose which judge hears the case, by choosing which courthouse to file in."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Any party with a lawyer, a choice of venue, and a case that can be filed in more than one district."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Random assignment across a district, and a rule that a related case follows the first filing. Both are administrative choices, which is to say both can be made."
      }
    ],
    "voice": "Lets a litigant choose which judge hears the case, by choosing which courthouse to file in.",
    "senses": [
      "The practice of filing where the bench is favourable: in districts split into single-judge divisions, a case’s outcome can be shaped by a courthouse choice that never once mentions a judge.",
      "It works because venue is procedure and procedure is unglamorous. Nobody campaigns on a filing rule, so a litigant can select a forum without having to defend the selection - and the ruling that follows looks like law rather than like a choice."
    ],
    "notes": [],
    "example": "“The challenge was filed in a division with one judge, nine hundred miles from the agency it challenged, and the **judge shopping** was over before the docket sheet printed.”",
    "cite": null,
    "summary": "The practice of filing where the bench is favourable: in districts split into single-judge divisions, a case’s outcome can be shaped by a courthouse...",
    "confusedWith": [
      {
        "term": "Gerrythm",
        "slug": "gerrythm",
        "tell": "The gerrythm chooses the voters; judge shopping chooses the judge. Both are map-making done before the argument starts.",
        "path": "/abilities/gerrythm/"
      }
    ],
    "related": [
      {
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      },
      {
        "term": "SLAPP",
        "slug": "slapp",
        "path": "/abilities/slapp/"
      },
      {
        "term": "Random draw",
        "slug": "random-draw",
        "path": "/remedies/random-draw/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Texas sharpshooter fallacy",
        "slug": "texas-sharpshooter-fallacy",
        "path": "/fallacies/texas-sharpshooter-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Random draw",
        "slug": "random-draw",
        "path": "/remedies/random-draw/"
      }
    ]
  },
  {
    "term": "SLAPP",
    "slug": "slapp",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/slapp/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun / verb",
    "ipa": "/slæp/",
    "position": 15,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Acronym: Strategic Lawsuit Against Public Participation - a suit whose purpose is the chilling, not the winning.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Turns a lawsuit into a gag order by making the cost of speaking the punishment."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Anyone with a lawyer, a thin-skinned client, and a critic with fewer resources."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "An anti-SLAPP statute with an automatic stay and a fee shift, so the defendant’s costs land on the plaintiff who filed it."
      }
    ],
    "voice": "Turns a lawsuit into a gag order by making the cost of speaking the punishment.",
    "senses": [
      "A suit filed not to win but to cost: the claim is weak, the discovery is wide, and the point is that defending it takes years the critic does not have.",
      "It works because the legal system prices speech in billable hours. Winning is optional; the filing alone raises the price of the next article, and the next editor remembers the last one."
    ],
    "notes": [],
    "example": "“The review was accurate and the **SLAPP** was dismissed in fourteen months, by which time the writer had spent her savings and the magazine had stopped assigning the beat.”",
    "cite": null,
    "summary": "A suit filed not to win but to cost: the claim is weak, the discovery is wide, and the point is that defending it takes years the critic does not...",
    "confusedWith": [
      {
        "term": "NDA",
        "slug": "nda",
        "tell": "The NDA buys silence before publication; the SLAPP bills for it afterwards.",
        "path": "/abilities/nda/"
      }
    ],
    "related": [
      {
        "term": "Qualified immunity",
        "slug": "qualified-immunity",
        "path": "/abilities/qualified-immunity/"
      },
      {
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "path": "/abilities/judge-shopping/"
      },
      {
        "term": "Fee shift",
        "slug": "fee-shift",
        "path": "/remedies/fee-shift/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Fee shift",
        "slug": "fee-shift",
        "path": "/remedies/fee-shift/"
      }
    ]
  },
  {
    "term": "NDA",
    "slug": "nda",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/nda/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˌen.diːˈeɪ/",
    "position": 16,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Initialism: non-disclosure agreement - a contract to be quiet, signed before anyone knows what the quiet is for.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Makes silence a term of employment, and the cost of speaking a debt."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Any employer with a lawyer, any settlement with a cheque, any volunteer with a badge."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Read it before signing, and legislate the categories that cannot be contracted away - harassment, wages, safety."
      }
    ],
    "voice": "Makes silence a term of employment, and the cost of speaking a debt.",
    "senses": [
      "The contract that converts a fact into a liability: sign it to work, sign it to settle, sign it to volunteer, and the fact becomes something you owe rather than something you know.",
      "It works because contracts are private and rights are public. A clause nobody can see is a rule nobody can challenge, and the signature makes the silence look voluntary - which is what the doctrine requires and what the power imbalance supplies."
    ],
    "notes": [],
    "example": "“She settled, signed the **NDA**, and spent four years unable to say the word harassment in an interview without a lawyer on the line.”",
    "cite": null,
    "summary": "The contract that converts a fact into a liability: sign it to work, sign it to settle, sign it to volunteer, and the fact becomes something you owe...",
    "confusedWith": [
      {
        "term": "SLAPP",
        "slug": "slapp",
        "tell": "The NDA buys the silence before publication; the SLAPP bills for it after.",
        "path": "/abilities/slapp/"
      }
    ],
    "related": [
      {
        "term": "Consent decree",
        "slug": "consent-decree",
        "path": "/abilities/consent-decree/"
      },
      {
        "term": "Qualified immunity",
        "slug": "qualified-immunity",
        "path": "/abilities/qualified-immunity/"
      },
      {
        "term": "Blueslip",
        "slug": "blueslip",
        "path": "/abilities/blueslip/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Qualified immunity",
    "slug": "qualified-immunity",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/qualified-immunity/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/ˈkwɒl.ɪ.faɪd ɪˈmjuː.nɪ.ti/",
    "position": 17,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "English: immunity qualified by a condition - the right must have been clearly established before the suit.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Ends a suit against an official before the facts are heard, by asking whether an identical case had already spelled the rule out."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "Any official sued in a personal capacity, and the lawyers whose job is to file the motion."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "A state law that removes the defence, or a court that treats the Constitution as clearly established on its own terms."
      }
    ],
    "voice": "Ends a suit against an official before the facts are heard, by asking whether an identical case had already spelled the rule out.",
    "senses": [
      "The doctrine that shields a public official from damages unless the violated right was clearly established at the time - which means the first person to be wronged usually loses, and the rule is established by losing.",
      "It works because it is a rule about rules. The question is not what happened but whether a previous court had described it precisely enough, so each new fact pattern restarts the clock and the law develops only as fast as the plaintiffs who can afford to lose."
    ],
    "notes": [],
    "example": "“The video was clear, the policy was clear, and **qualified immunity** turned on whether a 2011 case from another circuit had described the same handcuffs.”",
    "cite": null,
    "summary": "The doctrine that shields a public official from damages unless the violated right was clearly established at the time - which means the first person...",
    "confusedWith": [
      {
        "term": "Consent decree",
        "slug": "consent-decree",
        "tell": "Qualified immunity ends the case before the facts; a consent decree ends it after, with an inspector attached.",
        "path": "/abilities/consent-decree/"
      }
    ],
    "related": [
      {
        "term": "SLAPP",
        "slug": "slapp",
        "path": "/abilities/slapp/"
      },
      {
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "path": "/abilities/judge-shopping/"
      },
      {
        "term": "NDA",
        "slug": "nda",
        "path": "/abilities/nda/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Consent decree",
    "slug": "consent-decree",
    "kind": "ability",
    "kindLabel": "Ability",
    "path": "/abilities/consent-decree/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": "/kənˈsɛnt dɪˈkriː/",
    "position": 18,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: a decree issued by consent - a court order both sides agreed to and neither can walk away from.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Converts a lawsuit into a supervisor, and a promise into a court order with a deadline."
      },
      {
        "key": "available_to",
        "label": "Available to",
        "type": "text",
        "value": "A regulator with a case it would rather settle, and a defendant with a budget it would rather not spend."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Publish the decree, keep the monitor independent, and write the exit criteria before the parties are tired."
      }
    ],
    "voice": "Converts a lawsuit into a supervisor, and a promise into a court order with a deadline.",
    "senses": [
      "The settlement that becomes an order: the parties agree a remedy, a judge signs it, and the agreement acquires a docket number, a monitor, and a schedule.",
      "It works because enforcement outlives the news cycle. A press conference ends; a decree has reporting deadlines, and the department that signed it has to file paperwork with a judge who is still there next year."
    ],
    "notes": [],
    "example": "“The **consent decree** gave the department eighteen months, an independent monitor and a reporting requirement, and the monitor’s third report was the first thing anyone had read about the department in a decade.”",
    "cite": null,
    "summary": "The settlement that becomes an order: the parties agree a remedy, a judge signs it, and the agreement acquires a docket number, a monitor, and a...",
    "confusedWith": [
      {
        "term": "Qualified immunity",
        "slug": "qualified-immunity",
        "tell": "Qualified immunity ends the case before the facts; a consent decree ends it after, with a monitor attached.",
        "path": "/abilities/qualified-immunity/"
      }
    ],
    "related": [
      {
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      },
      {
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      }
    ],
    "edges": [],
    "backlinks": []
  },
  {
    "term": "Two wrongs make a right",
    "slug": "two-wrongs-make-a-right",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/two-wrongs-make-a-right/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 101,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "From the proverb, inverted: the move takes a well-known warning and uses it as a defence.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "One’s own side has just been caught doing something."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The answer is a comparison, and the comparison is accurate."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Point out that both acts are still wrong, and that the ledger being even is not the same as it being clean."
      }
    ],
    "voice": "The answer is a comparison, and the comparison is accurate.",
    "senses": [
      "Defending an act by pointing at an equivalent act on the other side, as though symmetry settled the question.",
      "It works because fairness is a stronger instinct than consistency. The hearer wants the ledger balanced, and the sentence offers balance without ever asking whether either entry was wrong."
    ],
    "notes": [],
    "example": "“They gerrymandered too.” Both maps are still rigged; the sentence has only arranged for nobody to fix either.",
    "cite": {
      "label": "Wikipedia · Two wrongs make a right",
      "url": "https://en.wikipedia.org/wiki/Two_wrongs_make_a_right"
    },
    "summary": "Informal · Red herring fallacy: Defending an act by pointing at an equivalent act on the other side, as though symmetry settled the question.",
    "confusedWith": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "tell": "The tu quoque changes the subject to the accuser’s conduct; ad hominem changes it to the accuser’s character.",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "related": [
      {
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Freetard",
        "slug": "freetard",
        "path": "/species/freetard/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      }
    ]
  },
  {
    "term": "Post hoc ergo propter hoc",
    "slug": "post-hoc-ergo-propter-hoc",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/post-hoc-ergo-propter-hoc/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 102,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Latin: “after this, therefore because of this” - the first reason children believe the rooster makes the sun rise.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Questionable cause"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Two events happened in sequence and a cause is being claimed."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The evidence is the calendar, not the mechanism."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the mechanism and the comparison: what happened where the first event did not occur?"
      }
    ],
    "voice": "The evidence is the calendar, not the mechanism.",
    "senses": [
      "Concluding that one event caused another because it happened first.",
      "It works because sequence is the one causal cue an audience can observe directly. Order is visible; mechanism has to be argued, so order wins by default."
    ],
    "notes": [],
    "example": "“I took the supplement and the cough cleared in a week.” A week is also how long a cough lasts.",
    "cite": {
      "label": "Wikipedia · Post hoc ergo propter hoc",
      "url": "https://en.wikipedia.org/wiki/Post_hoc_ergo_propter_hoc"
    },
    "summary": "Informal · Questionable cause fallacy: Concluding that one event caused another because it happened first.",
    "confusedWith": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "tell": "Post hoc invents a cause from sequence; cherry picking hides the cases where the sequence did not hold.",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "related": [
      {
        "term": "Slippery slope",
        "slug": "slippery-slope",
        "path": "/fallacies/slippery-slope/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Mythstorian",
        "slug": "mythstorian",
        "path": "/species/mythstorian/"
      }
    ]
  },
  {
    "term": "Special pleading",
    "slug": "special-pleading",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/special-pleading/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 103,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "From law: a plea that asks the court to apply a different rule to this case, with no reason given for the exception.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A rule the speaker has just applied to someone else would now apply to the speaker."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The rule holds, except here, for reasons that are never stated as a rule."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what makes this case different in a way that could be written down and applied to everyone."
      }
    ],
    "voice": "The rule holds, except here, for reasons that are never stated as a rule.",
    "senses": [
      "Applying a standard to others while exempting oneself, without giving a reason that would not also exempt the others.",
      "It works because the exemption is usually framed as context. Every rule has context; the fallacy is invoking it only for one side."
    ],
    "notes": [],
    "example": "“Attacking a public official’s family is out of bounds.” Said by the account that spent last spring on a mayor’s brother.",
    "cite": {
      "label": "Wikipedia · Special pleading",
      "url": "https://en.wikipedia.org/wiki/Special_pleading"
    },
    "summary": "Informal · Presumption fallacy: Applying a standard to others while exempting oneself, without giving a reason that would not also exempt the others.",
    "confusedWith": [
      {
        "term": "Two wrongs make a right",
        "slug": "two-wrongs-make-a-right",
        "tell": "Special pleading asks for an exemption from the standard; two wrongs argues the standard is void because someone else broke it.",
        "path": "/fallacies/two-wrongs-make-a-right/"
      }
    ],
    "related": [
      {
        "term": "Moving the goalposts",
        "slug": "moving-the-goalposts",
        "path": "/fallacies/moving-the-goalposts/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Honeymoan",
        "slug": "honeymoan",
        "path": "/buffs/honeymoan/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Nightdocket",
        "slug": "nightdocket",
        "path": "/abilities/nightdocket/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Cronycle",
        "slug": "cronycle",
        "path": "/abilities/cronycle/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Recessure",
        "slug": "recessure",
        "path": "/abilities/recessure/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Signaway",
        "slug": "signaway",
        "path": "/abilities/signaway/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Lame duck",
        "slug": "lame-duck",
        "path": "/buffs/lame-duck/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Qualified immunity",
        "slug": "qualified-immunity",
        "path": "/abilities/qualified-immunity/"
      }
    ]
  },
  {
    "term": "Argument to moderation",
    "slug": "argument-to-moderation",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/argument-to-moderation/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 104,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Also the middle ground fallacy: the midpoint between two positions is treated as the truth by construction.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Two positions are on the table and the speaker wants to look reasonable."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The recommendation is arithmetic - halfway - rather than an account of what is true."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask which position the evidence supports. A compromise between a measured claim and a fabricated one is a partial fabrication."
      }
    ],
    "voice": "The recommendation is arithmetic - halfway - rather than an account of what is true.",
    "senses": [
      "Assuming that the correct answer must lie between two stated positions, regardless of what either position says.",
      "It works because compromise is a genuine virtue in negotiation. The sentence borrows that virtue for questions of fact, where the midpoint of true and false is still false."
    ],
    "notes": [],
    "example": "“One side says the water is safe, the other says it is poison - surely the truth is in the middle.” The test results are not in the middle; they are in the lab.",
    "cite": {
      "label": "Wikipedia · Argument to moderation",
      "url": "https://en.wikipedia.org/wiki/Argument_to_moderation"
    },
    "summary": "Informal · Presumption fallacy: Assuming that the correct answer must lie between two stated positions, regardless of what either position says.",
    "confusedWith": [
      {
        "term": "False equivalence",
        "slug": "false-equivalence",
        "tell": "Equivalence says the two sides are equally wrong; moderation says the truth is arithmetically between them.",
        "path": "/fallacies/false-equivalence/"
      }
    ],
    "related": [
      {
        "term": "False dilemma",
        "slug": "false-dilemma",
        "path": "/fallacies/false-dilemma/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "path": "/moves/bothsidesing/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Capitulectual",
        "slug": "capitulectual",
        "path": "/species/capitulectual/"
      }
    ]
  },
  {
    "term": "False balance",
    "slug": "false-balance",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/false-balance/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 105,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Also bothsidesism: the studio graph with two guests, as though the shape of the panel were the shape of the evidence.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Statistical"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "One position is supported by the evidence and the other by its existence."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The two sides get the same airtime, and the audience infers the same standing."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the evidence weighs, not what the panel looks like. Balance is about who gets heard; accuracy is about what is true."
      }
    ],
    "voice": "The two sides get the same airtime, and the audience infers the same standing.",
    "senses": [
      "Presenting two sides as equally supported when the evidence is lopsided, because a balanced panel feels fairer than an accurate one.",
      "It works because fairness is a real journalistic virtue and symmetry looks like it. But a coin that lands heads ninety times out of a hundred is not evenly disputed, and equal time misrepresents it as such."
    ],
    "notes": [],
    "example": "“Some say the bridge is safe, others say it will fall.” One of those groups has the inspection report.",
    "cite": {
      "label": "Wikipedia · False balance",
      "url": "https://en.wikipedia.org/wiki/False_balance"
    },
    "summary": "Informal · Statistical fallacy: Presenting two sides as equally supported when the evidence is lopsided, because a balanced panel feels fairer than an...",
    "confusedWith": [
      {
        "term": "False equivalence",
        "slug": "false-equivalence",
        "tell": "Equivalence says the two claims are alike; false balance gives them alike treatment and lets the audience draw the first conclusion.",
        "path": "/fallacies/false-equivalence/"
      }
    ],
    "related": [
      {
        "term": "Argument to moderation",
        "slug": "argument-to-moderation",
        "path": "/fallacies/argument-to-moderation/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "path": "/moves/bothsidesing/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Capitulectual",
        "slug": "capitulectual",
        "path": "/species/capitulectual/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ]
  },
  {
    "term": "Argument from silence",
    "slug": "argument-from-silence",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/argument-from-silence/",
    "chapter": "hypocrisy-revisionism",
    "chapterRoman": "III",
    "chapterTitle": "Hypocrisy, Revisionism & Authoritarian Submission",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 106,
    "sort": {
      "impact": 3,
      "abuse": 2,
      "blowback": 4
    },
    "etymology": "Latin: argumentum ex silentio - nothing was said, so the nothing is read as a statement.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A record is missing and a conclusion is convenient."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The argument rests on what nobody wrote down."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask whether anyone would have written it down. If the answer is no, the silence is not evidence of anything."
      }
    ],
    "voice": "The argument rests on what nobody wrote down.",
    "senses": [
      "Concluding something from the absence of a record, when the record would not have mentioned it either way.",
      "It works because silence is genuinely informative sometimes. Whether it is depends entirely on whether the silence was supposed to be broken, and that question is the one the sentence skips."
    ],
    "notes": [],
    "example": "“No complaints were filed, so everyone was satisfied.” Nobody knew there was a form.",
    "cite": {
      "label": "Wikipedia · Argument from silence",
      "url": "https://en.wikipedia.org/wiki/Argument_from_silence"
    },
    "summary": "Informal · Relevance fallacy: Concluding something from the absence of a record, when the record would not have mentioned it either way.",
    "confusedWith": [
      {
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "tell": "Ignorance is about missing evidence in general; silence is about a specific record that was never kept.",
        "path": "/fallacies/argument-from-ignorance/"
      }
    ],
    "related": [
      {
        "term": "Survivorship bias",
        "slug": "survivorship-bias",
        "path": "/fallacies/survivorship-bias/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Pocketveto",
        "slug": "pocketveto",
        "path": "/abilities/pocketveto/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Friday news dump",
        "slug": "friday-news-dump",
        "path": "/moves/friday-news-dump/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Blueslip",
        "slug": "blueslip",
        "path": "/abilities/blueslip/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "SLAPP",
        "slug": "slapp",
        "path": "/abilities/slapp/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "NDA",
        "slug": "nda",
        "path": "/abilities/nda/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "Xenophobricator",
    "slug": "xenophobricator",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/xenophobricator/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˌzɛn.əˈfoʊ.brɪ.keɪ.tər/",
    "position": 1,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 5
    },
    "etymology": "Blend of \"xenophobe\" + \"fabricator\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A census, a lease, or a school roster that has just made a change visible."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“They’re taking over.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Manufactures the threat, then fears it",
          "Recycles an older panic",
          "Numbers never sourced"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the number and the year. A panic that cannot produce a denominator is a rumour with a map."
      }
    ],
    "voice": "“They’re taking over.”",
    "senses": [
      "An individual who manufactures, exaggerates, or recycles racialized conspiracy theories to blame immigrants or minority communities for complex systemic issues, economic strain, or public program failures.",
      "A fearmonger who relies on scapegoating outsiders - such as claiming a small local immigrant population is single-handedly bankrupting massive state or federal programs - to distract from real policy failures and stoke public resentment."
    ],
    "notes": [],
    "example": "“Instead of looking at actual administrative data, the **xenophobricator** blamed a tiny immigrant community for draining an entire multi-billion-dollar federal assistance program.”",
    "cite": null,
    "summary": "An individual who manufactures, exaggerates, or recycles racialized conspiracy theories to blame immigrants or minority communities for complex...",
    "confusedWith": [
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "tell": "The xenophobricator needs a specific outsider; the dramagogue only needs a crowd.",
        "path": "/species/dramagogue/"
      }
    ],
    "related": [
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Association fallacy",
        "slug": "association-fallacy",
        "path": "/fallacies/association-fallacy/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to motive",
        "slug": "appeal-to-motive",
        "path": "/fallacies/appeal-to-motive/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Dramagogue",
    "slug": "dramagogue",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/dramagogue/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈdræm.ə.ɡɒɡ/",
    "position": 2,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"drama\" + \"demagogue\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A crisis real enough to sell, and an audience that has already been frightened once."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Everything you know is a lie.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Theatrical, never specific",
          "Apocalypse on a schedule",
          "Sells the cure"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for one verifiable thing: a name, a date, a document. An apocalypse on a schedule never survives a specific question."
      }
    ],
    "voice": "“Everything you know is a lie.”",
    "senses": [
      "A theatrical fearmonger who whips up hysteria, outrage, and existential panic - often targeting minority faiths, immigrants, or out-groups as dangerous “extremists” - while aggressively pushing their own dogma or agenda without a shred of self-awareness.",
      "Someone who relies on manufactured crisis, melodrama, and scapegoating to rally followers and demand special privileges, treating basic constitutional protections like freedom of religion as a one-way street meant exclusively for them."
    ],
    "notes": [],
    "example": "“Turning a routine zoning permit for a minority house of worship into an apocalyptic cable-news segment is peak **dramagogue** behavior.”",
    "cite": null,
    "summary": "A theatrical fearmonger who whips up hysteria, outrage, and existential panic - often targeting minority faiths, immigrants, or out-groups as...",
    "confusedWith": [
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "tell": "The dramagogue sells the apocalypse; the ragesturbationist sells the anger you feel waiting for it.",
        "path": "/species/ragesturbationist/"
      }
    ],
    "related": [
      {
        "term": "Xenophobricator",
        "slug": "xenophobricator",
        "path": "/species/xenophobricator/"
      },
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to consequences",
        "slug": "appeal-to-consequences",
        "path": "/fallacies/appeal-to-consequences/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Ragesturbationist",
    "slug": "ragesturbationist",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/ragesturbationist/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˌreɪdʒ.stərˈbeɪ.ʃən.ɪst/",
    "position": 3,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"rage\" + \"masturbation\" + \"-ist\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A segment that has to hold an audience across a commercial break."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Are you angry yet?”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Outrage as a business model",
          "Never satisfied, always fed",
          "Monetizes the wound"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the anger is for. Outrage that cannot name a remedy is a product, not a politics."
      }
    ],
    "voice": "“Are you angry yet?”",
    "senses": [
      "An outrage grifter who endlessly strokes public fury, paranoia, and grievance - not to solve a single real-world problem, but purely for self-gratification, algorithmic clout, engagement metrics, and cash.",
      "A cynical commentator or influencer addicted to the dopamine hit and financial payout of manufacturing hysteria, leaving their audience radicalized and society fractured while they cash the checks in private."
    ],
    "notes": [],
    "example": "“He has zero intention of fixing the issue he screams about every night; he’s a full-time **ragesturbationist** getting off on ad revenue and engagement while his followers burn down their own communities.”",
    "cite": null,
    "summary": "An outrage grifter who endlessly strokes public fury, paranoia, and grievance - not to solve a single real-world problem, but purely for...",
    "confusedWith": [
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "tell": "The dramagogue wants your fear; the ragesturbationist wants your feed.",
        "path": "/species/dramagogue/"
      }
    ],
    "related": [
      {
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      },
      {
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      }
    ]
  },
  {
    "term": "Martyrholic",
    "slug": "martyrholic",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/martyrholic/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˌmɑːr.tərˈhɒl.ɪk/",
    "position": 4,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"martyr\" + \"-holic\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A criticism that has just been made, accurately, in front of witnesses."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“So I’m the bad guy now?”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Persecuted by a policy they wrote",
          "Suffers loudly, profits quietly",
          "Never the aggressor in their own story"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Name the act, not the person, and refuse to argue about who suffers more. Suffering is not a rebuttal."
      }
    ],
    "voice": "“So I’m the bad guy now?”",
    "senses": [
      "An individual pathologically addicted to perpetual victimhood, who treats every marginalized group, cultural shift, or political buzzword - from immigrants and trans people to public education and “socialism” - as an active, personal attack against them.",
      "Someone who experiences genuine peace or security as withdrawal, constantly cycling through new imaginary boogeymen to nail themselves to a self-built cross and justify their hostility toward others."
    ],
    "notes": [],
    "example": "“Living comfortably in a safe suburb while claiming that public libraries, immigrants, and trans kids are personally oppressing him is peak **martyrholic** behavior.”",
    "cite": null,
    "summary": "An individual pathologically addicted to perpetual victimhood, who treats every marginalized group, cultural shift, or political buzzword - from...",
    "confusedWith": [
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "tell": "Both suffer in public; the martyrholic has no jet.",
        "path": "/species/plutomartyr/"
      }
    ],
    "related": [
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      },
      {
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Anecdotal evidence",
        "slug": "anecdotal-evidence",
        "path": "/fallacies/anecdotal-evidence/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to pity",
        "slug": "appeal-to-pity",
        "path": "/fallacies/appeal-to-pity/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Algodemic",
    "slug": "algodemic",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/algodemic/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˌæl.ɡoʊˈdɛm.ɪk/",
    "position": 5,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"algorithm\" + \"academic\" / \"pandemic\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A decision that has to look evidence-based, and a chart that arrived without its context."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“The data doesn’t lie.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A chart with no axis",
          "One study, no authors",
          "Cites a preprint that does not exist"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the axis, the sample, and where the number came from. A chart that cannot produce them is a poster, not a finding."
      }
    ],
    "voice": "“The data doesn’t lie.”",
    "senses": [
      "A self-styled “independent researcher” and conspiracy theorist whose entire worldview is assembled from Facebook memes, fringe podcasts, and YouTube rabbit holes - connecting unrelated dots into a grand cabal while remaining completely oblivious to the fact that they are an easy mark being farmed by engagement algorithms and grifters.",
      "An individual who mistakes algorithmic radicalization for secret enlightenment, treating the total absence of real-world evidence as proof of how deep the cover-up goes."
    ],
    "notes": [],
    "example": "“Bragging that he ‘escaped the matrix’ while parroting word-for-word talking points from a supplement-selling YouTube algorithm makes him a textbook **algodemic**.”",
    "cite": null,
    "summary": "A self-styled “independent researcher” and conspiracy theorist whose entire worldview is assembled from Facebook memes, fringe podcasts, and YouTube...",
    "confusedWith": [
      {
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "tell": "The bleatkeeper trusts nothing; the algodemic trusts one chart he cannot read.",
        "path": "/species/bleatkeeper/"
      }
    ],
    "related": [
      {
        "term": "Trust-me-brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Survivorship bias",
        "slug": "survivorship-bias",
        "path": "/fallacies/survivorship-bias/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Ad nauseam",
        "slug": "ad-nauseam",
        "path": "/fallacies/ad-nauseam/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to novelty",
        "slug": "appeal-to-novelty",
        "path": "/fallacies/appeal-to-novelty/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Lateral reading",
        "slug": "lateral-reading",
        "path": "/remedies/lateral-reading/"
      }
    ]
  },
  {
    "term": "Plutomartyr",
    "slug": "plutomartyr",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/plutomartyr/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈpluː.toʊ.ˌmɑːr.tər/",
    "position": 6,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"plutocrat\" + \"martyr\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A tax or a regulation that has just been applied to someone with a lawyer."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“They’re coming for people like me.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Wealth worn as hardship",
          "Persecution with a legal team",
          "Suffers in a private jet"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what is being taken, and by whom. Hardship with a legal team is a negotiating position."
      }
    ],
    "voice": "“They’re coming for people like me.”",
    "senses": [
      "A billionaire, celebrity, or legacy institution that recasts ordinary accountability - a subpoena, a fact-check, a declined invitation - as persecution, converting enormous advantage into a victim narrative.",
      "Someone insulated from every consequence except embarrassment, who treats that embarrassment as the gravest injustice in public life."
    ],
    "notes": [],
    "example": "“A man with three private jets and a media company told the audience he was the most silenced person in the country - textbook **plutomartyr**.”",
    "cite": null,
    "summary": "A billionaire, celebrity, or legacy institution that recasts ordinary accountability - a subpoena, a fact-check, a declined invitation - as...",
    "confusedWith": [
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "tell": "The martyrholic is persecuted by a policy; the plutomartyr is persecuted by a tax rate.",
        "path": "/species/martyrholic/"
      }
    ],
    "related": [
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "term": "Indictbump",
        "slug": "indictbump",
        "path": "/buffs/indictbump/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False equivalence",
        "slug": "false-equivalence",
        "path": "/fallacies/false-equivalence/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to pity",
        "slug": "appeal-to-pity",
        "path": "/fallacies/appeal-to-pity/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Rubber chicken circuit",
        "slug": "rubber-chicken-circuit",
        "path": "/habitats/rubber-chicken-circuit/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The caseworker",
        "slug": "the-caseworker",
        "path": "/keystones/the-caseworker/"
      }
    ]
  },
  {
    "term": "Slopagandist",
    "slug": "slopagandist",
    "kind": "species",
    "kindLabel": "Species",
    "path": "/species/slopagandist/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈslɒp.ə.ˌɡæn.dɪst/",
    "position": 7,
    "sort": {
      "impact": 5,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Blend of \"slop\" + \"propagandist\"",
    "identification": [
      {
        "key": "occasion",
        "label": "Occasion",
        "type": "text",
        "value": "A feed that needs volume, and a story that needs only to be published."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Sources say.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Volume over verification",
          "Written by no one, read by millions",
          "Corrections never issued"
        ]
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask who wrote it and who would correct it. A byline and a corrections policy are the two things slop cannot fake for long."
      }
    ],
    "voice": "“Sources say.”",
    "senses": [
      "An operator who mass-produces synthetic outrage - AI-written screeds, generated mugshots, bot-farmed replies - flooding the zone faster than any fact-checker can respond.",
      "Someone who no longer needs a coherent ideology, only a reliable pipeline: outrage in, engagement out, truth an irrelevant byproduct of the machinery."
    ],
    "notes": [],
    "example": "“Twelve accounts, one prompt, four hundred posts a day - the **slopagandist** doesn’t believe the story, he just ships it.”",
    "cite": null,
    "summary": "An operator who mass-produces synthetic outrage - AI-written screeds, generated mugshots, bot-farmed replies - flooding the zone faster than any...",
    "confusedWith": [
      {
        "term": "Algodemic",
        "slug": "algodemic",
        "tell": "The algodemic believes the nonsense; the slopagandist bills for it.",
        "path": "/species/algodemic/"
      }
    ],
    "related": [
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "term": "Perp walk",
        "slug": "perp-walk",
        "path": "/habitats/perp-walk/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Moving the goalposts",
        "slug": "moving-the-goalposts",
        "path": "/fallacies/moving-the-goalposts/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Ad nauseam",
        "slug": "ad-nauseam",
        "path": "/fallacies/ad-nauseam/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Thought-terminating cliché",
        "slug": "thought-terminating-cliche",
        "path": "/fallacies/thought-terminating-cliche/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Perp walk",
        "slug": "perp-walk",
        "path": "/habitats/perp-walk/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The editor",
        "slug": "the-editor",
        "path": "/keystones/the-editor/"
      },
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The second source",
        "slug": "the-second-source",
        "path": "/remedies/the-second-source/"
      }
    ]
  },
  {
    "term": "Cable panel",
    "slug": "cable-panel",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/cable-panel/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈkeɪ.bəl ˈpæn.əl/",
    "position": 8,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "English: a panel is a flat board, and then a group of people arranged in front of one.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "The 8pm segment, the Sunday show, the podcast studio with four microphones and no clock."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Ad rates, and a book deal for whoever shouts the most quotable thing."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "Four people, one topic, and a countdown to the break."
      }
    ],
    "voice": "Four people, one topic, and a countdown to the break.",
    "senses": [
      "A produced argument: a fixed panel, a fixed clock, and a topic chosen for heat rather than for answerability.",
      "It rewards the claim that fits before the break. A false claim costs nothing inside ninety seconds and an answer costs most of them, so the format systematically favours the gallop over the reply."
    ],
    "notes": [],
    "example": "“Ninety seconds, four panellists, eleven claims, and a hard break before anyone could ask what the second one meant.”",
    "cite": null,
    "summary": "A produced argument: a fixed panel, a fixed clock, and a topic chosen for heat rather than for answerability.",
    "confusedWith": [
      {
        "term": "Comment section",
        "slug": "comment-section",
        "tell": "The panel is produced and timed; the comment section is neither. Both punish the answer and reward the claim.",
        "path": "/habitats/comment-section/"
      }
    ],
    "related": [
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "False balance",
        "slug": "false-balance",
        "path": "/fallacies/false-balance/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Ad nauseam",
        "slug": "ad-nauseam",
        "path": "/fallacies/ad-nauseam/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to ridicule",
        "slug": "appeal-to-ridicule",
        "path": "/fallacies/appeal-to-ridicule/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Nonpology",
        "slug": "nonpology",
        "path": "/moves/nonpology/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Group chat",
    "slug": "group-chat",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/group-chat/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈɡruːp tʃæt/",
    "position": 9,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 1
    },
    "etymology": "English: a chat that is also a group, which is the whole problem.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "The family thread, the neighbours’ thread, the school parents’ thread, and the one with the uncle."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Free, which is why it is where the forward lives and the correction never arrives."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A screenshot, a forward, and no link."
      }
    ],
    "voice": "A screenshot, a forward, and no link.",
    "senses": [
      "A private, high-trust, low-correction forum - the room where a claim arrives from someone you love and is therefore not audited.",
      "It exploits trust rather than speed. Nobody fact-checks their aunt, so the habitat runs almost entirely on Appeals to Authority and Pity, and the correction that would fix it never gets forwarded."
    ],
    "notes": [],
    "example": "“Three forwards before breakfast: one about a bank, one about a vaccine, one about a school - all from the same uncle, none with a link.”",
    "cite": null,
    "summary": "A private, high-trust, low-correction forum - the room where a claim arrives from someone you love and is therefore not audited.",
    "confusedWith": [
      {
        "term": "Comment section",
        "slug": "comment-section",
        "tell": "The comment section is public and adversarial; the group chat is private and trusting. Same fallacies, opposite selection pressure.",
        "path": "/habitats/comment-section/"
      }
    ],
    "related": [
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "False attribution",
        "slug": "false-attribution",
        "path": "/fallacies/false-attribution/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to pity",
        "slug": "appeal-to-pity",
        "path": "/fallacies/appeal-to-pity/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Argument from silence",
        "slug": "argument-from-silence",
        "path": "/fallacies/argument-from-silence/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Thought-terminating cliché",
        "slug": "thought-terminating-cliche",
        "path": "/fallacies/thought-terminating-cliche/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Whataboutism",
        "slug": "whataboutism",
        "path": "/fallacies/whataboutism/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Bluecheck",
    "slug": "bluecheck",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/bluecheck/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈbluː.tʃɛk/",
    "position": 10,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Blend of \"blue check\" + the verb \"to check\" - the mark and the act of vouching",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Raises the price of contradicting the bearer, because the platform has already vouched for them."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A small blue tick, a large claim, and a reply that begins “as a verified-”"
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "When the platform sells the mark to anyone, which is the same week it stops meaning anything."
      }
    ],
    "voice": "A small blue tick, a large claim, and a reply that begins “as a verified-”",
    "senses": [
      "A temporary platform condition in which the site’s own endorsement is mistaken for the reader’s: the tick says the account is real, and gets heard as the account being right.",
      "It works because verification is a claim about identity that audiences receive as a claim about authority. The bearer does not have to argue better; the interface has already agreed with them in advance."
    ],
    "notes": [],
    "example": "“He lost the thread, then posted a screenshot of his own tick, and the **bluecheck** did the rest of the arguing for him.”",
    "cite": null,
    "summary": "A temporary platform condition in which the site’s own endorsement is mistaken for the reader’s: the tick says the account is real, and gets heard as...",
    "confusedWith": [
      {
        "term": "Bootcurious",
        "slug": "bootcurious",
        "tell": "The bootcurious one defers to power; the bluecheck has been handed a little of it and spends it immediately.",
        "path": "/buffs/bootcurious/"
      }
    ],
    "related": [
      {
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Crisisglow",
    "slug": "crisisglow",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/crisisglow/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈkraɪ.sɪsˌɡləʊ/",
    "position": 11,
    "sort": {
      "impact": 5,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Blend of \"crisis\" + \"afterglow\"",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Makes the bearer the only adult in the room for as long as the emergency lasts, and suspends the questions that were due this week."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "“Now is not the time to politicise this”, from someone who has been politicising everything else since Tuesday."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "When the emergency is declared over - a decision the bearer also gets to make."
      }
    ],
    "voice": "“Now is not the time to politicise this”, from someone who has been politicising everything else since Tuesday.",
    "senses": [
      "A temporary condition in which an emergency converts the office-holder into the responsible one, and every objection into a distraction.",
      "It works because urgency is real and disagreement is slow. A crisis genuinely does compress the timetable, and the bearer decides how long the compression lasts - which is why so few emergencies end on schedule."
    ],
    "notes": [],
    "example": "“For six weeks of **crisisglow** the mayor could not be criticised without someone asking whether you supported the recovery.”",
    "cite": null,
    "summary": "A temporary condition in which an emergency converts the office-holder into the responsible one, and every objection into a distraction.",
    "confusedWith": [
      {
        "term": "Indictbump",
        "slug": "indictbump",
        "tell": "The indictbump is sympathy for a defendant; the crisisglow is authority for an incumbent. One is a wound, the other a uniform.",
        "path": "/buffs/indictbump/"
      }
    ],
    "related": [
      {
        "term": "Honeymoan",
        "slug": "honeymoan",
        "path": "/buffs/honeymoan/"
      },
      {
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      },
      {
        "term": "Sunset clause",
        "slug": "sunset-clause",
        "path": "/remedies/sunset-clause/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "path": "/fallacies/appeal-to-fear/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "False dilemma",
        "slug": "false-dilemma",
        "path": "/fallacies/false-dilemma/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "Sunset clause",
        "slug": "sunset-clause",
        "path": "/remedies/sunset-clause/"
      }
    ]
  },
  {
    "term": "Indictbump",
    "slug": "indictbump",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/indictbump/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ɪnˈdaɪt.bʌmp/",
    "position": 12,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "Blend of \"indictment\" + \"bump\", the poll movement",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Converts a charge into a fundraising total, and a courtroom into a stage with better lighting."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A legal defence fund launched before the arraignment, and merchandise with the case number printed on it."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "At the verdict, or at the next indictment - whichever the base finds more energising."
      }
    ],
    "voice": "A legal defence fund launched before the arraignment, and merchandise with the case number printed on it.",
    "senses": [
      "A temporary condition in which being charged raises the bearer’s standing with their own audience, because persecution is the strongest evidence of authenticity a movement can be handed.",
      "It works because the charge is processed as proof of sincerity rather than proof of conduct. The base never has to believe the defendant is innocent; it only has to believe the prosecution is political, and any prosecution is political once you have said so first."
    ],
    "notes": [],
    "example": "“Four counts, and the **indictbump** cleared two million by Friday; the mugshot was on a coffee mug by Monday.”",
    "cite": null,
    "summary": "A temporary condition in which being charged raises the bearer’s standing with their own audience, because persecution is the strongest evidence of...",
    "confusedWith": [
      {
        "term": "Martyrholic",
        "slug": "martyrholic",
        "tell": "The martyrholic seeks the wound; the indictbump is what the wound pays. One is a temperament, the other a yield.",
        "path": "/species/martyrholic/"
      }
    ],
    "related": [
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      },
      {
        "term": "Bluecheck",
        "slug": "bluecheck",
        "path": "/buffs/bluecheck/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The Feed",
    "slug": "the-feed",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/the-feed/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ðə fiːd/",
    "position": 13,
    "sort": {
      "impact": 5,
      "abuse": 5,
      "blowback": 3
    },
    "etymology": "English: the stream - named for something that is consumed rather than entered.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "An infinite scroll, a recommendation model, a phone at two in the morning, and the sixty seconds after a strong emotion."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Attention sold forward. The audience is the inventory, and the inventory is priced by how much of it can be held."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "The next item is already loaded, and it is angrier than the last one."
      }
    ],
    "voice": "The next item is already loaded, and it is angrier than the last one.",
    "senses": [
      "The habitat that chooses its own inhabitants: a place with no address, no closing time, and an editor that is a model trained on what you paused on.",
      "It works because it is not a venue but a selection pressure. Nothing in the feed has to be true, or even popular in general; it only has to keep one person on the page, and the person most likely to stay is the one who has just been made angry."
    ],
    "notes": [],
    "example": "“He opened the app to check the weather, and the **feed** gave him a war, a grievance, and a supplement in ninety seconds.”",
    "cite": null,
    "summary": "The habitat that chooses its own inhabitants: a place with no address, no closing time, and an editor that is a model trained on what you paused on.",
    "confusedWith": [
      {
        "term": "Comment section",
        "slug": "comment-section",
        "tell": "The comment section is under a thing somebody made; the feed is the thing, and nobody made it.",
        "path": "/habitats/comment-section/"
      }
    ],
    "related": [
      {
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      },
      {
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Dead cat",
        "slug": "dead-cat",
        "path": "/moves/dead-cat/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Push poll",
        "slug": "push-poll",
        "path": "/moves/push-poll/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Astroturfing",
        "slug": "astroturfing",
        "path": "/moves/astroturfing/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Rubber chicken circuit",
    "slug": "rubber-chicken-circuit",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/rubber-chicken-circuit/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈrʌb.ə ˈtʃɪk.ɪn ˈsɜː.kɪt/",
    "position": 14,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "American English: the banquet circuit, named for the only reliably edible course.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "Hotel ballrooms, county dinners, a head table, a cash bar, and a photographer who has done this before."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Per-plate donations, a photo line, and a speaking fee that is really a transfer with a receipt."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A joke about the local team, a story about a diner, and a policy nobody will mention again after dessert."
      }
    ],
    "voice": "A joke about the local team, a story about a diner, and a policy nobody will mention again after dessert.",
    "senses": [
      "The travelling dinner circuit where money meets a candidate in a room with a rubberised meal and no reporters - the grift’s front porch.",
      "It works because access is the product. Nobody buys a chicken dinner for the chicken; they buy four minutes at the head table, and the receipt is written off as a political contribution."
    ],
    "notes": [],
    "example": "“Nine counties in four days, four **rubber chicken circuit** dinners, and the same joke about the local football team told nine times to nine rooms that all laughed.”",
    "cite": null,
    "summary": "The travelling dinner circuit where money meets a candidate in a room with a rubberised meal and no reporters - the grift’s front porch.",
    "confusedWith": [
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "tell": "Patriotainment is broadcast and paid by the ad; the circuit is in the room and paid by the plate. Same speech, different invoice.",
        "path": "/habitats/patriotainment/"
      }
    ],
    "related": [
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Push poll",
    "slug": "push-poll",
    "kind": "move",
    "kindLabel": "Move",
    "path": "/moves/push-poll/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun / verb",
    "ipa": "/pʊʃ pəʊl/",
    "position": 15,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "English: a survey pushed at you rather than taken from you.",
    "identification": [
      {
        "key": "trigger",
        "label": "Trigger",
        "type": "text",
        "value": "A primary that is closer than the campaign would like, and a phone list."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A survey that asks whether you would still support the candidate ‘if you knew’ something, and never asks anything else."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Demand the script, the sample, and the crosstabs. A poll that cannot produce them was never measuring anything."
      }
    ],
    "voice": "A survey that asks whether you would still support the candidate ‘if you knew’ something, and never asks anything else.",
    "senses": [
      "The move of dressing a smear as a survey: a caller reads a loaded question to thousands of voters and records nothing but the smear’s delivery.",
      "It works because the form of a poll is a claim to neutrality. Nobody expects a phone survey to persuade them, which is why an accusation delivered in the register of a questionnaire gets past the defence a leaflet would trigger. The polling profession’s own standards body says plainly that a push poll is not a poll - it is telemarketing with a clipboard."
    ],
    "notes": [],
    "example": "“The **push poll** called nine thousand households to ask whether they would still vote for her if they knew about the investigation - there was no investigation, and the poll was the only place it existed.”",
    "cite": null,
    "summary": "The move of dressing a smear as a survey: a caller reads a loaded question to thousands of voters and records nothing but the smear’s delivery.",
    "confusedWith": [
      {
        "term": "Biasographer",
        "slug": "biasographer",
        "tell": "The biasographer reads the data and finds what it wants; the push poll writes the data it wants read.",
        "path": "/species/biasographer/"
      }
    ],
    "related": [
      {
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      },
      {
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      }
    ],
    "backlinks": [
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      }
    ]
  },
  {
    "term": "Briefing room",
    "slug": "briefing-room",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/briefing-room/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈbriː.fɪŋ ruːm/",
    "position": 16,
    "sort": {
      "impact": 3,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "English: the room where a government answers the questions it has already chosen.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "A podium, a flag, a bank of cameras, and a seating chart that decides who gets the second question."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Public salary, private ratings: the briefing is free to produce and pays the network in clips."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "‘I’ll circle back to you on that’ - and the next question goes to the front row."
      }
    ],
    "voice": "‘I’ll circle back to you on that’ - and the next question goes to the front row.",
    "senses": [
      "The room where a government answers questions in public: a daily ritual in which the press and the podium perform accountability for cameras neither side controls.",
      "It works because access is the currency on both sides. The reporter needs the room for a quote, the podium needs the room for a clip, and neither can afford to say the questions are not being answered - so the ritual repeats, and the record shows that a press conference happened."
    ],
    "notes": [],
    "example": "“Eleven questions in the **briefing room**, four answered, and the transcript read like a conversation because both sides needed it to.”",
    "cite": null,
    "summary": "The room where a government answers questions in public: a daily ritual in which the press and the podium perform accountability for cameras neither...",
    "confusedWith": [
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "tell": "The panel is booked for an argument; the room is booked for an answer, and reliably produces neither.",
        "path": "/habitats/cable-panel/"
      }
    ],
    "related": [
      {
        "term": "Spin room",
        "slug": "spin-room",
        "path": "/habitats/spin-room/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "Access",
        "slug": "access",
        "path": "/buffs/access/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "path": "/moves/bothsidesing/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Nonpology",
        "slug": "nonpology",
        "path": "/moves/nonpology/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Flood the zone",
        "slug": "flood-the-zone",
        "path": "/moves/flood-the-zone/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Spin room",
    "slug": "spin-room",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/spin-room/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/spɪn ruːm/",
    "position": 17,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "English: 'spin alley', the room behind a debate where each side declares what the audience just saw.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "A hotel ballroom behind the stage, a folding table per campaign, and a camera crew that has to file in twenty minutes."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Free airtime for whichever table talks first, paid for by a debate the network had already sold."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A surrogate declaring victory before the closing statements are over, and a ‘what the American people heard tonight’ that nobody heard."
      }
    ],
    "voice": "A surrogate declaring victory before the closing statements are over, and a ‘what the American people heard tonight’ that nobody heard.",
    "senses": [
      "The room behind the stage where campaigns send their talkers to say what the audience just saw - the post-debate scrum that writes the morning’s story.",
      "It works because the first interpretation usually wins. Viewers form a verdict in minutes and reporters file in minutes, so the campaign that names the story first sets the frame the rest of the coverage has to argue with."
    ],
    "notes": [],
    "example": "“The **spin room** had three tables and four winners, and by midnight the debate was being remembered the way the loudest table had described it.”",
    "cite": null,
    "summary": "The room behind the stage where campaigns send their talkers to say what the audience just saw - the post-debate scrum that writes the morning’s...",
    "confusedWith": [
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "tell": "The panel is the argument; the spin room is the verdict about the argument, delivered while it is still happening.",
        "path": "/habitats/cable-panel/"
      }
    ],
    "related": [
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "path": "/moves/bothsidesing/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Rally",
    "slug": "rally",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/rally/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈræl.i/",
    "position": 18,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "English: from 'rally' - to gather again, and to recover.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "An arena, a rope line, a sound system rented by the hour, and a crowd that arrived in a convoy."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Tickets are free, the merchandise is not, and the footage is worth more than the venue."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A chant the crowd already knows, a pause to let them say it, and a crowd estimate disputed by two police departments."
      }
    ],
    "voice": "A chant the crowd already knows, a pause to let them say it, and a crowd estimate disputed by two police departments.",
    "senses": [
      "The arena event where a political identity is performed in unison: the chant, the boo, the sign held up for the cameras at the back.",
      "It works because a crowd is evidence. Attendance gets reported as support, the chant gets reported as a position, and the room’s enthusiasm becomes a data point in coverage that has no way to count the people who stayed home."
    ],
    "notes": [],
    "example": "“Twelve thousand in the **rally**, a chant that had been running since the primaries, and a news cycle about the crowd size rather than the speech.”",
    "cite": null,
    "summary": "The arena event where a political identity is performed in unison: the chant, the boo, the sign held up for the cameras at the back.",
    "confusedWith": [
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "tell": "Patriotainment sells the seat; the rally gives it away and sells the shirt.",
        "path": "/habitats/patriotainment/"
      }
    ],
    "related": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "term": "Pseudo-event",
        "slug": "pseudo-event",
        "path": "/habitats/pseudo-event/"
      },
      {
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Argumentum ad populum",
        "slug": "argumentum-ad-populum",
        "path": "/fallacies/argumentum-ad-populum/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Frankincense",
    "slug": "frankincense",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/frankincense/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈfræŋ.kɪnˌsɛns/",
    "position": 19,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Blend of \"franking\", the privilege of free official mail, + \"incense\", to inflame",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Lets the bearer write to every voter at public expense, in an envelope that looks like a favour and reads like a campaign."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A glossy mailer from the incumbent, postage paid by the office, with a survey card and a ‘tell me what you think’ that is already a mailing list."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "The day the franking rules are read aloud, or the day the challenger mails the envelope back with the incumbent’s own words circled."
      }
    ],
    "voice": "A glossy mailer from the incumbent, postage paid by the office, with a survey card and a ‘tell me what you think’ that is already a mailing list.",
    "senses": [
      "The franking privilege: the right of a member of Congress to send official mail to constituents without paying postage - an old perquisite, and the reason the mailbox fills before every election.",
      "It works because the line between official and campaign mail is drawn by the institution that benefits from it. The frank pays for the paper, the constituent sees a letter from their representative, and whether that letter is service or solicitation is decided by a commission of members - which is to say, by the people whose mail it is."
    ],
    "notes": [],
    "example": "“Four **frankincense** mailers in one month, all marked official, all carrying the same photograph, and the challenger’s first ad was a picture of them in a pile.”",
    "cite": null,
    "summary": "The franking privilege: the right of a member of Congress to send official mail to constituents without paying postage - an old perquisite, and the...",
    "confusedWith": [
      {
        "term": "Rubber chicken circuit",
        "slug": "rubber-chicken-circuit",
        "tell": "The circuit asks for the cheque in person; the frank asks for the vote by post, at public expense.",
        "path": "/habitats/rubber-chicken-circuit/"
      }
    ],
    "related": [
      {
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "backlinks": [
      {
        "rel": "counters",
        "label": "Countered by",
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      }
    ]
  },
  {
    "term": "Pseudo-event",
    "slug": "pseudo-event",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/pseudo-event/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈsjuː.dəʊ ɪˌvɛnt/",
    "position": 20,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Coined by Daniel Boorstin in 1961 for an occurrence staged in order to be reported rather than in order to happen.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "A ribbon, a hard hat, a backdrop of people who work there, and a press release timestamped before the event."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Cheap to stage, free to air, and repeatable - the same ribbon can be cut in nine districts."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "The announcement of the thing instead of the thing, timed for the evening bulletin."
      }
    ],
    "voice": "The announcement of the thing instead of the thing, timed for the evening bulletin.",
    "senses": [
      "An occurrence that exists in order to be covered: the photo op, the signing ceremony, the major announcement that announces a future announcement.",
      "It works because coverage is the deliverable. A pseudo-event costs almost nothing to stage, produces a clip on schedule and can be repeated - which is why it crowds out the events that happen on their own timetable."
    ],
    "notes": [],
    "example": "“The **pseudo-event** had a ribbon, a hard hat and a site that had not been funded, and it led the local news for two nights.”",
    "cite": null,
    "summary": "An occurrence that exists in order to be covered: the photo op, the signing ceremony, the major announcement that announces a future announcement.",
    "confusedWith": [
      {
        "term": "Rally",
        "slug": "rally",
        "tell": "A rally is a crowd that came to see something; a pseudo-event is something that came to be seen.",
        "path": "/habitats/rally/"
      }
    ],
    "related": [
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "term": "Spin room",
        "slug": "spin-room",
        "path": "/habitats/spin-room/"
      },
      {
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Perp walk",
    "slug": "perp-walk",
    "kind": "habitat",
    "kindLabel": "Habitat",
    "path": "/habitats/perp-walk/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈpɜːp wɔːk/",
    "position": 21,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "American English: the walk from the precinct to the car, at the pace of the photographers.",
    "identification": [
      {
        "key": "carriers",
        "label": "Carriers",
        "type": "text",
        "value": "A courthouse sidewalk, a pair of handcuffs, a jacket over the cuffs, and a defendant who has not been convicted of anything."
      },
      {
        "key": "economics",
        "label": "Economics",
        "type": "text",
        "value": "Free footage for the broadcaster, a verdict for the audience, and no budget line at all."
      },
      {
        "key": "signature",
        "label": "Signature",
        "type": "text",
        "value": "A defendant escorted slowly past a camera that was told what time to be there."
      }
    ],
    "voice": "A defendant escorted slowly past a camera that was told what time to be there.",
    "senses": [
      "The staged walk: a suspect moved past cameras at the pace of the photographer, in restraints, before a jury has been chosen.",
      "It works because an image of custody is read as evidence of guilt. The walk costs the state nothing, requires no finding, and cannot be retracted by an acquittal - the picture outlives the verdict."
    ],
    "notes": [],
    "example": "“The **perp walk** ran on three networks, the charges were dropped in March, and the photograph was still the thumbnail on the story in June.”",
    "cite": null,
    "summary": "The staged walk: a suspect moved past cameras at the pace of the photographer, in restraints, before a jury has been chosen.",
    "confusedWith": [
      {
        "term": "Spin room",
        "slug": "spin-room",
        "tell": "The spin room argues about a verdict; the perp walk delivers one before the trial.",
        "path": "/habitats/spin-room/"
      }
    ],
    "related": [
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ],
    "edges": [
      {
        "rel": "houses",
        "label": "Houses",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Access",
    "slug": "access",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/access/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/ˈæk.sɛs/",
    "position": 22,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "English: access journalism, the arrangement in which the interview is the reward and the question is the price.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Makes the bearer’s questions worth answering, and the answers worth not printing."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A follow-up that never comes, a thank-you in the green room, and a scoop that arrives the day the book is published."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "The first question that costs the source something - or the first scoop that goes to somebody who asked it."
      }
    ],
    "voice": "A follow-up that never comes, a thank-you in the green room, and a scoop that arrives the day the book is published.",
    "senses": [
      "The condition of being allowed in: the interview, the background call, the off-the-record dinner - a standing that makes the next story possible and the next hard question expensive.",
      "It works because information is a renewable resource that requires cooperation. A reporter who asks the question loses the call, and the call is where the next three stories come from - so the incentive is not to lie, it is to ask something else."
    ],
    "notes": [],
    "example": "“The profile was warm, the follow-up never came, and the **access** lasted exactly as long as the book tour.”",
    "cite": null,
    "summary": "The condition of being allowed in: the interview, the background call, the off-the-record dinner - a standing that makes the next story possible and...",
    "confusedWith": [
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "tell": "The briefing room is where access is performed; access is what you still have when the room is empty.",
        "path": "/habitats/briefing-room/"
      }
    ],
    "related": [
      {
        "term": "Bluecheck",
        "slug": "bluecheck",
        "path": "/buffs/bluecheck/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "term": "Spin room",
        "slug": "spin-room",
        "path": "/habitats/spin-room/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Hot mic",
    "slug": "hot-mic",
    "kind": "buff",
    "kindLabel": "Buff",
    "path": "/buffs/hot-mic/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": "/hɒt mɪk/",
    "position": 23,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 2
    },
    "etymology": "Broadcast English: a microphone that is still live after the performance has stopped.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Publishes what the bearer believed was private, at the exact moment they stopped performing."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "text",
        "value": "A candid remark in a hallway, a sigh after the interview, and a clip that begins two seconds before anybody knew it was on."
      },
      {
        "key": "expires",
        "label": "Expires",
        "type": "text",
        "value": "When the clip is called edited, or when the next hot mic arrives and becomes the story instead."
      }
    ],
    "voice": "A candid remark in a hallway, a sigh after the interview, and a clip that begins two seconds before anybody knew it was on.",
    "senses": [
      "The condition of being recorded while off: the green-room joke, the hallway aside, the thing said to the aide who is still holding the microphone.",
      "It works because the performance is the exception and the aside is the habit. An official who is careful for the cameras and careless in the corridor has told you which one is the act, and the microphone has told everybody else."
    ],
    "notes": [],
    "example": "“The **hot mic** caught him calling the voters the base and the donor the customer, and the distinction explained the next three years of policy.”",
    "cite": null,
    "summary": "The condition of being recorded while off: the green-room joke, the hallway aside, the thing said to the aide who is still holding the microphone.",
    "confusedWith": [
      {
        "term": "Nonpology",
        "slug": "nonpology",
        "tell": "The nonpology is the apology for what the hot mic caught.",
        "path": "/moves/nonpology/"
      }
    ],
    "related": [
      {
        "term": "Briefing room",
        "slug": "briefing-room",
        "path": "/habitats/briefing-room/"
      },
      {
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      },
      {
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ],
    "edges": [
      {
        "rel": "commits",
        "label": "Commits",
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "path": "/fallacies/appeal-to-emotion/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Appeal to emotion",
    "slug": "appeal-to-emotion",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-emotion/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 101,
    "sort": {
      "impact": 5,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Latin: argumentum ad passiones, an argument addressed to feeling rather than to the claim.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "The stakes are high enough that feeling something is unavoidable."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The appeal is to what the audience will feel if the claim is false, not to why it is true."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Separate the feeling from the fact and ask what evidence would settle it. The feeling does not disappear; it just stops voting."
      }
    ],
    "voice": "The appeal is to what the audience will feel if the claim is false, not to why it is true.",
    "senses": [
      "Treating an emotional reaction as evidence for a factual claim - fear, anger, sympathy, or pride standing in for a reason.",
      "It works because a feeling is real. The hearer is not imagining the dread; they are imagining that the dread is proof. Emotion supplies the urgency a premises-and-conclusion argument cannot."
    ],
    "notes": [],
    "example": "“Think of the children” attached to a zoning variance about a parking lot. The children are real, the parking lot is real, and the sentence has not connected them.",
    "cite": {
      "label": "Wikipedia · Appeal to emotion",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_emotion"
    },
    "summary": "Informal · Red herring fallacy: Treating an emotional reaction as evidence for a factual claim - fear, anger, sympathy, or pride standing in for a reason.",
    "confusedWith": [
      {
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "tell": "Emotion is the general case; fear is its most reliable channel, and its most common disguise.",
        "path": "/fallacies/appeal-to-fear/"
      }
    ],
    "related": [
      {
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Dead cat",
        "slug": "dead-cat",
        "path": "/moves/dead-cat/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "The Feed",
        "slug": "the-feed",
        "path": "/habitats/the-feed/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Hot mic",
        "slug": "hot-mic",
        "path": "/buffs/hot-mic/"
      }
    ]
  },
  {
    "term": "Appeal to fear",
    "slug": "appeal-to-fear",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-fear/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 102,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: argumentum ad metum. The oldest political argument, and the one with the shortest feedback loop.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Something frightening is adjacent to the decision, and the case for the proposal is weak."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The argument ends in a threat, and the threat is doing all the work."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the proposed mechanism, then for the probability. Fear is a reason to look; it is not a reason to conclude."
      }
    ],
    "voice": "The argument ends in a threat, and the threat is doing all the work.",
    "senses": [
      "Arguing for a course of action by amplifying what will happen if it is refused, rather than by showing that it will work.",
      "It works because fear narrows attention. A frightened audience stops asking whether the proposal is good and starts asking whether the alternative is survivable."
    ],
    "notes": [],
    "example": "“If we do nothing, they win.” Nothing is not on the ballot; the question was the budget line, which is a different sentence about a different thing.",
    "cite": {
      "label": "Wikipedia · Appeal to fear",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_fear"
    },
    "summary": "Informal · Red herring fallacy: Arguing for a course of action by amplifying what will happen if it is refused, rather than by showing that it will work.",
    "confusedWith": [
      {
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "tell": "Fear is a channel of the wider emotional appeal, and the one that most reliably skips the argument.",
        "path": "/fallacies/appeal-to-emotion/"
      }
    ],
    "related": [
      {
        "term": "Slippery slope",
        "slug": "slippery-slope",
        "path": "/fallacies/slippery-slope/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Omnibust",
        "slug": "omnibust",
        "path": "/abilities/omnibust/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Heckler's veto",
        "slug": "hecklers-veto",
        "path": "/moves/hecklers-veto/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "SLAPP",
        "slug": "slapp",
        "path": "/abilities/slapp/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Ragesturbationist",
        "slug": "ragesturbationist",
        "path": "/species/ragesturbationist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Crisisglow",
        "slug": "crisisglow",
        "path": "/buffs/crisisglow/"
      }
    ]
  },
  {
    "term": "Moving the goalposts",
    "slug": "moving-the-goalposts",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/moving-the-goalposts/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 103,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "From the pitch: the shot went in, so the posts are moved back and the point does not count.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "The evidence asked for has just been supplied."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The standard changes at the moment it is satisfied, and only then."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Fix the standard in writing before the evidence is gathered. If the standard moves again, the argument is over, and say so."
      }
    ],
    "voice": "The standard changes at the moment it is satisfied, and only then.",
    "senses": [
      "Demanding new evidence after the original demand has been met.",
      "It works because each new request sounds reasonable on its own. Nobody agrees to an impossible standard all at once; they agree to a series of fair-sounding ones."
    ],
    "notes": [],
    "example": "“Show me the emails.” The emails are produced. “Emails can be edited - show me the metadata.” The metadata would not have been mentioned yesterday.",
    "cite": {
      "label": "Wikipedia · Moving the goalposts",
      "url": "https://en.wikipedia.org/wiki/Moving_the_goalposts"
    },
    "summary": "Informal · Presumption fallacy: Demanding new evidence after the original demand has been met.",
    "confusedWith": [
      {
        "term": "No true Scotsman",
        "slug": "no-true-scotsman",
        "tell": "The Scotsman moves the group boundary; the goalposts move the evidentiary one.",
        "path": "/fallacies/no-true-scotsman/"
      }
    ],
    "related": [
      {
        "term": "Special pleading",
        "slug": "special-pleading",
        "path": "/fallacies/special-pleading/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      }
    ]
  },
  {
    "term": "Survivorship bias",
    "slug": "survivorship-bias",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/survivorship-bias/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 104,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 4
    },
    "etymology": "From the aircraft that returned: the armour study nearly went to the wings, until someone asked about the planes that did not come back.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Statistical"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A set of successes is being used to explain why a method works."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "Every case you can see succeeded, and nothing explains what happened to the others."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask where the failures went. If the answer is “they are not in the dataset”, the dataset is the argument."
      }
    ],
    "voice": "Every case you can see succeeded, and nothing explains what happened to the others.",
    "senses": [
      "Drawing a conclusion from the cases that are visible while ignoring the cases that are missing because they failed.",
      "It works because the missing cases are missing. The sample looks complete precisely because the ones that would have completed it are not there to be counted."
    ],
    "notes": [],
    "example": "“Every founder I know says the degree was useless.” The founders who dropped out and failed are not at the conferences where this sentence gets said.",
    "cite": {
      "label": "Wikipedia · Survivorship bias",
      "url": "https://en.wikipedia.org/wiki/Survivorship_bias"
    },
    "summary": "Informal · Statistical fallacy: Drawing a conclusion from the cases that are visible while ignoring the cases that are missing because they failed.",
    "confusedWith": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "tell": "Cherry picking keeps the data and drops the rest; survivorship bias never had the rest - it was never recorded.",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "related": [
      {
        "term": "Anecdotal evidence",
        "slug": "anecdotal-evidence",
        "path": "/fallacies/anecdotal-evidence/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      }
    ]
  },
  {
    "term": "Association fallacy",
    "slug": "association-fallacy",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/association-fallacy/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 105,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Also guilt by association: the company a claim keeps is treated as the claim itself.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "An idea’s supporters are easier to attack than the idea."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The response names the company and never the claim."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the claim says and whether it is true. Who else believes it is a separate question with a separate answer."
      }
    ],
    "voice": "The response names the company and never the claim.",
    "senses": [
      "Rejecting or accepting an idea because of who else holds it, rather than because of what it says.",
      "It works because groups really do cluster. Sharing a conclusion with a bad actor is genuine information about the actor, and none at all about whether the conclusion is true."
    ],
    "notes": [],
    "example": "“That is the same thing the crank down the street says.” The crank is also right about the weather, and nobody checks the sky by checking him.",
    "cite": {
      "label": "Wikipedia · Association fallacy",
      "url": "https://en.wikipedia.org/wiki/Association_fallacy"
    },
    "summary": "Informal · Red herring fallacy: Rejecting or accepting an idea because of who else holds it, rather than because of what it says.",
    "confusedWith": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "tell": "The association attacks the company the claim keeps; ad hominem attacks the person who made it.",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "related": [
      {
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Xenophobricator",
        "slug": "xenophobricator",
        "path": "/species/xenophobricator/"
      }
    ]
  },
  {
    "term": "Appeal to motive",
    "slug": "appeal-to-motive",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-motive/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 106,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Also the circumstantial ad hominem: the argument is answered with an account of why the arguer wants it to be true.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has been made by someone with an obvious interest in it."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is entirely about who benefits, and the claim’s evidence is not mentioned."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Separate interest from evidence: ask what the numbers say, then ask who profits. Both questions have answers and only one is about truth."
      }
    ],
    "voice": "The reply is entirely about who benefits, and the claim’s evidence is not mentioned.",
    "senses": [
      "Dismissing a claim by attributing a motive to whoever made it, as though the motive settled the facts.",
      "It works because motives are real and often relevant. But a motive explains why someone is talking, not whether what they said is accurate - and the audience conflates the two."
    ],
    "notes": [],
    "example": "“Of course the landlord says rents are fine - he owns the building.” He does; the rent roll is still a document.",
    "cite": {
      "label": "Wikipedia · Appeal to motive",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_motive"
    },
    "summary": "Informal · Red herring fallacy: Dismissing a claim by attributing a motive to whoever made it, as though the motive settled the facts.",
    "confusedWith": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "tell": "Appeal to motive attacks the reason behind the claim; ad hominem attacks the person’s character or record.",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "related": [
      {
        "term": "Poisoning the well",
        "slug": "poisoning-the-well",
        "path": "/fallacies/poisoning-the-well/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Xenophobricator",
        "slug": "xenophobricator",
        "path": "/species/xenophobricator/"
      }
    ]
  },
  {
    "term": "Appeal to pity",
    "slug": "appeal-to-pity",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-pity/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 107,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Latin: argumentum ad misericordiam - the claim is supported by how much its speaker has suffered.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim or a failing needs support and the speaker has a sympathetic history."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The case rests on what it cost the speaker, not on what the evidence shows."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Separate the hardship from the question: acknowledge the cost, then ask what the claim actually says."
      }
    ],
    "voice": "The case rests on what it cost the speaker, not on what the evidence shows.",
    "senses": [
      "Arguing that a claim is true, or an act excusable, because of the hardship of the person making it.",
      "It works because sympathy is a real moral response and the hardship is often genuine. Neither fact tells you whether the claim is accurate."
    ],
    "notes": [],
    "example": "“I lost my job over this, so you know I am telling the truth.” Losing a job is terrible and says nothing about the facts.",
    "cite": {
      "label": "Wikipedia · Appeal to pity",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_pity"
    },
    "summary": "Informal · Red herring fallacy: Arguing that a claim is true, or an act excusable, because of the hardship of the person making it.",
    "confusedWith": [
      {
        "term": "Appeal to emotion",
        "slug": "appeal-to-emotion",
        "tell": "Pity is the specific channel; the emotional appeal is the whole family.",
        "path": "/fallacies/appeal-to-emotion/"
      }
    ],
    "related": [
      {
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "path": "/fallacies/tu-quoque/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "Ad nauseam",
    "slug": "ad-nauseam",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/ad-nauseam/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 108,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: “to the point of sickness” - the argument that wins by making the audience tired.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has been answered once and the answer was not accepted."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The same sentence returns unchanged, and the replies get shorter."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer once, note that the answer stands, and stop. Repetition is a contest of stamina, and it can be declined."
      }
    ],
    "voice": "The same sentence returns unchanged, and the replies get shorter.",
    "senses": [
      "Repeating a claim until objection feels pointless, and treating the exhaustion as agreement.",
      "It works on volume rather than content. Nobody can answer the same sentence forty times, so the fortieth repetition lands unanswered and looks unanswerable."
    ],
    "notes": [],
    "example": "“It was the biggest crowd ever. Biggest crowd. Everyone agrees it was the biggest crowd.” Three sentences, one claim, no count.",
    "cite": {
      "label": "Wikipedia · Ad nauseam",
      "url": "https://en.wikipedia.org/wiki/Ad_nauseam"
    },
    "summary": "Informal · Relevance fallacy: Repeating a claim until objection feels pointless, and treating the exhaustion as agreement.",
    "confusedWith": [
      {
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "tell": "Proof by assertion repeats to sound certain; ad nauseam repeats to make the audience stop asking.",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "related": [
      {
        "term": "Gish gallop",
        "slug": "gish-gallop",
        "path": "/fallacies/gish-gallop/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Filibluster",
        "slug": "filibluster",
        "path": "/abilities/filibluster/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ]
  },
  {
    "term": "Appeal to novelty",
    "slug": "appeal-to-novelty",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-novelty/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 109,
    "sort": {
      "impact": 2,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Latin: argumentum ad novitatem - the newest thing is treated as the best thing, and the year as an argument.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A practice or claim is being defended and its only advantage is being recent."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The support is a date: it is 2026, nobody does that anymore."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what changed. If nothing changed in the evidence, the calendar is not an argument."
      }
    ],
    "voice": "The support is a date: it is 2026, nobody does that anymore.",
    "senses": [
      "Treating a claim or a practice as correct because it is new, or an older one as wrong because it is old.",
      "It works because progress is real and the future usually arrives. Recency is genuine evidence of relevance; it is not evidence of correctness, and the two are easy to confuse in a feed."
    ],
    "notes": [],
    "example": "“Nobody uses cash anymore.” Most people still do; the sentence is about the future the speaker would like.",
    "cite": {
      "label": "Wikipedia · Appeal to novelty",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_novelty"
    },
    "summary": "Informal · Red herring fallacy: Treating a claim or a practice as correct because it is new, or an older one as wrong because it is old.",
    "confusedWith": [
      {
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "tell": "Tradition cites age as proof; novelty cites youth as proof. Both substitute a timestamp for a reason.",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "related": [
      {
        "term": "Appeal to nature",
        "slug": "appeal-to-nature",
        "path": "/fallacies/appeal-to-nature/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Honeymoan",
        "slug": "honeymoan",
        "path": "/buffs/honeymoan/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      }
    ]
  },
  {
    "term": "Appeal to consequences",
    "slug": "appeal-to-consequences",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-consequences/",
    "chapter": "fearmongering-grift",
    "chapterRoman": "IV",
    "chapterTitle": "Fearmongering, Grift & Algorithmic Radicalization",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 110,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Latin: argumentum ad consequentiam - the belief is judged by how it would feel for it to be true.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has implications the speaker cannot accept."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply describes what would happen if the claim were true, and stops there."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Separate the two questions: what is true, and what to do about it. Disliking the second answer does not change the first."
      }
    ],
    "voice": "The reply describes what would happen if the claim were true, and stops there.",
    "senses": [
      "Arguing that a claim is false because its consequences would be unpleasant, or true because they would be convenient.",
      "It works because consequences are legitimately part of policy - just not of truth. The sentence moves from what follows to what is, and the move is one word wide."
    ],
    "notes": [],
    "example": "“If that were true, the whole policy would be indefensible.” It may well be indefensible; the audit found what it found.",
    "cite": {
      "label": "Wikipedia · Appeal to consequences",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_consequences"
    },
    "summary": "Informal · Red herring fallacy: Arguing that a claim is false because its consequences would be unpleasant, or true because they would be convenient.",
    "confusedWith": [
      {
        "term": "Appeal to fear",
        "slug": "appeal-to-fear",
        "tell": "Fear forecasts the bad outcome to end the argument; consequences use the bad outcome as a disproof.",
        "path": "/fallacies/appeal-to-fear/"
      }
    ],
    "related": [
      {
        "term": "Slippery slope",
        "slug": "slippery-slope",
        "path": "/fallacies/slippery-slope/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
      }
    ]
  },
  {
    "term": "Hasty generalization",
    "slug": "hasty-generalization",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/hasty-generalization/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 1,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: secundum quid, “according to a particular” - a rule drawn from too narrow a sample.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A striking case is available and a general claim is wanted."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The conclusion is far wider than the number of examples behind it."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask how many cases, chosen how, over what period. The answer is usually one, chosen by being memorable."
      }
    ],
    "voice": "The conclusion is far wider than the number of examples behind it.",
    "senses": [
      "Drawing a broad conclusion from a sample too small, or too selected, to support it.",
      "It works because a single vivid case feels like a pattern. The mind generalises from what it can picture, and one picture is enough to feel like evidence."
    ],
    "notes": [],
    "example": "“I met two rude tourists from there, so that is what they are like.” Two people, one airport, an entire country.",
    "cite": {
      "label": "Wikipedia · Hasty generalization",
      "url": "https://en.wikipedia.org/wiki/Hasty_generalization"
    },
    "summary": "Informal · Faulty generalization fallacy: Drawing a broad conclusion from a sample too small, or too selected, to support it.",
    "confusedWith": [
      {
        "term": "Anecdotal evidence",
        "slug": "anecdotal-evidence",
        "tell": "The generalization is the conclusion; the anecdote is the single story it was built on.",
        "path": "/fallacies/anecdotal-evidence/"
      }
    ],
    "related": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Convention bounce",
        "slug": "convention-bounce",
        "path": "/buffs/convention-bounce/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Vaguebooking",
        "slug": "vaguebooking",
        "path": "/moves/vaguebooking/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Xenophobricator",
        "slug": "xenophobricator",
        "path": "/species/xenophobricator/"
      }
    ]
  },
  {
    "term": "Cherry picking",
    "slug": "cherry-picking",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/cherry-picking/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 2,
    "sort": {
      "impact": 5,
      "abuse": 4,
      "blowback": 4
    },
    "etymology": "From the orchard: you pick the fruit that looks best and leave the rest on the tree for someone else to find.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "There is a large body of evidence and a conclusion to support."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "Each cited fact checks out; the pattern only holds because of what is missing."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the denominator: the same measure over the same period, including the years that argue the other way."
      }
    ],
    "voice": "Each cited fact checks out; the pattern only holds because of what is missing.",
    "senses": [
      "Selecting the evidence that supports a conclusion while ignoring the evidence that does not.",
      "It works because every selection is individually true. Nothing in the sentence is a lie, so the audit has to ask what was left out - and the audience rarely sees the tree."
    ],
    "notes": [],
    "example": "“Crime fell in the years we cut the programme.” It also fell in the four years before, in the neighbouring county, and by more.",
    "cite": {
      "label": "Wikipedia · Cherry picking",
      "url": "https://en.wikipedia.org/wiki/Cherry_picking"
    },
    "summary": "Informal · Faulty generalization fallacy: Selecting the evidence that supports a conclusion while ignoring the evidence that does not.",
    "confusedWith": [
      {
        "term": "Texas sharpshooter fallacy",
        "slug": "texas-sharpshooter-fallacy",
        "tell": "Cherry picking removes the inconvenient data; the sharpshooter keeps all of it and moves the target instead.",
        "path": "/fallacies/texas-sharpshooter-fallacy/"
      }
    ],
    "related": [
      {
        "term": "Survivorship bias",
        "slug": "survivorship-bias",
        "path": "/fallacies/survivorship-bias/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Gerrythm",
        "slug": "gerrythm",
        "path": "/abilities/gerrythm/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Mythstorian",
        "slug": "mythstorian",
        "path": "/species/mythstorian/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "path": "/abilities/judge-shopping/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      }
    ]
  },
  {
    "term": "False equivalence",
    "slug": "false-equivalence",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/false-equivalence/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 3,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: false equivalence, or the apples-and-oranges move. The failure is in the comparison, not in either thing compared.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "Two acts are being compared and the comparison flatters the speaker’s side."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The two things share a category and nothing else: scale, intent, effect, and remedy are all different."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Compare like quantities: how many, how bad, how permanent, who can fix it. Equivalence collapses under one honest axis."
      }
    ],
    "voice": "The two things share a category and nothing else: scale, intent, effect, and remedy are all different.",
    "senses": [
      "Treating two things as equally bad, or equally serious, because they share a name or a shape.",
      "It works because a shared label feels like a shared scale. Once both acts are called “unfair”, the sentence can weigh them evenly without ever measuring them."
    ],
    "notes": [],
    "example": "“Both sides traffic in misinformation.” One retracted a chart; the other broadcast a fabricated one to nine million people for a week.",
    "cite": {
      "label": "Wikipedia · False equivalence",
      "url": "https://en.wikipedia.org/wiki/False_equivalence"
    },
    "summary": "Informal · Presumption fallacy: Treating two things as equally bad, or equally serious, because they share a name or a shape.",
    "confusedWith": [
      {
        "term": "False dilemma",
        "slug": "false-dilemma",
        "tell": "The dilemma collapses the field to two options; equivalence collapses the distance between them.",
        "path": "/fallacies/false-dilemma/"
      }
    ],
    "related": [
      {
        "term": "Argument to moderation",
        "slug": "argument-to-moderation",
        "path": "/fallacies/argument-to-moderation/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Capitulectual",
        "slug": "capitulectual",
        "path": "/species/capitulectual/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      }
    ]
  },
  {
    "term": "Anecdotal evidence",
    "slug": "anecdotal-evidence",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/anecdotal-evidence/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 4,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "From the Greek anekdota, “unpublished things” - the story that never made it into the record.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A statistic has just been presented that the speaker dislikes."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply begins “well, in my experience” and ends the discussion."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask whether the story is typical. One case is a reason to check the data, not a substitute for it."
      }
    ],
    "voice": "The reply begins “well, in my experience” and ends the discussion.",
    "senses": [
      "Using a single personal story as though it outweighed systematic evidence about the same question.",
      "It works because stories are persuasive and statistics are not. One concrete case is easier to hold in mind than a distribution, so it feels heavier even when it is one data point."
    ],
    "notes": [],
    "example": "“My uncle smoked for sixty years.” The actuarial table is not about his uncle; it is about the twenty thousand uncles behind it.",
    "cite": {
      "label": "Wikipedia · Anecdotal evidence",
      "url": "https://en.wikipedia.org/wiki/Anecdotal_evidence"
    },
    "summary": "Informal · Faulty generalization fallacy: Using a single personal story as though it outweighed systematic evidence about the same question.",
    "confusedWith": [
      {
        "term": "Hasty generalization",
        "slug": "hasty-generalization",
        "tell": "The anecdote is the evidence; the generalization is the rule drawn from it.",
        "path": "/fallacies/hasty-generalization/"
      }
    ],
    "related": [
      {
        "term": "Survivorship bias",
        "slug": "survivorship-bias",
        "path": "/fallacies/survivorship-bias/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Martyrholic",
        "slug": "martyrholic",
        "path": "/species/martyrholic/"
      }
    ]
  },
  {
    "term": "Equivocation",
    "slug": "equivocation",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/equivocation/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 5,
    "sort": {
      "impact": 3,
      "abuse": 3,
      "blowback": 4
    },
    "etymology": "Latin: aequus vox, “equal voice” - one word doing two jobs in the same argument.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Ambiguity"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A word with more than one sense is load-bearing in the argument."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The term means one thing in the premise and another in the conclusion."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Define the term at first use and substitute the definition everywhere. If the argument breaks, the word was doing the work."
      }
    ],
    "voice": "The term means one thing in the premise and another in the conclusion.",
    "senses": [
      "Using one word in two different senses inside a single argument, so the conclusion appears to follow.",
      "It works because the word really is the same word. The shift happens in the meaning, which is invisible on the page and audible only if you ask what the word meant each time."
    ],
    "notes": [],
    "example": "“Speech is free, so my platform must host it.” Free as in protected from the state, free as in provided by a company - one word, two sentences, no bridge.",
    "cite": {
      "label": "Wikipedia · Equivocation",
      "url": "https://en.wikipedia.org/wiki/Equivocation"
    },
    "summary": "Informal · Ambiguity fallacy: Using one word in two different senses inside a single argument, so the conclusion appears to follow.",
    "confusedWith": [
      {
        "term": "Motte-and-bailey fallacy",
        "slug": "motte-and-bailey-fallacy",
        "tell": "The motte switches between two claims; equivocation switches between two senses of a word inside one claim.",
        "path": "/fallacies/motte-and-bailey-fallacy/"
      }
    ],
    "related": [
      {
        "term": "Loaded question",
        "slug": "loaded-question",
        "path": "/fallacies/loaded-question/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Equivangelist",
        "slug": "equivangelist",
        "path": "/species/equivangelist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Trial balloon",
        "slug": "trial-balloon",
        "path": "/moves/trial-balloon/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Motte hop",
        "slug": "motte-hop",
        "path": "/moves/motte-hop/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Signaway",
        "slug": "signaway",
        "path": "/abilities/signaway/"
      }
    ]
  },
  {
    "term": "Tu quoque",
    "slug": "tu-quoque",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/tu-quoque/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 6,
    "sort": {
      "impact": 3,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Latin: “you too” - the second-person form of the two-wrongs move, and the most common sentence on the internet.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A criticism has been made that one cannot answer on the merits."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is a counter-accusation, and the original charge is never mentioned again."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Concede the point about consistency and keep the charge on the table - both can be true, and only one was asked about."
      }
    ],
    "voice": "The reply is a counter-accusation, and the original charge is never mentioned again.",
    "senses": [
      "Answering a charge by charging the accuser with the same thing, as though a second offence cancelled the first.",
      "It works because hypocrisy is genuinely relevant to credibility, so the deflection has a real foothold. The foothold is about the speaker; the question was about the act."
    ],
    "notes": [],
    "example": "“You are funded by a billionaire.” “So are you.” Both disclosures are true; only one of them was on the table.",
    "cite": {
      "label": "Wikipedia · Tu quoque",
      "url": "https://en.wikipedia.org/wiki/Tu_quoque"
    },
    "summary": "Informal · Red herring fallacy: Answering a charge by charging the accuser with the same thing, as though a second offence cancelled the first.",
    "confusedWith": [
      {
        "term": "Two wrongs make a right",
        "slug": "two-wrongs-make-a-right",
        "tell": "Tu quoque attacks the accuser’s consistency; two wrongs uses the comparison as a defence of the act itself.",
        "path": "/fallacies/two-wrongs-make-a-right/"
      }
    ],
    "related": [
      {
        "term": "Whataboutism",
        "slug": "whataboutism",
        "path": "/fallacies/whataboutism/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Hypocontortionist",
        "slug": "hypocontortionist",
        "path": "/species/hypocontortionist/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Nonpology",
        "slug": "nonpology",
        "path": "/moves/nonpology/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Indictbump",
        "slug": "indictbump",
        "path": "/buffs/indictbump/"
      }
    ]
  },
  {
    "term": "Whataboutism",
    "slug": "whataboutism",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/whataboutism/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 7,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Named for the Soviet reply to every complaint: “and what about…?”",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A specific question has been asked that the speaker would rather not answer."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply begins with “what about” and never returns to the question."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Say that the other case can be discussed after this one, and repeat the question. The order of questions is a fair thing to insist on."
      }
    ],
    "voice": "The reply begins with “what about” and never returns to the question.",
    "senses": [
      "Deflecting a question by raising a different grievance, so the original subject never gets answered.",
      "It works because there is always another grievance. The move does not have to be false - it only has to be more interesting than the question being asked."
    ],
    "notes": [],
    "example": "“What about the crime in your city?” The question was about a contract. Both can be answered; only one was asked.",
    "cite": {
      "label": "Wikipedia · Whataboutism",
      "url": "https://en.wikipedia.org/wiki/Whataboutism"
    },
    "summary": "Informal · Red herring fallacy: Deflecting a question by raising a different grievance, so the original subject never gets answered.",
    "confusedWith": [
      {
        "term": "Tu quoque",
        "slug": "tu-quoque",
        "tell": "Tu quoque answers a charge with a charge against the accuser; whataboutism raises any third subject at all.",
        "path": "/fallacies/tu-quoque/"
      }
    ],
    "related": [
      {
        "term": "Ad hominem",
        "slug": "ad-hominem",
        "path": "/fallacies/ad-hominem/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "Appeal to ridicule",
    "slug": "appeal-to-ridicule",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-ridicule/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 8,
    "sort": {
      "impact": 3,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Also argumentum ad ridiculum: the claim is answered with a joke about it, and the joke counts as the answer.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim is awkward to answer and easy to caricature."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply gets a laugh, and the claim is not restated anywhere in it."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Restate the claim in its strongest form and ask what is wrong with it. If it really is absurd, the absurdity will survive being stated fairly."
      }
    ],
    "voice": "The reply gets a laugh, and the claim is not restated anywhere in it.",
    "senses": [
      "Dismissing a position by making it sound absurd rather than by showing that it is wrong.",
      "It works because ridicule is cheap and memorable. A laugh is a conclusion the audience reaches themselves, which makes it feel like their own judgement rather than the speaker’s."
    ],
    "notes": [],
    "example": "“So we should just let everyone do whatever they want, then?” Nobody proposed that; the sentence made the proposal funny and then defeated the joke.",
    "cite": {
      "label": "Wikipedia · Appeal to ridicule",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_ridicule"
    },
    "summary": "Informal · Red herring fallacy: Dismissing a position by making it sound absurd rather than by showing that it is wrong.",
    "confusedWith": [
      {
        "term": "Appeal to the stone",
        "slug": "appeal-to-the-stone",
        "tell": "Ridicule gets a laugh; the stone gets a shrug. Both substitute a reaction for a reason.",
        "path": "/fallacies/appeal-to-the-stone/"
      }
    ],
    "related": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "path": "/fallacies/straw-man/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainer",
        "slug": "patriotainer",
        "path": "/species/patriotainer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ]
  },
  {
    "term": "Argumentum ad populum",
    "slug": "argumentum-ad-populum",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/argumentum-ad-populum/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 9,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Latin: “to the people” - the crowd is treated as the evidence, and the bandwagon as the proof.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim is popular or unpopular and that is the strongest thing that can be said for it."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The support is a headcount: everyone knows, everybody is saying, no one believes that anymore."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the crowd is responding to. Majorities have been wrong about medicine, geography, and who should vote."
      }
    ],
    "voice": "The support is a headcount: everyone knows, everybody is saying, no one believes that anymore.",
    "senses": [
      "Treating a belief as true because many people hold it, or as false because few do.",
      "It works because consensus is usually a decent heuristic and occasionally the only evidence available. The fallacy is treating a majority as a measurement."
    ],
    "notes": [],
    "example": "“Everyone knows the water is fine.” Everyone knew a lot of things that turned out to be false; the water has a test result.",
    "cite": {
      "label": "Wikipedia · Argumentum ad populum",
      "url": "https://en.wikipedia.org/wiki/Argumentum_ad_populum"
    },
    "summary": "Informal · Red herring fallacy: Treating a belief as true because many people hold it, or as false because few do.",
    "confusedWith": [
      {
        "term": "Appeal to authority",
        "slug": "appeal-to-authority",
        "tell": "Authority borrows one credential; ad populum borrows a crowd, which is cheaper and worse.",
        "path": "/fallacies/appeal-to-authority/"
      }
    ],
    "related": [
      {
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Playtriot",
        "slug": "playtriot",
        "path": "/species/playtriot/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Coattails",
        "slug": "coattails",
        "path": "/buffs/coattails/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Astroturfing",
        "slug": "astroturfing",
        "path": "/moves/astroturfing/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "School board meeting",
        "slug": "school-board-meeting",
        "path": "/habitats/school-board-meeting/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Spin room",
        "slug": "spin-room",
        "path": "/habitats/spin-room/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Rally",
        "slug": "rally",
        "path": "/habitats/rally/"
      }
    ]
  },
  {
    "term": "Thought-terminating cliché",
    "slug": "thought-terminating-cliche",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/thought-terminating-cliche/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 10,
    "sort": {
      "impact": 4,
      "abuse": 5,
      "blowback": 2
    },
    "etymology": "Named by Robert Jay Lifton in his study of thought reform: a phrase that ends the thinking rather than the question.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Faulty generalization"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A question has been raised that would take real work to answer."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is a proverb: everything happens for a reason, it is what it is, both sides have a point."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask what the phrase actually asserts. Most of these sentences, unpacked, turn out to be either obvious or false."
      }
    ],
    "voice": "The reply is a proverb: everything happens for a reason, it is what it is, both sides have a point.",
    "senses": [
      "Closing a line of thought with a stock phrase that sounds like a conclusion and forecloses the next question.",
      "It works because the phrase is familiar and warm. Familiarity reads as wisdom, and the sentence arrives pre-approved, so using it feels like agreeing with everyone rather than ending an argument."
    ],
    "notes": [],
    "example": "“It is what it is.” Said about a policy that could be changed, by the people who could change it.",
    "cite": {
      "label": "Wikipedia · Thought-terminating cliché",
      "url": "https://en.wikipedia.org/wiki/Thought-terminating_clich%C3%A9"
    },
    "summary": "Informal · Faulty generalization fallacy: Closing a line of thought with a stock phrase that sounds like a conclusion and forecloses the next question.",
    "confusedWith": [
      {
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "tell": "The cliché stops the conversation with familiarity; the assertion stops it with confidence.",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "related": [
      {
        "term": "Appeal to tradition",
        "slug": "appeal-to-tradition",
        "path": "/fallacies/appeal-to-tradition/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "False attribution",
    "slug": "false-attribution",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/false-attribution/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 11,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 5
    },
    "etymology": "Also quoting out of context: the words are real, the sentence they were in is gone.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Red herring"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A quote would settle the argument and the full text would not."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The quotation marks are doing the work, and the surrounding sentence has been removed."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Open the source and read the paragraph. Attribution is checkable, which makes this the most falsifiable fallacy in the guide."
      }
    ],
    "voice": "The quotation marks are doing the work, and the surrounding sentence has been removed.",
    "senses": [
      "Ascribing to someone a claim they did not make - by misquoting, by quoting a fragment, or by naming a source that never said it.",
      "It works because the citation is true as far as it goes. Verifying a quote means opening the transcript, and most readers will only verify the part that already agrees with them."
    ],
    "notes": [],
    "example": "“They said the plan was dead on arrival.” The transcript says it was dead on arrival in the Senate, which then passed it.",
    "cite": {
      "label": "Wikipedia · False attribution",
      "url": "https://en.wikipedia.org/wiki/False_attribution"
    },
    "summary": "Informal · Red herring fallacy: Ascribing to someone a claim they did not make - by misquoting, by quoting a fragment, or by naming a source that never said...",
    "confusedWith": [
      {
        "term": "Straw man",
        "slug": "straw-man",
        "tell": "False attribution puts new words in someone’s mouth; the straw man puts a weaker argument there.",
        "path": "/fallacies/straw-man/"
      }
    ],
    "related": [
      {
        "term": "Cherry picking",
        "slug": "cherry-picking",
        "path": "/fallacies/cherry-picking/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Mythstorian",
        "slug": "mythstorian",
        "path": "/species/mythstorian/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Group chat",
        "slug": "group-chat",
        "path": "/habitats/group-chat/"
      }
    ]
  },
  {
    "term": "Shifting the burden of proof",
    "slug": "shifting-the-burden-of-proof",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/shifting-the-burden-of-proof/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 12,
    "sort": {
      "impact": 4,
      "abuse": 4,
      "blowback": 3
    },
    "etymology": "Latin: onus probandi. The burden sits with whoever makes the claim - and the shift is the act of handing it over.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Presumption"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim has been made with no evidence offered."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is “prove me wrong” or “do your own research”, and the original claim is never defended."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "State who holds the burden and what would count as evidence. A claim does not become true by surviving an audit it never had to pass."
      }
    ],
    "voice": "The reply is “prove me wrong” or “do your own research”, and the original claim is never defended.",
    "senses": [
      "Demanding that others disprove a claim instead of supporting it, so that the absence of disproof is treated as support.",
      "It works because a demand sounds like an invitation to debate. The audience rarely notices that the person making the claim has not made a case for it."
    ],
    "notes": [],
    "example": "“Show me the study that says it is harmful.” The claim was that it is safe; the absent study is not a finding.",
    "cite": {
      "label": "Wikipedia · Burden of proof (philosophy)",
      "url": "https://en.wikipedia.org/wiki/Burden_of_proof_(philosophy)"
    },
    "summary": "Informal · Presumption fallacy: Demanding that others disprove a claim instead of supporting it, so that the absence of disproof is treated as support.",
    "confusedWith": [
      {
        "term": "Argument from ignorance",
        "slug": "argument-from-ignorance",
        "tell": "Ignorance treats a gap as proof; the shift assigns the work of closing the gap to the sceptic.",
        "path": "/fallacies/argument-from-ignorance/"
      }
    ],
    "related": [
      {
        "term": "Sealioning",
        "slug": "sealioning",
        "path": "/fallacies/sealioning/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Trust-Me-Brofessor",
        "slug": "trust-me-brofessor",
        "path": "/species/trust-me-brofessor/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Receiptbomb",
        "slug": "receiptbomb",
        "path": "/moves/receiptbomb/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Flood the zone",
        "slug": "flood-the-zone",
        "path": "/moves/flood-the-zone/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Subpoenado",
        "slug": "subpoenado",
        "path": "/abilities/subpoenado/"
      }
    ]
  },
  {
    "term": "Gish gallop",
    "slug": "gish-gallop",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/gish-gallop/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 13,
    "sort": {
      "impact": 4,
      "abuse": 3,
      "blowback": 3
    },
    "etymology": "Named after Duane Gish, who debated by assertion density: more claims per minute than anyone could answer.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A format with fixed time and a live audience."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is dozens of claims and no thread; the answer addresses four and looks evasive about the rest."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Answer one claim at length and say the rest are unanswered rather than answered. Quantity was the tactic; refusing it is the counter."
      }
    ],
    "voice": "The reply is dozens of claims and no thread; the answer addresses four and looks evasive about the rest.",
    "senses": [
      "Overwhelming an opponent with a flood of dubious claims so that answering all of them is impossible in the time available.",
      "It works on arithmetic, not argument. Each claim takes ten seconds to make and ten minutes to check, and the format does not care that they are not equally cheap."
    ],
    "notes": [],
    "example": "“Fourteen points: the vote, the machines, the ballots, the envelopes, the couriers…” Fourteen claims, ninety seconds, one of them true.",
    "cite": {
      "label": "Wikipedia · Gish gallop",
      "url": "https://en.wikipedia.org/wiki/Gish_gallop"
    },
    "summary": "Informal · Relevance fallacy: Overwhelming an opponent with a flood of dubious claims so that answering all of them is impossible in the time available.",
    "confusedWith": [
      {
        "term": "Ad nauseam",
        "slug": "ad-nauseam",
        "tell": "Ad nauseam repeats one claim; the gallop produces a new one every sentence.",
        "path": "/fallacies/ad-nauseam/"
      }
    ],
    "related": [
      {
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Filibluster",
        "slug": "filibluster",
        "path": "/abilities/filibluster/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Receiptbomb",
        "slug": "receiptbomb",
        "path": "/moves/receiptbomb/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Flood the zone",
        "slug": "flood-the-zone",
        "path": "/moves/flood-the-zone/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Cable panel",
        "slug": "cable-panel",
        "path": "/habitats/cable-panel/"
      }
    ]
  },
  {
    "term": "Appeal to the stone",
    "slug": "appeal-to-the-stone",
    "kind": "fallacy",
    "kindLabel": "Fallacy",
    "path": "/fallacies/appeal-to-the-stone/",
    "chapter": "strays",
    "chapterRoman": "V",
    "chapterTitle": "Stray Arguments",
    "partOfSpeech": "noun",
    "ipa": null,
    "position": 14,
    "sort": {
      "impact": 2,
      "abuse": 4,
      "blowback": 2
    },
    "etymology": "Latin: argumentum ad lapidem - Dr Johnson refuted Berkeley by kicking a stone and saying “I refute it thus”.",
    "identification": [
      {
        "key": "family",
        "label": "Family",
        "type": "text",
        "value": "Informal · Relevance"
      },
      {
        "key": "committed_when",
        "label": "Committed when",
        "type": "text",
        "value": "A claim sounds wrong on its face and the speaker cannot say why."
      },
      {
        "key": "tell",
        "label": "The tell",
        "type": "text",
        "value": "The reply is a verdict - ridiculous, obviously false, come on - with no reason attached to it."
      },
      {
        "key": "counter",
        "label": "Counter",
        "type": "text",
        "value": "Ask for the reason. If the claim really is absurd, the reason is easy to give, and giving it is the whole difference."
      }
    ],
    "voice": "The reply is a verdict - ridiculous, obviously false, come on - with no reason attached to it.",
    "senses": [
      "Dismissing a claim as absurd without saying what is wrong with it, treating obviousness as an argument.",
      "It works because most absurd-sounding claims are absurd, so the reflex is usually right. The problem is that it cannot tell the two cases apart, and it never has to show its work."
    ],
    "notes": [],
    "example": "“That is the dumbest thing I have heard all week.” Possible. The sentence has not said which part is wrong.",
    "cite": {
      "label": "Wikipedia · Appeal to the stone",
      "url": "https://en.wikipedia.org/wiki/Appeal_to_the_stone"
    },
    "summary": "Informal · Relevance fallacy: Dismissing a claim as absurd without saying what is wrong with it, treating obviousness as an argument.",
    "confusedWith": [
      {
        "term": "Appeal to ridicule",
        "slug": "appeal-to-ridicule",
        "tell": "Ridicule makes the claim funny; the stone simply declares it absurd. The stone is lazier and more common.",
        "path": "/fallacies/appeal-to-ridicule/"
      }
    ],
    "related": [
      {
        "term": "Proof by assertion",
        "slug": "proof-by-assertion",
        "path": "/fallacies/proof-by-assertion/"
      }
    ],
    "edges": [],
    "backlinks": [
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "LARPtarian",
        "slug": "larptarian",
        "path": "/species/larptarian/"
      },
      {
        "rel": "commits",
        "label": "Committed by",
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      },
      {
        "rel": "houses",
        "label": "Found in",
        "term": "Comment section",
        "slug": "comment-section",
        "path": "/habitats/comment-section/"
      }
    ]
  },
  {
    "term": "The clerk",
    "slug": "the-clerk",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-clerk/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/klɑːk/",
    "position": 1,
    "sort": {
      "impact": 5,
      "abuse": 1,
      "blowback": 2
    },
    "etymology": "Old English clerc, a cleric - the literate man who kept the book because he was the one who could read.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The minutes, the roll, and the file that proves both."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“That’s not in the record.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Reads the motion aloud, slowly",
          "Knows the quorum rule without looking it up",
          "Keeps the version that was actually adopted"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the clerk there is no record, and without a record there is no way to prove what the body did - which is the first thing a Sabotriot needs and the last thing they check."
      }
    ],
    "voice": "“That’s not in the record.”",
    "senses": [
      "The officer who keeps the body’s memory: the agenda, the roll call, the minutes, the motions as adopted rather than as proposed. In most places this is an elected or appointed post with a statutory duty to the record.",
      "It works because procedure is evidence. A vote nobody recorded is a vote somebody can deny, so the clerk’s real power is not the gavel but the file - and the job stays invisible precisely until it is done badly."
    ],
    "notes": [],
    "example": "“Two years later the only proof of what the council had voted for was the **clerk**’s minutes, and the member who had denied it was reading them aloud.”",
    "cite": null,
    "summary": "The officer who keeps the body’s memory: the agenda, the roll call, the minutes, the motions as adopted rather than as proposed. In most places this...",
    "confusedWith": [
      {
        "term": "The archivist",
        "slug": "the-archivist",
        "tell": "The clerk keeps what the body did this year; the archivist keeps what it did in 1974.",
        "path": "/keystones/the-archivist/"
      }
    ],
    "related": [
      {
        "term": "The poll worker",
        "slug": "the-poll-worker",
        "path": "/keystones/the-poll-worker/"
      },
      {
        "term": "Records request",
        "slug": "records-request",
        "path": "/remedies/records-request/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "Records request",
        "slug": "records-request",
        "path": "/remedies/records-request/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Sabotriot",
        "slug": "sabotriot",
        "path": "/species/sabotriot/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The poll worker",
    "slug": "the-poll-worker",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-poll-worker/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/pəʊl ˈwɜː.kə/",
    "position": 2,
    "sort": {
      "impact": 5,
      "abuse": 1,
      "blowback": 2
    },
    "etymology": "English: the precinct official who works the poll - a temporary, trained, paid job anyone can take.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The roll, the provisional ballot, and the chain of custody that starts when the box is sealed."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Name and address, please.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Reads the instruction card out loud",
          "Offers the provisional ballot before the argument starts",
          "Knows the closing time and the recount rule"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without them the ballot is a rumour and the count is an assertion. The Sovereign Shillizen needs an empty table to make ‘I do not consent’ sound like law; the poll worker is the person who fills it."
      }
    ],
    "voice": "“Name and address, please.”",
    "senses": [
      "The precinct official who checks the roll, issues the ballot, and signs the paperwork that lets the count be reconstructed afterwards. The job is temporary and public, which is the point: the count is run by neighbours who can be watched.",
      "It works because every ballot that crosses the table is accounted for by two people who are allowed to disagree. The whole apparatus exists so that a stranger with a clipboard can prove the number is right, months later, without trusting anybody."
    ],
    "notes": [],
    "example": "“The scanner jammed at nine, and the **poll worker** did what the training had covered: sealed the bin, called the county, and read the numbers into the log with an observer watching.”",
    "cite": null,
    "summary": "The precinct official who checks the roll, issues the ballot, and signs the paperwork that lets the count be reconstructed afterwards. The job is...",
    "confusedWith": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "tell": "The clerk records what the body did; the poll worker records what the voter did, one name at a time.",
        "path": "/keystones/the-clerk/"
      }
    ],
    "related": [
      {
        "term": "The public count",
        "slug": "the-public-count",
        "path": "/remedies/the-public-count/"
      },
      {
        "term": "The auditor",
        "slug": "the-auditor",
        "path": "/keystones/the-auditor/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The public count",
        "slug": "the-public-count",
        "path": "/remedies/the-public-count/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The archivist",
    "slug": "the-archivist",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-archivist/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈɑː.kɪ.vɪst/",
    "position": 3,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 2
    },
    "etymology": "From the Greek arkheion, the house of the magistrate - the building where the record was kept because it was the record.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The retention schedule, the box number, and the thing everybody assumed was saved."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“We have that. It’s in the 1974 series.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Asks what you intend to do with it",
          "Refuses to let a file leave the building",
          "Can date a photograph by the paper"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the archive the past is a rumour with a monument, and every Mythstorian gets to write the decade. Retention schedules are boring until the only copy of the decision is in a shredder."
      }
    ],
    "voice": "“We have that. It’s in the 1974 series.”",
    "senses": [
      "The keeper of the record after the news cycle: the box, the series, and the schedule that says what may be destroyed and what may not. Archivists are usually the only people in an institution with a professional duty to keep things nobody is asking for.",
      "It works because provenance is checkable. A document with a series, a date and a custodian can be authenticated by a stranger; a document in somebody’s drawer cannot - and that difference decides whether a claim about the past can be settled at all."
    ],
    "notes": [],
    "example": "“The department said the policy had never existed, and the **archivist** produced the 1998 memo, the routing slip, and the name of the official who had signed it.”",
    "cite": null,
    "summary": "The keeper of the record after the news cycle: the box, the series, and the schedule that says what may be destroyed and what may not. Archivists are...",
    "confusedWith": [
      {
        "term": "The librarian",
        "slug": "the-librarian",
        "tell": "The archivist keeps the thing; the librarian finds it.",
        "path": "/keystones/the-librarian/"
      }
    ],
    "related": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      },
      {
        "term": "The transcript",
        "slug": "the-transcript",
        "path": "/remedies/the-transcript/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The transcript",
        "slug": "the-transcript",
        "path": "/remedies/the-transcript/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Mythstorian",
        "slug": "mythstorian",
        "path": "/species/mythstorian/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The librarian",
    "slug": "the-librarian",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-librarian/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/laɪˈbreə.ri.ən/",
    "position": 4,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 2
    },
    "etymology": "From the Latin librarius, a copyist - the trade that became a profession the day the public was allowed in.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The reference desk, the database licence, and the right to ask a question that sounds stupid."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Let’s find out together.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Answers with a source and a call number",
          "Says ‘I don’t know’ without flinching",
          "Teaches the search instead of the answer"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the desk, ‘do your own research’ means ‘go alone into the feed’, which is the Illogician’s entire business model. The library is the one place in town where being wrong is free."
      }
    ],
    "voice": "“Let’s find out together.”",
    "senses": [
      "The professional who finds things: the reference interview, the interlibrary loan, the database the public paid for and cannot afford alone. The job is not to know the answer; it is to know how the answer is checked.",
      "It works because the desk is neutral by design. A librarian has no stake in which source wins, which is why the same question can be asked there without a cost - and why the institution gets defunded by people who would rather the question cost something."
    ],
    "notes": [],
    "example": "“He had done his own research for a year, and the **librarian** found the study he had been citing, the correction to it, and the retraction, in about eleven minutes.”",
    "cite": null,
    "summary": "The professional who finds things: the reference interview, the interlibrary loan, the database the public paid for and cannot afford alone. The job...",
    "confusedWith": [
      {
        "term": "The editor",
        "slug": "the-editor",
        "tell": "The librarian finds the source; the editor refuses to publish without it.",
        "path": "/keystones/the-editor/"
      }
    ],
    "related": [
      {
        "term": "The archivist",
        "slug": "the-archivist",
        "path": "/keystones/the-archivist/"
      },
      {
        "term": "Lateral reading",
        "slug": "lateral-reading",
        "path": "/remedies/lateral-reading/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "Lateral reading",
        "slug": "lateral-reading",
        "path": "/remedies/lateral-reading/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The caseworker",
    "slug": "the-caseworker",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-caseworker/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈkeɪsˌwɜː.kə/",
    "position": 5,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: the official who carries a caseload - the point where a statute becomes a decision about one household.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The form, the deadline, and the discretion to read a rule the way it was written."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“You qualify. Here’s the page that says so.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Knows the appeal deadline better than the appellant",
          "Writes the reason into the letter",
          "Answers the phone on the second ring"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the caseworker, policy is a press release. The Plutomartyr needs a benefit that arrives as a favour rather than as an entitlement; the caseworker is the person who hands it over as a right."
      }
    ],
    "voice": "“You qualify. Here’s the page that says so.”",
    "senses": [
      "The front-line official who turns a statute into a decision about one person: the form, the means test, the letter that says yes or no. Political scientists call this street-level bureaucracy, and it is where most of the state is actually experienced.",
      "It works because discretion is unavoidable and therefore visible. No rule covers every case, so the caseworker decides, and the decision is only legitimate if it comes with reasons - which makes the job both the most humane part of the state and the easiest part to cut."
    ],
    "notes": [],
    "example": "“The letter said no, the **caseworker** read the appeal, found the clause the automated screen had missed, and the cheque arrived nine days later.”",
    "cite": null,
    "summary": "The front-line official who turns a statute into a decision about one person: the form, the means test, the letter that says yes or no. Political...",
    "confusedWith": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "tell": "The clerk records the decision; the caseworker delivers it to somebody who needs it by Friday.",
        "path": "/keystones/the-clerk/"
      }
    ],
    "related": [
      {
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      },
      {
        "term": "The auditor",
        "slug": "the-auditor",
        "path": "/keystones/the-auditor/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Plutomartyr",
        "slug": "plutomartyr",
        "path": "/species/plutomartyr/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The editor",
    "slug": "the-editor",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-editor/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈed.ɪ.tə/",
    "position": 6,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "From the Latin edere, to give out - the one who decides what leaves the building.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The second source, the corrections policy, and the authority to hold a story for a day."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Who else has this?”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Kills a story that would have worked",
          "Puts the correction at the top, not the bottom",
          "Answers the phone when the subject calls"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the desk, volume is the only quality signal left and the Slopagandist wins by publishing first. Editing is the cost that makes publishing expensive enough to mean something."
      }
    ],
    "voice": "“Who else has this?”",
    "senses": [
      "The person between the reporter and the press: the one who asks for the second source, reads the letter from the subject’s lawyer, and decides what the story is actually claiming. The job is institutional rather than personal - it exists so the decision is not made by the person who wrote the sentence.",
      "It works because a published correction is expensive. An editor who has had to print one remembers it, and that memory is the only thing standing between a newsroom and a feed - which is why the desk is the first thing cut when the business model moves to volume."
    ],
    "notes": [],
    "example": "“The **editor** held the story a day, the second call changed the second paragraph, and the version that ran was the one that survived being read to the person it was about.”",
    "cite": null,
    "summary": "The person between the reporter and the press: the one who asks for the second source, reads the letter from the subject’s lawyer, and decides what...",
    "confusedWith": [
      {
        "term": "The moderator",
        "slug": "the-moderator",
        "tell": "The editor decides what is published; the moderator decides what gets answered.",
        "path": "/keystones/the-moderator/"
      }
    ],
    "related": [
      {
        "term": "The librarian",
        "slug": "the-librarian",
        "path": "/keystones/the-librarian/"
      },
      {
        "term": "The second source",
        "slug": "the-second-source",
        "path": "/remedies/the-second-source/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The second source",
        "slug": "the-second-source",
        "path": "/remedies/the-second-source/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The moderator",
    "slug": "the-moderator",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-moderator/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈmɒd.ə.reɪ.tə/",
    "position": 7,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "From the Latin moderari, to keep within bounds - the same root as moderate, and the same job.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The question, the clock, and the rule that an answer has to be an answer."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“That’s not what I asked.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Repeats the question, word for word",
          "Gives the same time to the side that is losing",
          "Checks the claim while it is still in the room"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the moderator, a debate is two broadcasts sharing a room and the Sophistroll wins by making the format the argument. A question that has to be answered is a question that can be marked unanswered."
      }
    ],
    "voice": "“That’s not what I asked.”",
    "senses": [
      "The person who runs the format: the question, the time, the follow-up, and the willingness to say on air that the answer did not address what was asked. Moderation is a procedural job that everybody mistakes for a personality.",
      "It works because a live check is cheap. A moderator can ask for the source while the claim is still in the room, which is the one moment when verification costs the speaker something - and the reason formats without moderators are so popular with people who need a claim to travel."
    ],
    "notes": [],
    "example": "“The **moderator** asked the same question three times, got three answers about something else, and said so on air - which was the whole of the remedy.”",
    "cite": null,
    "summary": "The person who runs the format: the question, the time, the follow-up, and the willingness to say on air that the answer did not address what was...",
    "confusedWith": [
      {
        "term": "The steelman",
        "slug": "the-steelman",
        "tell": "The moderator runs the format; the steelman is what the format is for.",
        "path": "/remedies/the-steelman/"
      }
    ],
    "related": [
      {
        "term": "The editor",
        "slug": "the-editor",
        "path": "/keystones/the-editor/"
      },
      {
        "term": "The caseworker",
        "slug": "the-caseworker",
        "path": "/keystones/the-caseworker/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The steelman",
        "slug": "the-steelman",
        "path": "/remedies/the-steelman/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Sophistroll",
        "slug": "sophistroll",
        "path": "/species/sophistroll/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "The auditor",
    "slug": "the-auditor",
    "kind": "keystone",
    "kindLabel": "Keystone",
    "path": "/keystones/the-auditor/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈɔː.dɪ.tə/",
    "position": 8,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "From the Latin audire, to hear - the officer who heard the accounts read aloud, because the books were once spoken.",
    "identification": [
      {
        "key": "office",
        "label": "Office",
        "type": "text",
        "value": "The sample, the standard, and the report nobody commissioned."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Show me the transaction.”"
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Publishes the methodology before the finding",
          "Names the office, not the mood",
          "Comes back the following year"
        ]
      },
      {
        "key": "keystone",
        "label": "Keystone",
        "type": "text",
        "value": "Without the auditor the books are a story an office tells about itself, and the Cronycle is just a friend with a contract. Audit is the difference between a claim and a record."
      }
    ],
    "voice": "“Show me the transaction.”",
    "senses": [
      "The examiner with a statutory right to the books: the inspector general, the state auditor, the outside firm working to a scope it did not negotiate with the audited. The output is not an opinion; it is a finding with a name and a date attached.",
      "It works because the sample is public and repeatable. An audit that says how it chose what to look at can be checked by anyone, which is what separates it from a review - and why the first move against an auditor is always to shrink the scope."
    ],
    "notes": [],
    "example": "“The **auditor** pulled forty contracts, found the same vendor in eleven of them, and published the sampling method so that the finding could be argued with.”",
    "cite": null,
    "summary": "The examiner with a statutory right to the books: the inspector general, the state auditor, the outside firm working to a scope it did not negotiate...",
    "confusedWith": [
      {
        "term": "The archivist",
        "slug": "the-archivist",
        "tell": "The archivist keeps the record; the auditor reads it and says what it shows.",
        "path": "/keystones/the-archivist/"
      }
    ],
    "related": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      },
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      },
      {
        "term": "The caseworker",
        "slug": "the-caseworker",
        "path": "/keystones/the-caseworker/"
      }
    ],
    "edges": [
      {
        "rel": "practises",
        "label": "Practises",
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      },
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Cronycle",
        "slug": "cronycle",
        "path": "/abilities/cronycle/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Records request",
    "slug": "records-request",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/records-request/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈrek.ɔːdz rɪˌkwest/",
    "position": 9,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: the statutory demand for a document, known in the United States as FOIA and elsewhere as freedom of information or right to know.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Turns a question into a deadline: the agency has to answer in writing, or say in writing why it will not."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "Fees, weeks, and the patience to appeal a redaction."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The fee estimate that costs more than the record, and the exemption that arrives after the news cycle."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "An answer with a reference number",
          "A redaction log with reasons",
          "A date you can hold them to"
        ]
      }
    ],
    "voice": "Turns a question into a deadline: the agency has to answer in writing, or say in writing why it will not.",
    "senses": [
      "The open-records request: a statute that makes the document the default and the refusal the exception, with a clock attached. You do not need a lawyer or a reason - you need the right office and the right words.",
      "It works because writing is expensive. A request forces the agency to produce the record or name the exemption, and either answer is itself a document - so the remedy’s real product is often not the file but the refusal, which can be appealed, published, and read aloud."
    ],
    "notes": [],
    "example": "“The **records request** came back in eleven weeks with forty pages, nine redactions, and an exemption cited for a document the agency had already put on its own website.”",
    "cite": null,
    "summary": "The open-records request: a statute that makes the document the default and the refusal the exception, with a clock attached. You do not need a...",
    "confusedWith": [
      {
        "term": "The transcript",
        "slug": "the-transcript",
        "tell": "The request gets the document the body already wrote; the transcript makes a document out of what it said.",
        "path": "/remedies/the-transcript/"
      }
    ],
    "related": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      },
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      }
    ]
  },
  {
    "term": "The transcript",
    "slug": "the-transcript",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-transcript/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈtræn.skrɪpt/",
    "position": 10,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "From the Latin transcribere, to copy across - the written version of a thing that was said out loud.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Converts a performance into a text, and a text into something you can quote back."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "Time, and the risk that your quote is worse out of context than it was in it."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The transcript that is still being finalised, and the correction that quietly changes a word."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Timestamps",
          "A speaker label on every line",
          "A version number"
        ]
      }
    ],
    "voice": "Converts a performance into a text, and a text into something you can quote back.",
    "senses": [
      "The verbatim record: what was said, in order, with who said it. Cheap to produce now and still the only artefact that settles an argument about what somebody said on Tuesday.",
      "It works because a text can be searched and a performance cannot. The clip is chosen by whoever edits it; the transcript is chosen by whoever reads it - and that difference is the whole of the remedy."
    ],
    "notes": [],
    "example": "“The clip was everywhere by noon, and the **transcript** showed that the sentence had begun eleven seconds earlier, in a conditional.”",
    "cite": null,
    "summary": "The verbatim record: what was said, in order, with who said it. Cheap to produce now and still the only artefact that settles an argument about what...",
    "confusedWith": [
      {
        "term": "Records request",
        "slug": "records-request",
        "tell": "The request gets what the body wrote down; the transcript is what it said before anybody wrote it down.",
        "path": "/remedies/records-request/"
      }
    ],
    "related": [
      {
        "term": "The archivist",
        "slug": "the-archivist",
        "path": "/keystones/the-archivist/"
      },
      {
        "term": "The second source",
        "slug": "the-second-source",
        "path": "/remedies/the-second-source/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Vaguebooking",
        "slug": "vaguebooking",
        "path": "/moves/vaguebooking/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The archivist",
        "slug": "the-archivist",
        "path": "/keystones/the-archivist/"
      }
    ]
  },
  {
    "term": "Lateral reading",
    "slug": "lateral-reading",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/lateral-reading/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "verb phrase / gerund",
    "ipa": "/ˈlæt.ər.əl ˈriː.dɪŋ/",
    "position": 11,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 2
    },
    "etymology": "English: reading sideways - leaving the page to find out who is behind it, rather than reading down it for clues.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Checks a claim by leaving the page: who else is saying this, and what do they say about the source saying it."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "Ninety seconds, and the discipline to leave a page you already believe."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The search that returns the claim’s own ecosystem, and the fact-check that cites the thing it is checking."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Two sources that do not cite each other",
          "A name, a date, a document",
          "A correction you can find"
        ]
      }
    ],
    "voice": "Checks a claim by leaving the page: who else is saying this, and what do they say about the source saying it.",
    "senses": [
      "The reading strategy taught in media literacy: do not evaluate a claim from inside the page that makes it. Open another tab and find out who the publisher is, what they have got wrong before, and who else is reporting the same thing.",
      "It works because the web is cheap to search and expensive to fake at scale. A claim can be dressed up on one page; it is much harder to be independently confirmed by people with nothing to gain - so the check is not the page, it is the company the page keeps."
    ],
    "notes": [],
    "example": "“The site looked like a newspaper, so she did the **lateral reading**: nine seconds to the about page, nine more to the domain registration, and the story was a press release with a masthead.”",
    "cite": null,
    "summary": "The reading strategy taught in media literacy: do not evaluate a claim from inside the page that makes it. Open another tab and find out who the...",
    "confusedWith": [
      {
        "term": "The second source",
        "slug": "the-second-source",
        "tell": "Lateral reading checks a claim against the world; the second source is the world agreeing to go on the record.",
        "path": "/remedies/the-second-source/"
      }
    ],
    "related": [
      {
        "term": "The librarian",
        "slug": "the-librarian",
        "path": "/keystones/the-librarian/"
      },
      {
        "term": "The steelman",
        "slug": "the-steelman",
        "path": "/remedies/the-steelman/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Algodemic",
        "slug": "algodemic",
        "path": "/species/algodemic/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The librarian",
        "slug": "the-librarian",
        "path": "/keystones/the-librarian/"
      }
    ]
  },
  {
    "term": "The second source",
    "slug": "the-second-source",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-second-source/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ðə ˈsek.ənd sɔːs/",
    "position": 12,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 2
    },
    "etymology": "Newsroom English: the confirmation that does not depend on the first one.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Requires a claim to exist somewhere else before it is published, and pays for the call that finds out."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "A day of the story’s life, and the possibility that the second call kills it."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The second source that is the first source’s spokesperson, and the wire copy everyone treats as confirmation."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Two people who could not have talked to each other",
          "A document that predates the claim",
          "A story that survives being read to its subject"
        ]
      }
    ],
    "voice": "Requires a claim to exist somewhere else before it is published, and pays for the call that finds out.",
    "senses": [
      "The rule that a claim needs independent confirmation before it runs: a second person, a document, or a record that does not depend on the first. It is a cost, deliberately, and the cost is the quality control.",
      "It works because independence is checkable. Two sources who share a motive are one source with two mouths, so the discipline is not counting - it is asking how each of them knows, and whether their knowing depends on the same thing."
    ],
    "notes": [],
    "example": "“The **second source** was the clerk’s copy of the filing, which did not depend on the first source at all, and the story ran with the page number in the second paragraph.”",
    "cite": null,
    "summary": "The rule that a claim needs independent confirmation before it runs: a second person, a document, or a record that does not depend on the first. It...",
    "confusedWith": [
      {
        "term": "Lateral reading",
        "slug": "lateral-reading",
        "tell": "Lateral reading is what a reader does in ninety seconds; the second source is what a newsroom does in ninety minutes.",
        "path": "/remedies/lateral-reading/"
      }
    ],
    "related": [
      {
        "term": "The editor",
        "slug": "the-editor",
        "path": "/keystones/the-editor/"
      },
      {
        "term": "The transcript",
        "slug": "the-transcript",
        "path": "/remedies/the-transcript/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The editor",
        "slug": "the-editor",
        "path": "/keystones/the-editor/"
      }
    ]
  },
  {
    "term": "The steelman",
    "slug": "the-steelman",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-steelman/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈstiːl.mæn/",
    "position": 13,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "English: the deliberate opposite of the straw man - the argument rebuilt in steel so that refuting it means something.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "States the other side’s argument in its strongest form, then answers that version instead of the worst one."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "The risk of being persuaded, and the work of finding the best version rather than the loudest."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The steelman built by the wrong side, and the version so strong that it stops being the argument anybody actually made."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "The other side says ‘yes, that’s it’",
          "The strongest source, not the loudest",
          "A reply that addresses the claim"
        ]
      }
    ],
    "voice": "States the other side’s argument in its strongest form, then answers that version instead of the worst one.",
    "senses": [
      "The discipline of reconstructing an opponent’s position at its best before answering it: the principle of charity, run as a procedure rather than a mood.",
      "It works because a weak target is a way of not answering. If you can only refute the worst version of an argument you have not refuted the argument - and saying the strong version out loud is what makes the difference visible to everyone in the room."
    ],
    "notes": [],
    "example": "“She wrote the **steelman** first, sent it to the person she disagreed with, got a ‘yes, that’s it’, and only then wrote the reply.”",
    "cite": null,
    "summary": "The discipline of reconstructing an opponent’s position at its best before answering it: the principle of charity, run as a procedure rather than a...",
    "confusedWith": [
      {
        "term": "Bothsidesing",
        "slug": "bothsidesing",
        "tell": "Bothsidesing splits the difference; the steelman takes one side at its strongest and then argues with it.",
        "path": "/moves/bothsidesing/"
      }
    ],
    "related": [
      {
        "term": "The moderator",
        "slug": "the-moderator",
        "path": "/keystones/the-moderator/"
      },
      {
        "term": "Lateral reading",
        "slug": "lateral-reading",
        "path": "/remedies/lateral-reading/"
      },
      {
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Equivangelist",
        "slug": "equivangelist",
        "path": "/species/equivangelist/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The moderator",
        "slug": "the-moderator",
        "path": "/keystones/the-moderator/"
      }
    ]
  },
  {
    "term": "The public count",
    "slug": "the-public-count",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-public-count/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ðə ˈpʌb.lɪk kaʊnt/",
    "position": 14,
    "sort": {
      "impact": 5,
      "abuse": 1,
      "blowback": 2
    },
    "etymology": "English: the count of ballots in a room with watchers - the oldest audit there is.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Counts in a room anyone can watch, and publishes the number the room saw."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "Time, observers, and a process slow enough to be watched."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The observers who are told where to stand, and the tally reconciled in a room with no windows."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "Observers with a legal right to be there",
          "A reconciliation you can follow",
          "Numbers published before the result is known"
        ]
      }
    ],
    "voice": "Counts in a room anyone can watch, and publishes the number the room saw.",
    "senses": [
      "The count as a public act: ballots counted in a room with watchers from both sides, every ballot issued reconciled against every ballot counted, and a number published that matches the room.",
      "It works because the alternative is a claim. A count nobody watched is an assertion about arithmetic, and an assertion can be doubted forever; a count that was watched can only be doubted by producing a different number from a different room."
    ],
    "notes": [],
    "example": "“The **public count** ran until two in the morning with both parties at the table, and the number that came out was the number both parties had watched being counted.”",
    "cite": null,
    "summary": "The count as a public act: ballots counted in a room with watchers from both sides, every ballot issued reconciled against every ballot counted, and...",
    "confusedWith": [
      {
        "term": "The audit",
        "slug": "the-audit",
        "tell": "The count is watched while it happens; the audit checks it afterwards, on a sample.",
        "path": "/remedies/the-audit/"
      }
    ],
    "related": [
      {
        "term": "The poll worker",
        "slug": "the-poll-worker",
        "path": "/keystones/the-poll-worker/"
      },
      {
        "term": "Records request",
        "slug": "records-request",
        "path": "/remedies/records-request/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Sovereign Shillizen",
        "slug": "sovereign-shillizen",
        "path": "/species/sovereign-shillizen/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The poll worker",
        "slug": "the-poll-worker",
        "path": "/keystones/the-poll-worker/"
      }
    ]
  },
  {
    "term": "The written reason",
    "slug": "the-written-reason",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-written-reason/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ðə ˈrɪt.ən ˈriː.zən/",
    "position": 15,
    "sort": {
      "impact": 4,
      "abuse": 2,
      "blowback": 2
    },
    "etymology": "English: the duty to give reasons - the administrative-law rule that a decision must say why it was made.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Requires a decision to say why, in writing, and how to appeal it."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "A sentence the decider would rather not write, and a deadline they would rather not have."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The boilerplate reason, copied from the last refusal, that satisfies the form and answers nothing."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A reason that names the rule",
          "An appeal address that works",
          "A decision you can quote back"
        ]
      }
    ],
    "voice": "Requires a decision to say why, in writing, and how to appeal it.",
    "senses": [
      "The duty to give reasons: an administrative decision must state the rule it applied, the facts it found, and the route to challenge it. It is the cheapest accountability mechanism ever invented, and the one most often reduced to a template.",
      "It works because a reason can be tested. A decision without reasons can only be disliked; a decision with reasons can be checked against the rule it claims to apply - which is why the template exists, and why reading the reasons is the first move of any appeal."
    ],
    "notes": [],
    "example": "“The refusal cited policy, the **written reason** was one sentence long, and the appeal quoted it back with the statute printed beside it.”",
    "cite": null,
    "summary": "The duty to give reasons: an administrative decision must state the rule it applied, the facts it found, and the route to challenge it. It is the...",
    "confusedWith": [
      {
        "term": "The transcript",
        "slug": "the-transcript",
        "tell": "The transcript records what was said; the written reason records why it was decided.",
        "path": "/remedies/the-transcript/"
      }
    ],
    "related": [
      {
        "term": "The caseworker",
        "slug": "the-caseworker",
        "path": "/keystones/the-caseworker/"
      },
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Nonpology",
        "slug": "nonpology",
        "path": "/moves/nonpology/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The caseworker",
        "slug": "the-caseworker",
        "path": "/keystones/the-caseworker/"
      }
    ]
  },
  {
    "term": "The audit",
    "slug": "the-audit",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/the-audit/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈɔː.dɪt/",
    "position": 16,
    "sort": {
      "impact": 5,
      "abuse": 2,
      "blowback": 3
    },
    "etymology": "From the Latin auditus, a hearing - the books were once read aloud to an officer whose job was to listen.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Reads the books somebody else wrote, and publishes what it finds whether or not anyone asked."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "Staff, access, and the political cost of being the office that finds things."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The audit scoped to what the audited office will agree to, and the finding that stays under review until the next election."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A published methodology",
          "Findings with names attached",
          "A follow-up audit"
        ]
      }
    ],
    "voice": "Reads the books somebody else wrote, and publishes what it finds whether or not anyone asked.",
    "senses": [
      "The independent examination: an office with a statutory right to the records, a sampling method it publishes, and a report that goes to the body it examined and to the public at the same time.",
      "It works because the method is the argument. An audit that says how it chose what to look at can be replicated or attacked on its merits; a review that says we found no wrongdoing cannot be checked at all - and the difference is the sampling."
    ],
    "notes": [],
    "example": "“The **audit** sampled forty contracts, published the sampling method, and the finding survived three attempts to discredit it because the method was in the appendix.”",
    "cite": null,
    "summary": "The independent examination: an office with a statutory right to the records, a sampling method it publishes, and a report that goes to the body it...",
    "confusedWith": [
      {
        "term": "The public count",
        "slug": "the-public-count",
        "tell": "The count is watched while it happens; the audit checks it afterwards, on a sample.",
        "path": "/remedies/the-public-count/"
      }
    ],
    "related": [
      {
        "term": "The auditor",
        "slug": "the-auditor",
        "path": "/keystones/the-auditor/"
      },
      {
        "term": "Records request",
        "slug": "records-request",
        "path": "/remedies/records-request/"
      },
      {
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Frankincense",
        "slug": "frankincense",
        "path": "/buffs/frankincense/"
      }
    ],
    "backlinks": [
      {
        "rel": "practises",
        "label": "Practised by",
        "term": "The auditor",
        "slug": "the-auditor",
        "path": "/keystones/the-auditor/"
      }
    ]
  },
  {
    "term": "Random draw",
    "slug": "random-draw",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/random-draw/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈræn.dəm drɔː/",
    "position": 17,
    "sort": {
      "impact": 3,
      "abuse": 1,
      "blowback": 2
    },
    "etymology": "English: assignment by lot - the oldest anti-corruption technology in the book, older than the book.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Takes the choice of judge, panel, or jury out of the hands of the party who benefits from it."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "A docket that is less convenient, and a schedule nobody can optimise."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The carve-out for complex cases, which is where the shopping goes to live."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A published assignment rule",
          "No exceptions in the filing",
          "A docket you cannot predict from outside"
        ]
      }
    ],
    "voice": "Takes the choice of judge, panel, or jury out of the hands of the party who benefits from it.",
    "senses": [
      "Assignment by lot: cases, judges, panels, and sometimes citizens are drawn rather than chosen. It is the same principle as the jury, and it works by making the choice uninteresting.",
      "It works because randomness removes the negotiation. Any assignment system that can be gamed will be gamed, so the fix is not a better rule about who chooses - it is the removal of the choice, which is also why the carve-outs matter more than the rule."
    ],
    "notes": [],
    "example": "“The division was redrawn to assign cases by **random draw**, and the filing that had gone to one courthouse for six years started going to nine.”",
    "cite": null,
    "summary": "Assignment by lot: cases, judges, panels, and sometimes citizens are drawn rather than chosen. It is the same principle as the jury, and it works by...",
    "confusedWith": [
      {
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "tell": "Judge shopping chooses the courtroom; the random draw removes the choice that made the courtroom worth choosing.",
        "path": "/abilities/judge-shopping/"
      }
    ],
    "related": [
      {
        "term": "The clerk",
        "slug": "the-clerk",
        "path": "/keystones/the-clerk/"
      },
      {
        "term": "Fee shift",
        "slug": "fee-shift",
        "path": "/remedies/fee-shift/"
      },
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Judge shopping",
        "slug": "judge-shopping",
        "path": "/abilities/judge-shopping/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Fee shift",
    "slug": "fee-shift",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/fee-shift/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/fiː ʃɪft/",
    "position": 18,
    "sort": {
      "impact": 4,
      "abuse": 1,
      "blowback": 2
    },
    "etymology": "English: cost-shifting - moving the bill for a lawsuit onto the party who brought it.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Moves the bill for a bad suit onto the party who filed it."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "A statute, a motion, and a judge willing to find that the suit was brought to chill."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The fee award that arrives two years late, by which time the article was never written."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A stay that stops discovery while the motion is heard",
          "A fee award that is actually collected",
          "A plaintiff who stops filing"
        ]
      }
    ],
    "voice": "Moves the bill for a bad suit onto the party who filed it.",
    "senses": [
      "The anti-SLAPP mechanism: a special motion to dismiss early, a stay on discovery while it is decided, and costs awarded to the defendant if the suit was brought to silence them.",
      "It works because it changes the arithmetic before the harm is done. The SLAPP’s business model is that defending is expensive, so the remedy is not a bigger verdict at the end - it is a smaller bill at the start."
    ],
    "notes": [],
    "example": "“The **fee shift** turned a two-year defence into a nine-week motion, and the second letter from the same lawyer never arrived.”",
    "cite": null,
    "summary": "The anti-SLAPP mechanism: a special motion to dismiss early, a stay on discovery while it is decided, and costs awarded to the defendant if the suit...",
    "confusedWith": [
      {
        "term": "SLAPP",
        "slug": "slapp",
        "tell": "The SLAPP prices speech in billable hours; the fee shift sends the invoice back to the sender.",
        "path": "/abilities/slapp/"
      }
    ],
    "related": [
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      },
      {
        "term": "Random draw",
        "slug": "random-draw",
        "path": "/remedies/random-draw/"
      },
      {
        "term": "The public count",
        "slug": "the-public-count",
        "path": "/remedies/the-public-count/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "SLAPP",
        "slug": "slapp",
        "path": "/abilities/slapp/"
      }
    ],
    "backlinks": []
  },
  {
    "term": "Sunset clause",
    "slug": "sunset-clause",
    "kind": "remedy",
    "kindLabel": "Remedy",
    "path": "/remedies/sunset-clause/",
    "chapter": "keystones",
    "chapterRoman": "VI",
    "chapterTitle": "The Keystones",
    "partOfSpeech": "noun",
    "ipa": "/ˈsʌn.set klɔːz/",
    "position": 19,
    "sort": {
      "impact": 4,
      "abuse": 1,
      "blowback": 3
    },
    "etymology": "English: the provision that lets a power expire unless somebody votes to keep it, named for the hour it ends.",
    "identification": [
      {
        "key": "effect",
        "label": "Effect",
        "type": "text",
        "value": "Gives a power a date, so that keeping it becomes a decision somebody has to make in public."
      },
      {
        "key": "costs",
        "label": "Costs",
        "type": "text",
        "value": "The reauthorisation fight, every time, including the ones you lose."
      },
      {
        "key": "failure",
        "label": "Failure mode",
        "type": "text",
        "value": "The routine extension, and the emergency that is renewed so often it becomes furniture."
      },
      {
        "key": "tell",
        "label": "Tell",
        "type": "list",
        "value": [
          "A date in the statute",
          "A report due before the date",
          "A vote that could actually fail"
        ]
      }
    ],
    "voice": "Gives a power a date, so that keeping it becomes a decision somebody has to make in public.",
    "senses": [
      "The provision that ends a power unless a body votes to renew it: a statutory expiry with a review attached, so that permanence has to be asked for out loud.",
      "It works because a deadline creates a moment. A standing power is invisible; a power that expires generates a hearing, a report, and a vote - and even a routine renewal leaves a record of who voted for it, which is the thing a standing power never has to produce."
    ],
    "notes": [],
    "example": "“The authority had been renewed eleven times, but the **sunset clause** meant every renewal had a hearing, and the eleventh was the one where somebody read the reports aloud.”",
    "cite": null,
    "summary": "The provision that ends a power unless a body votes to renew it: a statutory expiry with a review attached, so that permanence has to be asked for...",
    "confusedWith": [
      {
        "term": "Crisisglow",
        "slug": "crisisglow",
        "tell": "The crisisglow makes the emergency look permanent; the sunset clause makes permanence look like a decision.",
        "path": "/buffs/crisisglow/"
      }
    ],
    "related": [
      {
        "term": "The audit",
        "slug": "the-audit",
        "path": "/remedies/the-audit/"
      },
      {
        "term": "The written reason",
        "slug": "the-written-reason",
        "path": "/remedies/the-written-reason/"
      },
      {
        "term": "The public count",
        "slug": "the-public-count",
        "path": "/remedies/the-public-count/"
      }
    ],
    "edges": [
      {
        "rel": "counters",
        "label": "Counters",
        "term": "Crisisglow",
        "slug": "crisisglow",
        "path": "/buffs/crisisglow/"
      }
    ],
    "backlinks": []
  }
]
