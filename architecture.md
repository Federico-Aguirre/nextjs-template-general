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

```text
├── .github/              # CI/CD Workflows & Dependabot
├── .storybook/           # Storybook configuration & setup
├── .vscode/              # Editor settings, tasks, and recommended extensions
├── public/               # Static assets & public files
├── src/
│   ├── app/              # Next.js App Router pages, layouts, and Server Actions
│   ├── components/       # Reusable UI elements, Shadcn components, and controls
│   ├── database/         # Drizzle schemas, migrations, connection & models
│   ├── lib/             # Core utilities, Logger, Env validations & I18n setup
│   ├── locales/          # Translation dictionaries (JSON)
│   ├── store/            # Client global state stores (Zustand)
│   ├── styles/           # Global CSS and Tailwind directives
│   ├── templates/        # Structural layout templates & stories
│   ├── types/            # Global TypeScript interfaces and definitions
│   ├── utils/            # Helper functions and core application config
│   └── validations/      # Schema validation logic
├── tests/                # E2E (Playwright) and Integration test suites
└── architecture.md       # Core architectural guidelines