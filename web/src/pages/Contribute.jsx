/**
 * pages/Contribute.jsx - how to propose a term.
 *
 * The field list here is generated from schema/record.json, the same file the
 * validator and the GitHub issue form read. Nothing on this page repeats the
 * contract by hand, so a new required field appears in all three places at once.
 */
import usePageMeta from '../hooks/usePageMeta.js'
import site, { routeMeta } from '../site.js'
import contract from '../data/contract.js'
import { chapters, stats } from '../lexicon.js'

const issueUrl = `${site.repo}/issues/new?template=${contract.issue.template}`

const STEPS = [
  {
    title: 'Check it is missing',
    body: 'Search the field guide first. If the thing you mean already has a name here, the entry needs a better example more than the bestiary needs a synonym.',
  },
  {
    title: 'Open the proposal form',
    body: 'The form asks the same questions a record does: what it says, where you meet it, how you recognise it. Rough answers are fine - the writing gets edited, the observation does not.',
  },
  {
    title: 'Review, then record',
    body: `A proposal lands as one file, ${contract.recordPath}, once it holds up. Placement, cross-references, and the final edit stay with the maintainers, so the graph cannot lose a node in the process.`,
  },
]

function Fields({ fields }) {
  return (
    <dl className="contract">
      {fields.map((field) => (
        <div key={field.key}>
          <dt>
            {field.label}
            {field.requiredInIssue && <span className="contract-req" aria-label="required">required</span>}
          </dt>
          <dd>
            {field.hint}
            {field.example && <span className="contract-eg">{field.example}</span>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default function Contribute() {
  const meta = routeMeta('/contribute/')
  usePageMeta({ siteUrl: site.url, path: '/contribute/', title: meta.title, description: meta.description })

  return (
    <section className="section contribute">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">contribute</p>
          <h1>Name what you keep seeing</h1>
          <p className="sub">
            The bestiary grows the way a field guide does: someone notices a creature, writes down
            what it does, and checks whether the animal next to it is the same one. {stats.entries}{' '}
            entries so far, in {chapters.length} chapters.
          </p>
        </header>

        <div className="prose">
          <p>
            A good term is not clever, it is <em>useful</em>. It should name something a reader
            recognises instantly and has no word for yet - the way <strong>playtriot</strong> covers
            a whole posture in one syllable. If the word needs a paragraph of setup before it means
            anything, it is not a species; it is a slogan.
          </p>
        </div>

        <div className="taxa">
          <h2 className="contribute-h">The five kinds</h2>
          <dl className="taxa-list">
            {Object.entries(contract.kinds).map(([id, spec]) => (
              <div key={id}>
                <dt>
                  <span className={`badge badge-${id}`}>{spec.label}</span>
                </dt>
                <dd>
                  {spec.blurb}
                  <span className="taxa-rows">
                    {spec.identification.map((row) => row.label).join(' · ')}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="contribute-steps">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="step-no">{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="cta-row">
          <a className="btn btn-primary" href={issueUrl} target="_blank" rel="noreferrer">
            Open the proposal form
          </a>
          <a className="btn btn-ghost" href={`${site.repo}/blob/main/schema/record.json`} target="_blank" rel="noreferrer">
            Read the record contract
          </a>
        </div>

        <div className="contribute-grid">
          <div>
            <h2 className="contribute-h">What the form asks you</h2>
            <Fields fields={contract.contributor} />
          </div>
          <div>
            <h2 className="contribute-h">What we add when it lands</h2>
            <p className="contribute-note">
              You do not have to place the entry or wire it into the graph. A record lives at{' '}
              <code>{contract.recordPath}</code>, and the maintainers own these fields:
            </p>
            <ul className="contract-list">
              {contract.maintainer.map((field) => (
                <li key={field.key}>
                  <strong>{field.label}</strong> - {field.hint}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
