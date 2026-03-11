import { test } from '@fixtures/test.fixture';

test.describe('Sauce Demo sign in', () => {
  test('allows a standard user to sign in', async ({ getUser, inventoryExpect, loginPage }) => {
    const standardUser = getUser('standardUser');

    await loginPage.signIn(standardUser.username, standardUser.password);

    await inventoryExpect.pageToBeLoaded();
  });

  test('shows an error when the user is locked', async ({ getUser, loginExpect, loginPage }) => {
    const lockedUser = getUser('lockedUser');

    await loginPage.signIn(lockedUser.username, lockedUser.password);

    await loginExpect.toShowError('Sorry, this user has been locked out.');
  });

  test('shows an error when the password is invalid', async ({ getUser, loginExpect, loginPage }) => {
    const invalidUser = getUser('invalidUser');

    await loginPage.signIn(invalidUser.username, invalidUser.password);

    await loginExpect.toShowError('Username and password do not match');
  });
});
