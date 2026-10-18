# abubakaraziz.com

Personal website of Abubakar Aziz, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed on Vercel from `main`.

## Development

Requires Node 22.22 or later.

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run check    # type-check .astro and .ts files
npm run build    # production build to ./dist
npm run preview  # serve ./dist locally
```

## Editing content

| What | Where |
| :-- | :-- |
| Blog posts | `src/content/blog/*.md` (set `draft: true` to hide) |
| Projects and publications | `src/content/projects/*.md` |
| Homepage featured projects and news | `src/pages/index.astro` |
| Name, email, nav and social links | `src/consts.ts` |
| Colors and fonts | `src/styles/global.css`, `astro.config.mjs` |
| PDFs and other static files | `public/assets/` |

Frontmatter fields are validated by the schemas in `src/content.config.ts`, so a typo fails the build instead of silently disappearing.

Project entries appear on both `/projects` and `/publications`. Set `hide_from_projects: true` to list one on `/publications` only (e.g. talks).

To show the "Download CV" link on the About page, add `public/assets/cv.pdf`.

## Structure

```text
src/
├── assets/            images processed by astro:assets
├── components/        Badge, ProjectCard
├── content/           blog and project Markdown
├── layouts/Base.astro page shell, SEO meta, theme toggle
├── pages/             routes (incl. rss.xml and 404)
├── styles/global.css  theme tokens and prose styles
└── consts.ts          site-wide constants
```
