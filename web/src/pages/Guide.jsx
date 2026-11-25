/**
 * pages/Guide.jsx - the browse surface, in three URL shapes:
 *
 *   /guide/                everything
 *   /species/ /moves/ ...  one kind
 *   /chapters/<id>/        one chapter
 *
 * The taxonomy is in the path, so every drill-down is a real page: linkable,
 * shareable, crawlable, and prerendered with its own title. Everything that
 * narrows the view without being the page - the search string, a letter, a
 * sort, and the other half of kind/chapter - lives in the query string, so a
 * filtered view is still a URL you can send to someone.
 *
 * Kind and chapter combine rather than replace each other: whichever one the
 * reader clicked last owns the path, the other rides along as a parameter, and
 * a link that changes one keeps every other filter intact.
 *
 * The feed for all three is the same component, so a filter can never drift
 * from the page it lives on.
 */
import { useMemo } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site from '../site.js'
import {
  chapters, defaultAxis, entries, kindsList, matches, sortByAxis, sorts, stats, voiceLabel,
} from '../lexicon.js'
import Inline from '../components/Inline.jsx'
import ShareButton from '../components/ShareButton.jsx'

const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

// One place for the query-string vocabulary, so a link and its reader agree.
const PARAM = { query: 'q', letter: 'letter', sort: 'sort', kind: 'kind', chapter: 'chapter' }

/** The family an entry is filed under, minus the "Informal ·" prefix. */
function familyOf(entry) {
  const row = entry.identification.find((candidate) => candidate.key === 'family')
  if (!row) return null
  return row.value.split('·').pop().replace(/\s*\(.*?\)\s*$/, '').trim()
}

const trim = (path) => path.replace(/\/+$/, '')

/**
 * Which view a URL is asking for. The path is the page; the query string adds
 * the dimension the path does not carry, so /chapters/iii/?kind=species reads
 * as "the species in chapter III" rather than losing one of the two.
 */
function viewFor(pathname, routeChapter, search) {
  const path = trim(pathname)
  let kind = null
  let chapter = null
  if (routeChapter) chapter = chapters.find((item) => item.id === routeChapter) || null
  else if (path !== '/guide') kind = kindsList.find((candidate) => trim(candidate.path) === path) || null
  if (!kind) kind = kindsList.find((candidate) => candidate.id === search.get(PARAM.kind)) || null
  if (!chapter) chapter = chapters.find((item) => item.id === search.get(PARAM.chapter)) || null
  // Whichever dimension the path carries names the page; the heading follows it,
  // so the title does not change under a reader who only added a filter.
  const primary = chapter && (routeChapter || !kind) ? 'chapter' : kind ? 'kind' : chapter ? 'chapter' : 'guide'
  return { kind, chapter, primary }
}

function headingFor(view, total) {
  const plural = view.kind?.plural.toLowerCase()
  if (view.kind && view.primary !== 'chapter') {
    const scope = view.chapter ? ` · chapter ${view.chapter.roman}` : ''
    return {
      eyebrow: `${total} ${plural}${scope}`,
      title: view.kind.plural,
      // A kind read inside a chapter still needs the chapter named: the chip
      // said "V", and a reader landing on this URL cold has no idea what V is.
      scope: view.chapter
        ? { label: `Chapter ${view.chapter.roman} · ${view.chapter.title}`, path: `/chapters/${view.chapter.id}/` }
        : null,
      sub: view.kind.blurb,
      rows: view.kind.identification.map((row) => row.label),
      path: view.kind.path,
      description: `${total} ${plural} in the bestiary${view.chapter ? `, chapter ${view.chapter.roman}` : ''}: ${view.kind.blurb}`,
    }
  }
  if (view.chapter) {
    const scope = view.kind
      ? `${total} ${plural}`
      : `${total} ${total === 1 ? 'entry' : 'entries'}`
    return {
      eyebrow: `Chapter ${view.chapter.roman} · ${scope}`,
      title: view.chapter.title,
      sub: view.chapter.note || null,
      rows: [],
      path: `/chapters/${view.chapter.id}/`,
      description: `${total} ${view.kind ? plural : 'entries'} in chapter ${view.chapter.roman} of the bestiary: ${view.chapter.title}.`,
    }
  }
  return {
    eyebrow: `${stats.entries} entries · ${stats.fallacies} fallacies · ${chapters.length} chapters`,
    title: 'The field guide',
    sub: 'Welcome to the field guide. Pick a kind, pick a chapter, or search for the line you keep seeing in a reply box. A species is an actor, a move is what it does, an ability belongs to an office, a habitat is the room it works in, a buff is the weather it runs under, and a fallacy is the documented error it commits. Every entry says what the thing is, how to recognise it, and what answers it - and the answers have entries of their own, in chapter VI. Each character links to the fallacies it commits, and each fallacy links back to the characters who commit it, so the guide reads in both directions.',
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
  const [search, setSearch] = useSearchParams()
  const view = viewFor(pathname, params.chapter, search)

  // The axes a record can be read by. 'position' is the curated field order;
  // everything else comes from the schema, so a new axis is a data change.
  const axes = useMemo(() => [{ id: 'position', label: 'Field order' }, ...sorts], [])
  const query = search.get(PARAM.query) || ''
  const letter = (search.get(PARAM.letter) || '').toUpperCase() || null
  const requestedAxis = search.get(PARAM.sort)
  const axis = axes.some((item) => item.id === requestedAxis) ? requestedAxis : defaultAxis(view)

  // What the page holds before the kind chip narrows it. The kind chips are
  // counted from this, not from the whole guide: on a chapter page a chip is a
  // filter within the chapter, and a kind the chapter does not carry is not a
  // door worth offering.
  const inView = useMemo(
    () => entries.filter((entry) => !view.chapter || entry.chapter === view.chapter.id),
    [view.chapter],
  )
  const kindCounts = useMemo(() => {
    const counts = {}
    for (const entry of inView) counts[entry.kind] = (counts[entry.kind] || 0) + 1
    return counts
  }, [inView])
  const master = useMemo(
    () => (view.kind ? inView.filter((entry) => entry.kind === view.kind.id) : inView),
    [inView, view.kind],
  )
  const heading = headingFor(view, master.length)
  usePageMeta({
    siteUrl: site.url,
    path: heading.path,
    title: `${heading.title} | ${site.name}`,
    description: heading.description,
  })

  const present = useMemo(() => new Set(entries.map((entry) => entry.term[0].toUpperCase())), [])
  const populatedKinds = kindsList.filter((spec) => kindCounts[spec.id] > 0)
  const visible = useMemo(
    () => sortByAxis(
      master.filter((entry) => (
        (!letter || entry.term[0].toUpperCase() === letter) && matches(entry, query)
      )),
      axis,
    ),
    [master, letter, query, axis],
  )

  // Where the view is only fallacies - their kind page - the useful grouping is
  // the accredited family, not the guide's chapters, because every entry there
  // shares a chapter and the heading says nothing. A chapter page keeps the
  // normal layout: its coinages, then the documented errors behind the seam.
  const appendix = view.kind?.id === 'fallacy'
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
  const refined = Boolean(query || letter || requestedAxis)

  /** Set or drop one refinement, leaving the rest of the URL alone. */
  const setFilter = (key, value) => {
    const next = new URLSearchParams(search)
    if (value === null || value === undefined || value === '') next.delete(key)
    else next.set(key, value)
    // Typing and picking a letter are refinements, not destinations: replace the
    // history entry so Back returns to the page before the filtering started.
    setSearch(next, { replace: true })
  }

  /**
   * A link to a view that keeps every filter except the one being changed.
   * `chapterInPath` says which of the two taxonomy dimensions owns the path -
   * the one the reader just clicked - and the other one follows in the query.
   */
  const linkFor = ({ kind = null, chapter = null, chapterInPath = false }) => {
    const pathnameFor = chapterInPath && chapter
      ? `/chapters/${chapter.id}/`
      : kind ? kind.path : chapter ? `/chapters/${chapter.id}/` : '/guide/'
    const next = new URLSearchParams(search)
    next.delete(PARAM.kind)
    next.delete(PARAM.chapter)
    if (kind && chapter) {
      if (chapterInPath) next.set(PARAM.kind, kind.id)
      else next.set(PARAM.chapter, chapter.id)
    }
    const qs = next.toString()
    return qs ? `${pathnameFor}?${qs}` : pathnameFor
  }

  const clearAll = () => navigate('/guide/')

  const chip = (on) => (on ? 'chip chip-on' : 'chip')

  return (
    <section className="section field-guide">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">{heading.eyebrow}</p>
          <h1>{heading.title}</h1>
          {heading.scope && (
            <p className="head-scope">
              <Link to={heading.scope.path}>{heading.scope.label}</Link>
            </p>
          )}
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
                onChange={(event) => setFilter(PARAM.query, event.target.value)}
                placeholder="filibuster, gerrymander, bothsidesing..."
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setFilter(PARAM.query, null)}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </span>
          </label>

          <div className="chips" role="group" aria-label="Filter by kind">
            <span className="chips-label">Kind</span>
            <Link
              className={chip(!view.kind)}
              to={linkFor({ chapter: view.chapter, chapterInPath: Boolean(view.chapter) })}
            >
              All
            </Link>
            {populatedKinds.map((spec) => (
              <Link
                key={spec.id}
                className={chip(view.kind?.id === spec.id)}
                to={linkFor({ kind: spec, chapter: view.chapter })}
                title={spec.blurb}
                aria-current={view.kind?.id === spec.id ? 'page' : undefined}
              >
                {spec.plural}
                <span className="chip-count">{kindCounts[spec.id]}</span>
              </Link>
            ))}
          </div>

          <div className="chips" role="group" aria-label="Filter by chapter">
            <span className="chips-label">Chapter</span>
            <Link className={chip(!view.chapter)} to={linkFor({ kind: view.kind })}>
              All
            </Link>
            {chapters.map((item) => (
              <Link
                key={item.id}
                className={chip(view.chapter?.id === item.id)}
                to={linkFor({ kind: view.kind, chapter: item, chapterInPath: true })}
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
              <Link
                className="tag"
                to={linkFor({ chapter: view.chapter, chapterInPath: Boolean(view.chapter) })}
              >
                {view.kind.label}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear kind filter</span>
              </Link>
            )}
            {view.chapter && (
              <Link className="tag" to={linkFor({ kind: view.kind })}>
                Chapter {view.chapter.roman}<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear chapter filter</span>
              </Link>
            )}
            {query && (
              <button type="button" className="tag" onClick={() => setFilter(PARAM.query, null)}>
                "{query}"<span className="tag-x" aria-hidden="true">×</span>
                <span className="sr-only">Clear search</span>
              </button>
            )}
            {letter && (
              <button type="button" className="tag" onClick={() => setFilter(PARAM.letter, null)}>
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
              onClick={() => setFilter(PARAM.sort, item.id)}
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
                onClick={() => setFilter(PARAM.letter, letter === item ? null : item)}
                aria-pressed={letter === item}
              >
                {item}
              </button>
            ) : (
              <span key={item} className="off">{item}</span>
            )
          ))}
        </nav>

        <div className="result-bar">
        <p className="count" aria-live="polite">
          {visible.length === master.length
            ? `${master.length} ${master.length === 1 ? 'entry' : 'entries'}`
            : `${visible.length} of ${master.length} entries`}
          {scoped && ` · ${stats.entries} in the guide`}
          {axis !== 'position' && ` · by ${axes.find((item) => item.id === axis).label.toLowerCase()}`}
        </p>
        <ShareButton label="Share this view" title={`${heading.title} | ${site.name}`} className="btn btn-ghost share-view" />
        </div>

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
              {(groups.length > 1 || appendix) && (
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

        <aside className="guide-cta">
          <div className="guide-cta-copy">
            <p className="guide-cta-title">Missing something you keep running into?</p>
            <p className="guide-cta-body">Propose a term - the form asks what the record needs.</p>
          </div>
          <Link className="btn btn-primary" to="/contribute/">Propose a term</Link>
        </aside>
      </div>
    </section>
  )
}
