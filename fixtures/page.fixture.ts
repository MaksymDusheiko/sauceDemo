import { test as base } from '@playwright/test';

import { InventoryPage } from '@pages/inventory.page';
import { LoginPage } from '@pages/login.page';

export type PageFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const pageFixtures = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});