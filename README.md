# Fernando Parada — Personal Website

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + MDX
Locales: ES/EN

## Quickstart
```bash
pnpm install  # or npm install / yarn
pnpm dev
# open http://localhost:3000 (redirects to /es)
```

## Deploy
- Vercel (recommended): Import this repo and deploy. No extra config needed.
- Traditional hosting: `next build && next start` (Node server), or `next build && next export` for static export (blog pages included).

## Content
- Edit texts in `app/[locale]/*`
- Blog posts live under `app/[locale]/blog/*/page.mdx`
- Colors are in `tailwind.config.ts`
- CTA link: Encuadrado