// bestiary-shapes - the site's own shape pack (packstruct SPEC v1, check profile).
//
// What it defends: the record grammar in data/ has to survive the round trip to
// baked HTML. An entry carries an identification block whose rows depend on its
// kind - a species has range / call / field marks, a move has trigger / tell /
// counter - and a page that silently drops any of them still looks fine in a
// browser, because the prose is all there. These checks read the artifact, not
// the source, so a generator regression that swallowed a block would go red here.
//
// Every check reads through ctx (host-owned path safety, no direct fs, no network).

// Entries are addressed by the prefix their kind dictates, so the pack walks
// every kind's tree rather than assuming /species/.
const KIND_PREFIXES = ['species', 'moves', 'abilities', 'formats', 'buffs']
const ENTRY_PAGE = new RegExp(`^(${KIND_PREFIXES.join('|')})/[^/]+/index\\.html$`)
// The URL prefix is plural, the record's kind is singular: moves/ holds moves.
const KIND_OF_PREFIX = {
  species: 'species', moves: 'move', abilities: 'ability', formats: 'format', buffs: 'buff',
}

const PAGE_MARKERS = [
  ['identification block', 'species-spec'],
  ['sighting caption', 'Sighting in the wild'],
  ['compare with', 'species-compare'],
]

// A kind with no rows would bake an empty <dl> and still pass the marker test,
// so the row count is checked separately.
const MIN_IDENTIFICATION_ROWS = 3

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
      id: 'field-guide-lists-every-entry',
      level: 'fail',
      run(ctx) {
        const pages = walk(ctx).filter((rel) => ENTRY_PAGE.test(rel))
        const guide = ctx.text('species/index.html')
        if (guide == null) return [{ page: 'species/index.html', message: 'the field guide did not bake' }]
        const unreachable = pages
          .map((rel) => rel.replace(/\/index\.html$/, '/'))
          .filter((path) => !guide.includes(`href="/${path}"`))
        return unreachable.map((path) => ({
          page: 'species/index.html',
          message: `field guide never links ${path}`,
        }))
      },
    },
    {
      id: 'listing-offers-a-way-in',
      level: 'warn',
      run(ctx) {
        const guide = ctx.text('species/index.html')
        if (guide == null) return []
        const rows = count(guide, 'class="listing"')
        const links = count(guide, 'Read the full entry')
        if (rows && links < rows) {
          return [{ page: 'species/index.html', message: `${rows - links} of ${rows} listing rows have no read-more link`, count: rows - links }]
        }
        return []
      },
    },
  ],
}
