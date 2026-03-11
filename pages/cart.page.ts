import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item-name"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async expectLoaded(message?: string): Promise<void> {
    await expect(
      this.page,
      message ?? 'Expected to be on the cart page.',
    ).toHaveURL(/\/cart\.html$/);
    await expect(
      this.title,
      message ?? 'Expected the cart page title to be Your Cart.',
    ).toHaveText('Your Cart');
  }

  async expectItems(itemNames: string[], message?: string): Promise<void> {
    await expect(
      this.cartItems,
      message ?? 'Expected the cart to contain the selected items.',
    ).toHaveText(itemNames);
  }

  async expectEmpty(message?: string): Promise<void> {
    await expect(
      this.cartItems,
      message ?? 'Expected the cart to be empty.',
    ).toHaveCount(0);
  }

  async startCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}