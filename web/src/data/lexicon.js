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
  "entries": 81,
  "coinages": 31,
  "fallacies": 50,
  "chapters": 5,
  "kinds": {
    "species": 24,
    "move": 2,
    "ability": 0,
    "habitat": 4,
    "buff": 1,
    "fallacy": 50
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
    "blurb": "An actor you can point at: the person running the bit.",
    "identification": [
      {
        "key": "range",
        "label": "Range",
        "type": "text"
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list"
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Truck beds, county fairs, and the comment section under any local news post."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Do you support the troops?”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Flag decal on a leased vehicle",
          "Quotes a founder, never a statute",
          "Knows the anthem’s tune, not its third verse"
        ]
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
        "term": "Patriotainment",
        "slug": "patriotainment",
        "path": "/habitats/patriotainment/"
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Town-hall microphones, mask mandates, and the queue at the DMV."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“It’s a free country.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Confuses a right with an exemption",
          "Cites freedom, never a clause",
          "Loudest where the line is longest"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Homesteading channels, prepper forums, and the far end of a hardware store."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I could live off the grid tomorrow.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Solar panels on a financed roof",
          "Owns a crossbow, no arrows",
          "Files an HOA complaint about a fence"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "County recorder offices, traffic stops, and the comment section under any court ruling."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I do not consent.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Hand-lettered plate, no registration",
          "Argues in maritime law",
          "Owes back taxes on principle"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Voting booths, clinic parking lots, and the rural hospital that just closed."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I voted for the guy who’ll cut it.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Votes against the subsidy, keeps the check",
          "Waves the flag at the shuttered plant",
          "Blames the other party for the closure"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Cable primetime, the streaming docu-series, and the merch table after the rally."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Folks, they don’t want you to know this.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Every segment ends on a sponsor read",
          "Owns the flag as a prop and licenses the footage",
          "Says “the country” when meaning “my audience”",
          "No position survives a ratings dip"
        ]
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
        "term": "Slopagandist",
        "slug": "slopagandist",
        "path": "/species/slopagandist/"
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
      }
    ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Reply chains, panel shows, and Thanksgiving after the second drink."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“I’m just asking questions.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Moves the goalpost, never the argument",
          "One straw man, three fallacies",
          "Treats volume as evidence"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Podcast green rooms and any thread that opens with “Actually.”"
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Do your own research.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Confuses confidence with proof",
          "Anecdote over data, always",
          "Debates the definition, not the claim"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Video thumbnails, group chats, and the uncle who did his own research."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Trust me, bro.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Credentials never named",
          "One graph, no axis",
          "Cites a guy who cites him"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Debate stages and the replies under any fact-check."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Consider the source.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Answers proof with a résumé",
          "Curates a bibliography, reads none",
          "Every source is compromised"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Family group chats and the comment section under any correction."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Fake news.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Repeats the phrase, not the claim",
          "Never opens the link",
          "Corrects the correction"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Op-ed pages and any panel that needs both sides."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Both sides do it.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Weighs a fact against a feeling",
          "Finds the middle of a mob",
          "Treats balance as truth"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Long-form podcasts and the filibuster hour of any hearing."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“And another thing -”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Twelve claims, no sources",
          "Wins by exhausting the clock",
          "Changes the subject before the answer"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "City council meetings and the replies to anyone who raises their voice."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Let’s keep this civil.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Polite tone, hostile substance",
          "Cites procedure, never the record",
          "Calls anger unprofessional"
        ]
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
    "backlinks": []
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
      }
    ],
    "backlinks": []
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
        "term": "Illogician",
        "slug": "illogician",
        "path": "/species/illogician/"
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
        "term": "Biasographer",
        "slug": "biasographer",
        "path": "/species/biasographer/"
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Pulpits, podiums, and any resignation statement."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“That was different.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Principles that bend at the wallet",
          "Public austerity, private indulgence",
          "Repents only after the photo"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Heritage segments, school-board meetings, and the comments under any museum post."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“In my day -”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Nostalgic for a decade it cannot date",
          "Sanitized, never sourced",
          "Confuses a monument with a record"
        ]
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
    "backlinks": []
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Opinion pages in the week after an atrocity."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“We have to understand both sides.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Surrenders before the argument",
          "Prefaces every concession",
          "Finds symmetry where there is none"
        ]
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
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Talk radio, tabloid front pages, and the comments under a census story."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“They’re taking over.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Manufactures the threat, then fears it",
          "Recycles an older panic",
          "Numbers never sourced"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Rallies, megachurch broadcasts, and any stream that opens with a countdown."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Everything you know is a lie.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Theatrical, never specific",
          "Apocalypse on a schedule",
          "Sells the cure"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Prime-time panels and the algorithm’s favorite uncle."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Are you angry yet?”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Outrage as a business model",
          "Never satisfied, always fed",
          "Monetizes the wound"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Any thread where they are, somehow, the victim."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“So I’m the bad guy now?”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Persecuted by a policy they wrote",
          "Suffers loudly, profits quietly",
          "Never the aggressor in their own story"
        ]
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Video platforms at two in the morning, and any comment section with a pinned link."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“The data doesn’t lie.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "A chart with no axis",
          "One study, no authors",
          "Cites a preprint that does not exist"
        ]
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Keynote stages and any interview after a fine."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“They’re coming for people like me.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Wealth worn as hardship",
          "Persecution with a legal team",
          "Suffers in a private jet"
        ]
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
        "term": "Crookmaxxing",
        "slug": "crookmaxxing",
        "path": "/moves/crookmaxxing/"
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
    "backlinks": []
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
        "key": "range",
        "label": "Range",
        "type": "text",
        "value": "Recommendation feeds and any page that publishes twelve articles an hour."
      },
      {
        "key": "call",
        "label": "Call",
        "type": "text",
        "value": "“Sources say.”"
      },
      {
        "key": "field_marks",
        "label": "Field marks",
        "type": "list",
        "value": [
          "Volume over verification",
          "Written by no one, read by millions",
          "Corrections never issued"
        ]
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
        "term": "Dramagogue",
        "slug": "dramagogue",
        "path": "/species/dramagogue/"
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
    "backlinks": []
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
        "term": "Gallopologist",
        "slug": "gallopologist",
        "path": "/species/gallopologist/"
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
        "term": "Bleatkeeper",
        "slug": "bleatkeeper",
        "path": "/species/bleatkeeper/"
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
        "term": "Bootcurious",
        "slug": "bootcurious",
        "path": "/buffs/bootcurious/"
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
  }
]
