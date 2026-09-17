import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/client/', import.meta.url));
const repositoryPath = '/Edu_escape_academy/_next/';

async function updateHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateHtml(path);
      continue;
    }

    if (!entry.name.endsWith('.html')) continue;

    const html = await readFile(path, 'utf8');
    await writeFile(path, html.replaceAll('/_next/', repositoryPath));
  }
}

await updateHtml(outputDirectory);
