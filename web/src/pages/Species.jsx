/**
 * pages/Species.jsx - one entry of the guide. Prerendered per route by
 * prestruct, so every species has its own URL, title, and description.
 */
import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site from '../site.js'
import { entryFor, neighbors, positionOf } from '../lexicon.js'
import Inline from '../components/Inline.jsx'
import NotFound from './NotFound.jsx'

export default function Species() {
  const { slug } = useParams()
  const entry = entryFor(slug)

  usePageMeta({
    siteUrl: site.url,
    path: `/species/${slug}/`,
    title: entry ? `${entry.term} - ${entry.partOfSpeech} | ${site.name}` : undefined,
    description: entry ? entry.summary : undefined,
  })

  if (!entry) return <NotFound />

  const { previous, next } = neighbors(slug)
  const position = positionOf(slug)

  return (
    <article className="species">
      <div className="wrap species-wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/species/">Field guide</Link>
          <span className="sep">/</span>
          <span>Order {entry.sectionRoman}. {entry.sectionTitle}</span>
        </nav>

        <p className="species-kicker">
          No. {position.number} of {position.total}
        </p>

        <header className="species-head">
          <h1 className="species-name">{entry.term}</h1>
          <p className="species-meta">
            <em>{entry.partOfSpeech}</em>
            <span className="ipa">{entry.ipa}</span>
          </p>
          <p className="species-etym">{entry.etymology}</p>
        </header>

        <dl className="species-spec">
          <div>
            <dt>Range</dt>
            <dd className="species-range">{entry.range}</dd>
          </div>
          <div>
            <dt>Call</dt>
            <dd className="species-call">{entry.call}</dd>
          </div>
          <div>
            <dt>Field marks</dt>
            <dd>
              <ul className="species-marks">
                {entry.fieldMarks.map((mark) => (
                  <li key={mark}>{mark}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <ol className="species-senses">
          {entry.senses.map((sense, index) => (
            <li key={index}><Inline text={sense} /></li>
          ))}
        </ol>

        {entry.notes.map((note) => (
          <aside key={note.label} className="species-note">
            <h2>{note.label}</h2>
            <p><Inline text={note.text} /></p>
          </aside>
        ))}

        <figure className="species-sighting">
          <blockquote><Inline text={entry.example} /></blockquote>
          <figcaption>Sighting in the wild</figcaption>
        </figure>

        {entry.confusedWith.length > 0 && (
          <div className="species-twins">
            <h2>Easily confused with</h2>
            {entry.confusedWith.map((twin) => (
              <p key={twin.slug} className="species-twin">
                <Link className="species-twin-name" to={`/species/${twin.slug}/`}>{twin.term}</Link>
                <span className="species-twin-tell"><Inline text={twin.tell} /></span>
              </p>
            ))}
          </div>
        )}

        <div className="species-compare">
          <h2>Compare with</h2>
          <p>
            {entry.related.map((related, index) => (
              <span key={related.slug}>
                {index > 0 && <span className="sep">·</span>}
                <Link to={`/species/${related.slug}/`}>{related.term}</Link>
              </span>
            ))}
          </p>
        </div>

        <nav className="species-nav" aria-label="Adjacent species">
          {previous ? (
            <Link to={`/species/${previous.slug}/`} className="species-nav-item">
              <span className="species-nav-dir">Previous species</span>
              <span className="species-nav-term">{previous.term}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/species/${next.slug}/`} className="species-nav-item species-nav-next">
              <span className="species-nav-dir">Next species</span>
              <span className="species-nav-term">{next.term}</span>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </article>
  )
}
