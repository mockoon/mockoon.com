import { Plans } from '@mockoon/cloud';
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
import { pricing } from '../../data/pricing';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import {
  useCurrentSubscriptionLinks,
  useCurrentUser
} from '../../utils/queries';

const meta = {
  title: 'My account - Subscription',
  description: 'Manage your Mockoon Cloud subscription'
};

const AccountSubscription: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();
  const { data: subscriptionLinksData } = useCurrentSubscriptionLinks(userData);

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

  const sharedQuotas = (
    <>
      <div className='list-group-item'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
            <p className='mb-0'>
              <Link
                href={
                  '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
                }
              >
                Synchronized cloud environments
              </Link>{' '}
              ({userData?.cloudSyncItemsQuotaUsed}/
              {userData?.cloudSyncItemsQuota})
            </p>
            <small className='text-gray-700'>
              Maximum of {userData?.cloudSyncSizeQuota / 1000000}MB per
              environment
            </small>
          </div>
          <div className='col-md-4'>
            <div className='progress'>
              <div
                className={`progress-bar ${
                  userData?.cloudSyncItemsQuotaUsed >=
                  userData?.cloudSyncItemsQuota
                    ? 'bg-warning'
                    : ''
                }`}
                role='progressbar'
                aria-valuenow={userData?.cloudSyncItemsQuotaUsed}
                aria-valuemin={0}
                aria-valuemax={userData?.cloudSyncItemsQuota}
                style={{
                  width:
                    (userData?.cloudSyncItemsQuotaUsed * 100) /
                      userData?.cloudSyncItemsQuota +
                    '%'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className='list-group-item'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
            <p className='mb-0'>
              <Link
                href={'/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'}
              >
                Cloud deployments
              </Link>{' '}
              ({userData?.deployInstancesQuotaUsed}/
              {userData?.deployInstancesQuota})
            </p>
            <small className='text-gray-700'>
              Maximum of{' '}
              {pricing[userData?.plan]?.deployCallsQuota.toLocaleString()}{' '}
              request per month
            </small>
          </div>
          <div className='col-md-4'>
            <div className='progress'>
              <div
                className={`progress-bar ${
                  userData?.deployInstancesQuotaUsed >=
                  userData?.deployInstancesQuota
                    ? 'bg-warning'
                    : ''
                }`}
                role='progressbar'
                aria-valuenow={userData?.deployInstancesQuotaUsed}
                aria-valuemin={0}
                aria-valuemax={userData?.deployInstancesQuota}
                style={{
                  width:
                    (userData?.deployInstancesQuotaUsed * 100) /
                      userData?.deployInstancesQuota +
                    '%'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <PaddleScript />
          <AccountHeader
            title='My account'
            subtitle='Manage your subscription'
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
                          <h4 className='mb-0'>Current plan</h4>
                        </div>
                        {userData?.plan !== Plans.FREE && (
                          <div className='col-auto'>
                            <Link href='/tutorials/getting-started-with-mockoon-cloud/'>
                              Getting started guide
                            </Link>
                          </div>
                        )}
                      </div>
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
                                  {userData?.subscription?.frequency &&
                                  userData?.plan !== 'FREE' &&
                                  displayPlanInfo
                                    ? ` (${
                                        frequencyNames[
                                          userData?.subscription?.frequency
                                        ]
                                      })`
                                    : ''}
                                  {userData?.plan !== 'FREE' &&
                                    userData.subscription?.pastDue && (
                                      <span className='badge text-bg-warning ms-2'>
                                        Invoice past due
                                      </span>
                                    )}
                                  {userData?.plan !== 'FREE' &&
                                    userData.subscription?.trial && (
                                      <span className='badge text-bg-primary-subtle ms-2'>
                                        Trial period active
                                      </span>
                                    )}
                                </p>

                                {userData?.plan !== 'FREE' &&
                                  userData?.subscription?.provider !== 'free' &&
                                  userData?.subscription?.createdOn &&
                                  userData?.subscription?.renewOn &&
                                  displayPlanInfo && (
                                    <p className='m-0'>
                                      <small className='text-gray-700'>
                                        Subscribed on{' '}
                                        {new Date(
                                          userData?.subscription?.createdOn *
                                            1000
                                        ).toDateString()}
                                      </small>{' '}
                                      -{' '}
                                      {!userData.subscription
                                        .cancellationScheduled && (
                                        <small className='text-gray-700'>
                                          Next renewal on{' '}
                                          {new Date(
                                            userData?.subscription?.renewOn *
                                              1000
                                          ).toDateString()}
                                        </small>
                                      )}
                                      {userData.subscription
                                        .cancellationScheduled && (
                                        <small className='text-danger'>
                                          Will be cancelled on{' '}
                                          {new Date(
                                            userData?.subscription?.renewOn *
                                              1000
                                          ).toDateString()}
                                        </small>
                                      )}
                                    </p>
                                  )}
                                {userData?.plan !== 'FREE' &&
                                  userData?.subscription?.provider === 'free' &&
                                  displayPlanInfo && (
                                    <p className='m-0'>
                                      <small className='text-gray-700'>
                                        You are on a free plan
                                      </small>
                                    </p>
                                  )}
                                {userData?.plan !== 'FREE' &&
                                  !displayPlanInfo && (
                                    <p className='m-0'>
                                      <small className='text-gray-700'>
                                        Your plan is managed by your team owner
                                      </small>
                                    </p>
                                  )}
                              </div>
                              <div className='col-auto'>
                                <div>
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
                                {(userData?.plan === 'SOLO' ||
                                  (userData?.plan === 'TEAM' &&
                                    userData?.teamRole === 'owner')) && (
                                  <div>
                                    <small className='text-gray-700 ms-auto'>
                                      Contact us at{' '}
                                      <a href='mailto:support@mockoon.com'>
                                        support@mockoon.com
                                      </a>{' '}
                                      to upgrade your plan.
                                    </small>
                                  </div>
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

                          {userData?.plan !== 'FREE' &&
                            subscriptionLinksData && (
                              <>
                                <div className='list-group-item'>
                                  <div className='row align-items-center'>
                                    <div className='col'>
                                      <p className='mb-0'>
                                        Update payment method
                                      </p>
                                      {userData?.subscription?.pastDue && (
                                        <p className='m-0'>
                                          <small className='text-gray-700'>
                                            Update your payment method and pay
                                            the past due invoice
                                          </small>
                                        </p>
                                      )}
                                    </div>
                                    <div className='col-auto'>
                                      <Link
                                        href={
                                          subscriptionLinksData?.update_payment_method
                                        }
                                        className='btn btn-xs btn-secondary'
                                      >
                                        Update
                                        {userData?.subscription?.pastDue &&
                                          ' and pay'}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                {!userData?.subscription
                                  ?.cancellationScheduled && (
                                  <div className='list-group-item'>
                                    <div className='row align-items-center'>
                                      <div className='col'>
                                        <p className='mb-0'>
                                          Cancel subscription
                                        </p>
                                        <p className='m-0'>
                                          <small className='text-gray-700'>
                                            Will be cancelled at the end of the{' '}
                                            {userData?.subscription?.trial
                                              ? 'trial period'
                                              : 'current billing period'}
                                          </small>
                                        </p>
                                      </div>
                                      <div className='col-auto'>
                                        <Link
                                          href={subscriptionLinksData?.cancel}
                                          className='btn btn-xs btn-danger'
                                        >
                                          Cancel
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                        </div>
                      )}
                    </div>
                  </div>

                  {!isUserLoading && userData?.plan !== 'FREE' && (
                    <>
                      <div className='card card-bleed shadow-light-lg mb-6'>
                        <div className='card-header'>
                          <h4 className='mb-0'>
                            {userData.plan === 'SOLO'
                              ? 'Quotas'
                              : 'Personal quotas'}
                          </h4>
                        </div>
                        <div className='card-body'>
                          <div className='list-group list-group-flush'>
                            <div className='list-group-item'>
                              <div className='row align-items-center'>
                                <div className='col-md-8'>
                                  <p className='mb-0'>
                                    <Link href='/docs/latest/mockoon-cloud/templates-and-ai-assistant/'>
                                      AI generated mocks
                                    </Link>{' '}
                                    used ({userData?.templatesQuotaUsed}/
                                    {userData?.templatesQuota})
                                  </p>
                                  <small className='text-gray-700'>
                                    Resets monthly - Next reset on{' '}
                                    {new Date(
                                      userData?.nextQuotaResetOn * 1000
                                    ).toDateString()}
                                  </small>
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
                                      aria-valuenow={
                                        userData?.templatesQuotaUsed
                                      }
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
                            {userData.plan === 'SOLO' && sharedQuotas}
                          </div>
                        </div>
                      </div>
                      {userData.plan !== 'SOLO' && (
                        <div className='card card-bleed shadow-light-lg mb-6'>
                          <div className='card-header'>
                            <h4 className='mb-0'>Team quotas</h4>
                          </div>
                          <div className='card-body'>
                            <div className='list-group list-group-flush'>
                              {sharedQuotas}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {!isUserLoading &&
                    (userData?.plan === 'SOLO' ||
                      userData?.plan === 'TEAM') && (
                      <div className='card card-bleed shadow-light-lg mb-6'>
                        <div className='card-header'>
                          <h4 className='mb-0'>Email support</h4>
                        </div>
                        <div className='card-body'>
                          <div className='list-group list-group-flush'>
                            <div className='list-group-item'>
                              <p className='mb-0'>
                                Contact us at{' '}
                                <a href='mailto:email-support@mockoon.com'>
                                  email-support@mockoon.com
                                </a>
                              </p>
                              <small className='text-gray-700'>
                                Usual response time is between 24 and 48 hours
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {!isUserLoading && userData?.plan === 'ENTERPRISE' && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Priority support</h4>
                      </div>
                      <div className='card-body'>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <p className='mb-0'>
                              Contact us at{' '}
                              <a href='mailto:priority-support@mockoon.com'>
                                priority-support@mockoon.com
                              </a>
                            </p>
                            <small className='text-gray-700'>
                              Guaranteed response time of one business day (9 am
                              to 5 pm CET/CEST, Monday to Friday).
                            </small>
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
