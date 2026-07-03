# CloudFolio v2 Roadmap

CloudFolio v2 should build on the v1 foundation with deeper automation, stronger validation, richer content, and better release observability.

## v2 Objectives

- Improve confidence through automated UI, link, accessibility, and Lighthouse checks.
- Add richer content formats for architecture, case studies, and technical writing.
- Improve recruiter conversion measurement without collecting sensitive data.
- Add production screenshots and visual release assets.
- Prepare for custom-domain launch and long-term SEO growth.

## Priority 1: Quality Automation

- Add Playwright smoke tests for home, recruiter, resume, projects, VM Audit, contact, dashboard, and activity.
- Add automated internal link validation.
- Add resume PDF existence and download route tests.
- Add Lighthouse CI for production and preview deployments.
- Add accessibility checks with axe or Playwright accessibility assertions.

## Priority 2: SEO and Structured Data

- Add route-specific breadcrumb JSON-LD.
- Add Article structured data for blog and architecture pages.
- Add CreativeWork or TechArticle schema for case studies.
- Add OpenGraph image generation.
- Add canonical-host verification in CI.

## Priority 3: Recruiter Experience

- Add a printable recruiter one-page summary.
- Add regional recruiter landing variants for Germany, Europe, UAE, and remote roles.
- Add role-specific project filtering.
- Add a short availability and interview-readiness section fed from config.

## Priority 4: Content and Case Studies

- Expand VM Audit case study with sanitized implementation artifacts.
- Add architecture diagrams for every major project.
- Add deeper lessons learned for security, cost, reliability, and platform automation.
- Add blog categories and article archive filtering.

## Priority 5: Observability and Operations

- Add deployment health checks.
- Add uptime monitoring for production and custom domain.
- Add analytics event review documentation.
- Add release runbook for patch releases.

## Priority 6: Design and Media

- Capture and commit production screenshots.
- Add release image assets for LinkedIn and GitHub.
- Add generated OpenGraph preview images.
- Improve responsive screenshots in documentation.

## Candidate v2 Milestones

1. v1.1: Automated smoke tests, link checks, and Lighthouse CI.
2. v1.2: OpenGraph images and richer structured data.
3. v1.3: Recruiter one-page summary and regional landing content.
4. v2.0: Full release automation, visual assets, and expanded technical content library.
