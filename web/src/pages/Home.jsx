/**
 * pages/Home.jsx - the landing, flipped from essay-first to browse-first.
 *
 * The thesis now lives on /about/, where a reader who wants the argument can go
 * and read it. The landing does the job a field guide's front matter does: put a
 * character in your hand, then show you the drawer it came from.
 */
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { FAQ } from '../data/faq.js'
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
  const [featured, setFeatured] = useState(POOL[0])
  useEffect(() => { setFeatured(pickOther(null)) }, [])

  const chapterRows = useMemo(
    () => chapters.map((chapter) => ({
      ...chapter,
      count: entries.filter((entry) => entry.chapter === chapter.id).length,
    })),
    [],
  )

  const tell = featured.identification.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">a field guide · vol. 1</p>
          <h1>
            Meet the <span className="accent">characters</span> of the body politic.
          </h1>
          <p className="lede">
            Every argument has a cast. This is the field guide to the ones who turn up in your feed,
            your group chat, and the comment thread under a news story - what they do, how to spot
            them, and what actually works on them.
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
              <dt>coinages described</dt>
              <dd>{stats.coinages}</dd>
            </div>
            <div>
              <dt>fallacies indexed</dt>
              <dd>{stats.fallacies}</dd>
            </div>
            <div>
              <dt>chapters</dt>
              <dd>{stats.chapters}</dd>
            </div>
            <div>
              <dt>kinds of thing</dt>
              <dd>{Object.keys(stats.kinds).filter((kind) => stats.kinds[kind] > 0).length}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>One at random</h2>
          <p className="sub">
            An entry from the guide, drawn fresh each visit. Every one is written the same way: what it
            is, how to recognise it, and what answers it.
          </p>
          <article className="draw">
            <Link to={featured.path} className="draw-head">
              <p className="card-kicker">
                {featured.kindLabel} · chapter {featured.chapterRoman} · {featured.chapterTitle}
              </p>
              <h3>{featured.term}</h3>
              <p className="draw-summary">{featured.definition}</p>
            </Link>
            <dl className="draw-marks">
              {tell.map((row) => (
                <div key={row.key}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.type === 'list' ? (
                      <ul className="draw-list">
                        {row.value.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="draw-foot">
              <Link className="draw-more" to={featured.path}>
                Read the entry →
              </Link>
              <div className="draw-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setFeatured(pickOther(featured))}>
                  Show me another
                </button>
                <Link className="btn btn-ghost" to="/guide/">
                  Browse all {stats.entries}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Six chapters</h2>
          <p className="sub">
            The guide runs from the characters who wear their politics to the offices that answer
            them. Start wherever you keep getting stuck.
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
            The guide is not a list of complaints. Every character has a counter, and the ones that
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
                The documented arguments each character commits, with the counter that names the exit.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <h2>Questions the guide gets asked</h2>
          <p className="sub">
            What this is, what it is not, and what it is built from. The long answers live on the
            about and contribute pages.
          </p>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>Name what you keep seeing</h2>
          <p>
            The bestiary grows the way a field guide does: someone notices a character, writes down what
            it does, and checks whether the one beside it is the same. If you have a name for something
            the guide is missing, the proposal form is the way in.
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
