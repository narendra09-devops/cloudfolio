# CloudFolio Launch Checklist

## Release Readiness

- [ ] CI passing
- [ ] `npm run format:check` passing
- [ ] `npm run lint` passing
- [ ] `npm run typecheck` passing
- [ ] `npm run test -- --run` passing
- [ ] `npm run test:e2e` passing
- [ ] `npm run build` passing

## Analytics

- [ ] Vercel Analytics enabled
- [ ] Vercel Speed Insights enabled
- [ ] Home page view recorded
- [ ] Recruiter page view recorded
- [ ] Resume view/download events recorded
- [ ] Contact CTA events recorded
- [ ] GitHub and LinkedIn outbound events recorded

## Recruiter Flows

- [ ] Resume page loads
- [ ] Resume PDF opens
- [ ] Resume PDF downloads
- [ ] Contact email link opens with the expected subject
- [ ] LinkedIn link opens in a new tab
- [ ] GitHub link opens in a new tab
- [ ] Recruiter Hub loads on desktop
- [ ] Recruiter Hub loads on mobile
- [ ] Featured projects link to case studies

## Quality Gates

- [ ] Lighthouse Performance score is greater than 90
- [ ] Lighthouse Accessibility score is greater than 95
- [ ] Lighthouse Best Practices score is greater than 95
- [ ] Lighthouse SEO score is greater than 95
- [ ] Mobile navigation works
- [ ] Dark mode renders correctly
- [ ] Light mode renders correctly
- [ ] Playwright smoke tests cover primary routes and CTAs
- [ ] No console errors on primary routes

## SEO Validation

- [ ] `NEXT_PUBLIC_SITE_URL` points to the canonical custom domain
- [ ] `NEXT_PUBLIC_DOMAIN` matches the canonical custom domain host
- [ ] Canonical URLs use the custom domain
- [ ] OpenGraph metadata is present
- [ ] Twitter card metadata is present
- [ ] JSON-LD validates in Rich Results Test or Schema Markup Validator
- [ ] `robots.txt` allows crawling
- [ ] `sitemap.xml` uses absolute custom-domain URLs
- [ ] Google Search Console domain property verified
- [ ] Sitemap submitted in Google Search Console

## Domain Verification

- [ ] Domain added in Vercel
- [ ] DNS records configured
- [ ] SSL certificate issued
- [ ] Apex domain works
- [ ] `www` behavior matches the chosen canonical strategy
- [ ] Legacy Vercel URL redirects after custom-domain env vars are deployed
- [ ] Search Console URL inspection confirms Google-selected canonical
