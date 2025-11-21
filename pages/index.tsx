import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import AlternatedFeatures from '../components/alternated-features';
import Card from '../components/card';
import CompanyLogos from '../components/company-logos';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Quote from '../components/quote';
import SocialProof from '../components/social-proof';
import Sponsors from '../components/sponsors';
import Testimonial from '../components/testimonial';
import Typed from '../components/typed';
import { hpHighlights } from '../data/hp-highlights';
import { testimonials } from '../data/testimonials';
import Layout from '../layout/layout';

const hpFeatures = [
  {
    title:
      'Highly <span class="text-primary">customizable and powerful</span> mock APIs',
    description:
      'Mockoon offers a wide range of features to create the most realistic mock APIs: dynamic templating, rules matching, JSON databases, proxy mode, webhooks, TLS support, and more.',
    imgSrc: '/images/home/customize-mock-apis.png',
    imgAlt:
      'Mockoon customizable interface screenshot with multiple features displayed',
    cta: 'View the full list of features',
    ctaLink: '/features/'
  },
  {
    title:
      'Create <span class="text-primary">realistic scenarios</span> and test edge cases',
    description:
      'Simulate real-life scenarios and improve integration testing with dynamic templating and rules-matching systems. Test your app resilience with chaos engineering features.',
    imgSrc: '/images/home/api-mocks-with-realistic-scenarios.png',
    imgAlt:
      'Mockoon main interface screenshot with response rules and templating system',
    cta: 'Discover the rules system',
    ctaLink: '/tutorials/responses-and-rules/'
  },
  {
    title:
      '<span class="text-primary">Integrate</span> with your existing APIs and workflows',
    description:
      'Forward requests to your real APIs, record and replay them. Ensure your app performs flawlessly with real-world data and responses.',
    imgSrc: '/images/home/forward-debug-requests.png',
    imgAlt: 'Mockoon requests recording screenshot',
    cta: 'Discover the requests recording',
    ctaLink: '/tutorials/requests-recording-auto-mocking/'
  },
  {
    title:
      '<span class="text-primary">Collaborate</span> with your team in real-time',
    description:
      'Supercharge your team productivity with Mockoon Cloud. Collaborate on your mock APIs in real-time, deploy them to the cloud, and share them with your team.',
    imgSrc: '/images/home/mockoon-cloud.png',
    imgAlt: 'mockoon cloud feature linked together',
    cta: 'Discover our Cloud',
    ctaLink: '/cloud/'
  },
  {
    title: '<span class="text-primary">Self-host</span> your mock APIs',
    description:
      'Use the CLI and the Docker image to run your mock REST APIs on servers and headless environments: GitHub Actions, CircleCI, TravisCI, etc.',
    imgSrc: '/images/home/api-mock-self-host-cli.png',
    imgAlt: 'Mockoon CLI start and list commands screenshot',
    cta: 'Discover the CLI',
    ctaLink: '/cli/'
  },
  {
    title:
      '<span class="text-primary">Deploy</span> your mock APIs in cloud functions',
    description:
      'Deploy your mock REST APIs in cloud functions, compatible with most providers: AWS Lambda, GCP Functions, Firebase Functions, etc.',
    imgSrc: '/images/home/api-mock-serverless-hosting.png',
    imgAlt: 'Mockoon CLI start and list commands screenshot',
    cta: 'Discover the serverless package',
    ctaLink: '/serverless/'
  },
  {
    title:
      '<span class="text-primary">Privacy</span> friendly and <span class="text-primary">offline</span> first',
    description:
      'Our tools are offline first and require no account creation. They are privacy-friendly, making them the best choice for highly regulated or high-security environments.',
    imgSrc: '/images/home/api-mocking-privacy-friendly-offline.png',
    imgAlt: 'Mockoon interface with a security lock'
  }
];

const meta = {
  title: 'Create mock APIs in seconds with Mockoon',
  description:
    'Mockoon is the easiest and quickest way to run mock REST API servers. No remote deployment, no account required, free, open source and cross-platform.'
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
        topBannerTimeEnd: new Date('2026-01-15T00:00:00Z'),
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
        title="Create <span className='text-primary'>mock APIs</span> in seconds"
        subtitle='Mockoon is the easiest and quickest way to design and run mock REST APIs.<br>No remote deployment, no account required, <strong>free</strong> and <strong>open-source</strong>.'
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
        mainPicture='/images/hp-hero.png'
        mainPictureAlt='Mockoon screenshot with people working'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      >
        <SocialProof />
      </Hero>
      <section>
        <div className='container'>
          <Quote colorScheme='warning'>
            <h4 className='my-4 d-flex align-items-center'>
              <div>
                📢 <strong>Cloud deployments</strong> are now available in{' '}
                <strong>Mockoon Cloud</strong>. Supercharge your API development
                now!
              </div>
              <div className='ms-auto'>
                <a href='/blog/mock-api-cloud-deployments-release/'>
                  Learn more
                </a>
              </div>
            </h4>
          </Quote>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-5 py-lg-10'>
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

      <section className='py-5 py-lg-10 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row'>
            {hpHighlights.map((highlight, highlightIndex) => (
              <div
                className='col-12 col-lg-4'
                key={`highlight${highlightIndex}`}
              >
                <div className='row'>
                  <div className='col-12 col-md-8 text-primary mb-3'>
                    <img
                      src={highlight.imgSrc}
                      className='img-fluid p-4'
                      alt={highlight.imgAlt}
                      width={800}
                      height={522}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className='fw-bold'>{highlight.title}</h3>

                    <p
                      className='text-gray-700 mb-6 mb-md-0'
                      dangerouslySetInnerHTML={{
                        __html: highlight.description
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='features' className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={hpFeatures} imgSize={[1200, 783]} />
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

      <section
        className='py-5 py-lg-10 border-top bg-gradient-light-white'
        id='sponsors'
      >
        <Sponsors showLink={true} showHonorary={false} />
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
    </Layout>
  );
};

export default HomePage;
