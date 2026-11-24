/** AppLayout - the shell layout (no BrowserRouter ever in this file). */
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { mountIslands } from './islands.js'
import { islands } from './AppIslands.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Guide from './pages/Guide.jsx'
import Species from './pages/Species.jsx'
import Contribute from './pages/Contribute.jsx'
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

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/chapters/:chapter" element={<Guide />} />
          {/* a kind's front door: /species/ /moves/ /abilities/ /habitats/ /buffs/ /fallacies/ */}
          <Route path="/species" element={<Guide />} />
          <Route path="/moves" element={<Guide />} />
          <Route path="/abilities" element={<Guide />} />
          <Route path="/habitats" element={<Guide />} />
          <Route path="/buffs" element={<Guide />} />
          <Route path="/fallacies" element={<Guide />} />
          <Route path="/species/:slug" element={<Species />} />
          <Route path="/moves/:slug" element={<Species />} />
          <Route path="/abilities/:slug" element={<Species />} />
          <Route path="/habitats/:slug" element={<Species />} />
          <Route path="/fallacies/:slug" element={<Species />} />
          <Route path="/buffs/:slug" element={<Species />} />
          <Route path="/contribute" element={<Contribute />} />
          {/* one Route per ssr.config.js entry; species routes share this one */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
