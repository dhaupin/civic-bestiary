/**
 * pages/Latest.jsx - the chronology: what landed, and when.
 *
 * Two kinds of post share this page. A release names the entries it added; a
 * note is a riff on the guide and claims nothing. The unclaimed block at the
 * bottom is the hybrid half: entries that arrived without a write-up still
 * surface here, so the page cannot go stale while nobody is posting.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import Inline from '../components/Inline.jsx'
import site, { routeMeta } from '../site.js'
import { posts, unreleased } from '../lexicon.js'

const PENDING = 12

export default function Latest() {
  const meta = routeMeta('/latest/')
  usePageMeta({ siteUrl: site.url, path: '/latest/', title: meta.title, description: meta.description })

  return (
    <article className="latest">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">latest</p>
          <h1>What landed, and when</h1>
          <p className="sub">
            Entries arrive in sessions and the sessions are written up. Between them, notes on
            the guide itself: what a polish pass found, why a pair is two entries and not one.
          </p>
          <p className="sub latest-feed">
            <a href="/latest.xml">Follow the log as an Atom feed</a>
          </p>
        </header>

        {posts.length === 0 && <p className="lede">Nothing has been written up yet.</p>}

        <ol className="latest-list">
          {posts.map((post) => (
            <li key={post.slug} className="latest-item">
              <p className="latest-meta">
                <time dateTime={post.date}>{post.display}</time>
                <span className="sep">·</span>
                <span className="latest-type">
                  {post.type === 'release'
                    ? `${post.entries.length} new ${post.entries.length === 1 ? 'entry' : 'entries'}`
                    : 'note'}
                </span>
              </p>
              <h2 className="latest-title">
                <Link to={post.path}>{post.title}</Link>
              </h2>
              <p className="latest-lede"><Inline text={post.lede} /></p>
              {post.entries.length > 0 && (
                <p className="latest-chips">
                  {post.entries.map((entry) => (
                    <Link key={entry.slug} to={entry.path} className="latest-chip">
                      {entry.term}
                    </Link>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ol>

        {unreleased.length > 0 && (
          <section className="section latest-pending">
            <h2>In the guide, not yet written up</h2>
            <p className="sub">
              {unreleased.length} entries predate this log or landed without a post. The count
              is the signal: when it grows, something arrived without a write-up.
            </p>
            <p className="latest-chips">
              {unreleased.slice(0, PENDING).map((entry) => (
                <Link key={entry.slug} to={entry.path} className="latest-chip">
                  {entry.term}
                </Link>
              ))}
            </p>
            {unreleased.length > PENDING && (
              <p className="latest-more">
                <Link to="/guide/">The other {unreleased.length - PENDING} are in the field guide</Link>
              </p>
            )}
          </section>
        )}
      </div>
    </article>
  )
}
