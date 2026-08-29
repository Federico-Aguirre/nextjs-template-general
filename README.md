Next.js Universal Starter TemplateA production-ready, highly modular Next.js starter boilerplate designed for speed, type safety, and scalability. Built for independent client projects, SaaS platforms, e-commerce, and marketing sites.Core StackFramework: Next.js 16 (App Router) & React 19Language: TypeScript 5.9+ (Strict Type Checking)Styling: Tailwind CSS v4, Lucide Icons, Framer MotionDatabase & ORM: Drizzle ORM with PGlite (Zero-config local WebAssembly PostgreSQL)State & Data Fetching: TanStack React Query v5 & ZustandForm & Validation: React Hook Form, Zod & @hookform/resolversInternationalization: next-intlUI Component Catalog: Storybook 10Testing: Vitest (Unit & Component UI) & Playwright (E2E)Tooling & Quality: Oxlint / Ultracite (Rust-based linting), Knip (Dead code detection), Lefthook (Git hooks)Quick Start1. Clone and InstallBash# Clone repository
git clone https://github.com/YOUR-USERNAME/your-repo-name.git
cd your-repo-name

# Install dependencies

npm install 2. Configure Environment VariablesBashcp .env.example .env.local 3. Start Development ServerBashnpm run dev
Open http://localhost:3000 to view the application in your browser.Available ScriptsScriptActionnpm run devStarts local database server (PGlite) and Next.js dev server concurrently.npm run buildRuns database migrations and creates an optimized production build.npm run lintAudits code quality and type checks using Ultracite/Oxlint.npm run testRuns unit and UI component tests using Vitest.npm run test:e2eExecutes end-to-end tests using Playwright.npm run storybookLaunches Storybook component catalog at http://localhost:6006.npm run db:studioOpens Drizzle Studio to visually inspect database tables.npm run check:depsRuns Knip to identify unused exports, files, and dependencies.Project StructurePlaintext├── .storybook/ # Storybook configuration & plugins
├── src/
│ ├── app/ # Next.js App Router (Pages, Layouts, API routes)
│ ├── components/ # Reusable UI components & Storybook stories (\*.stories.tsx)
│ ├── db/ # Drizzle schema definitions & migration files
│ ├── hooks/ # Custom React hooks
│ ├── locales/ # Translation files (next-intl)
│ ├── store/ # Zustand global state stores
│ └── env.js # Environment variable validation schema (Zod)
└── vitest.config.ts # Vitest & Playwright browser test configuration
