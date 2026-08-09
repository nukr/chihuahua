# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Two subprojects that form one deliverable — a multi-page loan landing site, prerendered to static HTML and served over HTTPS:

- **`frontend/`** — React 19 + TypeScript + Vite + Tailwind v4, built to static HTML with **`vite-react-ssg`** (SSG/prerender). This is the source.
- **`src/main.rs`** — a Rust (axum + axum-server) HTTPS static file server (`chihuahua` binary).
- **`loan-html/`** — the Vite/SSG **build output**, and exactly what the Rust server serves. It is checked in, not gitignored.

The critical connection: `frontend/vite.config.ts` sets `outDir: ../loan-html` (with `emptyOutDir: true`), so `pnpm build` **wipes and regenerates** `loan-html/`. **Editing files in `loan-html/` directly is pointless** — the next build deletes them. Change `frontend/src/`, rebuild, then run the server.

## Why SSG, not SPA

The site was converted from a client-rendered `react-router` SPA to SSG for SEO (per `鑫信國際_SEO網頁排版美編規劃書_修正版.pdf`): each route must ship its own static HTML with page content already in the body and its own `<title>`/`<meta description>`, so search engines can index each service independently. `vite-react-ssg` prerenders every route at build time and hydrates on the client (interactivity — smooth scroll, counters, the form — is preserved).

## Commands

Frontend — **use pnpm** (the installed `node_modules` and `pnpm-lock.yaml` are authoritative; `agent.md`/`yarn.lock` are stale). Run inside `frontend/`:

```bash
pnpm dev      # vite-react-ssg dev server on port 3000 (HMR)
pnpm build    # tsc -b + vite-react-ssg build → prerenders every route into ../loan-html
pnpm lint     # eslint
```

Backend (run from repo root):

```bash
cargo run -- --port 8443   # serve loan-html over HTTPS on the given port (--port is required)
cargo build --release      # binary at target/release/chihuahua
```

The server requires TLS certs at `self_signed_certs/{cert,key}.pem` (loaded via `CARGO_MANIFEST_DIR`, so run from the repo root). It binds `0.0.0.0`, HTTPS only — reach it at `https://localhost:<port>` (`curl -k` for the self-signed cert).

There is no test suite in either project.

## Dependency gotcha (react-router-dom patch)

`vite-react-ssg@0.9.2` still imports the v6 subpath `react-router-dom/server.js`, which react-router **v7** removed (those server-render APIs moved into `react-router`'s main export). A committed **pnpm patch** (`frontend/patches/react-router-dom@7.18.2.patch`, referenced from `frontend/pnpm-workspace.yaml`) re-adds that subpath as a shim. Keep `react-router` and `react-router-dom` pinned to the **same** version (currently 7.18.2) so the app and the plugin resolve one router instance; a version split breaks the router context.

## Frontend architecture

- **Routing = prerendered route table.** `src/routes.tsx` exports a `RouteRecord[]` (react-router data-router API) consumed by `src/main.tsx` via `ViteReactSSG({ routes })`. Root route renders `src/Layout.tsx` (`Header` + `<Outlet/>` + `Footer` + `ScrollToTop`); children are the pages. All paths are static literals, so vite-react-ssg auto-discovers and prerenders each into `loan-html/<path>/index.html` (`ssgOptions.dirStyle: 'nested'`). `base: '/'` is required so nested pages load assets from the site root.
- **Pages:** `src/pages/Home.tsx` (`/`, composed from `src/sections/*`), `src/pages/services/ServicePage.tsx` (a shared skeleton reused by the 6 service routes), and `src/sections/Form/Form.tsx` (`/consult`). The 6 service pages are currently **hero + CTA skeletons**; full content (features/steps/fee tables/FAQ) is to be filled per page.
- **Per-page SEO** is set with the `<Head>` component from `vite-react-ssg` (react-helmet). `src/Layout.tsx` supplies site-wide defaults (`lang`, fallback title/description) that leaf pages override. `frontend/index.html` intentionally has **no static `<title>`** — it would duplicate the injected one.
- **`src/pages/services/serviceData.ts`** is the single source of the 6 services' SEO fields (path/title/description/keywords) + hero copy, taken verbatim from the planning PDF, plus shared `LINE_URL`/`PHONE_*` constants. Add/edit a service here; `routes.tsx`, `Header`, and `Footer` all map over it.
- **Sections** live in `src/sections/<Name>/<Name>.tsx`; the homepage stacks Hero → About → Process → Services → Stats → Steps → Cases → Points → Faq → Contact.
- **Styling:** Tailwind utility classes only, via `@tailwindcss/vite`. `src/styles/global.css` is the Tailwind entry; avoid standalone CSS.
- **`src/utils.ts`** holds time-based "social proof" counters (e.g. `getDisplayCount`) computed from a hardcoded `pastDate`; they run at prerender time so a value is baked into the HTML.

## Server routing (`src/main.rs`)

One `ServeDir` over `loan-html` as `fallback_service`. A `clean_urls` middleware rewrites extensionless, non-root, non-trailing-slash paths (`/service/enterprise-loan`, `/consult`) to `<path>/index.html`, so those clean URLs return **200** directly instead of ServeDir's 307 redirect to the trailing-slash form. Paths with a file extension (assets) and `/` pass through untouched; unknown paths 404.
