import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: "node",
  roots: ['<rootDir>/__tests__'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    "^.+\.tsx?$": ["ts-jest",{ tsconfig: './tsconfig.json' }],
  },
};

export default config;