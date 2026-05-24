const fs = require('fs');
const path = require('path');

const dir = __dirname;
const inputs = [
  'style.css',
  'styles.css',
  'modal-post-ad.css',
  'product-detail.css',
  'property-icons.css',
  'property-image-icons.css',
  'property-wide-short-overrides.css',
  'slider-fix.css',
];

const out = path.join(dir, 'Style.css');

let outText = '/* Style.css (combined) */\n\n';
for (const f of inputs) {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) {
    console.error('Missing file:', f);
    process.exitCode = 1;
    continue;
  }
  const content = fs.readFileSync(p, 'utf8');
  outText += `/* ===== ${f} ===== */\n`;
  outText += content;
  if (!content.endsWith('\n')) outText += '\n';
  outText += '\n';
}

fs.writeFileSync(out, outText, 'utf8');

// Quick sanity log
const total = inputs
  .map(f => (fs.existsSync(path.join(dir, f)) ? fs.statSync(path.join(dir, f)).size : 0))
  .reduce((a,b)=>a+b,0);
const outSize = fs.statSync(out).size;
console.log('Wrote', out, 'bytes:', outSize);
console.log('Sum inputs bytes:', total);

