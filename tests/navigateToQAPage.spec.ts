import { test } from "@playwright/test";
import { HomePage } from "../pages/homePage";

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.notolytix.com/');
});

test('navigate to QA job posting page', async({page}) => {
  const newPage = new HomePage(page);
  await newPage.navigateToQAPostingPage()
})
