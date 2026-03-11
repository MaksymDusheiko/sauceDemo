import { expect, mergeTests } from '@playwright/test';

import { expectFixtures } from './expect.fixture';
import { testDataFixtures } from '@fixtures/test-data.fixture';

export const test = mergeTests(expectFixtures, testDataFixtures);

export { expect };
