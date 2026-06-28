# Code and Repository Standards

This document defines future engineering standards for CloudFolio. No application code exists yet.

## Branch Strategy

- `main` represents the stable public branch.
- Feature work should happen in short-lived branches.
- Branch names should describe the change clearly.
- Pull requests should be used for meaningful changes once collaboration begins.

Suggested branch naming:

- `docs/product-blueprint`
- `feature/project-bootstrap`
- `feature/design-system`
- `fix/accessibility-navigation`
- `chore/update-documentation`

## Commit Conventions

Use concise conventional commit-style messages:

- `chore: initialize repository foundation`
- `docs: add product blueprint`
- `feature: scaffold application shell`
- `fix: correct resume metadata`
- `refactor: simplify content loader`
- `test: add project card coverage`

Commit messages should describe the intent of the change.

## Naming Conventions

- Markdown documents should use clear numbered or descriptive names.
- Routes and slugs should use lowercase kebab-case.
- Components should use clear domain names.
- Content entries should use stable slugs.
- Environment variables should use uppercase snake case when introduced.

## Folder Conventions

Future folders should separate concerns clearly:

- Application source
- Reusable components
- Content
- Assets
- Tests
- Documentation
- Configuration

Folder structure should be introduced during the project bootstrap milestone, not before.

## Documentation Rules

- Update documentation when architecture, workflow, or major behavior changes.
- Record significant tradeoffs in `DECISIONS.md`.
- Keep `CHANGELOG.md` current for notable project-level changes.
- Avoid stale setup instructions.
- Prefer concise, accurate documentation over long generic explanations.

## Testing Philosophy

Testing should scale with risk:

- Unit tests for reusable logic
- Component tests for important UI behavior
- Accessibility checks for navigation and forms
- End-to-end tests for recruiter, resume, contact, and content discovery flows
- Build validation before deployment

Tests should protect user-facing behavior and important engineering contracts.

## Review Checklist

Before merging meaningful changes, verify:

- Scope is clear and focused
- Documentation is updated
- Accessibility is considered
- No secrets or private data are committed
- Naming and structure are consistent
- User-facing content is accurate
- Tests or validation match the risk of the change
- New dependencies are justified
- Architecture decisions are recorded when needed
