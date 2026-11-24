/**
 * site.config.js - THE site identity, authored once, read everywhere.
 *
 * Adopted from dhaupin/coreforge. Everything else derives from it: the React
 * surfaces import it directly, and web/ssr.config.js reshapes it into what the
 * prestruct engine expects. The bestiary's own content lives in data/ -
 * this file is identity and routing only.
 */
const REPO = 'https://github.com/dhaupin/civicbestiary'

export default {
  // --- identity -----------------------------------------------------------
  name: 'The Civic Bestiary',
  wordmark: { accent: 'Civic', rest: ' Bestiary' },
  badge: 'vol. 1',
  tagline: 'A field guide to the creatures of the body politic.',
  description:
    'A field guide to the creatures of the body politic: 28 portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization.',
  // The deploy origin. Cloudflare Pages serves the project at <project>.pages.dev
  // until a custom domain is attached - then change this one line, and rebuild:
  // prestruct bakes it into canonicals, OG tags, JSON-LD, sitemap, and llms.txt.
  url: 'https://civicbestiary.pages.dev',
  repo: REPO,
  author: 'dhaupin',
  license: 'MIT',
  keywords:
    'bestiary, field guide, portmanteau, satire, rhetoric, propaganda, trolls, civic, nationalism, media literacy',

  maker: { label: 'dhaupin', url: 'https://github.com/dhaupin' },
  org: { name: 'civicbestiary', url: REPO },

  // --- theme --------------------------------------------------------------
  // Protocol constants shared by the pre-paint bootstrap and the switch; not
  // brand, so they stay stable.
  theme: {
    themeKey: 'site-theme',
    defaultMode: 'light',
  },

  // --- nav vocabulary -----------------------------------------------------
  // ONE list the header, the burger sidebar, and the footer render from.
  nav: [
    { label: 'Field guide', to: '/guide/', group: 'site' },
    { label: 'Contribute', to: '/contribute/', group: 'site' },
    { label: 'GitHub', href: REPO, group: 'out' },
  ],
  // GitHub already reaches the repo through the nav vocabulary, so the footer
  // carries only what that link does not: the license.
  footerExtras: [
    { label: 'License', href: `${REPO}/blob/main/LICENSE` },
  ],

  // --- routes -------------------------------------------------------------
  // Base routes only. The per-species routes are content, so web/ssr.config.js
  // appends them from the generated data module.
  routes: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'monthly',
      meta: {
        title: 'The Civic Bestiary - creatures of the body politic',
        description:
          'A field guide to the creatures of the body politic: 28 portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization.',
      },
    },
    {
      path: '/contribute/',
      priority: '0.6',
      changefreq: 'yearly',
      meta: {
        title: 'Propose a term | The Civic Bestiary',
        description:
          'How to add a creature to the bestiary: what the record contract asks for, and where to send the proposal.',
      },
    },
    {
      path: '/guide/',
      priority: '0.9',
      changefreq: 'monthly',
      meta: {
        title: 'The field guide | The Civic Bestiary',
        description:
          'Every entry in the bestiary, by kind and chapter - species, moves, abilities, formats, and buffs.',
      },
    },
  ],

  notFound: {
    heading: '404',
    body: 'That species is not in this bestiary.',
    primaryCta: { label: 'Open the field guide', href: '/guide' },
  },
}
