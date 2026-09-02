import storybookTest from '@storybook/addon-vitest';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // @ts-expect-error - Storybook addon-vitest plugin type mismatch with Vitest config
  plugins: [storybookTest()],
  test: {
    name: 'storybook',
    environment: 'jsdom',
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
});
