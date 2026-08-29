import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // Archivos excluidos del análisis de Knip
  ignore: ["src/libs/I18n.ts", "src/types/I18n.ts"],
  // Configuración de rutas de pruebas para Playwright
  playwright: {
    entry: ["tests/**/*.@(integ|e2e).ts"],
  },
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/gu)].join("\n"),
  },
  treatConfigHintsAsErrors: true,
};

export default config;
