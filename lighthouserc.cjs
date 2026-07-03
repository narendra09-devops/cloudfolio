/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("@playwright/test");

module.exports = {
  ci: {
    collect: {
      chromePath: chromium.executablePath(),
      startServerCommand: "npm run start",
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/projects",
        "http://127.0.0.1:3000/projects/aws-security-hub-remediation-program",
        "http://127.0.0.1:3000/recruiter",
        "http://127.0.0.1:3000/dashboard",
        "http://127.0.0.1:3000/contact",
      ],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        chromeFlags: "--no-sandbox --disable-dev-shm-usage",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
        "color-contrast": "error",
        "image-alt": "error",
        "link-name": "error",
        "meta-description": "error",
        "document-title": "error",
        canonical: "error",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
