🌐 **Language:** **English** | [Versión en Español](README.md)

# Next.js Enterprise Starter Template

![CI Status](https://img.shields.io/github/actions/workflow/status/Federico-Aguirre/nextjs-template-general/ci.yml?branch=main&label=CI)
![Coverage](https://img.shields.io/codecov/c/github/Federico-Aguirre/nextjs-template-general)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![License](https://img.shields.io/badge/license-MIT-blue)

A battle-tested, high-performance Next.js starter boilerplate engineered for type safety, zero-friction DX, continuous quality automation, and instant production readiness.

## Core Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework & Core** | Next.js 16 (App Router), React 19, TypeScript 5.9+ | Modern server/client architecture with strict type checking |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lucide Icons, Sonner | Utility-first styling, smooth animations, and toast notifications |
| **Database & ORM** | Drizzle ORM, PGlite, `pg` | Embedded WebAssembly Postgres for dev/testing & production PostgreSQL |
| **State & Async Data** | TanStack React Query v5, Zustand | Server state synchronization & lightweight client global state |
| **Forms & Validation** | React Hook Form, Zod, `@hookform/resolvers` | Type-safe schema validation and performant form state management |
| **Env & Safety** | `@t3-oss/env-nextjs` | Build-time and runtime environment variable validation |
| **Internationalization**| `next-intl`, `@lingual/i18n-check` | Full i18n support with automated missing key detection |
| **Tooling & Quality** | Ultracite (Oxlint/Oxfmt), Knip, Lefthook, Commitlint | Fast Rust-based linting, dead code removal, and pre-commit hooks |
| **Testing & UI Explorer**| Vitest, Playwright, Storybook 10 | Unit/component testing, end-to-end browser testing & UI sandbox |
| **CI/CD & Releases** | GitHub Actions, Semantic Release, Dependabot | Automated pipelines, automated versioning, and security updates |

---

## Quick Start

### 1. Clone & Install
```bash
git clone [https://github.com/Federico-Aguirre/nextjs-template-general.git](https://github.com/Federico-Aguirre/nextjs-template-general.git)
cd nextjs-template-general
npm install
```
*(The `prepare` script runs automatically during `npm install` to initialize Lefthook Git hooks and generate `.env.local` from `.env.example`).*

### 2. Start Development
```bash
npm run dev
```
Starts the local PGlite database instance and the Next.js development server concurrently on [http://localhost:3000](http://localhost:3000).

---

## Complete Script Reference

| Script | Action |
| :--- | :--- |
| `npm run dev` | Starts local PGlite DB server and Next.js dev environment concurrently |
| `npm run build` | Runs DB migrations and builds optimized production application |
| `npm run build-local` | Builds production bundle using an in-memory PGlite database |
| `npm run lint` | Runs fast Rust-based linting and type checking via Ultracite |
| `npm run lint:fix` | Automatically resolves code style and linting violations |
| `npm run format` | Code formatting audit and automated formatting via Oxfmt |
| `npm run check:types` | Runs standalone `tsc` type checking without emitting JS files |
| `npm run check:deps` | Runs Knip to detect unused files, exports, and dependencies |
| `npm run check:i18n` | Validates missing, unreferenced, or orphaned i18n keys |
| `npm run test` | Executes unit and component tests with Vitest |
| `npm run test:e2e` | Runs end-to-end browser automation tests via Playwright |
| `npm run storybook` | Launches Storybook isolated UI component catalog on port `6006` |
| `npm run db:studio` | Opens visual database administration interface via Drizzle Studio |
| `npm run analyze` | Generates Next.js bundle visualizer report to analyze output size |
| `npm run release` | Runs Semantic Release pipeline for versioning and changelogs |
| `npm run prepare` | Internal setup script for Git hooks and environment bootstrap |

---

## Root Configuration Files

| File | Purpose |
| :--- | :--- |
| `drizzle.config.ts` | Drizzle ORM migration paths, schema locations, and connection drivers |
| `vitest.config.ts` | Vitest environment setup, aliases, and component testing config |
| `playwright.config.ts` | End-to-end browser testing matrix, ports, and base URL setup |
| `lefthook.yml` | Pre-commit/pre-push Git hook automation definitions |
| `knip.ts` | Rules for dead code detection, entry points, and ignored paths |
| `.env.example` | Template detailing required environment variables |

---

## Directory Layout

├── .github/             # CI/CD Workflows (CI, Releases), custom actions & Dependabot
├── .storybook/          # Storybook setup, preview configs & Vitest runner setup
├── .vscode/             # Editor settings, extension recommendations & tasks
├── migrations/          # Drizzle ORM SQL migration files
├── public/              # Static public assets (images, favicon)
├── src/
│   ├── actions/         # Next.js Server Actions (auth, contact, etc.)
│   ├── app/             # App Router localized pages ([locale]), fonts, sitemap, robots
│   ├── components/      # Shared layout components & UI primitives (shadcn/ui)
│   ├── database/        # Drizzle ORM connection, schemas, models & utils
│   ├── lib/             # Env validation, logger, i18n routing setup & schemas
│   ├── locales/         # i18n translation dictionaries (en.json, es.json)
│   ├── store/           # Zustand client state slices
│   ├── styles/          # Global styles & Tailwind CSS directives
│   ├── types/           # Shared TypeScript interfaces & types
│   ├── utils/           # Application config & core helper functions
│   ├── validations/     # Zod validation schemas
│   └── proxy.ts         # Request proxy & handler utilities
├── tests/               # Playwright E2E and integration suites
├── AGENTS.md / CLAUDE.md# AI agent instructions & project guidelines
├── architecture.md      # Detailed architectural specification blueprint
├── drizzle.config.ts    # Database ORM config
├── knip.ts              # Dead code & unused dependency analyzer config
├── lefthook.yml         # Git hooks config
├── playwright.config.ts # E2E test runner config
├── vitest.config.ts     # Unit/Component test runner config
└── README.md            # Repository documentation