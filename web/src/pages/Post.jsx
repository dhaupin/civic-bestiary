/**
 * pages/Post.jsx - one post of the chronology. Prerendered per route, so a
 * release has its own URL, title, and description, and the entries it added
 * are `about` it in the structured data.
 */
import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import Inline from '../components/Inline.jsx'
import site from '../site.js'
import { postFor } from '../lexicon.js'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = postFor(slug)

  usePageMeta({
    siteUrl: site.url,
    path: post ? post.path : `/latest/${slug}/`,
    title: post ? `${post.title} | ${site.name}` : undefined,
    description: post ? post.lede : undefined,
    image: post ? `${site.url}/og/latest/${post.slug}.png` : undefined,
    imageAlt: post ? `${post.title} - ${site.name}` : undefined,
  })

  if (!post) return <NotFound />

  return (
    <article className="post">
      <div className="wrap post-wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/latest/">Latest</Link>
          <span className="sep">/</span>
          <span>{post.title}</span>
        </nav>

        <header className="post-head">
          <p className="latest-meta">
            <time dateTime={post.date}>{post.display}</time>
            <span className="sep">·</span>
            <span className="latest-type">
              {post.type === 'release'
                ? `Release · ${post.entries.length} new ${post.entries.length === 1 ? 'entry' : 'entries'}`
                : 'Note'}
            </span>
          </p>
          <h1 className="post-title">{post.title}</h1>
          <p className="lede"><Inline text={post.lede} /></p>
        </header>

        <div className="prose post-body">
          {post.body.map((paragraph, index) => (
            <p key={index}><Inline text={paragraph} /></p>
          ))}
        </div>

        {post.entries.length > 0 && (
          <section className="section post-entries">
            <h2>New in this release</h2>
            <ul className="post-entry-list">
              {post.entries.map((entry) => (
                <li key={entry.slug} className="post-entry">
                  <p className="post-entry-head">
                    <Link className="post-entry-name" to={entry.path}>{entry.term}</Link>
                    <span className={`badge badge-${entry.kind}`}>{entry.kindLabel}</span>
                  </p>
                  <p className="post-entry-sense">{entry.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {post.mentions.length > 0 && (
          <p className="post-mentions">
            <span className="post-mentions-label">Mentioned</span>
            {post.mentions.map((entry, index) => (
              <span key={entry.slug}>
                {index > 0 && <span className="sep">·</span>}
                <Link to={entry.path}>{entry.term}</Link>
              </span>
            ))}
          </p>
        )}

        <p className="post-foot">
          <Link to="/latest/">All posts</Link>
          <span className="sep">·</span>
          <Link to="/guide/">The field guide</Link>
        </p>
      </div>
    </article>
  )
}
