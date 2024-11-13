import { DeployInstanceVisibility } from '@mockoon/cloud';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import CustomTooltip from '../../components/tooltip';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentDeployments, useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Manage team users',
  description: 'Manage your Mockoon Cloud subscription users'
};

const AccountInstances: FunctionComponent = function () {
  const router = useRouter();
  const { getIdToken, isLoading: isAuthLoading, user, isAuth } = useAuth();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const { data: instancesData, refetch: instancesRefetch } =
    useCurrentDeployments();

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      } else if (
        user &&
        isAuth &&
        !isUserLoading &&
        userData?.plan === 'FREE'
      ) {
        router.push('/account/info/');
      }
    }
  }, [isAuthLoading, user, isAuth, isUserLoading, userData?.plan]);

  const {
    mutate: addUser,
    isError: isAddUserError,
    error: addUserError,
    isPending: isAddingUser
  } = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/deployments`,
        {
          body: JSON.stringify({ email: email.trim() }),
          method: 'GET',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    },
    onError: (error) => {},
    onSuccess: (data) => {
      //teamRefetch();
      setShowAddModal(false);
    }
  });

  const { mutate: removeUser, isPending: isRemovingUser } = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          body: JSON.stringify({ email }),
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    },
    onError: (error) => {},
    onSuccess: (data) => {
      //teamRefetch();
    }
  });

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader
            title='My account'
            subtitle='Manage your deployed instances'
          />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>

                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Running instances</h4>
                        </div>
                        <div className='col-auto'>
                          {isUserLoading ? (
                            <Spinner />
                          ) : (
                            <small
                              className={
                                userData?.deployInstancesQuotaUsed >=
                                userData?.deployInstancesQuota
                                  ? 'text-danger'
                                  : 'text-gray-700'
                              }
                            >
                              {userData?.deployInstancesQuotaUsed}/
                              {userData?.deployInstancesQuota} instances
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        {isUserLoading ? (
                          <Spinner />
                        ) : instancesData?.length ? (
                          instancesData?.map((instance, instanceIndex) => {
                            return (
                              <div
                                key={`instance${instanceIndex}`}
                                className='list-group-item'
                              >
                                <div className='row align-items-center'>
                                  <div className='col-auto'>
                                    <p className='mb-0'>{instance.name}</p>
                                  </div>
                                  <div className='col-auto'>
                                    <p className='mb-0'>
                                      <Link href={instance.url}>
                                        {instance.url}
                                      </Link>
                                    </p>
                                  </div>
                                  <div className='col-auto ms-md-auto'>
                                    <p className='mb-0'>
                                      {instance.visibility ===
                                        DeployInstanceVisibility.PUBLIC && (
                                        <>
                                          <i className='icon-public me-2'></i>
                                          Public
                                        </>
                                      )}
                                      {instance.visibility ===
                                        DeployInstanceVisibility.PRIVATE && (
                                        <>
                                          <i className='icon-https me-2'></i>
                                          Private
                                          <CustomTooltip text='Click to copy the API key to use in your applications'>
                                            <button
                                              type='button'
                                              className='btn btn-xs btn-link ms-2'
                                              onClick={() => {
                                                navigator.clipboard.writeText(
                                                  instance.apiKey
                                                );
                                              }}
                                            >
                                              <i className='icon-copy'></i>
                                            </button>
                                          </CustomTooltip>
                                        </>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p className='mb-0 text-center text-gray-700'>
                            You have no running instances
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountInstances;
