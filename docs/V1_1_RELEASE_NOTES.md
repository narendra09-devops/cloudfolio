# CloudFolio v1.1 Release Notes

## Summary

CloudFolio v1.1 focuses on premium portfolio polish, stronger recruiter readability, richer case-study structure, SEO schema expansion, and automated production smoke testing.

## Highlights

- Standardized project case-study context across project type, team size, duration, role, technologies, environment scale, and primary outcome.
- Added architecture preview and discuss-similar-work CTA patterns to project detail pages.
- Expanded project detail JSON-LD with Article, CreativeWork, BreadcrumbList, and FAQPage schema.
- Added recruiter FAQ and Person schema enhancements.
- Added Playwright production smoke tests for home, recruiter, projects, project details, contact, resume, dashboard, activity, responsive layout, dark mode, and internal route health.
- Added Lighthouse CI configuration with production-grade thresholds.

## Quality Gates

Required before release:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test -- --run`
- `npm run build`
- `npm run test:e2e`

## Release Notes

This release does not change business facts or confidential case-study details. It improves presentation, consistency, structured data, and validation coverage.
