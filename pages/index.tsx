import React from 'react';
import Cards from '../components/cards';
import Hero from '../components/hero';
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

        <Hero
          title={meta.title}
          subtitle={meta.description}
          cta={{ text: 'Download', link: '#download' }}
          mainPicture='/images/screenshot.png'
          mainPictureAlt='Application screenshot'
        />

        <section className='section' id='download'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h3 className='title mb-0'>
                  Download Mockoon{' '}
                  <a
                    href={
                      'https://github.com/mockoon/mockoon/releases/tag/v' +
                      version
                    }
                    rel='noopener'
                    target='_blank'
                  >
                    <span className='is-size-6'>v{version}</span>
                  </a>
                </h3>
                <p className='is-size-7'>
                  Mockoon is released under the MIT license.
                </p>
              </div>
            </div>

            <div className='columns'>
              <div className='column is-4 has-text-centered'>
                <p className='is-size-1 is-brand mb20'>
                  <i className='icon-windows'></i>
                </p>
                <a
                  className='button is-primary is-outlined'
                  href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.exe`}
                  rel='noopener'
                  onClick={() =>
                    ga('send', 'event', 'application', 'download', 'windows')
                  }
                >
                  <span className='icon'>
                    <i className='icon-download'></i>
                  </span>
                  <span>exe installer</span>
                </a>
                <p className='content is-light'>
                  or <code>choco install mockoon</code>
                </p>
              </div>
              <div className='column is-4 has-text-centered'>
                <p className='is-size-1 is-brand mb20'>
                  <i className='icon-linux'></i>
                </p>
                <div className='buttons has-addons is-centered is-marginless'>
                  <a
                    className='button is-primary is-outlined is-marginless'
                    href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.deb`}
                    rel='noopener'
                    onClick={() =>
                      ga('send', 'event', 'application', 'download', 'linux')
                    }
                  >
                    <span className='icon'>
                      <i className='icon-download'></i>
                    </span>
                    <span>deb</span>
                  </a>
                  <a
                    className='button is-primary is-outlined is-marginless'
                    href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.rpm`}
                    rel='noopener'
                    onClick={() =>
                      ga('send', 'event', 'application', 'download', 'linux')
                    }
                  >
                    <span className='icon'>
                      <i className='icon-download'></i>
                    </span>
                    <span>rpm</span>
                  </a>
                  <a
                    className='button is-primary is-outlined is-marginless'
                    href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.AppImage`}
                    rel='noopener'
                    onClick={() =>
                      ga('send', 'event', 'application', 'download', 'linux')
                    }
                  >
                    <span className='icon'>
                      <i className='icon-download'></i>
                    </span>
                    <span>AppImage</span>
                  </a>
                </div>
                <p className='content is-light'>
                  or <code>sudo snap install mockoon</code>
                  <br />
                  <code>yay -S mockoon-bin</code>
                </p>
              </div>
              <div className='column has-text-centered'>
                <p className='is-size-1 is-brand mb20'>
                  <i className='icon-apple'></i>
                </p>
                <a
                  className='button is-primary is-outlined'
                  href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.dmg`}
                  rel='noopener'
                  onClick={() =>
                    ga('send', 'event', 'application', 'download', 'osx')
                  }
                >
                  <span className='icon'>
                    <i className='icon-download'></i>
                  </span>
                  <span>dmg</span>
                </a>
                <p className='content is-light'>
                  or <code>brew install --cask mockoon</code>
                </p>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <p className='has-text-centered pt-4'>
                <a
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
        </section>

        <section className='section' id='features'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h3 className='title'>Bring API mocking to the next level</h3>
              </div>
            </div>

            <div className='columns'>
              <div className='column has-text-centered'>
                <figure className='image rounded is-75 cb mb20'>
                  <img
                    src='/images/feature1.png'
                    alt='Mockoon routes list view'
                    loading='lazy'
                  />
                </figure>
                <div className='content'>
                  <p className='title is-4'>
                    Fast mock APIs that runs everywhere
                  </p>
                  <p>
                    Create an unlimited number of mock APIs and run them in
                    parallel locally or on a server with the CLI.
                  </p>
                </div>
              </div>
              <div className='column has-text-centered'>
                <figure className='image rounded is-75 cb mb20'>
                  <img
                    src='/images/feature2.png'
                    alt='Routes configuration'
                    loading='lazy'
                  />
                </figure>
                <div className='content'>
                  <p className='title is-4'>Complete control</p>
                  <p>
                    Customize routes: HTTP methods, regex paths, HTTP status,
                    file serving, custom headers...
                  </p>
                </div>
              </div>
              <div className='column has-text-centered'>
                <figure className='image rounded is-75 cb mb20'>
                  <img
                    src='/images/feature3.png'
                    alt='Routes JSON body'
                    loading='lazy'
                  />
                </figure>
                <div className='content'>
                  <p className='title is-4'>... and more</p>
                  <p>
                    Import / export, OpenAPI compatibility, JSON templating,
                    auto save, proxy mode, HTTPS, CORS support...
                  </p>
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column has-text-centered'>
                <a href='/features/'>Complete list of features</a>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .media-content {
            font-size: 0.2rem;
          }
        `}</style>
        <section className='section' id='testimonials'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h3 className='title'>What developers say</h3>
              </div>
            </div>

            <div className='columns'>
              <div className='column is-one-quarter'>
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
              </div>
              <div className='column is-one-quarter'>
                <Testimonial
                  link='https://twitter.com/chumaumenze/status/1276429472057765888'
                  imgSrc='/images/testimonials/OfPPfWh9_400x400.jpg'
                  name='Chuma Umenze'
                  username='@chumaumenze'
                >
                  Mockoon is the best! It's the easiest and quickest way to mock
                  APIs locally.
                </Testimonial>
              </div>
              <div className='column is-one-quarter'>
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
              <div className='column is-one-quarter'>
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
              </div>
            </div>
            <div className='columns'>
              <div className='column is-one-quarter'>
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
              </div>
              <div className='column is-one-quarter'>
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
              </div>
              <div className='column is-one-quarter'>
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
              <div className='column is-one-quarter'>
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

        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h3 className='title'>Case studies</h3>
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
                    header: {},
                    excerpt:
                      'Learn how Impala uses Mockoon to conduct API user research'
                  } as ArticleData
                }
              ]}
              small={true}
            />
          </div>
        </section>

        <Newsletter />
      </Layout>
    );
  }
}

export default Index;
