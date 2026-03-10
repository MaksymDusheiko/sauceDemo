import { expect, test } from '@fixtures/test.fixture';

test.describe('Sauce Demo sign in', () => {
  test('allows a standard user to sign in', async ({ getUser, inventoryPage, loginPage }) => {
    const standardUser = getUser('standardUser');

    await loginPage.signIn(standardUser.username, standardUser.password);

    await inventoryPage.expectLoaded();
  });

  test('shows an error when the user is locked', async ({ getUser, loginPage, page }) => {
    const lockedUser = getUser('lockedUser');

    await loginPage.signIn(lockedUser.username, lockedUser.password);

    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out.',
    );
    await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  });

  test('shows an error when the password is invalid', async ({ getUser, loginPage, page }) => {
    const invalidUser = getUser('invalidUser');

    await loginPage.signIn(invalidUser.username, invalidUser.password);

    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match',
    );
    await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  });
});
