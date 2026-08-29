import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  extends: [core, react, next, vitest],
  rules: {
    "no-warning-comments": "off", // Permite comentarios TODO y FIXME
    "no-inline-comments": "off", // Permite comentarios en la misma línea

    "sort-keys": "off",
    "func-style": "off",

    "typescript/no-unsafe-assignment": "off",
    "typescript/no-unsafe-call": "off",
    "typescript/no-unsafe-member-access": "off",
    "typescript/strict-boolean-expressions": "off",
    "typescript/consistent-type-definitions": ["error", "type"], // Fuerza el uso de 'type' sobre 'interface'
    "typescript/no-misused-promises": "off", // Necesario para handlers asíncronos de React Hook Form
    "typescript/strict-void-return": "off",
    "typescript/prefer-regexp-exec": "off",

    "prefer-named-capture-group": "off",

    "react/function-component-definition": "off",
    "react/no-unstable-nested-components": "off",

    "unicorn/filename-case": "off",

    // Desactivado para evitar alertas molestas al crear funciones o componentes rápidos
    "jsdoc/require-param": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-description": "off",
  },
  options: {
    reportUnusedDisableDirectives: "error",
  },
});
