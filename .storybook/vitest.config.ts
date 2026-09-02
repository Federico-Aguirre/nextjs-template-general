import storybookTest from '@storybook/addon-vitest';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // @ts-expect-error - Storybook addon-vitest plugin type mismatch
  plugins: [storybookTest()],
  test: {
    name: 'storybook',
    include: ['src/**/*.stories.@(js|jsx|ts|tsx)'],
    environment: 'jsdom',
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
});
