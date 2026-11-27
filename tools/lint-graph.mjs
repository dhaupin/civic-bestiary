// The relation gate: tresridge lints the entries tree as a declared graph.
//
// `tresridge lint` already exits non-zero on any refusal. This wrapper adds the
// one check the CLI cannot make for us: that the reader actually SAW the edges.
// A reader that returns values the id scanner cannot read produces zero edges and
// a clean verdict over nothing, which is the failure mode the reader contract
// warns about. So the run is trusted only when it counted a graph.

import { spawnSync } from 'node:child_process'

// The pin. An audit is a gate, so it must not move under us - but a gate on a version
// that cannot report is not a gate either, so this line moves with a release and nothing
// else does. See AGENTS.md for what the next release changes and why the verdict here
// stays 8/198/1119/0.
const TRESRIDGE = 'tresridge@1.1.0'

const args = [
  '--yes',
  TRESRIDGE,
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
  process.stderr.write(run.stderr || out || `tresridge produced no verdict (exit ${run.status})\n`)
  process.exit(1)
}

let verdict
try {
  verdict = JSON.parse(out.slice(start))
} catch (err) {
  // The failure that looked like a bad tree and was not: tresridge 1.1.0 calls
  // process.exit() without draining stdout, so a verdict over ~146KB arrives cut off
  // mid-string and JSON.parse dies on a payload the lint produced in full. Say that,
  // rather than a SyntaxError with no byte count and no way to tell the two apart.
  console.error(`[graph] tresridge wrote ${out.length} bytes that do not parse: ${err.message}`)
  console.error(`[graph] tail: ${JSON.stringify(out.slice(-60))}`)
  if (out.length > 131072) {
    console.error('[graph] over 128KB and truncated: this is the pre-drain stdout bug, not a tree problem')
  }
  process.exit(1)
}
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
