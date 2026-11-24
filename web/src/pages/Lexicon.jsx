/**
 * pages/Lexicon.jsx - the browse surface: search, section filter, A-Z jumps.
 *
 * Filtering is client-side over the generated data module, so the prerendered
 * HTML carries every entry (crawlers see the whole lexicon) and the state
 * starts at "everything visible", which is what keeps hydration byte-stable.
 */
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { alphabet, entries, matches, sections, stats } from '../lexicon.js'
import Inline from '../components/Inline.jsx'

export default function Lexicon() {
  const meta = routeMeta('/lexicon')
  usePageMeta({ siteUrl: site.url, path: '/lexicon', title: meta.title, description: meta.description })

  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => entries.filter((entry) => (active === 'all' || entry.section === active) && matches(entry, query)),
    [query, active],
  )
  const shown = useMemo(() => new Set(visible.map((entry) => entry.slug)), [visible])
  const letters = useMemo(() => alphabet(), [])

  return (
    <section className="section lexicon">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">{stats.entries} entries · {stats.sections} sections</p>
          <h1>The lexicon</h1>
          <p className="sub">
            Every term is a portmanteau with two senses: who the person is, and what the pattern does.
            Search by word, or read a section straight through.
          </p>
        </header>

        <div className="toolbar">
          <label className="search">
            <span className="search-label">Search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="playtriot, gallop, algorithm..."
              autoComplete="off"
            />
          </label>
          <div className="chips" role="group" aria-label="Filter by section">
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
            ? `${stats.entries} entries`
            : `${visible.length} of ${stats.entries} entries`}
        </p>

        {visible.length === 0 && (
          <div className="empty">
            <p>Nothing in the lexicon matches “{query}”.</p>
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
                <span className="group-roman">{section.roman}</span>
                {section.title}
              </h2>
              {own.map((entry) => (
                <article key={entry.slug} id={entry.slug} className="entry">
                  <div className="entry-head">
                    <h3 className="entry-term">
                      <Link to={`/term/${entry.slug}`}>{entry.term}</Link>
                    </h3>
                    <p className="entry-meta">
                      <span>{entry.partOfSpeech}</span>
                      <span className="ipa">{entry.ipa}</span>
                    </p>
                  </div>
                  <p className="entry-sense"><Inline text={entry.senses[0]} /></p>
                  <p className="entry-rel">
                    {entry.related.map((related, index) => (
                      <span key={related.slug}>
                        {index > 0 && <span className="sep">·</span>}
                        <Link to={`/term/${related.slug}`}>{related.term}</Link>
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
