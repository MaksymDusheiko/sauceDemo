import { expect } from '@playwright/test';

import { LoginPage } from '@pages/login.page';

export class LoginExpect {
  constructor(private readonly loginPage: LoginPage) {}

  async toShowError(message: string): Promise<void> {
    await expect(this.loginPage.errorMessage).toContainText(message);
  }
}
