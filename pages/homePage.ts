import { Page, expect } from "@playwright/test";

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToQAPostingPage() {
    await this.page.locator("//span[contains(text(),'Company')]").hover();
    await this.page.locator('ul > li > a[href="/careers"]').first().click();
    await this.page.locator('a[href="/job/qa-engineer"]').click();

    await expect(this.page.locator('.hiring')).toHaveText('We\'re Hiring!');
    await expect(this.page.locator('h1.title')).toHaveText('QA Engineer');
    }
}
