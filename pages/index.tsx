import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import AlternatedFeatures from '../components/alternated-features';
import Card from '../components/card';
import CompanyLogos from '../components/company-logos';
import Hero from '../components/hero';
import LandingCta from '../components/landing-cta';
import Meta from '../components/meta';
import Quote from '../components/quote';
import SocialProof from '../components/social-proof';
import Sponsors from '../components/sponsors';
import Testimonial from '../components/testimonial';
import Typed from '../components/typed';
import { testimonials } from '../data/testimonials';
import Layout from '../layout/layout';

const benefits = [
  {
    title: 'Instant & Local-First',
    description:
      'Start in seconds with zero account creation or cloud dependencies. Fast, zero-latency local execution.',
    icon: 'icon-speed'
  },
  {
    title: 'Realistic Scenarios',
    description:
      'Simulate real-world conditions with dynamic templating, Faker data, route rules, and custom delays.',
    icon: 'icon-tune'
  },
  {
    title: 'Automate CI & Tests',
    description:
      'Run headless mocks in CI/CD pipelines, Docker, or GitHub Actions using the lightweight CLI.',
    icon: 'icon-code'
  },
  {
    title: 'Team Collaboration',
    description:
      'Synchronize mocks in real time, manage team access, and host remote deployments with Mockoon Pro.',
    icon: 'icon-groups'
  }
];

const comparison = {
  without: [
    'Frontend teams blocked waiting for backend APIs to be ready',
    'Costly third-party API quotas and rate limits during development',
    'Flaky test environments and hard-to-reproduce edge cases',
    'Complex, fragile staging server and sandbox setups',
    'Slow feedback loops between API designers and frontend consumers'
  ],
  with: [
    'Parallel development with mock contracts from day one',
    'Unlimited local API calls with zero infrastructure cost',
    'Test any scenario: errors, timeouts, rate limits, and chaos',
    'Fast, isolated mocks runnable locally or in headless CI/CD',
    'Rapid feedback, live synchronization, and real-time collaboration'
  ]
};

const hpFeatures = [
  {
    title:
      'Create <span class="text-primary">realistic mock endpoints</span> instantly',
    description:
      'Build mock APIs with authentic REST endpoints, HTTP methods, and response codes. Define GET, POST, PUT, DELETE operations with dynamic JSON responses using templating helpers and Faker.js.',
    imgSrc: '/images/home/create-realistic-mock-endpoints.png',
    imgAlt: 'Mockoon application screenshot showing mock API creation',
    cta: 'View all features',
    ctaLink: '/features/'
  },
  {
    title:
      '<span class="text-primary">Simulate</span> complex scenarios and edge cases',
    description:
      'Define multiple responses per route and trigger them dynamically with rules matching headers, query params, body payloads, or cookies. Easily test errors, timeouts, and rate limits.',
    imgSrc: '/images/home/simulate-complex-scenarios.png',
    imgAlt:
      'Mockoon application screenshot showing response rules configuration',
    cta: 'Discover the rules system',
    ctaLink: '/tutorials/responses-and-rules/'
  },
  {
    title:
      '<span class="text-primary">Intercept</span> and record real API requests',
    description:
      'Forward requests to your real APIs, record them, and automatically generate mock routes from live traffic to inspect payloads or work offline without friction.',
    imgSrc: '/images/home/forward-debug-requests.png',
    imgAlt: 'Mockoon requests recording screenshot',
    cta: 'Discover request recording',
    ctaLink: '/tutorials/requests-recording-auto-mocking/'
  },
  {
    title:
      '<span class="text-primary">Automate testing</span> in CI/CD pipelines',
    description:
      'Use the lightweight CLI and official Docker image to run mock servers headlessly in GitHub Actions, GitLab CI, or local test suites with zero external dependencies.',
    imgSrc: '/images/home/api-mock-self-host-cli.png',
    imgAlt: 'Mockoon CLI start and list commands screenshot',
    cta: 'Discover the CLI',
    ctaLink: '/cli/'
  },
  {
    title:
      '<span class="text-primary">Collaborate</span> with your team in real time',
    description:
      'Self-host Mockoon Pro on your own infrastructure to synchronize mock APIs across teams, manage instances, and streamline organization-wide API governance.',
    imgSrc: '/images/home/mockoon-pro-real-time-collaboration.png',
    imgAlt: 'Mockoon Pro interface showing real-time team collaboration',
    cta: 'Discover Mockoon Pro',
    ctaLink: '/pro/'
  }
];

const meta = {
  title: 'Create mock APIs in seconds with Mockoon',
  description:
    'Design and run mock APIs locally with our free open-source tools, or self-host Mockoon Pro for team collaboration and managed mock deployments.'
};

const caseStudies = [
  {
    quotation:
      'Mockoon helped me bridge the gap with my fellow front-end developers during development. Being able to quickly mock the new/changed endpoints has made connecting frontend and backend bits a breeze.',
    link: '/blog/contributor-spotlight-lukas-spiss-onefootball/',
    authorImg: '/images/external/onefootball/lukas-spiss.jpg',
    authorImgAlt: 'Back-end Engineer at OneFootball',
    authorName: 'Lukas Spiss',
    authorPosition: 'Back-end Engineer',
    companyLogo: '/images/external/onefootball/logo.svg',
    companyLogoAlt: 'OneFootball logo'
  },
  {
    quotation:
      'Mockoon is an extremely easy and familiar tool to use which makes building up mock servers a breeze.',
    link: '/blog/contributor-spotlight-bradley-schofield-appwrite/',
    authorImg: '/images/external/appwrite/bradley-schofield.png',
    authorImgAlt: 'Full Stack Engineer at Appwrite',
    authorName: 'Bradley Schofield',
    authorPosition: 'Full Stack Engineer',
    companyLogo: '/images/external/appwrite/logo.svg',
    companyLogoAlt: 'Appwrite logo'
  },
  {
    quotation:
      'Mockoon is the answer to just about every mocking need you might have.',
    link: '/case-studies/impala-api-ux-user-research/',
    authorImg: '/images/external/impala/yasmin-desai.jpg',
    authorImgAlt: 'Senior Product Manager at Impala',
    authorName: 'Yasmin Desai',
    authorPosition: 'Senior Product Manager',
    companyLogo: '/images/external/impala/logo-dark.svg',
    companyLogoAlt: 'Impala logo'
  },
  {
    quotation:
      'Mockoon was easy to start with, was fast and lightweight. One clear purpose tool which immediately solved our problem.',
    link: '/case-studies/localazy-speed-development-api-mocking/',
    authorImg: '/images/external/localazy/jan-bilek.png',
    authorImgAlt: 'Product Manager at Localazy',
    authorName: 'Jan Bílek',
    authorPosition: 'Product Manager',
    companyLogo: '/images/external/localazy/logo-dark.svg',
    companyLogoAlt: 'Localazy logo'
  },
  {
    quotation:
      "We're using Mockoon to mock error scenarios and hard-to-reach situations. This allows us to test without a complicated setup and in a deterministic way.",
    link: '/blog/contributor-spotlight-harry-martland/',
    authorImg: '/images/external/bookingcom/harry-martland.jpg',
    authorImgAlt: 'Harry Martland, Principal Engineer at Booking.com',
    authorName: 'Harry Martland',
    authorPosition: 'Principal Engineer',
    companyLogo: '/images/external/bookingcom/logo.svg',
    companyLogoAlt: 'Booking.com logo'
  }
];

const HomePage: FunctionComponent = function () {
  const [selectedCaseStudies, setSelectedCaseStudies] = useState([]);

  useEffect(() => {
    setSelectedCaseStudies(
      caseStudies.sort(() => 0.5 - Math.random()).slice(0, 2)
    );
  }, []);

  return (
    <Layout
      footerBanner='newsletter'
      topBanner={{
        topBannerTimeEnd: new Date('2026-01-21T00:00:00Z'),
        content: (
          <>
            Join our <Link href={'/training/'}>live training session</Link> on{' '}
            <strong>Wednesday, January 21, 2026</strong> to master Mockoon and
            elevate your API mocking skills!{' '}
          </>
        )
      }}
    >
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="Create <span class='text-primary'>mock APIs</span> in seconds"
        subtitle='Stop waiting on unfinished backends or unstable third parties. Build in parallel, test edge cases with confidence, and ship reliable software faster.'
        cta={[
          {
            text: 'Download',
            link: '/download/'
          },
          {
            text: 'What is Mockoon?',
            link: '/what-is-mockoon/'
          }
        ]}
        mainPicture='/images/home/home-hero.png'
        mainPictureAlt='Mockoon application interface showing mock API creation and testing'
        mainPictureWidth={1200}
        mainPictureHeight={783}
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
      <section>
        <div className='container'>
          <Quote colorScheme='warning'>
            <h4 className='my-4 d-flex align-items-center'>
              <div>
                📢 <strong>Mockoon Pro</strong> is now available in beta.
                Self-host team collaboration, data synchronization, and API mock
                deployments on your own infrastructure.
              </div>
              <div className='ms-auto'>
                <a href='/blog/mockoon-pro-self-hosted-beta/'>
                  Read the announcement
                </a>
              </div>
            </h4>
          </Quote>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Why developers choose Mockoon
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
              <h2 className='fw-bold mb-4'>
                Traditional development vs API mocking
              </h2>
              <p className='text-muted mb-6'>
                See how Mockoon removes dependencies and keeps your delivery
                moving
              </p>
            </div>
          </div>

          <div className='row g-6 justify-content-around'>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-danger mb-4'>
                  <i className='icon-close me-2'></i>
                  Without Mockoon
                </h5>
                <ul className='list-unstyled'>
                  {comparison.without.map((item, index) => (
                    <li
                      key={index}
                      className={`d-flex ${
                        index < comparison.without.length - 1 ? 'mb-3' : 'mb-0'
                      }`}
                    >
                      <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                        <i className='icon icon-remove'></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-success mb-4'>
                  <i className='icon-check me-2'></i>
                  With Mockoon
                </h5>
                <ul className='list-unstyled'>
                  {comparison.with.map((item, index) => (
                    <li
                      key={index}
                      className={`d-flex ${
                        index < comparison.with.length - 1 ? 'mb-3' : 'mb-0'
                      }`}
                    >
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                        <i className='icon icon-add'></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='features' className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={hpFeatures} imgSize={[800, 454]} />
        </div>
      </section>

      <section className='py-5 py-lg-10 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-around'>
            {selectedCaseStudies.map((caseStudy, caseStudyIndex) => (
              <div
                key={`caseStudy${caseStudyIndex}`}
                className='col-12 col-lg-4 mb-8 mb-lg-0'
              >
                <blockquote className='d-flex flex-column h-100'>
                  <p className='quotation p-5 lead text-gray-700 mb-0'>
                    {caseStudy.quotation}
                    <br />
                    <a href={caseStudy.link} className='fs-5'>
                      Read more
                    </a>
                  </p>
                  <div className='d-flex align-items-center mt-auto'>
                    <div>
                      <div className='avatar avatar-xl'>
                        <img
                          className='avatar-img img-thumbnail rounded-circle mr-4'
                          src={caseStudy.authorImg}
                          alt={caseStudy.authorImgAlt}
                        />
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p className='fs-sm mb-0'>
                        <span className='fw-bold'>{caseStudy.authorName} </span>{' '}
                        -{' '}
                        <span className='text-gray-700'>
                          {caseStudy.authorPosition}
                        </span>
                      </p>
                      <div className='img-fluid mt-2'>
                        <img
                          src={caseStudy.companyLogo}
                          alt={caseStudy.companyLogoAlt}
                          style={{ maxHeight: '1.8rem' }}
                        />
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='py-5 py-lg-10 border-top bg-gradient-light-white'
        id='sponsors'
      >
        <Sponsors showLink={true} />
      </section>

      <section
        id='testimonials'
        className='border-top bg-gradient-light-white py-5 py-lg-10'
      >
        <div className='container'>
          <div className='row'>
            <div className='justify-content-center'>
              <div className='col-12 text-center'>
                <h2 className='fw-bold'>
                  Trusted by thousands of
                  <br />
                  <span className='text-primary'>
                    <Typed
                      options={{
                        strings: [
                          'developers',
                          'testers',
                          'product managers',
                          'UX researchers',
                          'API designers',
                          'technical writers'
                        ],
                        typeSpeed: 50,
                        backSpeed: 50,
                        backDelay: 700,
                        loop: true
                      }}
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row mt-5 justify-content-center'>
            <div
              className='col-md-6 col-lg-4 col-xl-4 d-flex text-center'
              key='testimonial0'
            >
              <Testimonial
                imgSrc={testimonials[0].imgSrc}
                name={testimonials[0].name}
              >
                {testimonials[0].text}
              </Testimonial>
            </div>
          </div>
          <div className='row mt-5 justify-content-center'>
            {testimonials.map((testimonial, testimonialIndex) => {
              return (
                testimonialIndex > 0 && (
                  <div
                    className='col-md-6 col-lg-4 col-xl-3 d-flex text-center'
                    key={`testimonial${testimonialIndex}`}
                  >
                    <Testimonial
                      imgSrc={testimonial.imgSrc}
                      name={testimonial.name}
                      small
                    >
                      {testimonial.text}
                    </Testimonial>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      <section
        id='case-studies'
        className='border-top bg-gradient-light-white py-5 py-lg-10'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 text-center pb-4'>
              <h2 className='mb-1 fw-bold'>Case studies</h2>
              <p className='text-gray-700 fs-lg'>
                Discover how Mockoon's users improve their API design and
                development workflows with our fast and easy to use API tooling.
              </p>
            </div>

            <div className='col-12 text-center'>
              <div className='row'>
                <div className='mx-auto my-lg-3 col-12 col-lg-4 '>
                  <Card
                    data={{
                      title: 'Uses Mockoon to conduct API UX research',
                      imageSrc: '/images/external/impala/logo-dark.svg',
                      imageAlt: 'Impala logo',
                      links: [
                        {
                          src: '/case-studies/impala-api-ux-user-research/',
                          text: 'Read more'
                        }
                      ]
                    }}
                    vertical
                    cover={false}
                    border={true}
                    borderColor={'#000'}
                    synchronizedColors={true}
                  />
                </div>
                <div className='mx-auto my-lg-3 col-12 col-lg-4 '>
                  <Card
                    data={{
                      title:
                        'Uses API mocking to speed up application development and testing',
                      imageSrc: '/images/external/localazy/logo-dark.svg',
                      imageAlt: 'Localazy logo',
                      links: [
                        {
                          src: '/case-studies/localazy-speed-development-api-mocking/',
                          text: 'Read more'
                        }
                      ]
                    }}
                    vertical
                    cover={false}
                    border={true}
                    borderColor={'#066fef'}
                    synchronizedColors={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingCta />
    </Layout>
  );
};

export default HomePage;
