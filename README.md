# Aten Inc — Website

Complete multi-page static site for ateninc.com. Light brand-aligned design with the Aten logo, AIWIZN-style portfolio thumbnails, a horizontal video scroller for talks and demos, the 9 Aten Approach pillars, and an interactive ROI calculator.

## What's included

```
aten-site/
├── index.html              ← Home (5-video scroller, 9 Aten Approach pillars, AIWIZN-style work grid)
├── portfolio.html          ← All 28 projects + clickable video lightbox
├── ai-analytics.html       ← Cerebrum & Cerebellum platforms
├── about.html              ← Mission, founders, advisors, awards
├── news.html               ← Speaking engagements w/ embedded videos (AI India 2026, EATS Madrid 2018, Gov. Perdue)
├── contact.html            ← Contact form + direct details
├── roi-calculator.html     ← Interactive 5-year ROI calculator
├── styles.css              ← Shared stylesheet
├── script.js               ← Shared JS
├── CNAME                   ← Custom domain (www.ateninc.com)
├── .gitignore
└── assets/
    ├── aten-logo.png
    ├── aten-logo-trans.webp
    └── thumbs/              ← 28 portfolio thumbnails (Vimeo + YouTube poster frames)
```

## Push to GitHub

The folder is already a git repo with commits ready. From your terminal:

```bash
cd aten-site
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

If you've already pushed once, a follow-up update is just:

```bash
git push
```

### Custom domain (`www.ateninc.com`)

The `CNAME` file is committed. DNS records needed at your registrar:

- 4 × `A` records on `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- 1 × `CNAME` record on `www` → `<YOUR-USERNAME>.github.io`

After DNS propagates (5 min – 1 hr): GitHub repo → **Settings → Pages → Check again** (turns green) → wait ~10 min for TLS cert → tick **Enforce HTTPS**.

## Local preview

```bash
cd aten-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Customizing later

- **Brand colors / fonts** — CSS variables at the top of `styles.css` (`--green`, `--teal`, `--display`, `--sans`)
- **Portfolio items** — `PORTFOLIO` array near the bottom of `portfolio.html`. Each item has a `slug` matching `assets/thumbs/<slug>.jpg`. To add a new project: drop the thumbnail in `assets/thumbs/` and add an entry to the array.
- **Featured videos on home** — the `.video-tile` blocks inside the "Watch · Talks & demos" section in `index.html`
- **Aten Approach pillars** — the `.pillar-grid` block inside section 02 of `index.html`
- **News timeline** — `<div class="news-item">` blocks in `news.html`
- **ROI assumptions** — the percentages in the `calc()` function in `roi-calculator.html`

After editing source files, just `git add . && git commit -m "..." && git push`. GitHub Pages rebuilds automatically.

## Notes

- Thumbnails are now **served locally** from `assets/thumbs/`. Originally hot-linked from `www.ateninc.com/img/...`, but those URLs broke after GitHub Pages took over the domain — now self-contained.
- The contact form opens the visitor's email client (`mailto:`). To collect submissions to a database instead, swap the form handler for [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/).
