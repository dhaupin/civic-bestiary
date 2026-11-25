#!/usr/bin/env node
/**
 * web/scripts/og.mjs - render the social cards from the data.
 *
 * Two kinds of card, both content rather than identity:
 *
 *   the site card   public/og-image.svg + .png, the one a link to the site root
 *                   shares. Its counts change whenever a record lands, and a
 *                   card that claims a number the guide no longer has is a claim
 *                   the guide itself disproves.
 *   the entry cards public/og/<kind>/<slug>.png, one per entry, so a shared
 *                   Bootcurious shows Bootcurious. 192 of them, rebuilt on every
 *                   build and gitignored - rasterizer output is not byte-stable
 *                   across platforms, so only the SVG is carried in git.
 *
 *   node scripts/og.mjs           # write the site SVG + PNG and every entry PNG
 *   node scripts/og.mjs --check   # exit 1 if the checked-in site SVG is stale
 *
 * The site SVG is the reviewed artifact: it is text, so `--check` can compare it
 * exactly. Entry cards have no reviewed artifact - they are derived from the
 * records, which are the reviewed artifact - so they are only rendered.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import site from '../../site.config.js'
import { entries, stats } from '../src/data/lexicon.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const WEB = path.resolve(HERE, '..')
const PUBLIC = path.join(WEB, 'public')
const SVG = path.join(PUBLIC, 'og-image.svg')
const PNG = path.join(PUBLIC, 'og-image.png')
const ENTRY_DIR = path.join(PUBLIC, 'og')

const PAPER = '#f4efe6'
const INK = '#1b1512'
const ACCENT = '#8f2d24'
const SOFT = '#6b6055'

const FONT_FILES = [
  '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',
  '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
  '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf',
].filter((file) => fs.existsSync(file))

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Mirrors the badge colours in styles.css, with the same grey fallback for the
// two kinds that have no badge colour of their own.
const KIND_INK = {
  species: ACCENT,
  move: '#6b4d8f',
  ability: '#2f6b5e',
  habitat: '#8a5a1f',
  fallacy: '#4a4a4a',
  buff: '#8f3a5e',
}
const kindInk = (kind) => KIND_INK[kind] || SOFT

const HOST = site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

/** The asterisk, the same mark the site header carries. */
function mark(x, y, scale) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <g stroke="${INK}" stroke-width="4.2" stroke-linecap="round">
      <path d="M32 15v34"/>
      <path d="M17.3 23.5l29.4 17"/>
      <path d="M46.7 23.5l-29.4 17"/>
    </g>
    <circle cx="32" cy="32" r="4.6" fill="${ACCENT}"/>
  </g>`
}

function tally() {
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`
  return [
    plural(stats.entries, 'ENTRY', 'ENTRIES'),
    plural(stats.coinages, 'COINAGE', 'COINAGES'),
    plural(stats.fallacies, 'FALLACY', 'FALLACIES'),
    HOST,
  ].join('   \u00b7   ')
}

function card() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <rect x="80" y="150" width="6" height="330" fill="${ACCENT}"/>
  ${mark(140, 132, 1.15)}
  <text x="140" y="300" font-family="DejaVu Serif" font-weight="bold" font-size="82" fill="${INK}" letter-spacing="-2">${escape(site.name)}</text>
  <text x="140" y="380" font-family="DejaVu Sans" font-size="32" fill="${SOFT}">${escape(site.tagline)}</text>
  <line x1="140" y1="452" x2="1060" y2="452" stroke="${SOFT}" stroke-opacity="0.35"/>
  <text x="140" y="500" font-family="DejaVu Sans Mono" font-size="22" fill="${SOFT}">${escape(tally())}</text>
</svg>
`
}

// --- entry cards -----------------------------------------------------------

const TITLE_MAX = 86
const TITLE_MIN = 40
const COLUMN = 920 // 140..1060, the same measure the site card uses

/**
 * One line, sized to the measure. DejaVu Serif Bold advances ~0.63em per glyph
 * for mixed case; the estimate is deliberately generous, because a title that
 * runs past the column is worse than one that sits small in it.
 */
function titleSize(term) {
  return Math.max(TITLE_MIN, Math.min(TITLE_MAX, Math.floor(COLUMN / (0.63 * Math.max(term.length, 1)))))
}

/** Greedy word wrap. The summary is authored prose, so no word needs breaking. */
function wrap(text, maxChars) {
  const lines = []
  let line = ''
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const next = line ? `${line} ${word}` : word
    if (next.length <= maxChars || !line) line = next
    else {
      lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)
  return lines
}

// Words that read as an accident when a clipped line ends on them ("...comment,
// and a..."). Dropped before the ellipsis goes on.
const DANGLING = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'her', 'his', 'in',
  'into', 'is', 'its', 'nor', 'of', 'on', 'or', 'so', 'than', 'that', 'the',
  'their', 'then', 'to', 'with', 'yet',
])

/**
 * What the card prints under the title: the entry's own definition, three lines
 * of it. Not the meta description - that one is clipped to a search result's
 * budget, and a card has room for more of the sentence.
 */
function bodyLines(entry) {
  const lines = wrap(entry.definition || entry.summary || '', 62)
  const shown = lines.slice(0, 3)
  if (lines.length <= shown.length) return shown

  let last = shown[shown.length - 1]
  for (let word = last.split(' ').pop(); DANGLING.has(word.toLowerCase()) && last.includes(' '); word = last.split(' ').pop()) {
    last = last.slice(0, last.lastIndexOf(' '))
  }
  shown[shown.length - 1] = `${last.replace(/[\s,;:.]+$/, '')}...`
  return shown
}

function entryCard(entry) {
  const ink = kindInk(entry.kind)
  const eyebrow = `${entry.kindLabel}   \u00b7   Chapter ${entry.chapterRoman}`
  const size = titleSize(entry.term)
  const lines = bodyLines(entry)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <rect x="80" y="150" width="6" height="330" fill="${ink}"/>
  ${mark(140, 128, 1.0)}
  <text x="140" y="252" font-family="DejaVu Sans Mono" font-size="22" letter-spacing="3" fill="${ink}">${escape(eyebrow.toUpperCase())}</text>
  <text x="140" y="352" font-family="DejaVu Serif" font-weight="bold" font-size="${size}" letter-spacing="-1.5" fill="${INK}">${escape(entry.term)}</text>
  <line x1="140" y1="402" x2="1060" y2="402" stroke="${SOFT}" stroke-opacity="0.35"/>
${lines.map((line, i) => `  <text x="140" y="${456 + i * 42}" font-family="DejaVu Sans" font-size="28" fill="${SOFT}">${escape(line)}</text>`).join('\n')}
  <text x="1060" y="592" text-anchor="end" font-family="DejaVu Sans Mono" font-size="20" fill="${SOFT}">${escape(HOST)}</text>
</svg>
`
}

const svg = card()

if (process.argv.includes('--check')) {
  const current = fs.existsSync(SVG) ? fs.readFileSync(SVG, 'utf8') : ''
  if (current !== svg) {
    console.error('public/og-image.svg is out of date; run `node scripts/og.mjs`')
    process.exit(1)
  }
  console.log('public/og-image.svg is up to date')
  process.exit(0)
}

fs.writeFileSync(SVG, svg)

const { Resvg } = await import('@resvg/resvg-js')

function rasterize(source, file) {
  const png = new Resvg(source, {
    fitTo: { mode: 'width', value: 1200 },
    font: { fontFiles: FONT_FILES, loadSystemFonts: true, defaultFontFamily: 'DejaVu Serif' },
  })
    .render()
    .asPng()
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, png)
}

rasterize(svg, PNG)

// Entry cards are derived from the records, so the whole directory is rebuilt:
// an entry that was renamed must not leave its old card behind for a crawler to
// find at a URL nothing links to any more.
fs.rmSync(ENTRY_DIR, { recursive: true, force: true })
const started = Date.now()
for (const entry of entries) {
  rasterize(entryCard(entry), path.join(ENTRY_DIR, entry.kind, `${entry.slug}.png`))
}

console.log(
  `wrote public/og-image.svg, public/og-image.png, and ${entries.length} entry cards`
  + ` in ${((Date.now() - started) / 1000).toFixed(1)}s`,
)

