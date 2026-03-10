import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/inventory\.html$/);
    await expect(this.title).toHaveText('Products');
  }
}