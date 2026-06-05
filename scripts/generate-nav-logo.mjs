import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public', 'images', 'wuma-favicon-source.png');
const out = join(root, 'public', 'images', 'wuma-logo-nav.png');

async function sampleBackground(imagePath) {
  const stats = await sharp(imagePath)
    .extract({ left: 4, top: 4, width: 24, height: 24 })
    .stats();

  return {
    r: Math.round(stats.channels[0].mean),
    g: Math.round(stats.channels[1].mean),
    b: Math.round(stats.channels[2].mean),
  };
}

const bg = await sampleBackground(source);
const meta = await sharp(source).metadata();

const targetHeight = 360;
const scale = targetHeight / meta.height;
const scaledW = Math.round(meta.width * scale);

const scaled = await sharp(source)
  .resize(scaledW, targetHeight)
  .png()
  .toBuffer();

const canvasW = Math.round(targetHeight * 2.35);
const padL = Math.floor((canvasW - scaledW) / 2);
const padR = canvasW - scaledW - padL;

await sharp(scaled)
  .extend({ top: 0, bottom: 0, left: padL, right: padR, background: bg })
  .png()
  .toFile(out);

console.log('Nav logo generated with matched background:', bg);
