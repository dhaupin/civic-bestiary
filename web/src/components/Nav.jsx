import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CHAPTER_LINKS, FOOTER_EXTRAS, KIND_LINKS, NAV_ITEMS } from './navItems.js'
import site from '../site.js'
import ThemeSwitch from './ThemeSwitch.jsx'

/**
 * The app shell (vant-dashboard shape): a fixed header and ONE slide-out
 * sidebar used at every viewport. Header order on the right: the site's own
 * routes, light/dark switch, then the menu (inline links + the same burger
 * trigger).
 */

// The header carries the site's routes only. Outbound surfaces (GitHub) and the
// way in (Contribute) live in the footer, plus the sidebar's "Elsewhere" list
// for the phone, where the footer is a long scroll away.
const HEADER_LINKS = NAV_ITEMS.filter(i => i.group === 'site')
// The sidebar's Menu is the header's own routes in the same order - the field
// guide first, ahead of Latest - so a reader who opens the menu finds the book
// where the header puts it. Kinds below lists the eight, and no link twice.
const SIDEBAR_ITEMS = NAV_ITEMS.filter(
  i => !KIND_LINKS.some(kind => kind.to === i.to),
)
export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const burgerRef = useRef(null)
  const sidebarRef = useRef(null)
  const wasOpen = useRef(false)

  // Route change closes the drawer.
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Opening moves focus into the drawer and closing gives it back to the button
  // that opened it. Without the return, a keyboard reader who closes the menu
  // lands back at the top of the document.
  useEffect(() => {
    if (open) sidebarRef.current?.querySelector('a, button')?.focus()
    else if (wasOpen.current) burgerRef.current?.focus()
    wasOpen.current = open
  }, [open])

  // Escape closes; Tab cycles inside the drawer while it is open, so the page
  // behind it - which a reader cannot see - is not what they tab into next.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab') return
      const items = sidebarRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const cls = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/icon.svg" alt="" className="brand-logo" aria-hidden="true" />
            <span className="brand-word">
              <span className="brand-accent">{site.wordmark.accent}</span>{site.wordmark.rest}
            </span>
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
              ref={burgerRef}
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
      <nav
        ref={sidebarRef}
        className={'nav-sidebar' + (open ? ' open' : '')}
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div className="nav-sidebar-title">Menu</div>
        <ul className="nav-sidebar-nav">
          {SIDEBAR_ITEMS.map(item => (
            <li key={item.label}>
              {item.to
                ? <NavLink to={item.to} end={item.end} className={cls} onClick={() => setOpen(false)}>{item.label}</NavLink>
                : <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>}
            </li>
          ))}
        </ul>
        <div className="nav-sidebar-title">Kinds</div>
        <ul className="nav-sidebar-nav">
          {KIND_LINKS.map(item => (
            <li key={item.label}>
              <NavLink to={item.to} className={cls} onClick={() => setOpen(false)} title={item.blurb}>
                {item.label}
                {item.count != null && <span className="nav-sidebar-count">{item.count}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-sidebar-title">Chapters</div>
        <ul className="nav-sidebar-nav">
          {CHAPTER_LINKS.map(item => (
            <li key={item.to}>
              <NavLink to={item.to} className={cls} onClick={() => setOpen(false)} title={item.title}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-sidebar-title">Elsewhere</div>
        <ul className="nav-sidebar-nav">
          {FOOTER_EXTRAS.map(item => (
            <li key={item.label}><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}
