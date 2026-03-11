import { test } from '@fixtures/test.fixture';

test.describe('Sauce Demo inventory', () => {
  test('allows a standard user to add an item to the cart from inventory', async ({
    cartExpect,
    getUser,
    inventoryExpect,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser('standardUser');
    const itemName = 'Sauce Labs Backpack';

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryExpect.pageToBeLoaded();
    await inventoryExpect.itemActionToBe(itemName, 'Add to cart');

    await inventoryPage.addItemToCart(itemName);

    await inventoryExpect.itemActionToBe(itemName, 'Remove');
    await inventoryExpect.cartCountToBe(1);

    await inventoryPage.openCart();
    await cartExpect.pageToBeLoaded();
    await cartExpect.toContainItems([itemName]);
  });

  test('allows a standard user to remove an item from the inventory page', async ({
    cartExpect,
    getUser,
    inventoryExpect,
    inventoryPage,
    loginPage,
  }) => {
    const standardUser = getUser('standardUser');
    const itemName = 'Sauce Labs Backpack';

    await loginPage.signIn(standardUser.username, standardUser.password);
    await inventoryExpect.pageToBeLoaded();

    await inventoryPage.addItemToCart(itemName);
    await inventoryExpect.cartCountToBe(1);

    await inventoryPage.removeItemFromCart(itemName);

    await inventoryExpect.itemActionToBe(itemName, 'Add to cart');
    await inventoryExpect.cartCountToBe(0);

    await inventoryPage.openCart();
    await cartExpect.pageToBeLoaded();
    await cartExpect.toBeEmpty();
  });
});
