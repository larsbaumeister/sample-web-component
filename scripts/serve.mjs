#!/usr/bin/env node
/**
 * Simple static server for the dist/browser directory with CORS enabled.
 * Needed so webcompdoc (or any other origin) can import() the bundle.
 */

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { dirname, extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'sample-web-comp', 'browser'));
const PORT = process.env.PORT ?? 4201;

const MIME = {
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.html': 'text/html',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
};

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = join(root, url.split('?')[0]);

  try {
    const data = await readFile(filePath);
    const mime = MIME[extname(filePath)] ?? 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`\nServing dist/sample-web-comp/browser on http://localhost:${PORT}`);
  console.log(`\n  Load this in webcompdoc:`);
  console.log(`  → http://localhost:${PORT}/bundle.mjs\n`);
});
