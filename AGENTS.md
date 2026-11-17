## Working style (added 2026-11-17 after user called out slowness)

For small changes on this site: **edit → build → screenshot, no sightseeing.**

- Don't re-explore the codebase for a two-file change — the structure is known (pages in `src/pages/`, layout in `src/layouts/Base.astro`, styles in `src/styles/global.css`).
- Don't search for browser/tool signatures you already have — open the URL and screenshot in one call.
- Never leave a hanging promise (`await new Promise(()=>{})`) in an execute block — it freezes the step until it's killed.
- Keep narration minimal; the user watches this happen live and notices dead time.
- **No em-dashes in site copy** (user rule, 2026-11-17). Use colons, commas, or full stops. (The `<title>` convention "X — Alissa Nicole" is exempt: site-wide pattern.)

## Glossary system (added 2026-11-17)

Definitions live ONLY in `src/data/glossary.js`. `/glossary` renders from it; `src/components/GlossaryCat.astro` (included in Base) powers the cat tooltips. Mark a term anywhere with `<span class="term" data-term="EPD">EPD</span>` (data-term must match a key in glossary.js). Marking convention (user-confirmed 2026-11-17): FIRST occurrence per page only, never inside links or headings. Desktop: hover raises the tooltip; touch: tap opens the bottom-right panel. Cat image: `public/cat.png` (change `CAT_SRC` in the component to swap).

## Case-study pages (convention since 2026-11-17)

All case studies use `src/layouts/CaseStudy.astro`, never Base directly. The layout provides: standardized backlink, h1/tagline from props, an optional `slot="tldr"` TL;DR box, and an auto-generated pinned scroll-spy ToC (built from `h2[id]` at runtime; use `data-toc="short label"` for long headings; needs 4+ sections to appear; mobile gets a "Contents" bottom-sheet toggle). To add a project: create the page, wrap in CaseStudy, write h2 sections. Do NOT hand-write ToC markup, backlinks, or h1s.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
