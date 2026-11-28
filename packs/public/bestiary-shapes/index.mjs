// bestiary-shapes - the site's own shape pack (packstruct SPEC v1, check profile).
//
// What it defends: the record grammar in data/ has to survive the round trip to
// baked HTML. An entry carries an identification block whose rows depend on its
// kind - a species has occasion / call / tell / counter, a move has trigger / tell /
// counter - and a page that silently drops any of them still looks fine in a
// browser, because the prose is all there. These checks read the artifact, not
// the source, so a generator regression that swallowed a block would go red here.
//
// Every check reads through ctx (host-owned path safety, no direct fs, no network).

// Entries are addressed by the prefix their kind dictates, so the pack walks
// every kind's tree rather than assuming /species/.
const KIND_PREFIXES = ['species', 'moves', 'abilities', 'habitats', 'buffs', 'fallacies']
const ENTRY_PAGE = new RegExp(`^(${KIND_PREFIXES.join('|')})/[^/]+/index\\.html$`)
// The URL prefix is plural, the record's kind is singular: moves/ holds moves.
const KIND_OF_PREFIX = {
  species: 'species', moves: 'move', abilities: 'ability', habitats: 'habitat',
  buffs: 'buff', fallacies: 'fallacy',
}

const PAGE_MARKERS = [
  ['identification block', 'species-spec'],
  ['sighting caption', 'Sighting in the wild'],
  ['compare with', 'species-compare'],
]

// A kind with no rows would bake an empty <dl> and still pass the marker test,
// so the row count is checked separately.
const MIN_IDENTIFICATION_ROWS = 3

// The citation is a label followed by the link, whatever classes wrap them: the
// rule is that a source row exists and points off-site, not that it points at
// one particular host.
const SOURCE_ROW = />\s*Source\s*<\/span>\s*<a href="https?:\/\//

function walk(ctx, relPrefix = '', out = []) {
  for (const name of ctx.readdir(relPrefix) || []) {
    const rel = relPrefix ? `${relPrefix}/${name}` : name
    if (/\.html$/i.test(rel)) out.push(rel)
    else if ((ctx.readdir(rel) || []).length) walk(ctx, rel, out)
  }
  return out.sort()
}

const count = (haystack, needle) => haystack.split(needle).length - 1

export default {
  checks: [
    {
      id: 'entry-page-carrying-identification',
      level: 'fail',
      run(ctx) {
        const findings = []
        const pages = walk(ctx).filter((rel) => ENTRY_PAGE.test(rel))
        if (!pages.length) {
          return [{ message: 'no entry pages under <kind>/*/index.html - bake before auditing the shape' }]
        }
        for (const rel of pages) {
          const html = ctx.text(rel) || ''
          const prefix = rel.split('/')[0]
          const kind = KIND_OF_PREFIX[prefix]
          const missing = PAGE_MARKERS.filter(([, marker]) => !html.includes(marker)).map(([label]) => label)
          if (missing.length) {
            findings.push({ page: rel, message: `entry page dropped ${missing.join(', ')}` })
            continue
          }
          const rows = count(html, '<dt>')
          if (rows < MIN_IDENTIFICATION_ROWS) {
            findings.push({ page: rel, message: `identification block has ${rows} row(s), expected ${MIN_IDENTIFICATION_ROWS}` })
          }
          if (!html.includes(`badge badge-${kind}`)) {
            findings.push({ page: rel, message: `page never declares its kind (badge-${kind})` })
          }
        }
        return findings
      },
    },
    {
      // The appendix exists because these are documented rather than invented:
      // a fallacy page without a citation is just another coinage wearing a
      // lab coat, so the source link is a shape requirement, not a nicety.
      // Wikipedia is the usual home for that account, not the only one - the
      // Kafka trap's write-up lives elsewhere - so this asks for a Source row
      // with an external link rather than for a particular host.
      id: 'reference-entries-cite-a-source',
      level: 'fail',
      run(ctx) {
        return walk(ctx, 'fallacies')
          .filter((page) => page !== 'fallacies/index.html')
          .filter((page) => !SOURCE_ROW.test(ctx.text(page) || ''))
          .map((page) => ({ page, message: 'fallacy page cites no source' }))
      },
    },
    {
      id: 'field-guide-lists-every-entry',
      level: 'fail',
      run(ctx) {
        const pages = walk(ctx).filter((rel) => ENTRY_PAGE.test(rel))
        const guide = ctx.text('guide/index.html')
        if (guide == null) return [{ page: 'guide/index.html', message: 'the field guide did not bake' }]
        const unreachable = pages
          .map((rel) => rel.replace(/\/index\.html$/, '/'))
          .filter((path) => !guide.includes(`href="/${path}"`))
        return unreachable.map((path) => ({
          page: 'guide/index.html',
          message: `field guide never links ${path}`,
        }))
      },
    },
    {
      id: 'listing-offers-a-way-in',
      level: 'warn',
      run(ctx) {
        const guide = ctx.text('guide/index.html')
        if (guide == null) return []
        const rows = count(guide, 'class="listing"')
        const links = count(guide, 'Read the full entry')
        if (rows && links < rows) {
          return [{ page: 'guide/index.html', message: `${rows - links} of ${rows} listing rows have no read-more link`, count: rows - links }]
        }
        return []
      },
    },
    {
      // A kind's front door lives at the kind's own prefix, and it must show
      // that kind and nothing else - otherwise the URL is a lie and the page
      // duplicates the guide.
      id: 'kind-front-door-is-scoped',
      level: 'fail',
      run(ctx) {
        const findings = []
        for (const prefix of KIND_PREFIXES) {
          const html = ctx.text(`${prefix}/index.html`)
          if (html == null) {
            findings.push({ page: `${prefix}/index.html`, message: 'kind front door did not bake' })
            continue
          }
          const kind = KIND_OF_PREFIX[prefix]
          // A kind with no records yet is a legitimate state; it still has to
          // say so rather than render as a blank guide.
          const empty = count(html, 'class="listing"') === 0
          if (empty && !html.includes('Nothing of this kind has been recorded yet')) {
            findings.push({ page: `${prefix}/index.html`, message: `empty ${prefix} page does not say it is empty` })
          }
          if (!empty && !html.includes(`badge badge-${kind}`)) {
            findings.push({ page: `${prefix}/index.html`, message: `front door shows no ${kind}` })
          }
          for (const other of KIND_PREFIXES) {
            const otherKind = KIND_OF_PREFIX[other]
            if (otherKind !== kind && html.includes(`badge badge-${otherKind}`)) {
              findings.push({ page: `${prefix}/index.html`, message: `front door leaks a ${otherKind}` })
            }
          }
          if (!html.includes('href="/guide/"')) {
            findings.push({ page: `${prefix}/index.html`, message: 'front door never links back to the guide' })
          }
        }
        return findings
      },
    },
    {
      // The compare block is the best onward link on the page: what a reader who
      // recognised the pattern clicks next. The marker check above proves the
      // container survived the bake; it proves nothing about what is inside it.
      // An entry with an empty `related` renders <h2>Compare with</h2> followed
      // by nothing, which reads as a design choice and is a missing field
      // wearing a heading.
      id: 'entry-compares-with-another',
      level: 'fail',
      run(ctx) {
        const findings = []
        for (const rel of walk(ctx).filter((page) => ENTRY_PAGE.test(page))) {
          const html = ctx.text(rel) || ''
          const start = html.indexOf('class="species-compare"')
          if (start < 0) continue
          const block = html.slice(start, html.indexOf('</div>', start))
          if (!block.includes('href="/')) {
            findings.push({ page: rel, message: 'compare block names no other entry - related is empty' })
          }
        }
        return findings
      },
    },
    {
      // "Easily confused with" is the page's sharpest distinction: the term a
      // reader is most likely to have arrived looking for. Species.jsx renders
      // the whole section inside a length guard, so an empty confused_with does
      // not leave a visible hole - the section simply never appears, and the
      // page still looks complete. Every entry carries one today, so this is a
      // ratchet: it holds the line rather than asking for new prose.
      id: 'entry-names-what-it-is-confused-with',
      level: 'fail',
      run(ctx) {
        return walk(ctx)
          .filter((page) => ENTRY_PAGE.test(page))
          .filter((page) => !(ctx.text(page) || '').includes('species-twins'))
          .map((page) => ({ page, message: 'no "Easily confused with" section - confused_with is empty' }))
      },
    },
    {
      // The failure mode a row count cannot see: <dt>Counter</dt><dd></dd> is
      // three rows and no counter. Every identification row has to carry text.
      id: 'identification-rows-are-filled',
      level: 'fail',
      run(ctx) {
        const findings = []
        for (const rel of walk(ctx).filter((page) => ENTRY_PAGE.test(page))) {
          const html = ctx.text(rel) || ''
          for (const row of html.matchAll(/<dt>([^<]+)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/g)) {
            if (!row[2].replace(/<[^>]+>/g, '').trim()) {
              findings.push({ page: rel, message: `identification row "${row[1]}" is empty` })
            }
          }
        }
        return findings
      },
    },
  ],
}
