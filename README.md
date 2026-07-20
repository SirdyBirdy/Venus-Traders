# Venus Traders — Website

Pune's stationery superstore since 1974. Family-run, three generations, six stores across the city.

This repo is a static site (plain HTML/CSS/JS, no build step) meant to be deployed on **Netlify**, connected to this **GitHub** repo for auto-deploys on push.

---

## File structure

```
├── index.html             Homepage — structure only, no copy
├── home-content.js         All homepage TEXT CONTENT + the script that injects it
├── corporate.html          Corporate enquiries page — structure only, no copy
├── corporate-content.js    All corporate-page TEXT CONTENT + the script that injects it
├── style.css               Master stylesheet — shared by every page on the site
└── README.md                This file
```

**The pattern for every page on this site:**

| File type | Purpose | Who typically edits it |
|---|---|---|
| `*.html` | Page structure/skeleton only — sections and empty containers with `id`s. No real copy lives here. | Developer |
| `*-content.js` | The actual words on that page (headings, paragraphs, store lists, form labels, etc.), plus a small `render...()` function that fills the HTML containers on load. | Anyone updating copy — no HTML/CSS knowledge needed |
| `style.css` | One shared stylesheet for the whole site — colors, fonts, layout, components. | Developer |

Adding a new page later (e.g. `about.html`) follows the same pattern: `about.html` + `about-content.js`, both linking the same `style.css`.

---

## Editing content (no code changes needed)

Almost all real content changes should only require editing a `*-content.js` file:

1. Open `home-content.js` (for the homepage) or `corporate-content.js` (for the corporate page).
2. Find the relevant field inside the `homeContent` / `corporateContent` object — e.g. `hero.lede`, `stores.list`, `faq.list`.
3. Edit the text between the quotes and save.
4. Commit and push — Netlify will redeploy automatically.

You should not need to touch `index.html`, `corporate.html`, or `style.css` for routine copy edits. Only touch those if you're changing layout, adding a new section, or restyling something.

### ⚠️ Placeholders

Anything written as `[Placeholder — ...]` or `[Confirm ...]` inside the content files is a gap waiting on real information from the Venus Traders family/team (e.g. exact store hours, a real family quote, corporate billing terms, testimonials). Search each `*-content.js` file for `[` to find every open item before launch. See the separate **content requirements doc** shared alongside this repo for the full checklist, organized by section.

### 📷 Photos

The site currently uses **dummy stock photos** (served from `picsum.photos`, a free placeholder-image service) in these spots, so the layout has real photo opportunities to review before launch:

- Homepage hero — one banner photo (`hero.photo` in `home-content.js`)
- Homepage "Our Story" section — one archival-style photo (`heritage.photo` in `home-content.js`)
- Homepage "Visit Us" — one thumbnail per store card (`stores.list[].photo` in `home-content.js`)
- Corporate page hero — one banner photo (`hero.photo` in `corporate-content.js`)

To swap in a real photo, replace the `src` value with the real image's URL (or a local path once real photos are added to the repo, e.g. `images/fc-road-storefront.jpg`) and update the `alt` text and caption to match. Every placeholder photo has an italic caption underneath it flagging that it's a dummy and needs replacing — remove the caption once a real photo is in place.

---

## Running locally

No build step, no dependencies. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder locally so relative paths behave exactly like production:
  ```bash
  npx serve .
  # or
  python3 -m http.server 8000
  ```

---

## Deploying (Netlify + GitHub)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → connect this GitHub repo.**
3. Build settings:
   - **Build command:** *(leave blank — there is no build step)*
   - **Publish directory:** `/` (the repo root)
4. Deploy. Every push to the connected branch will auto-redeploy.

---

## Adding a new inner page

1. Duplicate `corporate.html` as a starting skeleton (it already has the right nav/footer pattern).
2. Create a matching `pagename-content.js` file with a content object + a `renderPagename()` function, following the same structure as `home-content.js` / `corporate-content.js`.
3. Link the existing `style.css` — do not create a new stylesheet per page.
4. Add any new component styles needed to the bottom of `style.css`, grouped under a clear comment header (see the `/* ===== CORPORATE PAGE ===== */` section as an example).
5. Add a nav link to the new page in both `index.html` and `corporate.html` (and any other existing pages), plus the footer's `companyLinks` (or relevant list) in each page's content file.

**Note:** nav and footer markup are currently duplicated across each HTML file — fine for a small number of pages. If the site grows past a handful of pages, consider introducing a shared `partials.js` that injects nav/footer HTML into every page from one place, so link changes only need to happen once.
