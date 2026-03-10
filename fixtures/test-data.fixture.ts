import { test as base } from "@playwright/test";

const credentials = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
  lockedUser: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
  invalidUser: {
    username: "standard_user",
    password: "wrong_password",
  },

} as const;

export type UserType = keyof typeof credentials;

type GetUserFixture = <T extends UserType = "standardUser">(
  userType?: T,
) => (typeof credentials)[T];

export type TestDataFixtures = {
  getUser: GetUserFixture;
};

export const testDataFixtures = base.extend<TestDataFixtures>({
  getUser: async ({}, use) => {
    await use(<T extends UserType>(userType: T = "standardUser" as T) => {
      return credentials[userType];
    });
  },
});
