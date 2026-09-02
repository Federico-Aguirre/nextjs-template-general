'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function HomeContent() {
  const t = useTranslations('Home');

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <span className="rounded-full bg-zinc-200/60 px-3 py-1 text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          {t('badge')}
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          {t('title')}
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">{t('subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/sign-in"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {t('feature1Title')}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t('feature1Desc')}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {t('feature2Title')}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t('feature2Desc')}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {t('feature3Title')}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t('feature3Desc')}</p>
        </div>
      </section>
    </div>
  );
}
