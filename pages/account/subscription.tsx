import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import PaddleScript from '../../components/paddle';
import Spinner from '../../components/spinner';
import { frequencyNames, planNames } from '../../constants/plans';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Subscription',
  description: 'Manage your Mockoon Cloud subscription'
};

const AccountSubscription: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  const displayPlanInfo =
    userData?.plan === 'SOLO' ||
    ((userData?.plan === 'TEAM' || userData?.plan === 'ENTERPRISE') &&
      userData?.teamRole === 'owner');

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <PaddleScript />
          <AccountHeader />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <h4 className='mb-0'>Current plan</h4>
                    </div>
                    <div className='card-body'>
                      {isUserLoading ? (
                        <Spinner />
                      ) : (
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <div className='row align-items-center'>
                              <div className='col'>
                                <p className='mb-0'>
                                  <span className='text-primary'>
                                    {planNames[userData?.plan]}
                                  </span>{' '}
                                  plan
                                  {userData?.plan !== 'FREE' && displayPlanInfo
                                    ? ` (${
                                        frequencyNames[
                                          userData?.subscription?.frequency
                                        ]
                                      })`
                                    : ''}
                                </p>

                                {userData?.plan !== 'FREE' && displayPlanInfo && (
                                  <p className='m-0'>
                                    <small className='text-gray-700'>
                                      Subscribed on{' '}
                                      {new Date(
                                        userData?.subscription.createdOn * 1000
                                      ).toDateString()}
                                    </small>{' '}
                                    -{' '}
                                    {!userData.subscription
                                      .cancellationScheduled && (
                                      <small className='text-gray-700'>
                                        Next renewal on{' '}
                                        {new Date(
                                          userData?.subscription.renewOn * 1000
                                        ).toDateString()}
                                      </small>
                                    )}
                                    {userData.subscription
                                      .cancellationScheduled && (
                                      <small className='text-danger'>
                                        Will be cancelled on{' '}
                                        {new Date(
                                          userData?.subscription.renewOn * 1000
                                        ).toDateString()}
                                      </small>
                                    )}
                                  </p>
                                )}
                                {userData?.plan !== 'FREE' && !displayPlanInfo && (
                                  <p className='m-0'>
                                    <small className='text-gray-700'>
                                      Your plan is managed by your team owner
                                    </small>
                                  </p>
                                )}
                              </div>
                              <div className='col-auto'>
                                {userData?.plan !== 'FREE' &&
                                  userData.subscription.pastDue && (
                                    <span className='badge bg-warning ms-2'>
                                      Invoice past due
                                    </span>
                                  )}
                                {userData?.plan === 'FREE' && (
                                  <Link
                                    href={'/account/subscribe/'}
                                    className='btn btn-xs btn-primary'
                                  >
                                    Upgrade plan
                                  </Link>
                                )}
                                {userData?.plan !== 'FREE' &&
                                  displayPlanInfo &&
                                  userData?.subscription?.provider ===
                                    'stripe' && (
                                    <Link
                                      href={
                                        process.env
                                          .NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL
                                      }
                                      className='btn btn-xs btn-primary'
                                    >
                                      Manage subscription
                                    </Link>
                                  )}
                              </div>
                            </div>
                            {userData?.plan === 'FREE' &&
                              userData?.subscription?.portalEnabled &&
                              userData?.subscription?.provider === 'stripe' && (
                                <div className='row pt-2'>
                                  <div className='col text-end'>
                                    <Link
                                      href={
                                        process.env
                                          .NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL
                                      }
                                    >
                                      <small>Manage past subscriptions</small>
                                    </Link>
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isUserLoading && userData?.plan !== 'FREE' && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Quotas</h4>
                      </div>
                      <div className='card-body'>
                        <div className='row align-items-center'>
                          <div className='col-md-8'>
                            <p className='mb-0'>
                              AI generated mocks used (
                              {userData?.templatesQuotaUsed}/
                              {userData?.templatesQuota})
                            </p>
                          </div>
                          <div className='col-md-4'>
                            <div className='progress'>
                              <div
                                className={`progress-bar ${
                                  userData?.templatesQuotaUsed >=
                                  userData?.templatesQuota
                                    ? 'bg-warning'
                                    : ''
                                }`}
                                role='progressbar'
                                aria-valuenow={userData?.templatesQuotaUsed}
                                aria-valuemin={0}
                                aria-valuemax={userData?.templatesQuota}
                                style={{
                                  width:
                                    (userData?.templatesQuotaUsed * 100) /
                                      userData?.templatesQuota +
                                    '%'
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountSubscription;
