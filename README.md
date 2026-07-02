# CloudFolio

CloudFolio is a production-grade open-source portfolio project designed to demonstrate modern cloud, DevOps, application engineering, and software delivery practices through a real, maintainable product.

The repository is intentionally starting with a clean foundation before application code is added. This keeps the project structured, documented, and ready for long-term iteration.

## Vision

CloudFolio will become a polished engineering portfolio that presents projects, experience, architecture decisions, operational practices, and learning progress in one cohesive product.

The project is intended to show not only the final user interface, but also the engineering discipline behind it: clear documentation, explicit decisions, secure defaults, maintainable workflows, and incremental delivery.

## Goals

- Build a professional portfolio suitable for public review by engineering teams, recruiters, and collaborators.
- Demonstrate production-oriented frontend, backend, cloud, and DevOps practices over time.
- Maintain clear project documentation from the beginning.
- Record important technical decisions and learning milestones as the project evolves.
- Keep the repository clean, understandable, and approachable for contributors.

## Planned Technology Stack

The application foundation uses:

- Frontend: Next.js, React, TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Theme: next-themes
- Content: MDX support through `@next/mdx`
- Testing: Unit, integration, accessibility, and end-to-end tests
- Quality: Formatting, linting, type checking, and automated validation
- Deployment: Vercel-ready project structure
- Infrastructure: Infrastructure as code where appropriate
- Observability: Logging, monitoring, and performance tracking

Docker and infrastructure code have not been added yet.

## Planned Architecture

CloudFolio is expected to evolve into a modular web application with clear separation between:

- Presentation layer for portfolio pages and user-facing experiences
- Content layer for projects, experience, notes, and case studies
- Design system layer for reusable UI patterns
- Data and integration layer for future APIs or external services
- Delivery layer for deployment, quality gates, and operational automation

Architecture decisions will be recorded in [DECISIONS.md](DECISIONS.md) as the project moves from foundation to implementation.

## Roadmap

- Milestone 1: Repository foundation, documentation, and contribution standards
- Milestone 2: Application scaffold and development tooling
- Milestone 3: Core portfolio experience and content model
- Milestone 4: Testing, accessibility, and quality gates
- Milestone 5: Deployment, observability, and release workflow
- Milestone 6: Advanced cloud and DevOps demonstrations

## Development Workflow

The project will follow an incremental workflow:

1. Define the milestone scope before implementation.
2. Keep changes small, reviewable, and documented.
3. Record major decisions in `DECISIONS.md`.
4. Update `CHANGELOG.md` for meaningful user-facing or project-level changes.
5. Keep learning notes in `LEARNING.md` when new concepts, tradeoffs, or lessons are discovered.

## Local Development

Prerequisites:

- Node.js 20 or newer
- npm 10 or newer

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Validate the project:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Analytics

CloudFolio uses Vercel Analytics and Vercel Speed Insights for privacy-friendly usage and
performance telemetry.

- Analytics only captures page and CTA interactions needed for portfolio review.
- No email content, form message content, IP address, or other sensitive personal data is tracked.
- Custom events are limited to the event name plus a small set of contextual fields such as page
  section and CTA type.

To disable analytics locally, set:

```bash
NEXT_PUBLIC_VERCEL_ANALYTICS=false
```

To verify analytics in production, open the Vercel dashboard for the project and review the
Analytics and Speed Insights sections after deploying to the `main` branch.

End-to-end tests are prepared with Playwright and will become meaningful once user-facing pages are implemented.

## Project Structure

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── content/
├── hooks/
├── lib/
├── styles/
├── types/
├── utils/
├── config/
└── constants/
```

## Contributing

Contributions are welcome once the project begins accepting external changes. Please read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before opening issues or pull requests.

## License

CloudFolio is licensed under the MIT License. See [LICENSE](LICENSE) for details.
