import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      'nestjs-environment-variables-provider': path.resolve(__dirname, '../packages/environment-variables-provider/src'),
    },
  },
})
