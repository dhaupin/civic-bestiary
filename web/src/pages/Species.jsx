/**
 * pages/Species.jsx - one entry of the guide. Prerendered per route by
 * prestruct, so every species has its own URL, title, and description.
 */
import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site from '../site.js'
import { entryFor, neighbors, positionOf, sorts } from '../lexicon.js'
import Inline from '../components/Inline.jsx'
import NotFound from './NotFound.jsx'

/** Edges arrive flat; the page groups them by the relation's own label. */
function groupByLabel(edges) {
  return edges.reduce((groups, edge) => {
    (groups[edge.label] = groups[edge.label] || []).push(edge)
    return groups
  }, {})
}

export default function Species() {
  const { slug } = useParams()
  const entry = entryFor(slug)

  usePageMeta({
    siteUrl: site.url,
    path: entry ? entry.path : `/species/${slug}/`,
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
          <Link to="/guide/">Field guide</Link>
          <span className="sep">/</span>
          <Link to={`/chapters/${entry.chapter}/`}>Chapter {entry.chapterRoman}</Link>
          <span className="sep">/</span>
          <span>{entry.chapterTitle}</span>
        </nav>

        <p className="species-kicker">
          <span className={`badge badge-${entry.kind}`}>{entry.kindLabel}</span>
          No. {position.number} of {position.total}
        </p>

        <header className="species-head">
          <h1 className="species-name">{entry.term}</h1>
          <p className="species-meta">
            <em>{entry.partOfSpeech}</em>
            {entry.ipa && <span className="ipa">{entry.ipa}</span>}
          </p>
          <p className="species-etym">{entry.etymology}</p>
          <p className="species-scores">
            {sorts.filter((axis) => entry.sort?.[axis.id] != null).map((axis) => (
              <span key={axis.id} className="score" title={axis.hint}>
                <span className="score-label">{axis.label}</span>
                <span className="score-bar" aria-hidden="true">
                  {Array.from({ length: axis.scale }, (_, step) => (
                    <i key={step} className={step < entry.sort[axis.id] ? 'on' : undefined} />
                  ))}
                </span>
                <span className="sr-only">{entry.sort[axis.id]} of {axis.scale}</span>
              </span>
            ))}
          </p>
        </header>

        <dl className="species-spec">
          {entry.identification.map((row) => (
            <div key={row.key}>
              <dt>{row.label}</dt>
              <dd className={row.type === 'list' ? undefined : `species-${row.key}`}>
                {row.type === 'list' ? (
                  <ul className="species-marks">
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
                <Link className="species-twin-name" to={twin.path}>{twin.term}</Link>
                <span className="species-twin-tell"><Inline text={twin.tell} /></span>
              </p>
            ))}
          </div>
        )}

        {entry.edges.length > 0 && (
          <div className="species-edges">
            {Object.entries(groupByLabel(entry.edges)).map(([label, links]) => (
              <p key={label} className="species-edge">
                <span className="species-edge-label">{label}</span>
                {links.map((link, index) => (
                  <span key={link.slug}>
                    {index > 0 && <span className="sep">·</span>}
                    <Link to={link.path}>{link.term}</Link>
                  </span>
                ))}
              </p>
            ))}
          </div>
        )}

        {entry.backlinks.length > 0 && (
          <div className="species-backlinks">
            {Object.entries(groupByLabel(entry.backlinks)).map(([label, links]) => (
              <p key={label} className="species-edge">
                <span className="species-edge-label">{label}</span>
                {links.map((link, index) => (
                  <span key={link.slug}>
                    {index > 0 && <span className="sep">·</span>}
                    <Link to={link.path}>{link.term}</Link>
                  </span>
                ))}
              </p>
            ))}
          </div>
        )}

        {entry.cite && (
          <p className="species-cite">
            <span className="species-edge-label">Source</span>
            <a href={entry.cite.url} target="_blank" rel="noreferrer">
              {entry.cite.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          </p>
        )}

        <div className="species-compare">
          <h2>Compare with</h2>
          <p>
            {entry.related.map((related, index) => (
              <span key={related.slug}>
                {index > 0 && <span className="sep">·</span>}
                <Link to={related.path}>{related.term}</Link>
              </span>
            ))}
          </p>
        </div>

        <nav className="species-nav" aria-label="Adjacent entries">
          {previous ? (
            <Link to={previous.path} className="species-nav-item">
              <span className="species-nav-dir">Previous: {previous.kindLabel}</span>
              <span className="species-nav-term">{previous.term}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={next.path} className="species-nav-item species-nav-next">
              <span className="species-nav-dir">Next: {next.kindLabel}</span>
              <span className="species-nav-term">{next.term}</span>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </article>
  )
}
