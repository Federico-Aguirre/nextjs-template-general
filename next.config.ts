import './src/lib/Env';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Base Next.js configuration
const baseConfig: NextConfig = {
  output: 'standalone',
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
  experimental: {
    turbopackRustReactCompiler: process.env.NODE_ENV === 'production',
  },
  logging: {
    browserToTerminal: process.env.BROWSER_TO_TERMINAL_DISABLED !== 'true',
  },
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
};

// Internationalization plugin (next-intl)
const withNextIntl = createNextIntlPlugin('./src/lib/I18n.ts');

export default withNextIntl(baseConfig);
