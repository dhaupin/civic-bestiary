/**
 * pages/Guide.jsx - the browse surface, in three URL shapes:
 *
 *   /guide/                everything
 *   /species/ /moves/ ...  one kind
 *   /chapters/<id>/        one chapter
 *
 * The taxonomy is in the path, so every drill-down is a real page: linkable,
 * shareable, crawlable, and prerendered with its own title. Refinements that
 * are not taxonomy (a letter, a search string) stay in component state - they
 * change what you are looking at, not what the page is.
 *
 * The feed for all three is the same component, so a filter can never drift
 * from the page it lives on.
 */
import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site from '../site.js'
import {
  chapters, defaultAxis, entries, kindsList, matches, sortByAxis, sorts, stats, voiceLabel,
} from '../lexicon.js'
import Inline from '../components/Inline.jsx'

const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

/** The family an entry is filed under, minus the "Informal ·" prefix. */
function familyOf(entry) {
  const row = entry.identification.find((candidate) => candidate.key === 'family')
  if (!row) return null
  return row.value.split('·').pop().replace(/\s*\(.*?\)\s*$/, '').trim()
}

const trim = (path) => path.replace(/\/+$/, '')

/** Which view a URL is asking for: a kind, a chapter, or the whole guide. */
function viewFor(pathname, chapterParam) {
  const path = trim(pathname)
  if (path === '/guide') return { kind: null, chapter: null }
  if (chapterParam) {
    return { kind: null, chapter: chapters.find((item) => item.id === chapterParam) || null }
  }
  const spec = kindsList.find((candidate) => trim(candidate.path) === path)
  return { kind: spec || null, chapter: null }
}

function headingFor(view) {
  if (view.kind) {
    return {
      eyebrow: `${stats.kinds[view.kind.id]} ${view.kind.plural.toLowerCase()}`,
      title: view.kind.plural,
      sub: view.kind.blurb,
      rows: view.kind.identification.map((row) => row.label),
      path: view.kind.path,
      description: `${stats.kinds[view.kind.id]} ${view.kind.plural.toLowerCase()} in the bestiary: ${view.kind.blurb}`,
    }
  }
  if (view.chapter) {
    const own = entries.filter((entry) => entry.chapter === view.chapter.id)
    return {
      eyebrow: `Chapter ${view.chapter.roman} · ${own.length} ${own.length === 1 ? 'entry' : 'entries'}`,
      title: view.chapter.title,
      sub: view.chapter.note || null,
      rows: [],
      path: `/chapters/${view.chapter.id}/`,
      description: `${own.length} entries in chapter ${view.chapter.roman} of the bestiary: ${view.chapter.title}.`,
    }
  }
  return {
    eyebrow: `${stats.coinages} coinages · ${stats.fallacies} fallacies · ${chapters.length} chapters`,
    title: 'The field guide',
    sub: 'Not everything here is a creature. Species are the actors, moves are what they do, abilities belong to offices, habitats are the places that house them, and buffs are the conditions they run under. Each chapter ends with the documented fallacies its creatures commit, and the ones no chapter owns are collected as strays. Search by name, or drill down by kind and chapter.',
    rows: [],
    path: '/guide/',
    description:
      'Every entry in the bestiary, by kind and chapter - species, moves, abilities, habitats, buffs, and the documented fallacies they commit.',
  }
}

export default function Guide() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const view = viewFor(pathname, params.chapter)
  const heading = headingFor(view)
  usePageMeta({
    siteUrl: site.url,
    path: heading.path,
    title: `${heading.title} | ${site.name}`,
    description: heading.description,
  })

  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState(null)
  // The axes a record can be read by. 'position' is the curated field order;
  // everything else comes from the schema, so a new axis is a data change.
  const [axis, setAxis] = useState(() => defaultAxis(view))
  const axes = [{ id: 'position', label: 'Field order' }, ...sorts]

  const present = useMemo(() => new Set(entries.map((entry) => entry.term[0].toUpperCase())), [])
  const populatedKinds = kindsList.filter((spec) => stats.kinds[spec.id] > 0)
  const master = useMemo(
    () => entries.filter((entry) => (
      (!view.kind || entry.kind === view.kind.id)
      && (!view.chapter || entry.chapter === view.chapter.id)
    )),
    [view.kind, view.chapter],
  )
  const visible = useMemo(
    () => sortByAxis(
      master.filter((entry) => (
        (!letter || entry.term[0].toUpperCase() === letter) && matches(entry, query)
      )),
      axis,
    ),
    [master, letter, query, axis],
  )

  // Where the view is only fallacies - their kind page, or the strays chapter -
  // the useful grouping is the accredited family, not the guide's chapters,
  // because every entry there shares a chapter and the heading says nothing.
  const appendix = view.kind?.id === 'fallacy' || view.chapter?.id === 'strays'
  const groups = useMemo(() => {
    if (!appendix) {
      return chapters
        .map((item) => ({
          key: item.id,
          eyebrow: `Chapter ${item.roman}`,
          label: item.title,
          items: visible.filter((entry) => entry.chapter === item.id),
        }))
        .filter((group) => group.items.length > 0)
    }
    const byFamily = new Map()
    for (const entry of visible) {
      const family = familyOf(entry) || 'Unfiled'
      if (!byFamily.has(family)) byFamily.set(family, [])
      byFamily.get(family).push(entry)
    }
    return [...byFamily].map(([family, items]) => ({
      key: family,
      eyebrow: `Family · ${items.length}`,
      label: family,
      items,
    }))
  }, [appendix, visible])

  const scoped = Boolean(view.kind || view.chapter)
  const refined = Boolean(query || letter)
  const clearAll = () => {
    setQuery('')
    setLetter(null)
    setAxis(defaultAxis(view))
    if (scoped) navigate('/guide/')
  }

  const chip = (on) => (on ? 'chip chip-on' : 'chip')

  return (
    <section className="section field-guide">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">{heading.eyebrow}</p>
          <h1>{heading.title}</h1>
          {heading.sub && <p className="sub">{heading.sub}</p>}
          {heading.rows.length > 0 && (
            <p className="sub taxa-rows">{heading.rows.join(' · ')}</p>
          )}
        </header>

        <div className="toolbar">
          <label className="search">
            <span className="search-label">Search {scoped ? 'this view' : 'the guide'}</span>
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
            <Link className={chip(!view.kind && !view.chapter)} to="/guide/">All</Link>
            {populatedKinds.map((spec) => (
              <Link
                key={spec.id}
                className={chip(view.kind?.id === spec.id)}
                to={spec.path}
                title={spec.blurb}
                aria-current={view.kind?.id === spec.id ? 'page' : undefined}
              >
                {spec.plural}
                <span className="chip-count">{stats.kinds[spec.id]}</span>
              </Link>
            ))}
          </div>

          <div className="chips" role="group" aria-label="Filter by chapter">
            <span className="chips-label">Chapter</span>
            <Link className={chip(!view.chapter)} to="/guide/">All</Link>
            {chapters.map((item) => (
              <Link
                key={item.id}
                className={chip(view.chapter?.id === item.id)}
                to={`/chapters/${item.id}/`}
                title={item.title}
                aria-current={view.chapter?.id === item.id ? 'page' : undefined}
              >
                {item.roman}
              </Link>
            ))}
          </div>
        </div>

        {(scoped || refined) && (
          <div className="filters-active">
            <span className="chips-label">Filtering</span>
            {view.kind && (
              <button type="button" className="tag" onClick={() => navigate('/guide/')}>
                {view.kind.label}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear kind filter</span>
              </button>
            )}
            {view.chapter && (
              <button type="button" className="tag" onClick={() => navigate('/guide/')}>
                Chapter {view.chapter.roman}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear chapter filter</span>
              </button>
            )}
            {query && (
              <button type="button" className="tag" onClick={() => setQuery('')}>
                “{query}”<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear search</span>
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

        <div className="chips chips-sort" role="group" aria-label="Sort this view">
          <span className="chips-label">Sort</span>
          {axes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={chip(axis === item.id)}
              onClick={() => setAxis(item.id)}
              aria-pressed={axis === item.id}
              title={item.hint}
            >
              {item.label}
            </button>
          ))}
        </div>

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
          {visible.length === master.length
            ? `${master.length} ${master.length === 1 ? 'entry' : 'entries'}`
            : `${visible.length} of ${master.length} entries`}
          {scoped && ` · ${stats.entries} in the guide`}
          {axis !== 'position' && ` · by ${axes.find((item) => item.id === axis).label.toLowerCase()}`}
        </p>

        {master.length === 0 && (
          <div className="empty">
            <p>Nothing of this kind has been recorded yet.</p>
            <Link className="btn btn-ghost" to="/contribute/">Propose a term</Link>
          </div>
        )}

        {visible.length === 0 && master.length > 0 && (
          <div className="empty">
            <p>Nothing in this view matches those filters.</p>
            <button type="button" className="btn btn-ghost" onClick={clearAll}>
              Clear the filters
            </button>
          </div>
        )}

        {groups.map((group) => {
          const own = group.items
          // A chapter is the coinages first, then the documented names for what
          // they are doing. The sub-head is the seam between the two.
          const coined = own.filter((entry) => entry.kind !== 'fallacy')
          const filed = own.filter((entry) => entry.kind === 'fallacy')
          const runs = coined.length && filed.length
            ? [{ key: 'coined', label: null, items: coined }, { key: 'filed', label: 'Documented fallacies', items: filed }]
            : [{ key: 'all', label: null, items: own }]
          return (
            <div key={group.key} className="group">
              {(!view.chapter || appendix) && (
                <h2 className="group-head">
                  <span className="group-roman">{group.eyebrow}</span>
                  {group.label}
                </h2>
              )}
              {runs.map((run) => (
                <div key={run.key} className="run">
                  {run.label && (
                    <h3 className="group-sub">
                      {run.label}
                      <span className="group-sub-count">{run.items.length}</span>
                    </h3>
                  )}
                  {run.items.map((entry) => (
                <article key={entry.slug} id={entry.slug} className="listing">
                  <div className="listing-head">
                    <h3 className="listing-name">
                      <Link to={entry.path}>{entry.term}</Link>
                    </h3>
                    <p className="listing-meta">
                      <span className={`badge badge-${entry.kind}`}>{entry.kindLabel}</span>
                      <span>{entry.partOfSpeech}</span>
                      <span className="ipa">{entry.ipa}</span>
                      {axis !== 'position' && entry.sort?.[axis] != null && (
                        <span className="listing-score" title={`${axes.find((item) => item.id === axis).label} ${entry.sort[axis]} of 5`}>
                          {entry.sort[axis]}
                        </span>
                      )}
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
