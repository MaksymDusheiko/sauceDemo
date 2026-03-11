import { expect } from '@playwright/test';

import { InventoryPage } from '@pages/inventory.page';

export class InventoryExpect {
  constructor(private readonly inventoryPage: InventoryPage) {}

  async pageToBeLoaded(message = 'Expected to be on the inventory page.'): Promise<void> {
    await expect(this.inventoryPage.page, message).toHaveURL(/\/inventory\.html$/);
    await expect(
      this.inventoryPage.title,
      message ?? 'Expected the inventory page title to be Products.',
    ).toHaveText('Products');
  }

  async cartCountToBe(count: number): Promise<void> {
    if (count === 0) {
      await expect(
        this.inventoryPage.shoppingCartBadge,
        'Expected the cart badge to be hidden when the cart is empty.',
      ).toBeHidden();

      return;
    }

    await expect(
      this.inventoryPage.shoppingCartBadge,
      `Expected the cart badge to show ${count} item(s).`,
    ).toHaveText(String(count));
  }

  async itemActionToBe(itemName: string, label: string): Promise<void> {
    await expect(
      this.inventoryPage.itemActionButton(itemName),
      `Expected ${itemName} to show the ${label} action.`,
    ).toHaveText(label);
  }
}
