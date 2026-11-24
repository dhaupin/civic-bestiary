/**
 * pages/FieldGuide.jsx - the browse surface: search, order filter, A-Z jumps.
 *
 * Filtering is client-side over the generated data module, so the prerendered
 * HTML carries every species (crawlers see the whole guide) and the state
 * starts at "everything visible", which is what keeps hydration byte-stable.
 */
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { alphabet, entries, matches, sections, stats } from '../lexicon.js'
import Inline from '../components/Inline.jsx'

export default function FieldGuide() {
  const meta = routeMeta('/species')
  usePageMeta({ siteUrl: site.url, path: '/species', title: meta.title, description: meta.description })

  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => entries.filter((entry) => (active === 'all' || entry.section === active) && matches(entry, query)),
    [query, active],
  )
  const shown = useMemo(() => new Set(visible.map((entry) => entry.slug)), [visible])
  const letters = useMemo(() => alphabet(), [])

  return (
    <section className="section field-guide">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">{stats.entries} species · {stats.sections} orders</p>
          <h1>The field guide</h1>
          <p className="sub">
            Every species is a portmanteau with two senses: the creature, and the pattern it runs.
            Search by name, or walk an order end to end.
          </p>
        </header>

        <div className="toolbar">
          <label className="search">
            <span className="search-label">Search species</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="playtriot, gallop, algorithm..."
              autoComplete="off"
            />
          </label>
          <div className="chips" role="group" aria-label="Filter by order">
            <button
              type="button"
              className={active === 'all' ? 'chip chip-on' : 'chip'}
              onClick={() => setActive('all')}
            >
              All
            </button>
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={active === section.id ? 'chip chip-on' : 'chip'}
                onClick={() => setActive(section.id)}
                title={section.title}
              >
                {section.roman}
              </button>
            ))}
          </div>
        </div>

        <nav className="atoz" aria-label="Jump to letter">
          {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) =>
            letters.has(letter) ? (
              <a key={letter} href={`#${letters.get(letter)}`}>{letter}</a>
            ) : (
              <span key={letter} className="off">{letter}</span>
            ),
          )}
        </nav>

        <p className="count" aria-live="polite">
          {visible.length === stats.entries
            ? `${stats.entries} species`
            : `${visible.length} of ${stats.entries} species`}
        </p>

        {visible.length === 0 && (
          <div className="empty">
            <p>Nothing in the guide matches “{query}”.</p>
            <button type="button" className="btn btn-ghost" onClick={() => { setQuery(''); setActive('all') }}>
              Clear the filter
            </button>
          </div>
        )}

        {sections.map((section) => {
          const own = entries.filter((entry) => entry.section === section.id && shown.has(entry.slug))
          if (own.length === 0) return null
          return (
            <div key={section.id} className="group">
              <h2 className="group-head">
                <span className="group-roman">Order {section.roman}</span>
                {section.title}
              </h2>
              {own.map((entry) => (
                <article key={entry.slug} id={entry.slug} className="listing">
                  <div className="listing-head">
                    <h3 className="listing-name">
                      <Link to={`/species/${entry.slug}`}>{entry.term}</Link>
                    </h3>
                    <p className="listing-meta">
                      <span>{entry.partOfSpeech}</span>
                      <span className="ipa">{entry.ipa}</span>
                    </p>
                  </div>
                  <p className="listing-sense"><Inline text={entry.senses[0]} /></p>
                  <p className="listing-rel">
                    <span className="listing-rel-label">Compare</span>
                    {entry.related.map((related, index) => (
                      <span key={related.slug}>
                        {index > 0 && <span className="sep">·</span>}
                        <Link to={`/species/${related.slug}`}>{related.term}</Link>
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
