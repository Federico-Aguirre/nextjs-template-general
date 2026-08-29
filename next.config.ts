import "./src/libs/Env";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Configuración base de Next.js
const baseConfig: NextConfig = {
  devIndicators: {
    position: "bottom-right",
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === "production",
  experimental: {
    turbopackRustReactCompiler: process.env.NODE_ENV === "production",
  },
  logging: {
    browserToTerminal: process.env.BROWSER_TO_TERMINAL_DISABLED !== "true",
  },
  outputFileTracingIncludes: {
    "/": ["./migrations/**/*"],
  },
};

// Plugin de internacionalización (next-intl)
const withNextIntl = createNextIntlPlugin("./src/libs/I18n.ts");

export default withNextIntl(baseConfig);
