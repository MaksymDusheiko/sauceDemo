# sauceDemo

Playwright end-to-end test automation for Sauce Demo using TypeScript, page objects, and shared fixtures.

## Covered scenarios

- Sign in: with a standard user
- Error handling for locked and invalid users
- e2e flow for complete checkout with multiple items 
- Add and Remove an item from the inventory page

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

```bash
npm install
```


## How to run the tests

### Run the full test suite

```bash
npm test
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Open the Playwright UI runner

```bash
npm run test:ui
```

### Open the last generated HTML report

```bash
npm run report
```

## TODO

### Scenarios to cover

- filtering
- remove functionality on cart page
- cancel on checkout page
- check social links
- checkout without items

### Tech notes

- add copilot-instructions
- ci/cd 
- add linters/formatters
- add business functions abstraction (only on scaling) 


## Notes

- The test base URL is set to `https://www.saucedemo.com` in the Playwright config.
