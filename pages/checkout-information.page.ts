import { type Locator, type Page } from '@playwright/test';

export type CheckoutInformation = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutInformationPage {
  readonly title: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async continueCheckout(checkoutInformation: CheckoutInformation): Promise<void> {
    await this.firstNameInput.fill(checkoutInformation.firstName);
    await this.lastNameInput.fill(checkoutInformation.lastName);
    await this.postalCodeInput.fill(checkoutInformation.postalCode);
    await this.continueButton.click();
  }
}