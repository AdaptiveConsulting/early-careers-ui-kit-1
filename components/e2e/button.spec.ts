import { expect, test } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto(
    "https://adaptiveconsulting.github.io/early-careers-ui-kit-1/",
  )
  await page.goto(
    "https://adaptiveconsulting.github.io/early-careers-ui-kit-1/?path=/docs/design-system-about--docs",
  )
  await page.getByRole("link", { name: "Button" }).click()
  await page.getByLabel("secondary").check()
  await expect(page.getByLabel("secondary")).toBeChecked()
  await page.getByLabel("tertiary").check()
  await expect(page.getByLabel("tertiary")).toBeChecked()
  await page.getByPlaceholder("Edit string...").dblclick()
  await page.getByPlaceholder("Edit string...").press("Meta+Shift+ArrowLeft")
  await page.getByPlaceholder("Edit string...").fill("Change Label")
  await page
    .getByRole("cell", { name: "Choose color..." })
    .locator("div")
    .nth(2)
    .click()
  await page.getByRole("slider", { name: "Color" }).click()
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole("button", { name: "Change Label" })
    .click()
})
