import { Frequency, Plans } from '@mockoon/cloud';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AccordionData } from '../models/common.model';
import { useAuth } from '../utils/auth';
import {
  useCurrentUser,
  useTrialOnboarding,
  useTrialOnboardingEligibility
} from '../utils/queries';
import Accordion from './accordion';
import PaddleScript from './paddle';
import CustomTooltip from './tooltip';

const queryClient = new QueryClient();

const proFaq: AccordionData = [
  {
    title: 'Features',
    items: [
      {
        title: 'What is an "API mock"?',
        content:
          'An API mock is a collection of endpoints created in the <a href="/download/">desktop application</a> or Mockoon Pro <a href="/pro/docs/clients/embedded-web-application/">embedded web application</a> to simulate a real API. Each mock can include an unlimited number of endpoints, rules, stateful routes, and more. For more information, please refer to the <a href="/docs/latest/about/">documentation</a>.'
      },
      {
        title: 'Can I self-host Mockoon Pro?',
        content:
          'Yes. Mockoon Pro is self-hosted by default, giving you control over your infrastructure and data. Follow our <a href="/pro/docs/self-hosting/installation/">installation guide</a> to get started.'
      },
      {
        title: 'Do you offer a managed cloud service?',
        content:
          'Yes. Managed cloud is available only as an Enterprise option, including hosting, operations, and managed API mock deployments. <a href="/contact-form/">Contact us</a> to discuss your requirements.'
      },
      {
        title: 'What is the difference between Team and Enterprise support?',
        content:
          "Team plan customers benefit from next business day support. Enterprise customers receive dedicated support with a guaranteed initial response within four open business hours. For more information, please refer to the <a href='/terms/'>terms of service</a>."
      },
      {
        title: 'Do you offer an availability SLA?',
        content:
          "The self-hosted Team plan runs on infrastructure you operate, so its availability is under your control. Enterprise managed cloud includes a contractual SLA defined in your agreement. See our <a href='/terms/'>terms of service</a> and <a href='/trust/'>Trust Center</a> for details."
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
        content:
          'Yes. Eligible companies can request one 14-day self-hosted Mockoon Pro trial with five license slots using a verified work email. No account or payment method is required, and the trial does not renew automatically. <a href="/pro/checkout/?mode=trial">Start your free trial</a>.'
      },
      {
        title: 'Can I evaluate the Enterprise plan?',
        content:
          'The self-service trial covers the self-hosted Pro experience. <a href="/contact-form/">Contact us</a> to discuss an Enterprise evaluation, managed cloud, or specific deployment requirements.'
      },
      {
        title: 'How are Mockoon Pro licenses allocated?',
        content:
          'Each license is a slot that you can assign to either one user seat or one concurrently running mock instance. For example, 10 licenses can be split between 6 users and 4 deployed mock instances, and you can adjust this allocation as your needs change.'
      },
      {
        title: 'What payment methods do you accept?',
        content:
          'Team licenses can be purchased by credit card through our payment provider, Paddle. Enterprise customers can also pay by purchase order and invoice.'
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
          'For a Mockoon Pro subscription, use the management link provided with your order or <a href="/contact-form/">contact us</a>. Existing Mockoon Cloud customers can continue to manage their subscription from the <a href="/account/subscription/">account page</a>.'
      },
      {
        title: 'Can I get a refund?',
        content:
          'Fees are generally non-refundable, but exceptional requests may be considered case by case. Please review our <a href="/terms/">terms of service</a> or <a href="/contact-form/">contact us</a> for help.'
      },
      {
        title: 'VAT',
        content:
          'Prices are in EUR and exclude taxes (VAT, etc.). Applicable taxes are calculated during checkout based on your location and customer type.'
      }
    ]
  },
  {
    title: 'Security & privacy',
    items: [
      {
        title: 'How does Mockoon handle my data?',
        content:
          'Mockoon is local-first, and self-hosted Mockoon Pro stores application data on infrastructure you control. Mockoon processes mock data only when you use Enterprise managed cloud, legacy Mockoon Cloud, or deliberately provide it for support. For full details, see our <a href="/trust/">Trust Center</a> and <a href="/privacy/">privacy policy</a>.'
      },
      {
        title:
          'Are you compliant with GDPR, CCPA, and other privacy regulations?',
        content:
          'Yes. We support customers operating under GDPR, CCPA, the UK Data Protection Act, and PIPEDA. You can review our compliance posture, sub-processors, and security controls in our <a href="/trust/">Trust Center</a>.'
      },
      {
        title: 'Where can I report a security vulnerability?',
        content:
          'Please follow our responsible disclosure process described in our <a href="https://github.com/mockoon/mockoon/security/policy" rel="noopener">security policy</a>. More information is available in our <a href="/trust/">Trust Center</a>.'
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
  SOLO: { MONTHLY: '/month', YEARLY: '/month (Tax excl.)<br/>billed annually' },
  TEAM: '/license/month (Tax excl.)<br/>billed €120/license/year'
};

const proYearlyMonthlyPrice = '10';

const PlansView: FunctionComponent<{
  showTagline: boolean;
}> = function ({ showTagline }) {
  const auth = useAuth();
  const currentUser = useCurrentUser();
  const router = useRouter();
  const [showTrialOnboardingConfirmation, setShowTrialOnboardingConfirmation] =
    useState(false);
  const discountCode = router.query.discountCode;
  const {
    data: trialEligibilityStatus,
    isLoading: isLoadingTrialEligibilityStatus
  } = useTrialOnboardingEligibility();
  const { refetch: trialOnboarding, isLoading: isTrialOnboarding } =
    useTrialOnboarding();

  const openWebApp = () => {
    window.location.assign(process.env.NEXT_PUBLIC_WEBAPP_URL);
  };

  const openCheckout = async (planId: Plans) => {
    const token = await auth.getIdToken();

    if (!token) {
      throw new Error('Missing authentication token');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/transaction`,
      {
        method: 'POST',
        body: JSON.stringify({
          plan: planId,
          frequency: Frequency.YEARLY
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Unable to create subscription transaction');
    }

    const payload: { transactionId: string } = await response.json();
    const transactionId = payload.transactionId;

    if (!transactionId) {
      throw new Error('Missing transaction ID');
    }

    // @ts-ignore
    Paddle.Checkout.open({
      settings: {
        variant: 'one-page',
        theme: 'light',
        locale: 'en'
      },
      transactionId,
      customer: {
        email: auth.user.email
      },
      customData: {
        userId: auth.user.uid
      },
      discountCode
    });
  };

  const getTrialButtonText = () => {
    if (!auth.isAuth) {
      return 'Start free trial';
    }

    if (trialEligibilityStatus?.trial) {
      return 'Start free trial';
    }

    return 'Purchase plan';
  };

  const getTrialCtaText = () => {
    if (!auth.isAuth) {
      return '14-day free trial. No credit card required.<sup>2</sup>';
    }

    if (trialEligibilityStatus?.self && trialEligibilityStatus?.trial) {
      return '14-day free trial. No credit card required.';
    }

    if (!trialEligibilityStatus?.self && trialEligibilityStatus?.trial) {
      return '7-day free trial. Credit card required.';
    }
  };

  const startTrial = async (planId: Plans) => {
    if (!auth.isAuth) {
      localStorage.setItem('redirect', '/account/subscribe/');
      router.push('/signup/');
      return;
    }

    if (auth.isAuth && currentUser.data?.plan !== 'FREE') {
      router.push('/account/subscription/');
      return;
    }

    // If the cached pre-check already says ineligible, skip POST and go straight to checkout.
    if (
      trialEligibilityStatus?.self === false ||
      trialEligibilityStatus?.trial === false
    ) {
      await openCheckout(planId);
      return;
    }

    try {
      const trialResult = await trialOnboarding({
        plan: planId,
        frequency: Frequency.YEARLY
      });

      if (trialResult.data) {
        setShowTrialOnboardingConfirmation(true);

        setTimeout(() => {
          openWebApp();
        }, 3000);

        return;
      }
    } catch {
      // fallback to checkout if trial onboarding eligibility check fails
    }

    await openCheckout(planId);
  };

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
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            {/* Trial onboarding confirmation modal */}
            <Modal
              show={showTrialOnboardingConfirmation}
              onHide={() => setShowTrialOnboardingConfirmation(false)}
              centered
              scrollable={false}
            >
              <Modal.Header closeButton className='p-4'>
                <Modal.Title>{tickBadge} Trial activated!</Modal.Title>
              </Modal.Header>
              <Modal.Body className='p-4'>
                Your free trial has been activated. You will be redirected to
                the web application in a few seconds. If you are not redirected,
                please click the button below.
              </Modal.Body>
              <Modal.Footer className='p-4'>
                <button
                  className='btn btn-xs btn-primary'
                  type='button'
                  onClick={() => {
                    openWebApp();
                  }}
                >
                  <i className='icon-open'></i> Open web app
                </button>
              </Modal.Footer>
            </Modal>

            <div className='row gx-4 gy-4 justify-content-center'>
              <div className='col-12 col-lg-5'>
                <div className='card shadow-lg border-1 border-primary mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h2 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Team</span>
                      <span className='ms-1'>plan</span>
                    </h2>
                    <p className='text-center text-gray-700'>
                      Self-host Mockoon Pro on your own infrastructure
                    </p>
                    <div className='d-flex justify-content-center'>
                      <span className='h2 mb-0 mt-2'>€</span>
                      <span className='price display-2 mb-0'>
                        {proYearlyMonthlyPrice}
                      </span>
                      <span
                        className='h5 text-gray-700 align-self-end ms-2'
                        dangerouslySetInnerHTML={{
                          __html: suffixes.TEAM
                        }}
                      ></span>
                    </div>
                    <div className='mx-auto mb-6'>
                      <span className='badge text-bg-success-subtle rounded-pill'>
                        Annual billing, minimum 5 licenses
                      </span>
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
                        Flexible license slots assignable to users seats or mock
                        instances
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        <Link href='/pro/docs/self-hosting/installation/'>
                          Self-hosted deployment
                        </Link>{' '}
                        with full control of your data
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        <Link href='/pro/docs/features/data-synchronization-team-collaboration/'>
                          Real-time team collaboration
                        </Link>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        <Link href='/pro/docs/features/api-mock-deployments/'>
                          Deploy and manage API mock instances
                        </Link>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Role-based access control</p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Administrative and workspace audit trail</p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>
                        Embedded{' '}
                        <Link href='/pro/docs/clients/embedded-web-application/'>
                          web application
                        </Link>
                      </p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Next business day email support</p>
                    </div>
                    <div className='mt-4'>
                      <div className='text-center'>
                        <Link
                          href='/pro/checkout/?mode=trial'
                          className='btn btn-primary btn-xs'
                        >
                          Start free trial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-12 col-lg-5'>
                <div className='card shadow-lg mb-md-0 h-100'>
                  <div className='card-body h-100 d-flex flex-column'>
                    <h2 className='d-flex justify-content-center mb-3 fw-medium'>
                      <span className='text-primary'>Enterprise</span>
                      <span className='ms-1'>plan</span>
                    </h2>
                    <p className='text-center text-gray-700'>
                      For large teams and organizations with advanced needs
                    </p>

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

                      <p>
                        Dedicated enterprise support with a 4-business-hour
                        response time
                      </p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Migration and onboarding</p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Custom feature development</p>
                    </div>

                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Training and consulting</p>
                    </div>
                    <div className='d-flex'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                        <i className='icon-check'></i>
                      </div>

                      <p>Optional managed cloud deployment</p>
                    </div>
                    <div className='text-center mt-auto'>
                      <div className='btn-group mb-2'>
                        <button
                          type='button'
                          className={`btn btn-primary-subtle btn-xs`}
                          onClick={() => {
                            router.push('/contact-form/');
                          }}
                        >
                          Contact us
                        </button>
                        <button
                          type='button'
                          className={`btn btn-primary-subtle btn-xs`}
                          onClick={() => {
                            router.push('/request-demo/');
                          }}
                        >
                          Request a demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='fs-sm text-gray-700 text-center mt-1'>
              Prices are in EUR and exclude taxes (e.g. VAT, sales tax, etc.)
              where applicable. By creating a trial or purchasing a plan, you
              agree to our <Link href={'/privacy/'}>privacy policy</Link> and{' '}
              <Link href={'/terms/'}>terms of service</Link>. <br />
              Users with a valid work email are eligible for a 14-day free trial
              without credit card requirement.
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
                              colSpan={3}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Features
                            </td>
                          </tr>
                          <tr>
                            <td>
                              License allocation{' '}
                              <CustomTooltip text='Each license is a slot assignable to one user seat or one mock instance.'></CustomTooltip>
                            </td>
                            <td className='text-center'>Users or instances</td>
                            <td className='text-center'>Users or instances</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/clients/embedded-web-application/'>
                                Embedded web application
                              </Link>{' '}
                              <CustomTooltip text='The embedded web application allows you to run Mockoon directly within your web browser. Mockoon Pro is also compatible with the desktop application.'></CustomTooltip>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/self-hosting/administration/'>
                                Administration dashboard
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/features/data-synchronization-team-collaboration/'>
                                Real-time collaboration
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>

                          <tr>
                            <td>
                              <Link href='/pro/docs/features/api-mock-deployments/'>
                                Deploy and manage mock instances
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/misc/authentication/'>
                                Local accounts and member invitations
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/misc/authentication/#openid-connect-oidc-single-sign-on'>
                                OpenID Connect (OIDC) Single Sign-On
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/misc/roles-and-permissions/'>
                                Roles and permissions
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>
                              <Link href='/pro/docs/misc/audit-trail/'>
                                Audit trail
                              </Link>
                            </td>
                            <td className='text-center'>{tickBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Support & services
                            </td>
                          </tr>
                          <tr>
                            <td>Support level</td>
                            <td className='text-center'>Next business day</td>
                            <td className='text-center'>4 business hours</td>
                          </tr>
                          <tr>
                            <td>Migration and onboarding</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Custom feature development</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td>Training and consulting</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>{tickBadge}</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Payment
                            </td>
                          </tr>
                          <tr>
                            <td>Payment options</td>
                            <td className='text-center'>Credit card only</td>
                            <td className='text-center'>PO and invoicing</td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className='text-start fw-bold bg-gray-100'
                            >
                              Managed cloud (optional)
                            </td>
                          </tr>
                          <tr>
                            <td>Managed cloud availability</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>Optional</td>
                          </tr>
                          <tr>
                            <td>Bandwidth included</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>Custom</td>
                          </tr>
                          <tr>
                            <td>Hosting</td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>Single-tenant</td>
                          </tr>
                          <tr>
                            <td>
                              Regions{' '}
                              <CustomTooltip text='Choose a region close to your users.'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>
                              Cloud provider of your choice
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Availability SLA{' '}
                              <CustomTooltip text='Monthly uptime commitment for the optional managed cloud service.'></CustomTooltip>
                            </td>
                            <td className='text-center'>{crossBadge}</td>
                            <td className='text-center'>Custom SLA</td>
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
                  <Link href='/pro/' className='btn btn-primary-subtle'>
                    Discover Mockoon Pro
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
                <h2 className='fw-bold mb-6 text-center'>Mockoon Pro FAQ</h2>
                <Accordion data={proFaq} />
              </div>
            </div>
          </div>
        </section>
      </QueryClientProvider>
    </>
  );
};

export default PlansView;
