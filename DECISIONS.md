# Architecture and Engineering Decisions

This file records important technical and project decisions for CloudFolio.

The goal is to make tradeoffs visible over time so future contributors can understand why the project evolved in a particular direction.

## Decision Log

### 0002 - Bootstrap with Next.js 15 App Router and TypeScript

Date: 2026-06-28

Status: Accepted

## Context

CloudFolio needs a production-grade application foundation that can support a content-rich engineering portfolio, recruiter workflows, MDX content, strong SEO, accessibility, testing, and future integrations.

## Decision

Use Next.js 15 with the App Router, TypeScript, Tailwind CSS, MDX support, Framer Motion, Lucide React, and next-themes.

Adopt ESLint, Prettier, Husky, lint-staged, Vitest, Playwright, and GitHub Actions from the bootstrap milestone so quality gates are present before feature work begins.

## Consequences

- The project now has a runnable application foundation.
- Future milestones can focus on design system and page implementation.
- Configuration and validation scripts must be maintained as the application grows.

### 0001 - Start with repository foundation before application code

Date: 2026-06-28

Status: Accepted

## Context

CloudFolio is intended to be a long-term, production-grade portfolio project. Starting directly with framework code would make it easy to skip documentation, contribution standards, and project direction.

## Decision

Create the repository foundation first, including documentation, contribution guidance, security policy, changelog, decision log, learning log, editor configuration, and ignore rules.

Application scaffolding, dependencies, Docker configuration, and CI workflows will be introduced in later milestones.

## Consequences

- The repository begins with a clear professional structure.
- Future milestones can be planned and reviewed more deliberately.
- There is no runnable application yet, by design.
