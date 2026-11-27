/**
 * components/Inline.jsx - render the lexicon's inline markdown.
 *
 * Entries carry `**term**` emphasis inside examples and `*(noun)*` prefixes on
 * some senses; posts add `[label](/path/)` links, because a note that argues
 * about an entry should be able to reach it from the sentence. A link target
 * that starts with http is another site and opens as one; anything else is a
 * route. Parsing the three cases here beats dangerouslySetInnerHTML.
 */
import { Link } from 'react-router-dom'

const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

export default function Inline({ text }) {
  return text.split(TOKEN).map((part, i) => {
    const link = LINK.exec(part)
    if (link && link[2].startsWith('http')) {
      return <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>
    }
    if (link) return <Link key={i} to={link[2]}>{link[1]}</Link>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}
