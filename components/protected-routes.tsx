import { NextRouter } from 'next/router';
import { FunctionComponent, ReactElement } from 'react';
import { useAuth } from '../utils/auth';

const isBrowser = () => typeof window !== 'undefined';

const semiProtectedRoutes = ['email-verification'];
const protectedRoutes = ['account/', 'app-auth'];
const publicRoutes = ['/login', '/signup'];

const ProtectedRoutes: FunctionComponent<{
  router: NextRouter;
  auth: ReturnType<typeof useAuth>;
  children: ReactElement;
}> = function ({ router, auth, children }) {
  if (isBrowser() && !auth.isLoading) {
    const isInApp = router.query.inapp === 'true';
    if (isInApp) {
      localStorage.setItem('redirect', '/app-auth/');
    }

    const isPublicRoute = publicRoutes.some((route) =>
      router.pathname.includes(route)
    );

    if (isPublicRoute && auth.isAuth) {
      const redirect = localStorage.getItem('redirect');

      if (redirect) {
        localStorage.removeItem('redirect');
        router.push(redirect);
      } else {
        router.push('/account/info/');
      }
    }

    const isProtectedRoute = protectedRoutes.some((route) =>
      router.pathname.includes(route)
    );

    if (isProtectedRoute && !auth.isAuth) {
      // redirect to login page
      router.push('/login/');
    }

    const isSemiProtectedRoute = semiProtectedRoutes.some((route) =>
      router.pathname.includes(route)
    );

    if (isSemiProtectedRoute && !auth.isAuth && !auth.user) {
      router.push('/login/');
    }
  }

  return children;
};

export default ProtectedRoutes;
