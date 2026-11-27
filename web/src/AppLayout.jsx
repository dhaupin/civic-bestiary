/** AppLayout - the shell layout (no BrowserRouter ever in this file). */
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { mountIslands } from './islands.js'
import { islands } from './AppIslands.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import Home from './pages/Home.jsx'
import Guide from './pages/Guide.jsx'
import Species from './pages/Species.jsx'
import { kindsList } from './lexicon.js'
import Latest from './pages/Latest.jsx'
import Post from './pages/Post.jsx'
import Contribute from './pages/Contribute.jsx'
import About from './pages/About.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' })
    const t = setTimeout(() => mountIslands(islands), 0)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}

/**
 * The prerendered HTML is the first paint, and only the first paint. Keying the
 * router on the pathname throws the matched view away on every navigation, so
 * state that belongs to one view - the search string, the letter filter, the
 * sort - cannot follow the reader to the next one, and a view can never be
 * stuck showing what the prerender baked. A hard load still gets the baked
 * page; a click always gets a fresh mount.
 */
function RoutedViews() {
  const { pathname } = useLocation()
  return (
    <Routes key={pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/chapters/:chapter" element={<Guide />} />
          {/* one front door and one entry route per kind, derived from the schema:
              adding a kind is a data change, not an edit to this file */}
          {kindsList.map((kind) => (
            <Route key={kind.id} path={kind.path.replace(/\/$/, '')} element={<Guide />} />
          ))}
          {kindsList.map((kind) => (
            <Route
              key={`${kind.id}-entry`}
              path={`${kind.path.replace(/\/$/, '')}/:slug`}
              element={<Species />}
            />
          ))}
          <Route path="/latest" element={<Latest />} />
          <Route path="/latest/:slug" element={<Post />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* one Route per ssr.config.js entry; species routes share this one */}
          <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <RoutedViews />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  )
}
