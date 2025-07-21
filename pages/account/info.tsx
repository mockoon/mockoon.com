import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import { planNames } from '../../constants/plans';
import Layout from '../../layout/layout';
import { authProviderNames, useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Overview',
  description:
    'Manage your Mockoon Cloud account information and subscription details'
};

const AccountInfo: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, getIdToken } = useAuth();
  const router = useRouter();
  const { data: userData } = useCurrentUser();
  const {
    register: registerFormField,
    getValues,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm();
  const canSeeWebApp =
    userData?.teamRole !== 'team_admin' && userData?.teamRole !== 'billing';

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  useEffect(() => {
    if (userData) {
      reset({ displayName: userData?.displayName });
    }
  }, [userData]);

  const {
    mutate: updateProfile,
    isError: isUpdateProfileError,
    isPending: isUpdatingProfile
  } = useMutation({
    mutationFn: async () => {
      clearErrors();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          body: JSON.stringify(getValues()),
          method: 'PUT',
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
    onError: (error) => {
      setError('root.error', {
        message: 'Something went wrong',
        type: 'custom'
      });
    },
    onSuccess: (data) => {
      clearErrors();
    }
  });

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='General information' />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <h4 className='mb-0'>Basic Information</h4>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center mb-4'>
                            <div className='col'>
                              <p className='mb-0'>Email address</p>

                              <small className='text-gray-700'>
                                {user?.email}
                              </small>
                            </div>
                            {user?.providerData.find(
                              (providerData) =>
                                providerData.providerId === 'password'
                            ) !== undefined && (
                              <div className='col-auto'>
                                <Link
                                  href={'/account/security/'}
                                  className='btn btn-xs btn-primary-subtle'
                                >
                                  Change email
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className='list-group-item'>
                          <div className='row align-items-center mb-4'>
                            <div className='col'>
                              <p className='mb-0'>Authentication methods</p>
                            </div>
                          </div>
                          {user &&
                            user.providerData &&
                            user.providerData.map((providerData) => (
                              <div
                                key={providerData.providerId}
                                className='d-flex'
                              >
                                <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                                  <i className='icon-check'></i>
                                </div>

                                <p>
                                  <small>
                                    {authProviderNames[providerData.providerId]}
                                  </small>
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Profile</h4>
                          <small className='text-gray-700'>
                            The display name will be used in the desktop
                            application when using{' '}
                            <Link href='/cloud/docs/data-synchronization-team-collaboration/#team-collaboration-and-conflict-handling'>
                              team collaboration
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <form
                        onSubmit={(e) => {
                          clearErrors();
                          handleSubmit(() => {
                            updateProfile();
                          })(e);
                        }}
                      >
                        <div className='form-group'>
                          <label className='form-label' htmlFor='displayName'>
                            Display name
                          </label>
                          <input
                            className='form-control'
                            id='displayName'
                            type='text'
                            {...registerFormField('displayName')}
                          />
                        </div>

                        <div className='d-flex align-items-center'>
                          <button
                            className='btn btn-xs btn-primary-subtle me-4'
                            type='submit'
                            disabled={isSubmitting}
                          >
                            Save
                          </button>
                          {isSubmitting && <Spinner />}
                          {!isUpdatingProfile && errors.root?.error && (
                            <div className='col-auto text-danger text-center fw-bold'>
                              Something went wrong, please try again later
                            </div>
                          )}
                          {!isUpdatingProfile &&
                            isSubmitSuccessful &&
                            !isUpdateProfileError && (
                              <div className='col-auto text-success text-center fw-bold'>
                                Profile updated
                              </div>
                            )}
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <h4 className='mb-0'>Mockoon Cloud</h4>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>
                                {userData?.plan === 'FREE' &&
                                  'No active subscription'}
                                {userData?.plan !== 'FREE' && (
                                  <>
                                    <span className='text-primary'>
                                      {planNames[userData?.plan]}
                                    </span>{' '}
                                    plan
                                  </>
                                )}
                              </p>
                            </div>
                            <div className='col-auto'>
                              <Link
                                href={'/account/subscription/'}
                                className='btn btn-xs btn-primary-subtle'
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Misc</h4>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Delete account</p>

                              <small className='text-gray-700'>
                                To delete your account, please contact us at{' '}
                                <a href='mailto:support@mockoon.com'>
                                  support@mockoon.com
                                </a>
                              </small>
                            </div>
                          </div>
                        </div>
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

export default AccountInfo;
