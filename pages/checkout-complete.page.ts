import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutCompletePage {
  readonly title: Locator;
  readonly completeHeader: Locator;
  readonly backHomeButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async expectLoaded(message?: string): Promise<void> {
    await expect(
      this.page,
      message ?? 'Expected to be on the checkout complete page.',
    ).toHaveURL(/\/checkout-complete\.html$/);
    await expect(
      this.title,
      message ?? 'Expected the checkout complete title to match.',
    ).toHaveText('Checkout: Complete!');
    await expect(
      this.completeHeader,
      message ?? 'Expected the order completion confirmation message.',
    ).toHaveText('Thank you for your order!');
  }

  async goBackHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}