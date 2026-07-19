import { test, expect } from "@playwright/test";

// These tests exercise the desktop navigation and card layout; mobile menu
// behaviour has its own dedicated spec (navigation.spec.ts).
test.use({ viewport: { width: 1280, height: 800 } });

test("homepage loads and explains Incygames", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Useful software, built one real problem at a time.",
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

  const expectations: { label: string; domain: string }[] = [
    { label: "Visit Daily View", domain: "dailyview.org" },
    { label: "Try Role CV", domain: "rolecv.com" },
    { label: "Visit Daily Product Idea", domain: "dailyproductidea.com" },
    { label: "Visit Conxy", domain: "conxy.co" },
  ];

  for (const { label, domain } of expectations) {
    const link = page.getByRole("link", { name: new RegExp(`^${label}`) });
    await expect(link).toHaveAttribute("href", new RegExp(domain));
  }
});

test("homepage includes the new founder, experiments and newsletter sections", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "What we’re testing now" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Built from experience. Developed through experimentation.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Follow the experiments" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Read the free newsletter" }),
  ).toHaveAttribute("href", "https://abitgamey.substack.com/");
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
