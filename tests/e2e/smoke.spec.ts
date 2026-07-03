import { expect, test } from "@playwright/test";

const projectUrls = [
  "/projects/vm-audit-automation-platform",
  "/projects/aws-security-hub-remediation-program",
  "/projects/sap-development-environment-cost-optimization",
] as const;

const responsivePages = [
  "/",
  "/projects",
  "/projects/aws-security-hub-remediation-program",
  "/recruiter",
  "/dashboard",
  "/contact",
] as const;

test.describe("CloudFolio production smoke checks", () => {
  test("home page loads with primary CTAs", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    await expect(
      page.getByRole("heading", { name: /senior cloud infrastructure engineer/i }).first(),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /download resume/i }).first()).toHaveAttribute(
      "href",
      "/resume/narendra-pratap-singh-resume.pdf",
    );
    await expect(page.getByRole("link", { name: /recruiter hub/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /view projects/i }).first()).toBeVisible();
  });

  test("desktop navbar links navigate", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const nav = page.getByRole("navigation", { name: /primary navigation/i });
    const projectsLink = nav.getByRole("link", { name: "Projects" });
    const contactLink = nav.getByRole("link", { name: "Contact" });

    await expect(projectsLink).toHaveAttribute("href", "/projects");
    await Promise.all([page.waitForURL(/\/projects$/), projectsLink.click({ force: true })]);
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { name: /cloud, platform, and reliability/i }),
    ).toBeVisible();

    await Promise.all([page.waitForURL(/\/contact$/), contactLink.click({ force: true })]);
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: /let's connect/i })).toBeVisible();
  });

  test("mobile menu opens and pages have no horizontal overflow", async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/", { waitUntil: "load" });
    const mobileMenuButton = page.getByRole("button", { name: /open navigation menu/i });
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();

    for (const path of responsivePages) {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasHorizontalOverflow, `${path} should not overflow horizontally`).toBe(false);
    }
  });

  test("tablet layout has no horizontal overflow", async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width: 768, height: 1024 });

    for (const path of responsivePages) {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasHorizontalOverflow, `${path} should not overflow horizontally`).toBe(false);
    }
  });

  test("theme toggle switches between light and dark", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);
    await page
      .getByRole("button", { name: /switch theme to light/i })
      .first()
      .click();
    await expect(html).not.toHaveClass(/dark/);
    await page
      .getByRole("button", { name: /switch theme to dark/i })
      .first()
      .click();
    await expect(html).toHaveClass(/dark/);
  });

  test("resume PDF and contact email links are correct", async ({ page, request }) => {
    await page.goto("/resume", { waitUntil: "domcontentloaded" });

    await expect(
      page.locator('a[href="/resume/narendra-pratap-singh-resume.pdf"]').first(),
    ).toHaveAttribute("href", "/resume/narendra-pratap-singh-resume.pdf");
    await expect(page.getByRole("link", { name: /download resume pdf/i }).first()).toHaveAttribute(
      "download",
      "",
    );

    const pdfResponse = await request.get("/resume/narendra-pratap-singh-resume.pdf");
    expect(pdfResponse.status()).toBe(200);
    expect(pdfResponse.headers()["content-type"]).toContain("application/pdf");

    await page.goto("/contact", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /email narendra/i })).toHaveAttribute(
      "href",
      "mailto:napr.singh09@gmail.com?subject=CloudFolio%20Opportunity%20Discussion",
    );
    await expect(page.getByText(/visual contact helper/i)).toBeVisible();
  });

  test("project cards navigate to detail pages", async ({ page }) => {
    await page.goto("/projects", { waitUntil: "domcontentloaded" });

    for (const url of projectUrls) {
      await expect(page.locator(`a[href="${url}"]`).first()).toBeVisible();
    }

    await Promise.all([
      page.waitForURL(new RegExp(`${projectUrls[0]}$`)),
      page.locator(`a[href="${projectUrls[0]}"]`).first().click(),
    ]);
    await expect(page.getByRole("heading", { name: /vm audit/i }).first()).toBeVisible();
  });

  test("key project detail pages return case-study content", async ({ page }) => {
    for (const url of projectUrls) {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.getByText(/case study|project type/i).first()).toBeVisible();
      await expect(page.locator('script[type="application/ld+json"]').first()).toBeAttached();
    }
  });

  test("recruiter, dashboard, and activity pages load important widgets", async ({ page }) => {
    await page.goto("/recruiter", { waitUntil: "domcontentloaded" });
    await expect(
      page.getByRole("heading", { name: /narendra pratap singh/i }).first(),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /download resume/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /linkedin/i }).first()).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/narendra09-devops",
    );

    await page.goto("/dashboard", { waitUntil: "domcontentloaded" });
    await expect(
      page.getByRole("heading", { name: /living engineering dashboard/i }),
    ).toBeVisible();
    await expect(page.getByText(/narendra09-devops/i).first()).toBeVisible();
    await expect(page.getByText(/latest repositories/i)).toBeVisible();

    await page.goto("/activity", { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("important internal links do not return 404", async ({ request }) => {
    const urls = [
      "/",
      "/about",
      "/resume",
      "/projects",
      "/recruiter",
      "/dashboard",
      "/activity",
      "/contact",
      "/architecture",
      "/blog",
      ...projectUrls,
    ];

    for (const url of urls) {
      const response = await request.get(url);
      expect(response.status(), `${url} should return HTTP 200`).toBe(200);
    }
  });
});
