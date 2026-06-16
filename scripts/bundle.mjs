#!/usr/bin/env node
/**
 * Builds the Angular web component and produces a single bundle.mjs
 * that can be loaded via dynamic import() from any page.
 *
 * Steps:
 *  1. ng build --configuration wc  (esbuild, no hashing, optimized)
 *  2. Read all .js and .css files from the browser output directory
 *  3. Prepend CSS as a JS style-injector so the bundle is self-contained
 *  4. Write bundle.mjs to project root
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browserDir = path.join(root, 'dist', 'sample-web-comp', 'browser');
const outFile = path.join(root, 'bundle.mjs');

console.log('Building Angular web component...');
execSync('npx ng build --configuration wc', { stdio: 'inherit', cwd: root });

const entries = readdirSync(browserDir);

// Collect CSS files (global styles exported by Angular build)
const cssFiles = entries.filter(f => f.endsWith('.css'));
let cssContent = '';
for (const f of cssFiles) {
  cssContent += readFileSync(path.join(browserDir, f), 'utf-8') + '\n';
}

// JS snippet that injects styles + Google Fonts into the document head (idempotent)
const fontLinks = [
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
];

const styleInjector = `(function(){
  if (document.querySelector('[data-sample-ui-init]')) return;
  const marker = document.createElement('meta');
  marker.setAttribute('data-sample-ui-init', '');
  document.head.appendChild(marker);

  // Fonts
  ${JSON.stringify(fontLinks)}.forEach(function(href) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  });

${cssContent.trim() ? `  // Material theme + component styles
  const s = document.createElement('style');
  s.textContent = ${JSON.stringify(cssContent)};
  document.head.appendChild(s);` : ''}
})();\n`;

// Collect JS files: polyfills (if any) first, then main
const jsFiles = entries
  .filter(f => f.endsWith('.js'))
  .sort((a, b) => {
    if (a.startsWith('polyfill')) return -1;
    if (b.startsWith('polyfill')) return 1;
    return a.localeCompare(b);
  });

if (jsFiles.length === 0) {
  console.error('No JS files found in', browserDir);
  process.exit(1);
}

console.log('Bundling:', jsFiles.join(', '), cssFiles.length ? `+ ${cssFiles.join(', ')}` : '');

// Check whether the main JS file already is a self-contained ESM bundle
// (no relative chunk imports). If it has chunk imports, re-bundle via esbuild.
const mainFile = jsFiles.find(f => f.startsWith('main')) ?? jsFiles[0];
const mainContent = readFileSync(path.join(browserDir, mainFile), 'utf-8');
const hasChunkImports = /from\s+['"]\.\/chunk-/.test(mainContent) || /import\(['"]\.\/chunk-/.test(mainContent);

if (hasChunkImports) {
  // Re-bundle with the esbuild binary that Angular already installed
  const esbuildBin = path.join(root, 'node_modules', '.bin', 'esbuild');
  const entry = path.join(browserDir, mainFile);
  console.log('Detected chunk imports — re-bundling with esbuild...');
  execSync(
    `"${esbuildBin}" "${entry}" --bundle --format=esm --outfile="${outFile}" --allow-overwrite`,
    { stdio: 'inherit', cwd: root }
  );
  // Prepend style injector to the freshly created bundle
  if (styleInjector) {
    const bundleContent = readFileSync(outFile, 'utf-8');
    writeFileSync(outFile, styleInjector + bundleContent);
  }
} else {
  // Single-file output — just combine polyfills + style injector + main
  const polyfillContent = jsFiles
    .filter(f => f !== mainFile)
    .map(f => readFileSync(path.join(browserDir, f), 'utf-8'))
    .join('\n');

  writeFileSync(outFile, [styleInjector, polyfillContent, mainContent].filter(Boolean).join('\n'));
}

// Copy into dist so the dev server can serve it at /bundle.mjs
const distBundle = path.join(browserDir, 'bundle.mjs');
copyFileSync(outFile, distBundle);

const size = (readFileSync(outFile).length / 1024).toFixed(1);
console.log(`\n✓  bundle.mjs  (${size} kB)`);
console.log(`   project root : ${outFile}`);
console.log(`   dist copy    : ${distBundle}`);
