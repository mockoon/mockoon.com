import Link from 'next/link';
import { FunctionComponent } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Subscription',
  description: 'Manage your Mockoon Cloud subscription'
};

const planLabels = {
  FREE: 'Free',
  SOLO: 'Solo',
  TEAM: 'Team',
  ENTERPRISE: 'Enterprise'
};

const frequencyLabels = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
};

const AccountSubscription: FunctionComponent = function () {
  const { isLoading, data: userData } = useCurrentUser();

  const displayPlanInfo =
    userData?.plan === 'SOLO' ||
    ((userData?.plan === 'TEAM' || userData?.plan === 'ENTERPRISE') &&
      userData?.teamRole === 'owner');

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

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
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <div className='list-group list-group-flush'>
                      <div className='list-group-item'>
                        <div className='row align-items-center'>
                          <div className='col'>
                            <p className='mb-0'>
                              <span className='text-primary'>
                                {planLabels[userData?.plan]}
                              </span>{' '}
                              plan
                              {userData?.plan !== 'FREE' && displayPlanInfo
                                ? ` (${
                                    frequencyLabels[
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
                                <small className='text-gray-700'>
                                  Next renewal on{' '}
                                  {new Date(
                                    userData?.subscription.renewOn * 1000
                                  ).toDateString()}
                                </small>
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
                          {userData?.plan === 'FREE' && (
                            <div className='col-auto'>
                              <Link href={'/account/subscribe/'}>
                                <a className='btn btn-xs btn-primary'>
                                  Upgrade plan
                                </a>
                              </Link>
                            </div>
                          )}
                          {userData?.plan !== 'FREE' && displayPlanInfo && (
                            <div className='col-auto'>
                              <Link
                                href={
                                  process.env
                                    .NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL
                                }
                              >
                                <a className='btn btn-xs btn-primary'>
                                  Manage subscription
                                </a>
                              </Link>
                            </div>
                          )}
                        </div>
                        {userData?.plan === 'FREE' &&
                          userData?.subscription?.portalEnabled && (
                            <div className='row pt-2'>
                              <div className='col text-end'>
                                <Link
                                  href={
                                    process.env
                                      .NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL
                                  }
                                >
                                  <a>
                                    <small>Manage past subscriptions</small>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {!isLoading && userData?.plan !== 'FREE' && (
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
    </Layout>
  );
};

export default AccountSubscription;
