import { expect, test } from "@playwright/test";

const projectUrls = [
  "/projects/vm-audit-automation-platform",
  "/projects/aws-security-hub-remediation-program",
  "/projects/sap-development-environment-cost-optimization",
] as const;

test.describe("CloudFolio production smoke checks", () => {
  test("home page loads with primary CTAs", async ({ page }) => {
    await page.goto("/");

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
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: /primary navigation/i });
    await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    await nav.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { name: /cloud, platform, and reliability/i }),
    ).toBeVisible();

    await nav.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: /let's connect/i })).toBeVisible();
  });

  test("mobile menu opens and has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: /open navigation menu/i }).click();
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test("theme toggle switches between light and dark", async ({ page }) => {
    await page.goto("/");

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
    await page.goto("/resume");

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

    await page.goto("/contact");
    await expect(page.getByRole("link", { name: /email narendra/i })).toHaveAttribute(
      "href",
      "mailto:napr.singh09@gmail.com?subject=CloudFolio%20Opportunity%20Discussion",
    );
    await expect(page.getByText(/visual contact helper/i)).toBeVisible();
  });

  test("project cards navigate to detail pages", async ({ page }) => {
    await page.goto("/projects");

    for (const url of projectUrls) {
      const link = page.locator(`a[href="${url}"]`).first();
      await expect(link).toBeVisible();
    }

    await Promise.all([
      page.waitForURL(new RegExp(`${projectUrls[0]}$`)),
      page.locator(`a[href="${projectUrls[0]}"]`).first().click(),
    ]);
    await expect(page.getByRole("heading", { name: /vm audit/i }).first()).toBeVisible();
  });

  test("key project detail pages return content", async ({ page }) => {
    for (const url of projectUrls) {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(
        page.getByRole("link", { name: /resume|contact|projects|case study/i }).first(),
      ).toBeVisible();
    }
  });

  test("recruiter and dashboard pages load important widgets", async ({ page }) => {
    await page.goto("/recruiter");
    await expect(
      page.getByRole("heading", { name: /narendra pratap singh/i }).first(),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /download resume/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /linkedin/i }).first()).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/narendra09-devops",
    );

    await page.goto("/dashboard");
    await expect(
      page.getByRole("heading", { name: /living engineering dashboard/i }),
    ).toBeVisible();
    await expect(page.getByText(/narendra09-devops/i).first()).toBeVisible();
  });
});
