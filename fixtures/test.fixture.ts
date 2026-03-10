import { expect, mergeTests } from '@playwright/test';

import { pageFixtures } from '@fixtures/page.fixture';
import { testDataFixtures } from '@fixtures/test-data.fixture';

export const test = mergeTests(pageFixtures, testDataFixtures);

export { expect };
