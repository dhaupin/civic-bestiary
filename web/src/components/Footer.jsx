import { Link } from 'react-router-dom'
import { FOOTER_EXTRAS } from './navItems.js'
import site from '../site.js'

/**
 * The ONE footer: the way in (Contribute), the provenance (GitHub, License),
 * and the maker. All labels come from the shared nav vocabulary, so the footer
 * cannot drift from the header or the sidebar.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>{site.name}</span>
        {FOOTER_EXTRAS.map(i => (
          i.href.startsWith('/')
            ? <Link key={i.label} to={i.href}>{i.label}</Link>
            : <a key={i.label} href={i.href} target="_blank" rel="noreferrer">{i.label}</a>
        ))}
        <span>© {new Date().getFullYear()} <a href={site.copyright.url} target="_blank" rel="noopener" className="madeby">{site.copyright.label}</a></span>
      </div>
    </footer>
  )
}
