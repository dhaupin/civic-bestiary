# Repository notes

A single-purpose project: a glossary of satirical portmanteaus about performative
nationalism, bad-faith debate, and algorithmic radicalization.

## Source of truth

`lexicon.json` holds every entry. `README.md` is generated from it and must not be
hand-edited - `build.py` stamps a banner at the top saying so.

```bash
python3 build.py           # regenerate README.md
python3 build.py --check   # exit 1 if README.md is stale (CI-safe)
```

`build.py` validates on load and refuses to render when:

- a term is duplicated, or missing a required field
- an entry points at a section id that does not exist
- a `related` reference names a term that is not defined, or names itself
- a term is never listed in anyone else's `related` list (keeps the cross-reference graph connected)

## Adding a term

1. Append an entry to `lexicon.json` inside its section's run of entries; section order and
   entry order drive the rendered numbering, so position decides the entry's number.
2. Add the new term to one existing entry's `related` list, swapping out its weakest link -
   lists are kept at three items. Run `python3 build.py` and the validator will tell you if
   you missed this step.
3. Regenerate and review the README diff.

## House style

- Two numbered senses per entry: one concrete ("who this person is"), one structural ("what
  the pattern does"). `notes` is optional and only for etymology or usage caveats.
- `part_of_speech` and `ipa` use the loose conventions already in the file; IPA is
  approximate and follows the coining, not a dictionary.
- Sentences use ` - ` (spaced hyphen), never an em dash.
- The example sentence is one line of dialogue-free reported speech, with the coined term in
  `**bold**` and the whole quote in italics.
- Voice is satirical and pointed. Keep it aimed at behavior and power, not at identity.
