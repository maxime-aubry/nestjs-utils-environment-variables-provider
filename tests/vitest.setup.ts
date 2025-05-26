import { afterEach, beforeAll } from 'vitest';
import { clearEnvironmentVariable } from './src/test.utils.js';

afterEach(() => {
	beforeAll(() => clearEnvironmentVariable());
	afterEach(() => clearEnvironmentVariable());
});
