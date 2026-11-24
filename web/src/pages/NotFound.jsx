/**
 * pages/NotFound.jsx - the SPA 404. Same shape and copy as the static 404
 * (site.config.js notFound block), so the host's not-found file and the
 * client-side render read as one page, not two.
 */
import { Link } from 'react-router-dom'
import site from '../site.js'

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <h1>{site.notFound.heading}</h1>
        <p>{site.notFound.body}</p>
        <Link to={site.notFound.primaryCta.href} className="btn btn-primary">
          {site.notFound.primaryCta.label}
        </Link>
      </div>
    </section>
  )
}
