import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item-name"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async startCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}