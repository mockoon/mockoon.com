import AlternatedFeatures from '../../components/alternated-features';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

export const useCases = [
  {
    title:
      'Faster <span class="text-primary">onboarding</span> for new developers',
    description:
      'Mocking APIs significantly enhances the developer onboarding process by providing a stable and consistent environment for new team members. It helps new developers understand the system architecture and functionality more quickly, reducing the learning curve. Furthermore, it eliminates the need for managing security credentials and dealing with potential downtimes, making the onboarding process smoother and more efficient.',
    imgSrc: '/images/use-cases/api-mocking-speeds-up-developer-onboarding.svg',
    imgAlt: 'Two people coding',
    cta: 'Learn more',
    ctaLink: '/use-cases/faster-developer-onboarding/'
  },
  {
    title: 'Speed up <span class="text-primary">development lifecycle</span>',
    description:
      'Mocking APIs accelerates your development lifecycle and reduces dependencies between your development teams, particularly the frontend and backend. It serves as a silver bullet when an API is still under development, allowing teams to work in parallel without waiting for the actual API to be ready. Additionally, it helps avoid reliance on external APIs that may experience downtimes or require security credentials, which can be impractical during development.',
    imgSrc: '/images/use-cases/api-mocking-speeds-up-development-lifecycle.svg',
    imgAlt: 'Four people working together on a project',
    cta: 'Learn more',
    ctaLink: '/use-cases/speed-up-development-lifecycle/'
  },
  {
    title:
      'Accelerate third-party API <span class="text-primary">integration</span>',
    description:
      'With API mocking, you can begin working with third-party APIs almost immediately. Instead of registering for an account, configuring access, and provisioning tokens, you can mock the necessary API endpoints and start integrating them into your front-end or back-end application right away.',
    imgSrc: '/images/use-cases/accelerate-third-party-api-integration.svg',
    imgAlt: 'one person connecting to multiple applications',
    cta: 'Learn more',
    ctaLink: '/use-cases/accelerate-third-party-api-integration/'
  },
  {
    title: 'Enhance your <span class="text-primary">integration testing</span>',
    description:
      'API mocking provides the flexibility needed to run complex integration tests for interconnected systems, microservices, or third-party API integrations. It enables you to perform faster and more comprehensive tests without relying on third-party services, covering more edge cases such as slower response times and random failures.',
    imgSrc:
      '/images/use-cases/api-mocking-software-improves-integration-testing.svg',
    imgAlt: 'visual representation of software testing',
    cta: 'Learn more',
    ctaLink: '/use-cases/enhanced-integration-testing/'
  },
  {
    title:
      'Better <span class="text-primary">API design</span> and user experience research',
    description:
      "The design phase of an API can greatly benefit from API mocking, particularly when conducting user experience research or focus groups with potential users. It allows you to seamlessly and quickly change and refine the API contract without waiting for server deployment or the development team's availability.",
    imgSrc: '/images/use-cases/api-mocking-better-api-design-ux-research.svg',
    imgAlt: 'Persons discussing in front of a white board',
    cta: 'Learn more',
    ctaLink: '/use-cases/better-api-design-ux-research/'
  },
  {
    title: 'More engaging client <span class="text-primary">demos</span>',
    description:
      'Sometimes you need to make your APIs available to clients or users before they commit to using them. With API mocking, you can provide a simulation of the actual API for testing purposes without giving access to your product or provisioning credentials. Internal or pre-sales demos can also benefit from API mocking in the same way.',
    imgSrc:
      '/images/use-cases/api-mocking-creates-more-engaging-client-demo.svg',
    imgAlt: 'Person demoing an application',
    cta: 'Learn more',
    ctaLink: '/use-cases/more-engaging-client-demos/'
  }
];

export default function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='API mocking use cases'
        description='Discover how mocking APIs with Mockoon can accelerate and streamline your applications development, integration, testing, and demos'
        ogType='article'
      />
      <Hero
        title='API mocking <span class="text-primary">use cases</span>'
        subtitle='Discover how mocking APIs with Mockoon can accelerate and streamline your applications development, integration, testing, and demos'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={useCases} imgClassName='w-lg-50' />
        </div>
      </section>

      <section className='pb-6 pb-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center'>
              <a href='/download/' className='btn btn-primary mb-6 lift'>
                Download Mockoon for free{' '}
                <i className='icon-arrow_forward ms-2'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
