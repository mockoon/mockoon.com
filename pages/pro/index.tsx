import Link from 'next/link';
import AlternatedFeatures from '../../components/alternated-features';
import CompanyLogos from '../../components/company-logos';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import OssProComparison from '../../components/oss-pro-comparison';
import SocialProof from '../../components/social-proof';
import Layout from '../../layout/layout';

const proFeatures = [
  {
    title:
      '<span class="text-primary">Collaborate</span> with your team in real time',
    description:
      'Invite your team members to collaborate on your mock APIs in real time. Avoid conflicts and keep your team in sync. ',
    imgSrc: '/images/pro/mockoon-pro-real-time-collaboration-presence.png',
    imgAlt: 'mockoon application screenshot showing users collaborating',
    cta: 'Read the documentation',
    ctaLink: '/pro/docs/features/data-synchronization-team-collaboration/'
  },
  {
    title: 'Instantly <span class="text-primary">deploy</span> your mock APIs',
    description:
      'Deploy your mock APIs with a single click and share them with your team, clients, or class. Say goodbye to complex deployment configurations.',
    imgSrc: '/images/pro/mockoon-pro-api-mock-deployment.png',
    imgAlt: 'mockoon application screenshot showing list of deployed APIs',
    cta: 'Read the documentation',
    ctaLink: '/pro/docs/features/api-mock-deployments/'
  },
  {
    title:
      'Give everyone a <span class="text-primary">full API mocking workspace</span>',
    description:
      'Let developers, QA, and product teams, create, test, and deploy mock APIs from any browser. The full web app is built into your Mockoon Pro instance: no installation or desktop access required.',
    imgSrc: '/images/pro/mockoon-pro-web-application.png',
    imgAlt:
      'Mockoon Pro embedded web application showing a mock API workspace in a browser',
    cta: 'Explore the embedded web app',
    ctaLink: '/pro/docs/clients/embedded-web-application/'
  },
  {
    title:
      'Stay in control with <span class="text-primary">enterprise access and oversight</span>',
    description:
      'Manage users, invitations, roles, and approved email domains from one place. Connect your identity provider with OIDC SSO and keep a searchable audit trail of administrative, security, and workspace activity, all hosted on your infrastructure.',
    imgSrc: '/images/pro/mockoon-pro-users-and-audit-trail.png',
    imgAlt:
      'Mockoon Pro audit trail showing user, security, and workspace activity',
    cta: 'Explore Pro administration',
    ctaLink: '/pro/docs/misc/authentication/'
  },
  {
    title: 'Get <span class="text-primary">help</span> when you need it',
    description:
      'Enjoy priority support from our team of experts. Get help with your setup, your integrations, or any other questions you may have.',
    imgSrc: '/images/pro/mockoon-pro-enterprise-priority-support.png',
    imgAlt: 'mockoon application screenshot showing support tickets'
  }
];

export default function () {
  const ctaContent = (
    <section className='pb-6 pb-md-8'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <Link
              href='/pro/checkout/?mode=trial'
              className='btn btn-primary mb-6 lift'
            >
              Try Mockoon Pro for free{' '}
              <i className='icon-arrow_forward ms-2'></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Mockoon Pro'}
        description='Run a private API mocking platform on your infrastructure. Collaborate in real time, work from any browser, and deploy mock APIs in one click.'
      />

      <Hero
        title='Never let <span class="text-primary">API integration</span> slow you down again'
        subtitle='Give your whole team one private place to design, collaborate on, and deploy mock APIs, from the browser or desktop app.'
        mainPicture='/images/pro-hero.png'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureSkewed={false}
      >
        <SocialProof />
        <p className='text-gray-600 mb-0 mt-6'>
          <img
            src='/images/eu-flag.svg'
            alt='EU'
            width={30}
            className='me-2 align-middle'
          />
          Proudly built and operated in Europe, with privacy and transparency at
          the core.
        </p>
      </Hero>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Benefits of using Mockoon Pro and API mocking
          </h2>
          <div className='row g-10 justify-content-center'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-add'></i>
                    </div>

                    <p>Accelerate API development with parallel work</p>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-add'></i>
                    </div>

                    <p className='mb-lg-0'>
                      More thorough and reliable API testing
                    </p>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-add'></i>
                    </div>

                    <p>
                      Cheaper, more reliable, and surprise-free test
                      environments
                    </p>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-add'></i>
                    </div>

                    <p className='mb-0'>Faster developers onboarding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                      <i className='icon icon-remove'></i>
                    </div>

                    <p>Tedious third-party API setup and provisioning</p>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                      <i className='icon icon-remove'></i>
                    </div>

                    <p className='mb-lg-0'>
                      Unstable and costly API testing environments
                    </p>
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                      <i className='icon icon-remove'></i>
                    </div>

                    <p>Untested scenarios and edge cases</p>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                      <i className='icon icon-remove'></i>
                    </div>

                    <p className='mb-0'>
                      Team dependencies and bottlenecks on API availability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={proFeatures} imgSize={[800, 454]} />
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-7 text-center'>
              <img
                src='/images/eu-flag.svg'
                alt='European Union flag'
                width={60}
                height={40}
                className='mb-4'
              />
              <h2 className='fw-bold'>Built in Europe, for everyone</h2>
              <p className='lead text-gray-700'>
                Mockoon Pro is operated by an independent European company.
                Privacy-first, openly developed, and committed to a public
                roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {ctaContent}

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <OssProComparison />
        </div>
      </section>

      {ctaContent}
    </Layout>
  );
}
