# Handoff — personal-site

**Starter for the next session (paste this):**

> `continue personal-site — next: fill the TODO email/LinkedIn placeholders in src/layouts/Base.astro, push main (deploys to alissa.ing via Cloudflare). Optional: Slice 3 = GreenClaim case study page (same shape as src/pages/projects/lci-graph.astro).`

Context (as of 2026-09-22):

- **Slice 1 done**: real homepage (self-select hero, LCI·GRAPH + GreenClaim project rows, scop3 writing link) and real About page (customer → methodology expert → PO arc, working principles). Build green.
- **Slice 2 done**: LCI·GRAPH case study at `src/pages/projects/lci-graph.astro` — problem / what it does / three design decisions / status, with 4 real static snapshots in `public/snapshots/lci-graph/` (captured from the local app via headless Chromium; Graph Review tab shot dropped, its API call failed). Homepage row now links to it. Figure/backlink styles added to `global.css`. Build green, render-verified headlessly.
- **Locked contact decisions**: no employer name on the site; no GitHub link; scop3 Substack linked (de-pseudonymizes badtr4der — intentional); email + LinkedIn are `TODO` placeholders in `src/layouts/Base.astro`.
- **Go-live wizard DONE 2026-09-22** (`.scratch/personal-site-go-live/go-live.env`): domain `alissa.ing`, GitHub repo `misonishiki/personal-site`, Cloudflare Pages connected — the site is LIVE at https://alissa.ing. Deploy = push to `main`.
- **Pending**: email + LinkedIn `TODO` placeholders in `src/layouts/Base.astro` (visible in the live footer!); Slice 2 commit is local, needs a push to deploy.
- **Next slices**: fill placeholders + push; then Slice 3 = GreenClaim case study if wanted.
