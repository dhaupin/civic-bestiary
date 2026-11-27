/**
 * pages/Terms.jsx - the agreement, in the site's own voice: satire, fiction,
 * and no claim about any person. Written to be read, not to be skimmed past,
 * and to hold up where it matters: the fiction is stated once, plainly, and
 * the limits are the ordinary ones rather than clever ones.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import Email from '../components/Email.jsx'

const VERSION = '1.0'
const EFFECTIVE = '27 November 2026'

const SECTIONS = [
  {
    id: 'acceptance',
    title: '1. Accepting these terms',
    body: [
      'This site is operated by the publisher of The Civic Bestiary ("the operator", "we"). By opening a page, following a link into it, reading an entry, or using anything it publishes, you accept these terms and the privacy notice that sits beside them. If you do not accept them, do not use the site.',
      'If you use the site for an organisation, you confirm you are allowed to accept these terms for it.',
    ],
  },
  {
    id: 'what-this-is',
    title: '2. What this site is',
    body: [
      'The Civic Bestiary is a satirical field guide. It invents words for patterns of public behaviour, describes them in the form of a naturalist\'s entry, and cross-links them to each other and to real, documented material: named fallacies, published doctrines, and public offices.',
      'It is a work of humour, criticism, and commentary. It is not a database of persons, a register of wrongdoers, a news report, or a finding of fact about anybody.',
    ],
  },
  {
    id: 'fiction',
    title: '3. Satire, fiction, and a fictional universe',
    body: [
      'The guide is satire, written for a fictional mind game, inside a fictional universe. That universe does not necessarily correspond to the real world, and it does not necessarily exist outside the pages that describe it.',
      'By using the site you accept that reading. Any resemblance between an entry, a coinage, a description, or a scenario and any real person, living or dead, or any real organisation, government, agency, event, or circumstance is coincidental and unintended.',
      'No entry is an accusation. No entry is a statement that any identifiable person has done, said, believed, or is anything at all.',
    ],
  },
  {
    id: 'no-claim',
    title: '4. Nothing here is a claim of fact about you',
    body: [
      'The coinages are invented words, not names of people. A species describes a costume that anyone can wear, including the author. Recognising yourself, or someone you know, in an entry is the intended effect of a description that is general by design, and it is not a factual assertion about that person.',
      'Do not present an entry as a factual claim about a named individual, and do not use this site or its vocabulary to harass, threaten, defame, dox, or organise pressure against anyone. That use is outside what the guide is for, and it is outside what these terms permit.',
    ],
  },
  {
    id: 'not-advice',
    title: '5. Not advice',
    body: [
      'Nothing here is legal, medical, psychological, financial, journalistic, or professional advice, and no relationship of that kind is created by reading it or writing to us.',
      'Where an entry touches on law, it describes a doctrine in general terms for identification. Law differs by jurisdiction and changes over time. If you need advice, consult someone qualified where you are.',
    ],
  },
  {
    id: 'expression',
    title: '6. Opinion, comment, and protected expression',
    body: [
      'The guide is opinion, satire, criticism, and commentary on matters of public interest. Exaggeration, ridicule, invented words, and unflattering description are deliberate features of the form, not errors to be corrected.',
      'The guide does not call for hatred or violence against anyone, does not target anyone on the basis of a protected characteristic, and does not urge anyone to break the law. If a sentence reads that way to you, write to us: we would rather fix a sentence than defend it.',
    ],
  },
  {
    id: 'patterns',
    title: '7. Entries describe patterns, not people',
    body: [
      'A species is a pattern of behaviour, worn like a costume: point at the pattern, not at the person. The moves, abilities, habitats, buffs, remedies, and keystones are the same kind of object - a mechanism you could point at in a transcript - and none of them is a verdict on an individual.',
    ],
  },
  {
    id: 'real-material',
    title: '8. Real doctrines, offices, and documented fallacies',
    body: [
      'Some entries name real things: a legal doctrine, a public office, a documented fallacy. Those entries describe the public record, carry a source where one exists, and are commentary about it.',
      'They are not legal opinions, not advice about any matter, and not complete. A doctrine may be narrower than its popular description, an office may differ between jurisdictions, and a fallacy may be named differently elsewhere. The guide cites; it is not a citator.',
    ],
  },
  {
    id: 'marks',
    title: '9. Names, trademarks, and third-party material',
    body: [
      'Third-party names, titles, and marks that appear on the site belong to their owners and are used to identify the thing being discussed. No affiliation, sponsorship, or endorsement is implied in either direction.',
      'Quotations are short and attributed. Links to other sites are there because they are useful, not because those sites endorse anything here.',
    ],
  },
  {
    id: 'licence',
    title: '10. Copyright and licence',
    body: [
      'The text and code in the project repository are released under the MIT licence. You may copy, adapt, and redistribute them on those terms, keeping the copyright notice and the permission notice with any copy.',
      'The site\'s name and identity are not granted as trademarks by that licence. If you republish an entry or a set of them, keep the satirical framing with it, so that your readers know what they are reading, and do not suggest that we endorse you or what you publish.',
    ],
  },
  {
    id: 'contributions',
    title: '11. Proposals and contributions',
    body: [
      'Entry proposals, corrections, and pull requests sent through the project repository are public and non-confidential. By sending one, you confirm you have the right to send it, and you grant the operator a perpetual, worldwide, royalty-free licence to publish, edit, and adapt it under the same licence as the rest of the guide.',
      'We may decline, rewrite, or retire a contribution. Sending one does not create an obligation to publish it or to credit it beyond what the repository history already records.',
    ],
  },
  {
    id: 'use',
    title: '12. Acceptable use',
    body: [
      'Do not use the site to break the law, to attack it (including flooding it, probing it for vulnerabilities without permission, or scraping at a rate that degrades it for other readers), to misrepresent the guide as a factual report about a named person, or to imply that the operator has made a statement it has not made.',
      'Reasonable reading, quoting, linking, archiving, teaching with, and researching the guide are all welcome.',
    ],
  },
  {
    id: 'links',
    title: '13. Other sites',
    body: [
      'The site links to other places, including the project repository, the publisher\'s site, and cited sources. Those places are governed by their own terms and privacy notices, and we are not responsible for their content or their practices.',
    ],
  },
  {
    id: 'availability',
    title: '14. Availability and change',
    body: [
      'The guide is a living document. Entries are added, rewritten, merged, and retired, and the log records when. Nothing here promises that a page, an entry, or a URL will still exist, or say the same thing, tomorrow.',
      'We may change, suspend, or withdraw any part of the site at any time, including this page.',
    ],
  },
  {
    id: 'warranty',
    title: '15. No warranty',
    body: [
      'The site is provided as it is and as it is available, without warranties of any kind, whether express or implied, including any warranty of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement.',
      'Some jurisdictions do not allow certain warranties to be excluded. Where that is so, the exclusion applies only to the extent the law allows, and nothing in these terms removes a right you cannot give up.',
    ],
  },
  {
    id: 'liability',
    title: '16. Limitation of liability',
    body: [
      'To the fullest extent the law allows, the operator is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost goodwill, lost data, or reputational harm, arising from the site or from these terms, whether in contract, tort, or otherwise, even if advised that such damage was possible.',
      'To the same extent, the operator\'s total liability for all claims relating to the site is limited to one hundred United States dollars, or the amount you have paid to use the site, whichever is greater. The site is free, so that amount is normally nothing.',
      'Nothing in this section limits liability that cannot lawfully be limited, including liability for fraud or for death or personal injury caused by negligence.',
    ],
  },
  {
    id: 'indemnity',
    title: '17. Indemnity',
    body: [
      'If a third party brings a claim against the operator because of how you used the site - for example, because you republished an entry as a factual claim about a named person, or used the guide\'s vocabulary to harass someone - you agree to indemnify the operator against the resulting loss and cost, to the extent the law allows.',
    ],
  },
  {
    id: 'mandatory',
    title: '18. Rights you cannot sign away',
    body: [
      'Nothing in these terms limits any right you hold under mandatory law where you live, including consumer protection, free expression, and data protection law. Where these terms and that law disagree, that law wins, and the rest of these terms stands.',
      'Nothing here waives any protection the operator has under anti-SLAPP law or any similar law protecting expression on matters of public interest, and nothing here waives such a protection you hold.',
    ],
  },
  {
    id: 'changes',
    title: '19. Changes to these terms',
    body: [
      'These terms may be revised. The version and the effective date at the top of this page change when they are, and the current version is the one that applies from that date. If a change is material, it is noted on the site.',
      'Continuing to use the site after a change means accepting the revised terms. If you do not accept them, stop using the site.',
    ],
  },
  {
    id: 'general',
    title: '20. Severability, waiver, and the whole agreement',
    body: [
      'If a provision of these terms is held unenforceable, it is limited to the smallest extent needed to make it enforceable, and the remaining provisions stay in force. A failure to enforce a provision is not a waiver of it.',
      'These terms and the privacy notice are the whole agreement between you and the operator about the site, and they replace anything said about it elsewhere.',
      'These terms bind and benefit the parties and their successors and permitted assigns. You may not assign your rights under them without written consent; the operator may assign its own together with the site. The sections on claims of fact, no warranty, limitation of liability, indemnity, and governing law survive any end to your use of the site.',
    ],
  },
  {
    id: 'law',
    title: '21. Governing law and jurisdiction',
    body: [
      'These terms are governed by the laws of the United States and of the state in which the operator maintains its principal place of business, without regard to conflict-of-laws rules. You and the operator agree to the exclusive jurisdiction of the courts located there.',
      'If you are a consumer, this does not deprive you of the protection of the mandatory law of the country where you live, or of your right to bring proceedings in your local courts where the law gives you that right.',
    ],
  },
  {
    id: 'contact',
    title: '22. Contact, and corrections',
    body: [
      <>Write to <Email user="hello" domain="creadev.org" />, or open an issue in the project repository.</>,
      'If you believe an entry identifies you or your organisation and gets something wrong, say which page and which sentence. We will look at it, and correct or remove what is wrong. A guide that cannot be corrected is not a guide.',
      'For a copyright or trademark complaint, write with the page, the material in question, and the basis of the claim. We will review it and remove what should not be there.',
    ],
  },
]

export default function Terms() {
  const meta = routeMeta('/terms/')
  usePageMeta({ siteUrl: site.url, path: '/terms/', title: meta.title, description: meta.description })

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">legal</p>
          <h1>Terms of use</h1>
          <p className="sub">
            This is satire, in a fictional universe, and it makes no claim about you. The rest is the
            ordinary scaffolding: no advice, no warranty, a licence you can actually use.
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
              <li>The guide is satire about ideas, written inside a fictional universe.</li>
              <li>Nothing here is a statement of fact about any person, or an accusation of anything.</li>
              <li>Nothing here is advice. It is not a legal opinion, a report, or a finding.</li>
              <li>You may quote and reuse it: the text and code are MIT-licensed.</li>
              <li>There is no warranty, and liability is limited to what a free site can owe.</li>
              <li>Rights your own law gives you cannot be signed away, and are not signed away here.</li>
            </ul>
            <p className="legal-summary-note">
              The summary is here for speed. The numbered sections below are the agreement, and they
              are what apply.
            </p>
          </div>
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
            </section>
          ))}
          <p className="legal-meta">
            See also the <Link to="/privacy/">privacy notice</Link>, and the{' '}
            <Link to="/about/">about page</Link> for what the guide is for.
          </p>
        </div>
      </section>
    </>
  )
}
