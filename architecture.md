<!--
File: architecture.md
Description: High-level system architecture documentation for human developers and AI assistants.
Outlines the directory organization, technology stack, data flow, and core design principles.
-->

# System Architecture

## 1. Overview

This project is built on Next.js App Router, using a modern TypeScript stack designed for high performance, maintainability, end-to-end type safety, and scalability.

## 2. Tech Stack

- **Framework:** Next.js (App Router)
- **Styling & UI:** Tailwind CSS, Shadcn UI, Lucide Icons
- **Database & ORM:** Drizzle ORM with PGLite (Local embedded DB) & PostgreSQL
- **State Management:** Zustand
- **Internationalization:** `next-intl` (i18n)
- **Testing Suite:** Vitest (Unit), Playwright (E2E), Storybook (Component Explorer)
- **Quality & Tooling:** Oxlint, Oxfmt, Knip, Lefthook (Git Hooks), GitHub Actions (CI)

## 3. Key Directory Layout

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