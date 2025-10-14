# Copilot instructions — Cashvelo (capstone-frontend)

Purpose: give AI coding agents the specific, discoverable knowledge needed to quickly make safe, useful changes in this repository.

- Short summary
  - Single-page React app built with Vite + Tailwind. No React Router: navigation is done by App.jsx using a `currentPage` state and `setCurrentPage` callbacks passed to components.
  - Firebase is used for Google auth (see `src/firebase.js`). The app also uses an Express backend for email/password auth (calls to `http://localhost:3000/api` in `src/pages/Login.jsx` and `src/components/SignUp.jsx`).

- Key files to read first
  - `src/App.jsx` — central routing/navigation (controls which page renders via `currentPage`).
  - `src/firebase.js` — Firebase initialization and exported `auth` + `googleProvider`.
  - `src/pages/Login.jsx`, `src/components/SignUp.jsx` — two auth flows; note `API_URL` and localStorage usage.
  - `src/pages/*` and `src/components/*` — UI is component-driven, with `layout/` and `ui/` subfolders for common pieces.
  - `src/styles/styles.css` and `src/styles/HomePage.css` — global and page-scoped CSS; many components use Tailwind utility classes.

- Big-picture architecture / data flow
  - Frontend is a Vite-powered SPA. `App.jsx` mounts a single React tree and switches views by changing `currentPage` rather than using a router.
  - Authentication: two parallel approaches
    - Firebase for social sign-in (Google popup/redirect) — see `signInWithPopup`, `signInWithRedirect`, `getRedirectResult` in `src/pages/Login.jsx`.
    - Express backend (local dev API at `http://localhost:3000/api`) for traditional email/password sign-up and login; responses store `authToken` and `user` in `localStorage`.
  - Local state + persistence: auth metadata stored in `localStorage` under keys `authMethod`, `authToken`, and `user` — search for these keys when changing auth behavior.

- Developer workflows (commands)
  - Install deps: `npm install` (package.json already lists `vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`, `firebase`, `react`, `react-dom`).
  - Local dev server: `npm run dev` (starts Vite dev server).
  - Build for production: `npm run build` then `npm run preview` to locally preview the build.
  - Backend: this repo expects a separate backend (see README link to `lc6003/capstone-backend`). The frontend uses `API_URL = "http://localhost:3000/api"` in `Login.jsx` and `SignUp.jsx` — update when backend host or path changes.

- Project-specific conventions & patterns
  - No router: create new pages in `src/pages/` and import them into `App.jsx`; add `if (currentPage === 'yourpage') return <YourPage />` or extend the switch logic.
  - UI primitives: small reusable controls live in `src/components/ui/` (e.g., `Button.jsx`, `InputField.jsx`). Use those for consistent styling.
  - Layout components: `src/components/layout/Navbar.jsx` and `Footer.jsx` are intended to be reused across pages.
  - Styling: mix of Tailwind utility classes and raw CSS files under `src/styles/`. Prefer Tailwind classes for new components unless a new CSS file is required.
  - Assets: images referenced with root-relative paths like `/cat-envelope.jpg` or `/images/cashcat.png` — place new static assets in `public/`.

- Integration and external dependencies (what to watch for)
  - Firebase config is checked in at `src/firebase.js`. Be cautious when adding or rotating keys; prefer environment variables for new secrets.
  - Express backend endpoints are hard-coded via `API_URL` in auth components. Search for `API_URL` if changing API host.
  - Some code relies on browser localStorage for auth flow (no central auth context/provider). If you refactor to use Context or Router, update all call sites that read/write `localStorage`.

- Concrete examples (copy/paste safe) — change backend host
  - In `src/pages/Login.jsx` and `src/components/SignUp.jsx` update the top-level `const API_URL = "http://localhost:3000/api"` to point to your backend (or wire it to an env var). After changing, test: run backend + `npm run dev` then try login/signup flows.

- Adding a new page (pattern)
  1. Create `src/pages/MyNewPage.jsx` exporting a default React component.
  2. Import it in `src/App.jsx` and add a condition that returns `<MyNewPage setCurrentPage={setCurrentPage} />` when `currentPage` equals your page key.
  3. Add navigation to `src/components/layout/Navbar.jsx` by invoking `setCurrentPage('mynewpage')` where appropriate.

- Quick checks and debugging tips
  - If auth appears to fail silently: open DevTools Console — `Login.jsx` and `SignUp.jsx` log success/errors and write to `localStorage`.
  - If UI classes don't render as expected, verify Tailwind is active (Vite plugin `@tailwindcss/vite` in `vite.config.js`) and that `src/styles/styles.css` imports Tailwind base/utilities if needed.
  - If an image path 404s, check `public/` and the exact path used in components (`/images/cashcat.png` vs `/cat-envelope.jpg`).

- Safety notes for AI edits
  - Do not add new, committed secrets. If you must add keys, use environment variables and document in README.
  - Keep navigation changes minimal: App.jsx centralizes view switching — broad refactors (switching to React Router or Context) require coordinated updates across pages and auth flows.

If anything here is unclear or you want additional patterns captured (routing refactor rules, preferred test harness, or CI hooks), tell me which area to expand and I will iterate.
