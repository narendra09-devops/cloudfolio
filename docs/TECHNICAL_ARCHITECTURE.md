# CloudFolio Technical Architecture

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Vercel deployment
- Vercel Analytics and Speed Insights
- GitHub API-backed dashboard with fallback data
- Playwright E2E tests
- Vitest unit/integration test harness

## Application Structure

- `src/app`: App Router routes, metadata, sitemap, robots, and page composition.
- `src/components`: Reusable UI, layout, project, recruiter, analytics, and dashboard components.
- `src/content`: Structured portfolio, project, blog, architecture, and timeline content.
- `src/config`: Site, navigation, and environment-driven production configuration.
- `src/lib`: Analytics, GitHub data access, utility helpers, and shared logic.
- `tests/e2e`: Playwright production smoke tests.

## Rendering Model

Most portfolio routes are static or statically generated. The dashboard uses revalidation for GitHub-backed data and clearly labeled fallback states when the API is unavailable.

## SEO Model

- Site-level Person, WebSite, and breadcrumb schema in the root layout.
- Page-level metadata generated through `createPageMetadata`.
- Project pages include Article, CreativeWork, BreadcrumbList, and FAQPage JSON-LD.
- Recruiter page includes FAQ, BreadcrumbList, and Person JSON-LD.
- Canonical URLs resolve from environment-driven site configuration.

## Quality Model

- TypeScript strict validation through `npm run typecheck`.
- ESLint through `npm run lint`.
- Prettier format validation through `npm run format:check`.
- Vitest through `npm run test -- --run`.
- Playwright smoke coverage through `npm run test:e2e`.
- Lighthouse CI configuration through `lighthouserc.cjs`.
