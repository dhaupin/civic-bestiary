/**
 * pages/About.jsx - the essay the landing used to carry, plus the extended
 * paths: what the guide is for, how an entry is built, how the graph works,
 * and where to go next. Copy is the lexicon's own preface, so the page cannot
 * drift from the book.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { chapters, kindsList, preface, stats } from '../lexicon.js'

const ANATOMY = [
  {
    title: 'Etymology',
    body: 'Where the coinage comes from, and what it is built out of. A portmanteau that has to be explained twice is not a coinage, it is a puzzle.',
  },
  {
    title: 'Two senses',
    body: 'The first says what the thing is. The second says why it works - the mechanism, not the moral. If the second sense is a complaint, the entry is not finished.',
  },
  {
    title: 'The tell',
    body: 'What you would point at in a transcript. A tell is a behaviour you can observe, not a motive you can infer.',
  },
  {
    title: 'The counter',
    body: 'What actually works on it. Not what should work, and not a better insult: the move that costs the character something.',
  },
  {
    title: 'Sighting in the wild',
    body: 'One sentence of it happening, written the way you would overhear it.',
  },
  {
    title: 'Easily confused with, and found in',
    body: 'The nearest neighbour, and the habitat that houses it - so the name stays a tool for recognition rather than a way to end an argument.',
  },
]

export default function About() {
  const meta = routeMeta('/about/')
  usePageMeta({ siteUrl: site.url, path: '/about/', title: meta.title, description: meta.description })

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">about</p>
          <h1>A guide, not a verdict</h1>
          <p className="sub">
            What this is for, who it is for, and the rules that keep it from turning into a list of
            insults.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap prose">
          {preface.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How an entry is built</h2>
          <p className="sub">
            Every record answers the same questions in the same order, so two entries can be compared
            without reading the prose twice.
          </p>
          <dl className="contract">
            {ANATOMY.map((row) => (
              <div key={row.title}>
                <dt>{row.title}</dt>
                <dd>{row.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>How the graph works</h2>
          <p>
            The guide is a network, not a list. Each entry points at the fallacies it commits, the
            habitat that houses it, the counter that answers it, and the neighbours it is confused
            with. Every edge is readable in both directions: the character page shows what it commits,
            and the fallacy page shows who commits it.
          </p>
          <p>
            That is why the guide keeps an entry for the answers as well as the problems -{' '}
            <strong>{stats.kinds.keystone}</strong> keystones and <strong>{stats.kinds.remedy}</strong>{' '}
            remedies, from the clerk who keeps the record to the carve-out that voids a silence clause.
            A counter that does not exist is worse than a gap: it tells the reader the fight is
            already lost.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The kinds</h2>
          <p className="sub">
            {stats.entries} entries, {kindsList.length} kinds, {chapters.length} chapters. The
            taxonomy is in the URL, so every kind and every chapter is its own page.
          </p>
          <dl className="taxa-list">
            {kindsList.filter((kind) => stats.kinds[kind.id] > 0).map((kind) => (
              <div key={kind.id}>
                <dt>
                  <Link to={kind.path}>
                    <span className={`badge badge-${kind.id}`}>{kind.label}</span>
                  </Link>
                </dt>
                <dd>
                  {kind.blurb}
                  <span className="taxa-rows">{stats.kinds[kind.id]} entries</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>Where to go next</h2>
          <p>
            Read the guide, argue with it, or add to it. The record contract is public, and a proposal
            is one file.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/guide/">
              Open the field guide
            </Link>
            <Link className="btn btn-ghost" to="/contribute/">
              Propose a term
            </Link>
            <a className="btn btn-ghost" href={site.repo} target="_blank" rel="noreferrer">
              Read the source
            </a>
          </div>
          <p>
            Published by <a href="https://creadev.org" target="_blank" rel="noopener">Creadev</a>. The
            text is {site.license}-licensed and the build is reproducible from the repository: the
            entries are JSON, the guide is generated, and the site is static.
          </p>
        </div>
      </section>
    </>
  )
}
