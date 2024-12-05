import AlternatedFeatures from '../components/alternated-features';
import CompanyLogos from '../components/company-logos';
import Hero from '../components/hero';
import Meta from '../components/meta';
import OssCloudComparison from '../components/oss-cloud-comparison';
import SocialProof from '../components/social-proof';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const cloudFeatures = [
  {
    title:
      '<span class="text-primary">Collaborate</span> with your team in real time',
    description:
      'Invite your team members to collaborate on your mock APIs in real time. Avoid conflicts and keep your team in sync. ',
    imgSrc:
      '/images/mockoon-cloud/mockoon-cloud-real-time-collaboration-presence.png',
    imgAlt: 'mockoon application screenshot showing users collaborating',
    cta: 'Read the documentation',
    ctaLink:
      '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
  },
  {
    title:
      'Instantly <span class="text-primary">share</span> your mock APIs with your team',
    description:
      'Deploy your mock APIs to the cloud with a single click and share them with your team, clients, or class. Say goodbye to complex deployment configurations.',
    imgSrc: '/images/mockoon-cloud/mockoon-cloud-api-mock-deployment.png',
    imgAlt: 'mockoon application screenshot showing list of deployed APIs',
    cta: 'Read the documentation',
    ctaLink: '/docs/latest/mockoon-cloud/api-mock-cloud-deployments/'
  },
  {
    title: 'Keep your setup in <span class="text-primary">sync</span>',
    description:
      'Always have the latest version of your mock APIs available on all your devices. Enjoy a frictionless experience with automatic data synchronization.',
    imgSrc:
      '/images/mockoon-cloud/mockoon-cloud-data-synchronization-devices.png',
    imgAlt: 'mockoon application screenshot showing synchronized setup',
    cta: 'Read the documentation',
    ctaLink:
      '/docs/latest/mockoon-cloud/data-synchronization-team-collaboration/'
  },
  {
    title:
      '<span class="text-primary">Prototype</span> your APIs faster with our assistants',
    description:
      'Accelerate your API design and prototyping with our assistants. Generate realistic data, endpoints, and responses in seconds.',
    imgSrc: '/images/mockoon-cloud/mockoon-cloud-ai-assisted-mock-design.png',
    imgAlt: 'mockoon application screenshot showing AI assistant in action',
    cta: 'Discover our assistant',
    ctaLink: '/ai-powered-api-mocking/'
  },
  {
    title: 'Get <span class="text-primary">help</span> when you need it',
    description:
      'Enjoy priority support from our team of experts. Get help with your setup, your integrations, or any other questions you may have.',
    imgSrc:
      '/images/mockoon-cloud/mockoon-cloud-enterprise-priority-support.png',
    imgAlt: 'mockoon application screenshot showing support tickets'
  }
];

export default function () {
  const { isAuth } = useAuth();

  const cta = () => {
    if (isAuth) {
      window.location.href = '/account/subscribe/';
    } else {
      localStorage.setItem('redirect', '/account/subscribe/');
      window.location.href = `/signup/`;
    }
  };

  const ctaContent = (
    <section className='pb-6 pb-md-8'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <a
              href=''
              className='btn btn-primary mb-6 lift'
              onClick={(event) => {
                event.preventDefault();
                cta();
              }}
            >
              Try Mockoon Cloud for free{' '}
              <i className='icon-arrow_forward ms-2'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Mockoon Cloud platform'}
        description='Discover Mockoon Cloud platform features: Collaborate with your team, keep your data in sync, and deploy your mock APIs with Mockoon Cloud'
      />

      <Hero
        title='Never let <span class="text-primary">API integration</span> slow you down again'
        subtitle='Collaborate with your team, keep your data in sync, and deploy your mock APIs with Mockoon Cloud'
        mainPicture='/images/cloud-hero.svg'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureSkewed={false}
      >
        <SocialProof />
      </Hero>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Benefits of using Mockoon Cloud and API mocking
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
          <AlternatedFeatures features={cloudFeatures} imgSize={[800, 454]} />
        </div>
      </section>

      {ctaContent}

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <OssCloudComparison />
        </div>
      </section>

      {ctaContent}
    </Layout>
  );
}
