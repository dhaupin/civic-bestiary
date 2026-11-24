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
import { entries, meta as lexicon } from './src/data/lexicon.js'

const termRoutes = entries.map((entry) => ({
  path: `/species/${entry.slug}`,
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
    alt: `${site.name} - a glossary of portmanteaus for performative patriotism and bad-faith debate`,
  },
  keywords: site.keywords,
  robots: true,
  routes: [...site.routes, ...termRoutes],
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
        url: `${site.url}/species/${entry.slug}`,
        inDefinedTermSet: `${site.url}/species`,
      })),
    }
  },
}
