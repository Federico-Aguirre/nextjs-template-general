import { getTranslations } from 'next-intl/server';

export const Hello = async () => {
  const t = await getTranslations('Dashboard');

  return <p>{t('hello_message')}</p>;
};
