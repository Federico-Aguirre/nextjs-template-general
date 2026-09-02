import { SignOutButton } from '@auth/_components/SignOutButton';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/I18nRouting';

export async function Header() {
  const t = await getTranslations('RootLayout');
  const cookieStore = await cookies();
  const isAuthenticated = !!cookieStore.get('session_user_id')?.value;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          NextTemplate
        </Link>

        {/* Navegación Principal */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            {t('home_link')}
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            {t('about_link')}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
            {t('contact_link')}
          </Link>
        </nav>

        {/* Acciones de Usuario, Idioma y Tema */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          {isAuthenticated ? (
            <SignOutButton />
          ) : (
            <Button asChild size="sm">
              <Link href="/sign-in">{t('sign_in_link')}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
