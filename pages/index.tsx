import React from 'react';
import Typed from 'react-typed';
import Cards from '../components/cards';
import DownloadSection from '../components/download-section';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Testimonial from '../components/testimonial';
import { hpFeatures } from '../data/hp-features';
import { testimonials } from '../data/testimonials';
import Layout from '../layout/layout';
import { ArticleData } from '../models/common.model';
const version = require('../package.json').version;

const meta = {
  title: 'Create mock APIs in seconds',
  description:
    'Mockoon is the easiest and quickest way to run mock REST API servers. No remote deployment, no account required, free, open source and cross-platform.'
};

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Meta title={meta.title} description={meta.description} />

        <Hero
          title="Create <span class='text-primary'>mock APIs</span> in seconds"
          subtitle='Mockoon is the easiest and quickest way to design and run mock REST API.<br>No remote deployment, no account required, <strong>free</strong> and <strong>open-source</strong>.'
          cta={[
            {
              text: 'Download',
              link: '/download/'
            },
            {
              text: 'Documentation',
              link: '/docs/latest/about/'
            }
          ]}
          mainPicture='/images/hp-hero.png'
          mainPictureAlt='Mockoon screenshot with people working'
        />

        <section className='bg-gray-200 py-5 py-lg-10' id='download'>
          <div className='container'>
            <div className='row'>
              <div className='justify-content-center col-12 text-center'>
                <h2 className='mb-4'>
                  Download Mockoon{' '}
                  <a
                    href={
                      'https://github.com/mockoon/mockoon/releases/tag/v' +
                      version
                    }
                    rel='noopener'
                    target='_blank'
                  ></a>
                </h2>
              </div>
            </div>

            <DownloadSection />
          </div>
        </section>

        <section className='py-5 py-lg-10'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='row'>
                  <div className='col-10 col-lg-8 text-primary mb-3'>
                    <img
                      src='/images/highlight1.png'
                      className='img-fluid p-4'
                      alt=''
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h3>API mocking that saves you time</h3>

                    <p className='text-muted mb-6 mb-md-0'>
                      Get working mock REST APIs in seconds with the intuitive
                      and easy to use interface.
                      <br />
                      Run them everywhere with the CLI.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='row'>
                  <div className='col-10 col-lg-8 text-primary mb-3'>
                    <img
                      src='/images/highlight2.png'
                      className='img-fluid p-4'
                      alt=''
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h3>Integrates in your workflow</h3>

                    <p className='text-muted mb-6 mb-md-0'>
                      Compatible with the OpenAPI specification, Mockoon
                      integrates perfectly with your existing applications and
                      API design workflow.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='row'>
                  <div className='col-10 col-lg-8 text-primary mb-3'>
                    <img
                      src='/images/highlight3.png'
                      className='img-fluid p-4'
                      alt=''
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h3>Complete tooling</h3>

                    <p className='text-muted mb-0'>
                      Go beyond mocking with advanced features and tackle the
                      most complex situation with HTTP requests recording,
                      proxying, integration testing, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className='py-5 py-lg-10'>
          <div className='container text-lg-start text-center'>
            {hpFeatures.map((feature, featureIndex) => {
              return (
                <div
                  className='row py-3 py-lg-5 align-items-center justify-content-between'
                  key={`feature${featureIndex}`}
                >
                  <div
                    className={`col-12 col-lg-5 ${
                      featureIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
                    }`}
                  >
                    <span className='badge rounded-pill bg-secondary-soft mb-3'>
                      <span className='h6 text-uppercase'>{feature.label}</span>
                    </span>

                    <h3 className='h2'>{feature.title}</h3>

                    <p className='fs-lg text-gray-700 mb-8 mb-lg-0'>
                      {feature.description}
                    </p>
                    <div>
                      {feature.cta && (
                        <a
                          className='btn btn-secondary-soft btn-xs mt-2'
                          href={feature.ctaLink}
                        >
                          {feature.cta}&nbsp;→
                        </a>
                      )}
                    </div>

                    {feature.keypoints && (
                      <div className='d-flex flex-wrap'>
                        {feature.keypoints.map((keypoint, kpIndex) => {
                          return (
                            <div
                              className='d-flex flex-grow-1'
                              key={`feature${featureIndex}kp${kpIndex}`}
                            >
                              <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                                ✔
                              </div>
                              <p className='text-success'>{keypoint}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div
                    className={`col-12 col-lg-7 ${
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
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id='testimonials' className='bg-gray-200 py-5 py-lg-10'>
          <div className='container'>
            <div className='row'>
              <div className='justify-content-center'>
                <div className='col-12 text-center'>
                  <h2>
                    Trusted by thousands of
                    <br />
                    <Typed
                      strings={[
                        'developers',
                        'testers',
                        'product managers',
                        'UX researchers',
                        'API designers',
                        'technical writers'
                      ]}
                      typeSpeed={50}
                      backSpeed={50}
                      backDelay={700}
                      loop={true}
                      className={'text-primary'}
                    />
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

        <section id='case-studies' className='py-5 py-lg-10'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <h2 className='mb-1'>Case studies</h2>
              </div>

              <div className='col-12 text-center'>
                <Cards
                  path='case-studies'
                  articles={[
                    {
                      slug: 'impala-api-ux-user-research',
                      data: {
                        title: 'API UX research with Mockoon',
                        image: 'impala-logo-black.svg',
                        imageAlt: 'Impala logo',
                        header: {},
                        excerpt:
                          'Learn how Impala uses Mockoon to conduct API user research'
                      } as ArticleData
                    }
                  ]}
                  small
                  cover={false}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;
