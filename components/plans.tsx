import { Plans } from '@mockoon/cloud';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { frequencyNames, planNames } from '../constants/plans';
import { pricing } from '../data/pricing';
import { AccordionData } from '../models/common.model';
import { useAuth } from '../utils/auth';
import { useCurrentUser } from '../utils/queries';
import Accordion from './accordion';
import PaddleScript from './paddle';
import CustomTooltip from './tooltip';

const queryClient = new QueryClient();

const cloudFaq: AccordionData = [
  {
    title: 'Features',
    items: [
      {
        title: 'What is an "API mock"?',
        content:
          'An API mock is a collection of endpoints created in the <a href="/download/">desktop</a> or <a href="/cloud/docs/web-application/">web</a> applications to simulate a real API. Each mock can include an unlimited number of endpoints, rules, stateful routes, and more. For more information, please refer to the <a href="/docs/latest/about/">documentation</a>.'
      },
      {
        title: 'Which features are supported in the cloud?',
        content:
          'Nearly all features available in the desktop application are supported in the cloud, namely in cloud deployments. Some features are not available due to technical limitations or security reasons. For more information, please refer to the <a href="/cloud/docs/about/">cloud documentation</a>.'
      },
      {
        title: 'Do you offer a web application?',
        content: `Yes, we offer a web application that allows you to manage your API mocks in the cloud. You can access it <a href="${process.env.NEXT_PUBLIC_WEBAPP_URL}">here</a>. Please note that the web application is only available for paid plans.`
      },
      {
        title:
          'What is the difference between "Email support" and "Enterprise support"?',
        content:
          "Email support is a standard support service provided to all our paid customers. You can contact us at any time by email and we will help you with your questions without a guaranteed response time. The usual response time is of one business day. Enterprise support is a premium support service provided to Enterprise plan users with a guaranteed response time. Specific SLA can be negotiated. For more information, please refer to the <a href='/terms/'>terms of service</a>."
      },
      {
        title:
          'We are using the open-source version, but we are interested in getting priority support. Can I purchase it separately?',
        content:
          'Yes, we offer <a href="/custom-services/">custom services</a> that can include priority support. Do not hesitate to <a href="/contact-form/">contact us</a> to discuss your needs.'
      }
    ]
  },
  {
    title: 'Billing',
    items: [
      {
        title: 'Do you offer a free trial?',
        content: `We offer a ${pricing.SOLO.trialDays}-day free trial for all plans. You can cancel your subscription at any time during the trial period and you will not be charged. Please note that the free trial is available once per user and requires a valid payment method.`
      },
      {
        title:
          'Our team/company is interested in the Team or Enterprise plan. Can we try it first withour providing a payment method?',
        content:
          'We can provide you with a trial without a payment method. Do not hesitate to <a href="/contact-form/">contact us</a> to discuss your needs.'
      },
      {
        title: 'How does per-seat billing work?',
        content:
          'For Team and Enterprise plans, you can choose the number of seats you need. Each seat is billed monthly. You can <a href="/contact-form/">contact us</a> to add or remove seats at any time.'
      },
      {
        title: 'I received emails from Paddle.com, what is it?',
        content:
          'Paddle.com is our payment provider. You will receive emails from them when you purchase a plan, when your subscription is renewed or when you cancel your subscription.'
      },
      {
        title: 'What payment methods do you accept?',
        content:
          'We accept credit cards (Visa, Mastercard, etc.) through our payment provider Paddle. You can also pay by bank transfer for the Enterprise plan. <a href="/contact-form/">Contact us</a> before purchasing for more information.'
      },
      {
        title: 'I have specific billing requirements, can you help me?',
        content:
          'We can provide you with tailored billing solutions. Do not hesitate to <a href="/contact-form/">contact us</a> to discuss your needs.'
      },
      {
        title: 'Do you offer discounts for schools, bootcamps or students?',
        content:
          'We provide educational institutions with substantial discounts. Do not hesitate to <a href="/contact-form/">contact us</a> to become a partner.'
      },
      {
        title: 'Do you offer discounts for open-source projects?',
        content:
          'We provide free licenses for eligible open-source projects. Do not hesitate to <a href="/mockoon-cloud-open-source/">contact us</a> to discuss your needs.'
      },
      {
        title: 'How can I cancel my subscription?',
        content:
          'You can manage your subscription using the links in the emails you received from Paddle.com or in your <a href="/account/subscription/">account management page</a>. You can also <a href="/contact-form/">contact us</a> and we will help you cancel your subscription.'
      },
      {
        title: 'Can I get a refund?',
        content:
          'We may offer a refund on a case-by-case basis if you have not used the service yet (usage quotas, etc.). Please refer to the <a href="/terms/">terms of service</a> for more information. In any case, do not hesitate to <a href="/contact-form/">contact us</a>. We will be happy to help you.'
      },
      {
        title: 'VAT',
        content:
          'Prices are in USD and exclude VAT. VAT may or may not be charged during checkout depending on various criteria like your location and quality (individual or business).'
      }
    ]
  },
  {
    title: 'Misc',
    items: [
      {
        title: 'Do you offer custom services?',
        content:
          'Our custom services can vary. Here is a brief overview of what type of service we provided in the past:<ul><li>Feature prioritization on the roadmap.</li><li>Advanced support during Mockoon tools deployment or configuration.</li><li>Help with your API mock creation.</li><li>Online training with live video conference.</li></ul><a href="/custom-services/">Learn more</a> about our custom services.'
      },
      {
        title: 'Contracting company',
        content:
          'Our enterprise services are provided by <a href="https://1kb.software" rel="noopener"><strong>1kB SARL-S</strong></a>, a company incorporated in Luxembourg under the no. B257186.<br/>VAT number: LU33209738'
      }
    ]
  }
];

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
  const discountCode = router.query.discountCode;

  const openCheckout = (planId: string) => {
    // @ts-ignore
    Paddle.Checkout.open({
      settings: {
        variant: 'one-page',
        theme: 'light',
        locale: 'en'
      },
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
      },
      discountCode
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
    <>
      <div>
        <button
          type='button'
          className='btn btn-primary btn-sm '
          onClick={() => {
            redirect(plan);
          }}
        >
          Try for free
        </button>
      </div>

      <div className='mt-2 badge text-bg-success-subtle'>
        {pricing[plan].trialDays} days free trial included
      </div>
    </>
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
              <div className='col-12 col-xl-3'>
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
                    <div className='d-flex justify-content-center position-relative'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.SOLO[planFrequency].price}
                      </span>
                      <span className='h4 text-gray-700 align-self-end'>
                        /{suffixes[planFrequency]}
                      </span>
                    </div>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h6 text-gray-700 align-self-end'>
                        (Tax excl.)
                      </span>
                    </div>

                    {/* show only if not connected or not already subscribed */}
                    {(!currentUser.data ||
                      currentUser.data?.plan === 'FREE') && (
                      <div className='text-center mb-6'>
                        {subscribeBtn(Plans.SOLO)}
                      </div>
                    )}

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
                        Access to the{' '}
                        <Link href={'/cloud/docs/web-application/'}>
                          Web UI
                        </Link>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.SOLO.syncQuota} API mock<sup>1</sup>{' '}
                        <Link href={'/cloud/docs/api-mock-cloud-deployments/'}>
                          deployed
                        </Link>{' '}
                        in the cloud and{' '}
                        <Link
                          href={
                            '/cloud/docs/data-synchronization-team-collaboration/'
                          }
                        >
                          synchronized
                        </Link>{' '}
                        across your devices
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.SOLO.deployCallsQuota.toLocaleString()} monthly
                        calls included
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        {pricing.SOLO.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated endpoints
                        </Link>{' '}
                        per month
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

              <div className='col-12 col-xl-3'>
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
                    <div className='d-flex justify-content-center'>
                      <span className='h2 mb-0 mt-2'>$</span>
                      <span className='price display-2 mb-0'>
                        {pricing.TEAM[planFrequency].price}
                      </span>
                      <span className='h4 text-gray-700 align-self-end'>
                        /{suffixes[planFrequency]}/seat
                      </span>
                    </div>
                    <div className='d-flex justify-content-center mb-6'>
                      <span className='h6 text-gray-700 align-self-end'>
                        (Tax excl.)
                      </span>
                    </div>

                    {/* show only if not connected or not already subscribed */}
                    {(!currentUser.data ||
                      currentUser.data?.plan === 'FREE') && (
                      <div className='text-center mb-6'>
                        {subscribeBtn(Plans.TEAM)}
                      </div>
                    )}

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
                        Access to the{' '}
                        <Link href={'/cloud/docs/web-application/'}>
                          Web UI
                        </Link>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.TEAM.deployQuota} API mocks{' '}
                        <Link href={'/cloud/docs/api-mock-cloud-deployments/'}>
                          deployed
                        </Link>{' '}
                        in the cloud with{' '}
                        <Link
                          href={
                            '/cloud/docs/data-synchronization-team-collaboration/'
                          }
                        >
                          real-time collaboration
                        </Link>
                        <sup>1</sup>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        {pricing.TEAM.deployCallsQuota.toLocaleString()} monthly
                        calls included
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        {pricing.TEAM.templatesQuota}{' '}
                        <Link href={'/ai-powered-api-mocking/'}>
                          AI-generated endpoints
                        </Link>{' '}
                        per month per user
                      </p>
                    </div>

                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        <Link href={'/cloud/docs/roles-permissions/'}>
                          Team level role-based access control
                        </Link>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>Priority email support</p>
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

              <div className='col-12 col-xl-3'>
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
                    <div className='text-center mt-4 mb-6'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className={`btn btn-primary-subtle btn-sm`}
                          onClick={() => {
                            router.push('/contact-form/');
                          }}
                        >
                          Contact us
                        </button>
                        <button
                          type='button'
                          className={`btn btn-primary-subtle btn-sm`}
                          onClick={() => {
                            router.push('/request-demo/');
                          }}
                        >
                          Request a demo
                        </button>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        All of <span className='text-primary'>Team</span> plan
                        features
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Custom quotas and limits</p>
                    </div>
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

                      <p className='mb-0'>
                        Enterprise support{' '}
                        <CustomTooltip text='Get dedicated assistance for enterprise-level needs. To learn more about our Enterprise support, see the FAQ of our Cloud plans or our terms of service.'></CustomTooltip>
                      </p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p className='mb-0'>
                        Customer success{' '}
                        <CustomTooltip text='Get dedicated assistance during onboarding and setup'></CustomTooltip>
                      </p>
                    </div>

                    <hr />
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Custom payment options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='fs-sm text-gray-700 text-center mt-1'>
              Prices are in USD and exclude taxes (e.g. VAT, sales tax, etc.)
              where applicable. By proceeding to payment you agree to our{' '}
              <Link href={'/privacy/'}>privacy policy</Link> and{' '}
              <Link href={'/terms/'}>terms of service</Link>.<br /> The free
              trial is available once per user, has a lower request rate limit
              (see below) and requires a valid payment method.
              <br />
              <sup>1</sup> See the{' '}
              <Link href={'/pricing/#faq'}>FAQ of our Cloud plans</Link> for
              more information about API mocks.
            </p>

            <section className='py-6 py-md-8'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-12 align-items-center'>
                    <h2 className='fw-bold mb-6 text-center'>Compare plans</h2>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th></th>
                            <th className='text-center'>
                              <span className='text-primary'>Solo</span> plan
                            </th>
                            <th className='text-center'>
                              <span className='text-primary'>Team</span> plan
                            </th>
                            <th className='text-center'>
                              <span className='text-primary'>Enterprise</span>{' '}
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
                              Applications
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Access to the{' '}
                              <Link href={'/cloud/docs/web-application/'}>
                                Web app
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Cloud deployments
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Number of deployed API mocks{' '}
                              <CustomTooltip text='Each API mock is a collection of endpoints and rules deployed on a separated subdomain: https://mock-abcd.mockoon.app. See the FAQ below for a definition of an API mock.'></CustomTooltip>
                            </td>
                            <td className='text-center'>
                              {pricing.SOLO.deployQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployQuota}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>
                              Number of monthly calls{' '}
                              <CustomTooltip text='Number of monthly API requests accross your deployed API mocks for your team.'></CustomTooltip>
                            </td>
                            <td className='text-center'>
                              {pricing.SOLO.deployCallsQuota.toLocaleString()}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployCallsQuota.toLocaleString()}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Request rate limit</td>
                            <td className='text-center'>
                              {pricing.SOLO.deployReqSQuota} req/sec
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.deployReqSQuota} req/sec
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Private or public mocks</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Hosting</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Dedicated</td>
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
                            <td>
                              Number of synchronized API mocks{' '}
                              <CustomTooltip text='Each API mock is a collection of endpoints and rules synchronized accross your devices and team members in real-time. See the FAQ below for a definition of an API mock.'></CustomTooltip>
                            </td>
                            <td className='text-center'>
                              {pricing.SOLO.syncQuota}
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.syncQuota}
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Data synchronization accross your devices</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Real-time collaboration</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Hosting</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Shared</td>
                            <td className='text-center'>Dedicated</td>
                          </tr>
                          <tr>
                            <td>API mock max size</td>
                            <td className='text-center'>5MB</td>
                            <td className='text-center'>10MB</td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              AI assistants
                            </td>
                          </tr>
                          <tr>
                            <td>Generate JSON templates</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Generate HTTP endpoints</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Number of credits</td>
                            <td className='text-center'>
                              {pricing.SOLO.templatesQuota}/month
                            </td>
                            <td className='text-center'>
                              {pricing.TEAM.templatesQuota}/month/user
                            </td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Roles & Permissions
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Team-level roles{' '}
                              <Link
                                href='/cloud/docs/roles-permissions/'
                                className='fw-normal ms-2'
                              >
                                <small>Learn more</small>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Owner{' '}
                              <CustomTooltip text='The owner has full access to all resources and can manage team settings'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              Users{' '}
                              <CustomTooltip text='Users can access and manage the resources but cannot modify team settings'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              Team admin{' '}
                              <CustomTooltip text='Team admins can manage team settings and billing information'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              Billing{' '}
                              <CustomTooltip text='Billing users can manage billing information'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
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
                            <td className='text-center'>Email support</td>
                            <td className='text-center'>
                              Priority email support
                            </td>
                            <td className='text-center'>Enterprise support</td>
                          </tr>
                          <tr>
                            <td>Customer success manager</td>
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
                            <td className='text-center'>Credit card only</td>
                            <td className='text-center'>Credit card only</td>
                            <td className='text-center'>PO and invoicing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {showTagline && (
              <>
                <div className='text-center'>
                  <Link href='/cloud/' className='btn btn-primary-subtle'>
                    Discover Mockoon Cloud
                  </Link>
                </div>
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
              </>
            )}
          </div>
        </section>

        <section
          className='py-6 py-md-8 border-top bg-gradient-light-white'
          id='faq'
        >
          <div className='container' id='faq'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-8 align-items-center'>
                <h2 className='fw-bold mb-6 text-center'>Cloud plans FAQ</h2>
                <Accordion data={cloudFaq} />
              </div>
            </div>
          </div>
        </section>
      </QueryClientProvider>
    </>
  );
};

export default PlansView;
