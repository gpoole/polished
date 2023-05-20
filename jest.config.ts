/** @type {import('ts-jest').JestConfigWithTsJest} */

import { pathsToModuleNameMapper } from 'ts-jest'
import { tsconfig } from './tsconfig'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    testURL: 'http://localhost/',
  },
  roots: ['<rootDir>'],
  modulePaths: [tsconfig.compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(
    tsconfig.compilerOptions.paths /*, { prefix: '<rootDir>/' } */,
  ),
}

export default jestConfig
