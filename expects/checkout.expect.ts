import { expect } from '@playwright/test';

import { CheckoutCompletePage } from '@pages/checkout-complete.page';
import { CheckoutInformationPage } from '@pages/checkout-information.page';
import { CheckoutOverviewPage } from '@pages/checkout-overview.page';

export class CheckoutExpect {
  constructor(
    private readonly checkoutInformationPage: CheckoutInformationPage,
    private readonly checkoutOverviewPage: CheckoutOverviewPage,
    private readonly checkoutCompletePage: CheckoutCompletePage,
  ) {}

  async informationPageToBeLoaded(
    message = 'Expected to be on the checkout information page.',
  ): Promise<void> {
    await expect(this.checkoutInformationPage.page, message).toHaveURL(/\/checkout-step-one\.html$/);
    await expect(
      this.checkoutInformationPage.title,
      'Expected the checkout information title to match.',
    ).toHaveText('Checkout: Your Information');
  }

  async overviewPageToBeLoaded(
    message = 'Expected to be on the checkout overview page.',
  ): Promise<void> {
    await expect(this.checkoutOverviewPage.page, message).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(
      this.checkoutOverviewPage.title,
      'Expected the checkout overview title to match.',
    ).toHaveText('Checkout: Overview');
  }

  async overviewToContainItems(
    itemNames: string[],
    message = 'Expected the checkout overview to contain the selected items.',
  ): Promise<void> {
    await expect(this.checkoutOverviewPage.cartItems, message).toHaveText(itemNames);
  }

  async completePageToBeLoaded(
    message = 'Expected to be on the checkout complete page.',
  ): Promise<void> {
    await expect(this.checkoutCompletePage.page, message).toHaveURL(/\/checkout-complete\.html$/);
    await expect(
      this.checkoutCompletePage.title,
      'Expected the checkout complete title to match.',
    ).toHaveText('Checkout: Complete!');
    await expect(
      this.checkoutCompletePage.completeHeader,
      'Expected the order completion confirmation message.',
    ).toHaveText('Thank you for your order!');
  }
}
