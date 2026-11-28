/**
 * site.config.js - THE site identity, authored once, read everywhere.
 *
 * Adopted from dhaupin/coreforge. Everything else derives from it: the React
 * surfaces import it directly, and web/ssr.config.js reshapes it into what the
 * prestruct engine expects. The bestiary's own content lives in data/ -
 * this file is identity and routing only.
 */
const REPO = 'https://github.com/dhaupin/civic-bestiary'

export default {
  // --- identity -----------------------------------------------------------
  name: 'The Civic Bestiary',
  wordmark: { accent: 'Civic', rest: ' Bestiary' },
  badge: 'vol. 1',
  tagline: 'A field guide to the characters of the body politic.',
  description:
    'A field guide to the characters of the body politic, and the documented fallacies they commit - sourced, crosslinked, and readable in both directions.',
  // The canonical origin. Cloudflare Pages serves the project at
  // <project>.pages.dev and at any attached custom domain; this line decides
  // which one is canonical. prestruct bakes it into canonicals, OG tags,
  // JSON-LD, sitemap, and llms.txt, so changing it means a rebuild, not an edit
  // to the baked files. The pages.dev host still serves - redirect it at the
  // zone if you want one origin in the index.
  url: 'https://codex.creadev.org',
  repo: REPO,
  author: 'dhaupin',
  license: 'MIT',
  keywords:
    'bestiary, field guide, portmanteau, satire, rhetoric, propaganda, trolls, civic, nationalism, media literacy',

  copyright: { label: 'Creadev.org', url: 'https://creadev.org' },
  org: { name: 'civic-bestiary', url: REPO },

  // --- theme --------------------------------------------------------------
  // Protocol constants shared by the pre-paint bootstrap and the switch; not
  // brand, so they stay stable.
  theme: {
    themeKey: 'site-theme',
    defaultMode: 'light',
  },

  // --- nav vocabulary -----------------------------------------------------
  // ONE list the header, the burger sidebar, and the footer render from.
  // The header carries reading surfaces only. Contributing and provenance are
  // foot-of-page matters: a reader who wants to argue with the guide should find
  // the argument first and the paperwork second.
  nav: [
    { label: 'Field guide', to: '/guide/', group: 'site' },
    { label: 'Fallacies', to: '/fallacies/', group: 'site' },
    { label: 'Latest', to: '/latest/', group: 'site' },
    { label: 'About', to: '/about/', group: 'site' },
  ],
  footerExtras: [
    { label: 'Contribute', href: '/contribute/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'Privacy', href: '/privacy/' },
    { label: 'GitHub', href: REPO },
    { label: 'License', href: `${REPO}/blob/main/LICENSE` },
  ],

  // Sits above the footer links on every page: what the guide is, stated once,
  // wherever a reader lands. Terms of use carry the long version.
  //
  // This used to read "any resemblance ... is coincidental", which is a claim
  // about the author's state of mind that the editorial method contradicts.
  // Describe the work instead of denying the resemblance: the second is
  // provable, and the first is what the entries actually do.
  footerNote:
    'Satire and commentary on patterns of public behaviour. It is about no one, and asserts nothing about any person.',

  // --- routes -------------------------------------------------------------
  // Base routes only. The per-species routes are content, so web/ssr.config.js
  // appends them from the generated data module.
  routes: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'monthly',
      meta: {
        title: 'The Civic Bestiary - characters of the body politic',
        description:
          'A field guide to the characters of the body politic, and the documented fallacies they commit - sourced, crosslinked, and readable in both directions.',
      },
    },
    {
      path: '/about/',
      priority: '0.6',
      changefreq: 'monthly',
      meta: {
        title: 'About the guide | The Civic Bestiary',
        description:
          'What the Civic Bestiary is, how the entries are built, and the rules that keep it from becoming a list of insults.',
      },
    },
    {
      path: '/latest/',
      priority: '0.6',
      changefreq: 'weekly',
      meta: {
        title: 'Latest | The Civic Bestiary',
        description:
          'New entries as they land, and notes on the ones already in the guide - the chronology of the bestiary, newest first.',
      },
    },
    {
      path: '/contribute/',
      priority: '0.6',
      changefreq: 'yearly',
      meta: {
        title: 'Propose a term | The Civic Bestiary',
        description:
          'How to add a character to the bestiary: what the record contract asks for, and where to send the proposal.',
      },
    },
    {
      path: '/terms/',
      priority: '0.3',
      changefreq: 'yearly',
      meta: {
        title: 'Terms of use | The Civic Bestiary',
        description:
          'Satire in a fictional universe: what this site is, what it does not claim about anyone, the licence, and the limits that apply.',
      },
    },
    {
      path: '/privacy/',
      priority: '0.3',
      changefreq: 'yearly',
      meta: {
        title: 'Privacy notice | The Civic Bestiary',
        description:
          'No accounts, no ads, no profiles. What Cloudflare, Zaraz, and Google Analytics actually do here, and how to turn analytics off.',
      },
    },
    {
      path: '/guide/',
      priority: '0.9',
      changefreq: 'monthly',
      meta: {
        title: 'The field guide | The Civic Bestiary',
        description:
          'Every entry in the bestiary, by kind and chapter - species, moves, abilities, habitats, buffs, fallacies, remedies, and keystones, each with a tell and a counter.',
      },
    },
  ],

  notFound: {
    heading: '404',
    body: 'That species is not in this bestiary.',
    primaryCta: { label: 'Open the field guide', href: '/guide/' },
  },
}
