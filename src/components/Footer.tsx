'use client';

import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mt-auto border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      {t('footer_text', {
        year: new Date().getFullYear(),
        name: AppConfig.name,
      })}
    </footer>
  );
}
