/**
 * components/Inline.jsx - render the lexicon's inline markdown.
 *
 * Entries carry `**term**` emphasis inside examples and `*(noun)*` prefixes on
 * some senses; posts add `[label](/path/)` links, because a note that argues
 * about an entry should be able to reach it from the sentence. Parsing the
 * three cases here beats dangerouslySetInnerHTML and keeps the data plain.
 */
import { Link } from 'react-router-dom'

const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

export default function Inline({ text }) {
  return text.split(TOKEN).map((part, i) => {
    const link = LINK.exec(part)
    if (link) return <Link key={i} to={link[2]}>{link[1]}</Link>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}
