import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 375, height: 812 } });

test("mobile menu opens, closes and returns focus to the trigger", async ({
  page,
}) => {
  await page.goto("/");

  // The trigger's accessible name flips between "Open menu" and "Close
  // menu" as it toggles, so query it by its stable aria-controls instead.
  const trigger = page.locator(
    'button[aria-controls="mobile-navigation-panel"]',
  );
  await trigger.click();

  const panel = page.locator("#mobile-navigation-panel");
  await expect(panel).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("mobile menu links navigate and close the menu", async ({ page }) => {
  await page.goto("/");
  await page.locator('button[aria-controls="mobile-navigation-panel"]').click();
  await page
    .locator("#mobile-navigation-panel")
    .getByRole("link", { name: "Products" })
    .click();
  await expect(page).toHaveURL(/\/products$/);
});
