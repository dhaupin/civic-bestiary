/**
 * components/ThemeSwitch.jsx
 * Light/dark toggle. Theme lives on <html data-theme> (CSS picks tokens) and
 * is persisted in localStorage. The button renders BOTH icons at all times;
 * a CSS rule per theme shows the relevant one - so the prerendered markup
 * and the hydrated markup agree (no hydration mismatch, no flash-of-wrong-icon).
 */
import { useEffect, useState } from 'react'
import { THEME_KEY, paperFor } from '../theme.js'

function setThemeColor(light) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', paperFor(light))
}

function toggleTheme() {
  const el = document.documentElement
  const next = el.dataset.theme === 'light' ? 'dark' : 'light'
  el.dataset.theme = next
  try { localStorage.setItem(THEME_KEY, next) } catch { /* private mode: live without persistence */ }
  setThemeColor(next === 'light')
}

export default function ThemeSwitch() {
  // null until mounted: the prerender cannot know which theme the bootstrap
  // picked, so the attribute appears only after hydration rather than being
  // baked wrong and corrected. aria-pressed is the toggle's state; the label is
  // what the button controls, not what it will do next.
  const [dark, setDark] = useState(null)
  useEffect(() => {
    const isLight = document.documentElement.dataset.theme === 'light'
    if (isLight) setThemeColor(true)
    setDark(!isLight)
  }, [])
  const onClick = () => {
    toggleTheme()
    setDark(document.documentElement.dataset.theme !== 'light')
  }
  return (
    <button
      type="button"
      className="theme-switch"
      onClick={onClick}
      aria-label="Dark mode"
      aria-pressed={dark === null ? undefined : dark}
    >
      {/* sun: shown in dark mode - clicking goes light (icon = the action) */}
      <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* moon: shown in light mode - clicking goes dark */}
      <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  )
}
