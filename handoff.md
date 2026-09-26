# Handoff — personal-site

**Starter for the next session (paste this):**

> `continue personal-site — pending: embed the openLCA import clip (user records it) in the LCI·GRAPH export section; footer email/LinkedIn TODOs still live. Optional: Slice 3 = GreenClaim case study.`

Context (as of 2026-09-26, evening):

- **Case study restructured into two parts, live** (2026-09-26): Part 1 = the extraction pipeline (what has to survive extraction; the stack with a new color-coded pipeline diagram); Part 2 = the graph layer (technical rewrite: H1–H4 sub-claims, test setup, results + honest limits). New hand-authored dark-theme SVGs in `public/snapshots/lci-graph/`: `pipeline-stack.svg`, `graph-schema.svg` (v0 vocabulary), `magnet-mapping.svg` (study 34 in the vocabulary). "Client" scrubbed → "industrial" BoM throughout (confidentiality).
- **Live at https://alissa.ing** — deploy = push to `main` (Cloudflare, env in `.scratch/personal-site-go-live/go-live.env`).
- **Site is dark-mode** and has a **lightbox** (any `<figure><img>` expands on click). New: `code {}` inline-code style and `h3 {}` in `global.css`.
- **Pending (user action)**: record the **openLCA import** screen recording (Cmd+Shift+5) — import `~/Documents/lci-graph/output/exports/lcigraph_CSTR_10_bar_openlca.zip` via File → Import → JSON-LD — then embed as second clip in the export section.
- **Pending (user decision)**: footer email/LinkedIn are still `TODO` placeholders, visible live; give real values or say "remove them".
- **Astro gotcha**: spaces at line breaks around inline tags (`<a>`, `<strong>`, `<em>`) are stripped at build — keep the space on the same line as the tag.
- **Workflow**: user sometimes self-edits in VS Code — only commit/push after confirming their saves landed (`git diff`).
- **Next slices**: openLCA clip embed; footer placeholders; canonical-flows section once the matching-engine design lands (brainstorm handed off in `~/Documents/lci-graph/handoff.md`); then Slice 3 = GreenClaim case study (source material in `~/Documents/env_bussing`).
