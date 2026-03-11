import { type Locator, type Page } from '@playwright/test';

export class CheckoutCompletePage {
  readonly title: Locator;
  readonly completeHeader: Locator;
  readonly backHomeButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async goBackHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}