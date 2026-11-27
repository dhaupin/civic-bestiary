/**
 * src/consent.js
 * ==============
 * The one place the site records an analytics choice, and the one place it
 * tells the tag layer what that choice was.
 *
 * Analytics is denied until a visitor says otherwise. A first visit stores
 * nothing, so "no record" means "no analytics", and a global privacy signal
 * (Global Privacy Control or Do Not Track) counts as a no without asking.
 * Cloudflare Web Analytics is not gated here: it is cookieless and aggregate,
 * and the privacy page says so.
 *
 * The choice is versioned. Raising CONSENT_VERSION invalidates every stored
 * answer, which is what should happen when the list of purposes changes.
 */

export const CONSENT_KEY = 'cb-consent'
export const CONSENT_VERSION = 1

/** The browser's own refusal, if it has one. */
export function privacySignals() {
  if (typeof navigator === 'undefined') return { gpc: false, dnt: false }
  const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack
  return {
    gpc: navigator.globalPrivacyControl === true,
    dnt: dnt === '1' || dnt === 'yes',
  }
}

/** The stored choice, or null when the visitor has not made one. */
export function readConsent() {
  if (typeof localStorage === 'undefined') return null
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null')
    if (!stored || stored.v !== CONSENT_VERSION) return null
    return { analytics: stored.analytics === true, at: stored.at || null }
  } catch {
    return null
  }
}

/** Store a choice and hand it to the tag layer. */
export function saveConsent(analytics) {
  const record = { v: CONSENT_VERSION, analytics: Boolean(analytics), at: new Date().toISOString() }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
  } catch {
    // Private mode with storage disabled: the choice still applies for this page.
  }
  applyConsent(record.analytics)
  // Other surfaces showing the choice (the banner, the privacy page) read the
  // record back rather than each keeping a copy that can go stale.
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cb:consent-changed', { detail: record }))
  }
  return record
}

/** Tell whatever tag layer is on the page. An absent provider is not an error. */
export function applyConsent(analytics) {
  if (typeof window === 'undefined') return
  const granted = analytics === true
  // Cloudflare Zaraz: purposes are configured in the dashboard, and analytics
  // is the only purpose this site asks for.
  const zaraz = window.zaraz
  if (zaraz && zaraz.consent && typeof zaraz.consent.set === 'function') {
    try {
      zaraz.consent.set({ analytics: granted })
    } catch {
      // Zaraz not ready yet; the next page load applies the stored choice.
    }
  }
  // Google Analytics, if a tag is present directly rather than through Zaraz.
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' })
    } catch {
      // Same: the stored choice is applied again on the next load.
    }
  }
}

/** What applies right now: the stored choice, else the signal, else no. */
export function effectiveConsent() {
  const stored = readConsent()
  if (stored) return { ...stored, source: 'choice' }
  const { gpc, dnt } = privacySignals()
  return { analytics: false, at: null, source: gpc ? 'gpc' : dnt ? 'dnt' : 'default' }
}

/** Reopen the banner from anywhere (the privacy page, the footer). */
export function openConsentBanner() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('cb:consent-open'))
}
