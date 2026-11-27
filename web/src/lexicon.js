/**
 * src/lexicon.js - the one accessor for the lexicon data.
 *
 * The data module is generated from lexicon.json by build_site.py. Nothing in
 * src/ imports the JSON directly, so that generated shape is the single seam.
 */
import { chapters, entries, kinds, meta, preface, sorts, stats } from './data/lexicon.js'
import { claimed, latest, posts, unreleased } from './data/releases.js'

export { chapters, claimed, entries, kinds, latest, meta, posts, preface, sorts, stats, unreleased }

/** The kinds as a list, in schema order, for chips and legends. */
export const kindsList = Object.entries(kinds).map(([id, spec]) => ({ id, ...spec }))

const BY_SLUG = new Map(entries.map((entry) => [entry.slug, entry]))

export function entryFor(slug) {
  return BY_SLUG.get(slug) || null
}

/** Every entry's URL derives from its kind, so links never assume /species/. */
export function pathFor(slug) {
  const entry = BY_SLUG.get(slug)
  return entry ? entry.path : `/species/${slug}/`
}

export function neighbors(slug) {
  const index = entries.findIndex((entry) => entry.slug === slug)
  return {
    previous: index > 0 ? entries[index - 1] : null,
    next: index >= 0 && index < entries.length - 1 ? entries[index + 1] : null,
  }
}

/** Where an entry sits in the guide, for the "No. 7 of 28" line. */
export function positionOf(slug) {
  const index = entries.findIndex((entry) => entry.slug === slug)
  return index < 0 ? null : { number: index + 1, total: entries.length }
}

/** The label of the row a kind speaks through in listings (Call, Tell, ...). */
export function voiceLabel(entry) {
  const spec = kinds[entry.kind]
  const row = spec?.identification.find((candidate) => candidate.key === spec.voice)
  return row ? row.label : null
}

export function matches(entry, query) {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  const values = entry.identification.map((row) =>
    Array.isArray(row.value) ? row.value.join(' ') : row.value,
  )
  const haystack = [entry.term, entry.etymology, entry.partOfSpeech, entry.kindLabel, ...entry.senses, ...values]
    .join(' ')
    .toLowerCase()
  return haystack.includes(needle)
}

/**
 * Order a view by one of the schema's sort axes.
 *
 * 'position' is the curated field order - the order the records were written
 * in - so every other axis is a re-reading of the same list rather than a
 * different list. Ties fall back to field order, which keeps the result stable
 * between renders and between the prerender and the client.
 */
export function sortByAxis(items, axis) {
  if (!axis || axis === 'position') return items
  return [...items].sort((a, b) => (
    (b.sort?.[axis] ?? 0) - (a.sort?.[axis] ?? 0) || a.position - b.position
  ))
}

/** Which axis a view opens on: fallacies lead with how abused they are. */
export function defaultAxis(view) {
  return view?.kind?.id === 'fallacy' ? 'abuse' : 'impact'
}

/** One post of the chronology, by slug. */
export function postFor(slug) {
  return posts.find((post) => post.slug === slug) || null
}

/** The release that first named an entry, for the "Added in" line on its page. */
export function releaseFor(term) {
  return claimed[term] ? postFor(claimed[term]) : null
}
