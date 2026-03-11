import { type Locator, type Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly finishButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item-name"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click();
  }
}