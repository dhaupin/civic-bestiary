/**
 * site.config.js - THE site identity, authored once, read everywhere.
 *
 * Adopted from dhaupin/coreforge. Everything else derives from it: the React
 * surfaces import it directly, and web/ssr.config.js reshapes it into what the
 * prestruct engine expects. The lexicon's own content lives in lexicon.json -
 * this file is identity and routing only.
 */
const REPO = 'https://github.com/dhaupin/wordsmithing'

export default {
  // --- identity -----------------------------------------------------------
  name: 'The Psy-Loop Lexicon',
  wordmark: { accent: 'Psy-Loop', rest: ' Lexicon' },
  badge: 'vol. 1',
  tagline: 'A glossary of portmanteaus for performative patriotism, bad-faith debate, and algorithmic radicalization.',
  description:
    'A glossary of portmanteaus capturing performative nationalism, weaponized liberty, bad-faith debate tactics, and algorithmic radicalization.',
  // Placeholder: prestruct bakes this into canonicals, OG tags, and sitemap.xml.
  // Replace it with the real deploy origin before the first publish.
  url: 'https://wordsmithing.example.com',
  repo: REPO,
  author: 'dhaupin',
  license: 'MIT',
  keywords:
    'lexicon, glossary, portmanteau, satire, rhetoric, propaganda, civic, nationalism, media literacy',

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
    { label: 'Lexicon', to: '/lexicon', group: 'site' },
    { label: 'GitHub', href: REPO, group: 'out' },
  ],
  footerExtras: [
    { label: 'Source', href: REPO },
    { label: 'License', href: `${REPO}/blob/main/LICENSE` },
  ],

  // --- routes -------------------------------------------------------------
  // Base routes only. The per-term routes are content, so web/ssr.config.js
  // appends them from the generated data module.
  routes: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'monthly',
      meta: {
        title: 'The Modern Civic & Rhetorical Psy-Loop Lexicon',
        description:
          'A glossary of portmanteaus capturing performative nationalism, weaponized liberty, bad-faith debate tactics, and algorithmic radicalization.',
      },
    },
    {
      path: '/lexicon',
      priority: '0.9',
      changefreq: 'monthly',
      meta: {
        title: 'All entries | The Psy-Loop Lexicon',
        description:
          'Every coined term in the lexicon, searchable and grouped by section - from playtriot to slopagandist.',
      },
    },
  ],

  notFound: {
    heading: '404',
    body: 'That word is not in this lexicon.',
    primaryCta: { label: 'Browse the lexicon', href: '/lexicon' },
  },
}
