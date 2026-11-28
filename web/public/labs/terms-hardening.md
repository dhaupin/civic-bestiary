# Terms hardening: what the v2.0 page is for, and what it cannot do

The terms page went from 22 sections to 30. The count is not the point. The point is that the first version was written as a shield, and a shield is the one thing a terms page cannot be. This is the record of why the second version is shaped the way it is, what it still cannot do, and what has to happen outside the page for any of it to matter.

## The finding that shaped the rewrite

Three independent analyses converged on the same uncomfortable fact: **a terms page binds only the people who accept it.** This page is browsewrap — "by opening a page you accept" — with no click, no checkbox, no account. Under *Specht v. Netscape* (2d Cir. 2002) and *Nguyen v. Barnes & Noble* (9th Cir. 2014), that binds nobody who sues. And the people most likely to sue are the ones who never visited: the subjects of a satire. Defamation is a tort, not a breach of contract, so no amount of contractual language reaches them.

That leaves the page doing two jobs, neither of which is "immunity":

1. **Evidence.** What the operator said about the work, in public, on a dated page — read by a judge assessing intent, by an insurer assessing risk, and by a provider's trust-and-safety reviewer deciding whether to suspend or to ask for a cure.
2. **A description of method.** The sections that actually protect the work are the ones that describe what it is and how it is made. A page that describes a pattern, sourced and dated, is defensible. A page that disclaims resemblance while the editorial method clearly targets recognisable behaviour is evidence against its own author.

Section 230 does not help either. It shields platforms for *third-party* content; every entry here is the operator's own speech.

## The five clauses that were doing harm

Each of these read as protection and functioned as an admission. They are the reason this rewrite is not cosmetic.

| Clause (v1.0) | What a plaintiff does with it | v2.0 |
| --- | --- | --- |
| §3 "Any resemblance … is coincidental and unintended" | A factual claim about the operator's state of mind, contradicted by the drafting history. Becomes proof of a knowingly false disclaimer and poisons the rest of the page. | Deleted. Replaced with a denial that any entry refers to an identifiable person. |
| §4 "Recognising yourself … is the intended effect" | Supplies the "of and concerning" element for free, plus the state of mind for actual malice. The most dangerous sentence on the page. | Deleted. Recognition of a pattern is not identification of a person. |
| §3 "That universe does not necessarily correspond to the real world" | "Necessarily" concedes that it sometimes does, which pairs badly with sourced real doctrines. | Deleted. The frame is a literary form, and the entries are commentary that cites its sources. |
| §16 "…or reputational harm" in the liability exclusion | Reputational harm *is* the injury in defamation. The clause does nothing where it matters, and invites a court to void the cap with it. | Deleted from the list; the cap is scoped to use of the site. |
| §6 "we would rather fix a sentence than defend it" | Reads as a standing concession that sentences may need defending, and as a promise to capitulate to demand letters. | Replaced by the corrections process in §22, which has dates and does not concede. |

The pattern in all five: they describe the operator's intent, and intent is exactly what a plaintiff needs and exactly what the operator is worst placed to prove.

## What the new sections do

- **§7 How an entry is made** — the three-question check before publication. This is the anti-SLAPP exhibit, and the thing an insurer will ask for.
- **§8 How the vocabulary may be used** — descriptive, not prescriptive; keep the framing; never as a label for a person.
- **§9 One author, not a network** — no members, no funding, no campaign, and nothing that could be read as an agreement between readers. Civil conspiracy needs an agreement; there is none to find, and now there is a sentence saying so.
- **§15 Security research** — a safe harbour and a contact, because §14 forbids unauthorised probing and previously gave no authorised channel.
- **§22 Complaints, corrections, and removal** — one business day to acknowledge, ten to decide, a dated log, correction rather than deletion, and no admission in either direction.
- **§23 Copyright complaints** — the six statutory contents of a valid notice, the counter-notice path, and the repeat-infringer rule.
- **§24 Accessibility** — WCAG 2.2 AA as a target, with "treat it as a defect" as the intake rule.
- **§25 Age**, **§26 No reliance**, and the **SPEECH Act** sentence in §29.

## The one tension, and how it was resolved

The licence section wanted to make "keep the satirical framing" enforceable. It cannot be. MIT grants unrestricted use, and an open-source condition is only enforceable as a copyright condition if it is actually a condition — *Jacobsen v. Katzer* (Fed. Cir. 2008). Adding a no-harassment condition would make the licence non-free and non-OSI-compliant, which contradicts what the project advertises. So §12 says plainly that the request is a norm rather than a condition, and §8 says why. Writing it as a term would have been the same mistake as the five clauses above: claiming an effect the instrument does not have.

## The runbook this page implies

None of this works without the behaviour behind it.

- **Never write "this is about [name]" anywhere.** Not in a commit message, not in an issue, not in a PR title, not in an email. The public repo is permanent, timestamped and discoverable, and a commit titled "entry for [person]" is the plaintiff's first exhibit.
- **Log every complaint** with the date, the channel, the complainant's capacity, the exact URL and sentence, the decision and its date. That log is simultaneously the anti-SLAPP good-faith record, the insurance claim file and the evidence of method.
- **Acknowledge in one business day, decide in ten.** Most complainants escalate to counsel around day fourteen.
- **Correction over deletion.** Silent deletion destroys the record and reads as consciousness of guilt. A dated note is better evidence and better practice.
- **Never admit, never offer, never speculate about damages.** Once a policy exists, most media liability policies have no-admission and no-voluntary-payment conditions, and a careless reply can void coverage for the claim it was trying to defuse. Report every demand letter to the insurer within 24 hours, including the baseless ones.
- **Litigation hold on first contact.** Stop deleting drafts, notes and issue threads.

## Open items

1. **Name the forum state in §29.** "The state in which the operator maintains its principal place of business" invites a forum fight and can be read as evasive. One word fixes it.
2. **A `sources:` field on every entry that names a real doctrine, office or fallacy.** §7 promises the check; the data should be able to show it.
3. **A contributor rule: proposals may not name individuals.** Belongs in the issue template and in CONTRIBUTING, and the closure of a violating proposal is itself evidence of method.
4. **A real /about** — a legal name, a city, a start date, funding ("none"), one contact. The single highest-value artefact for being legible as one author rather than a network.
5. **`schema.org/DefinedTerm`** per coinage and a `DefinedTermSet` for the collection, so the definition travels with the term when someone else uses it.
6. **A DMCA designated agent** only if the site ever hosts third-party content. It does not today, so this is a note rather than a task.
7. **Media liability insurance**, quoted before the first demand letter rather than after.
8. **`/.well-known/security.txt`** — added with this change, because §15 names it.

## Do not add

Advertising, comments, votes, leaderboards, a "sightings" submission form, or any surface that ranks or names real people. Each one converts a lexicon into a targeting tool, and each one drags the site into a regime it currently sits outside: ePrivacy consent for ads, user-to-user duties under the UK Online Safety Act for comments, online-platform duties under the DSA for anything that ranks user content. The site's strongest structural position is that it publishes one author's text and nothing else.

## Provenance, and the limits of this document

The analysis behind this rewrite came from three parallel sessions run against the v1.0 text: a litigator working element-by-element, media defence counsel working the doctrine and the anti-SLAPP posture, and a trust-and-safety operator working provider risk, takedowns and insurance. Their findings were reconciled here. The litigator's lane was truncated partway through (it covered defamation, false light and the emotional-distress torts in detail and stopped before conspiracy, RICO and the trademark causes), so those causes are reasoned here from the general doctrine rather than from its element-by-element output.

**This is not legal advice, and it was not written by a lawyer.** The case and statute citations come from model knowledge, not from fetched primary sources, and should be checked before anyone relies on them in a filing, an insurance application or a demand-letter response. The rewrite is a better-shaped document and a more honest one; whether it is sufficient is a question for counsel admitted where the operator lives.

The structural conclusion is the one thing worth carrying forward even if every citation below it turns out to be wrong: a satire is defended by what it says and how it was made, not by what its terms page disclaims.
