// poststruct.config.mjs - what the artifact audit is armed with.
//
// poststruct owns the head/site/links/i18n/a11y/language contract; this file
// only points it at our tree and adds our own verifiers. Run it with
// `npm run audit` (which builds first) or `npx poststruct audit web/dist`.
export default {
  dir: 'web/dist',

  // Our shape pack (packstruct SPEC v1, check profile). Adding a pack here IS
  // the arm - there is no separate enable step.
  packs: ['./packs/public/bestiary-shapes'],

  language: {
    // The prose of record is the records, not the generated markdown: grade
    // data/ so a dash or cliche is caught where it is authored.
    textDirs: ['data'],
  },
}
