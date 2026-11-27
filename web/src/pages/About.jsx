/**
 * pages/About.jsx - the front matter: what the guide is for, one entry taken
 * apart, how the graph reads in both directions, and the rules that keep it
 * from becoming a list of insults. Copy is the lexicon's own preface, so the
 * page cannot drift from the book.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import Inline from '../components/Inline.jsx'
import site, { routeMeta } from '../site.js'
import { chapters, entries, entryFor, kindsList, preface, stats } from '../lexicon.js'

// The plate is a real record, so the page shows what the guide actually ships
// rather than a drawing of it.
const SPECIMEN = entryFor('playtriot') || entries.find((entry) => entry.kind === 'species')

const PARTS = [
  {
    title: 'The coinage',
    body: 'Where the name comes from, and what it is built out of. A portmanteau that has to be explained twice is not a coinage, it is a puzzle.',
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
    title: 'Easily confused with',
    body: 'The nearest neighbour, and the tell that separates the two - so the name stays a tool for recognition rather than a way to end an argument.',
  },
]

const markOf = (entry, key) => entry.identification.find((row) => row.key === key)

function Links({ links }) {
  return links.map((link, index) => (
    <span key={link.slug}>
      {index > 0 && <span className="sep">·</span>}
      <Link to={link.path}>{link.term}</Link>
    </span>
  ))
}

export default function About() {
  const meta = routeMeta('/about/')
  usePageMeta({ siteUrl: site.url, path: '/about/', title: meta.title, description: meta.description })

  const cited = entries.filter((entry) => entry.cite).length
  const commits = SPECIMEN.edges.filter((edge) => edge.rel === 'commits')
  const fallacy = commits.length > 0 ? entryFor(commits[0].slug) : null
  const tell = markOf(SPECIMEN, 'tell')
  const counter = markOf(SPECIMEN, 'counter')
  const twin = SPECIMEN.confusedWith[0]
  const named = entries.filter((entry) => entry.kind === 'species').slice(0, 6)
  // The preface's last paragraph carries two thoughts; the seam is its own
  // sentence, so the page breaks it there without touching a word.
  const [onFallacies, onStandards] = preface[3].split(/(?=The definitions here)/)

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">about</p>
          <h1>A guide, not a verdict</h1>
          <p className="sub">
            What the guide is, how an entry is built, and the rules that keep it from turning into a
            list of insults.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <p className="lede">{preface[0]}</p>
          <dl className="stats">
            <div>
              <dt>entries</dt>
              <dd>{stats.entries}</dd>
            </div>
            <div>
              <dt>coinages described</dt>
              <dd>{stats.coinages}</dd>
            </div>
            <div>
              <dt>fallacies indexed</dt>
              <dd>{stats.fallacies}</dd>
            </div>
            <div>
              <dt>records carrying a source</dt>
              <dd>{cited}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Two rules</h2>
          <p className="sub">Two rules keep the guide from collapsing into a list of insults.</p>
          <div className="grid">
            <div className="card">
              <p className="card-kicker">Rule one</p>
              <h3>A pattern, not a person</h3>
              <p>
                The species is a pattern, not a person - a costume that wears people, not a kind of
                human, and one you can catch yourself in.
              </p>
            </div>
            <div className="card">
              <p className="card-kicker">Rule two</p>
              <h3>A mechanism you can point at</h3>
              <p>
                Every entry describes a mechanism you could point at in a transcript, a rally, or a
                comment thread, so the name stays a tool for recognition rather than a way to end an
                argument.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>One entry, taken apart</h2>
          <p className="sub">
            Every record answers the same questions in the same order, so two entries can be compared
            without reading the prose twice. This is{' '}
            <Link to={SPECIMEN.path}>{SPECIMEN.term}</Link>, exactly as it ships.
          </p>
          <div className="anatomy">
            <article className="draw">
              <div className="draw-head">
                <p className="card-kicker">
                  {SPECIMEN.kindLabel} · chapter {SPECIMEN.chapterRoman}
                </p>
                <h3>{SPECIMEN.term}</h3>
                <p className="draw-summary">{SPECIMEN.definition}</p>
              </div>
              <dl className="draw-marks">
                <div>
                  <dt>The coinage</dt>
                  <dd>{SPECIMEN.etymology}</dd>
                </div>
                <div>
                  <dt>Why it works</dt>
                  <dd><Inline text={SPECIMEN.senses[1] || SPECIMEN.definition} /></dd>
                </div>
                {tell && (
                  <div>
                    <dt>The tell</dt>
                    <dd>
                      {tell.type === 'list' ? (
                        <ul className="draw-list">
                          {tell.value.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      ) : tell.value}
                    </dd>
                  </div>
                )}
                {counter && (
                  <div>
                    <dt>The counter</dt>
                    <dd>{counter.value}</dd>
                  </div>
                )}
                <div>
                  <dt>Sighting</dt>
                  <dd><Inline text={SPECIMEN.example} /></dd>
                </div>
                {twin && (
                  <div>
                    <dt>Confused with</dt>
                    <dd>
                      <Link to={twin.path}>{twin.term}</Link> - <Inline text={twin.tell} />
                    </dd>
                  </div>
                )}
              </dl>
              <div className="draw-foot">
                <Link className="draw-more" to={SPECIMEN.path}>Read the entry →</Link>
                <Link className="draw-more" to="/guide/">See all {stats.entries} →</Link>
              </div>
            </article>
            <ol className="anatomy-legend">
              {PARTS.map((part) => (
                <li key={part.title}>
                  <h3>{part.title}</h3>
                  <p>{part.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The names are the joke, on purpose</h2>
          <div className="prose">
            <p>{preface[2]}</p>
          </div>
          <p className="names">
            {named.map((entry) => (
              <Link key={entry.slug} to={entry.path}>{entry.term}</Link>
            ))}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How the graph works</h2>
          <p className="sub">
            The guide is a network, not a list. Every edge is readable in both directions, and the
            page you land on shows the same relation from its own side.
          </p>
          <div className="walks">
            <p className="walk">
              <Link className="walk-subject" to={SPECIMEN.path}>{SPECIMEN.term}</Link>
              <span className="walk-arrow" aria-hidden="true">→</span>
              <span className="walk-verb">commits</span>
              <span><Links links={commits} /></span>
            </p>
            {fallacy && fallacy.backlinks.length > 0 && (
              <p className="walk">
                <Link className="walk-subject" to={fallacy.path}>{fallacy.term}</Link>
                <span className="walk-arrow" aria-hidden="true">←</span>
                <span className="walk-verb">committed by</span>
                <span>
                  <Links links={fallacy.backlinks.slice(0, 4)} />
                  {fallacy.backlinks.length > 4 && (
                    <Link className="walk-rest" to={fallacy.path}>
                      and {fallacy.backlinks.length - 4} more →
                    </Link>
                  )}
                </span>
              </p>
            )}
            {fallacy && fallacy.committedFrom.length > 0 && (
              <p className="walk">
                <Link className="walk-subject" to={fallacy.path}>{fallacy.term}</Link>
                <span className="walk-arrow" aria-hidden="true">→</span>
                <span className="walk-verb">filed in</span>
                <span>
                  {fallacy.committedFrom.map((chapter, index) => (
                    <span key={chapter.id}>
                      {index > 0 && <span className="sep">·</span>}
                      <Link to={`/chapters/${chapter.id}/`} title={chapter.title}>
                        Chapter {chapter.roman}
                      </Link>
                    </span>
                  ))}
                </span>
              </p>
            )}
          </div>
          <div className="prose">
            <p>
              That is why the guide keeps an entry for the answers as well as the problems -{' '}
              <Link to="/keystones/">{stats.kinds.keystone} keystones</Link> and{' '}
              <Link to="/remedies/">{stats.kinds.remedy} remedies</Link>, from the clerk who keeps the
              record to the carve-out that voids a silence clause. A counter that does not exist is
              worse than a gap: it tells the reader the fight is already lost.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The kinds</h2>
          <p className="sub">
            {stats.entries} entries in {kindsList.length} kinds, arranged in {chapters.length}{' '}
            chapters that run from the characters who wear their politics to the offices that answer
            them. The taxonomy is in the URL, so every kind and every chapter is its own page.
          </p>
          <div className="grid">
            {kindsList.filter((kind) => stats.kinds[kind.id] > 0).map((kind) => (
              <Link key={kind.id} to={kind.path} className="card card-link">
                <p className="card-kicker">
                  <span className={`badge badge-${kind.id}`}>{kind.label}</span> ·{' '}
                  {stats.kinds[kind.id]} entries
                </p>
                <h3>{kind.plural}</h3>
                <p>{kind.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2>The fallacies are not ours</h2>
          <p>{onFallacies}</p>
          <p>{onStandards}</p>
          <p className="note-line">
            {cited} of {stats.entries} records carry a citation; where a record has none, it is a
            coinage, and the entry says so by not claiming a source.{' '}
            <Link to="/fallacies/">Read a fallacy →</Link>
          </p>
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
        </div>
      </section>
    </>
  )
}
