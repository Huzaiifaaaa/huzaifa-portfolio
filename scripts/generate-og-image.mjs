// Renders public/og.png (1200x630), the social preview card for link shares.
// Uses the site's own fonts from a production build, so run `npm run build` first:
//   npm run build && npm run og
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";

const mediaDir = resolve("out/_next/static/media");
const chunksDir = resolve("out/_next/static/chunks");

// Find the latin woff2 file for each family in the built CSS.
function fontFile(family) {
  for (const file of readdirSync(chunksDir).filter((f) => f.endsWith(".css"))) {
    const css = readFileSync(resolve(chunksDir, file), "utf8");
    const re = new RegExp(
      `@font-face\\{font-family:${family};[^}]*src:url\\(\\.\\./media/([^)]+\\.p\\.[^)]+\\.woff2)\\)`,
    );
    const match = re.exec(css);
    if (match) return resolve(mediaDir, match[1]);
  }
  throw new Error(`Font for ${family} not found. Run "npm run build" first.`);
}

const fontData = (path) => readFileSync(path).toString("base64");
const display = fontData(fontFile("Special Elite"));
const body = fontData(fontFile("JetBrains Mono"));

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face { font-family: Display; src: url(data:font/woff2;base64,${display}) format("woff2"); }
@font-face { font-family: Body; src: url(data:font/woff2;base64,${body}) format("woff2"); font-weight: 100 900; }
:root {
  --paper: oklch(0.965 0.012 75);
  --ink: oklch(0.18 0.012 60);
  --ink-muted: oklch(0.42 0.01 60);
  --ink-faint: oklch(0.62 0.008 60);
  --stamp: oklch(0.55 0.182 28);
}
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: var(--paper); color: var(--ink); font-family: Body, monospace; position: relative; overflow: hidden; }
.banner { position: absolute; left: 0; right: 0; height: 44px; background: var(--stamp); color: var(--paper);
  font-size: 17px; letter-spacing: 0.22em; display: flex; align-items: center; justify-content: center; }
.top { top: 0; } .bottom { bottom: 0; }
.frame { position: absolute; inset: 76px 64px; border: 2px solid var(--ink); outline: 1px solid var(--ink-faint); outline-offset: -8px; padding: 46px 56px; }
.id { font-size: 18px; letter-spacing: 0.2em; color: var(--ink-muted); display: flex; justify-content: space-between; }
.rule { border-top: 1px solid var(--ink-faint); margin: 22px 0 34px; }
h1 { font-family: Display, monospace; font-weight: 400; font-size: 92px; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1; }
.sub { margin-top: 26px; font-size: 25px; color: var(--ink-muted); }
.url { position: absolute; left: 56px; bottom: 40px; font-size: 22px; letter-spacing: 0.14em; }
.stamp { position: absolute; right: 56px; bottom: 34px; transform: rotate(-6deg); border: 3px solid var(--stamp); color: var(--stamp);
  font-family: Display, monospace; font-size: 24px; letter-spacing: 0.16em; text-transform: uppercase; padding: 8px 18px; opacity: 0.85; }
</style></head><body>
<div class="banner top">// UNCLASSIFIED // PUBLIC RELEASE // FOR REVIEW //</div>
<div class="frame">
  <div class="id"><span>DOSSIER 001 · SUBJECT: M. HUZAIFA</span><span>CTRL № 2026-11-MH</span></div>
  <div class="rule"></div>
  <h1>Muhammad Huzaifa</h1>
  <p class="sub">Software Engineer (Full Stack) · Cyber Security · Oulu, Finland</p>
  <div class="url">HUZAIFA.EU</div>
  <div class="stamp">Declassified · Public Release</div>
</div>
<div class="banner bottom">// UNCLASSIFIED // PUBLIC RELEASE // FOR REVIEW //</div>
</body></html>`;

// Prefer Playwright's own Chromium; fall back to an installed Google Chrome.
const browser = await chromium
  .launch({ headless: true })
  .catch(() => chromium.launch({ headless: true, channel: "chrome" }));
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve("public/og.png") });
  console.log("Wrote public/og.png");
} finally {
  await browser.close();
}
