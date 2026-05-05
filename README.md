# Aten Inc — Website

Complete multi-page static site for ateninc.com. Light brand-aligned design featuring the Aten logo, AIWIZN-style portfolio thumbnails, a horizontal video scroller for talks and demos, and the 9 Aten Approach pillars.

## What's included

```
aten-site/
├── index.html              ← Home (with 5-video scroller, 9 Aten Approach pillars, AIWIZN-style work grid)
├── portfolio.html          ← All 28 projects + clickable video lightbox
├── ai-analytics.html       ← Cerebrum & Cerebellum platforms
├── about.html              ← Mission, founders, advisors, awards
├── news.html               ← Speaking engagements w/ embedded videos (AI India Impact 2026, EATS Madrid 2018, Gov. Perdue)
├── contact.html            ← Contact form + direct details
├── roi-calculator.html     ← Interactive 5-year ROI calculator
├── styles.css              ← Shared stylesheet
├── script.js               ← Shared JS
├── CNAME                   ← Custom domain (www.ateninc.com)
├── .gitignore
└── assets/
    ├── aten-logo.png
    └── aten-logo-trans.webp
```

A git repo is already initialized with a clean initial commit. Just add a remote and push.

## Deploy to GitHub Pages — push it now

The folder is already a git repo with one commit ready. From your terminal:

```bash
# 1. Go to the folder
cd aten-site

# 2. Create a new repo on GitHub:
#    https://github.com/new
#    name it something like "ateninc-website" (public)
#    DO NOT initialize with README, .gitignore, or license — we already have a commit

# 3. Add the remote and push (replace <YOUR-USERNAME> and <REPO-NAME>)
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main

# 4. Enable Pages
#    Settings → Pages → Source: "Deploy from a branch" → Branch: main → Folder: / (root) → Save
```

Site goes live at `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/` within a minute or two.

### Don't have git installed / prefer to skip the CLI

1. Create the repo on GitHub: <https://github.com/new>
2. On the new repo page, click **Add file → Upload files**
3. Drag the **contents** of the `aten-site/` folder in (incl. the `assets/` folder)
4. Commit
5. Settings → Pages → Source: branch `main`, folder `/ (root)`, Save

### Custom domain (`www.ateninc.com`)

The `CNAME` file is already in the repo, so step 1 below is already done. You only need to update DNS:

1. ✅ `CNAME` file is committed with `www.ateninc.com`
2. At your DNS provider, add:
   - 4 × `A` records on `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 × `CNAME` record on `www` → `<YOUR-USERNAME>.github.io`
3. Back in GitHub: **Settings → Pages → Enforce HTTPS** ✓

DNS propagation can take up to an hour.

## Local preview

```bash
cd aten-site
python3 -m http.server 8000
# open http://localhost:8000
```

(Or just open any `.html` file directly — they're fully self-contained with inlined CSS/JS/logo, so they work without a server too.)

## Customizing later

- **Brand colors / fonts** — CSS variables at the top of `styles.css` (`--green`, `--teal`, `--display`, `--sans`)
- **Portfolio items** — `PORTFOLIO` array near the bottom of `portfolio.html`
- **Featured videos on home** — the `.video-tile` blocks inside the "Watch · Talks & demos" section in `index.html`
- **Aten Approach pillars** — the `.pillar-grid` block inside section 02 of `index.html`
- **News timeline** — `<div class="news-item">` blocks in `news.html`
- **ROI assumptions** — the percentages in the `calc()` function in `roi-calculator.html`

After editing the source files (`styles.css`, `script.js`, individual HTML files), you don't need to re-run any build step. Just commit and push.

## Notes

- Portfolio thumbnail images and the Madrid talk video are hot-linked from `www.ateninc.com/img/...` and YouTube respectively. The site stays fully functional as long as those sources exist. To make it 100% self-contained, download the `/img/` directory from ateninc.com into `assets/portfolio/` and update the paths.
- The contact form opens the visitor's email client (`mailto:`). To collect submissions to a database instead, swap the form handler for [Formspree](https://formspree.io), [Netlify Forms](https://www.netlify.com/products/forms/), or your own endpoint.
