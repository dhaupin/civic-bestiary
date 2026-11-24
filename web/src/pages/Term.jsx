/**
 * pages/Term.jsx - one entry. Prerendered per route by prestruct, so every
 * term has its own URL, its own title, and its own description in the HTML.
 */
import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site from '../site.js'
import { entryFor, neighbors } from '../lexicon.js'
import Inline from '../components/Inline.jsx'
import NotFound from './NotFound.jsx'

export default function Term() {
  const { slug } = useParams()
  const entry = entryFor(slug)

  usePageMeta({
    siteUrl: site.url,
    path: `/term/${slug}`,
    title: entry ? `${entry.term} - ${entry.partOfSpeech} | ${site.name}` : undefined,
    description: entry ? entry.summary : undefined,
  })

  if (!entry) return <NotFound />

  const { previous, next } = neighbors(slug)

  return (
    <article className="term">
      <div className="wrap term-wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/lexicon">Lexicon</Link>
          <span className="sep">/</span>
          <span>{entry.sectionRoman}. {entry.sectionTitle}</span>
        </nav>

        <header className="term-head">
          <h1 className="term-name">{entry.term}</h1>
          <p className="term-meta">
            <em>{entry.partOfSpeech}</em>
            <span className="ipa">{entry.ipa}</span>
          </p>
          <p className="term-etym">{entry.etymology}</p>
        </header>

        <ol className="term-senses">
          {entry.senses.map((sense, index) => (
            <li key={index}><Inline text={sense} /></li>
          ))}
        </ol>

        {entry.notes.map((note) => (
          <aside key={note.label} className="term-note">
            <h2>{note.label}</h2>
            <p><Inline text={note.text} /></p>
          </aside>
        ))}

        <figure className="term-example">
          <blockquote><Inline text={entry.example} /></blockquote>
          <figcaption>In the wild</figcaption>
        </figure>

        <div className="term-related">
          <h2>Related</h2>
          <p>
            {entry.related.map((related, index) => (
              <span key={related.slug}>
                {index > 0 && <span className="sep">·</span>}
                <Link to={`/term/${related.slug}`}>{related.term}</Link>
              </span>
            ))}
          </p>
        </div>

        <nav className="term-nav" aria-label="Adjacent entries">
          {previous ? (
            <Link to={`/term/${previous.slug}`} className="term-nav-item">
              <span className="term-nav-dir">Previous</span>
              <span className="term-nav-term">{previous.term}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/term/${next.slug}`} className="term-nav-item term-nav-next">
              <span className="term-nav-dir">Next</span>
              <span className="term-nav-term">{next.term}</span>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </article>
  )
}
