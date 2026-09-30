import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { brotliCompressSync } from 'node:zlib';

const root = resolve('.');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2', '.webp': 'image/webp' };
createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!file.startsWith(root + sep) && file !== resolve(root, 'index.html')) { res.writeHead(403).end(); return; }
  try {
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    let body = await readFile(file);
    const headers = { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-cache', 'vary': 'Accept-Encoding' };
    if (req.headers['accept-encoding']?.includes('br')) { body = brotliCompressSync(body); headers['content-encoding'] = 'br'; }
    res.writeHead(200, headers).end(body);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173'));
