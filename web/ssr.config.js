/**
 * ssr.config.js - the prestruct engine's config, DERIVED from site.config.js.
 *
 * This file is an ADAPTER, not a second source of truth: it imports the one
 * identity file and reshapes it into what prestruct expects (siteUrl, siteName,
 * routes, notFound). The per-term routes are appended from the generated data
 * module, because entries are content and identity is not.
 *
 * Edit site.config.js or lexicon.json, never this file.
 */
import crypto from 'node:crypto'
import fs from 'node:fs'

import site from '../site.config.js'
import { FAQ } from './src/data/faq.js'
import { chapters, entries, kinds, meta as lexicon, stats } from './src/data/lexicon.js'

// A kind's front door, and a chapter's. Both are real pages with their own
// title, so a reader can land on "the moves" from a search result instead of
// needing the guide's javascript to filter it.
// Every kind gets a front door, even a kind with no records yet: a reader who
// types /abilities/ should get an explanation, not a 404.
// Meta descriptions have a working length; trim on a word boundary rather than
// letting a long chapter note run past it.
const clip = (text, limit = 158) =>
  (text.length <= limit ? text : `${text.slice(0, limit).replace(/[ ,;:-]+\S*$/, '')}...`)

const ORIGIN = site.url.replace(/\/$/, '')
const abs = (path) => (path === '/' ? ORIGIN : `${ORIGIN}${path}`)
const LD = 'https://schema.org'

// --- structured data ------------------------------------------------------
// Each page declares what it actually is: an entry is one DefinedTerm, a kind
// or chapter is a CollectionPage, and only the two index pages carry the whole
// set. Emitting the set from buildJsonLd() put 69KB on all 210 pages and told a
// crawler every entry was "about" all 192 terms.
// Stable node identities. prestruct merges a route's jsonLd nodes into ONE
// @graph block, so an @id declared here resolves on the page that uses it.
// The engine's own defaults (a name+url Organization and WebSite on every page,
// with no @id, no logo and no author) are switched off in the export below;
// this file owns the graph instead.
const ORG_ID = `${ORIGIN}/#org`
const SITE_ID = `${ORIGIN}/#site`
const AUTHOR_ID = `${ORIGIN}/#author`
const SET_ID = `${ORIGIN}/guide/#set`

const orgNode = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: site.name,
  url: ORIGIN,
  description: site.description,
  logo: {
    '@type': 'ImageObject',
    url: `${ORIGIN}/icon-512.png`,
    width: 512,
    height: 512,
  },
  sameAs: [site.repo],
  founder: { '@id': AUTHOR_ID },
}

const siteNode = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: site.name,
  url: ORIGIN,
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
}

const authorNode = {
  '@type': 'Person',
  '@id': AUTHOR_ID,
  name: site.author,
  url: `https://github.com/${site.author}`,
}

// Every page carries the same three identity nodes plus its own, so the graph
// is complete on any entry point a crawler lands on.
const pageGraph = (...nodes) => ({
  '@context': LD,
  '@graph': [orgNode, siteNode, authorNode, ...nodes.flat().filter(Boolean)],
})

const definedTerm = (entry) => ({
  '@type': 'DefinedTerm',
  '@id': `${abs(entry.path)}#term`,
  name: entry.term,
  description: entry.summary,
  url: abs(entry.path),
  inLanguage: 'en',
  inDefinedTermSet: `${ORIGIN}/guide/`,
  // The record carries its source and the page shows it, so the graph says it.
  ...(entry.cite
    ? { citation: { '@type': 'CreativeWork', name: entry.cite.label, url: entry.cite.url } }
    : {}),
})

const termSet = {
  '@type': 'DefinedTermSet',
  '@id': SET_ID,
  name: lexicon.title,
  description: lexicon.description,
  url: ORIGIN,
  inLanguage: 'en',
  license: `${site.repo}/blob/main/LICENSE`,
  author: { '@id': AUTHOR_ID },
  // Names and URLs only: the descriptions live on the entry pages, and 192 of
  // them here put 40KB of JSON-LD on the one page that needs it least.
  hasDefinedTerm: entries.map(({ term, path }) => ({
    '@type': 'DefinedTerm',
    name: term,
    url: abs(path),
  })),
}

const collection = (name, description, path, items) => ({
  '@type': 'CollectionPage',
  name,
  description,
  url: abs(path),
  isPartOf: { '@id': SITE_ID },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.term,
      url: abs(entry.path),
    })),
  },
})

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

// The about page explains the organization, so it says so rather than carrying
// a breadcrumb and nothing else.
const aboutPage = (route) => ({
  '@type': 'AboutPage',
  '@id': `${abs(route.path)}#page`,
  name: route.meta.title.split(' | ')[0],
  description: route.meta.description,
  url: abs(route.path),
  isPartOf: { '@id': SITE_ID },
  mainEntity: { '@id': ORG_ID },
})

// --- breadcrumbs ----------------------------------------------------------
// prestruct's auto trail drops the route's trailing slash (so every crumb is a
// 308 to the page it points at) and routes chapter pages through a /chapters/
// index that does not exist. Authoring the trail here fixes both; supplying a
// BreadcrumbList also suppresses the engine's, whose pass is missing-only.
const labelFor = (segment) =>
  kinds[segment]
    ? kinds[segment].plural
    : segment.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())

const breadcrumb = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: site.name, item: ORIGIN },
    ...trail.map(([name, href], index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: href,
    })),
  ],
})

const crumb = (path, leafName) => {
  if (path === '/') return null
  const segments = path.split('/').filter(Boolean)
  return breadcrumb(segments.map((segment, index) => {
    const isLeaf = index === segments.length - 1
    return [
      isLeaf ? leafName : labelFor(segment),
      `${ORIGIN}/${segments.slice(0, index + 1).join('/')}/`,
    ]
  }))
}

// --- routes ---------------------------------------------------------------
const kindRoutes = Object.entries(kinds).map(([id, spec]) => {
  const own = entries.filter((entry) => entry.kind === id)
  const description = `${stats.kinds[id]} ${spec.plural.toLowerCase()} in the bestiary: ${spec.blurb}`
  return {
    path: spec.path,
    priority: '0.8',
    changefreq: 'monthly',
    meta: {
      title: `${spec.plural} | ${site.name}`,
      description,
      jsonLd: pageGraph(collection(spec.plural, description, spec.path, own), crumb(spec.path, spec.plural)),
      // The count is the version: a card whose tally changed must not be served
      // from a scraper's cache under the old URL.
      ogImage: {
        url: `${site.url}/og/kinds/${id}.png?v=${stats.kinds[id]}`,
        width: 1200,
        height: 630,
        alt: `${spec.plural} - ${site.name}`,
      },
    },
  }
})

const chapterRoutes = chapters.map((chapter) => {
  const own = entries.filter((entry) => entry.chapter === chapter.id)
  // Chapter titles are long sentences; carry the wordmark only when the
  // combined title still fits a search result.
  const label = `Chapter ${chapter.roman} · ${chapter.title}`
  const description = clip(chapter.note
    ? `Chapter ${chapter.roman} of the bestiary: ${chapter.title}. ${chapter.note}`
    : `Chapter ${chapter.roman} of the bestiary: ${own.length} entries, ${chapter.title}.`)
  return {
    path: `/chapters/${chapter.id}/`,
    priority: '0.7',
    changefreq: 'monthly',
    meta: {
      title: `${label} | ${site.name}`.length <= 65 ? `${label} | ${site.name}` : label,
      description,
      jsonLd: pageGraph(
        collection(label, description, `/chapters/${chapter.id}/`, own),
        // There is no /chapters/ index page, so the trail is root -> chapter.
        breadcrumb([[label, `${ORIGIN}/chapters/${chapter.id}/`]]),
      ),
      ogImage: {
        url: `${site.url}/og/chapters/${chapter.id}.png?v=${own.length}`,
        width: 1200,
        height: 630,
        alt: `${label} - ${site.name}`,
      },
    },
  }
})

const termRoutes = entries.map((entry) => ({
  path: entry.path,
  priority: '0.7',
  changefreq: 'yearly',
  meta: {
    title: `${entry.term} - ${entry.partOfSpeech} | ${site.name}`,
    description: entry.summary,
    jsonLd: pageGraph(definedTerm(entry), crumb(entry.path, entry.term)),
    // The object form, so prerender also reconciles the width/height/alt
    // companions - a card declared 1200x630 but measured otherwise renders
    // letterboxed or cropped in the big unfurl.
    ogImage: {
      url: `${site.url}${entry.og}`,
      width: 1200,
      height: 630,
      alt: `${entry.term} - ${entry.kindLabel} - ${site.name}`,
    },
  },
}))

// The guide is the one page that lists the whole lexicon.
const siteRoutes = site.routes.map((route) => {
  if (route.path === '/') {
    // The landing does not list the terms, so it does not claim the set; the
    // guide does, and every page links to it.
    return { ...route, meta: { ...route.meta, jsonLd: pageGraph(faqPage) } }
  }
  if (route.path === '/guide/') {
    return {
      ...route,
      meta: {
        ...route.meta,
        jsonLd: pageGraph(termSet, crumb('/guide/', 'The field guide')),
      },
    }
  }
  if (route.path === '/about/') {
    return {
      ...route,
      meta: {
        ...route.meta,
        jsonLd: pageGraph(aboutPage(route), crumb(route.path, 'About the guide')),
      },
    }
  }
  return {
    ...route,
    meta: {
      ...route.meta,
      jsonLd: pageGraph(crumb(route.path, route.meta.title.split(' | ')[0])),
    },
  }
})

const ogCard = new URL('./public/og-image.svg', import.meta.url)
const ogVersion = fs.existsSync(ogCard)
  ? crypto.createHash('sha256').update(fs.readFileSync(ogCard)).digest('hex').slice(0, 8)
  : '0'

export default {
  siteUrl: site.url,
  siteName: site.name,
  // The graph above is complete, so the engine's thin defaults (name+url, no
  // @id, no logo) would only duplicate it in a second block.
  jsonLdDefaults: false,
  // Every route authors its own trail; the engine's pass drops trailing
  // slashes and invents a /chapters/ index, so it is off rather than corrected
  // per page.
  breadcrumb: false,
  author: site.author,
  tagline: site.tagline,
  ogImage: {
    // Scrapers cache an image by its URL, so a card whose counts changed under
    // an unchanged URL keeps being served stale. Hashing the card into the
    // query makes every content change a new URL and a fresh scrape.
    url: `${site.url}/og-image.png?v=${ogVersion}`,
    width: 1200,
    height: 630,
    alt: `${site.name} - a field guide to the characters of the body politic`,
  },
  keywords: site.keywords,
  // The AEO preset: explicit Allow groups for the search-visibility bots (so
  // ChatGPT/Perplexity/Claude/Apple search can cite the guide), and training
  // crawls allowed too - the guide is public civic material, and refusing the
  // training crawl buys nothing here. Flip to aiBots: 'block' to refuse it.
  robots: { aeo: { aiBots: 'allow' } },
  routes: [...siteRoutes, ...kindRoutes, ...chapterRoutes, ...termRoutes],
  notFound: site.notFound,
}
