import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/I18nRouting';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/_next`, `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!_next|_vercel|api|.*\\..*).*)',
};
