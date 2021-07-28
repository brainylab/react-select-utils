const { join } = require("path");
const pkg = require("./package.json");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.{js,ts,tsx}"],
  coverageReporters: ["json", "text-summary", "lcov"],
  projects: ["<rootDir>/jest.config.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  displayName: pkg.name,
  testMatch: [join(__dirname, "__tests__/*.spec.ts")],
};
