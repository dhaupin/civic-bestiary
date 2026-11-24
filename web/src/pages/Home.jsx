/**
 * pages/Home.jsx - the landing. Copy is the lexicon's own: the thesis comes
 * from the preface in lexicon.json, so the page cannot drift from the README.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { entries, meta as lexicon, preface, sections, stats } from '../lexicon.js'

export default function Home() {
  const meta = routeMeta('/')
  usePageMeta({ siteUrl: site.url, path: '/', title: meta.title, description: meta.description })

  const featured = sections
    .map((section) => entries.find((entry) => entry.section === section.id))
    .filter(Boolean)

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">a field guide</p>
          <h1>
            Names for the tricks that <span className="accent">pretend to be arguments.</span>
          </h1>
          <p className="lede">{lexicon.description}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/species">
              Open the field guide
            </Link>
            <a className="btn btn-ghost" href={site.repo} target="_blank" rel="noreferrer">
              Read the source
            </a>
          </div>
          <dl className="stats">
            <div>
              <dd>{stats.entries}</dd>
              <dt>species described</dt>
            </div>
            <div>
              <dd>{stats.sections}</dd>
              <dt>orders</dt>
            </div>
            <div>
              <dd>2</dd>
              <dt>senses each</dt>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>About this guide</h2>
          {preface.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>First sightings</h2>
          <p className="sub">One species from each order. The whole guide is searchable.</p>
          <div className="grid">
            {featured.map((entry) => (
              <Link key={entry.slug} to={`/species/${entry.slug}`} className="card card-link">
                <p className="card-kicker">
                  Order {entry.sectionRoman} · {entry.partOfSpeech}
                </p>
                <h3>{entry.term}</h3>
                <p>{entry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
