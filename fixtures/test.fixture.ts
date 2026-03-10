import { test as base, expect } from '@playwright/test';

import { credentials } from '@fixtures/test-data';
import { InventoryPage } from '@pages/inventory.page';
import { LoginPage } from '@pages/login.page';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  standardUser: typeof credentials.standardUser;
  invalidUser: typeof credentials.invalidUser;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  standardUser: async ({}, use) => {
    await use(credentials.standardUser);
  },
  invalidUser: async ({}, use) => {
    await use(credentials.invalidUser);
  },
});

export { expect };
