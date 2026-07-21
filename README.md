# Golden Ridge Partners — "First Light" landing page

One-page landing for Golden Ridge Partners (goldenrp.land) — owner-financed
Florida land, founder-led by Juliana. Whole-page scroll-scrubbed sunrise film
(pre-dawn pine flatwoods → golden rays → sunrise flood), transparent sections
floating over it, sunrise preloader, hero fireflies. Every claim traces to the
live site: 0% interest, no banks, no credit checks, $249 flat doc fee,
Love It or Swap It 100-day guarantee, Putnam & Highlands counties.

No build step, no dependencies — plain HTML/CSS/JS.

```
npm start          # PORT-aware static server with HTTP Range support
```

## Docker

```
docker build -t goldenridge-landing .
docker run -p 3000:3000 goldenridge-landing
# or
docker compose up -d
```

Art direction in `docs/design-brief.md`; film prompts and job IDs in
`docs/asset-log.md`.
