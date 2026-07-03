# CloudFolio Maintenance Guide

## Routine Release Checks

Run before each production release:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npm run test:e2e
```

## Content Updates

- Update project case studies in `src/content/projects.ts`.
- Keep project slugs stable after public launch.
- Add redirects if a public route changes.
- Preserve confidentiality: no account IDs, ARNs, customer names, hostnames, IP addresses, internal domains, ticket IDs, or private screenshots.

## SEO Updates

- Use `createPageMetadata` for page metadata.
- Keep canonical URLs environment-driven through `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_DOMAIN`.
- Verify `/sitemap.xml` and `/robots.txt` after domain changes.
- Update JSON-LD when adding major page types or case-study sections.

## Dashboard Operations

- GitHub username should remain `narendra09-devops` unless the public profile changes.
- Dashboard fallback data must remain clearly labeled.
- Treat API failures as degraded display states, not silent fake data.

## Custom Domain Operations

- Add the domain in Vercel.
- Configure DNS at the registrar.
- Verify SSL issuance.
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_DOMAIN`.
- Redeploy and verify canonical URLs, OpenGraph URLs, sitemap, robots, and Search Console.

## Regression Watchlist

- Navigation overflow at tablet widths.
- Project card links and dynamic project slugs.
- Resume PDF path and download behavior.
- Contact mailto subject.
- Dark-mode contrast in cards and badges.
- GitHub API fallback messaging.
