import { test, expect } from "@playwright/test";

// These tests exercise the desktop navigation and card layout; mobile menu
// behaviour has its own dedicated spec (navigation.spec.ts).
test.use({ viewport: { width: 1280, height: 800 } });

test("homepage loads and explains Incygames", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Small software products for real-world problems.",
  );
});

test("main navigation links work", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Products" })
    .click();
  await expect(page).toHaveURL(/\/products$/);

  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "About" })
    .click();
  await expect(page).toHaveURL(/\/about$/);

  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("product cards open the correct Incygames detail page", async ({
  page,
}) => {
  await page.goto("/products");
  await page.getByRole("link", { name: "Daily View" }).first().click();
  await expect(page).toHaveURL(/\/products\/daily-view$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Daily View",
  );
});

test("external product CTAs point at the configured product domains", async ({
  page,
}) => {
  await page.goto("/products");

  const expectations: Record<string, string> = {
    "Daily View": "dailyview.org",
    "Role CV": "rolecv.com",
    "Daily Product Idea": "dailyproductidea.com",
    Conxy: "conxy.co",
  };

  for (const [name, domain] of Object.entries(expectations)) {
    const link = page.getByRole("link", { name: new RegExp(`^Visit ${name}`) });
    await expect(link).toHaveAttribute("href", new RegExp(domain));
  }
});

test("legal pages load", async ({ page }) => {
  for (const path of ["/privacy", "/cookies", "/terms", "/accessibility"]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("unknown routes show the custom 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Page not found" }),
  ).toBeVisible();
});
