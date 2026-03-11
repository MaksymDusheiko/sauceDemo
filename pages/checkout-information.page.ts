import { expect, type Locator, type Page } from '@playwright/test';

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

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async expectLoaded(message?: string): Promise<void> {
    await expect(
      this.page,
      message ?? 'Expected to be on the checkout information page.',
    ).toHaveURL(/\/checkout-step-one\.html$/);
    await expect(
      this.title,
      message ?? 'Expected the checkout information title to match.',
    ).toHaveText('Checkout: Your Information');
  }

  async continueCheckout(checkoutInformation: CheckoutInformation): Promise<void> {
    await this.firstNameInput.fill(checkoutInformation.firstName);
    await this.lastNameInput.fill(checkoutInformation.lastName);
    await this.postalCodeInput.fill(checkoutInformation.postalCode);
    await this.continueButton.click();
  }
}