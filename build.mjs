import { cp, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';

// Ship the small stylesheet inside HTML to remove a blocking round trip on Pages.
// Source remains separate and reviewable; asset URLs are relative to index.html.
await mkdir('site', { recursive: true });
const [html, css] = await Promise.all([
  readFile('index.html', 'utf8'), readFile('styles.css', 'utf8')
]);
await writeFile('site/index.html', html.replace(
  /<link rel="stylesheet" href="\.\/styles\.css(?:\?[^\"]*)?">/,
  `<style>${css}</style>`
));
for (const file of ['site.js', 'llms.txt', 'robots.txt', 'sitemap.xml']) {
  await cp(file, `site/${file}`);
}
await cp('assets', 'site/assets', { recursive: true });
// Every route is standalone HTML, including direct navigation on GitHub Pages.
async function buildPages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await buildPages(path);
    else if (entry.name.endsWith('.html')) {
      const page = await readFile(path, 'utf8');
      const depth = path.split('/').length - 1;
      const prefix = '../'.repeat(depth);
      const pageCss = css.replaceAll("url('./assets/", `url('${prefix}assets/`);
      await mkdir(`site/${directory}`, { recursive: true });
      await writeFile(`site/${path}`, page.replace(/<link rel="stylesheet" href="[^"]*styles\.css(?:\?[^"]*)?">/, `<style>${pageCss}</style>`));
    }
  }
}
for (const directory of ['blog', 'termos', 'privacidade']) await buildPages(directory);
await writeFile('site/.nojekyll', '');
