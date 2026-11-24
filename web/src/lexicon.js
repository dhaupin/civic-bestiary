/**
 * src/lexicon.js - the one accessor for the lexicon data.
 *
 * The data module is generated from lexicon.json by build_site.py. Nothing in
 * src/ imports the JSON directly, so that generated shape is the single seam.
 */
import { entries, meta, preface, sections, stats } from './data/lexicon.js'

export { entries, meta, preface, sections, stats }

const BY_SLUG = new Map(entries.map((entry) => [entry.slug, entry]))

export function entryFor(slug) {
  return BY_SLUG.get(slug) || null
}

export function neighbors(slug) {
  const index = entries.findIndex((entry) => entry.slug === slug)
  return {
    previous: index > 0 ? entries[index - 1] : null,
    next: index >= 0 && index < entries.length - 1 ? entries[index + 1] : null,
  }
}

/** First entry per initial letter, for the A-Z jump strip. */
export function alphabet() {
  const seen = new Map()
  for (const entry of entries) {
    const letter = entry.term[0].toUpperCase()
    if (!seen.has(letter)) seen.set(letter, entry.slug)
  }
  return seen
}

export function matches(entry, query) {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  const haystack = [entry.term, entry.etymology, entry.partOfSpeech, ...entry.senses]
    .join(' ')
    .toLowerCase()
  return haystack.includes(needle)
}
