/**
 * components/ShareButton.jsx - one link, to go.
 *
 * Most readers will not select the address bar, so the button does it for
 * them: copy to the clipboard, and say so. Where the clipboard is refused
 * (an insecure origin, a denied permission) it hands the URL back as a
 * selected field instead of failing silently, because "use the address bar"
 * is the thing the reader came here to avoid.
 *
 * Nothing here reads the browser at render time, so the prerendered HTML and
 * the hydrated page agree - the URL is resolved on click.
 */
import { useEffect, useRef, useState } from 'react'

const LABEL = { copied: 'Link copied', shared: 'Shared', failed: 'Link ready to copy' }

export default function ShareButton({ url = null, label = 'Share', title = null, className = 'btn btn-ghost' }) {
  const [result, setResult] = useState(null)
  const [href, setHref] = useState('')
  const timer = useRef(null)
  const field = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  // The field only exists after a refusal, so it cannot take focus on mount.
  useEffect(() => {
    if (result === 'failed' && field.current) {
      field.current.focus()
      field.current.select()
    }
  }, [result])

  const report = (next, resolved) => {
    setResult(next)
    setHref(resolved)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setResult(null), 6000)
  }

  const share = async () => {
    const resolved = url || window.location.href
    if (!resolved) return
    // The clipboard first, because it either works or throws inside the click.
    // A native sheet can open and never settle, which leaves the reader with no
    // idea whether the link went anywhere, so it is only tried where a sheet is
    // the expected affordance - a touch screen - and only after a refusal.
    try {
      await navigator.clipboard.writeText(resolved)
      report('copied', resolved)
      return
    } catch {
      // fall through
    }
    if (navigator.share && window.matchMedia?.('(pointer: coarse)').matches) {
      try {
        await navigator.share({ title: title || document.title, url: resolved })
        report('shared', resolved)
        return
      } catch (error) {
        if (error && error.name === 'AbortError') return
      }
    }
    report('failed', resolved)
  }

  return (
    <span className="share-wrap">
      <button
        type="button"
        className={`${className} share`}
        onClick={share}
        data-result={result || undefined}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" className="share-icon">
          <path d="M9 13.5 15 9M9 10.5 15 15" />
          <circle cx="6.5" cy="12" r="2.5" />
          <circle cx="17.5" cy="7" r="2.5" />
          <circle cx="17.5" cy="17" r="2.5" />
        </svg>
        <span>{result ? LABEL[result] : label}</span>
      </button>
      {result === 'failed' && (
        <input
          ref={field}
          className="share-field"
          value={href}
          readOnly
          aria-label="Link to this page - select and copy"
          onFocus={(event) => event.target.select()}
        />
      )}
    </span>
  )
}
