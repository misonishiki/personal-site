# Handoff — personal-site

**Starter for the next session (paste this):**

> `continue personal-site — I have the openLCA screen recording (or: skip it). Pending: embed the import clip in the LCI·GRAPH case study export section; footer email/LinkedIn TODOs still live. Optional: Slice 3 = GreenClaim case study.`

Context (as of 2026-09-22):

- **Live at https://alissa.ing** — deploy = push to `main` (Cloudflare, set up by the go-live wizard; env in `.scratch/personal-site-go-live/go-live.env`).
- **Site is dark-mode** (dark-first palette in `global.css`) and has a **lightbox** (vanilla JS in `Base.astro`: any `<figure><img>` expands on click, Esc/click closes).
- **LCI·GRAPH case study** (`src/pages/projects/lci-graph.astro`) is enriched: dark-mode UI snapshots, "From paper to database" section (real Table S6 from `~/Documents/lci-graph/labour/d0se00190b/d0se00190b1.pdf` p.S12 vs the extracted process), "Export to the tools you already use" section (JSON-LD snippet + an 8s export clip `export-openlca.mp4` recorded headlessly). Snapshots live in `public/snapshots/lci-graph/` and are reproducible: run the app on :8017, drive it with playwright-core + cached Chromium (`/private/tmp/bunker-pw/shot-lcigraph.js` pattern, NODE_PATH=`~/.hermes/hermes-agent/node_modules`).
- **Pending (user action)**: record the **openLCA import** screen recording (Cmd+Shift+5) — import `~/Documents/lci-graph/output/exports/lcigraph_CSTR_10_bar_openlca.zip` via File → Import → JSON-LD — then I embed it as the second clip in the export section.
- **Pending (user decision)**: footer email/LinkedIn are still `TODO` placeholders, visible live; give real values or say "remove them".
- **Astro gotcha learned**: spaces at line breaks around inline tags (`<a>`, `<strong>`, `<em>`) are stripped at build — keep the space on the same line as the tag. Trailing spaces at line end don't survive either.
- **Name is "Alissa Nicole"** everywhere (renamed from Nicolet 2026-09-22).
- **Workflow**: user sometimes self-edits in VS Code — only commit/push after confirming their saves landed (`git diff`), to avoid the unsaved-buffer merge dance.
- **Next slices**: openLCA clip embed; footer placeholders; then Slice 3 = GreenClaim case study (source material in `~/Documents/env_bussing`).
