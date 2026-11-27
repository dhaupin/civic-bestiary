/**
 * pages/Privacy.jsx - what is processed, why, and how to say no. Written to
 * match what the site actually runs: Cloudflare in front, Cloudflare Web
 * Analytics (cookieless) on the edge, Google Analytics through Zaraz only
 * after a visitor allows it, and two localStorage keys that never leave the
 * browser.
 *
 * The choices section is live rather than descriptive: the buttons write the
 * same record the banner writes, so the page cannot claim a control the site
 * does not offer.
 */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import { effectiveConsent, openConsentBanner, saveConsent } from '../consent.js'
import Email from '../components/Email.jsx'

const VERSION = '1.0'
const EFFECTIVE = '27 November 2026'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']

/** The site prints dates day-first, as the prose does. */
function recordedOn(iso) {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

const CHOICE_LABELS = {
  choice: 'your own choice',
  gpc: 'Global Privacy Control, which we treat as a no',
  dnt: 'Do Not Track, which we treat as a no',
  default: 'the default, because no choice has been made',
}

const COOKIES = [
  {
    name: 'site-theme',
    setBy: 'This site',
    kind: 'local storage',
    purpose: 'Remembers light or dark mode so the page does not flash on load.',
    life: 'Until you clear site data',
    category: 'Strictly necessary',
  },
  {
    name: 'cb-consent',
    setBy: 'This site',
    kind: 'local storage',
    purpose: 'Remembers your analytics choice, and when you made it.',
    life: 'Until you clear site data',
    category: 'Strictly necessary',
  },
  {
    name: '_ga, _ga_*',
    setBy: 'Google Analytics 4, loaded by Cloudflare Zaraz',
    kind: 'cookie',
    purpose: 'Distinguishes a browser across visits so page views can be counted in aggregate.',
    life: '14 months',
    category: 'Analytics, only after you allow it',
  },
  {
    name: '__cf_bm, cf_clearance',
    setBy: 'Cloudflare',
    kind: 'cookie',
    purpose: 'Bot management and security, set where a challenge is needed.',
    life: '30 minutes, or up to a year for clearance',
    category: 'Strictly necessary',
  },
]

const SECTIONS = [
  {
    id: 'responsible',
    title: '1. Who is responsible',
    body: [
      <>This site is published by Creadev. For data protection purposes the publisher is the controller of the little that is processed here, and can be reached at <Email user="hello" domain="creadev.org" />.</>,
      'This notice covers codex.creadev.org. It does not cover the project repository, the publisher\'s other sites, or any site we link to; each of those has its own notice.',
    ],
  },
  {
    id: 'not-collected',
    title: '2. What this site does not do',
    body: [
      'There are no accounts, no sign-up, no newsletter, no comments, no uploads, no payments, no advertising, no advertising cookies, no cross-site tracking pixels, and no profiling of anyone for a decision about them.',
      'We do not sell personal information, and we do not share it for cross-context behavioural advertising. There is no customer list to sell, because there are no customers.',
    ],
  },
  {
    id: 'processed',
    title: '3. What is processed when you visit',
    body: [
      'Serving a page means a request, and a request carries an IP address. The site runs on Cloudflare, so Cloudflare processes request data (IP address, user agent, requested URL, timestamp, and country derived from the address) to deliver the page, keep the service up, and stop abuse. That processing is necessary to serve the site, and is done on the basis of our legitimate interest in running it securely.',
      'Cloudflare Web Analytics counts visits in aggregate. It is cookieless, does not fingerprint a browser, and does not build a profile of a person. It tells us that a page was read, not who read it.',
      'Google Analytics 4 runs only if you allow it. Cloudflare Zaraz loads the tag after your choice, and the tag is configured without advertising features, without advertising personalisation, without Google signals, and without data sharing for advertising. When it runs it processes the page path, the referrer, an approximate location derived from a truncated IP address, device and browser details, and basic interaction events. IP addresses are not stored in full.',
      'Two values are stored in your browser and never sent anywhere: your theme, and your analytics choice. They exist so the page does not flash and so you are not asked the same question on every visit.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies and local storage',
    body: [
      'The table below is the whole list. If a cookie is not here, the site did not set it, and you should assume a browser extension, an internet provider, or another site did.',
    ],
    table: COOKIES,
    after: [
      'Nothing here is used to build an advertising profile, and nothing is shared with a data broker. The analytics cookies exist only after you allow analytics, and clearing them or withdrawing consent takes effect on the next page load.',
    ],
  },
  {
    id: 'zaraz',
    title: '5. Cloudflare Zaraz',
    body: [
      'Zaraz is Cloudflare\'s tag manager. It runs at Cloudflare\'s edge rather than inside the page, which keeps third-party tag code out of the HTML a reader downloads, and it is where the consent decision is enforced: the analytics tool does not load until the analytics purpose is granted.',
      'Zaraz itself does not add a cookie of its own on this site. Its job here is to hold one tag, and to hold it back until you say yes.',
    ],
  },
  {
    id: 'choices',
    title: '6. Your choice, and how to change it',
    body: [
      'Analytics is off by default. Nothing is loaded until you allow it, and allowing it is a single click that can be taken back the same way. If your browser sends Global Privacy Control or Do Not Track, we treat that as a refusal and do not ask again; an explicit choice you make on this page still wins over the signal.',
      'Withdrawing consent stops the tag on the next page load. It does not delete data already collected; ask us and we will delete it.',
    ],
  },
  {
    id: 'rights',
    title: '7. Your rights',
    body: [
      'Where the GDPR or UK GDPR applies, you have the right to be informed, to access, to rectification, to erasure, to restriction, to data portability, to object, and to withdraw consent at any time, and the right to lodge a complaint with a supervisory authority in your country. Where we rely on legitimate interest, you may object to that processing.',
      'Where the California Consumer Privacy Act as amended applies, you have the right to know what is collected, to delete it, to correct it, to opt out of sale or sharing, to limit the use of sensitive personal information, and not to be discriminated against for exercising any of those rights. We do not sell or share personal information, and we do not collect sensitive personal information.',
      'Similar rights exist in other jurisdictions, including Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, and other states with comprehensive privacy laws, Canada under PIPEDA, Brazil under the LGPD, and Australia under the Privacy Act. If your law gives you a right this notice does not name, write to us and we will honour it.',
      'Most of what this site processes is held by Cloudflare and Google rather than by us, so a request may be answered by pointing you at their controls as well as our own. We will not use that as a reason to ignore you.',
    ],
  },
  {
    id: 'transfers',
    title: '8. Where data goes',
    body: [
      'Cloudflare and Google are based in the United States and process data internationally. Those transfers rely on the safeguards those providers publish, including standard contractual clauses, the UK addendum, and the EU-US Data Privacy Framework where it applies. We do not transfer anything ourselves, because there is nowhere here for it to go.',
    ],
  },
  {
    id: 'retention',
    title: '9. How long it is kept',
    body: [
      'Aggregate analytics are kept for 14 months and then deleted. Cloudflare keeps request and security logs for the short period described in its own privacy policy. The two values in your browser stay until you clear them.',
      'We keep no database of readers, so there is no other retention period to state.',
    ],
  },
  {
    id: 'security',
    title: '10. Security',
    body: [
      'The site is served over HTTPS, has no login, no database of users, and no form that stores anything. That removes most of the ways a site can lose data. What remains is the security of the network in front of it, which is Cloudflare\'s, and of your own device.',
    ],
  },
  {
    id: 'children',
    title: '11. Children',
    body: [
      'The site is written for adults and is not directed at children. We do not knowingly collect personal information from anyone under 13, or under 16 where local law sets that age for consent to online services. If you believe a child\'s information has reached us, write to us and we will delete it.',
    ],
  },
  {
    id: 'automated',
    title: '12. Automated decisions',
    body: [
      'There is no automated decision-making and no profiling that produces legal or similarly significant effects. Nothing here decides anything about you.',
    ],
  },
  {
    id: 'changes',
    title: '13. Changes to this notice',
    body: [
      'This notice may be revised. The version and effective date at the top change when it is, and material changes are noted on the site. The current version is the one that applies from its effective date.',
    ],
  },
  {
    id: 'contact',
    title: '14. Contact and complaints',
    body: [
      <>Write to <Email user="hello" domain="creadev.org" /> for any request about your data, including access, deletion, or a correction to this notice. If you are not satisfied with the answer, you may complain to your local data protection authority.</>,
    ],
  },
]

export default function Privacy() {
  const meta = routeMeta('/privacy/')
  usePageMeta({ siteUrl: site.url, path: '/privacy/', title: meta.title, description: meta.description })

  // The state starts null so the server and the first client render agree, then
  // the effect reports what is actually stored.
  const [state, setState] = useState(null)
  useEffect(() => {
    const sync = () => setState(effectiveConsent())
    sync()
    window.addEventListener('cb:consent-changed', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('cb:consent-changed', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const choose = (analytics) => setState(saveConsent(analytics))

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">legal</p>
          <h1>Privacy notice</h1>
          <p className="sub">
            No account, no profile, no advertising. Analytics is off until you allow it, and the list
            of what exists is short enough to read on one page.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <p className="legal-meta">
            Version {VERSION} <span className="sep">·</span> Effective {EFFECTIVE}
          </p>
          <div className="legal-summary">
            <h2>The short version</h2>
            <ul>
              <li>No accounts, no newsletter, no comments, no uploads, no ads, no tracking pixels.</li>
              <li>Cloudflare serves the site and keeps it safe; that is where request data is handled.</li>
              <li>Cloudflare Web Analytics counts visits without cookies and without profiles.</li>
              <li>Google Analytics runs through Cloudflare Zaraz only after you allow it.</li>
              <li>Your browser stores two things: your theme, and this choice. Neither is sent to us.</li>
              <li>We do not sell or share personal information, and there is nothing to sell.</li>
            </ul>
            <p className="legal-summary-note">
              The summary is here for speed. The numbered sections below are the notice, and they are
              what apply.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="analytics-choice">
        <div className="wrap">
          <h2>Your current choice</h2>
          <p className="sub">
            This is the state of the analytics choice in this browser right now, read from local
            storage.
          </p>
          <p className="legal-state">
            {state === null ? (
              <>Analytics: <strong>checking this browser</strong></>
            ) : (
              <>
                Analytics: <strong>{state.analytics ? 'on' : 'off'}</strong>{' '}
                <span className="sep">·</span> {CHOICE_LABELS[state.source] || 'your choice'}
                {state.at ? ` · recorded ${recordedOn(state.at)}` : ''}
              </>
            )}
          </p>
          <p className="legal-actions consent-choice" role="group" aria-label="Analytics choice">
            <button
              type="button"
              aria-pressed={state?.analytics === true}
              className={`btn ${state?.analytics === true ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => choose(true)}
            >
              Analytics on
            </button>
            <button
              type="button"
              aria-pressed={state?.analytics === false}
              className={`btn ${state?.analytics === false ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => choose(false)}
            >
              Analytics off
            </button>
            <button type="button" className="btn btn-ghost" onClick={openConsentBanner}>
              Show the banner again
            </button>
          </p>
          <p className="legal-hint">
            The filled option is what this browser is set to right now. Either answer can be
            changed at any time, and both are one click.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose legal">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="legal-section">
              <h2>{section.title}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.table && (
                <div className="legal-table-wrap">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Set by</th>
                        <th scope="col">What it does</th>
                        <th scope="col">Lasts</th>
                        <th scope="col">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row) => (
                        <tr key={row.name}>
                          <td><code>{row.name}</code><br /><span className="legal-dim">{row.kind}</span></td>
                          <td>{row.setBy}</td>
                          <td>{row.purpose}</td>
                          <td>{row.life}</td>
                          <td>{row.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {(section.after || []).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
          <p className="legal-meta">
            See also the <Link to="/terms/">terms of use</Link>, and the{' '}
            <Link to="/about/">about page</Link> for what the guide is for.
          </p>
        </div>
      </section>
    </>
  )
}
