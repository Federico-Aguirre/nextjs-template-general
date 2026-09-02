🌐 Idioma: Español | English Version

# Plantilla de Inicio Empresarial para Next.js

![Estado CI](https://img.shields.io/github/actions/workflow/status/Federico-Aguirre/nextjs-template-general/ci.yml?branch=main&label=CI)
![Cobertura](https://img.shields.io/codecov/c/github/Federico-Aguirre/nextjs-template-general)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![Licencia](https://img.shields.io/badge/licencia-MIT-blue)

Una plantilla de inicio para Next.js de alto rendimiento y probada en producción, diseñada para garantizar la seguridad de tipos, una experiencia de desarrollo (DX) sin fricciones, automatización de calidad continua y preparación inmediata para producción.

## Stack Tecnológico Principal

| Categoría | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Framework y Núcleo** | Next.js 16 (App Router), React 19, TypeScript 5.9+ | Arquitectura moderna servidor/cliente con verificación estricta de tipos |
| **Estilos e Interfaz** | Tailwind CSS v4, Framer Motion, Lucide Icons, Sonner | Estilos utilitarios, animaciones fluidas y notificaciones flotantes |
| **Base de Datos y ORM** | Drizzle ORM, PGlite, `pg` | Postgres en WebAssembly para desarrollo/pruebas y PostgreSQL para producción |
| **Estado y Datos** | TanStack React Query v5, Zustand | Sincronización de estado del servidor y estado global del cliente ligero |
| **Formularios y Validación** | React Hook Form, Zod, `@hookform/resolvers` | Validación de esquemas con tipos seguros y gestión eficiente de formularios |
| **Variables de Entorno** | `@t3-oss/env-nextjs` | Validación de variables de entorno en tiempo de compilación y ejecución |
| **Internacionalización** | `next-intl`, `@lingual/i18n-check` | Soporte i18n completo con detección automática de claves faltantes |
| **Herramientas y Calidad** | Ultracite (Oxlint/Oxfmt), Knip, Lefthook, Commitlint | Linting ultrarrápido en Rust, eliminación de código muerto y hooks de Git |
| **Pruebas y Explorador UI** | Vitest, Playwright, Storybook 10 | Pruebas unitarias/componentes, pruebas E2E en navegador y entorno UI aislado |
| **CI/CD y Publicación** | GitHub Actions, Semantic Release, Dependabot | Pipelines automatizados, versionado automático y actualizaciones de seguridad |

---

## Inicio Rápido

### 1. Clonar e Instalar
```bash
git clone [https://github.com/Federico-Aguirre/nextjs-template-general.git](https://github.com/Federico-Aguirre/nextjs-template-general.git)
cd nextjs-template-general
npm install
```
*(El script `prepare` se ejecuta automáticamente durante `npm install` para inicializar los hooks de Git con Lefthook y generar `.env.local` a partir de `.env.example`).*

### 2. Iniciar Desarrollo
```bash
npm run dev
```
Inicia simultáneamente la instancia local de la base de datos PGlite y el servidor de desarrollo de Next.js en [http://localhost:3000](http://localhost:3000).

---

## Referencia Completa de Scripts

| Script | Acción |
| :--- | :--- |
| `npm run dev` | Inicia la BD PGlite local y el entorno de desarrollo de Next.js concurrentemente |
| `npm run build` | Ejecuta migraciones de BD y compila la aplicación optimizada para producción |
| `npm run build-local` | Compila el paquete de producción utilizando una base de datos PGlite en memoria |
| `npm run lint` | Ejecuta linting ultrarrápido basado en Rust y verificación de tipos mediante Ultracite |
| `npm run lint:fix` | Resuelve automáticamente violaciones de estilo de código y reglas de linting |
| `npm run format` | Audita y aplica formato automático al código mediante Oxfmt |
| `npm run check:types` | Ejecuta la verificación de tipos independiente de `tsc` sin emitir archivos JS |
| `npm run check:deps` | Ejecuta Knip para detectar archivos, exportaciones y dependencias sin uso |
| `npm run check:i18n` | Valida claves de traducción faltantes, huérfanas o no referenciadas |
| `npm run test` | Ejecuta pruebas unitarias y de componentes mediante Vitest |
| `npm run test:e2e` | Ejecuta pruebas automatizadas de extremo a extremo (E2E) con Playwright |
| `npm run storybook` | Inicia el catálogo de componentes UI aislado de Storybook en el puerto `6006` |
| `npm run db:studio` | Abre la interfaz visual de administración de base de datos con Drizzle Studio |
| `npm run analyze` | Genera un reporte visual del tamaño de los paquetes de Next.js |
| `npm run release` | Ejecuta el pipeline de Semantic Release para versionado y notas de cambio |
| `npm run prepare` | Script de configuración interna para hooks de Git y bootstrapping de entorno |

---

## Archivos de Configuración Raíz

| Archivo | Propósito |
| :--- | :--- |
| `drizzle.config.ts` | Rutas de migración de Drizzle ORM, ubicación de esquemas y drivers de conexión |
| `vitest.config.ts` | Entorno de ejecución de Vitest, alias de rutas y configuración de componentes |
| `playwright.config.ts` | Matriz de pruebas E2E en navegadores, puertos y configuración de URL base |
| `lefthook.yml` | Definición de automatizaciones para Git Hooks (pre-commit / pre-push) |
| `knip.ts` | Reglas para detección de código muerto, puntos de entrada y rutas ignoradas |
| `.env.example` | Plantilla descriptiva de variables de entorno requeridas |

---

## Estructura del Proyecto

├── .github/             # Flujos CI/CD (CI, Lanzamientos), acciones personalizadas y Dependabot
├── .storybook/          # Configuración de Storybook, vistas previas y ejecutor de Vitest
├── .vscode/             # Configuración del editor, extensiones recomendadas y tareas
├── migrations/          # Archivos SQL de migración generados por Drizzle ORM
├── public/              # Archivos estáticos públicos (imágenes, favicon)
├── src/
│   ├── actions/         # Server Actions de Next.js (autenticación, contacto, etc.)
│   ├── app/             # Páginas App Router con i18n ([locale]), fuentes, sitemap, robots
│   ├── components/      # Componentes de diseño compartidos y primitivas UI (shadcn/ui)
│   ├── database/        # Conexión, esquemas, modelos y utilidades de Drizzle ORM
│   ├── lib/             # Validación de env, logger, configuración i18n y esquemas
│   ├── locales/         # Diccionarios de traducción JSON (en.json, es.json)
│   ├── store/           # Slices de estado del cliente con Zustand
│   ├── styles/          # Estilos globales y directivas de Tailwind CSS
│   ├── types/           # Interfaces y tipos compartidos de TypeScript
│   ├── utils/           # Configuración general y funciones auxiliares (helpers)
│   ├── validations/     # Esquemas de validación con Zod
│   └── proxy.ts         # Utilidades para interceptación de peticiones / proxy
├── tests/               # Pruebas de integración y E2E con Playwright
├── AGENTS.md / CLAUDE.md# Instrucciones y directivas para agentes de IA
├── architecture.md      # Especificación detallada de la arquitectura del sistema
├── drizzle.config.ts    # Configuración del ORM de base de datos
├── knip.ts              # Configuración del detector de código muerto y dependencias
├── lefthook.yml         # Configuración de Git hooks con Lefthook
├── playwright.config.ts # Configuración de ejecutor de pruebas E2E
├── vitest.config.ts     # Configuración de ejecutor de pruebas unitarias/componentes
└── README.md            # Documentación del repositorio