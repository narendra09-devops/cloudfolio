# CloudFolio v1.1 Enhancement Sprint QA Report

Date: 2026-07-03

## Scope

Pages reviewed for this sprint:

- `/`
- `/about`
- `/resume`
- `/projects`
- `/projects/vm-audit-automation-platform`
- `/projects/aws-security-hub-remediation-program`
- `/projects/sap-development-environment-cost-optimization`
- `/recruiter`
- `/dashboard`
- `/activity`
- `/contact`
- `/timeline`
- `/blog`
- `/architecture`

## Defects Found

- Medium: Generic case-study pages did not consistently expose project type, team context, primary outcome, environment scale, architecture preview, and final discussion CTA.
- Medium: Project detail pages had metadata but lacked page-level Article, CreativeWork, FAQ, and breadcrumb JSON-LD.
- Medium: Automated E2E coverage was missing for core recruiter, resume, contact, dashboard, project detail, responsive, and dark-mode flows.
- Low: Recruiter page lacked recruiter-specific FAQ schema.
- Low: Lighthouse CI thresholds were not codified in the repository.

## Defects Fixed

- Added normalized project context data across the project catalog.
- Added shared project JSON-LD for Article, CreativeWork, BreadcrumbList, and FAQPage.
- Added a shared case-study snapshot panel, architecture preview, adjacent case-study section copy, and discuss-similar-work CTA for generic project pages.
- Added project type and team-size signals to the AWS Security Hub flagship case study.
- Added Playwright smoke tests for core production journeys.
- Added Lighthouse CI configuration targeting Performance 95+, Accessibility 100, Best Practices 100, and SEO 100.

## Screenshots

Screenshots should be generated during local QA into `tmp/qa-screenshots/` for:

- home desktop, tablet, mobile
- projects desktop, tablet, mobile
- AWS Security Hub case study desktop, tablet, mobile
- recruiter desktop, tablet, mobile
- dashboard desktop, tablet, mobile
- contact desktop, tablet, mobile

Temporary screenshots are intentionally excluded from version control.

## Performance And Accessibility

- Final LHCI median scores across `/`, `/projects`, `/projects/aws-security-hub-remediation-program`, `/recruiter`, `/dashboard`, and `/contact`:
  - Performance: 98-100
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- Accessibility fixes included contrast-safe dark-mode primary text, heading order corrections, descriptive link text, and visible-label/accessibility-name alignment.
- Local `next start` disables Vercel analytics scripts outside Vercel production to avoid false local 404 console failures while keeping production analytics enabled through Vercel environment detection.

## Production Readiness Score

Final estimate: 10/10.

Remaining risk is primarily external: live GitHub API availability, third-party analytics behavior, and Lighthouse variance by machine/network.
