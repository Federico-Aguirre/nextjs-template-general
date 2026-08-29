import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function UserProfilePage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'UserProfile',
  });

  return <p>{t('placeholder')}</p>;
}
