import { test, expect } from "@playwright/test"

const url = "https://adaptiveconsulting.github.io/early-careers-ui-kit-1/"

test("that deployment is correct by navigating through different pages", async ({
  page,
}) => {
  await page.goto(url)
  await page.goto(
    url + "?path=/story/design-system-color-palette--color-palette",
  )
  await expect(page).toHaveTitle(
    "Design System / Color Palette - Color Palette ⋅ Storybook",
  )
  await page.goto(url + "?path=/story/components-button--button-story")
  await expect(page).toHaveTitle("Components / Button - Button ⋅ Storybook")
  await page.goto(url + "?path=/story/components-checkbox--checkbox-story")
  await expect(page).toHaveTitle("Components / Checkbox - Checkbox ⋅ Storybook")
  await page.goto(url + "?path=/story/components-pill--pill-story")
  await expect(page).toHaveTitle("Components / Pill - Pill ⋅ Storybook")
})
