import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import MotionProvider from '@/components/MotionProvider';
import { routing } from '@/lib/I18nRouting';
import '@/styles/global.css';

const publicSans = localFont({
  src: '../fonts/PublicSans-Medium.ttf',
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: '/favicon.ico',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${publicSans.className} flex min-h-dvh flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <Header />
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col sm:px-6 lg:px-8">
              {props.children}
            </main>
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
