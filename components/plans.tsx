import {
  QueryClient,
  QueryClientProvider,
  useMutation
} from '@tanstack/react-query';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { planNames } from '../constants/plans';
import { useAuth } from '../utils/auth';

const queryClient = new QueryClient();

const pricing = {
  SOLO: {
    MONTHLY: {
      price: 10
    },
    YEARLY: {
      price: 100
    },
    templatesQuota: 100,
    discount: '🏷️ 2 months free'
  },
  TEAM: {
    MONTHLY: {
      price: 25
    },
    YEARLY: {
      price: 250
    },
    templatesQuota: 200,
    discount: '🏷️ 2 months free',
    maxSeats: 20
  },
  ENTERPRISE: {
    MONTHLY: {
      price: 50
    },
    YEARLY: {
      price: 600
    },
    templatesQuota: 500,
    discount: null,
    maxSeats: 99
  }
};

const suffixes = {
  MONTHLY: 'mo',
  YEARLY: 'yr'
};

const frequencyLabels = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
};

const Plans: FunctionComponent<{ showFree: boolean; showTagline: boolean }> =
  function ({ showFree, showTagline }) {
    const auth = useAuth();
    const [planFrequency, setPlanFrequency] = useState('MONTHLY');
    const [seats, setSeats] = useState(1);
    const [configurePlan, setConfigurePlan] = useState(null);

    const { mutate: checkoutRedirect } = useMutation(
      async (planId: string) => {
        return fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/${planId}/${planFrequency}?seats=${seats}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${await auth.getIdToken()}`
            }
          }
        ).then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error();
        });
      },
      {
        onSuccess: (data) => {
          window.location.assign(data.url);
        }
      }
    );

    const redirect = (planId: string) => {
      if (!auth.isAuth) {
        localStorage.setItem('redirect', '/account/subscribe/');
        window.location.href = `/signup/`;
        return;
      }

      if (planId === 'TEAM' || planId === 'ENTERPRISE') {
        setConfigurePlan(planId);
        setSeats(1);
        return;
      }

      checkoutRedirect(planId);
    };

    return (
      <QueryClientProvider client={queryClient}>
        <section className='mb-8'>
          <div className='container'>
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
                      Configure your{' '}
                      <strong>{frequencyLabels[planFrequency]}</strong>{' '}
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

                        if (isNaN(newSeats) || newSeats < 1) {
                          setSeats(1);
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
                        checkoutRedirect(configurePlan);
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
                      <h3 className='d-flex justify-content-center mb-3'>
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
                        <span className='h4 text-muted align-self-end mb-2'>
                          /{suffixes[planFrequency]}
                        </span>
                      </div>

                      <div className='text-center mb-6'>
                        <Link
                          href={'/download/'}
                          className='btn btn-primary-soft'
                        >
                          Download now
                        </Link>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p>
                          All of Mockoon's{' '}
                          <Link href={'/features/'}>features</Link>
                        </p>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p>
                          10 free <Link href={'/templates/'}>templates</Link>
                        </p>
                      </div>

                      <div className='d-flex'>
                        <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                          <i className='icon-check'></i>
                        </div>

                        <p>Community support</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-6 mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3'>
                      <span className='text-primary'>Solo</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' && (
                        <span className='badge bg-success-soft ms-3 fs-sm align-self-center'>
                          {pricing.SOLO.discount}
                        </span>
                      )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6 position-relative'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.SOLO[planFrequency].price}
                      </span>
                      <span className='h4 text-muted align-self-end mb-2'>
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
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>features</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Support our work on the open-source tools
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        📃 Access to dozens of pro{' '}
                        <Link href={'/templates/'}>templates</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        🪄 {pricing.SOLO.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated templates
                        </Link>{' '}
                        per month
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Community support</p>
                    </div>
                    <div className='py-4 mt-auto'>
                      <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                        <span className='h6 text-uppercase'>Coming soon</span>
                      </span>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-gray-300 text-gray-800 mt-1 me-4'>
                        <i className='icon-hourglass_empty'></i>
                      </div>

                      <p className='mb-0'>
                        Sync your API mocks accross your devices
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3'>
                      <span className='text-primary'>Team</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' && (
                        <span className='badge bg-success-soft ms-3 fs-sm align-self-center'>
                          {pricing.TEAM.discount}
                        </span>
                      )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.TEAM[planFrequency].price}
                      </span>
                      <span className='h4 text-muted align-self-end mb-2'>
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
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>features</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Support our work on the open-source tools
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        📃 Access to dozens of pro{' '}
                        <Link href={'/templates/'}>templates</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        🪄 {pricing.TEAM.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated templates
                        </Link>{' '}
                        per month
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Priority support<sup>1</sup>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Organizations up to 20 seats</p>
                    </div>
                    <div className='py-4 mt-auto'>
                      <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                        <span className='h6 text-uppercase'>Coming soon</span>
                      </span>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-gray-300 text-gray-800 mt-1 me-4'>
                        <i className='icon-hourglass_empty'></i>
                      </div>

                      <p className='mb-0'>
                        Sync your API mocks accross your team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-6 col-xl-3'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h3 className='d-flex justify-content-center mb-3'>
                      <span className='text-primary'>Enterprise</span>
                      <span className='ms-1'>plan</span>
                      {planFrequency === 'YEARLY' &&
                        pricing.ENTERPRISE.discount && (
                          <span className='badge bg-success-soft ms-3 fs-sm align-self-center'>
                            {pricing.ENTERPRISE.discount}
                          </span>
                        )}
                    </h3>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.ENTERPRISE[planFrequency].price}
                      </span>
                      <span className='h4 text-muted align-self-end mb-2'>
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
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        All of Mockoon's{' '}
                        <Link href={'/features/'}>features</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Support our work on the open-source tools
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        📃 Access to dozens of pro{' '}
                        <Link href={'/templates/'}>templates</Link>
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        🪄 {pricing.ENTERPRISE.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated templates
                        </Link>{' '}
                        per month
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Priority support<sup>1</sup>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        1 hour welcome online training video call for your team
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Custom payment options</p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Unlimited seats</p>
                    </div>

                    <div className='py-4 mt-auto'>
                      <span className='badge rounded-pill bg-gray-300 text-gray-800'>
                        <span className='h6 text-uppercase'>Coming soon</span>
                      </span>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle bg-gray-300 text-gray-800 mt-1 me-4'>
                        <i className='icon-hourglass_empty'></i>
                      </div>

                      <p className='mb-0'>
                        Sync your API mocks accross your team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='fs-sm text-muted text-center mt-1'>
              Prices are in USD and exclude VAT where applicable. By proceeding
              to payment you agree to our{' '}
              <Link href={'/privacy/'}>privacy policy</Link> and{' '}
              <Link href={'/terms/'}>terms of service</Link>.<br />
              <sup>1</sup> Priority support is subject to SLAs, see our{' '}
              <Link href={'/terms/'}>terms of service</Link> for more
              information.
            </p>
            <div className='text-center'>
              <h4 className='fw-bold mt-6 mb-4'>Specific needs?</h4>
              <div className='btn-group'>
                <Link
                  href={'/contact-form/'}
                  className='btn btn-outline-secondary btn-sm'
                >
                  Contact sales
                </Link>
                <Link
                  href={'https://cal.com/mockoon/demo'}
                  target='_blank'
                  className='btn btn-outline-secondary btn-sm'
                >
                  Book a demo
                </Link>
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
                  <img
                    className='img-thumbnail avatar-xl avatar-img rounded-circle mr-4'
                    src='/images/about/guillaume.jpg'
                    alt='Founder @ Mockoon'
                    width={128}
                    height={128}
                  />
                  <div className='ps-5'>
                    <p className='fs-sm fw-bold mb-0'>Guillaume</p>
                    <p className='fs-sm text-muted mb-0'>Founder @ Mockoon</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </QueryClientProvider>
    );
  };

export default Plans;
