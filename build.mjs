import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

// Ship the small stylesheet inside HTML to remove a blocking round trip on Pages.
// Source remains separate and reviewable; asset URLs are relative to index.html.
await mkdir('site', { recursive: true });
const [html, css] = await Promise.all([
  readFile('index.html', 'utf8'), readFile('styles.css', 'utf8')
]);
await writeFile('site/index.html', html.replace(
  '<link rel="stylesheet" href="./styles.css">', `<style>${css}</style>`
));
for (const file of ['site.js', 'llms.txt', 'robots.txt', 'sitemap.xml']) {
  await cp(file, `site/${file}`);
}
await cp('assets', 'site/assets', { recursive: true });
await writeFile('site/.nojekyll', '');
