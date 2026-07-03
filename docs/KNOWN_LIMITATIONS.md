# Known Limitations

This document tracks production limitations accepted for CloudFolio v1.0.0.

## Automated Tests

- Vitest is configured, but no unit test files are currently present.
- Playwright smoke tests cover primary navigation, resume, contact, project, recruiter, dashboard,
  theme, and mobile overflow checks.
- Dedicated axe-based accessibility tests are not yet implemented.

Mitigation: Add focused unit tests and axe accessibility assertions in v1.1.

## Lighthouse

- Lighthouse targets are defined, but Lighthouse CI is not yet automated.
- Final scores must be verified against the live production URL after deployment.

Mitigation: Add Lighthouse CI and store release score history.

## GitHub API

- Dashboard and activity pages depend on the GitHub public API.
- Rate limits or API failures can produce fallback dashboard states.

Mitigation: Configure `GITHUB_TOKEN` in Vercel and keep fallback states enabled.

## Screenshots

- Production screenshots are not yet committed as static documentation assets.
- README lists recommended screenshot targets instead of embedding image files.

Mitigation: Capture desktop and mobile screenshots during the v1.1 release cycle.

## Custom Domain

- The app is custom-domain ready, but DNS, SSL, Search Console, and analytics verification must be completed after selecting the final domain.

Mitigation: Follow `docs/CUSTOM_DOMAIN_SETUP.md`.

## Search Engine Indexing

- Sitemap and robots are configured, but Google indexing depends on Search Console submission and crawl timing.

Mitigation: Verify Search Console, submit sitemap, inspect primary URLs, and monitor coverage.

## Content Depth

- Some blog and architecture entries are concise v1 summaries rather than long-form technical articles.
- Diagrams are mostly application-rendered or placeholder-style rather than exported image assets.

Mitigation: Expand priority articles and diagrams in v2 content milestones.

## Analytics

- Vercel Analytics captures page and CTA events, but there is no custom funnel dashboard in the repository.

Mitigation: Document monthly analytics review and add event taxonomy checks.
