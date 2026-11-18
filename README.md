# huzaifa-portfolio

Personal portfolio for Muhammad Huzaifa, a Full Stack Software Engineer and MSc Computer Science & Engineering (Cyber Security) student at the University of Oulu, Finland.

Static Next.js site styled as a declassified government dossier. Ships to GitHub Pages.

Live at [huzaifa.eu](https://huzaifa.eu/).

Design adapted from [jusso-dev/jussodev-portfolio](https://github.com/jusso-dev/jussodev-portfolio).

## Local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes ./out
npm run screenshot # writes docs/screenshots/
```

## Where the content lives

- `src/app/page.tsx`: the dossier (profile, experience, research, impact, contact).
- `src/lib/projects.ts`: the Field Artifacts project list.
- `src/app/layout.tsx`: page title, SEO description and structured data.
- `public/resume.txt`, `public/llms.txt`: plain-text CV.

## Blog

Markdown posts live in `content/blog/` and render to `/blog/` at build time. There are no posts yet; the blog page shows "No entries filed yet." until one is added. See [`content/blog/README.md`](content/blog/README.md) for how to add a post.

## Deploy (CI/CD)

`.github/workflows/deploy.yml` runs on GitHub Actions:

- **Pull requests:** lint, type-check and build. Nothing is published.
- **Push to `main`** (or **Actions → CI / Deploy → Run workflow**): the same checks, then the site is published to GitHub Pages at [huzaifa.eu](https://huzaifa.eu/). A failed check stops the deploy, so the live site keeps the previous version.

Day to day: edit, commit, `git push` to `main`. The site updates a minute or two later.

One-time GitHub setup:

1. **Actions** tab: enable workflows (GitHub turns them off on forks).
2. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
3. **Settings → Pages → Custom domain**: `huzaifa.eu`, then tick **Enforce HTTPS** once it's available.
4. Optional: add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) under **Settings → Secrets and variables → Actions** to turn on the contact form.

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19
- Tailwind v4 (tokens only; component styles hand-rolled in `globals.css`)
- TypeScript

## Design system

See `PRODUCT.md` and `DESIGN.md` at repo root.
