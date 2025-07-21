import { DeployInstance, Team, TeamRoles, User } from '@mockoon/cloud';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { EmailingContact, Subscription } from '../models/user.model';
import { useAuth } from './auth';

const useCurrentUser = () => {
  const { getIdToken, isAuth, logout } = useAuth();
  const router = useRouter();

  const { isLoading, error, data, isFetching, refetch } = useQuery<
    User & {
      mfa: { enabled: boolean; uid: string };
      deployInstancesMonthlyRequestsQuota: number;
    }
  >({
    queryKey: ['currentUser'],
    enabled: isAuth,
    refetchOnMount: false,
    queryFn: async () => {
      const token = await getIdToken(true);
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

          return null;
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

const useCurrentUserEmailing = () => {
  const { getIdToken, isAuth } = useAuth();

  const { isLoading, error, data, isFetching } = useQuery<EmailingContact>({
    queryKey: ['currentUserEmailing'],
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

const useCurrentTeam = (teamId: string, teamRole: TeamRoles) => {
  const auth = useAuth();

  const { isLoading, error, data, isFetching, refetch } = useQuery<Team>({
    queryKey: ['currentTeam'],
    refetchOnMount: false,
    retry: false,
    enabled:
      teamId !== null &&
      teamRole !== null &&
      (teamRole === 'owner' ||
        teamRole === 'team_admin' ||
        teamRole === 'billing'),
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

const useCurrentDeployments = () => {
  const { getIdToken, isAuth } = useAuth();

  const { isLoading, error, data, isFetching, refetch } = useQuery<
    DeployInstance[]
  >({
    queryKey: ['currentUserDeployments'],
    refetchOnMount: false,
    retry: false,
    enabled: isAuth,
    queryFn: async () => {
      const token = await getIdToken();

      if (!token) {
        return null;
      }

      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deployments`, {
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

const useCurrentSubscription = (user: User) => {
  const auth = useAuth();

  const { isLoading, error, data, isFetching } = useQuery<
    Subscription & {
      portalUrl: string;
    }
  >({
    queryKey: ['currentSubscription'],
    refetchOnMount: false,
    retry: false,
    enabled: auth.isAuth && !!user,
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
        } else if (res.status === 404) {
          return null;
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
  useCurrentDeployments,
  useCurrentSubscription,
  useCurrentTeam,
  useCurrentUser,
  useCurrentUserEmailing
};
