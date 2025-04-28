import type { Config } from "jest";

export default {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/public/",
    "<rootDir>/src/assets/",
    "<rootDir>/src/constants/",
  ],
  transformIgnorePatterns: [
    // nanoid はバージョン4から ESM なので、CJS に変換するためにトランスパイルされるようにする
    "<rootDir>/node_modules/(?!nanoid)",
  ],
  transform: {
    "^.+\\.(js|ts|tsx)$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/test/mocks/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/src/test/mocks/styleMock.js",
  },
} as Config;
