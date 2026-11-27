// The relation gate: tresridge lints the entries tree as a declared graph.
//
// `tresridge lint` already exits non-zero on any refusal. This wrapper adds the
// one check the CLI cannot make for us: that the reader actually SAW the edges.
// A reader that returns values the id scanner cannot read produces zero edges and
// a clean verdict over nothing, which is the failure mode the reader contract
// warns about. So the run is trusted only when it counted a graph.

import { spawnSync } from 'node:child_process'

const args = [
  '--yes',
  'tresridge@1.1.0',
  'lint',
  'data/entries',
  '--reader',
  'tools/tres-reader.mjs',
  '--decl',
  'data/relations.json',
  '--json',
]

const run = spawnSync('npx', args, { encoding: 'utf8' })
const out = run.stdout || ''
const start = out.indexOf('{')

if (start < 0) {
  process.stderr.write(run.stderr || out || 'tresridge produced no verdict\n')
  process.exit(1)
}

const verdict = JSON.parse(out.slice(start))
const { families, records, edges, violations = [], warnings = [] } = verdict

if (edges === 0) {
  console.error(`[graph] ${records} record(s) read but 0 edges: the reader did not resolve any reference`)
  process.exit(1)
}

if (violations.length) {
  console.error(`[graph] ${families} families, ${records} records, ${edges} edges`)
  for (const v of violations) console.error(`  FAIL  ${v.code}  ${v.record} ${v.field || ''}  ${v.detail || ''}`)
  console.error(`[graph] ${violations.length} violation(s), ${warnings.length} warning(s)`)
  process.exit(1)
}

console.log(`[graph] ${families} families, ${records} records, ${edges} edges - clean`)
for (const w of warnings) console.log(`  WARN  ${w.code}  ${w.record} ${w.field || ''}  ${w.detail || ''}`)
