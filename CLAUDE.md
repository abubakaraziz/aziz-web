# Abubakar Aziz — Website Revamp Reference

## Coding Guidelines
1. **Think before coding** — state assumptions explicitly, ask when unclear, surface tradeoffs
2. **Simplicity first** — minimum code that solves the problem, no speculative features
3. **Surgical changes** — touch only what's needed, don't improve adjacent code
4. **Goal-driven** — state a plan with verifiable steps before multi-step tasks



## Identity & Goals
- **Who:** Muhammad Abu Bakar Aziz — PhD candidate (final year) at Northeastern University
- **Role:** Privacy + systems software engineer (not data scientist, not purely academic)
- **Looking for:** Full-time role — open to privacy engineering, security engineering, systems engineering, research engineering
- **Future:** Plans to learn ML and blog about it later — leave space for it
- **Active blogger:** Blog is a primary goal, not an afterthought

## Brand Direction
- Frame as a **builder/engineer**, not an academic
- Publications → **Projects** (framed as things built and shipped)
- Identity line: *"Software engineer. I build privacy systems, measure the web, and write about both."*
- Open to roles beyond privacy — don't pigeonhole

## Design Decisions
- **Theme:** Light mode default, dark mode toggle
- **Accent color:** Teal `#0D9488`
- **Background:** Off-white `#FAFAF9`
- **Text:** Near-black `#0F172A`
- **Typography:** Inter (UI), readable serif for long-form posts
- **Visualization:** Strong visual emphasis — project cards have thumbnail/chart previews, blog posts support inline charts
- **Tech stack:** Astro + Tailwind CSS, deployed on Vercel

## Top 5 Theme References

### 1. Dante — `dante-astro-theme.netlify.app`
- Best overall: projects + blog sections, clean cards, light/dark toggle
- Closest to target structure (hero → projects → writing)
- Free, Astro + Tailwind

### 2. Astro Nano — `astro-nano-demo.vercel.app`
- Ultra minimal: bio, latest posts, work experience, recent projects
- Great for "builder" identity — all signal, no noise
- Free, Astro + Tailwind

### 3. Northendlab Light — `northendlab-light-astro.vercel.app`
- Light mode default, blog grid with image thumbnails
- Great for visual-heavy posts
- Free, Astro + Tailwind

### 4. Logbook Astro — `logbook-astro.vercel.app`
- Most polished/refined out of the box
- Featured image thumbnails per post, sidebar, tags
- Best for visual storytelling in blog posts
- Paid theme

### 5. bytekai.dev (minimal-astro-portfolio on GitHub)
- Best "builder" identity: projects with tech stack badges, blog with dates
- Closest to the exact layout concept discussed
- Free, Astro + Tailwind

## Inspiration Sites
- **huyenchip.com/blog** — blog-forward, clean reading experience
- **mihaileric.com** — social proof on posts (view counts, HN mentions), "Popular" + "Trending"
- **leerob.com** — whitespace, minimal, text-first
- **astro-nano-demo.vercel.app** — structure reference
- **distill.pub** — visual research communication

## Final Decisions (locked in)
- **Build approach:** From scratch — NOT a template. User can code and wants full control.
- **Primary design inspiration:** huyenchip.com (aesthetic) + mihaileric.com (structure/social proof)
- **Current site:** Jekyll + al-folio at `/Users/aziz/abubakaraziz.github.io` — migrate content from here
- **Real blog posts to migrate:** `topics-api`, `instrumenting-Javascript-API`, `reflections-growth-and-challenges`
- **Deploy:** Vercel → abubakaraziz.com

## Content Inventory

### Publications → Projects
| Project Title | Venue | Year | Links | Tech |
|---|---|---|---|---|
| IAB CCPA Compliance Auditor | PoPETS 2024(4) | 2024 | Paper, Code (GitHub) | Python, Spark, Selenium |
| Google Topics API Privacy Audit | WWW 2026 | 2026 | Paper | Python, BigQuery |
| Google Search Market Share Analysis ★ Best Paper HM | ICWSM 2024 | 2024 | Paper | Python, Spark |
| IAB Global Privacy Platform (One String to Rule Them All) | Under Submission | 2026 | — | — |
| Third Parties (Web Almanac) | HTTP Archive 2025 | 2025 | HTML | — |

### Contact & Social
- Email: aziz.muh@northeastern.edu
- GitHub: github.com/abubakaraziz
- LinkedIn: linkedin.com/in/aziz313f
- Google Scholar: scholar.google.com/citations?user=0rBwAFkAAAAJ
- Twitter/X: twitter.com/aziz313f

### Key News (for homepage)
- Mar 2026: Industry talk at PEPR 2026 — "Why Consent Fails in Practice"
- Jan 2026: Paper accepted at WWW 2026
- Jun 2025: Presented at Google Ads Privacy Conference
- Jun 2024: Best Paper Honorable Mention at ICWSM 2024

## Homepage Layout (Wireframe)
```
[Name]                          Blog  Projects  About  ◑

Software engineer. I build privacy systems,
measure the web, and write about what I find.

[GitHub]  [LinkedIn]  [Scholar]     ● Open to work

─────────────────────────────────────────────────────
Recent Writing
→ Post title ................................ date
→ Post title ................................ date
                                        View all →

─────────────────────────────────────────────────────
Projects  (publications framed as built things)
┌──────────────────┐  ┌──────────────────┐
│ [visual/chart]   │  │ [visual/chart]   │
│ Project Title    │  │ Project Title    │
│ 1-line summary   │  │ 1-line summary   │
│ Python · Spark   │  │ Python · BigQuery│
│ [Venue] [Paper]  │  │ [Venue] [Paper]  │
└──────────────────┘  └──────────────────┘
                                    View all →
```

## Visualization Plan
- Each project card: thumbnail image or key finding chart (not just text)
- Blog posts: support inline charts (Chart.js or D3.js via MDX components)
- Post cards on blog index: featured image per post
- Consider open-sourcing anonymized datasets as interactive demos
