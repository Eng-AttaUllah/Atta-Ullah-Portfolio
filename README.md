# Atta Ullah — Portfolio

**Open the website → https://eng-attaullah.github.io/Atta-Ullah-Portfolio/**

A dark, editorial portfolio for **Atta Ullah** — AI & software engineer, BS Computer Science
(Artificial Intelligence) at AWKUM.

Built with **React 19 + TypeScript + Vite 8 + Tailwind CSS v4**, with `motion` for animation,
Lenis for smooth scrolling, and self-hosted fonts.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Pages

| Route | Contents |
|---|---|
| `/` | Hero, selected work (stacked cards), about bento, journey timeline, credentials, contact |
| `/work` | Filterable project index |
| `/work/:slug` | Case study — overview, metrics, highlights, pipeline, links |
| `/resume` | Editorial résumé with print + PDF download |
| `*` | 404 |

## Edit content

All copy lives in `src/data/` — components don't need to change for content updates.

| File | Contains |
|---|---|
| `src/data/site.ts` | Name, role, location, socials, stats, nav, skills, marquee |
| `src/data/about.ts` | Bio, education, timeline, certifications, languages |
| `src/data/projects.ts` | Projects, case-study copy, metrics, pipeline, links |

### Assets

| File | Used by |
|---|---|
| `public/profile-cutout.webp` | Hero portrait (transparent, derived from `profile.png`) |
| `public/resume/Atta-Ullah-Resume.pdf` | Download CV buttons + résumé page |
| `public/og.png` | Open Graph / Twitter preview (1200 × 630) |
| `public/favicon.svg` | Browser tab icon |

## Design notes

- **Palette:** obsidian `#08090a`, warm ivory `#f2f0ea`, acid lime `#d7ff3e`
- **Type:** Space Grotesk (display), Instrument Serif (accents), Inter (body),
  JetBrains Mono (labels) — all self-hosted via Fontsource
- **Motion:** scroll reveals, sticky stacked project cards, magnetic buttons, cursor glow,
  marquee, orbit badge — all disabled under `prefers-reduced-motion`
- **Posters:** every project gets a generated CSS/SVG poster, so no screenshots are required

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. The workflow reads the correct `base` path from `actions/configure-pages`, so the
same code works on a project page (`/repo-name/`) or a user site.

Enable **Settings → Pages → Build and deployment → Source: GitHub Actions** once.

The build also writes `dist/404.html`, so direct links to `/work/:slug` survive a refresh on
GitHub Pages.

For local production builds under a sub-path:

```bash
VITE_BASE=/my-repo/ VITE_SITE_URL=https://example.com/my-repo/ npm run build
```

`VITE_BASE` controls asset and router paths; `VITE_SITE_URL` is used for the canonical link and
absolute Open Graph image URL (the Pages workflow fills it in automatically).
