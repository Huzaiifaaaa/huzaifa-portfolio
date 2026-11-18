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

Markdown posts live in `content/blog/` and render to `/blog/` at build time, with an RSS feed at `/blog/rss.xml`. There are no posts yet; the blog page shows "No entries filed yet." until one is added. See [`content/blog/README.md`](content/blog/README.md) for how to add a post.

## Deploy

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`.

In the GitHub repo:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
2. **Settings → Pages → Custom domain**: set `huzaifa.eu`.
3. Optional: add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) as repo secrets to turn on the contact form.
4. Push to `main`. The workflow does the rest.

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19
- Tailwind v4 (tokens only; component styles hand-rolled in `globals.css`)
- TypeScript

## Design system

See `PRODUCT.md` and `DESIGN.md` at repo root.
