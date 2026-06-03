# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server at http://localhost:3000
pnpm build      # production build (TypeScript errors are ignored — see next.config.mjs)
pnpm lint       # ESLint
pnpm start      # serve production build
```

There are no tests in this project.

## Architecture

Single-page CV/portfolio site for Massimo Dassano, built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui.

**Single route** — `app/page.tsx` is the only page. It renders a vertical stack of section components: `Navigation → HeroSection → AboutSection → ExperienceSection → EducationSection → SkillsSection → InterestsSection → Footer`.

**i18n** — All user-visible text lives in `i18n/translations.ts`. It exports a `translations` map keyed by `Lang` (`"it" | "en" | "fr" | "de" | "zh" | "sw" | "ql"`). The `LanguageProvider` in `contexts/language-context.tsx` holds `lang` state (defaults to `"en"`); every section component calls `const { t } = useLanguage()` to get the current translation object. The `LanguageSwitcher` component in the nav writes to that context. **All content edits belong in `i18n/translations.ts`**, not in the section components.

**Exceptions to the i18n pattern** — `ExperienceSection` hard-codes company names (`COMPANIES`) and date ranges (`PERIODS`) outside the translation object, because they don't change across languages. The `HeroSection` hard-codes the name "Massimo Dassano".

**Scroll-reveal animations** — Sections use `useInView` (`hooks/use-in-view.ts`), a thin IntersectionObserver wrapper that fires once and stops observing. Attach `ref={ref}` to the animated container and toggle Tailwind classes based on `isInView`.

**Contact email protection** — `ContactReveal` (`components/contact-reveal.tsx`) accepts the email as a reversed string (`encodedEmail`). It shows a math CAPTCHA before reversing and displaying/linking the address, blocking simple scrapers.

**Theme** — The site uses a single futuristic dark theme (deep navy + cyan `--primary`). CSS custom properties are defined once in `app/globals.css`; there is no light/dark toggle.

**UI primitives** — `components/ui/` is a standard shadcn/ui library. Prefer these primitives for any new interactive elements rather than writing from scratch.

**SEO** — Full metadata is in `app/layout.tsx` (Open Graph, Twitter card, JSON-LD `Person` schema). The canonical domain is `https://massimodassano.it`. `app/sitemap.ts` and `app/opengraph-image.tsx` handle sitemap and OG image generation.
