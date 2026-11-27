// A tresridge reader for the entries tree, whose records are JSON.
//
// tresridge's grammar is format-independent; only its walker and parser were
// `.tres`. This module supplies that pair (SPEC section 13, `--reader`), so the
// lint reads `data/entries/` as it is rather than a converted copy that could
// drift from it.
//
// One thing the reader owns beyond parsing: this tree authors a reference as a
// TERM ("Heckler's veto") while an id is a filename stem (`hecklers-veto`). The
// index below is that mapping, built from each record's `term` and `aliases`. A
// value that resolves is emitted as its id; one that does not is emitted as
// written, so the lint refuses it as dangling instead of the reader guessing.
//
// Values are emitted with `JSON.stringify` because the lint's id reader scans raw
// source text for quoted values. A reader that returns bare strings reads zero
// edges and reports a clean lint over nothing.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, basename, extname } from 'node:path'

function walkDir(root) {
  const out = []
  for (const name of readdirSync(root).sort()) {
    const full = join(root, name)
    if (statSync(full).isDirectory()) out.push(...walkDir(full))
    else if (extname(full) === '.json') out.push(full)
  }
  return out
}

const index = new Map()

function buildIndex(files) {
  index.clear()
  for (const file of files) {
    let doc
    try {
      doc = JSON.parse(readFileSync(file, 'utf8'))
    } catch {
      continue
    }
    const id = basename(file, '.json')
    for (const name of [doc.term, ...(doc.aliases || [])]) {
      if (typeof name !== 'string') continue
      const key = name.trim().toLowerCase()
      if (!index.has(key)) index.set(key, id)
    }
  }
}

const toId = (value) =>
  typeof value === 'string' ? index.get(value.trim().toLowerCase()) ?? value : value

export const reader = {
  name: '.json',
  ext: '.json',

  walk(root) {
    const files = walkDir(root)
    if (!files.length) throw new Error(`no .json records under ${root}`)
    buildIndex(files)
    return files
  },

  parse(file) {
    const doc = JSON.parse(readFileSync(file, 'utf8'))
    const fields = new Map()
    const nested = new Map()

    for (const [key, value] of Object.entries(doc)) {
      if (key === 'related' && Array.isArray(value)) {
        fields.set(key, JSON.stringify(value.map(toId)))
        continue
      }
      fields.set(key, JSON.stringify(value))

      const inner = new Map()
      const push = (k, v) => {
        const arr = inner.get(k) || []
        arr.push(JSON.stringify(v))
        inner.set(k, arr)
      }
      if (Array.isArray(value)) {
        for (const v of value) {
          if (!v || typeof v !== 'object') continue
          for (const [k, val] of Object.entries(v)) push(k, k === 'term' || k === 'to' ? toId(val) : val)
        }
      } else if (value && typeof value === 'object') {
        for (const [k, val] of Object.entries(value)) push(k, val)
      }
      if (inner.size) nested.set(key, inner)
    }

    // No record carries an `id` field: the filename IS the id, so the stem needs no
    // second opinion. Declaring one would also trip `filename-id-mismatch`, whose
    // stem comparison strips `.tres` rather than the reader's suffix.
    return { id: basename(file, '.json'), idDeclared: false, scriptClass: '', fields, nested }
  },
}
