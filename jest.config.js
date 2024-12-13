export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "src/App.jsx",
    "!src/index.js",
    "!src/serviceWorker.js",
  ],
  coverageReporters: ["html", "text"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: ".",
        outputName: "jest.results.json",
      },
    ],
  ],
};
