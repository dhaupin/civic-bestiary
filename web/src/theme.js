/**
 * src/theme.js - the theme axis as data.
 *
 * The shell shipped two axes (light/dark plus a paint-scheme preset picker).
 * This site keeps one: the lexicon has a single palette, and a preset picker
 * would only offer palettes it does not use. THEME_KEY still comes from
 * site.config.js because the pre-paint bootstrap in index.html reads it.
 */
import site from './site.js'

export const THEME_KEY = site.theme.themeKey

// The one paper value per half - the only place the palette touches browser
// chrome (the theme-color meta / mobile URL bar). Keep in sync with the
// bootstrap in index.html and the --paper token in styles.css.
const PAPER = { dark: '#12100e', light: '#f4efe6' }

export function paperFor(light) {
  return light ? PAPER.light : PAPER.dark
}
