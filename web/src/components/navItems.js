/**
 * The site's nav vocabulary - ONE list that the header, the burger sidebar,
 * and the footer all render from. Sourced from site.config.js (the single
 * identity file), so the surfaces cannot drift from the brand. Probes (port
 * the web-docs-consistency test if you also ship docs) read this file.
 *
 * Group semantics: 'site' = internal route (NavLink-active), 'out' = external
 * surface (the GitHub icon in the header replaces this entry's label there;
 * the FOOTER still renders the text link - see Nav.jsx HEADER_LINKS).
 */
import site from '../site.js'
import { chapters, kindsList, stats } from '../lexicon.js'

export const NAV_ITEMS = site.nav

/**
 * The taxonomy, derived from the data rather than retyped: a kind with no
 * records yet is not offered, and the counts cannot drift from the guide.
 * These are the same destinations the guide's chips link to - one URL per
 * view, reached from the menu as well as from the page.
 */
export const KIND_LINKS = kindsList
  .filter((spec) => stats.kinds[spec.id] > 0)
  .map((spec) => ({ label: spec.plural, to: spec.path, count: stats.kinds[spec.id], blurb: spec.blurb }))

export const CHAPTER_LINKS = chapters.map((chapter) => ({
  label: `Chapter ${chapter.roman}`,
  to: `/chapters/${chapter.id}/`,
  title: chapter.title,
}))

/** Footer-only extras (legal + provenance). */
export const FOOTER_EXTRAS = site.footerExtras
