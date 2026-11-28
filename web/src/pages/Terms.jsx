/**
 * pages/Terms.jsx - the agreement, in the site's own voice: satire, commentary,
 * and no claim about any person. Written to be read, not to be skimmed past.
 *
 * v2.0 changes the shape of the defence. The first version asserted that any
 * resemblance was "coincidental and unintended" and that recognising yourself
 * was "the intended effect" - which is a factual claim about the operator's
 * state of mind, contradicted by the method, and a concession of the one
 * element a defamation plaintiff has to prove. Both are gone. In their place:
 * how an entry is made, how the vocabulary may be used, one author and no
 * network, and a corrections process with dates on it.
 *
 * v2.1 replaces "the state in which the operator maintains its principal place
 * of business" with domicile. The old phrase is a term of art for entities;
 * applied to a person it invites the court to substitute domicile, which is a
 * fight rather than a forum. Domicile is a fact, so it can be determined.
 *
 * A terms page binds readers. It cannot bind the people a satire is about,
 * because they never accepted it, and defamation is a tort rather than a
 * breach of contract. So the sections that actually protect the work are the
 * ones describing what the work is and how it is made - not the ones
 * disclaiming what it is not. The rest is ordinary scaffolding, kept because
 * it is the honest scaffolding for a free site with no accounts.
 */
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import Email from '../components/Email.jsx'

const VERSION = '2.2'
const EFFECTIVE = 'November 28, 2026'

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
      'It is a work of humour, criticism, and commentary. It is not a database of persons, a news report, or a finding of fact about anybody.',
    ],
  },
  {
    id: 'satire',
    title: '3. Satire, commentary, and opinion',
    body: [
      'The guide is satire, criticism, and commentary on matters of public interest. Its entries are characterisations and opinions, not reports of fact. The naturalist\'s frame - species, habitat, buff, remedy - is a literary form, not a claim that the world it describes exists.',
      'No entry is about an identifiable person, and no entry asserts that anyone has done, said, or believed anything. Where a term is eponymous, the entry names the person it is named for and describes the conduct the name comes from as the cited record describes it: attribution, not allegation.',
      'Where an entry names a real doctrine, office, or documented fallacy, it identifies the public record and cites it, and the source controls where the description and the source differ.',
    ],
  },
  {
    id: 'patterns',
    title: '4. Patterns, not people',
    body: [
      'A species is a pattern of behaviour that anyone can wear, including the author. The moves, abilities, habitats, buffs, remedies, and keystones are mechanisms you could point at in a transcript, and none of them is a verdict on an individual.',
      'Recognising a pattern is not identifying a person, and it is not a finding that any particular person has done anything. Point at the pattern, not at the person.',
    ],
  },
  {
    id: 'no-claim',
    title: '5. Nothing here is a claim of fact about you',
    body: [
      'The coinages are invented words, not names of people. A description that is general by design may feel specific to a reader who recognises the behaviour; that recognition is the point of describing a pattern, and it is not a factual assertion about that reader or anyone else.',
      'Do not present an entry as a factual claim about a named individual, and do not use this site or its vocabulary to harass, threaten, defame, dox, or organise pressure against anyone. That use is outside what the guide is for, and it is outside what these terms permit.',
    ],
  },
  {
    id: 'not-advice',
    title: '6. Not advice',
    body: [
      'Nothing here is legal, medical, psychological, financial, journalistic, or professional advice, and no relationship of that kind is created by reading it or writing to us.',
      'Where an entry touches on law, it describes a doctrine in general terms for identification. Law differs by jurisdiction and changes over time. If you need advice, consult someone qualified where you are.',
    ],
  },
  {
    id: 'method',
    title: '7. How an entry is made',
    body: [
      'Entries are written to describe a pattern, not a person. Before publication each one is checked against three questions: does it name or thinly disguise an identifiable person or organisation; does it assert a verifiable fact; and if it describes a real doctrine, office, or fallacy, does it carry a source.',
      'An entry that fails the check is rewritten or not published. Where a description and its source differ, the source controls, and the entry is corrected.',
      'This is the method, not a warranty about any individual sentence. A guide that cannot be corrected is not a guide, which is why section 22 exists.',
    ],
  },
  {
    id: 'vocabulary',
    title: '8. How the vocabulary may be used',
    body: [
      'The coinages are descriptive, not prescriptive. They name a pattern of behaviour in the way a field guide names a bird.',
      'You may use them under the licence in section 12. If you use one, keep its framing with it: a coinage describes a pattern, and it is not a finding about a person. Do not use one to name, label, or target an identifiable individual, and do not present one as a statement of fact about anyone.',
      'This is a norm, and on this site it is also a limit on what these terms permit. It is not a condition of the copyright licence, and section 12 says why it cannot be one.',
    ],
  },
  {
    id: 'no-coordination',
    title: '9. One author, not a network',
    body: [
      'This is one author\'s book, published on one site. It is not a network, a movement, a campaign, or a call to action. It has no members, no funding, and no organisation behind it.',
      'The guide does not ask anyone to act, to repeat its vocabulary in concert, or to direct it at a person. Using it as part of a coordinated campaign to pressure, silence, or harass anyone is outside what it is for, and outside what these terms permit.',
      'Nothing on this site is an agreement between readers, and nothing here makes a reader an agent of the operator.',
    ],
  },
  {
    id: 'real-material',
    title: '10. Real doctrines, offices, and documented fallacies',
    body: [
      'Some entries name real things: a legal doctrine, a public office, a documented fallacy. Those entries describe the public record, carry a source where one exists, and are commentary about it.',
      'They are not legal opinions, not advice about any matter, and not complete. A doctrine may be narrower than its popular description, an office may differ between jurisdictions, and a fallacy may be named differently elsewhere.',
    ],
  },
  {
    id: 'marks',
    title: '11. Names, trademarks, and third-party material',
    body: [
      'Third-party names, titles, and marks that appear on the site belong to their owners and are used to identify the thing being discussed. No affiliation, sponsorship, or endorsement is implied in either direction.',
      'Quotations are short and attributed. Links to other sites are there because they are useful, not because those sites endorse anything here.',
    ],
  },
  {
    id: 'licence',
    title: '12. Copyright and licence',
    body: [
      'The text and code in the project repository are released under the MIT licence. You may copy, adapt, and redistribute them on those terms, keeping the copyright notice and the permission notice with any copy.',
      'That licence is free, and a free licence cannot restrict what you say with the material afterwards. The request in section 8 to keep the satirical framing is a norm, not a condition of the licence, and we will not pretend otherwise by writing it as one.',
      'The site\'s name and identity are not granted as trademarks by that licence. If you republish an entry or a set of them, do not suggest that we endorse you or what you publish.',
    ],
  },
  {
    id: 'contributions',
    title: '13. Proposals and contributions',
    body: [
      'Entry proposals, corrections, and pull requests sent through the project repository are public and non-confidential. By sending one, you confirm that it is your own work, that it infringes no third party\'s rights, that it asserts no fact about any identifiable person, and that you have the right to send it. You grant the operator a perpetual, worldwide, royalty-free licence to publish, edit, and adapt it under the same licence as the rest of the guide.',
      'We would rather decline a contribution than rewrite it into something its author did not write. We may decline, rewrite, or retire any contribution, and sending one creates no obligation to publish it or to credit it beyond what the repository history already records.',
    ],
  },
  {
    id: 'use',
    title: '14. Acceptable use',
    body: [
      'Do not use the site to break the law; to attack it, including flooding it, probing it for vulnerabilities without permission, or scraping at a rate that degrades it for other readers; to misrepresent the guide as a factual report about a named person; to organise a campaign against anyone; or to imply that the operator has made a statement it has not made.',
      'Reasonable reading, quoting, linking, archiving, teaching with, and researching the guide are all welcome.',
    ],
  },
  {
    id: 'security',
    title: '15. Security research',
    body: [
      'The security contact is published at /.well-known/security.txt. Write there first, and give us a reasonable chance to fix what you find before you publish it.',
      'We will not pursue anyone who reports a vulnerability in good faith, who does not degrade the site for other readers, who does not access other people\'s data, and who gives us time to respond. That is a statement of intent about how we behave; it does not authorise testing against the third-party services the site depends on, and it binds nobody else.',
    ],
  },
  {
    id: 'links',
    title: '16. Other sites',
    body: [
      'The site links to other places, including the project repository, the publisher\'s site, and cited sources. Those places are governed by their own terms and privacy notices, and we are not responsible for their content or their practices.',
    ],
  },
  {
    id: 'availability',
    title: '17. Availability and change',
    body: [
      'The guide is a living document. Entries are added, rewritten, merged, and retired, and the log records when. Nothing here promises that a page, an entry, or a URL will still exist, or say the same thing, tomorrow.',
      'We may change, suspend, or withdraw any part of the site at any time, including this page, and we are not liable for an interruption outside our reasonable control.',
    ],
  },
  {
    id: 'warranty',
    title: '18. No warranty',
    body: [
      'The site is provided as it is and as it is available, without warranties of any kind, whether express or implied, including any warranty of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement.',
      'Some jurisdictions do not allow certain warranties to be excluded. Where that is so, the exclusion applies only to the extent the law allows, and nothing in these terms removes a right you cannot give up.',
    ],
  },
  {
    id: 'liability',
    title: '19. Limitation of liability',
    body: [
      'To the fullest extent the law allows, the operator is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost goodwill, or lost data, arising from your use of the site or from these terms, whether in contract, tort, or otherwise, even if advised that such damage was possible.',
      'To the same extent, the operator\'s total liability for all claims relating to your use of the site is limited to one hundred United States dollars, or the amount you have paid to use the site, whichever is greater. The site is free, so that amount is normally nothing.',
      'Nothing in this section limits liability that cannot lawfully be limited, including liability for fraud or for death or personal injury caused by negligence.',
    ],
  },
  {
    id: 'indemnity',
    title: '20. Indemnity',
    body: [
      'If a third party brings a claim against the operator because of how you used the site - for example, because you republished an entry as a factual claim about a named person, or used the guide\'s vocabulary to harass someone - you agree to indemnify the operator against the resulting loss and cost, to the extent the law allows.',
    ],
  },
  {
    id: 'mandatory',
    title: '21. Rights you cannot sign away',
    body: [
      'Nothing in these terms limits any right you hold under mandatory law where you live, including consumer protection, free expression, and data protection law. Where these terms and that law disagree, that law wins, and the rest of these terms stands.',
      'Nothing here waives any protection the operator has under anti-SLAPP law or any similar law protecting expression on matters of public interest, and nothing here waives such a protection you hold. A demand letter is not, by itself, a reason to remove a page that describes a pattern rather than a person.',
    ],
  },
  {
    id: 'corrections',
    title: '22. Complaints, corrections, and removal',
    body: [
      <>
        Write to <Email user="hello" domain="creadev.org" /> with the page, the sentence, and what you say is wrong with it. Say who you are and, if you write for someone else, on what basis. If you are represented, tell us, and we will correspond with your representative.
      </>,
      'We acknowledge a complaint within one business day and aim to decide within ten. We keep a dated record of what was sent, what we did, and why - a record that is useful to you as much as to us.',
      'We correct errors of fact, and the correction carries its date on the page it corrects. We will not remove a page because it is unflattering. We will not keep a page that asserts something false about an identifiable person.',
      'A complaint is not an admission, and neither is our reply. We ask that you read our answer the same way.',
    ],
  },
  {
    id: 'copyright',
    title: '23. Copyright complaints',
    body: [
      <>
        For a copyright complaint, write to <Email user="hello" domain="creadev.org" /> with the six things a notice under 17 U.S.C. section 512(c)(3) must contain: your signature; identification of the work; the URL of the material you say infringes; your contact details; a statement of good-faith belief that the use is not authorised; and a statement, under penalty of perjury, that the notice is accurate and that you are authorised to act for the owner. A notice missing any of these is not a valid notice, and we may ask you to send it again.
      </>,
      'If material is removed and you believe that was a mistake, you may send a counter-notice under section 512(g)(3), and we will follow the statute. Contributors who repeatedly submit infringing or bad-faith material are blocked.',
      'The site publishes its own text; it does not host third-party content. The repository and the hosting provider each run under their own policies and their own designated agents.',
    ],
  },
  {
    id: 'accessibility',
    title: '24. Accessibility',
    body: [
      'The site aims to meet WCAG 2.2 level AA. It is built to work with a keyboard, with a screen reader, and at 200% zoom, and it is checked before each release.',
      'Automated checks do not catch everything. If something does not work for you, write to us with the page and what happened, and we will treat it as a defect rather than a preference.',
    ],
  },
  {
    id: 'age',
    title: '25. Age',
    body: [
      'The site is written for adults and is not directed at children. If you are under 13, do not use it. If you are old enough to use it but not old enough to enter a contract where you live, use it only with the involvement of a parent or guardian.',
    ],
  },
  {
    id: 'reliance',
    title: '26. No reliance',
    body: [
      'Nothing here is a basis for a decision. Do not rely on an entry, a citation, or a description of a doctrine to make a legal, medical, financial, employment, or safety decision. Read the source.',
    ],
  },
  {
    id: 'changes',
    title: '27. Changes to these terms',
    body: [
      'These terms may be revised. The version and the effective date at the top of this page change when they are, and the current version is the one that applies from that date. If a change is material, it is noted on the site.',
      'Continuing to use the site after a change means accepting the revised terms. If you do not accept them, stop using the site.',
    ],
  },
  {
    id: 'general',
    title: '28. Severability, waiver, and the whole agreement',
    body: [
      'If a provision of these terms is held unenforceable, it is limited to the smallest extent needed to make it enforceable, and the remaining provisions stay in force. A failure to enforce a provision is not a waiver of it.',
      'These terms and the privacy notice are the whole agreement between you and the operator about the site, and they replace anything said about it elsewhere.',
      'These terms bind and benefit the parties and their successors and permitted assigns. You may not assign your rights under them without written consent; the operator may assign its own together with the site. The sections on satire and opinion, patterns, how an entry is made, the vocabulary, no warranty, limitation of liability, indemnity, and governing law survive any end to your use of the site.',
    ],
  },
  {
    id: 'law',
    title: '29. Governing law and jurisdiction',
    body: [
      'These terms are governed by the law of the state where the operator is domiciled, together with the federal law of the United States, without regard to conflict-of-laws rules. Domicile is a fact rather than a label: it is where the operator actually lives and intends to stay. If the operator moves, the governing law follows, but a move does not change the law that applies to a dispute that arose before it.',
      'You and the operator agree that the courts of that state may hear a dispute about these terms, and the operator consents to their jurisdiction. That is a consent, not a lock: if the law where you live gives you the right to sue there, or gives you protections you cannot waive, nothing here takes either away.',
      'A judgment from a court outside the United States that is inconsistent with the First Amendment is not enforceable here. That is not our argument; it is the SPEECH Act, 28 U.S.C. sections 4101 to 4105.',
    ],
  },
  {
    id: 'contact',
    title: '30. Contact',
    body: [
      <>
        Write to <Email user="hello" domain="creadev.org" />, or open an issue in the project repository. For a security report, use the address in section 15. For a correction, section 22. For copyright, section 23.
      </>,
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
            This is satire and commentary, and it makes no claim about you. The rest is the
            ordinary scaffolding: how an entry is made, how the vocabulary may be used, how a
            correction works, and a licence you can actually use.
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
              <li>The guide is satire and commentary on ideas, describing patterns rather than people.</li>
              <li>No entry is a statement of fact about any person, or an accusation of anything.</li>
              <li>Use the vocabulary; keep its framing. It is not a label for a person.</li>
              <li>Nothing here is advice, or a basis for a decision.</li>
              <li>Corrections are made and published with their date.</li>
              <li>The text and code are MIT-licensed, and a free licence cannot restrict what you say with them.</li>
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
