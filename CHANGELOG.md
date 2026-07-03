# Changelog

All notable project-level changes will be documented in this file.

## v1.0.0 - 2026-07-03

### Added

- Production CloudFolio portfolio experience with homepage, about, resume, projects, recruiter hub, contact, blog, architecture gallery, dashboard, activity, notes, and learning routes.
- Recruiter Hub with executive summary, skill heatmap, relocation details, recruiter FAQ, featured projects, resume downloads, and direct contact links.
- VM Audit flagship case study with implementation narrative, metrics, gallery, architecture flow, and recruiter CTAs.
- Project portfolio, blog, architecture, notes, and learning content models.
- GitHub dashboard and activity integration with fallback states for API failures or rate limits.
- Vercel Analytics and Speed Insights integration with safe CTA event tracking.
- Custom-domain-ready site configuration through `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_DOMAIN`.
- Dynamic sitemap and robots configuration using absolute URLs.
- SEO metadata helper for canonical URLs, OpenGraph metadata, and Twitter cards.
- JSON-LD structured data for Person, WebSite, and baseline breadcrumbs.
- Production security headers for frame protection, content sniffing, referrer policy, and permissions policy.
- Branded 404 and root error pages with recruiter-focused recovery paths.
- Custom domain setup guide, launch checklist, release notes, v2 roadmap, known limitations, launch announcement, and production scorecard.

### Changed

- Updated package version to `1.0.0`.
- Reworked README for the production release with overview, architecture, setup, deployment, analytics, custom domain, screenshots, roadmap, and license sections.
- Hardened recruiter quick links so external links open consistently in a new tab.

### Verified

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test -- --run`
- `npm run build`

## Pre-1.0 Foundation

### Added

- Next.js 15 project bootstrap with App Router, TypeScript, Tailwind CSS, MDX support, and import aliases.
- Code quality tooling with ESLint, Prettier, Husky, and lint-staged.
- Testing preparation with Vitest and Playwright.
- Project governance files for contributing, conduct, security, decisions, learning notes, and changelog tracking.
