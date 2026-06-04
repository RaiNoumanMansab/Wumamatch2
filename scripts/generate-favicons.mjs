import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public', 'images', 'wuma-favicon-source.png');

/** Square canvas with white bg — matches the brand icon asset */
async function buildSquareIcon(size) {
  const trimmed = await sharp(source)
    .trim({ threshold: 12 })
    .toBuffer();

  const meta = await sharp(trimmed).metadata();
  const side = Math.max(meta.width, meta.height);
  const pad = Math.round(side * 0.12);

  const squared = await sharp(trimmed)
    .extend({
      top: Math.floor((side - meta.height) / 2) + pad,
      bottom: Math.ceil((side - meta.height) / 2) + pad,
      left: Math.floor((side - meta.width) / 2) + pad,
      right: Math.ceil((side - meta.width) / 2) + pad,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  return sharp(squared)
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png();
}

const sizes = [16, 32, 48, 192];
for (const size of sizes) {
  await (await buildSquareIcon(size)).toFile(join(root, 'public', `favicon-${size}x${size}.png`));
}
await (await buildSquareIcon(32)).toFile(join(root, 'public', 'favicon.png'));
console.log('Favicons generated from wuma-favicon-source.png');
