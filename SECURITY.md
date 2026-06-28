# Security Policy

## Supported Versions

CloudFolio is in early development. There are no released application versions yet.

Security guidance will be updated as the project begins shipping application code and deployment infrastructure.

## Reporting a Vulnerability

Please do not publicly disclose security vulnerabilities before maintainers have had a reasonable opportunity to investigate and respond.

To report a vulnerability, open a private security advisory on GitHub if available, or contact the project maintainer through the repository owner profile.

Please include:

- A clear description of the issue
- Steps to reproduce, if applicable
- Potential impact
- Any suggested remediation

## Security Expectations

Future implementation work should prioritize:

- Secure defaults
- Minimal dependency surface
- Secret-free commits
- Dependency review
- Input validation
- Least-privilege access
- Clear operational documentation

No secrets, credentials, tokens, or environment-specific configuration should be committed to this repository.
