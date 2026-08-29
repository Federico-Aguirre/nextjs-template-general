# AGENTS

## Principles

- Clarity and consistency over meanderings. Minimal changes. Match existing patterns.
- Keep components and functions short; break them down when it improves modularity.
- TypeScript everywhere; no `any` unless strictly isolated and documented.
- No unnecessary `try/catch`. Avoid type casting (`as ...`); use type narrowing instead.
- Named exports preferred (no default exports, except for Next.js pages/layouts).
- Absolute imports via `@/` unless importing from the exact same directory.
- Follow existing ESLint/Oxlint rules; don't reformat unrelated code.
- Zod type-only imports: `import type * as z from 'zod';`.
- Let the compiler infer return types unless explicit annotation adds architectural clarity.
- Use an options object for 3+ parameters, optional flags, or ambiguous arguments.

## Commands

Use standard `npm` scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run check:types`, `npm run check:deps`, `npm run test`, `npm run test:e2e`.

## Git Commits

Conventional Commits standard: `type: summary` without mandatory scope.

- Summary should be a short, specific imperative sentence explaining what changed and why.
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

## Environment Variables

All env variables must be defined and validated in `src/libs/Env.ts`; never access `process.env` directly in application code.

## Styling

- Tailwind CSS v4 utility classes.
- Reuse shared UI components (Shadcn / Radix UI).
- Mobile-first responsive layout design.

## React & State

- React 19 / Next.js 16 compiler enabled: avoid manual `useMemo` and `useCallback` unless strictly profiling performance.
- Access props directly or via explicit types.
- Use `React.ReactNode` instead of standalone `ReactNode`.
- Use **TanStack React Query** for asynchronous data fetching and server states.
- Use **Zustand** for lightweight client-side global state management.

## Pages & App Router

- Page default export name ends with `Page` (e.g., `HomePage`).
- Internationalized locale pages: `props: { params: Promise<{ locale: string }> }` → `await props.params` → `setRequestLocale(locale)`.

## i18n (next-intl)

- Never hard-code user-visible strings. Page translation namespaces end with `Page`.
- Server Components: `getTranslations`; Client Components: `useTranslations`.
- Use `t.rich(...)` for rich text markup.

## Testing

- `*.test.ts` / `*.test.tsx` for unit and UI tests (co-located with implementation).
- `*.integ.ts` and `*.e2e.ts` located inside the `tests/` directory for Playwright.
- Test descriptions must state expected behavior clearly without redundant fluff ("should", "works").
