import { expect } from '@playwright/test';

import { CartPage } from '@pages/cart.page';

export class CartExpect {
  constructor(private readonly cartPage: CartPage) {}

  async pageToBeLoaded(message = 'Expected to be on the cart page.'): Promise<void> {
    await expect(this.cartPage.page, message).toHaveURL(/\/cart\.html$/);
    await expect(
      this.cartPage.title,
      'Expected the cart page title to be Your Cart.',
    ).toHaveText('Your Cart');
  }

  async toContainItems(
    itemNames: string[],
    message = 'Expected the cart to contain the selected items.',
  ): Promise<void> {
    await expect(this.cartPage.cartItems, message).toHaveText(itemNames);
  }

  async toBeEmpty(message = 'Expected the cart to be empty.'): Promise<void> {
    await expect(this.cartPage.cartItems, message).toHaveCount(0);
  }
}
