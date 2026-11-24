/**
 * components/Inline.jsx - render the lexicon's inline markdown.
 *
 * Entries carry `**term**` emphasis inside examples and `*(noun)*` prefixes on
 * some senses. Parsing the two cases here beats dangerouslySetInnerHTML and
 * keeps the data plain.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g

export default function Inline({ text }) {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}
