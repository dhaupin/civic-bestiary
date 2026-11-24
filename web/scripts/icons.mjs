#!/usr/bin/env node
/**
 * web/scripts/icons.mjs - rasterize the brand mark and the social card.
 *
 * public/icon.svg is the authored source. This script renders every PNG the
 * shell references (favicon, apple-touch, manifest icons) plus og-image.png,
 * so a mark change is one file edit and one command:
 *
 *   npm i --no-save @resvg/resvg-js
 *   node scripts/icons.mjs
 *
 * Identity (name, tagline, url) rides ssr.config.js - brand as data, so no
 * copy is baked into this file.
 */
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const WEB = path.resolve(HERE, '..')
const PUBLIC = path.join(WEB, 'public')

const config = (await import(path.join(WEB, 'ssr.config.js'))).default
const mark = fs.readFileSync(path.join(PUBLIC, 'icon.svg'), 'utf8')

const PAPER = '#f4efe6'
const INK = '#1b1512'
const ACCENT = '#8f2d24'
const SOFT = '#6b6055'

const FONT_FILES = [
  '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',
  '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
  '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf',
].filter((file) => fs.existsSync(file))

function render(svg, width, out) {
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { fontFiles: FONT_FILES, loadSystemFonts: true, defaultFontFamily: 'DejaVu Serif' },
  })
    .render()
    .asPng()
  fs.writeFileSync(path.join(PUBLIC, out), png)
  console.log(`wrote public/${out}`)
}

// --- app icons -----------------------------------------------------------
for (const [size, file] of [
  [32, 'favicon-32.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'icon-192.png'],
  [512, 'icon-512.png'],
]) {
  render(mark, size, file)
}

// --- social card ---------------------------------------------------------
const terms = config.routes.filter((route) => route.path.startsWith('/term/')).length
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
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
  <text x="140" y="300" font-family="DejaVu Serif" font-weight="bold" font-size="82" fill="${INK}" letter-spacing="-2">${config.siteName}</text>
  <text x="140" y="370" font-family="DejaVu Sans" font-size="30" fill="${SOFT}">A glossary of portmanteaus for performative patriotism,</text>
  <text x="140" y="412" font-family="DejaVu Sans" font-size="30" fill="${SOFT}">bad-faith debate, and algorithmic radicalization.</text>
  <line x1="140" y1="470" x2="1060" y2="470" stroke="${SOFT}" stroke-opacity="0.35"/>
  <text x="140" y="516" font-family="DejaVu Sans Mono" font-size="22" fill="${SOFT}">${terms} COINED TERMS   ·   4 SECTIONS   ·   ${config.siteUrl.replace(/^https?:\/\//, '')}</text>
</svg>`
render(card, 1200, 'og-image.png')
