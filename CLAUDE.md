# Abubakar Aziz — Website Reference

## Coding Guidelines
1. **Think before coding** — state assumptions explicitly, ask when unclear, surface tradeoffs
2. **Simplicity first** — minimum code that solves the problem, no speculative features
3. **Surgical changes** — touch only what's needed, don't improve adjacent code
4. **Goal-driven** — state a plan with verifiable steps before multi-step tasks

## Writing Style
- No em dashes (—) in prose copy. Use commas or colons instead.
- Keep bio text conversational, not academic.

## Identity & Goals
- **Who:** Muhammad Abu Bakar Aziz — PhD candidate (final year) at Northeastern University
- **Role:** Privacy + systems software engineer (not data scientist, not purely academic)
- **Looking for:** Full-time roles and postdoc positions in software, privacy, systems, or research engineering
- **Research focus:** Web privacy & security, internet measurement, AI privacy & governance
- **Future:** Plans to learn ML and blog about it — leave space for it
- **Active blogger:** Blog is a primary goal, not an afterthought

## Brand Direction
- Frame as a **builder/engineer**, not an academic
- Publications → **Projects** (framed as things built and shipped)
- Open to roles beyond privacy — don't pigeonhole

## Design Decisions
- **Default theme:** Dark mode (light toggle available)
- **Accent color:** Teal `#0D9488`
- **Background:** Off-white `#FAFAF9` (light) / `#0F172A` (dark)
- **Text:** Near-black `#0F172A` (light) / `#F1F5F9` (dark)
- **Typography:** Inter
- **Tech stack:** Astro 6 + Tailwind CSS v4, deployed on Vercel
- **Repo:** github.com/abubakaraziz/aziz-web
- **Domain:** abubakaraziz.com (DNS on Squarespace, pointed to Vercel)

## Tech Notes
- Astro 6 requires Node v22+ (use `nvm use 22`)
- Tailwind v4 uses `@import "tailwindcss"` and `@tailwindcss/vite` plugin
- Dark mode uses class-based variant: `@custom-variant dark (&:where(.dark, .dark *))` in global.css
- Theme script must be in `<head>` (not bottom of body) to prevent white flash on load
- Content collections use glob loader (Astro 5+ API), NOT the old defineCollection format

## File Structure
```
src/
  layouts/Base.astro          — nav, footer, dark mode script
  pages/
    index.astro               — homepage: hero + bio + projects + news
    about.astro               — bio, CV, skills, open to work
    projects.astro            — all projects grid
    publications.astro        — academic format publications list
    blog/index.astro          — blog listing
    blog/[...id].astro        — blog post template
  content/
    blog/                     — .md blog posts (title, date, description, tags, draft)
    projects/                 — .md project files (see schema below)
  styles/global.css           — theme variables, dark mode, prose styles
public/
  assets/
    prof_pic.jpg              — profile photo
    pdf/                      — paper PDFs
      iab-ccpa-compliance.pdf
      google_search_paper.pdf
      google-topics-www26.pdf
    cv.pdf                    — TODO: add this file
```

## Content Schemas

### Blog post frontmatter
```yaml
title: ""
date: YYYY-MM-DD
description: ""
tags: []
draft: false
```

### Project frontmatter
```yaml
title: ""
description: ""
venue: ""           # e.g. "ICWSM 2024"
year: 2024
authors: ""
tech: []
paper: "/assets/pdf/filename.pdf"
code: "https://github.com/..."
html: "https://..."
award: ""           # e.g. "Best Paper Honourable Mention"
status: ""          # e.g. "Under Submission"
```

## Homepage Project Order
Controlled by `PROJECT_ORDER` array in `src/pages/index.astro`:
```js
const PROJECT_ORDER = ['google-topics-api', 'web-almanac-third-parties', 'iab-ccpa', 'google-search-market'];
```
Edit this array to reorder. `iab-gpp` is excluded from homepage (still shows on /projects and /publications).

## Recent Writing Section
Hidden on homepage until 3+ published posts exist. Controlled by `posts.length >= 3` check in `src/pages/index.astro`. Remove this condition once you have enough posts.

## Content Inventory

### Projects / Publications
| File | Title | Venue | Year |
|---|---|---|---|
| google-topics-api.md | Google Topics API Privacy Audit | WWW 2026 | 2026 |
| web-almanac-third-parties.md | Third Parties — Web Almanac 2025 | HTTP Archive Web Almanac | 2025 |
| iab-ccpa.md | IAB CCPA Compliance Auditor | PoPETS 2024 | 2024 |
| google-search-market.md | Google Search Market Share Analysis | ICWSM 2024 | 2024 |
| iab-gpp.md | IAB Global Privacy Platform Measurement | Under Submission | 2026 |

### Contact & Social
- Email: aziz.muh@northeastern.edu
- GitHub: github.com/abubakaraziz
- LinkedIn: linkedin.com/in/aziz313f
- Google Scholar: scholar.google.com/citations?user=0rBwAFkAAAAJ
- Twitter/X: twitter.com/aziz313f

## TODOs
- [ ] Add `cv.pdf` to `public/assets/cv.pdf` (linked in About page)
- [ ] Add 3+ blog posts to unhide Recent Writing section on homepage
- [ ] Add profile images/chart thumbnails to project cards (visualization plan)
