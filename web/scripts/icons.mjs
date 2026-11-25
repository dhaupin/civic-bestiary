#!/usr/bin/env node
/**
 * web/scripts/icons.mjs - rasterize the brand mark.
 *
 * public/icon.svg is the authored source. This script renders every PNG the
 * shell references (favicon, apple-touch, manifest icons), so a mark change is
 * one file edit and one command:
 *
 *   node scripts/icons.mjs
 *
 * The social card is not here: it carries counts, so it is generated from the
 * records by scripts/og.mjs on every build.
 */
import { Resvg } from '@resvg/resvg-js'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const WEB = path.resolve(HERE, '..')
const PUBLIC = path.join(WEB, 'public')

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
