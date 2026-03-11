import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly finishButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item-name"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async expectLoaded(message?: string): Promise<void> {
    await expect(
      this.page,
      message ?? 'Expected to be on the checkout overview page.',
    ).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(
      this.title,
      message ?? 'Expected the checkout overview title to match.',
    ).toHaveText('Checkout: Overview');
  }

  async expectItems(itemNames: string[], message?: string): Promise<void> {
    await expect(
      this.cartItems,
      message ?? 'Expected the checkout overview to contain the selected items.',
    ).toHaveText(itemNames);
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click();
  }
}