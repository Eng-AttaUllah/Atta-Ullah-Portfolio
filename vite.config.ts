import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replaces %SITE_URL% in index.html with the deployed origin, so social
// crawlers get an absolute og:image URL. Falls back to the site root locally.
function siteUrl(): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      const url = process.env.VITE_SITE_URL || '/'
      return html.replaceAll('%SITE_URL%', url.endsWith('/') ? url : `${url}/`)
    },
  }
}

// VITE_BASE lets the GitHub Pages workflow deploy under /<repo-name>/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss(), siteUrl()],
})
