import Link from 'next/link';
import Accordion from '../../components/accordion';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { AccordionData } from '../../models/common.model';

const marketplaceUrl =
  'https://aws.amazon.com/marketplace/pp/prodview-vspshwxf7b66c';

const steps = [
  {
    title: 'Purchase through AWS',
    description:
      'Choose your license quantity and annual subscription in AWS Marketplace. Software charges appear on your AWS bill.'
  },
  {
    title: 'Activate your purchase',
    description:
      'Select Set up your account in AWS Marketplace and enter a delivery email. We send your license key and setup details. No Mockoon purchasing account is required.'
  },
  {
    title: 'Deploy and collaborate',
    description:
      'Run the Docker container on your infrastructure, invite your team, and start sharing mock APIs. You control the deployment and its data.'
  }
];

const faq: AccordionData = [
  {
    items: [
      {
        title: 'What does this offer include?',
        content:
          'The offer provides a Mockoon Pro subscription for self-hosted API mocking, team collaboration, browser access, and mock deployments. You deploy and operate the application yourself. Managed hosting, automatic infrastructure provisioning, and infrastructure charges are not included. Review the AWS listing for the available plan, pricing, and terms.'
      },
      {
        title: 'How are license slots counted?',
        content:
          'Each slot covers either one user or one concurrently deployed mock instance. For example, 10 slots can cover 6 users and 4 mock instances. You can change that allocation in your instance settings. Purchase quantities and pricing are defined in the AWS offer.'
      },
      {
        title: 'Can I run Mockoon Pro in a private or air-gapped environment?',
        content:
          'Yes. After purchase and activation, Mockoon Pro runs on your infrastructure, including private and air-gapped networks. It reports no telemetry. External connections are needed only for integrations you configure, such as OIDC authentication or mocks that call external APIs.'
      },
      {
        title: 'How do renewals and quantity changes work?',
        content:
          'Manage your subscription through AWS Marketplace. When a renewal or quantity change produces an updated license key, we email it to your delivery address. Apply the replacement key in your instance settings. Turning off automatic renewal does not itself refund the current contract term.'
      },
      {
        title: 'Can you provide a private offer?',
        content: (
          <>
            Yes. <Link href='/contact-form/'>Contact us</Link> with your
            requirements and preferred subscription quantity to discuss a
            private offer. If AWS commitment eligibility matters to your
            purchase, confirm the offer eligibility and your agreement terms
            with AWS or your procurement team.
          </>
        )
      }
    ]
  }
];

export default function AwsMarketplaceLanding() {
  return (
    <Layout footerBanner='contact'>
      <Meta
        title='Mockoon Pro on AWS Marketplace'
        description='Purchase Mockoon Pro through AWS Marketplace. Build, share, and deploy mock APIs on your infrastructure with AWS billing.'
        image='pro-hero.png'
      />
      <main>
        <Hero
          title='Mockoon Pro on <span class="text-primary">AWS Marketplace</span>'
          subtitle="Build, share, and deploy realistic mock APIs on infrastructure you control. Purchase your team's subscription through your AWS account."
          mainPicture='/images/pro-hero.png'
          mainPictureAlt='Mockoon Pro deployment and collaboration'
          mainPictureWidth={1200}
          mainPictureHeight={783}
          ctaContent={
            <div className='d-flex flex-wrap justify-content-center justify-content-lg-start gap-3'>
              <a
                href={marketplaceUrl}
                className='btn btn-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                View on AWS Marketplace{' '}
                <i className='icon-north_east ms-2' aria-hidden='true'></i>
              </a>
              <Link href='/contact-form/' className='btn btn-outline-primary'>
                Discuss a private offer
              </Link>
            </div>
          }
        >
          <ul className='list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 text-gray-700 small mb-0'>
            <li>
              <i
                className='icon-check text-success me-2'
                aria-hidden='true'
              ></i>
              AWS billing
            </li>
            <li>
              <i
                className='icon-check text-success me-2'
                aria-hidden='true'
              ></i>
              Docker deployment
            </li>
            <li>
              <i
                className='icon-check text-success me-2'
                aria-hidden='true'
              ></i>
              No telemetry
            </li>
          </ul>
        </Hero>

        <section className='py-6 py-md-8 border-top'>
          <div className='container'>
            <div className='row align-items-start g-5'>
              <div className='col-12 col-lg-4'>
                <p className='text-primary fw-bold small mb-2'>
                  Built for development teams
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  Keep API dependencies from blocking your team
                </h2>
                <Link href='/pro/' className='fw-bold'>
                  Explore Mockoon Pro{' '}
                  <i className='icon-arrow_forward ms-1' aria-hidden='true'></i>
                </Link>
              </div>
              <div className='col-12 col-lg-8'>
                <div className='row g-5'>
                  <div className='col-12 col-md-4'>
                    <i
                      className='icon-code text-primary fs-2 mb-3 d-block'
                      aria-hidden='true'
                    ></i>
                    <h3 className='h5 fw-bold'>Mock realistic APIs</h3>
                    <p className='text-gray-700 mb-0'>
                      Build the responses and scenarios your applications need,
                      without waiting for production APIs.
                    </p>
                  </div>
                  <div className='col-12 col-md-4'>
                    <i
                      className='icon-groups text-primary fs-2 mb-3 d-block'
                      aria-hidden='true'
                    ></i>
                    <h3 className='h5 fw-bold'>Work together</h3>
                    <p className='text-gray-700 mb-0'>
                      Share environments through browser access, real-time
                      synchronization, and workspace access controls.
                    </p>
                  </div>
                  <div className='col-12 col-md-4'>
                    <i
                      className='icon-cloud text-primary fs-2 mb-3 d-block'
                      aria-hidden='true'
                    ></i>
                    <h3 className='h5 fw-bold'>Share mock endpoints</h3>
                    <p className='text-gray-700 mb-0'>
                      Deploy mocks for frontend development, integration
                      testing, and automated workflows on your network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row justify-content-center mb-5'>
              <div className='col-12 col-lg-8 text-center'>
                <h2 className='h3 fw-medium mb-3'>
                  From purchase to your team's first mock API
                </h2>
                <p className='text-gray-700 mb-0'>
                  AWS handles the transaction. You choose where Mockoon Pro
                  runs.
                </p>
              </div>
            </div>
            <ol className='row g-5 list-unstyled mb-0'>
              {steps.map((step, index) => (
                <li key={step.title} className='col-12 col-md-4'>
                  <p className='text-primary fw-bold mb-3'>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className='h5 fw-bold'>{step.title}</h3>
                  <p className='text-gray-700 mb-0'>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top'>
          <div className='container'>
            <div className='row g-5'>
              <div className='col-12 col-lg-5'>
                <p className='text-primary fw-bold small mb-2'>
                  For your procurement review
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  Clear boundaries. Useful documentation.
                </h2>
                <p className='text-gray-700 mb-0'>
                  This is a software subscription, not a hosted deployment. Any
                  AWS infrastructure you use is billed separately. Pricing,
                  contract duration, and purchase terms are specified in the
                  Marketplace offer.
                </p>
              </div>
              <div className='col-12 col-lg-6 offset-lg-1'>
                <div className='border-bottom pb-4 mb-4'>
                  <h3 className='h5 fw-bold'>
                    <i
                      className='icon-security text-primary me-2'
                      aria-hidden='true'
                    ></i>
                    Security and privacy
                  </h3>
                  <p className='text-gray-700 mb-2'>
                    Review our architecture, data boundaries, and security
                    practices.
                  </p>
                  <Link href='/trust/' className='fw-bold'>
                    Visit the Trust Center{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                </div>
                <div className='border-bottom pb-4 mb-4'>
                  <h3 className='h5 fw-bold'>
                    <i
                      className='icon-description text-primary me-2'
                      aria-hidden='true'
                    ></i>
                    Deployment and administration
                  </h3>
                  <p className='text-gray-700 mb-2'>
                    Plan your installation, workspace access, and day-to-day
                    operations.
                  </p>
                  <Link
                    href='/pro/docs/self-hosting/installation/'
                    className='fw-bold'
                  >
                    Read the installation guide{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                </div>
                <div>
                  <h3 className='h5 fw-bold'>
                    <i
                      className='icon-help_outline text-primary me-2'
                      aria-hidden='true'
                    ></i>
                    Questions or a private offer?
                  </h3>
                  <p className='text-gray-700 mb-2'>
                    Talk to us about your deployment and purchasing
                    requirements.
                  </p>
                  <Link href='/contact-form/' className='fw-bold'>
                    Contact the Mockoon team{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-8'>
                <h2 className='h3 fw-medium text-center mb-5'>
                  AWS Marketplace purchasing questions
                </h2>
                <Accordion data={faq} />
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top'>
          <div className='container'>
            <div className='row align-items-center g-4'>
              <div className='col-12 col-lg-7'>
                <h2 className='h3 fw-medium mb-2'>
                  Bring Mockoon Pro to your team
                </h2>
                <p className='text-gray-700 mb-0'>
                  Review the offer and choose the subscription quantity that
                  fits your team.
                </p>
              </div>
              <div className='col-12 col-lg-5 text-lg-end'>
                <a
                  href={marketplaceUrl}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on AWS Marketplace{' '}
                  <i className='icon-north_east ms-2' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
