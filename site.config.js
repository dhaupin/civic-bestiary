/**
 * site.config.js - THE site identity, authored once, read everywhere.
 *
 * Adopted from dhaupin/coreforge. Everything else derives from it: the React
 * surfaces import it directly, and web/ssr.config.js reshapes it into what the
 * prestruct engine expects. The bestiary's own content lives in lexicon.json -
 * this file is identity and routing only.
 */
const REPO = 'https://github.com/dhaupin/wordsmithing'

export default {
  // --- identity -----------------------------------------------------------
  name: 'The Civic Bestiary',
  wordmark: { accent: 'Civic', rest: ' Bestiary' },
  badge: 'vol. 1',
  tagline: 'A field guide to the creatures of the body politic.',
  description:
    'A field guide to the creatures of the body politic: 27 portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization.',
  // Placeholder: prestruct bakes this into canonicals, OG tags, and sitemap.xml.
  // Replace it with the real deploy origin before the first publish.
  url: 'https://civicbestiary.example.com',
  repo: REPO,
  author: 'dhaupin',
  license: 'MIT',
  keywords:
    'bestiary, field guide, portmanteau, satire, rhetoric, propaganda, trolls, civic, nationalism, media literacy',

  maker: { label: 'dhaupin', url: 'https://github.com/dhaupin' },
  org: { name: 'wordsmithing', url: REPO },

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
    { label: 'Field guide', to: '/species', group: 'site' },
    { label: 'GitHub', href: REPO, group: 'out' },
  ],
  footerExtras: [
    { label: 'Source', href: REPO },
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
          'A field guide to the creatures of the body politic: 27 portmanteaus for performative patriotism, bad-faith debate, hypocrisy, and algorithmic radicalization.',
      },
    },
    {
      path: '/species',
      priority: '0.9',
      changefreq: 'monthly',
      meta: {
        title: 'All species | The Civic Bestiary',
        description:
          'Every species in the bestiary, searchable and grouped by order - from playtriot to slopagandist.',
      },
    },
  ],

  notFound: {
    heading: '404',
    body: 'That species is not in this bestiary.',
    primaryCta: { label: 'Open the field guide', href: '/species' },
  },
}
