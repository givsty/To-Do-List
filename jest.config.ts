/** @type {import('ts-jest').JestConfigWithTsJest} */
import "fake-indexeddb/auto";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.app.json",
    },
  },
  setupFiles: [
        "fake-indexeddb/auto",
        "<rootDir>/global.mock.ts"
  ],
};
