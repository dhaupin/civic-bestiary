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
import site from '../site.config.js'
import { chapters, entries, kinds, meta as lexicon, stats } from './src/data/lexicon.js'

// A kind's front door, and a chapter's. Both are real pages with their own
// title, so a reader can land on "the moves" from a search result instead of
// needing the guide's javascript to filter it.
// Every kind gets a front door, even a kind with no records yet: a reader who
// types /abilities/ should get an explanation, not a 404.
const kindRoutes = Object.entries(kinds)
  .map(([id, spec]) => ({
    path: spec.path,
    priority: '0.8',
    changefreq: 'monthly',
    meta: {
      title: `${spec.plural} | ${site.name}`,
      description: `${stats.kinds[id]} ${spec.plural.toLowerCase()} in the bestiary: ${spec.blurb}`,
    },
  }))

const chapterRoutes = chapters.map((chapter) => {
  const count = entries.filter((entry) => entry.chapter === chapter.id).length
  // Chapter titles are long sentences; carry the wordmark only when the
  // combined title still fits a search result.
  const label = `Chapter ${chapter.roman} · ${chapter.title}`
  return {
    path: `/chapters/${chapter.id}/`,
    priority: '0.7',
    changefreq: 'monthly',
    meta: {
      title: `${label} | ${site.name}`.length <= 65 ? `${label} | ${site.name}` : label,
      description: `Chapter ${chapter.roman} of the bestiary: ${count} entries, ${chapter.title}.`,
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
  },
}))

export default {
  siteUrl: site.url,
  siteName: site.name,
  breadcrumb: true,
  author: site.author,
  tagline: site.tagline,
  ogImage: {
    url: `${site.url}/og-image.png`,
    width: 1200,
    height: 630,
    alt: `${site.name} - a field guide to the creatures of the body politic`,
  },
  keywords: site.keywords,
  robots: true,
  routes: [...site.routes, ...kindRoutes, ...chapterRoutes, ...termRoutes],
  notFound: site.notFound,

  // schema.org: the whole lexicon as a DefinedTermSet, each coined term a
  // DefinedTerm. This is the shape search engines expect for a glossary.
  buildJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: lexicon.title,
      description: lexicon.description,
      url: site.url,
      inLanguage: 'en',
      license: `${site.repo}/blob/main/LICENSE`,
      hasDefinedTerm: entries.map((entry) => ({
        '@type': 'DefinedTerm',
        name: entry.term,
        description: entry.summary,
        url: `${site.url}${entry.path}`,
        inDefinedTermSet: `${site.url}/guide`,
      })),
    }
  },
}
