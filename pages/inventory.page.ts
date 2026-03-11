import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  private itemCard(itemName: string): Locator {
    return this.page
      .locator('[data-test="inventory-item"]')
      .filter({ has: this.page.locator('[data-test="inventory-item-name"]', { hasText: itemName }) });
  }

  private itemActionButton(itemName: string): Locator {
    return this.itemCard(itemName).locator('button');
  }

  async expectLoaded(message?: string): Promise<void> {
    await expect(
      this.page,
      message ?? 'Expected to be on the inventory page.',
    ).toHaveURL(/\/inventory\.html$/);
    await expect(
      this.title,
      message ?? 'Expected the inventory page title to be Products.',
    ).toHaveText('Products');
  }
  }
}