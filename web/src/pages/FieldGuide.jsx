/**
 * pages/FieldGuide.jsx - the browse surface: search, kind filter, chapter
 * filter, A-Z filter.
 *
 * Filtering is client-side over the generated data module, so the prerendered
 * HTML carries every entry (crawlers see the whole guide) and the state starts
 * at "everything visible", which is what keeps hydration byte-stable.
 *
 * Every filter is removable on its own: the search box has its own clear
 * control, and each active filter reappears below the toolbar as a tag with an
 * X, including the letter strip - a letter you clicked is a filter, not an
 * anchor, so it needs a way back out.
 */
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { chapters, entries, kinds, kindsList, matches, stats, voiceLabel } from '../lexicon.js'
import Inline from '../components/Inline.jsx'

const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

export default function FieldGuide() {
  const meta = routeMeta('/species/')
  usePageMeta({ siteUrl: site.url, path: '/species/', title: meta.title, description: meta.description })

  const [query, setQuery] = useState('')
  const [chapter, setChapter] = useState('all')
  const [kind, setKind] = useState('all')
  const [letter, setLetter] = useState(null)

  const present = useMemo(() => new Set(entries.map((entry) => entry.term[0].toUpperCase())), [])
  const populatedKinds = kindsList.filter((spec) => stats.kinds[spec.id] > 0)

  const visible = useMemo(
    () => entries.filter((entry) => (
      (chapter === 'all' || entry.chapter === chapter)
      && (kind === 'all' || entry.kind === kind)
      && (!letter || entry.term[0].toUpperCase() === letter)
      && matches(entry, query)
    )),
    [query, chapter, kind, letter],
  )

  const shown = useMemo(() => new Set(visible.map((entry) => entry.slug)), [visible])
  const active = query || chapter !== 'all' || kind !== 'all' || letter
  const clearAll = () => { setQuery(''); setChapter('all'); setKind('all'); setLetter(null) }

  const chip = (on) => (on ? 'chip chip-on' : 'chip')

  return (
    <section className="section field-guide">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">
            {stats.entries} entries · {chapters.length} chapters · {populatedKinds.length} kinds
          </p>
          <h1>The field guide</h1>
          <p className="sub">
            Not everything here is a creature. Species are the actors, moves are what they do,
            abilities belong to offices, formats are the shows that stage them, and buffs are the
            conditions they run under. Search by name, or filter by kind and chapter.
          </p>
        </header>

        <div className="toolbar">
          <label className="search">
            <span className="search-label">Search the guide</span>
            <span className="search-box">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="playtriot, filibuster, gerrymander..."
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </span>
          </label>

          <div className="chips" role="group" aria-label="Filter by kind">
            <span className="chips-label">Kind</span>
            <button type="button" className={chip(kind === 'all')} onClick={() => setKind('all')}>
              All
            </button>
            {populatedKinds.map((spec) => (
              <button
                key={spec.id}
                type="button"
                className={chip(kind === spec.id)}
                onClick={() => setKind(kind === spec.id ? 'all' : spec.id)}
                title={spec.blurb}
                aria-pressed={kind === spec.id}
              >
                {spec.plural}
                <span className="chip-count">{stats.kinds[spec.id]}</span>
              </button>
            ))}
          </div>

          <div className="chips" role="group" aria-label="Filter by chapter">
            <span className="chips-label">Chapter</span>
            <button type="button" className={chip(chapter === 'all')} onClick={() => setChapter('all')}>
              All
            </button>
            {chapters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={chip(chapter === item.id)}
                onClick={() => setChapter(chapter === item.id ? 'all' : item.id)}
                title={item.title}
                aria-pressed={chapter === item.id}
              >
                {item.roman}
              </button>
            ))}
          </div>
        </div>

        {active && (
          <div className="filters-active">
            <span className="chips-label">Filtering</span>
            {query && (
              <button type="button" className="tag" onClick={() => setQuery('')}>
                “{query}”<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear search</span>
              </button>
            )}
            {kind !== 'all' && (
              <button type="button" className="tag" onClick={() => setKind('all')}>
                {kinds[kind].label}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear kind filter</span>
              </button>
            )}
            {chapter !== 'all' && (
              <button type="button" className="tag" onClick={() => setChapter('all')}>
                Chapter {chapters.find((item) => item.id === chapter)?.roman}
                <span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear chapter filter</span>
              </button>
            )}
            {letter && (
              <button type="button" className="tag" onClick={() => setLetter(null)}>
                {letter}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear letter filter</span>
              </button>
            )}
            <button type="button" className="tag tag-clear" onClick={clearAll}>Clear all</button>
          </div>
        )}

        <nav className="atoz" aria-label="Filter by letter">
          {ALPHABET.map((item) => (
            present.has(item) ? (
              <button
                key={item}
                type="button"
                className={letter === item ? 'on' : undefined}
                onClick={() => setLetter(letter === item ? null : item)}
                aria-pressed={letter === item}
              >
                {item}
              </button>
            ) : (
              <span key={item} className="off">{item}</span>
            )
          ))}
        </nav>

        <p className="count" aria-live="polite">
          {visible.length === stats.entries
            ? `${stats.entries} entries`
            : `${visible.length} of ${stats.entries} entries`}
        </p>

        {visible.length === 0 && (
          <div className="empty">
            <p>Nothing in the guide matches those filters.</p>
            <button type="button" className="btn btn-ghost" onClick={clearAll}>
              Clear the filters
            </button>
          </div>
        )}

        {chapters.map((item) => {
          const own = entries.filter((entry) => entry.chapter === item.id && shown.has(entry.slug))
          if (own.length === 0) return null
          return (
            <div key={item.id} className="group">
              <h2 className="group-head">
                <span className="group-roman">Chapter {item.roman}</span>
                {item.title}
              </h2>
              {own.map((entry) => (
                <article key={entry.slug} id={entry.slug} className="listing">
                  <div className="listing-head">
                    <h3 className="listing-name">
                      <Link to={entry.path}>{entry.term}</Link>
                    </h3>
                    <p className="listing-meta">
                      <span className={`badge badge-${entry.kind}`}>{entry.kindLabel}</span>
                      <span>{entry.partOfSpeech}</span>
                      <span className="ipa">{entry.ipa}</span>
                    </p>
                  </div>
                  <p className="listing-call">
                    <span className="listing-call-label">{voiceLabel(entry)}</span>
                    {entry.voice}
                  </p>
                  <p className="listing-sense"><Inline text={entry.senses[0]} /></p>
                  <p className="listing-rel">
                    <span className="listing-rel-label">Compare</span>
                    {entry.related.map((related, index) => (
                      <span key={related.slug}>
                        {index > 0 && <span className="sep">·</span>}
                        <Link to={related.path}>{related.term}</Link>
                      </span>
                    ))}
                  </p>
                  <Link className="listing-more" to={entry.path}>
                    Read the full entry<span aria-hidden="true"> →</span>
                  </Link>
                </article>
              ))}
            </div>
          )
        })}

        <p className="guide-note">
          Missing something you keep running into?{' '}
          <Link to="/contribute/">Propose a term</Link> - the form asks what the record needs.
        </p>
      </div>
    </section>
  )
}
