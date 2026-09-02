'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { ChangeEventHandler } from 'react';
import { usePathname, useRouter } from '@/lib/I18nNavigation';
import { routing } from '@/lib/I18nRouting';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newLocale = event.target.value;

    if (newLocale === locale) {
      return;
    }

    const { search } = window.location;
    router.push(`${pathname}${search}`, { locale: newLocale, scroll: false });
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="cursor-pointer rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm font-medium text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus-visible:ring-zinc-300"
      aria-label={t('change_language')}
    >
      {routing.locales.map((elt) => (
        <option
          key={elt}
          value={elt}
          className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
        >
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
