# CloudFolio Custom Domain Setup

Use environment variables for the launch domain. Do not hardcode the final domain in application code.

## 1. Buy domain

Choose and purchase the final portfolio domain, for example one of:

- `narendrasingh.dev`
- `narendrapratap.dev`
- `npsre.dev`
- `narendra.cloud`

## 2. Add in Vercel

1. Open the CloudFolio project in Vercel.
2. Go to **Settings > Domains**.
3. Add the apex domain, for example `example.dev`.
4. Add the `www` subdomain if it will be used.
5. Choose one canonical host. Recommended: apex domain for a personal portfolio.

## 3. Configure DNS

For an apex domain, create the Vercel `A` record shown in the Vercel domain screen.

For `www`, create the Vercel `CNAME` record shown in the Vercel domain screen.

Keep DNS TTL low during launch, for example 300 seconds, then raise it after verification.

## 4. Verify SSL

1. Wait for Vercel to issue the certificate.
2. Confirm the domain status is valid in Vercel.
3. Open `https://<domain>` and verify no certificate warning appears.
4. Verify both apex and `www` behavior match the chosen canonical host.

## 5. Configure redirects

CloudFolio redirects the legacy production host to the configured custom domain when `NEXT_PUBLIC_SITE_URL` points away from `cloudfolio-xi.vercel.app`.

Recommended Vercel environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://<canonical-domain>
NEXT_PUBLIC_DOMAIN=<canonical-domain>
```

If using both apex and `www`, configure Vercel domain redirects so the non-canonical host redirects to the canonical host.

## 6. Update env vars

Set these in Vercel for Production, Preview, and Development as appropriate:

```bash
NEXT_PUBLIC_SITE_URL=https://<canonical-domain>
NEXT_PUBLIC_DOMAIN=<canonical-domain>
NEXT_PUBLIC_GITHUB_USERNAME=narendra09-devops
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

Redeploy production after changing environment variables.

## 7. Verify sitemap

Open:

```text
https://<canonical-domain>/sitemap.xml
```

Confirm every URL uses the custom domain and includes:

- Home
- About
- Projects and project detail pages
- Blog and blog detail pages
- Architecture and architecture detail pages
- Dashboard
- Activity
- Timeline
- Resume
- Recruiter
- Contact
- Notes
- Learning

## 8. Verify Search Console

1. Add the custom domain property in Google Search Console.
2. Verify ownership through DNS TXT record.
3. Submit `https://<canonical-domain>/sitemap.xml`.
4. Inspect the home page URL and request indexing after launch.
5. Monitor coverage, canonical selection, and crawl errors.

## 9. Verify analytics

1. Open Vercel Analytics for the project.
2. Visit the home, recruiter, resume, project, and contact pages on the custom domain.
3. Confirm page views are recorded.
4. Test resume download, contact email, GitHub, and LinkedIn events.
