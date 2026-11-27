/**
 * components/Email.jsx
 * ====================
 * An address the edge will not rewrite. Cloudflare's email obfuscation matches
 * an address in the HTML source and swaps it for "[email protected]", which is
 * fine in a blog post and wrong on a legal page: the notice has to print, copy,
 * and read correctly without JavaScript.
 *
 * Splitting the local part, the at sign, and the domain into separate text
 * nodes keeps the rendered text intact and gives the pattern nothing to match.
 */
export default function Email({ user, domain }) {
  return (
    <span className="email">
      <span>{user}</span>
      <span>@</span>
      <span>{domain}</span>
    </span>
  )
}
