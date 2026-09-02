import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [
    'src/app/**/*.{ts,tsx}',
    'src/components/**/*.{ts,tsx}',
    'src/database/**/*.{ts,tsx}',
    'src/lib/**/*.{ts,tsx}',
    'src/store/**/*.{ts,tsx}',
    'src/types/**/*.{ts,tsx}',
  ],
  ignoreExportsUsedInFile: true,
  ignoreDependencies: [
    '@tanstack/react-query',
    'sharp',
    'sonner',
    '@faker-js/faker',
    '@storybook/experimental-nextjs-vite',
    '@types/bcryptjs',
    'vitest-browser-react',
  ],
  ignoreBinaries: ['commit'],
};

export default config;
