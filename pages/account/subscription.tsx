import { Plans } from '@mockoon/cloud';
import { useMutation } from '@tanstack/react-query';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
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
  useCurrentSubscription,
  useCurrentTeam,
  useCurrentUser
} from '../../utils/queries';

const meta = {
  title: 'My account - Subscription',
  description: 'Manage your Mockoon Cloud subscription'
};

let seatUpgradeTimeout: NodeJS.Timeout;

const AccountSubscription: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, getIdToken } = useAuth();
  const router = useRouter();
  const {
    isLoading: isUserLoading,
    data: userData,
    refetch: refetchUserData
  } = useCurrentUser();
  const { data: teamData, refetch: refetchTeamData } = useCurrentTeam(
    userData?.teamId,
    userData?.teamRole
  );
  const { data: subscriptionData } = useCurrentSubscription(userData);
  const [seats, setSeats] = useState(1);
  const [minSeats, setMinSeats] = useState(1);
  const [upgradeInProgress, setUpgradeInProgress] = useState(false);
  const isTeamPlan =
    userData?.plan === 'TEAM' || userData?.plan === 'ENTERPRISE';
  const isSupportRole =
    userData?.teamRole === 'team_admin' || userData?.teamRole === 'billing';
  const canManageSubscription = isSupportRole || userData?.teamRole === 'owner';

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
    if (teamData) {
      setSeats(teamData.seats);
    }
  }, [teamData]);

  useEffect(() => {
    if (upgradeInProgress) {
      console.log(seats);
      clearTimeout(seatUpgradeTimeout);

      seatUpgradeTimeout = setTimeout(() => {
        upgradePreview(seats);
      }, 500);
    }
  }, [seats, upgradeInProgress]);

  const {
    mutate: upgradePreview,
    data: upgradePreviewData,
    status: upgradePreviewStatus,
    isError: isUpgradePreviewError,
    isPending,
    reset: resetUpgradePreview
  } = useMutation({
    mutationFn: async (seats: number) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/upgrade?seats=${seats}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error();
      }
    }
  });

  const {
    mutate: upgrade,
    status: upgradeStatus,
    isError: isUpgradeError,
    isSuccess: isUpgradeSuccess,
    reset: resetUpgrade
  } = useMutation({
    mutationFn: async (seats: number) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/upgrade?seats=${seats}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setTimeout(() => {
          resetUpgradePreview();
          resetUpgrade();
          setUpgradeInProgress(false);
          refetchUserData();
          refetchTeamData();
        }, 10_000);
      } else {
        throw new Error();
      }
    }
  });

  const displayPlanInfo =
    userData?.plan === 'SOLO' || (isTeamPlan && canManageSubscription);

  const sharedQuotas = (
    <>
      <div className='list-group-item'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
            <p className='mb-0'>
              Synchronized cloud environments (
              {userData?.cloudSyncItemsQuotaUsed}/
              {userData?.cloudSyncItemsQuota})
            </p>
            <p className='mb-0'>
              <small className='text-gray-700'>
                Maximum of {userData?.cloudSyncSizeQuota / 1000000}MB per
                environment
                <br />
                <Link href='/cloud/docs/data-synchronization-team-collaboration/'>
                  Documentation
                </Link>
              </small>
            </p>
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
              Cloud deployments ({userData?.deployInstancesQuotaUsed}/
              {userData?.deployInstancesQuota})
            </p>
            <p className='mb-0'>
              <small className='text-gray-700'>
                <Link href='/cloud/docs/api-mock-cloud-deployments/'>
                  Documentation
                </Link>
              </small>
            </p>
          </div>
          <div className='col-md-4'>
            <div className='d-flex flex-column'>
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
              <div className='align-self-end mt-2'>
                <Link
                  href={'/account/instances/'}
                  className='btn btn-xs btn-primary-subtle'
                >
                  View instances
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='list-group-item'>
        <div className='row align-items-center'>
          <div className='col-md-8'>
            <p className='mb-0'>
              Monthly requests (
              {userData?.deployInstancesMonthlyRequestsQuota.toLocaleString()})
            </p>
            <p className='mb-0'>
              <small className='text-gray-700'>
                We currently don't enforce a strict limit, but if your usage
                regularly exceeds the quota, we'll get in touch to discuss your
                needs.
              </small>
            </p>
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
                          <h4 className='mb-0'>Current Mockoon Cloud plan</h4>
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
                                  {userData?.plan === 'FREE' &&
                                    'No active subscription'}
                                  {userData?.plan !== 'FREE' && (
                                    <>
                                      <span className='text-primary'>
                                        {planNames[userData?.plan]}
                                      </span>{' '}
                                      plan{' '}
                                      {teamData?.plan !== 'SOLO' && (
                                        <>- {teamData?.seats} seats</>
                                      )}
                                    </>
                                  )}

                                  {subscriptionData?.frequency &&
                                  userData?.plan !== 'FREE' &&
                                  displayPlanInfo
                                    ? ` - ${
                                        frequencyNames[
                                          subscriptionData?.frequency
                                        ]
                                      }`
                                    : ''}
                                  {userData?.plan !== 'FREE' &&
                                    subscriptionData?.status === 'past_due' && (
                                      <span className='badge text-bg-warning ms-2'>
                                        Invoice past due
                                      </span>
                                    )}
                                  {userData?.plan !== 'FREE' &&
                                    subscriptionData?.status === 'trialing' && (
                                      <span className='badge text-bg-primary-subtle ms-2'>
                                        Trial period active
                                      </span>
                                    )}
                                </p>

                                {userData?.plan !== 'FREE' &&
                                  subscriptionData?.provider !== 'free' &&
                                  subscriptionData?.createdOn &&
                                  subscriptionData?.renewOn &&
                                  displayPlanInfo && (
                                    <p className='m-0'>
                                      <small className='text-gray-700'>
                                        Subscribed on{' '}
                                        {new Date(
                                          subscriptionData?.createdOn * 1000
                                        ).toDateString()}
                                      </small>{' '}
                                      -{' '}
                                      {!subscriptionData?.cancellationScheduled && (
                                        <small className='text-gray-700'>
                                          Next renewal on{' '}
                                          {new Date(
                                            subscriptionData?.renewOn * 1000
                                          ).toDateString()}
                                        </small>
                                      )}
                                      {subscriptionData?.cancellationScheduled && (
                                        <small className='text-danger'>
                                          Will be cancelled on{' '}
                                          {new Date(
                                            subscriptionData?.renewOn * 1000
                                          ).toDateString()}
                                        </small>
                                      )}
                                    </p>
                                  )}
                                {userData?.plan !== 'FREE' &&
                                  subscriptionData?.provider === 'free' &&
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
                                {userData?.plan === 'FREE' ? (
                                  <div>
                                    <Link
                                      href={'/account/subscribe/'}
                                      className='btn btn-xs btn-primary'
                                    >
                                      Subscribe to a plan
                                    </Link>
                                  </div>
                                ) : !upgradeInProgress &&
                                  subscriptionData &&
                                  (userData?.plan === 'SOLO' ||
                                    (userData?.plan === 'TEAM' &&
                                      canManageSubscription)) &&
                                  !subscriptionData?.cancellationScheduled &&
                                  subscriptionData?.provider !== 'free' &&
                                  subscriptionData?.provider !== 'manual' &&
                                  teamData?.seats < pricing.TEAM.maxSeats ? (
                                  <div>
                                    <button
                                      className='btn btn-xs btn-primary'
                                      onClick={() => {
                                        const newSeats =
                                          teamData?.plan === 'SOLO'
                                            ? 1
                                            : teamData?.seats + 1;
                                        setUpgradeInProgress(true);
                                        setSeats(newSeats);
                                        setMinSeats(newSeats);
                                        upgradePreview(newSeats);
                                      }}
                                    >
                                      {userData?.plan === 'SOLO' &&
                                        'Upgrade to a Team plan'}
                                      {userData?.plan === 'TEAM' &&
                                        'Upgrade seats'}
                                    </button>
                                  </div>
                                ) : (
                                  <div>
                                    <small className='text-gray-700 ms-auto'>
                                      Contact us at{' '}
                                      <a href='mailto:support@mockoon.com'>
                                        support@mockoon.com
                                      </a>{' '}
                                      to modify your plan.
                                    </small>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {upgradeInProgress && (
                            <div className='list-group-item'>
                              <div className='row mb-4'>
                                <div className='col'>
                                  <p className='m-0 fw-bold'>
                                    {userData?.plan === 'SOLO' &&
                                      'Team plan upgrade payment preview'}
                                    {userData?.plan === 'TEAM' &&
                                      'Seats upgrade payment preview'}
                                  </p>
                                </div>
                                <div className='col-auto'>
                                  <div className='row align-items-center'>
                                    <div className='col-auto'>
                                      <label
                                        htmlFor='seatsNumber'
                                        className='col-form-label p-0'
                                      >
                                        Number of seats
                                      </label>
                                    </div>
                                    <div className='col-auto'>
                                      <input
                                        type='number'
                                        id='seatsNumber'
                                        className='form-control form-control-xs'
                                        placeholder='Number of seats'
                                        value={seats}
                                        disabled={isPending}
                                        min={minSeats}
                                        max={pricing.TEAM.maxSeats}
                                        step={1}
                                        onChange={(event) => {
                                          let newSeats = parseInt(
                                            event.target.value
                                          );

                                          if (
                                            isNaN(newSeats) ||
                                            newSeats < 1 ||
                                            newSeats < minSeats
                                          ) {
                                            newSeats = minSeats;
                                          } else if (
                                            newSeats > pricing.TEAM.maxSeats
                                          ) {
                                            newSeats = pricing.TEAM.maxSeats;
                                          }

                                          setSeats(newSeats);
                                          console.log(newSeats);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {upgradePreviewStatus === 'pending' && (
                                <Spinner small />
                              )}

                              {upgradePreviewData && (
                                <>
                                  <div className='row align-items-center'>
                                    {upgradePreviewData.immediatePayment && (
                                      <div className='col'>
                                        <p className='m-0'>
                                          Immediate payment:{' '}
                                          <span className='fw-bold'>
                                            $
                                            {upgradePreviewData.immediatePayment
                                              .price / 100}
                                          </span>{' '}
                                          (Inc. tax)
                                          <br />
                                          <small className='text-gray-700'>
                                            Prorata payment for the remaining{' '}
                                            {formatDuration(
                                              intervalToDuration({
                                                start:
                                                  upgradePreviewData
                                                    .immediatePayment.period
                                                    .start,
                                                end: upgradePreviewData
                                                  .immediatePayment.period.end
                                              }),
                                              { format: ['days'] }
                                            )}{' '}
                                            of your billing cycle
                                          </small>
                                        </p>
                                      </div>
                                    )}
                                    <div className='col'>
                                      <p className='m-0'>
                                        Next payment:{' '}
                                        <span className='fw-bold'>
                                          $
                                          {upgradePreviewData.nextPayment
                                            .price / 100}
                                        </span>{' '}
                                        (Inc. tax)
                                        <br />
                                        <small className='text-gray-700'>
                                          {subscriptionData?.status ===
                                            'trialing' && (
                                            <>
                                              Trial period active - Next payment
                                              will be charged on{' '}
                                            </>
                                          )}
                                          {subscriptionData?.status !==
                                            'trialing' && (
                                            <>
                                              Next payment will be charged
                                              on{' '}
                                            </>
                                          )}
                                          {format(
                                            upgradePreviewData.nextPayment
                                              .period.start,
                                            'dd/MM/yyyy'
                                          )}
                                        </small>
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                              <div className='row'>
                                <div className='mt-4 d-flex align-items-center'>
                                  <button
                                    className='btn btn-xs btn-secondary'
                                    onClick={() => {
                                      resetUpgradePreview();
                                      resetUpgrade();
                                      setUpgradeInProgress(false);
                                    }}
                                    disabled={isUpgradeSuccess}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className='btn btn-xs btn-primary ms-2'
                                    onClick={() => {
                                      upgrade(seats);
                                    }}
                                    disabled={
                                      upgradeStatus === 'pending' ||
                                      upgradePreviewStatus === 'pending' ||
                                      isUpgradePreviewError ||
                                      isUpgradeError ||
                                      isUpgradeSuccess
                                    }
                                  >
                                    Confirm payment
                                  </button>
                                  {(upgradeStatus === 'pending' ||
                                    isUpgradeSuccess) && (
                                    <div className='ms-2'>
                                      <Spinner small />
                                    </div>
                                  )}
                                  {(isUpgradeError ||
                                    isUpgradePreviewError) && (
                                    <span className='text-danger ms-2'>
                                      An error occurred. Please try again later
                                      or contact us at{' '}
                                      <a href='mailto:support@mockoon.com'>
                                        support@mockoon.com
                                      </a>
                                    </span>
                                  )}
                                  {isUpgradeSuccess && (
                                    <span className='text-success ms-2'>
                                      Your plan has been upgraded. The change
                                      will be effective shortly.
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <p className='m-0 mt-2'>
                                    <small className='text-gray-700'>
                                      {subscriptionData?.status ===
                                        'trialing' && (
                                        <>
                                          ⚠️ Once confirmed, your plan will be
                                          upgraded and you will be charged the
                                          next payment amount when your trial
                                          ends.
                                        </>
                                      )}
                                      {subscriptionData?.status !==
                                        'trialing' && (
                                        <>
                                          ⚠️ Once confirmed, your plan will be
                                          upgraded and you will be charged the
                                          immediate payment amount.
                                        </>
                                      )}
                                    </small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {subscriptionData?.customerId &&
                            subscriptionData?.portalUrl && (
                              <>
                                <div className='list-group-item'>
                                  <div className='row align-items-center'>
                                    <div className='col'>
                                      <p className='mb-0'>
                                        Manage your subscription
                                      </p>

                                      <p className='m-0'>
                                        <small className='text-gray-700'>
                                          Update your payment method, cancel or
                                          view past invoices. You will be
                                          redirected to our payment provider's
                                          website.
                                        </small>
                                      </p>
                                    </div>
                                    <div className='col-auto'>
                                      <Link
                                        href={subscriptionData?.portalUrl}
                                        className='btn btn-xs btn-primary-subtle'
                                        target='_blank'
                                      >
                                        Manage{' '}
                                        <i className='icon-open ms-2'></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                        </div>
                      )}
                    </div>
                  </div>

                  {!isUserLoading && userData?.plan !== 'FREE' && (
                    <>
                      {!isSupportRole && (
                        <div className='card card-bleed shadow-light-lg mb-6'>
                          <div className='card-header'>
                            <h4 className='mb-0'>
                              {userData?.plan === 'SOLO'
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
                                      AI generated mocks used (
                                      {userData?.templatesQuotaUsed}/
                                      {userData?.templatesQuota})
                                    </p>
                                    <p className='mb-0'>
                                      <small className='text-gray-700'>
                                        Resets monthly
                                        {(userData?.plan === 'SOLO' ||
                                          userData?.teamRole === 'owner') && (
                                          <>
                                            {' '}
                                            - Next reset on{' '}
                                            {new Date(
                                              userData?.nextQuotaResetOn * 1000
                                            ).toDateString()}
                                          </>
                                        )}
                                        <br />
                                        <Link href='/cloud/docs/templates-and-ai-assistant/'>
                                          Documentation
                                        </Link>
                                      </small>
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
                                        aria-valuenow={
                                          userData?.templatesQuotaUsed
                                        }
                                        aria-valuemin={0}
                                        aria-valuemax={userData?.templatesQuota}
                                        style={{
                                          width:
                                            (userData?.templatesQuotaUsed *
                                              100) /
                                              userData?.templatesQuota +
                                            '%'
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {userData?.plan === 'SOLO' && sharedQuotas}
                            </div>
                          </div>
                        </div>
                      )}

                      {userData?.plan !== 'SOLO' && (
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
