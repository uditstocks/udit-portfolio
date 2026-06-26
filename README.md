# Udit Sharma — Portfolio

A premium, dark-theme portfolio for **Udit Sharma**, AI Engineer (Agentic Systems & LLM Orchestration).
Built to match a refined, minimal "luxe" aesthetic with smooth scrolling, scroll-triggered reveals,
a cursor-following hero, a View-Transitions theme toggle, and a project carousel.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (design tokens via CSS variables)
- **Framer Motion** (page-load, scroll reveals, micro-interactions)
- **Lenis** (smooth scrolling)
- **Lucide** icons + **shadcn/ui** primitives (Button, Badge)
- Dynamic OG image via `next/og`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node ≥ 18.18 (Node 20 recommended — see `.nvmrc`).

## 📄 Updating your résumé (drag & drop)

There is **one fixed location** for your résumé:

```
public/resume.pdf
```

Whenever your résumé changes, just **drop the new PDF into `public/` and name it `resume.pdf`**
(overwrite the existing file). Every "résumé" button on the site links to `/resume.pdf`, so you
never touch code. Then redeploy — or push to GitHub and Vercel auto-deploys.

> A placeholder `resume.pdf` ships with the repo. Replace it with your real PDF before going live.
> Quick copy (run in your own terminal):
> ```powershell
> copy "$HOME\Downloads\Udit_Sharma_Resume.pdf" ".\public\resume.pdf"
> ```

## Editing content

All text lives in one typed file — **`lib/data.ts`**. Update your personal info, skills,
experience, projects, open-source work, education, certifications and contact links there.
Components never hard-code content, so the whole site updates from that single file.

Key knobs:
- `personal.siteUrl` — set this to your deployed URL (used for SEO, canonical, sitemap, OG).
- `personal.resumeUrl` — defaults to `/resume.pdf`.

## Project structure

```
app/                # routes, layout, globals.css, SEO (sitemap/robots/manifest/OG)
components/
  chrome/           # nav, cursor, preloader, theme toggle, scroll progress, grain
  providers/        # theme (View Transitions), Lenis smooth-scroll, ready gate
  sections/         # hero, about, skills, experience, projects, open-source,
                    # education, certifications, contact, footer
  shared/           # reveal, stagger, magnetic, text-reveal, section-heading
  ui/               # shadcn primitives (button, badge)
lib/                # data.ts (content), motion.ts (variants), icons.tsx, utils.ts
public/             # favicon, resume.pdf
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. No environment variables are required. Click **Deploy**.
4. After deploying, set `personal.siteUrl` in `lib/data.ts` to your Vercel URL and redeploy
   so SEO metadata, the sitemap and the OG image resolve to absolute URLs.

The project is zero-config for Vercel. The OG image route runs on the Edge runtime.

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables animations, cursor, grain, smooth scroll easing).
- Keyboard-accessible nav, carousel (arrow keys) and a skip-to-content link.
- Semantic landmarks, `aria-label`s, and an SR-only full project list for crawlers.
- Static-rendered home route; fonts via `next/font`; theme applied pre-paint (no flash).

## Customising the look

- Colors / theme tokens: top of `app/globals.css` (`:root` and `html.light`).
- Animation timing/easing: `lib/motion.ts`.
- Tailwind tokens: `tailwind.config.ts`.
