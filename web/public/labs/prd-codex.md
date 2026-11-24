# The Civic Bestiary - product and record contract

**Status:** living document. Last revision: 2026-11-24.
**Live:** https://codex.creadev.org · **Repo:** https://github.com/dhaupin/civicbestiary
**Published by** [Creadev](https://creadev.org). Text is MIT.

This is the document the "Read the record contract" button points at. It covers
what the product is, how the site is built, how a record is shaped, and what the
maintainers will and will not accept. If you are proposing a term, read
[The record contract](#4-the-data-model) and stop there. If you are working on
the code, read the whole thing.

---

## 1. What this is

A field guide to the characters of the body politic: the patterns that show up in
arguments, rallies, feeds, and comment threads, named the way a naturalist would
name them - by the trait that makes them unmistakable, and by the loop they run.

It is not a dictionary of insults and not a political position. It is a
**recognition tool**: every entry describes a mechanism you could point at in a
transcript, so the name stays a way to identify what is happening rather than a
way to end an argument.

### Who it is for

- A reader who keeps meeting the same behaviour and has no word for it.
- A teacher, moderator, or journalist who needs a shared vocabulary for a
  pattern, not a diagnosis of a person.
- A contributor who notices a character the guide is missing.

### Non-goals

- **Not naming people.** No entry may be a real individual, living or dead.
- **Not a political programme.** The guide documents mechanisms and their
  counters; it does not endorse candidates, parties, or policies.
- **Not a debate-club taxonomy.** The fallacies are here because characters
  commit them, not because the guide wants to referee arguments.
- **Not a dumping ground.** A synonym for an existing entry is a regression, not
  coverage.

---

## 2. The rules

Every editorial and engineering decision resolves against these.

1. **The species is a pattern, not a person.** Senses are written as "The pattern
   of ..." rather than "A person who ...". A costume that wears people, not a
   kind of human - and one you can catch yourself in.
2. **Every character has a counter, and the counter is real.** If the answer is an
   institution, the institution gets its own entry (a keystone or a remedy). A
   fake counter is worse than a gap: it tells the reader the fight is already
   lost.
3. **No invented links.** An edge must be defensible from the prose of the entry
   that carries it. The guide would rather leave a gap than assert a relationship
   it cannot show.

The first two are the guide's own, and the preface states them; the third is how
the second is enforced once the guide is a graph.

---

## 3. Information architecture

The taxonomy is in the URL, so every drill-down is a real, linkable, prerendered
page with its own title and description.

| Route | What it is | Rendered by |
|---|---|---|
| `/` | The landing: hero, a random entry, the chapter map, where the answers live | `pages/Home.jsx` |
| `/about/` | The essay, the entry anatomy, how the graph works, provenance | `pages/About.jsx` |
| `/guide/` | The whole guide: search, filters, sort | `pages/Guide.jsx` |
| `/chapters/<id>/` | One chapter, same feed | `pages/Guide.jsx` |
| `/<kind>/` | One kind's front door (e.g. `/species/`, `/fallacies/`) | `pages/Guide.jsx` |
| `/<kind>/<slug>/` | One entry | `pages/Species.jsx` |
| `/contribute/` | How to propose a term, generated from the schema | `pages/Contribute.jsx` |
| `/labs/prd-codex.md` | This document, served as a file | build copy of `labs/` |
| `*` | 404 | `pages/NotFound.jsx` |

Kinds (8): `species`, `move`, `ability`, `habitat`, `buff`, `fallacy`, `remedy`,
`keystone`. Chapters (6): five of characters, then VI "The Keystones".

Navigation vocabulary lives once, in `site.config.js` (`nav`, `footerExtras`).
The header, the burger sidebar, and the footer all render from it, so the three
surfaces cannot drift. Contributing and provenance are foot-of-page links.

---

## 4. The data model

### Single source of truth

```
data/lexicon.json         meta, preface, chapters (identity of the guide)
data/entries/<slug>.json  one record per entry; filename is the slug
schema/record.json        the contract: kinds, relations, fields, sorts
```

Nothing else is authored. `README.md` and `web/src/data/lexicon.js` are
generated, and the validator fails the build if a generated file is stale.

### Record anatomy

Common fields, in the order the schema declares them:

| Field | Contract |
|---|---|
| `term` | The coinage, title case, no quotes. The filename is its slug. |
| `kind` | One of the eight. |
| `chapter` | Chapter id from `lexicon.json`. |
| `position` | Sort position inside the chapter. |
| `part_of_speech` | Grammatically what the term is. Most species are nouns; moves are gerunds. |
| `ipa` | Approximate IPA between slashes. |
| `etymology` | One line. Name both parents if it is a blend. |
| `senses` | **Exactly two.** The first says what it is; the second says why it works. |
| `example` | One sighting, quoted in `*asterisks*`, term in `**bold**` where it appears. |
| `confused_with` | Neighbours and the one thing that separates them. |
| `related` | Two or three existing terms. The graph must stay connected. |
| `edges` | Typed relations (below). Author one direction; the inverse renders itself. |
| `cite` | Reference entries only (fallacies): label + URL. Coinages have no source. |

Kind-specific identification rows, which render as the entry's field-guide block:

| Kind | Rows |
|---|---|
| species | Occasion, Call, Tell, Counter |
| move | Trigger, Tell, Counter |
| ability | Effect, Available to, Counter |
| habitat | Carriers, Economics, Signature, Counter |
| buff | Effect, Tell, Expires |
| fallacy | Family, Committed when, The tell, Counter |
| remedy | Effect, Costs, Failure mode, Tell |
| keystone | Office, Call, Tell, Keystone |

### Relations

| Relation | Inverse | From | To |
|---|---|---|---|
| `performs` | Performed by | species | move |
| `uses` | Used by | species, habitat | ability |
| `houses` | Found in | habitat | species, move, fallacy |
| `counters` | Countered by | species, move, ability, buff, remedy, keystone | species, move, ability, buff, habitat |
| `commits` | Committed by | species, move, ability, habitat, keystone, remedy | fallacy |
| `practises` | Practised by | keystone, remedy | remedy |

Author **one direction**, from the side that knows the answer. The inverse is
computed, so a counter authored on the remedy page still renders on the character
page. Duplicate edges, self-edges, and dangling targets fail the build.

### Sort axes

Every record carries three 1-5 scores, which drive the guide's default ordering:
`impact` (how much damage it does), `abuse` (how often you meet it), `blowback`
(what it costs the one running it).

---

## 5. The build chain

Order matters. Run it in this order or the validator will tell you why.

```bash
python3 build.py             # validate data/, regenerate README.md
python3 build_schema.py      # regenerate the issue form + web/src/data/contract.js
python3 build_site.py        # regenerate web/src/data/lexicon.js (+ labs/ copy)
npm --prefix web run build   # vite build + prestruct prerender
npm run verify               # validator + freshness + SEO audit + poststruct
```

What each step owns:

- **`build.py`** - the gate. Validates every record against `schema/record.json`,
  enforces the invariants in section 7, and writes `README.md`.
- **`build_schema.py`** - one schema, three audiences: the GitHub issue form, the
  web contract module, and the contribute page. A new required field appears in
  all three at once.
- **`build_site.py`** - flattens the records into the bundle's data module
  (resolving edges into backlinks) and copies `labs/*.md` into `web/public/labs/`.
- **prestruct / poststruct** - prerenders every route to static HTML, then audits
  canonicals, titles, descriptions, OG tags, JSON-LD, sitemap, and `llms.txt`.

Deploy: Cloudflare Pages builds on push to `main`. Canonical origin is
`https://codex.creadev.org` (set in `site.config.js`); the `pages.dev` host still
serves but is not canonical.

---

## 6. The contribution flow

1. **Search the guide first.** If the thing already has a name, the existing
   entry needs a better example more than the bestiary needs a synonym.
2. **Open the proposal form** (`/contribute/` → GitHub issue form). It asks the
   same questions a record does. The form requires the label `new-term`, which
   the maintainers keep in the repo - if the form ever renders blank, check that
   the label exists before debugging anything else.
3. **Maintainers own the graph.** Placement, cross-references, sort scores, and
   the final edit stay with the maintainers, so a proposal cannot orphan a node.
4. **A proposal lands as one file**, `data/entries/<slug>.json`, once the writing
   holds up. The bar is not novelty, it is use.

---

## 7. Invariants (what the validator enforces)

- Every record matches the schema; unknown fields fail.
- Exactly two senses; the first is a definition, not a complaint.
- Every edge target exists; no self-edges; no duplicate `(relation, target)` pairs.
- Every entry is referenced by at least one other entry - no orphans. A new entry
  must be reachable from the existing graph before it can be added.
- Chapters and positions are unique; every chapter in `lexicon.json` is used.
- Generated files (`README.md`, `lexicon.js`, `contract.js`, the issue form) are
  current - a stale generated file fails the build.
- The SEO audit reports zero failures across every baked page.

---

## 8. Editorial standard

- **Voice:** dry, specific, unsentimental. The guide is amused, not angry.
- **Second sense is mechanism, not moral.** "It works because attention has a
  shape" - not "which is terrible".
- **The counter is a move someone could make**, with a cost attached. "Ask what
  evidence would count as innocence" beats "people should be more careful".
- **Examples are overheard, not invented for effect.** One sentence, in the wild.
- **No entry may diagnose a person.** If a draft says "the kind of person who",
  it is a species description and it is wrong.

---

## 9. Design system

- Static, serif-led, print-derived: a guide, not a dashboard.
- Light and dark, both first-class; the theme is set pre-paint so there is no flash.
- One accent colour for links, italics, and the eyebrow rule; red is reserved for
  the sort-axis marks.
- Mono for labels, kickers, and metadata; the body is serif.
- No animation beyond hover and the theme transition.

---

## 10. Maintenance passes

The guide is maintained in rounds. Each round is one audit, one build, one PR
from `staging` to `main`, then a live check of the changed URLs.

Standing audits, all runnable from the repo:

- **Graph audit** - orphans, thin edges (an entry with one inbound link is a
  coinage, not a pattern), dangling targets, duplicate edges.
- **Coverage audit** - which characters have no counter, which fallacies have a
  single committing character.
- **Prose audit** - person-shaped senses, sense count, example formatting, stale
  counts in prose.
- **Canon audit** - `related` strings must match a canonical term exactly, even
  though the resolver is case-insensitive today.

Backlog and open questions live in [`TASKS.md`](TASKS.md).

---

## 11. Current numbers

Not written here, on purpose. `build.py` counts them into the footer of
`README.md` - entries, kinds, chapters, coinages, the answer side, and how many
coinages carry a counter - and the site reads the same figures from the
generated bundle, so `/` and `/about/` cannot disagree with the data. A number
typed into a document is a number that goes stale; there are none in this one.

---

## 12. Open questions

- **Hosting the contract.** This document is served as raw markdown from
  `/labs/`. If it becomes a front-door page, it needs a rendered route and a
  markdown pipeline rather than a copy step.
- **Naming.** At least one species name is due to be replaced (see TASKS).
- **Scale.** The guide is hand-curated on purpose. If contributions open up, the
  graph invariants - not the prose - become the bottleneck.
