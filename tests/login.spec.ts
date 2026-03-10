import { expect, test } from '@fixtures/test.fixture';

test.describe('Sauce Demo sign in', () => {
  test('allows a standard user to sign in', async ({ inventoryPage, loginPage, standardUser }) => {
    await loginPage.signIn(standardUser.username, standardUser.password);

    await inventoryPage.expectLoaded();
  });

  test('shows an error when the password is invalid', async ({ invalidUser, loginPage, page }) => {
    await loginPage.signIn(invalidUser.username, invalidUser.password);

    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match',
    );
    await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  });
});
