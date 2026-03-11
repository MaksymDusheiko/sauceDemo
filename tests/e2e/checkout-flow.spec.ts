import { test } from '@fixtures/test.fixture';

test.describe('Sauce Demo checkout', () => {
  test('allows a standard user to complete checkout with a few items', async ({
    cartPage,
    checkoutCompletePage,
    checkoutInformationPage,
    checkoutOverviewPage,
    getUser,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser();
    const itemNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryPage.expectLoaded();

    for (const itemName of itemNames) {
      await inventoryPage.addItemToCart(itemName);
    }

    await inventoryPage.openCart();
    await cartPage.expectLoaded();
    await cartPage.expectItems(itemNames);

    await cartPage.startCheckout();
    await checkoutInformationPage.expectLoaded();
    await checkoutInformationPage.continueCheckout({
      firstName: 'Test',
      lastName: 'User',
      postalCode: '12345',
    });

    await checkoutOverviewPage.expectLoaded();
    await checkoutOverviewPage.expectItems(itemNames);

    await checkoutOverviewPage.finishCheckout();
    await checkoutCompletePage.expectLoaded();

    await checkoutCompletePage.goBackHome();
    await inventoryPage.expectLoaded('Expected Back Home to return the user to the inventory page.');
  });
});