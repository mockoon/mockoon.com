import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { frequencyNames, planNames } from '../constants/plans';
import { useAuth } from '../utils/auth';
import { useCountdown } from '../utils/countdown';
import { useCurrentUser } from '../utils/queries';
import PaddleScript from './paddle';

const queryClient = new QueryClient();

const pricing = {
  SOLO: {
    MONTHLY: {
      price: 15,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 150,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_YEARLY_PRICE_ID
    },
    templatesQuota: 100,
    syncQuota: 5,
    discount: '🏷️ 2 months free'
  },
  TEAM: {
    MONTHLY: {
      price: 25,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 250,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_TEAM_YEARLY_PRICE_ID
    },
    templatesQuota: 200,
    syncQuota: 10,
    discount: '🏷️ 2 months free',
    minSeats: 1,
    maxSeats: 5
  },
  ENTERPRISE: {
    MONTHLY: {
      price: 50,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_MONTHLY_PRICE_ID
    },
    YEARLY: {
      price: 600,
      priceId: process.env.NEXT_PUBLIC_PADDLE_PLAN_ENTERPRISE_YEARLY_PRICE_ID
    },
    templatesQuota: 500,
    syncQuota: 20,
    discount: null,
    minSeats: 3,
    maxSeats: 99
  }
};

const discounts = {
  SOLO: {
    MONTHLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_MONTHLY_DISCOUNT,
    YEARLY: process.env.NEXT_PUBLIC_PADDLE_PLAN_SOLO_YEARLY_DISCOUNT
  }
};

const suffixes = {
  MONTHLY: 'mo',
  YEARLY: 'yr'
};

const Plans: FunctionComponent<{ showFree: boolean; showTagline: boolean }> =
  function ({ showFree, showTagline }) {
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

    return (
      <>
        <PaddleScript />
        <QueryClientProvider client={queryClient}>
          <section className='mb-8'>
            <div className='container'>
              {discountEnabled && (
                <div className='text-center my-6 col-md-8 mx-auto'>
                  <div className='alert alert-light border-success border-2 shadow'>
                    🤖 <strong>Cyber Monday!</strong> Get 50% off a new Solo
                    plan subscription! <br /> (50% off the first year or first 6
                    months, discount applied at checkout)
                    <br />
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
                {showFree && (
                  <div className='col-12 col-md-6 col-xl-3'>
                    <div className='card shadow-lg mb-6 mb-md-0 h-100'>
                      <div className='card-body h-100 d-flex flex-column'>
                        <h3 className='d-flex justify-content-center mb-3 fw-medium'>
                          <span className='text-primary'>Free</span>
                          <span className='ms-1'>plan</span>
                        </h3>

                        <div className='d-flex justify-content-center mb-6'>
                          <span className='h2 mb-0 mt-2'>$</span>
                          <span
                            className='price display-2 mb-0'
                            data-annual='0'
                            data-monthly='0'
                          >
                            0
                          </span>
                          <span className='h4 text-gray-700 align-self-end mb-2'>
                            /{suffixes[planFrequency]}
                          </span>
                        </div>

                        <div className='text-center mb-6'>
                          <Link
                            href={'/download/'}
                            className='btn btn-primary-subtle'
                          >
                            Download now
                          </Link>
                        </div>
                        <div className='d-flex'>
                          <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                            <i className='icon-check'></i>
                          </div>

                          <p>
                            All of Mockoon's{' '}
                            <Link href={'/features/'}>features</Link>
                          </p>
                        </div>
                        <hr />

                        <div className='d-flex'>
                          <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                            <i className='icon-check'></i>
                          </div>

                          <p className='mb-0'>Community support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
                        <button
                          type='button'
                          className='btn btn-primary'
                          onClick={() => {
                            redirect('SOLO');
                          }}
                        >
                          Subscribe
                        </button>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
                          All of Mockoon's{' '}
                          <Link href={'/features/'}>features</Link>
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
                            AI-generated templates
                          </Link>{' '}
                          per month
                        </p>
                      </div>
                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
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
                            Support our work on the open-source tools
                          </p>
                        </div>
                        <hr />
                        <div className='py-4'>
                          <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                            <span className='h6 text-uppercase'>
                              <i className='icon-hourglass_empty'></i> Coming
                              soon
                            </span>
                          </span>
                        </div>
                        <div className='d-flex'>
                          <p className='mb-0'>
                            ☁️ Deploy your API mocks in the cloud (Q2 2024)
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
                        <button
                          type='button'
                          className='btn btn-primary'
                          onClick={() => {
                            redirect('TEAM');
                          }}
                        >
                          Subscribe
                        </button>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
                          All of Mockoon's{' '}
                          <Link href={'/features/'}>features</Link>
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
                            AI-generated templates
                          </Link>{' '}
                          per month per seat
                        </p>
                      </div>
                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
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

                        <hr />
                        <div className='d-flex'>
                          <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                            <i className='icon-check'></i>
                          </div>

                          <p className='mb-0'>
                            Support our work on the open-source tools
                          </p>
                        </div>
                        <hr />
                        <div className='py-4'>
                          <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                            <span className='h6 text-uppercase'>
                              <i className='icon-hourglass_empty'></i> Coming
                              soon
                            </span>
                          </span>
                        </div>
                        <div className='d-flex'>
                          <p className='mb-0'>
                            ☁️ Deploy your API mocks in the cloud (Q2 2024)
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
                        <button
                          type='button'
                          className='btn btn-primary'
                          onClick={() => {
                            redirect('ENTERPRISE');
                          }}
                        >
                          Subscribe
                        </button>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
                          All of Mockoon's{' '}
                          <Link href={'/features/'}>features</Link>
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
                            AI-generated templates
                          </Link>{' '}
                          per month per seat
                        </p>
                      </div>
                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>
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

                        <p className='mb-0'>
                          1 hour live training for your team (
                          <Link href={'/training/'}>Purchase separately</Link>)
                        </p>
                      </div>
                      <hr />
                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p className='mb-0'>Unlimited seats (minimum 3)</p>
                      </div>

                      <div className='mt-auto'>
                        <hr />
                        <div className='d-flex'>
                          <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                            <i className='icon-check'></i>
                          </div>

                          <p className='mb-0'>
                            Support our work on the open-source tools
                          </p>
                        </div>
                        <hr />
                        <div className='py-4'>
                          <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                            <span className='h6 text-uppercase'>
                              <i className='icon-hourglass_empty'></i> Coming
                              soon
                            </span>
                          </span>
                        </div>
                        <div className='d-flex'>
                          <p className='mb-0'>
                            ☁️ Deploy your API mocks in the cloud (Q2 2024)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className='fs-sm text-gray-700 text-center mt-1'>
                Prices are in USD and exclude VAT where applicable. By
                proceeding to payment you agree to our{' '}
                <Link href={'/privacy/'}>privacy policy</Link> and{' '}
                <Link href={'/terms/'}>terms of service</Link>.<br />
                <sup>1</sup> To learn more about our Enterprise support, see the{' '}
                <Link href={'/pro/#faq'}>FAQ of our Pro plans</Link> or our{' '}
                <Link href={'/terms/'}>terms of service</Link>.
              </p>
              <div className='text-center'>
                <h4 className='fw-bold mt-6 mb-4'>Special requests?</h4>

                <div className='btn-group'>
                  <Link
                    href={'/contact-form/'}
                    className='btn btn-outline-secondary btn-sm'
                  >
                    Contact sales
                  </Link>
                  <a
                    href={'https://calendar.app.google/fYmLeMTo2N7T5x8R9'}
                    target='_blank'
                    className='btn btn-outline-secondary btn-sm'
                  >
                    Request a demo
                  </a>
                </div>
              </div>

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

export default Plans;
