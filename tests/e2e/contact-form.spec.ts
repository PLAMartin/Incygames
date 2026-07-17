import { test, expect } from "@playwright/test";

test("blocks an empty submission with field-level validation errors", async ({
  page,
}) => {
  await page.goto("/contact");

  // Wait out the anti-spam minimum completion time so real validation runs.
  await page.waitForTimeout(3800);
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(
    page.getByText("Too small: expected string to have >=2 characters"),
  ).toBeVisible();
  await expect(page.getByText("Invalid email address")).toBeVisible();
  await expect(
    page.getByText("Please acknowledge the privacy policy to continue."),
  ).toBeVisible();
});

test("shows a confirmation once a valid enquiry is submitted", async ({
  page,
}) => {
  await page.goto("/contact");

  await page.getByLabel("Name *").fill("Jane Tester");
  await page.getByLabel("Email address *").fill("jane@example.com");
  await page.getByLabel("Enquiry type *").selectOption("Partnership");
  await page
    .getByLabel("Message *")
    .fill(
      "This is a test enquiry message that is long enough to pass validation.",
    );
  await page.getByLabel(/I understand how Incygames/).check();

  await page.waitForTimeout(3800);
  page.on("dialog", (dialog) => dialog.dismiss());

  await page.getByRole("button", { name: "Send message" }).click();

  await expect(
    page.getByText("Your email application should now open."),
  ).toBeVisible();
});
