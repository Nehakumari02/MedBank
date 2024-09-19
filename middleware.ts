import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// List of supported locales
const locales = ['en', 'jn'];

// Create internationalization middleware
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en',
});

// List of public paths
const publicPages = [
  '/',
  '/Login',
  '/Signup',
  '/about',
  '/CancellationPolicy',
  '/Orderflow',
  '/Personal-Information',
  '/PrivacyPolicy',
  '/RecentAnnouncement',
  '/SampleShipping',
  '/Services',
  '/SitePolicy',
  '/strength',
  '/Admin_Login',
  '/Admin_Signup'
];

// Create authorization middleware
const authMiddleware = withAuth(
  (req) => intlMiddleware(req),
  {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      authorized: async ({ token }) => !!token,
    },
    pages: {
      signIn: '/Login',
    },
  }
);

export default function middleware(req: NextRequest) {
  // Regular expression to match public paths
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );

  // Check if the current path is public
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  // Apply intlMiddleware and authMiddleware accordingly
  if (isPublicPage) {
    return intlMiddleware(req); // Only apply intlMiddleware if the path is public
  } else {
    console.log("checking auth in the path")
    return (authMiddleware as any)(req); // Apply both intlMiddleware and authMiddleware if the path is not public
  }
}

// Middleware configuration
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Apply middleware to all paths except those that should be skipped
};


// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'jn'],
 
//   // Used when no locale matches
//   defaultLocale: 'en',
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(jn|en)/:path*']
// };