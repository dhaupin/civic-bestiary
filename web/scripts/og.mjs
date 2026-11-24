#!/usr/bin/env node
/**
 * web/scripts/og.mjs - render the social card from the data.
 *
 * The card is content, not identity. Its counts change whenever a record lands,
 * and a card that claims a number the guide no longer has is a claim the guide
 * itself disproves - the last one advertised species that had been renamed and
 * a host that was never the site's. So:
 *
 *   node scripts/og.mjs           # write public/og-image.svg, rasterize the PNG
 *   node scripts/og.mjs --check   # exit 1 if the checked-in SVG is stale
 *
 * The SVG is the reviewed artifact: it is text, so `--check` can compare it
 * exactly. The PNG is rebuilt from it on every build - rasterizer output is not
 * byte-stable across platforms, so it is not carried in git.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import site from '../../site.config.js'
import { stats } from '../src/data/lexicon.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const WEB = path.resolve(HERE, '..')
const PUBLIC = path.join(WEB, 'public')
const SVG = path.join(PUBLIC, 'og-image.svg')
const PNG = path.join(PUBLIC, 'og-image.png')

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

function tally() {
  const host = site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`
  return [
    plural(stats.entries, 'ENTRY', 'ENTRIES'),
    plural(stats.coinages, 'COINAGE', 'COINAGES'),
    plural(stats.fallacies, 'FALLACY', 'FALLACIES'),
    host,
  ].join('   \u00b7   ')
}

function card() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <rect x="80" y="150" width="6" height="330" fill="${ACCENT}"/>
  <g transform="translate(140 132) scale(1.15)">
    <g stroke="${INK}" stroke-width="4.2" stroke-linecap="round">
      <path d="M32 15v34"/>
      <path d="M17.3 23.5l29.4 17"/>
      <path d="M46.7 23.5l-29.4 17"/>
    </g>
    <circle cx="32" cy="32" r="4.6" fill="${ACCENT}"/>
  </g>
  <text x="140" y="300" font-family="DejaVu Serif" font-weight="bold" font-size="82" fill="${INK}" letter-spacing="-2">${escape(site.name)}</text>
  <text x="140" y="380" font-family="DejaVu Sans" font-size="32" fill="${SOFT}">${escape(site.tagline)}</text>
  <line x1="140" y1="452" x2="1060" y2="452" stroke="${SOFT}" stroke-opacity="0.35"/>
  <text x="140" y="500" font-family="DejaVu Sans Mono" font-size="22" fill="${SOFT}">${escape(tally())}</text>
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
const png = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { fontFiles: FONT_FILES, loadSystemFonts: true, defaultFontFamily: 'DejaVu Serif' },
})
  .render()
  .asPng()
fs.writeFileSync(PNG, png)
console.log('wrote public/og-image.svg and public/og-image.png')
