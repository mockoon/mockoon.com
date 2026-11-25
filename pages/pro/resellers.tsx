import Link from 'next/link';
import Accordion from '../../components/accordion';
import CompanyLogos from '../../components/company-logos';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { AccordionData } from '../../models/common.model';

const partnerProfiles = [
  {
    icon: 'icon-science',
    title: 'QA & testing consultancies',
    description:
      'Equip client QA teams with deterministic, isolated mock APIs for automated, regression, and edge-case testing without fragile third-party sandboxes.'
  },
  {
    icon: 'icon-device_hub',
    title: 'DevOps & system integrators',
    description:
      'Integrate self-hosted Mockoon Pro into internal developer platforms, CI/CD pipelines, and client delivery stacks with a single Docker container.'
  },
  {
    icon: 'icon-verified_user',
    title: 'Software resellers & VARs',
    description:
      'Serve enterprise procurement with annual license pools, purchase-order and invoice billing, offline license keys, and transparent security documentation.'
  },
  {
    icon: 'icon-design_services',
    title: 'API & engineering agencies',
    description:
      'Accelerate contract-first API delivery and hand over ready-to-use, browser-accessible mock workspaces that client teams can maintain independently.'
  }
];

const mockoonProHighlights = [
  {
    icon: 'icon-groups',
    title: 'Real-time team collaboration',
    description:
      'Co-edit mock APIs across development, QA, and product teams with live presence, synchronization, and workspace access controls.'
  },
  {
    icon: 'icon-cloud',
    title: 'One-click mock deployments',
    description:
      'Deploy shared mock API instances directly on internal infrastructure with subdomain or path-based routing for tests, staging, and demos.'
  },
  {
    icon: 'icon-desktop_windows',
    title: 'Embedded browser workspace',
    description:
      'Let QA engineers, testers, and non-desktop users create, edit, and manage mock APIs directly in any browser without local installation.'
  },
  {
    icon: 'icon-security',
    title: 'Enterprise access & auditability',
    description:
      'Connect your identity provider with OIDC SSO, manage roles and approved domains, and keep a searchable audit trail of workspace activity.'
  },
  {
    icon: 'icon-wifi_off',
    title: 'Self-hosted & air-gapped ready',
    description:
      'Runs from a single Docker container with no external database dependencies, 100% offline license validation, and zero telemetry.'
  },
  {
    icon: 'icon-code',
    title: 'Built on trusted open source',
    description:
      'Fully compatible with Mockoon Desktop and CLI—MIT-licensed open-source tools trusted by developers worldwide with over 1 million downloads.'
  }
];

const resellerBenefits = [
  {
    title: 'Partner margins & volume pricing',
    description:
      'Access competitive reseller discounts and tailored multi-team or enterprise quotes when bringing Mockoon Pro to your customers.'
  },
  {
    title: 'Simple, flexible license pools',
    description:
      'Each license slot covers either one user seat or one concurrently deployed mock instance, making sizing and quoting straightforward.'
  },
  {
    title: 'Procurement & security ready',
    description:
      'Speed up vendor approval with our public Trust Center, published SBOMs, offline licensing, zero telemetry, and European operation (Luxembourg).'
  },
  {
    title: 'Direct enablement & support',
    description:
      'Work directly with the Mockoon team on client evaluations, technical demos, live training workshops, and dedicated Enterprise SLAs.'
  }
];

const steps = [
  {
    title: 'Reach out to our team',
    description:
      'Tell us about your company, your client base—whether QA and testing services, DevOps consulting, or software reselling—and your expected volume.'
  },
  {
    title: 'Align on terms & enablement',
    description:
      'We set up reseller pricing, PO and invoice billing workflows, and provide evaluation licenses or a guided product walkthrough for your team.'
  },
  {
    title: 'Quote, deliver, and grow',
    description:
      'Deliver offline Mockoon Pro license keys to your clients and bundle your own QA, integration, or training services on top.'
  }
];

const faq: AccordionData = [
  {
    items: [
      {
        title: 'Who can become a Mockoon Pro reseller or partner?',
        content:
          'We work with software resellers, value-added resellers (VARs), QA and testing consultancies, DevOps and system integrators, and engineering agencies looking to offer Mockoon Pro to their clients.'
      },
      {
        title: 'How does Mockoon Pro licensing work for client quotes?',
        content:
          'Mockoon Pro is licensed annually by total slot capacity (starting at 5 licenses for the Team plan). Customers allocate slots freely between user seats and concurrently running mock API instances, and license validation is 100% offline using a single license key.'
      },
      {
        title: 'Can partners bundle Mockoon Pro with QA or consulting services?',
        content:
          'Yes. QA consultancies, testing providers, and agencies can bundle Mockoon Pro licenses alongside their own test automation, API design, migration, or DevOps implementation services.'
      },
      {
        title: 'Can our clients evaluate Mockoon Pro before purchasing?',
        content: (
          <>
            Yes. Organizations with a verified work email can start a{' '}
            <Link href='/pro/checkout/?mode=trial'>
              14-day self-hosted free trial
            </Link>
            , and we can also arrange custom Enterprise evaluations or live demos
            for partner-led opportunities.
          </>
        )
      },
      {
        title: 'Do you support purchase orders and invoice billing?',
        content:
          'Yes. Approved resellers and Enterprise customers can pay by purchase order and invoice, and we also support procurement documentation reviews through our Trust Center.'
      }
    ]
  }
];

export default function ResellersPage() {
  return (
    <Layout footerBanner='contact'>
      <Meta
        title='Mockoon Pro Reseller & Partner Program'
        description='Become a Mockoon Pro reseller or QA/testing partner. Bring self-hosted API mocking, real-time collaboration, and instant mock deployments to your clients.'
        image='pro-hero.png'
      />
      <main>
        <Hero
          title='Become a <span class="text-primary">Mockoon Pro</span> reseller'
          subtitle='Bring private, self-hosted API mocking to your clients. Ideal for QA and testing consultancies, DevOps integrators, agencies, and software resellers.'
          mainPicture='/images/pro-hero.png'
          mainPictureAlt='Mockoon Pro deployment and collaboration'
          mainPictureWidth={1200}
          mainPictureHeight={783}
          ctaContent={
            <div className='d-flex flex-wrap justify-content-center justify-content-lg-start gap-3'>
              <Link href='/contact-form/' className='btn btn-primary lift'>
                Contact us to partner{' '}
                <i className='icon-arrow_forward ms-2' aria-hidden='true'></i>
              </Link>
              <Link href='/pro/' className='btn btn-outline-primary'>
                Explore Mockoon Pro
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
              Self-hosted &amp; air-gapped ready
            </li>
            <li>
              <i
                className='icon-check text-success me-2'
                aria-hidden='true'
              ></i>
              Flexible license pools
            </li>
            <li>
              <i
                className='icon-check text-success me-2'
                aria-hidden='true'
              ></i>
              PO &amp; invoice billing
            </li>
          </ul>
        </Hero>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <CompanyLogos />
        </section>

        <section className='py-6 py-md-8 border-top'>
          <div className='container'>
            <div className='row justify-content-center mb-6'>
              <div className='col-12 col-lg-8 text-center'>
                <p className='text-primary fw-bold small text-uppercase mb-2'>
                  Who we partner with
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  Built for QA, testing, delivery, and procurement partners
                </h2>
                <p className='text-gray-700 mb-0'>
                  Whether you run a software testing practice, build CI/CD
                  platforms, or manage enterprise software procurement, Mockoon
                  Pro fits cleanly into your offering.
                </p>
              </div>
            </div>
            <div className='row g-4'>
              {partnerProfiles.map((profile) => (
                <div key={profile.title} className='col-12 col-md-6 col-lg-3'>
                  <div className='card card-bleed shadow-light-lg h-100'>
                    <div className='card-body'>
                      <i
                        className={`${profile.icon} text-primary fs-2 mb-3 d-block`}
                        aria-hidden='true'
                      ></i>
                      <h3 className='h5 fw-bold mb-2'>{profile.title}</h3>
                      <p className='text-gray-700 small mb-0'>
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-start g-5'>
              <div className='col-12 col-lg-4'>
                <p className='text-primary fw-bold small text-uppercase mb-2'>
                  What you offer
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  Why engineering and QA teams choose Mockoon Pro
                </h2>
                <p className='text-gray-700 mb-4'>
                  Mockoon Pro packages real-time collaboration, mock API
                  hosting, an embedded web app, and enterprise access control
                  into one lightweight self-hosted container.
                </p>
                <div className='d-flex flex-column gap-2'>
                  <Link href='/pro/' className='fw-bold'>
                    Explore Mockoon Pro{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                  <Link href='/pricing/' className='fw-bold'>
                    View standard pricing{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                  <Link href='/trust/' className='fw-bold'>
                    Visit the Trust Center{' '}
                    <i
                      className='icon-arrow_forward ms-1'
                      aria-hidden='true'
                    ></i>
                  </Link>
                </div>
              </div>
              <div className='col-12 col-lg-8'>
                <div className='row g-5'>
                  {mockoonProHighlights.map((item) => (
                    <div key={item.title} className='col-12 col-md-6'>
                      <i
                        className={`${item.icon} text-primary fs-2 mb-3 d-block`}
                        aria-hidden='true'
                      ></i>
                      <h3 className='h5 fw-bold'>{item.title}</h3>
                      <p className='text-gray-700 mb-0'>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top'>
          <div className='container'>
            <div className='row g-5 align-items-start'>
              <div className='col-12 col-lg-5'>
                <p className='text-primary fw-bold small text-uppercase mb-2'>
                  Reseller benefits
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  Low friction to quote, deploy, and approve
                </h2>
                <p className='text-gray-700 mb-4'>
                  Mockoon is already adopted by thousands of organizations
                  worldwide. Our reseller model keeps quoting, security review,
                  and license delivery simple for both you and your customers.
                </p>
                <Link href='/contact-form/' className='btn btn-primary-subtle'>
                  Discuss partnership terms{' '}
                  <i className='icon-arrow_forward ms-2' aria-hidden='true'></i>
                </Link>
              </div>
              <div className='col-12 col-lg-6 offset-lg-1'>
                {resellerBenefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`d-flex align-items-start ${
                      index < resellerBenefits.length - 1
                        ? 'border-bottom pb-4 mb-4'
                        : ''
                    }`}
                  >
                    <div
                      className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4 flex-shrink-0'
                      aria-hidden='true'
                    >
                      <i className='icon-check'></i>
                    </div>
                    <div>
                      <h3 className='h5 fw-bold mb-2'>{benefit.title}</h3>
                      <p className='text-gray-700 mb-0'>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row justify-content-center mb-5'>
              <div className='col-12 col-lg-8 text-center'>
                <p className='text-primary fw-bold small text-uppercase mb-2'>
                  Getting started
                </p>
                <h2 className='h3 fw-medium mb-3'>
                  How becoming a reseller works
                </h2>
                <p className='text-gray-700 mb-0'>
                  No complex portals or lengthy onboarding. Talk directly with
                  the Mockoon team.
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
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-8'>
                <h2 className='h3 fw-medium text-center mb-5'>
                  Reseller &amp; partner questions
                </h2>
                <Accordion data={faq} />
              </div>
            </div>
          </div>
        </section>

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center g-4'>
              <div className='col-12 col-lg-7'>
                <h2 className='h3 fw-medium mb-2'>
                  Interested in becoming a Mockoon Pro reseller?
                </h2>
                <p className='text-gray-700 mb-0'>
                  Tell us about your company, your QA or enterprise clients, and
                  how you would like to partner.
                </p>
              </div>
              <div className='col-12 col-lg-5 text-lg-end d-flex flex-wrap justify-content-lg-end gap-3'>
                <Link href='/contact-form/' className='btn btn-primary lift'>
                  Contact us{' '}
                  <i className='icon-arrow_forward ms-2' aria-hidden='true'></i>
                </Link>
                <Link href='/request-demo/' className='btn btn-outline-primary'>
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
