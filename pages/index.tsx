import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../components/card';
import CompanyLogos from '../components/company-logos';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Quote from '../components/quote';
import Sponsors from '../components/sponsors';
import Testimonial from '../components/testimonial';
import Typed from '../components/typed';
import { hpFeatures } from '../data/hp-features';
import { hpHighlights } from '../data/hp-highlights';
import { testimonials } from '../data/testimonials';
import Layout from '../layout/layout';

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
    <Layout footerBanner='newsletter'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="Create <span className='text-primary'>mock APIs</span> in seconds"
        subtitle='Mockoon is the easiest and quickest way to design and run mock REST APIs.<br>No remote deployment, no account required, <strong>free</strong> and <strong>open-source</strong>.'
        cta={[
          {
            text: 'Download',
            link: '/download/#download-section'
          },
          {
            text: 'Documentation',
            link: '/docs/latest/about/'
          }
        ]}
        mainPicture='/images/hp-hero.png'
        mainPictureAlt='Mockoon screenshot with people working'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />
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
                <a href='/cloud/'>Learn more</a>
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
          {hpFeatures.map((feature, featureIndex) => {
            return (
              <div
                className='row py-5 py-lg-8 align-items-center justify-content-between'
                key={`feature${featureIndex}`}
              >
                <div
                  className={`col-12 col-lg-4 pb-sm-10 pb-lg-0 ${
                    featureIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
                  }`}
                >
                  <span className='badge rounded-pill text-bg-primary-subtle mb-3'>
                    <span className='h6 text-uppercase'>{feature.label}</span>
                  </span>

                  <h3 className='h2 fw-bold'>{feature.title}</h3>

                  <p className='fs-lg text-gray-700'>{feature.description}</p>
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
                  className={`col-12 col-lg-8 ${
                    featureIndex % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
                  }`}
                >
                  <div
                    className={`mb-6 mb-lg-0 ${
                      featureIndex % 2 === 0 ? 'text-start' : 'text-end'
                    }`}
                  >
                    <img
                      src={feature.imgSrc}
                      alt={feature.imgAlt}
                      className='img-fluid p-2'
                      width={1200}
                      height={783}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='py-5 py-lg-10 border-top bg-gradient-light-white'>
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
                link={testimonials[0].link}
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
                      link={testimonial.link}
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
