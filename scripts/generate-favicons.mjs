import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public', 'favicon.svg'));

const sizes = [16, 32, 48, 192];
for (const size of sizes) {
  const out = join(root, 'public', `favicon-${size}x${size}.png`);
  await sharp(svg).resize(size, size).png().toFile(out);
}
await sharp(svg).resize(32, 32).png().toFile(join(root, 'public', 'favicon.png'));
console.log('Favicons generated:', sizes.join(', '));
