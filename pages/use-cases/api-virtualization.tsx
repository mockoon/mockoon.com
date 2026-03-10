import AlternatedFeatures from '../../components/alternated-features';
import CompanyLogos from '../../components/company-logos';
import Hero from '../../components/hero';
import LandingCta from '../../components/landing-cta';
import Meta from '../../components/meta';
import SocialProof from '../../components/social-proof';
import Layout from '../../layout/layout';

const apiVirtualizationFeatures = [
  {
    title:
      'Replace <span class="text-primary">external</span> service dependencies',
    description:
      'Create virtual copies of payment gateways, authentication services, and third-party APIs. Test your application logic without depending on external service availability or rate limits.',
    imgSrc:
      '/images/solutions/api-virtualization/virtualize-third-party-services.png',
    imgAlt:
      'Mockoon application screenshot showing third-party API virtualization'
  },
  {
    title:
      '<span class="text-primary">Isolate</span> components for unit testing',
    description:
      'Test individual microservices by virtualizing their downstream dependencies. Verify service behavior without requiring the entire application stack to be running.',
    imgSrc: '/images/solutions/api-virtualization/isolate-microservices.png',
    imgAlt: 'Mockoon application screenshot showing microservices isolation'
  },
  {
    title:
      '<span class="text-primary">Simulate</span> service failures and delays',
    description:
      'Test how your application handles network timeouts, service errors, and degraded performance. Virtualize realistic failure scenarios that are hard to reproduce with real services.',
    imgSrc: '/images/solutions/api-virtualization/control-service-behavior.png',
    imgAlt: 'Mockoon application screenshot showing service behavior controls'
  },
  {
    title: 'Create <span class="text-primary">stable</span> test environments',
    description:
      'Build consistent testing environments that mirror production without the complexity. Virtualize database APIs, message queues, and external integrations for reliable tests.',
    imgSrc:
      '/images/solutions/api-virtualization/realistic-test-environments.png',
    imgAlt: 'Mockoon application screenshot showing realistic test setup'
  }
];

const benefits = [
  {
    title: 'Test in Isolation',
    description:
      'Test components independently without setting up complex environments',
    icon: 'icon-isolate'
  },
  {
    title: 'Control Service Behavior',
    description:
      'Simulate different response patterns, delays, and failure scenarios',
    icon: 'icon-tune'
  },
  {
    title: 'Reduce Test Complexity',
    description:
      'Eliminate the need to coordinate multiple services for testing',
    icon: 'icon-streamline'
  },
  {
    title: 'Accelerate CI/CD',
    description:
      'Run automated tests without external dependencies or service setup',
    icon: 'icon-speed'
  }
];

export default function ApiVirtualizationSolution() {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={
          'Keep delivery moving when dependencies fail with API virtualization'
        }
        description='Virtualize third-party and internal services to remove bottlenecks, stabilize tests, and validate failure scenarios without complex environment setup'
      />

      <Hero
        title='<span class="text-primary">Keep delivery moving</span> when dependencies fail'
        subtitle='Virtualize third-party and internal services to remove bottlenecks, stabilize tests, and validate failure scenarios without complex environment setup'
        mainPicture='/images/solutions/api-virtualization/api-virtualization-hero.png'
        mainPictureAlt='API virtualization illustration with service dependencies'
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
            Benefits of API virtualization with Mockoon
          </h2>
          <div className='row g-6 justify-content-center'>
            {benefits.map((benefit, index) => (
              <div key={index} className='col-lg-6 col-xl-3'>
                <div className='text-center'>
                  <div className='icon-wrapper mb-3'>
                    <i
                      className={`${benefit.icon} text-primary`}
                      style={{ fontSize: '2.5rem' }}
                    ></i>
                  </div>
                  <h4 className='fw-bold mb-2'>{benefit.title}</h4>
                  <p className='text-muted mb-0'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-bold mb-4'>
                Traditional testing vs API virtualization
              </h2>
              <p className='text-muted mb-6'>
                See how API virtualization transforms your testing approach
              </p>
            </div>
          </div>

          <div className='row g-6 justify-content-center'>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-danger mb-4'>
                  <i className='icon-close me-2'></i>
                  Traditional Testing
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Complex environment setup with multiple dependencies
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Tests fail when external services are unavailable
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Expensive infrastructure for realistic test environments
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Unpredictable test results due to external factors
                    </span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Difficult to test error scenarios and edge cases
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-success mb-4'>
                  <i className='icon-check me-2'></i>
                  With API Virtualization
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Simple setup with virtualized dependencies</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>
                      Tests run reliably regardless of external service status
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>
                      Minimal infrastructure costs with maximum coverage
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Consistent, predictable test outcomes</span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Easy simulation of failures and edge cases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures
            features={apiVirtualizationFeatures}
            imgSize={[800, 454]}
          />
        </div>
      </section>

      <LandingCta />
    </Layout>
  );
}
