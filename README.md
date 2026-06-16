# sample-web-comp

A sample Angular 22 web component built with Angular Material M3, packaged as a self-contained ES module bundle. Intended as a reference and test fixture for [webcompdoc](../webcompdoc).

## What it registers

| Custom element | Attributes |
|---|---|
| `<sample-ui>` | `heading`, `subheading` |

```html
<sample-ui
  heading="My Component"
  subheading="Angular 22 + Material M3"
></sample-ui>
```

The component renders a toolbar, an info card with chips, an interactive counter with a progress bar, and a slider — all using Angular Material M3 components.

## Getting started

```bash
npm install
npm run build:wc    # build → bundle.mjs
npm run serve:wc    # build + serve on http://localhost:4201
```

Point [webcompdoc](../webcompdoc) at `http://localhost:4201/bundle.mjs`.

## Scripts

| Script | Description |
|---|---|
| `npm run build:wc` | Production build → `bundle.mjs` (self-contained, ~440 kB) |
| `npm run serve:wc` | Build then serve `dist/` on port 4201 with CORS headers |
| `npm run build` | Standard Angular build (no bundle post-processing) |
| `npm start` | Angular dev server (`ng serve`) |

## How the bundle is built

`ng build --configuration wc` runs esbuild through Angular CLI with output hashing disabled. A post-build Node script (`scripts/bundle.mjs`) then:

1. Reads the Angular output JS and CSS from `dist/`
2. Prepends a self-injecting snippet that loads Roboto + Material Icons from Google Fonts and injects the Material theme CSS into `document.head` (idempotent — runs once per page)
3. Writes the combined file as `bundle.mjs` and copies it into `dist/` so the dev server can serve it

The result is a single file that can be loaded with a plain `import()` from any page on any origin.

## Why the CSS is injected this way

Angular Material M3 uses CSS custom properties (`--mat-sys-primary`, `--mat-sys-shape-*`, etc.) for all visual styling. These variables are defined in `src/material-theme.scss`, scoped to the `sample-ui` element so they do not leak into whatever page loads the bundle. Without this injection step, all Material components fall back to unstyled browser defaults.

## Project structure

```
sample-web-comp/
├── src/
│   ├── main.ts                          # createApplication + customElements.define
│   ├── material-theme.scss              # M3 theme scoped to sample-ui
│   └── app/
│       └── sample-ui/
│           └── sample-ui.component.ts   # standalone Angular component
├── scripts/
│   ├── bundle.mjs                       # post-build bundler
│   └── serve.mjs                        # CORS-enabled static server
└── angular.json                         # includes wc build configuration
```

## Tech

- [Angular 22](https://angular.dev) — standalone components, signals, zoneless change detection
- [Angular Material 22](https://material.angular.dev) — M3 design system
- [@angular/elements](https://angular.dev/guide/elements) — wraps the component as a custom element
