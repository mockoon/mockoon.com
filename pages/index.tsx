import React from 'react';
import Cards from '../components/cards';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Testimonial from '../components/testimonial';
import Layout from '../layout/layout';
import { ArticleData } from '../models/common.model';
const version = require('../package.json').version;

const meta = {
  title: 'Create mock APIs in seconds',
  description:
    'Mockoon is the easiest and quickest way to run mock API servers locally.<br>No remote deployment, no account required, free, open source and cross-platform.'
};

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Meta title={meta.title} description={meta.description} />

        <section className='position-relative py-8 py-md-11 mb-9'>
          <div className='shape shape-fluid-x shape-blur-1 svg-shim text-gray-200'></div>

          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-md-6 order-md-2'>
                <div className='shape shape-blur-1 svg-shim text-gray-200'></div>
                <div className='img-skewed img-skewed-start mb-8 mb-md-0'>
                  <img
                    src='/images/screenshot.png'
                    alt='Mockoon screenshot'
                    className='screenshot img-fluid mw-md-130'
                    data-aos='img-skewed-item-start'
                    data-aos-delay='100'
                  />
                </div>
              </div>
              <div className='col-12 col-md-6 order-md-1' data-aos='fade-up'>
                <h1 className='display-3 text-center text-md-start'>
                  Create <span className='text-primary'>mock APIs</span> in
                  seconds
                </h1>

                <p
                  className='lead text-muted mb-6 mb-md-8'
                  dangerouslySetInnerHTML={{ __html: meta.description }}
                ></p>

                <a
                  href='#download'
                  className='btn btn-primary-soft shadow lift me-1'
                >
                  Download <i className='icon-download'></i>
                </a>
                <a
                  href='/docs/latest/about/'
                  className='btn btn-primary-soft lift'
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gray-200 py-8 py-md-11'>
          <div className='container'>
            <div className='row'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-10 col-lg-7 text-center'>
                  <h2 className='fw-bold mb-1'>
                    Download Mockoon{' '}
                    <a
                      href={
                        'https://github.com/mockoon/mockoon/releases/tag/v' +
                        version
                      }
                      rel='noopener'
                      target='_blank'
                    >
                      <span className='badge bg-info-soft'>v{version}</span>
                    </a>
                  </h2>

                  <p className='fs-lg text-muted mb-7 mb-md-9'>
                    Mockoon is released under the MIT license.
                  </p>
                </div>
              </div>
              <div
                className='col-12 col-md-4 text-center py-2'
                data-aos='fade-up'
              >
                <div className='icon text-primary mb-3'>
                  <i className='icon-windows'></i>
                </div>

                <h3></h3>

                <div className='text-muted mb-6 mb-md-0'>
                  <div className='btn-group'>
                    <a
                      className='btn btn-primary-soft d-flex align-items-center'
                      href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.exe`}
                      rel='noopener'
                      onClick={() =>
                        ga(
                          'send',
                          'event',
                          'application',
                          'download',
                          'windows'
                        )
                      }
                    >
                      {' '}
                      <span className='icon me-2'>
                        <i className='icon-download'></i>
                      </span>
                      <span>exe installer</span>
                    </a>
                  </div>
                  <div className='content p-3'>
                    or <code className='p-2'>choco install mockoon</code>
                  </div>
                </div>
              </div>

              <div
                className='col-12 col-md-4 text-center py-2'
                data-aos='fade-up'
              >
                <div className='icon text-primary mb-3'>
                  <i className='icon-linux'></i>
                </div>

                <h3></h3>

                <div className='text-muted mb-6 mb-md-0'>
                  <div className='btn-group'>
                    <a
                      className='btn btn-primary-soft d-flex align-items-center'
                      href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.deb`}
                      rel='noopener'
                      onClick={() =>
                        ga('send', 'event', 'application', 'download', 'linux')
                      }
                    >
                      {' '}
                      <span className='icon me-2'>
                        <i className='icon-download'></i>
                      </span>
                      <span>deb</span>
                    </a>

                    <a
                      className='btn btn-primary-soft d-flex align-items-center'
                      href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.rpm`}
                      rel='noopener'
                      onClick={() =>
                        ga('send', 'event', 'application', 'download', 'linux')
                      }
                    >
                      {' '}
                      <span className='icon me-2'>
                        <i className='icon-download'></i>
                      </span>
                      <span>rpm</span>
                    </a>

                    <a
                      className='btn btn-primary-soft d-flex align-items-center'
                      href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.AppImage`}
                      rel='noopener'
                      onClick={() =>
                        ga('send', 'event', 'application', 'download', 'linux')
                      }
                    >
                      {' '}
                      <span className='icon me-2'>
                        <i className='icon-download'></i>
                      </span>
                      <span>AppImage</span>
                    </a>
                  </div>
                  <div className='content p-3'>
                    or <code className='p-2'>sudo snap install mockoon</code>
                    <br />
                    <code className='p-2 mt-1'>yay -S mockoon-bin</code>
                  </div>
                </div>
              </div>
              <div
                className='col-12 col-md-4 text-center py-2'
                data-aos='fade-up'
              >
                <div className='icon text-primary mb-3'>
                  <i className='icon-apple'></i>
                </div>

                <h3></h3>

                <div className='text-muted mb-6 mb-md-0'>
                  <div className='btn-group'>
                    <a
                      className='btn btn-primary-soft d-flex align-items-center'
                      href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.dmg`}
                      rel='noopener'
                      onClick={() =>
                        ga('send', 'event', 'application', 'download', 'osx')
                      }
                    >
                      {' '}
                      <span className='icon me-2'>
                        <i className='icon-download'></i>
                      </span>
                      <span>dmg</span>
                    </a>
                  </div>
                  <div className='content p-3'>
                    or <code className='p-2'>brew install --cask mockoon</code>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='text-center'>
                <p className='has-text-centered pt-4'>
                  <a
                    className='btn btn-info-soft'
                    href='/cli/'
                    style={{
                      fontFamily:
                        'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
                    }}
                  >
                    ~$ Looking for the CLI?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className='py-8 py-md-11'>
          <div className='container'>
            <div className='row'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-10 col-lg-7 text-center'>
                  <h2 className='fw-bold mb-1'>
                    Bring API mocking to the next level
                  </h2>
                </div>
              </div>
            </div>

            <div className='row my-5 py-5 align-items-center justify-content-between'>
              <div className='col-12 col-md-6 col-lg-5 order-md-2'>
                <span className='badge rounded-pill bg-primary-soft mb-3'>
                  <span className='h6 text-uppercase'>Create</span>
                </span>

                <h2>Fast mock APIs that runs everywhere</h2>

                <p className='fs-lg text-gray-700 mb-8 mb-md-0'>
                  Create an unlimited number of mock APIs and run them in
                  parallel locally or on a server with the CLI.
                </p>
              </div>
              <div className='col-12 col-md-6 order-md-1' data-aos='fade-up'>
                <div className='mb-6 mb-md-0'>
                  <div className='col-md-12'>
                    <img
                      src='/images/feature1.png'
                      alt='Mockoon routes list view'
                      className='screenshot'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row my-5 py-5 align-items-center justify-content-between'>
              <div className='col-12 col-md-6 col-lg-5 order-md-1'>
                <span className='badge rounded-pill bg-primary-soft mb-3'>
                  <span className='h6 text-uppercase'>Customize</span>
                </span>

                <h2>Complete control</h2>

                <p className='fs-lg text-gray-700 mb-8 mb-md-0'>
                  Customize routes: HTTP methods, regex paths, HTTP status, file
                  serving, custom headers...
                </p>
              </div>
              <div className='col-12 col-md-6 order-md-2' data-aos='fade-up'>
                <div className='mb-6 mb-md-0'>
                  <div className='col-md-12'>
                    <img
                      src='/images/feature2.png'
                      alt='Routes configuration'
                      className='screenshot'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row my-5 py-5 align-items-center justify-content-between'>
              <div className='col-12 col-md-6 col-lg-5 order-md-2'>
                <span className='badge rounded-pill bg-primary-soft mb-3'>
                  <span className='h6 text-uppercase'>More</span>
                </span>

                <h2>... and more</h2>

                <p className='fs-lg text-gray-700 mb-8 mb-md-0'>
                  Import / export, OpenAPI compatibility, JSON templating, auto
                  save, proxy mode, HTTPS, CORS support...
                </p>
              </div>
              <div className='col-12 col-md-6 order-md-1' data-aos='fade-up'>
                <div className='mb-6 mb-md-0'>
                  <div className='col-md-12'>
                    <img
                      src='/images/feature3.png'
                      alt='Routes JSON body'
                      className='screenshot'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='text-center'>
                <p className='has-text-centered pt-4'>
                  <a className='btn btn-info-soft' href='/features/'>
                    Complete list of features
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='testimonials' className='bg-gray-200 py-8 py-md-11'>
          <div className='container'>
            <div className='row'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-10 col-lg-7 text-center'>
                  <h2 className='fw-bold'>What developers say</h2>
                </div>
              </div>
            </div>
            <div className='row mt-5' data-isotope='{"layoutMode": "masonry"}'>
              <div className='col-12 col-md-4 text-center' data-aos='fade-up'>
                <Testimonial
                  link='https://twitter.com/KechaAlex/status/1283134297067618306'
                  imgSrc='/images/testimonials/_9NFn5MH_400x400.jpg'
                  name='Alexandros'
                  username='@KechaAlex'
                >
                  I can wholeheartedly recommend{' '}
                  <a
                    href='https://twitter.com/GetMockoon'
                    rel='noopener'
                    target='_blank'
                  >
                    @GetMockoon
                  </a>{' '}
                  if you're looking for an easy way to{' '}
                  <a
                    href='https://twitter.com/hashtag/mock'
                    rel='noopener'
                    target='_blank'
                  >
                    #mock
                  </a>{' '}
                  Http-Endpoints locally.
                  <br />
                  This tool just works, it's super intuitive. Love it.❤️
                </Testimonial>
                <Testimonial
                  link='https://twitter.com/chumaumenze/status/1276429472057765888'
                  imgSrc='/images/testimonials/OfPPfWh9_400x400.jpg'
                  name='Chuma Umenze'
                  username='@chumaumenze'
                >
                  Mockoon is the best! It's the easiest and quickest way to mock
                  APIs locally.
                </Testimonial>
                <Testimonial
                  link='https://twitter.com/ubuntu/status/1321763987361509376'
                  imgSrc='/images/testimonials/cof_orange_hex_bigger.jpg'
                  name='Ubuntu'
                  username='@ubuntu'
                >
                  Developers! Mockoon is the easiest and quickest way to run
                  mock APIs locally. No remote deployment, no account required,
                  open source.
                  <br />
                  snap install mockoon
                </Testimonial>
              </div>

              <div className='col-12 col-md-4 text-center' data-aos='fade-up'>
                <Testimonial
                  link='https://twitter.com/rubeshgain/status/1243557172988051456'
                  imgSrc='/images/testimonials/F3baAGfY_400x400.jpg'
                  name='Rubesh Gain'
                  username='@rubeshgain'
                >
                  OMG its a life saving tool for FrontEnd and FullStack
                  developer. Mockoon is the easiest and quickest way to run mock
                  APIs locally. No remote deployment, no account required, open
                  source.
                </Testimonial>
                <Testimonial
                  link='https://twitter.com/nQaze/status/1239577212883554310'
                  imgSrc='/images/testimonials/NFa3Y9Uk_400x400.jpg'
                  name='Nabil Kazi'
                  username='@nQaze'
                >
                  Forgot to mention an important part of this article. I am
                  leveraging{' '}
                  <a
                    href='https://twitter.com/GetMockoon'
                    rel='noopener'
                    target='_blank'
                  >
                    @GetMockoon
                  </a>{' '}
                  to implement the APIs! <br />
                  All credit to{' '}
                  <a
                    href='https://twitter.com/255kb'
                    rel='noopener'
                    target='_blank'
                  >
                    @255kb
                  </a>{' '}
                  who developed this wonderful tool.
                </Testimonial>
                <Testimonial
                  link='https://twitter.com/Axel_V_py/status/1214821739613560832'
                  imgSrc='/images/testimonials/fCg5Iqt5_400x400.jpg'
                  name='Axel'
                  username='@Axel_V_py'
                >
                  <a
                    href='https://twitter.com/255kb'
                    rel='noopener'
                    target='_blank'
                  >
                    @255kb
                  </a>{' '}
                  Thanks for Mockoon! such a handy tool!
                </Testimonial>
              </div>

              <div className='col-12 col-md-4 text-center' data-aos='fade-up'>
                <Testimonial
                  link='https://twitter.com/nicola_orritos/status/1227168377275371520'
                  imgSrc='/images/testimonials/photo_small_400x400.jpg'
                  name='Nicola Orritos'
                  username='@nicola_orritos'
                >
                  Did I already say that Mockoon is awesome? Mockoon is the
                  easiest and quickest way I found to run mock APIs locally.{' '}
                  <a
                    href='https://twitter.com/hashtag/RestAPI'
                    rel='noopener'
                    target='_blank'
                  >
                    #RestAPI
                  </a>{' '}
                  <a
                    href='https://twitter.com/hashtag/Prototyping'
                    rel='noopener'
                    target='_blank'
                  >
                    #Prototyping
                  </a>{' '}
                  <a
                    href='https://twitter.com/hashtag/DeveloperTools'
                    rel='noopener'
                    target='_blank'
                  >
                    #DeveloperTools
                  </a>{' '}
                  <a
                    href='https://twitter.com/hashtag/OpenSource'
                    rel='noopener'
                    target='_blank'
                  >
                    #OpenSource
                  </a>
                  <br />
                  P.S. It&#39;s made with{' '}
                  <a
                    href='https://twitter.com/hashtag/Electron'
                    rel='noopener'
                    target='_blank'
                  >
                    #Electron
                  </a>{' '}
                  and this is a huge bonus in my eyes.
                </Testimonial>

                <Testimonial
                  link='https://twitter.com/deciomontanhani/status/1211713659824754689'
                  imgSrc='/images/testimonials/mAoZtKto_400x400.jpg'
                  name='Sr. Décio Montanhani'
                  username='@deciomontanhani'
                >
                  If you're a mobile/frontend developer and you're suffering
                  with DEV environment, start mocking your APIs with{' '}
                  <a
                    href='https://twitter.com/GetMockoon'
                    rel='noopener'
                    target='_blank'
                  >
                    @GetMockoon
                  </a>{' '}
                  . It's amazing! Thanks,{' '}
                  <a
                    href='https://twitter.com/255kb'
                    rel='noopener'
                    target='_blank'
                  >
                    @255kb
                  </a>{' '}
                  for creating this! I'm using every time that I develop new iOS
                  projects!
                </Testimonial>
              </div>
            </div>
          </div>
        </section>

        <section id='testimonials' className='py-8 py-md-11'>
          <div className='container'>
            <div className='row'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-10 col-lg-7 text-center'>
                  <h2 className='fw-bold'>Case studies</h2>
                </div>
              </div>

              <Cards
                path='case-studies'
                articles={[
                  {
                    slug: 'impala-api-ux-user-research',
                    data: {
                      title: 'API UX research with Mockoon',
                      image: 'impala-logo-black.svg',
                      imageAlt: 'Impala logo',
                      logo: 'impala-logo-black.svg',
                      logoAlt: 'Impala logo',
                      header: {},
                      excerpt:
                        'Learn how Impala uses Mockoon to conduct API user research'
                    } as ArticleData
                  }
                ]}
                medium={true}
              />
            </div>
          </div>
        </section>

        <Newsletter />
      </Layout>
    );
  }
}

export default Index;
