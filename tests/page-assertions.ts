import { expect, type Locator, type Page } from '@playwright/test';

import { CartPage } from '../pages/cart.page';
import { CheckoutCompletePage } from '../pages/checkout-complete.page';
import { CheckoutInformationPage } from '../pages/checkout-information.page';
import { CheckoutOverviewPage } from '../pages/checkout-overview.page';
import { InventoryPage } from '../pages/inventory.page';

export async function expectInventoryPageLoaded(
  page: Page,
  inventoryPage: InventoryPage,
  message = 'Expected to be on the inventory page.',
): Promise<void> {
  await expect(page, message).toHaveURL(inventoryPage.url);
  await expect(
    inventoryPage.title,
    'Expected the inventory page title to be Products.',
  ).toHaveText('Products');
}

export async function expectCartPageLoaded(
  page: Page,
  cartPage: CartPage,
  message = 'Expected to be on the cart page.',
): Promise<void> {
  await expect(page, message).toHaveURL(cartPage.url);
  await expect(cartPage.title, 'Expected the cart page title to be Your Cart.').toHaveText('Your Cart');
}

export async function expectCheckoutInformationPageLoaded(
  page: Page,
  checkoutInformationPage: CheckoutInformationPage,
  message = 'Expected to be on the checkout information page.',
): Promise<void> {
  await expect(page, message).toHaveURL(checkoutInformationPage.url);
  await expect(
    checkoutInformationPage.title,
    'Expected the checkout information title to match.',
  ).toHaveText('Checkout: Your Information');
}

export async function expectCheckoutOverviewPageLoaded(
  page: Page,
  checkoutOverviewPage: CheckoutOverviewPage,
  message = 'Expected to be on the checkout overview page.',
): Promise<void> {
  await expect(page, message).toHaveURL(checkoutOverviewPage.url);
  await expect(
    checkoutOverviewPage.title,
    'Expected the checkout overview title to match.',
  ).toHaveText('Checkout: Overview');
}

export async function expectCheckoutCompletePageLoaded(
  page: Page,
  checkoutCompletePage: CheckoutCompletePage,
  message = 'Expected to be on the checkout complete page.',
): Promise<void> {
  await expect(page, message).toHaveURL(checkoutCompletePage.url);
  await expect(
    checkoutCompletePage.title,
    'Expected the checkout complete title to match.',
  ).toHaveText('Checkout: Complete!');
  await expect(
    checkoutCompletePage.completeHeader,
    'Expected the order completion confirmation message.',
  ).toHaveText('Thank you for your order!');
}

export async function expectInventoryItemAction(
  inventoryPage: InventoryPage,
  itemName: string,
  label: string,
): Promise<void> {
  await expect(
    inventoryPage.itemActionButton(itemName),
    `Expected ${itemName} to show the ${label} action.`,
  ).toHaveText(label);
}

export async function expectCartBadgeCount(
  inventoryPage: InventoryPage,
  count: number,
): Promise<void> {
  if (count === 0) {
    await expect(
      inventoryPage.shoppingCartBadge,
      'Expected the cart badge to be hidden when the cart is empty.',
    ).toBeHidden();

    return;
  }

  await expect(
    inventoryPage.shoppingCartBadge,
    `Expected the cart badge to show ${count} item(s).`,
  ).toHaveText(String(count));
}

export async function expectItemNames(
  items: Locator,
  message: string,
  itemNames: string[],
): Promise<void> {
  await expect(items, message).toHaveText(itemNames);
}