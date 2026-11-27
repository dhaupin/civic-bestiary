/**
 * components/ConsentBanner.jsx
 * ============================
 * The analytics choice, asked once and stored. The markup ships with the page
 * and CSS decides whether it is shown (the consent bootstrap in index.html sets
 * data-consent before first paint), so a reader without JavaScript never sees
 * a banner whose buttons cannot work, and a reader with it sees the choice
 * immediately instead of four seconds into the article.
 *
 * A visitor who has already chosen, or whose browser sends Global Privacy
 * Control or Do Not Track, is not asked again: a signal is a no, and the
 * privacy page can still change it.
 */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { applyConsent, privacySignals, readConsent, saveConsent, watchZaraz } from '../consent.js'

export default function ConsentBanner() {
  // True on the first render so the prerendered HTML and the hydrated tree
  // agree; the effect below closes it for a reader who has already answered.
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const stored = readConsent()
    const analytics = stored ? stored.analytics : false
    applyConsent(analytics)
    watchZaraz(analytics)
    if (!stored) {
      const { gpc, dnt } = privacySignals()
      if (gpc || dnt) setOpen(false)
    } else {
      setOpen(false)
    }
    const reopen = () => setOpen(true)
    const chosen = () => setOpen(false)
    window.addEventListener('cb:consent-open', reopen)
    window.addEventListener('cb:consent-changed', chosen)
    return () => {
      window.removeEventListener('cb:consent-open', reopen)
      window.removeEventListener('cb:consent-changed', chosen)
    }
  }, [])

  // The bar is fixed to the bottom edge, so the document needs the height back
  // or the footer (and the licence link in it) sits underneath the bar.
  useEffect(() => {
    document.body.classList.toggle('consent-open', open)
    return () => document.body.classList.remove('consent-open')
  }, [open])

  if (!open) return null

  const choose = (analytics) => {
    saveConsent(analytics)
    setOpen(false)
  }

  return (
    <section className="consent" aria-label="Analytics choice" aria-live="polite">
      <div className="consent-inner wrap">
        <p className="consent-text">
          <strong>Analytics is off.</strong> No advertising cookies, no profile, nothing stored about
          you. Turning it on lets Google Analytics count page views in aggregate.{' '}
          <Link to="/privacy/">What is collected</Link>.
        </p>
        <div className="consent-actions">
          <button type="button" className="btn btn-ghost" onClick={() => choose(true)}>
            Allow analytics
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => choose(false)}>
            Necessary only
          </button>
        </div>
      </div>
    </section>
  )
}
