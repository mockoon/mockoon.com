import { DeployInstance, Plans, Team, TeamRoles, User } from '@mockoon/cloud';
import { useMutation, useQuery } from '@tanstack/react-query';
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
    queryKey: ['teamInstances'],
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
        } else if (res.status === 404 || res.status === 403) {
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

const useTrialOnboardingEligibility = () => {
  const { getIdToken } = useAuth();

  const trialOnboardingMutation = useMutation<boolean, Error, { plan: Plans }>({
    mutationFn: async (payload): Promise<boolean> => {
      const token = await getIdToken();

      if (!token) {
        throw new Error('Missing authentication token');
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/onboarding/trial`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.ok) {
        const data: { isEligible: boolean } = await response.json();
        return data.isEligible;
      }

      return false;
    }
  });

  const refetch = async (payload: { plan: Plans }) => {
    return {
      data: await trialOnboardingMutation.mutateAsync(payload)
    };
  };

  return {
    isLoading: trialOnboardingMutation.isPending,
    error: trialOnboardingMutation.error,
    data: trialOnboardingMutation.data,
    isFetching: trialOnboardingMutation.isPending,
    refetch
  };
};

export {
  useCurrentDeployments,
  useCurrentSubscription,
  useCurrentTeam,
  useCurrentUser,
  useCurrentUserEmailing,
  useTrialOnboardingEligibility
};
