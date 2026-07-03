# CloudFolio Production Audit

## Audit Areas

- Navigation and route health
- Recruiter journey
- Project and case-study consistency
- Resume and contact CTAs
- GitHub dashboard resilience
- SEO metadata and structured data
- Responsive layout at mobile, tablet, and desktop widths
- Dark-mode and light-mode readiness
- Accessibility and focus states
- Lighthouse CI readiness

## Findings

- Project pages needed stronger shared case-study context for recruiter scanning.
- Structured data was solid at the site level but needed richer project-level schema.
- Automated browser coverage needed to be added so regressions are caught before launch.
- Dashboard already included GitHub profile, metrics, contribution graph, repositories, language usage, recent activity, and fallback states.

## Fixes Applied

- Added project catalog fields for project type, team size, primary outcome, duration, role, environment scale, technical challenges, and implementation where missing.
- Added shared project Article, CreativeWork, BreadcrumbList, and FAQPage JSON-LD.
- Added recruiter FAQ and Person structured data.
- Added E2E smoke tests for primary production flows.
- Added Lighthouse CI configuration and thresholds.

## Operational Checks

- Confirm custom-domain environment variables before launch:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_DOMAIN`
- Verify `/sitemap.xml` and `/robots.txt` after domain cutover.
- Confirm Vercel Analytics and Speed Insights are enabled in production.
- Re-run Playwright and Lighthouse after DNS propagation.
