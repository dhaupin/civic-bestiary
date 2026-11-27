<!-- The prose in this file is hand-written and reviewed like code. The block
     between the generated markers is written by `python3 build.py`, which fails
     the build when it is stale - edit the records, not the block. -->

# The Civic Bestiary

[![verify](https://github.com/dhaupin/civicbestiary/actions/workflows/verify.yml/badge.svg)](https://github.com/dhaupin/civicbestiary/actions/workflows/verify.yml)

A field guide to the characters of the body politic: portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization - plus the documented fallacies they commit and the procedures that answer them.

**Read the guide at [codex.creadev.org](https://codex.creadev.org).** The whole book, generated from the same records, is [LEXICON.md](LEXICON.md).

## What it is

This is a bestiary, not a dictionary. Each species is named the way a naturalist would name it, by the trait that makes it unmistakable, and drawn so you could point at it in a transcript, a rally or a comment thread. Two rules keep the thing from collapsing into a list of insults: the species is a pattern and not a person, and every entry describes a mechanism rather than delivering a verdict.

The fallacies work the other way round. They are not coinages and they are not ours: documented errors in reasoning, named by logicians and psychologists, every one of them carrying a link to the literature. A chapter ends with the errors its own characters commit, so the joke arrives with its receipt attached.

Every character has a counter. The procedures that answer them get entries of their own, because "this is broken" is a complaint and "here is the mechanism that would have caught it" is a guide.

And a coinage built on something real - the pocket veto, the shadow docket, the ombudsman, the poll worker - carries a link to the thing itself. The word is invented; the office it names is not, and a reader who suspects the guide of making things up should be able to check.

## What is in it

<!-- BEGIN:generated -->
**195 entries.** 101 coinages (30 species, 18 moves, 24 abilities, 15 habitats, 14 buffs), 61 fallacies, 19 remedies, 14 keystones. 91 of the 101 coinages carry a counter, and every entry is a record: one JSON file under `data/entries/`.

| Chapter | Entries |
| --- | --: |
| [I. Performative Identity & Weaponized Liberty](LEXICON.md#i-performative-identity--weaponized-liberty) | 28 |
| [II. Bad-Faith Debate & Epistemic Breakdown](LEXICON.md#ii-bad-faith-debate--epistemic-breakdown) | 42 |
| [III. Hypocrisy, Revisionism & Authoritarian Submission](LEXICON.md#iii-hypocrisy-revisionism--authoritarian-submission) | 28 |
| [IV. Fearmongering, Grift & Algorithmic Radicalization](LEXICON.md#iv-fearmongering-grift--algorithmic-radicalization) | 39 |
| [V. Normalization, Numbness & the Noise Floor](LEXICON.md#v-normalization-numbness--the-noise-floor) | 25 |
| [VI. The Keystones](LEXICON.md#vi-the-keystones) | 33 |
<!-- END:generated -->

## How it is built

One dataset, three generators, no hand-edited duplicates.

| Path | Role |
| --- | --- |
| `data/lexicon.json` | The meta half: title, description, preface, chapters. |
| `data/entries/<kind>/<slug>.json` | The record half: one file per term, filed under its kind. |
| `schema/record.json` | The record contract: fields, kinds, identification blocks, relation vocabulary. The generators and the site derive from it. |
| `LEXICON.md` | The whole guide as one generated markdown document. |
| `web/src/data/lexicon.js`, `web/src/data/contract.js`, `.github/ISSUE_TEMPLATE/new-entry.yml` | Generated for the site and for contributors. |

Only `data/` is authored. One record per file is what lets two people add entries without colliding, lets the validator reject a record on its own terms, and makes the folder a second witness to the entry's kind: a record filed under the wrong folder is a build error rather than a silent inconsistency.

The relation graph is checked, not decorative. An edge has to point at a term that exists, and it renders backwards on the target's page without anyone authoring the inverse. `python3 build.py --chapters` audits where fallacies are filed against the characters who commit them.

## Run it

Node 20.19 or newer (see `web/.nvmrc`) and Python 3.12. The generators are stdlib-only, so there is nothing to install on the Python side.

```bash
git clone https://github.com/dhaupin/civicbestiary.git
cd civicbestiary
npm run install:web   # site dependencies
npm run build         # data -> LEXICON.md -> web/src/data -> web/dist
npm run preview       # serves the built site on http://localhost:4173
```

`npm run dev` runs Vite with HMR on http://localhost:5173. To regenerate the data artifacts alone:

```bash
python3 build.py             # LEXICON.md and the block above
python3 build_site.py        # web/src/data/lexicon.js
python3 build_schema.py      # contract.js and the issue form
python3 build.py --chapters  # audit: fallacies filed against the commit graph
```

## Verify

```bash
npm run check   # every generated artifact current, plus pack manifest lint
npm run audit   # poststruct over web/dist: head, links, i18n, a11y, language
npm run verify  # both, plus a full build
```

CI runs `check` on every push and pull request to `main` and `staging`. Deployment is Cloudflare Pages building the `web` directory, so nobody rebuilds the site a second way and disagrees with what shipped.

## Contribute a term

Open an issue with the new-entry template, or use the form on the [contribute page](https://codex.creadev.org/contribute/) - both ask for exactly what the record needs, because both are generated from `schema/record.json`. A proposal that lands becomes one file under `data/entries/<kind>/`, and the validator decides whether it is shaped right.

What the guide will not do is explain itself twice. [AGENTS.md](AGENTS.md) holds the rules a maintainer applies - the record contract, the generated artifacts, how a fallacy is filed, how a source is verified - and [labs/prd-codex.md](labs/prd-codex.md) holds the argument for why the guide is shaped the way it is.

## Docs

- [AGENTS.md](AGENTS.md) - maintainer rules: the record contract, the artifacts, filing and sourcing.
- [labs/prd-codex.md](labs/prd-codex.md) - the product spec: who this is for and why it works this way.
- [LEXICON.md](LEXICON.md) - the whole guide in one generated file.
- [schema/record.json](schema/record.json) - the record contract every audience reads.

## License

MIT, see [LICENSE](LICENSE). The fallacies belong to the literature they cite; the coinages are ours.
