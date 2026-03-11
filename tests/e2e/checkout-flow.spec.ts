import { test } from '@fixtures/test.fixture';

test.describe('Sauce Demo checkout', () => {
  test('allows a standard user to complete checkout with a few items', async ({
    cartExpect,
    cartPage,
    checkoutExpect,
    checkoutCompletePage,
    checkoutInformationPage,
    checkoutOverviewPage,
    getUser,
    inventoryExpect,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser();
    const itemNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryExpect.pageToBeLoaded();

    for (const itemName of itemNames) {
      await inventoryPage.addItemToCart(itemName);
    }

    await inventoryPage.openCart();
    await cartExpect.pageToBeLoaded();
    await cartExpect.toContainItems(itemNames);

    await cartPage.startCheckout();
    await checkoutExpect.informationPageToBeLoaded();
    await checkoutInformationPage.continueCheckout({
      firstName: 'Test',
      lastName: 'User',
      postalCode: '12345',
    });

    await checkoutExpect.overviewPageToBeLoaded();
    await checkoutExpect.overviewToContainItems(itemNames);

    await checkoutOverviewPage.finishCheckout();
    await checkoutExpect.completePageToBeLoaded();

    await checkoutCompletePage.goBackHome();
    await inventoryExpect.pageToBeLoaded('Expected Back Home to return the user to the inventory page.');
  });
});