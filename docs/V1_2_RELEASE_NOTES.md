# CloudFolio v1.2 Release Notes

## Summary

CloudFolio v1.2 adds a recruiter-friendly discovery layer across projects, blog posts, and architecture topics. The goal is faster scanning, better filtering, and cleaner navigation without changing the underlying portfolio facts.

## Highlights

- Added search input and colorful filter chips to `/projects`.
- Added search input, topic filters, and reading filters to `/blog`.
- Added search input and focus filters to `/architecture`.
- Added a compact homepage discovery section that links to filtered project and architecture views.
- Added searchable metadata fields to portfolio content objects so filters can work on titles, summaries, technologies, categories, outcomes, roles, and related text.
- Added Playwright coverage for search, filters, clear filters, empty states, and mobile no-horizontal-scroll behavior.

## Metadata

New optional metadata fields can be added to content modules when search should reach more than the existing title and summary fields:

- `category`
- `projectType`
- `focusAreas`
- `outcomes`
- `seniorityKeywords`
- `searchableText`

## Testing Coverage

New smoke coverage includes:

- Project search and filters
- Blog search and filters
- Architecture search and filters
- Clear filter behavior
- Empty state rendering
- Mobile responsive overflow checks

## Quality Gates

Run before release:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npm run test:e2e
```
