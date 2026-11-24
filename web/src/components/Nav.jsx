import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS, FOOTER_EXTRAS } from './navItems.js'
import site from '../site.js'
import ThemeSwitch from './ThemeSwitch.jsx'

/**
 * The app shell (vant-dashboard shape): a fixed header and ONE slide-out
 * sidebar used at every viewport. Header order on the right: the site's own
 * routes, light/dark switch, then the menu (inline links + the same burger
 * trigger).
 */

// The header carries the site's routes only. Outbound surfaces (GitHub) live in
// the sidebar's "Elsewhere" list and the footer - one link each, not three.
const HEADER_LINKS = NAV_ITEMS.filter(i => i.group === 'site')
export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Route change closes the drawer (and Escape dismisses it).
  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const cls = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/icon.svg" alt="" className="brand-logo" aria-hidden="true" />
            <span className="brand-accent">{site.wordmark.accent}</span>{site.wordmark.rest}
            {site.badge && <span className="brand-badge">{site.badge}</span>}
          </Link>
          <div className="nav-right">
            <ThemeSwitch />
            <div className="nav-links">
              {HEADER_LINKS.map(item => (
                item.to
                  ? <NavLink key={item.label} to={item.to} end={item.end} className={cls}>{item.label}</NavLink>
                  : <a key={item.label} href={item.href} {...(item.group === 'out'
                      ? { target: '_blank', rel: 'noreferrer' } : {})}>{item.label}</a>
              ))}
            </div>
            <button
              className="nav-burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {open
                  ? <path d="M6 6l12 12M6 18L18 6" />
                  : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={'nav-overlay' + (open ? ' open' : '')} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={'nav-sidebar' + (open ? ' open' : '')} aria-hidden={!open}>
        <div className="nav-sidebar-title">Menu</div>
        <ul className="nav-sidebar-nav">
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              {item.to
                ? <NavLink to={item.to} end={item.end} className={cls} onClick={() => setOpen(false)}>{item.label}</NavLink>
                : <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>}
            </li>
          ))}
        </ul>
        <div className="nav-sidebar-title">Elsewhere</div>
        <ul className="nav-sidebar-nav">
          {FOOTER_EXTRAS.map(item => (
            <li key={item.label}><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>
          ))}
        </ul>
      </aside>
    </>
  )
}
