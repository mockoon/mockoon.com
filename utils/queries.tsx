import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { EmailingContact, Plans, Team, User } from '../models/user.model';
import { useAuth } from './auth';

const useCurrentUser = () => {
  const { getIdToken, isAuth, logout } = useAuth();
  const router = useRouter();

  const { isLoading, error, data, isFetching } = useQuery<User>({
    queryKey: ['currentUser'],
    enabled: isAuth,
    refetchOnMount: false,
    queryFn: async () => {
      const token = await getIdToken();
      let query = '';

      if (!token) {
        return null;
      }

      if (localStorage.getItem('newsletter')) {
        localStorage.removeItem('newsletter');
        query = '?newsletter=true';
      }

      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user${query}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        if (res.status === 401) {
          logout();
          router.push('/login/');

          return;
        }

        throw new Error();
      });
    },
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    error,
    data,
    isFetching
  };
};

const useCurrentUserEmailing = () => {
  const { getIdToken, isAuth } = useAuth();

  const { isLoading, error, data, isFetching } = useQuery<EmailingContact>({
    queryKey: ['currentUser'],
    enabled: isAuth,
    refetchOnMount: false,
    queryFn: async () => {
      const token = await getIdToken();

      if (!token) {
        return null;
      }

      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/emailing`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      });
    },
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    error,
    data,
    isFetching
  };
};

const useCurrentTeam = (teamId, teamRole) => {
  const auth = useAuth();

  const { isLoading, error, data, isFetching, refetch } = useQuery<Team>({
    queryKey: ['currentTeam'],
    refetchOnMount: false,
    retry: false,
    enabled: teamId !== null && teamRole !== null && teamRole === 'owner',
    queryFn: async () => {
      const token = await auth.getIdToken();

      if (!token) {
        return null;
      }

      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/team`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      });
    },
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    error,
    data,
    isFetching,
    refetch
  };
};

const useCurrentSubscriptionLinks = (user: User) => {
  const auth = useAuth();

  const { isLoading, error, data, isFetching } = useQuery<{
    update_payment_method: string;
    cancel: string;
  }>({
    queryKey: ['currentSubscriptionLinks'],
    refetchOnMount: false,
    enabled:
      auth.isAuth &&
      !!user &&
      user.plan !== Plans.FREE &&
      user.subscription !== undefined &&
      user.subscription.provider !== null,
    queryFn: async () => {
      const token = await auth.getIdToken();

      if (!token) {
        return null;
      }

      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      });
    },
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    error,
    data,
    isFetching
  };
};

export {
  useCurrentSubscriptionLinks,
  useCurrentTeam,
  useCurrentUser,
  useCurrentUserEmailing
};
