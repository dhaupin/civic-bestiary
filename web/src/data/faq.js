/**
 * data/faq.js - the home page's questions, in one place.
 *
 * The visible section and the FAQPage JSON-LD read this array, so an answer
 * cannot be marked up for a crawler without being on the page a reader sees.
 * Counts come from the lexicon rather than the prose, so an entry added or a
 * kind emptied updates the answer instead of making it a lie.
 */
import { stats } from './lexicon.js'

const KINDS = Object.keys(stats.kinds).filter((kind) => stats.kinds[kind] > 0).length

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
const word = (count) => WORDS[count] ?? count

export const FAQ = [
  {
    q: 'What is the Civic Bestiary?',
    a: `A field guide to the characters of the body politic: ${stats.entries} entries in ${word(KINDS)} kinds, arranged in ${word(stats.chapters)} chapters. Each one says what the character is, how you would recognise it in the wild, and what actually works on it.`,
  },
  {
    q: 'Are these real words?',
    a: `Most are coinages - portmanteaus built to name a pattern that already exists and has no word yet. The ${stats.fallacies} fallacies are the exception: those are documented errors named by logicians and psychologists, and each entry points at the argument rather than inventing one.`,
  },
  {
    q: 'Is this just name-calling?',
    a: 'The guide is built to stop that. A tell has to be something you could point at in a transcript, not a motive you infer, and an entry is not finished until it has a counter that costs the character something. If the second sense is a complaint, the entry is not done.',
  },
  {
    q: 'Where do the entries come from?',
    a: 'Every entry is one JSON record under data/entries/, written to a fixed contract: etymology, two senses, a tell, a counter, a sighting in the wild, and the entries it is easily confused with. The site, the book, and the README are all generated from those records, so they cannot drift apart.',
  },
  {
    q: 'Can I propose a term, or reuse the guide?',
    a: 'Both. A proposal goes through the issue form, which asks the same questions a record does - rough answers are fine, the observation matters more than the prose. The guide itself is MIT licensed, so you can quote, remix, or fork it with attribution.',
  },
]
