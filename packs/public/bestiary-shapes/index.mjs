// bestiary-shapes - the site's own shape pack (packstruct SPEC v1, check profile).
//
// What it defends: the record grammar in data/ has to survive the round trip to
// baked HTML. A species record carries range / call / field_marks / confused_with,
// and a page that silently drops any of them still looks fine in a browser - the
// prose is all there. These checks read the artifact, not the source, so a
// generator regression that swallowed a field would go red here.
//
// Every check reads through ctx (host-owned path safety, no direct fs, no network).

const SPECIES_PAGE = /^species\/[^/]+\/index\.html$/

// The identification block and the two reference blocks, by the class names the
// generator emits. A marker that stops being written is the regression this
// pack exists to catch.
const SPECIES_MARKERS = [
  ['identification block', 'species-spec'],
  ['range row', 'species-range'],
  ['call row', 'species-call'],
  ['field marks row', 'species-marks'],
  ['sighting caption', 'Sighting in the wild'],
  ['easily confused with', 'species-twins'],
  ['compare with', 'species-compare'],
]

function walk(ctx, relPrefix = '', out = []) {
  for (const name of ctx.readdir(relPrefix) || []) {
    const rel = relPrefix ? `${relPrefix}/${name}` : name
    if (/\.html$/i.test(name)) out.push(rel)
    else if ((ctx.readdir(rel) || []).length) walk(ctx, rel, out)
  }
  return out.sort()
}

const count = (haystack, needle) => haystack.split(needle).length - 1

export default {
  checks: [
    {
      id: 'species-page-carrying-identification',
      level: 'fail',
      run(ctx) {
        const findings = []
        const pages = walk(ctx).filter((rel) => SPECIES_PAGE.test(rel))
        if (!pages.length) {
          return [{ message: 'no species pages under species/*/index.html - bake before auditing the shape' }]
        }
        for (const rel of pages) {
          const html = ctx.text(rel) || ''
          const missing = SPECIES_MARKERS.filter(([, marker]) => !html.includes(marker)).map(([label]) => label)
          if (missing.length) {
            findings.push({ page: rel, message: `species page dropped ${missing.join(', ')}` })
          }
        }
        return findings
      },
    },
    {
      id: 'field-guide-lists-every-species',
      level: 'fail',
      run(ctx) {
        const pages = walk(ctx).filter((rel) => SPECIES_PAGE.test(rel))
        const guide = ctx.text('species/index.html')
        if (guide == null) return [{ page: 'species/index.html', message: 'the field guide did not bake' }]
        const unreachable = pages
          .map((rel) => rel.split('/')[1])
          .filter((slug) => !guide.includes(`/species/${slug}"`))
        return unreachable.map((slug) => ({
          page: 'species/index.html',
          message: `field guide never links ${slug}`,
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
