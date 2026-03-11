# sauceDemo

Playwright end-to-end test automation for Sauce Demo using TypeScript, page objects, and shared fixtures.

## Covered scenarios

- Sign in with a standard user
- Error handling for locked and invalid users
- Add an item to the cart from the inventory page
- Remove an item from the inventory page
- Complete checkout with multiple items

## Tech stack

- TypeScript
- Playwright Test
- Page Object Model
- Shared fixtures and expectation helpers

## Setup instructions

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

1. Clone the repository.
2. Install project dependencies:

   npm install

3. Install Playwright browsers:

   npx playwright install

## How to run the tests

Run the full test suite:

npm test

Run tests in headed mode:

npm run test:headed

Open the Playwright UI runner:

npm run test:ui

Open the last generated HTML report:

npm run report

## Notes

- The test base URL is set to `https://www.saucedemo.com` in the Playwright config.

Setup instructions.









