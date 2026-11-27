// The accessibility gate: axe-core over the built site, in both palettes and on
// a phone. Audit what shipped, not what we meant to ship - the same rule the
// poststruct audit follows, applied to the one property a screenshot cannot
// show.
//
// Needs a Chrome binary and no network: it serves web/dist itself. Point it at
// a browser with EYESTRUCT_BROWSER (the eyestruct convention) or CHROME_PATH,
// or let it find the puppeteer cache. `npm run lint:a11y` is the entry point.

import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join, extname, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'web', 'dist')

// One page per shape, because a shape is what breaks: the shell, a listing, a
// filtered listing, an entry, a chapter, the chronology, a post, the two legal
// pages, and the form. Kinds and entries are picked from the build itself so a
// new kind is audited without an edit here.
const FIXED = ['/', '/guide/', '/latest/', '/about/', '/contribute/', '/privacy/', '/terms/']

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

function findChrome() {
  const explicit = process.env.EYESTRUCT_BROWSER || process.env.CHROME_PATH
  if (explicit && existsSync(explicit)) return explicit
  const cache = join(homedir(), '.cache', 'puppeteer', 'chrome')
  if (existsSync(cache)) {
    for (const dir of readdirSync(cache).sort().reverse()) {
      for (const rel of ['chrome-linux64/chrome', 'chrome-linux/chrome']) {
        const candidate = join(cache, dir, rel)
        if (existsSync(candidate)) return candidate
      }
    }
  }
  console.error('a11y: no Chrome found. Set EYESTRUCT_BROWSER or CHROME_PATH.')
  process.exit(2)
}

// A page list read off the build: every kind index, one entry per kind, one
// chapter. Cheap enough to audit whole and honest about what is deployed.
async function routes() {
  const out = [...FIXED]
  const dist = join(DIST)
  for (const dir of readdirSync(dist)) {
    const full = join(dist, dir)
    try {
      if (!(await stat(full)).isDirectory()) continue
    } catch {
      continue
    }
    if (!existsSync(join(full, 'index.html'))) continue
    out.push(`/${dir}/`)
    const first = readdirSync(full).find((child) => existsSync(join(full, child, 'index.html')))
    if (first) out.push(`/${dir}/${first}/`)
  }
  const chapters = join(dist, 'chapters')
  if (existsSync(chapters)) {
    const first = readdirSync(chapters).find((child) => existsSync(join(chapters, child, 'index.html')))
    if (first) out.push(`/chapters/${first}/`)
  }
  return out
}

function serve() {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent((req.url || '/').split('?')[0])
    let file = join(DIST, url)
    if (url.endsWith('/')) file = join(file, 'index.html')
    try {
      const body = await readFile(file)
      res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' })
      res.end('not found')
    }
  })
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)))
}

const axeSource = await readFile(join(ROOT, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8')
const puppeteer = (await import('puppeteer-core')).default
const browser = await puppeteer.launch({
  executablePath: findChrome(),
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})
const server = await serve()
const base = `http://127.0.0.1:${server.address().port}`

// Both palettes, and the phone layout where the drawer and the tables differ.
const VIEWPORTS = [
  ['desktop-light', 1280, 900, 'light'],
  ['desktop-dark', 1280, 900, 'dark'],
  ['mobile-light', 390, 844, 'light'],
]

const findings = new Map()
for (const route of await routes()) {
  for (const [label, width, height, theme] of VIEWPORTS) {
    const page = await browser.newPage()
    await page.setViewport({ width, height })
    await page.evaluateOnNewDocument((t) => {
      try {
        localStorage.setItem('site-theme', t)
        // A settled consent choice keeps the banner out of the audit: it is one
        // surface, covered by its own behaviour, and it would otherwise be the
        // largest element on every page.
        localStorage.setItem('cb-consent', JSON.stringify({ v: 1, analytics: false, at: '2026-01-01T00:00:00Z' }))
      } catch {}
    }, theme)
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 45000 })
    await page.evaluate(axeSource)
    const violations = await page.evaluate(async () => {
      const result = await window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
        },
      })
      return result.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length }))
    })
    for (const v of violations) {
      const key = `${v.id}|${v.help}`
      if (!findings.has(key)) findings.set(key, { ...v, where: new Set() })
      findings.get(key).where.add(`${route} (${label})`)
    }
    await page.close()
  }
}

await browser.close()
server.close()

if (!findings.size) {
  console.log('a11y: clean - 0 violations across every page shape, both palettes, phone and desktop')
  process.exit(0)
}
for (const v of findings.values()) {
  console.error(`\n[${v.impact}] ${v.id} - ${v.help}`)
  for (const where of v.where) console.error(`  ${where}`)
}
console.error(`\na11y: ${findings.size} rule(s) violated`)
process.exit(1)
