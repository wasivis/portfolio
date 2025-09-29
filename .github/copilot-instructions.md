## Quick orientation

<<<<<<< HEAD
- Project type: React app created with Create React App (`react-scripts`). See `package.json` scripts: `start`, `build`, `test`, and `deploy` (uses `gh-pages`).
- Main entry: `src/index.js` -> `src/App.js`. Routes are mounted with a `basename` of `/portfolio` (see `App.js`).

## Where to look first (fast path)
- `package.json` — dependencies, scripts and `homepage` (GH Pages). Useful commands: `npm start`, `npm run build`, `npm run deploy`.
- `public/index.html` — global tags and third-party CDNs are injected here (Leaflet CSS/JS and emailjs are loaded via CDN and initialized).
- `src/components/Projects/index.js` — data-driven slideshow; reads `src/data/portfolio.json` and uses `process.env.PUBLIC_URL + cover` for project images.
- `src/components/Contact/index.js` — integrates Leaflet map and EmailJS; contains service/template/user IDs (sensitive) and uses `react-leaflet`/`leaflet` API.
- `src/components/Sidebar/index.js` and `src/components/Layout/index.js` — site chrome and routing layout; mobile nav is toggled via local state and CSS classes.

## Big-picture architecture & patterns
- Single-page React site with per-component SCSS: each component folder contains an `index.js` and `index.scss` (e.g. `src/components/About/`, `src/components/Projects/`).
- Data-driven pieces: project list and images are driven by `src/data/portfolio.json`. Covers (thumbnails) point to `public/portfolio/*` and are consumed via `process.env.PUBLIC_URL`.
- Assets split:
  - Public/static assets (served as-is): `public/portfolio/*`, `public/*` — used by `portfolio.json` covers.
  - Source assets (imported/required): `src/assets/images/*` — used with `require()` in components (see `Contact/index.js` for map icon).
- Third-party integrations:
  - Leaflet: CSS/JS included in `public/index.html` via CDN. `react-leaflet` and `leaflet` are also listed in `package.json`.
  - EmailJS: `@emailjs/browser` is in `package.json` and `public/index.html` initializes `emailjs` with a user key; `Contact` uses `emailjs.sendForm(...)` with a service/template id.

## Developer workflows & commands
- Run locally (dev server):

  npm install
  npm start

- Build for production (creates `build/`):

  npm run build

- Deploy to GitHub Pages (repo homepage set in `package.json`):

  npm run deploy

- Tests: `npm test` (uses `react-scripts test`).

Notes: `Routes` in `App.js` are created with basename `/portfolio`. When previewing `build/` or deploying, ensure the app is served at that path (GitHub Pages uses the `homepage` value).

## Project-specific conventions agents must follow
- Edit components together with their SCSS file. Example: if changing `src/components/Projects/index.js`, also update `src/components/Projects/index.scss`.
- Image paths in `portfolio.json` are relative to the public root and are referenced with `process.env.PUBLIC_URL + cover`. Do not move those cover images without updating `portfolio.json`.
- The sidebar uses CSS classes `mobile-show` / `mobile-closed` to control mobile nav visibility. Changing those class names requires updating `src/components/Sidebar/index.scss` accordingly.
- Map icon: `Contact/index.js` calls `new L.Icon({ iconUrl: require('../../assets/images/icon-map.png') })`. Use `require()` or standard imports for images kept under `src/assets`.

## Sensitive / noteworthy details
- EmailJS service/template/user IDs are present in the code (`Contact/index.js` and `public/index.html`). Treat them as sensitive; avoid leaking them in public patches. If you need to update them, prefer using environment variables.
- Leaflet CSS and JS are included from CDN in `public/index.html`. This is intentional — any edits to Leaflet usage should check both the CDN tags and package imports.

## Quick examples & code snippets to reference
- Projects image lookup: `src/components/Projects/index.js` uses

  process.env.PUBLIC_URL + portfolioData.portfolio[currentSlide].cover

- Contact email send: `src/components/Contact/index.js` uses

  emailjs.sendForm('service_xxx','template_xxx', form.current, 'user_xxx')

Search for these tokens to find integration points: `PUBLIC_URL`, `emailjs`, `leaflet`, `portfolio.json`, `gh-pages`.

## Typical small tasks and where to make changes
- Add a project: update `src/data/portfolio.json` (title, description, `cover` path in `public/portfolio/*`) and optionally add images to `public/portfolio/<project>/`.
- Change map location or popup text: edit `src/components/Contact/index.js` (center coords and `info-map` text).
- Fix routing or navigation labels: edit `src/components/Sidebar/index.js` and `src/App.js` (note `basename`="/portfolio").

## When you need to run tests or builds in CI
- CI should run `npm ci` (or `npm install`) then `npm run build` to validate production build. For deploy steps, run `npm run deploy` but ensure GH auth/permissions are configured in CI.

If anything above is unclear or you want more detail (for example: exact CSS class locations, a short list of first files to open, or to switch EmailJS to env vars), tell me which section to expand and I'll iterate.
=======
- Project: Single-page React app created with Create React App (react-scripts). Primary scripts in `package.json`: `start`, `build`, `test`, `deploy` (uses `gh-pages`).
- Main entry: `src/index.js` -> `src/App.js`. Routes are mounted with a `basename` of `/portfolio` (see `src/App.js`).

## Fast path — where to look first

- `package.json` — scripts, `homepage` (GH Pages), and dependencies (look for `react-leaflet`, `leaflet`, `@emailjs/browser`, `gh-pages`).
- `public/index.html` — global tags and third-party CDN includes (Leaflet CSS/JS and emailjs initialization live here).
- `src/components/Projects/index.js` — slideshow that reads `src/data/portfolio.json` and resolves images with `process.env.PUBLIC_URL + cover`.
- `src/components/Contact/index.js` — Leaflet map + EmailJS usage (contains hard-coded service/template/user ids; sensitive).
- `src/data/portfolio.json` — canonical project list (titles, descriptions, `cover` paths that map to `public/portfolio/*`).
````instructions
## Quick orientation

- Project: Single-page React app created with Create React App (`react-scripts`). Primary scripts in `package.json`: `start`, `build`, `test`, `deploy` (uses `gh-pages`).
- Main entry: `src/index.js` -> `src/App.js`. Routes are mounted with a `basename` of `/portfolio` (see `src/App.js`).

## Fast path — where to look first

- `package.json` — scripts, `homepage` (GH Pages), and dependencies (look for `react-leaflet`, `leaflet`, `@emailjs/browser`, `gh-pages`).
- `public/index.html` — global tags and third-party CDN includes (Leaflet CSS/JS and emailjs initialization live here).
- `src/components/Projects/index.js` — slideshow that reads `src/data/portfolio.json` and resolves images with `process.env.PUBLIC_URL + cover`.
- `src/components/Contact/index.js` — Leaflet map + EmailJS usage (contains hard-coded service/template/user ids; sensitive).
- `src/data/portfolio.json` — canonical project list (titles, descriptions, `cover` paths that map to `public/portfolio/*`).

## Big-picture architecture & patterns (discoverable)

- Structure: small component-per-folder pattern. Each component typically contains `index.js` and `index.scss` (e.g. `src/components/About/`, `Projects/`, `Contact/`).
- Styling: SCSS per-component; changes to UI almost always require updating the sibling `index.scss`.
- Assets: two kinds
  - Public/static: `public/portfolio/*` and `public/*` — referenced at runtime via `process.env.PUBLIC_URL` (used by `portfolio.json`).
  - Source assets: `src/assets/...` — imported/required inside JS (example: map icon in `src/components/Contact/index.js` uses `require('../../assets/images/icon-map.png')`).
- Routing & deployment: `App.js` uses `basename='/portfolio'`. The app expects to be hosted at that path (GH Pages uses `homepage` to configure this). Check `homepage` in `package.json` when changing routing or previewing `build/`.

## Integration points & external dependencies

- Leaflet: CSS/JS are added via CDN tags in `public/index.html` (intentional). `react-leaflet` and `leaflet` are also installed; edits should verify both CDN includes and package usage.
- EmailJS: `@emailjs/browser` used in `src/components/Contact/index.js`; `public/index.html` contains an `emailjs.init(...)` call. Service/template/user IDs are present in source — treat as secrets.
- Image loading for portfolio items: `src/components/Projects` resolves `cover` from `src/data/portfolio.json` with `process.env.PUBLIC_URL + cover`. Do not move images out of `public/portfolio/*` unless you update `portfolio.json` accordingly.

## Developer workflows & useful commands (Windows PowerShell examples)

Run dev server

```powershell
npm install
npm start
```

Build for production

```powershell
npm run build
```

Deploy to GitHub Pages

```powershell
npm run deploy
```

Run tests

```powershell
npm test
```

CI guidance: use `npm ci` then `npm run build`. Ensure GH Pages credentials/permissions are available before `npm run deploy`.

## Project-specific conventions agents must follow

- Component edits: change `index.js` and the sibling `index.scss` together. Most visual behavior is controlled by those two files.
- Image paths in `src/data/portfolio.json` are relative to the public root and consumed with `process.env.PUBLIC_URL`. Example: `process.env.PUBLIC_URL + portfolioData.portfolio[currentSlide].cover` in `src/components/Projects/index.js`.
- Map icon is required from source assets: `new L.Icon({ iconUrl: require('../../assets/images/icon-map.png') })` in `src/components/Contact/index.js` — keep that pattern for icons under `src/assets/images`.
- Mobile nav uses CSS classes `mobile-show` / `mobile-closed` in `src/components/Sidebar/index.scss`. If you rename classes, update the component and styles together.

## Sensitive/noteworthy details (do not leak)

- EmailJS keys (service/template/user IDs) appear in `public/index.html` and `src/components/Contact/index.js`. Treat as secrets. Prefer replacing them with environment variables (example: `REACT_APP_EMAILJS_USER`) and update `public/index.html`/components accordingly.
- Leaflet is intentionally loaded from CDN in `public/index.html`. Removing the CDN requires ensuring package-based imports still provide CSS and JS behavior.

## Small, discoverable examples

- Projects image lookup: `src/components/Projects/index.js`

  process.env.PUBLIC_URL + portfolioData.portfolio[currentSlide].cover

- Contact email send: `src/components/Contact/index.js`

  emailjs.sendForm('service_xxx','template_xxx', form.current, 'user_xxx')

## Quick contract for common tasks

- Add a project: update `src/data/portfolio.json` (title, description, `cover` path to `public/portfolio/<project>/...`) and add images under `public/portfolio/<project>/`.
- Change map location: edit `src/components/Contact/index.js` (center coords and `info-map` text).

## Edge cases to watch for

- Broken images: if `process.env.PUBLIC_URL + cover` doesn't resolve, confirm file exists in `public/portfolio/*` and path in `portfolio.json` is correct.
- Map fails to load: CDN blocked or removed — check `public/index.html` and ensure `react-leaflet` usage matches available Leaflet CSS/JS.
- Email sending fails: keys in `public/index.html` or `Contact/index.js` may be invalid/expired.

If anything above is unclear or you want a different level of detail (for example: a list of first 5 files to open, or converting EmailJS keys to env vars), tell me which section to expand and I'll iterate.
````instructions
