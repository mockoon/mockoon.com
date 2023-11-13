import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export const useCases = [
  {
    label: 'Development',
    title: 'API mocking speeds up development',
    description:
      "Mocking APIs helps you accelerate your development lifecycles. It also reduces the dependencies between your development teams, especially frontend and backend. It's a silver bullet when an API is still under development. It finally helps you avoid relying on external APIs that can be subject to downtimes or require security credentials unpracticable during development.",
    imgSrc: '/images/use-cases/api-mocking-development-teams.svg',
    imgAlt: 'Two people coding',
    cta: 'Getting started with mocking',
    ctaLink: '/tutorials/getting-started/'
  },
  {
    label: 'Integration',
    title: 'Integrate faster with third-party APIs',
    description:
      'Thanks to API mocking, you can start working with third-party APIs in no time. Instead of registering for an account, configuring accesses, and provisioning tokens, you could mock the needed API endpoints and start using them in your front-end or back-end application right away.',
    imgSrc: '/images/use-cases/third-party-api-integration.svg',
    imgAlt: 'Two people connecting applications',
    cta: 'Discover our mock samples',
    ctaLink: '/mock-samples/category/all/'
  },
  {
    label: 'Testing',
    title: 'API mocking for integration testing',
    description:
      'API mocking brings you the flexibility needed to run complex integration tests for interconnected systems, microservices, or third-party APIs integrations. It allows you to run faster and more comprehensive tests that avoid relying on third-party services and covers more edge cases: slower response time, random failures, etc.',
    imgSrc: '/images/use-cases/api-mocking-integration-testing.svg',
    imgAlt: 'Two people testing an application',
    cta: 'Case study: better application testing',
    ctaLink: '/case-studies/localazy-speed-development-api-mocking/'
  },
  {
    label: 'Data',
    title: 'Generate realistic fake data',
    description:
      'Working with mock API can save you time. But working with mock APIs that can serve realistic and randomized fake data (JSON, CSV, etc.) is even better. Mockoon embarks a templating system and a rules interface that lets you generate any data or response to make your mocks look more realistic than ever.',
    imgSrc: '/images/use-cases/generate-fake-json-data.svg',
    imgAlt: 'Two people working with data',
    cta: 'Learn how to generate fake data',
    ctaLink: '/tutorials/generate-mock-json-data/'
  },
  {
    label: 'Demonstration',
    title: 'Mock for demonstration purpose',
    description:
      'Sometimes you have to make your APIs available to clients or users before they commit to using them. With API mocking, you can provide a simulation of the actual API for testing purposes without the need to give access to your product or provision credentials. Internal or pre-sales demos can benefit from API mocking in the same way.',
    imgSrc: '/images/use-cases/mocking-during-presentation-onboarding.svg',
    imgAlt: 'Person demoing an application'
  },
  {
    label: 'Design',
    title: 'Mocking during API design',
    description:
      "The design phase of an API can also benefit from API mocking, especially when doing user experience research or focus groups with your potential users. It allows to seamlessly and quickly change and refine the API contract without waiting for a server deployment or the development team's availability.",
    imgSrc: '/images/use-cases/mocking-api-design-research.svg',
    imgAlt: 'A person staring at a planning board',
    cta: 'Case study: API UX research',
    ctaLink: '/case-studies/impala-api-ux-user-research/'
  }
];

const UseCases: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='API mocking use cases'
        description='Discover how mocking APIs with Mockoon can accelerate and streamline your applications development, integration, testing, and demos'
        ogType='article'
      />
      <Hero
        title='API mocking use cases'
        subtitle='Discover how mocking APIs with Mockoon can accelerate and streamline your applications development, integration, testing, and demos'
      />

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          {useCases.map((feature, featureIndex) => {
            return (
              <div
                className='row py-5 py-lg-8 align-items-center justify-content-between'
                key={`feature${featureIndex}`}
              >
                <div
                  className={`col-12 col-lg-5 pb-sm-10 pb-lg-0 ${
                    featureIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
                  }`}
                >
                  <span className='badge rounded-pill text-bg-primary-subtle mb-3'>
                    <span className='h6 text-uppercase'>{feature.label}</span>
                  </span>

                  <h3 className='h2 fw-bold'>{feature.title}</h3>

                  <div className='fs-lg text-gray-700'>
                    {feature.description}
                  </div>
                  <div>
                    {feature.cta && (
                      <a
                        className='btn btn-secondary-subtle btn-xs mt-5'
                        href={feature.ctaLink}
                      >
                        {feature.cta}&nbsp;→
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`col-12 col-lg-7 ${
                    featureIndex % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
                  }`}
                >
                  <div className={`mb-6 mb-lg-0 text-center`}>
                    <img
                      src={feature.imgSrc}
                      alt={feature.imgAlt}
                      className='img-fluid w-lg-50'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='alert alert-dark' role='alert'>
                Learn more about API mocking with our{' '}
                <a
                  href='/articles/what-is-api-mocking/'
                  className='text-gray-500'
                >
                  complete guide
                </a>
                !
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
