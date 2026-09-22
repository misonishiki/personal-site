# personal-site

Alissa Nicole's portfolio — Astro static site, deployed to Cloudflare Pages.

## Stack

- **Astro** (static output, no server) — `npm run dev` / `npm run build`
- **Hybrid-minimal CSS** — hand-written, no framework (`src/styles/global.css`)
- **Deploy**: push to `main` on GitHub → Cloudflare Pages auto-builds
- **Analytics**: Cloudflare Web Analytics (cookieless)

## Structure

- `src/layouts/Base.astro` — shared shell (nav, footer, `<head>`)
- `src/pages/` — one file per URL (`index.astro` → `/`, `about.astro` → `/about`)
- `public/` — static assets (images, screen recordings, demo snapshots)

## Conventions

- Case studies live in `src/pages/projects/` as Markdown/Astro pages
- Interactive demos are **static snapshots only** (sandboxed iframes), never live backends
- Content language: English
