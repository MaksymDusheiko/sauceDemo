import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  private itemCard(itemName: string): Locator {
    return this.page
      .locator('[data-test="inventory-item"]')
      .filter({ has: this.page.locator('[data-test="inventory-item-name"]', { hasText: itemName }) });
  }

  itemActionButton(itemName: string): Locator {
    return this.itemCard(itemName).locator('button');
  }

  async addItemToCart(itemName: string): Promise<void> {
    await this.itemActionButton(itemName).click();
  }

  async removeItemFromCart(itemName: string): Promise<void> {
    await this.itemActionButton(itemName).click();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }
}