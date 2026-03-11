import { CartExpect } from '@expects/cart.expect';
import { CheckoutExpect } from '@expects/checkout.expect';
import { InventoryExpect } from '@expects/inventory.expect';
import { LoginExpect } from '@expects/login.expect';

import { pageFixtures } from '@fixtures/page.fixture';

export type ExpectFixtures = {
  loginExpect: LoginExpect;
  inventoryExpect: InventoryExpect;
  cartExpect: CartExpect;
  checkoutExpect: CheckoutExpect;
};

export const expectFixtures = pageFixtures.extend<ExpectFixtures>({
  loginExpect: async ({ loginPage }, use) => {
    await use(new LoginExpect(loginPage));
  },
  inventoryExpect: async ({ inventoryPage }, use) => {
    await use(new InventoryExpect(inventoryPage));
  },
  cartExpect: async ({ cartPage }, use) => {
    await use(new CartExpect(cartPage));
  },
  checkoutExpect: async (
    { checkoutCompletePage, checkoutInformationPage, checkoutOverviewPage },
    use,
  ) => {
    await use(
      new CheckoutExpect(
        checkoutInformationPage,
        checkoutOverviewPage,
        checkoutCompletePage,
      ),
    );
  },
});
