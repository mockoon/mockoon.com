import { Plans } from '@mockoon/cloud';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { frequencyNames, planNames } from '../constants/plans';
import { pricing } from '../data/pricing';
import { useAuth } from '../utils/auth';
import { useCountdown } from '../utils/countdown';
import { useCurrentUser } from '../utils/queries';
import PaddleScript from './paddle';

const queryClient = new QueryClient();

const discounts = {
  SOLO: {
    MONTHLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_MONTHLY_DISCOUNT,
    YEARLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_YEARLY_DISCOUNT
  },
  TEAM: {
    MONTHLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_MONTHLY_DISCOUNT,
    YEARLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_YEARLY_DISCOUNT
  },
  ENTERPRISE: {
    MONTHLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_MONTHLY_DISCOUNT,
    YEARLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_YEARLY_DISCOUNT
  }
};

const suffixes = {
  MONTHLY: 'mo',
  YEARLY: 'yr'
};

const PlansView: FunctionComponent<{
  showTagline: boolean;
}> = function ({ showTagline }) {
  const auth = useAuth();
  const currentUser = useCurrentUser();
  const router = useRouter();
  const [planFrequency, setPlanFrequency] = useState('MONTHLY');
  const [seats, setSeats] = useState(1);
  const [configurePlan, setConfigurePlan] = useState(null);
  const discountLimit =
    parseInt(process.env.NEXT_PUBLIC_DISCOUNT_TIME_LIMIT, 10) - 3600000;
  const discountEnabled = new Date().getTime() < discountLimit;
  const [countdownDays, countdownHours, countdownMinutes, countdownSeconds] =
    useCountdown(discountLimit);

  const openCheckout = (planId: string) => {
    // @ts-ignore
    Paddle.Checkout.open({
      settings: {
        theme: 'light',
        locale: 'en'
      },
      discountId: discountEnabled
        ? discounts[planId][planFrequency] || null
        : null,
      items: [
        {
          priceId: pricing[planId][planFrequency].priceId,
          quantity: planId === 'SOLO' ? 1 : seats
        }
      ],
      customer: {
        email: auth.user.email
      },
      customData: {
        userId: auth.user.uid
      }
    });
  };

  const redirect = (planId: string) => {
    if (!auth.isAuth) {
      localStorage.setItem('redirect', '/account/subscribe/');
      window.location.href = `/signup/`;
      return;
    }

    if (auth.isAuth && currentUser.data?.plan !== 'FREE') {
      router.push('/account/subscription/');
      return;
    }

    if (planId === 'SOLO') {
      setConfigurePlan(null);
      setSeats(1);
    }

    if (planId === 'TEAM' || planId === 'ENTERPRISE') {
      setConfigurePlan(planId);
      setSeats(pricing[planId].minSeats);
      return;
    }

    openCheckout(planId);
  };

  const subscribeBtn = (plan: Plans) => (
    <button
      type='button'
      className={`btn btn-primary btn-sm ${
        currentUser.data?.plan !== 'FREE' && currentUser.data?.plan !== plan
          ? 'invisible'
          : ''
      }`}
      onClick={() => {
        redirect(plan);
      }}
    >
      {currentUser.data?.plan === Plans.FREE && 'Buy now'}

      {currentUser.data?.plan !== Plans.FREE &&
        currentUser.data?.plan === plan &&
        'Current plan'}
      {currentUser.data?.plan !== Plans.FREE &&
        currentUser.data?.plan !== plan &&
        '&nbsp;'}
    </button>
  );
  const tickBadge = (
    <div className='badge badge-rounded-circle text-bg-success-subtle'>
      <i className='icon-check'></i>
    </div>
  );
  const crossBadge = (
    <div className='badge badge-rounded-circle text-bg-danger-subtle'>
      <i className='icon-clear'></i>
    </div>
  );

  return (
    <>
      <PaddleScript />
      <QueryClientProvider client={queryClient}>
        <section className='mb-8'>
          <div className='container'>
            {discountEnabled && (
              <div className='text-center my-6 col-md-8 mx-auto'>
                <div className='alert alert-light border-info-subtle border-2 shadow'>
                  <p>
                    📦 <strong>Cloud deployments are available!</strong>
                  </p>
                  <p>
                    To celebrate the launch of the cloud deployments feature,
                    we're offering a 50% discount on the first 6 months for
                    monthly subscriptions or 25% of a yearly subscription.
                  </p>
                  <p>
                    (The discount will be automatically applied at checkout)
                  </p>
                  Remaining time:{' '}
                  {countdownDays > 0 && (
                    <strong>
                      <span>
                        {countdownDays} day{countdownDays > 1 ? 's' : ''}
                      </span>
                    </strong>
                  )}{' '}
                  {countdownHours > 0 && (
                    <strong>
                      <span>
                        {countdownHours} hour{countdownHours > 1 ? 's' : ''}
                      </span>
                    </strong>
                  )}{' '}
                  {countdownMinutes > 0 && (
                    <strong>
                      <span>
                        {countdownMinutes} minute
                        {countdownMinutes > 1 ? 's' : ''}
                      </span>
                    </strong>
                  )}
                </div>
              </div>
            )}
            <div className='text-center my-6'>
              <div
                className='btn-group'
                role='group'
                aria-label='Plan frequency selector'
              >
                <input
                  type='radio'
                  className='btn-check'
                  name='MONTHLY'
                  value='MONTHLY'
                  id='MONTHLY'
                  autoComplete='off'
                  checked={planFrequency === 'MONTHLY'}
                  onChange={(event) => {
                    setPlanFrequency(event.target.value);
                  }}
                />
                <label
                  className={`btn btn-xs ${
                    planFrequency === 'MONTHLY'
                      ? 'btn-secondary'
                      : 'btn-outline-secondary'
                  }`}
                  htmlFor='MONTHLY'
                >
                  Monthly
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  name='YEARLY'
                  value='YEARLY'
                  id='YEARLY'
                  autoComplete='off'
                  checked={planFrequency === 'YEARLY'}
                  onChange={(event) => {
                    setPlanFrequency(event.target.value);
                  }}
                />
                <label
                  className={`btn btn-xs ${
                    planFrequency === 'YEARLY'
                      ? 'btn-secondary'
                      : 'btn-outline-secondary'
                  }`}
                  htmlFor='YEARLY'
                >
                  Yearly
                </label>
              </div>
            </div>
            {configurePlan && (
              <>
                <div className='row g-3 justify-content-center align-items-center mb-4'>
                  <div className='col-auto'>
                    <label htmlFor='planConfigure' className='col-form-label'>
                      Number of seats for the{' '}
                      <strong>{frequencyNames[planFrequency]}</strong>{' '}
                      <span className='text-primary'>
                        {planNames[configurePlan]}{' '}
                      </span>
                      plan:
                    </label>
                  </div>
                  <div className='col-auto col-md-1'>
                    <input
                      type='number'
                      id='planConfigure'
                      className='form-control form-control-xs'
                      placeholder='Number of seats'
                      value={seats}
                      onChange={(event) => {
                        const newSeats = parseInt(event.target.value);

                        if (
                          isNaN(newSeats) ||
                          newSeats < 1 ||
                          newSeats < pricing[configurePlan].minSeats
                        ) {
                          setSeats(pricing[configurePlan].minSeats);
                          return;
                        }

                        if (newSeats > pricing[configurePlan].maxSeats) {
                          setSeats(pricing[configurePlan].maxSeats);
                          return;
                        }

                        setSeats(newSeats);
                      }}
                    />
                  </div>
                  <div className='col-auto'>
                    <button
                      className='btn btn-xs btn-primary'
                      type='button'
                      onClick={() => {
                        //checkoutRedirect(configurePlan);
                        openCheckout(configurePlan);
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className='row gx-4 gy-4 justify-content-center'>
              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-6 mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Solo</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' && (
                        <span className='badge text-bg-success-subtle ms-3 fs-sm align-self-center'>
                          {pricing.SOLO.discount}
                        </span>
                      )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6 position-relative'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.SOLO[planFrequency].price}
                      </span>
                      <span className='h4 text-gray-700 align-self-end mb-2'>
                        /{suffixes[planFrequency]}
                      </span>
                    </div>

                    <div className='text-center mb-6'>
                      {subscribeBtn(Plans.SOLO)}
                      <div className='fs-6 text-muted mt-1'>
                        {pricing.SOLO.trialDays} days free trial included
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>open-source features</Link>
                      </p>
                    </div>

                    <hr />

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.SOLO.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated endpoints
                        </Link>{' '}
                        per month
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className=''>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
                          }
                        >
                          Synchronize {pricing.SOLO.syncQuota} API mocks
                        </Link>{' '}
                        accross your devices
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'
                          }
                        >
                          Deploy {pricing.SOLO.deployQuota} API mocks
                        </Link>{' '}
                        in the cloud <br /> Includes{' '}
                        {pricing.SOLO.deployCallsQuota.toLocaleString()} monthly
                        calls
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Email support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Team</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' && (
                        <span className='badge text-bg-success-subtle ms-3 fs-sm align-self-center'>
                          {pricing.TEAM.discount}
                        </span>
                      )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.TEAM[planFrequency].price}
                      </span>
                      <span className='h4 text-gray-700 align-self-end mb-2'>
                        /{suffixes[planFrequency]}/seat
                      </span>
                    </div>
                    <div className='text-center mb-6'>
                      {subscribeBtn(Plans.TEAM)}
                      <div className='fs-6 text-muted mt-1'>
                        {pricing.SOLO.trialDays} days free trial included
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>open-source features</Link>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.TEAM.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated endpoints
                        </Link>{' '}
                        per month per user
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
                          }
                        >
                          Collaborate in real-time
                        </Link>{' '}
                        with your team on {pricing.TEAM.syncQuota} API mocks
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'
                          }
                        >
                          Deploy {pricing.TEAM.deployQuota} API mocks
                        </Link>{' '}
                        in the cloud <br /> Includes{' '}
                        {pricing.TEAM.deployCallsQuota.toLocaleString()} monthly
                        calls
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Email support</p>
                    </div>
                    <div className='mt-auto'>
                      <hr />
                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
                          Organizations up to {pricing.TEAM.maxSeats} seats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Enterprise</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' &&
                        pricing.ENTERPRISE.discount && (
                          <span className='badge text-bg-success-subtle ms-3 fs-sm align-self-center'>
                            {pricing.ENTERPRISE.discount}
                          </span>
                        )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.ENTERPRISE[planFrequency].price}
                      </span>
                      <span className='h4 text-gray-700 align-self-end mb-2'>
                        /{suffixes[planFrequency]}/seat
                      </span>
                    </div>

                    <div className='text-center mb-6'>
                      {subscribeBtn(Plans.ENTERPRISE)}
                      <div className='fs-6 text-muted mt-1'>
                        {pricing.SOLO.trialDays} days free trial included
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>open-source features</Link>
                      </p>
                    </div>

                    <hr />

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.ENTERPRISE.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated endpoints
                        </Link>{' '}
                        per month per user
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
                          }
                        >
                          Collaborate in real-time
                        </Link>{' '}
                        with your team on {pricing.ENTERPRISE.syncQuota} API
                        mocks
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        <Link
                          href={
                            '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'
                          }
                        >
                          Deploy {pricing.ENTERPRISE.deployQuota} API mocks
                        </Link>{' '}
                        in the cloud <br /> Includes{' '}
                        {pricing.ENTERPRISE.deployCallsQuota.toLocaleString()}{' '}
                        monthly calls
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Enterprise support<sup>1</sup>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Unlimited seats</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Custom Enterprise</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' &&
                        pricing.ENTERPRISE.discount && (
                          <span className='badge text-bg-success-subtle ms-3 fs-sm align-self-center'>
                            {pricing.ENTERPRISE.discount}
                          </span>
                        )}
                    </h3>
                    <div className='text-center mt-4 mb-6'>
                      <button
                        type='button'
                        className={`btn btn-primary-subtle btn-sm ms-1`}
                        onClick={() => {
                          router.push('/contact-form/');
                        }}
                      >
                        Contact us
                      </button>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        All of <span className='text-primary'>Enterprise</span>{' '}
                        plan features
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Dedicated instances</p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Personalized quotas and limits</p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Onboarding and deployment assistance
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Custom payment options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='fs-sm text-gray-700 text-center mt-1'>
              Prices are in USD and exclude VAT where applicable. By proceeding
              to payment you agree to our{' '}
              <Link href={'/privacy/'}>privacy policy</Link> and{' '}
              <Link href={'/terms/'}>terms of service</Link>.<br /> The free
              trial is available once per user and requires a valid payment
              method.
              <br />
              <sup>1</sup> To learn more about our Enterprise support, see the{' '}
              <Link href={'/pro/#faq'}>FAQ of our Pro plans</Link> or our{' '}
              <Link href={'/terms/'}>terms of service</Link>.
            </p>

            <section className='py-6 py-md-8'>
              <div className='container' id='faq'>
                <div className='row justify-content-center'>
                  <div className='col-12 align-items-center'>
                    <h2 className='fw-bold mb-6 text-center'>Compare plans</h2>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th className='bg-gray-100'></th>
                            <th className='text-center bg-gray-100'>
                              <span className='text-primary'>Solo</span> plan
                            </th>
                            <th className='text-center bg-gray-100'>
                              <span className='text-primary'>Team</span> plan
                            </th>
                            <th className='text-center bg-gray-100'>
                              <span className='text-primary'>Enterprise</span>{' '}
                              plan
                            </th>
                            <th className='text-center bg-gray-100'>
                              <span className='text-primary'>
                                Custom Enterprise
                              </span>{' '}
                              plan
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              AI assistants
                            </td>
                          </tr>
                          <tr>
                            <td>Number of generated templates</td>
                            <td className='text-center'>
                              {pricing.SOLO.templatesQuota}/month
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.templatesQuota}/month/user
                            </td>
                            <td className='text-center'>
                              {pricing.ENTERPRISE.templatesQuota}/month/user
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Cloud synchronization
                            </td>
                          </tr>
                          <tr>
                            <td>Number of synchronized API mocks</td>
                            <td className='text-center'>
                              {pricing.SOLO.syncQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.syncQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.ENTERPRISE.syncQuota}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Data synchronization accross your devices</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Real-time collaboration</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Instance</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Dedicated</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Cloud deployment
                            </td>
                          </tr>
                          <tr>
                            <td>Number of deployed API mocks</td>
                            <td className='text-center'>
                              {pricing.SOLO.deployQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.ENTERPRISE.deployQuota}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Number of monthly calls</td>
                            <td className='text-center'>
                              {pricing.SOLO.deployCallsQuota.toLocaleString()}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployCallsQuota.toLocaleString()}
                            </td>
                            <td className='text-center'>
                              {pricing.ENTERPRISE.deployCallsQuota.toLocaleString()}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Request rate limit</td>
                            <td className='text-center'>
                              {pricing.SOLO.deployReqSQuota}/sec
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployReqSQuota}/sec
                            </td>
                            <td className='text-center'>
                              {pricing.ENTERPRISE.deployReqSQuota}/sec
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Private or public mocks</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Instance</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Dedicated</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Support
                            </td>
                          </tr>
                          <tr>
                            <td>Support level</td>
                            <td className='text-center'>Email</td>
                            <td className='text-center'>Email</td>
                            <td className='text-center'>Enterprise</td>
                            <td className='text-center'>Enterprise</td>
                          </tr>
                          <tr>
                            <td>Onboarding and deployment assistance</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Payment
                            </td>
                          </tr>
                          <tr>
                            <td>Payment options</td>
                            <td className='text-center'>Credit card</td>
                            <td className='text-center'>Credit card</td>
                            <td className='text-center'>Credit card</td>
                            <td className='text-center'>
                              Custom payment options
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {showTagline && (
              <div className='py-8'>
                <p className='quotation p-5 lead text-gray-700 text-center mb-0'>
                  Your subscription goes directly towards the development and
                  maintenance of Mockoon and allows us to keep our tools
                  independent and open-source.
                </p>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='avatar avatar-xl'>
                    <img
                      className='avatar-img img-thumbnail rounded-circle mr-4'
                      src='/images/about/guillaume.jpg'
                      alt='Founder @ Mockoon'
                      width={128}
                      height={128}
                    />
                  </div>
                  <div className='ps-5'>
                    <p className='fs-sm fw-bold mb-0'>Guillaume</p>
                    <p className='fs-sm text-gray-700 mb-0'>
                      Founder @ Mockoon
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </QueryClientProvider>
    </>
  );
};

export default PlansView;
