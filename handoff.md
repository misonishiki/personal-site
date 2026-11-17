# Handoff — personal-site

**Starter for the next session (paste this):**

> `continue personal-site — pending: record the EoL Fixer walkthrough video (real tool, narrated, features list = shot list; placeholder on /work/eol-fixer); decide fate of /projects/bunker (live but unlinked since 2026-11-17 homepage trim); openLCA import clip still unrecorded; GreenClaim case study still unwritten. Housekeeping: 3CeT INIES link due Mar 2027, Mermet Jan 2027.`

Context (as of 2026-11-17, late evening):

- **CaseStudy layout** (`src/layouts/CaseStudy.astro`): all 7 case studies migrated. Auto ToC from h2[id] (4+ sections, `data-toc` for short labels), mobile Contents bottom-sheet, standard backlink. Convention recorded in AGENTS.md. New pages: wrap in CaseStudy, write h2s, done.
- **Glossary system**: defs ONLY in `src/data/glossary.js` (user adds terms herself); `src/components/GlossaryCat.astro` in Base does the tooltips; mark with `<span class="term" data-term="...">`, FIRST occurrence per page only, never in links/headings. Cat = `public/cat.png` (v3: grey professor, thumbs up + star; Vision-cutout via swift scripts in /tmp pattern, artifacts erased by hand). Desktop: half-cut peeker + bubble right; mobile: slanted edge-peek + bubble left. Panel × button is display:none until open (leak bug fixed).
- **Astro space-eating gotcha**: spaces before inline tags at line breaks get stripped. Scanner one-liner in session history (checks for `<span class="term"` at line start after word-ending lines). Run it after marking terms.
- **Homepage**: Professional Play 🧐 / Leisure Play 🕹️ sections, arrows before project titles (CSS ::before), nav is Projects/EPDs/Glossary/About, "Sponsor my AI habits" (Wise link only, BTC dropped), tagline = creative path of least resistance. Writing section kept on homepage.
- **Employer de-named**: "the company I work at" everywhere; tool is "EoL Fixer" publicly (never the internal name).
- **3CeT row** on /epds: "Coming soon (Mar 2027)", needs the INIES link when published.
- **Time claim**: 70% everywhere (80h → 24h).

Context (as of 2026-11-17, big ship day — commit 6884d33, all live on alissa.ing):

- **Work section on homepage** (above Projects): The EoL Fixer + The EoL Report Writer, one-sentence entries. Projects order: LCI·GRAPH, Paper Trail, Radar, PORTFARMLIO. New tagline (laziness + creativity). About page user-edited (methodological whisperer, senior).
- **Public name is "EoL Fixer"**, never the internal tool name (URL guessability: tech fold says "a small cloud host", no Render mention). Real app's auth status on Render still unchecked, worth 2 minutes.
- **/work/eol-fixer** — full case study: problem/constraints/features/receipts/design decisions + folded tech details with automatching explanation and diagram. **Video placeholder pending** — she records a narrated real-tool walkthrough; Features list is the shot list. Pixel-review for client names before embedding.
- **/work/eol-report-writer** — contract-driven report assembly (tables verbatim, fact-ID citation, AI never computes), flow diagram. Thesis line: "The engine decides, the prose arranges."
- **/epds** — published-EPD table (Hunter Douglas x4 via EPD Global, Ubbink + Mermet SAS via INIES with "Coming soon (Jan 2027)"), Craziness column (easy / [unnamed middle] / CRAZY), EoL Fixer credit paragraph.
- **PORTFARMLIO** — case study + two frozen browsable snapshots (/portfarmlio/ and /portfarmlio/garden.html, animations disabled for speed, tooltips work) + garden walkthrough video (MP4, 712KB; GIF was 9x heavier). Fly.io deployment kit (Dockerfile, fly.toml, start.sh, --host patch) sits UNUSED in ~/Documents/trade_bot/trading_platform, she declined the ~$2-3/mo.
- **paper-trail** — TL;DR box (practitioner formula: problem, mechanism, why it works, governance; .tldr style in global.css, reusable), "What I tried" table (prompt-stuffing / RAG / one-context / curated+section-addressed). Time claim aligned site-wide to **70%** (80h → 24h on paper-trail; 70% on fixer, epds, homepage).
- **lci.alissa.ing linked** from the lci-graph page (tagline + magnet section).
- **Style rules now in AGENTS.md:** no em-dashes in site copy (title props exempt); pace rule (edit, verify, show, no sightseeing). Astro gotcha still live: spaces before inline tags at line breaks get eaten ("asidecar" bug), scan with the python one-liner in session history.
- **Bunker page** (/projects/bunker) is live but unlinked from the homepage; radar + paper-trail linked. October case studies finally deployed this push.
