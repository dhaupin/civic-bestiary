/**
 * scripts/og-type.mjs - og:type for the pages that are a single record.
 *
 * prestruct hardcodes og:type=website on every page, so an entry, a chapter,
 * and the landing page unfurl as the same kind of thing. Article is the honest
 * type for the first two. This runs after `prestruct build` and rewrites only
 * the paths the lexicon says are content; it fails loudly when the engine's
 * markup stops matching, so a prestruct upgrade cannot leave the step silently
 * doing nothing. Retire it when prestruct grows a per-route og:type.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { chapters, entries } from '../src/data/lexicon.js'

const DIST = new URL('../dist/', import.meta.url).pathname
const CONTENT = new Set([
  ...entries.map((entry) => entry.path),
  ...chapters.map((chapter) => `/chapters/${chapter.id}/`),
])

const OG_TYPE = /(<meta property="og:type"\s+content=")website(")/

let rewritten = 0
let missing = 0

for (const path of CONTENT) {
  const file = join(DIST, path, 'index.html')
  let html
  try {
    html = readFileSync(file, 'utf8')
  } catch {
    missing += 1
    continue
  }
  if (!OG_TYPE.test(html)) {
    missing += 1
    continue
  }
  writeFileSync(file, html.replace(OG_TYPE, '$1article$2'))
  rewritten += 1
}

if (missing > 0) {
  console.error(`og-type: ${missing} content page(s) missing or unreadable - did prestruct change its head?`)
  process.exit(1)
}

console.log(`og-type: ${rewritten} page(s) set to article`)
