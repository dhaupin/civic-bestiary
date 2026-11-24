/**
 * pages/Home.jsx - the landing, flipped from essay-first to browse-first.
 *
 * The thesis now lives on /about/, where a reader who wants the argument can go
 * and read it. The landing does the job a field guide's front matter does: put a
 * specimen in your hand, then show you the drawer it came from.
 */
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { chapters, entries, stats } from '../lexicon.js'

const POOL = entries.filter((entry) => entry.kind !== 'fallacy')

function pickOther(current) {
  let next = current
  while (next === current) next = POOL[Math.floor(Math.random() * POOL.length)]
  return next
}

export default function Home() {
  const meta = routeMeta('/')
  usePageMeta({ siteUrl: site.url, path: '/', title: meta.title, description: meta.description })

  // Stable for the prerender, random once a reader is actually here.
  const [specimen, setSpecimen] = useState(POOL[0])
  useEffect(() => { setSpecimen(pickOther(null)) }, [])

  const chapterRows = useMemo(
    () => chapters.map((chapter) => ({
      ...chapter,
      count: entries.filter((entry) => entry.chapter === chapter.id).length,
    })),
    [],
  )

  const tell = specimen.identification.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">a field guide · vol. 1</p>
          <h1>
            Meet the <span className="accent">creatures</span> of the body politic.
          </h1>
          <p className="lede">
            Every argument has a fauna. This is the field guide to the ones that turn up in your feed,
            your group chat, and the holiday table - what they do, how to spot them, and what actually
            works on them. It is also, if you are honest, a guide to the ones you have worn.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/guide/">
              Open the field guide
            </Link>
            <Link className="btn btn-ghost" to="/about/">
              How to read it
            </Link>
          </div>
          <dl className="stats">
            <div>
              <dd>{stats.coinages}</dd>
              <dt>coinages described</dt>
            </div>
            <div>
              <dd>{stats.fallacies}</dd>
              <dt>fallacies indexed</dt>
            </div>
            <div>
              <dd>{stats.chapters}</dd>
              <dt>chapters</dt>
            </div>
            <div>
              <dd>{Object.keys(stats.kinds).filter((kind) => stats.kinds[kind] > 0).length}</dd>
              <dt>kinds of thing</dt>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>A specimen</h2>
          <p className="sub">
            One creature from the guide, drawn at random. Every entry is written the same way: what it
            is, how to recognise it, and what answers it.
          </p>
          <Link to={specimen.path} className="card card-link">
            <p className="card-kicker">
              {specimen.kindLabel} · chapter {specimen.chapterRoman} · {specimen.chapterTitle}
            </p>
            <h3>{specimen.term}</h3>
            <p>{specimen.summary}</p>
          </Link>
          <dl className="contract">
            {tell.map((row) => (
              <div key={row.key}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="cta-row">
            <button type="button" className="btn btn-ghost" onClick={() => setSpecimen(pickOther(specimen))}>
              Show me another
            </button>
            <Link className="btn btn-ghost" to="/guide/">
              Browse all {stats.entries}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Six chapters</h2>
          <p className="sub">
            The guide runs from the creatures who wear their politics to the offices that answer them.
            Start wherever you keep getting stuck.
          </p>
          <div className="grid">
            {chapterRows.map((chapter) => (
              <Link key={chapter.id} to={`/chapters/${chapter.id}/`} className="card card-link">
                <p className="card-kicker">Chapter {chapter.roman}</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.count} {chapter.count === 1 ? 'entry' : 'entries'}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Where the answers live</h2>
          <p className="sub">
            The guide is not a list of complaints. Every creature has a counter, and the ones that
            belong to an office get an entry of their own.
          </p>
          <div className="grid">
            <Link to="/keystones/" className="card card-link">
              <p className="card-kicker">{stats.kinds.keystone} entries</p>
              <h3>The keystones</h3>
              <p>
                The offices whose absence is the pathology: the clerk, the auditor, the poll worker,
                the commission.
              </p>
            </Link>
            <Link to="/remedies/" className="card card-link">
              <p className="card-kicker">{stats.kinds.remedy} entries</p>
              <h3>The remedies</h3>
              <p>
                The procedures that work: notice and comment, cross-examination, the sunset clause,
                the carve-out.
              </p>
            </Link>
            <Link to="/fallacies/" className="card card-link">
              <p className="card-kicker">{stats.fallacies} entries</p>
              <h3>The fallacies</h3>
              <p>
                The documented arguments each creature commits, with the counter that names the exit.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>Name what you keep seeing</h2>
          <p>
            The bestiary grows the way a field guide does: someone notices a creature, writes down what
            it does, and checks whether the animal next to it is the same one. If you have a name for
            something the guide is missing, the proposal form is the way in.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/contribute/">
              Propose a term
            </Link>
            <Link className="btn btn-ghost" to="/about/">
              Read about the guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
