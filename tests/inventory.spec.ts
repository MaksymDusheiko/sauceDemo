import { test } from '@fixtures/test.fixture';

test.describe('Sauce Demo inventory', () => {
  test('allows a standard user to add an item to the cart from inventory', async ({
    cartPage,
    getUser,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser('standardUser');
    const itemName = 'Sauce Labs Backpack';

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.expectItemActionLabel(itemName, 'Add to cart');

    await inventoryPage.addItemToCart(itemName);

    await inventoryPage.expectItemActionLabel(itemName, 'Remove');
    await inventoryPage.expectCartCount(1);

    await inventoryPage.openCart();
    await cartPage.expectLoaded();
    await cartPage.expectItems([itemName]);
  });

  test('allows a standard user to remove an item from the inventory page', async ({
    cartPage,
    getUser,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser('standardUser');
    const itemName = 'Sauce Labs Backpack';

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryPage.expectLoaded();

    await inventoryPage.addItemToCart(itemName);
    await inventoryPage.expectCartCount(1);

    await inventoryPage.removeItemFromCart(itemName);

    await inventoryPage.expectItemActionLabel(itemName, 'Add to cart');
    await inventoryPage.expectCartCount(0);

    await inventoryPage.openCart();
    await cartPage.expectLoaded();
    await cartPage.expectEmpty();
  });
});
