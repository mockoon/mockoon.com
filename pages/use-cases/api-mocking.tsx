import AlternatedFeatures from '../../components/alternated-features';
import CompanyLogos from '../../components/company-logos';
import Hero from '../../components/hero';
import LandingCta from '../../components/landing-cta';
import Meta from '../../components/meta';
import SocialProof from '../../components/social-proof';
import Layout from '../../layout/layout';

const apiMockingFeatures = [
  {
    title:
      'Create <span class="text-primary">realistic</span> mock endpoints instantly',
    description:
      'Build mock APIs with authentic REST endpoints, HTTP methods, and response codes. Define GET, POST, PUT, DELETE operations with realistic JSON responses that match your API contracts.',
    imgSrc: '/images/solutions/api-mocking/create-realistic-mock-apis.png',
    imgAlt: 'Mockoon application screenshot showing mock API creation'
  },
  {
    title: '<span class="text-primary">Mock</span> complex API scenarios',
    description:
      'Simulate authentication flows, pagination, filtering, and search operations. Test how your frontend handles different response structures, error codes, and business logic scenarios.',
    imgSrc: '/images/solutions/api-mocking/simulate-api-behavior.png',
    imgAlt:
      'Mockoon application screenshot showing response rules configuration'
  },
  {
    title: 'Generate <span class="text-primary">realistic</span> test data',
    description:
      'Use templating helpers to create dynamic user profiles, product catalogs, and business data. Generate thousands of unique records with faker.js integration for comprehensive testing.',
    imgSrc: '/images/solutions/api-mocking/generate-dynamic-data.png',
    imgAlt: 'Mockoon application screenshot showing templating helpers'
  },
  {
    title:
      '<span class="text-primary">Prototype</span> APIs before development',
    description:
      'Design and validate API contracts with stakeholders before writing code. Import OpenAPI specs, share mock endpoints with frontend teams, and iterate on API design quickly.',
    imgSrc: '/images/solutions/api-mocking/import-openapi-specs.png',
    imgAlt: 'Mockoon application screenshot showing OpenAPI import'
  }
];

const benefits = [
  {
    title: 'Start Development Immediately',
    description:
      'Begin frontend development without waiting for backend APIs to be ready',
    icon: 'icon-play_arrow'
  },
  {
    title: 'Test API Integration',
    description:
      'Validate how your application handles different API responses and error scenarios',
    icon: 'icon-api'
  },
  {
    title: 'Prototype User Experiences',
    description:
      'Design and test user workflows with realistic API data before implementation',
    icon: 'icon-design_services'
  },
  {
    title: 'Validate API Contracts',
    description:
      'Ensure API specifications meet frontend requirements before backend development',
    icon: 'icon-verified'
  }
];

export default function ApiMockingSolution() {
  const metaDescription =
    'Mock realistic endpoints, generate dynamic data, and validate API contracts early so frontend and backend teams can ship faster together';

  return (
    <Layout footerBanner='download'>
      <Meta
        title={
          'Stop waiting on backend APIs. Build in parallel with API mocking.'
        }
        description={metaDescription}
      />

      <Hero
        title='Stop waiting on backend APIs<br><span class="text-primary">Build in parallel</span>'
        subtitle={metaDescription}
        mainPicture='/images/solutions/api-mocking/api-mocking-hero.png'
        mainPictureAlt='API mocking illustration with Mockoon interface'
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
            Why developers choose Mockoon for API mocking
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
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-bold mb-4'>Common API mocking challenges</h2>
              <p className='text-muted mb-6'>
                See how Mockoon solves the most common problems developers face
                with API development
              </p>
            </div>
          </div>

          <div className='row g-6 justify-content-around'>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-danger mb-4'>
                  <i className='icon-close me-2'></i>
                  Without API Mocking
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Waiting for backend APIs to be ready</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Expensive third-party API calls during testing</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>
                      Difficulty testing error scenarios and edge cases
                    </span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Unstable test environments and flaky tests</span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                      <i className='icon icon-remove'></i>
                    </div>
                    <span>Team dependencies and development bottlenecks</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-success mb-4'>
                  <i className='icon-check me-2'></i>
                  With Mockoon API Mocking
                </h5>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Parallel development - no more waiting</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Zero cost testing with unlimited API calls</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Test any scenario including errors and timeouts</span>
                  </li>
                  <li className='d-flex mb-3'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Reliable, consistent test environments</span>
                  </li>
                  <li className='d-flex mb-0'>
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                      <i className='icon icon-add'></i>
                    </div>
                    <span>Independent teams and faster delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={apiMockingFeatures} />
        </div>
      </section>

      <LandingCta />
    </Layout>
  );
}
