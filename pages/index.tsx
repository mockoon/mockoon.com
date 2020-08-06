import React from 'react';
import Donate from '../components/donate';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';
const version = require('../package.json').version;

const meta = { title: 'Mock API in seconds' };

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Meta
          title={meta.title}
          description='Mockoon is a free and open source desktop application allowing to quickly mock servers and API.'
        />

        <Hero
          title={meta.title}
          subtitle='Mockoon is the easiest and quickest way to run mock APIs locally.<br>No remote deployment, no account required, open source.'
          withDownloadCTA={true}
          mainPicture='/images/screenshot.png'
          mainPictureAlt='Application screenshot'
        />

        <section className='section' id='download'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h1 className='title'>
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
                </h1>
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
                  or <code>brew cask install mockoon</code>
                </p>
              </div>
            </div>

            <div className='columns'>
              <div className='column has-text-centered'>
                <p>
                  Mockoon is released under the MIT license. Feel free to{' '}
                  <a href='https://github.com/mockoon/mockoon'>contribute</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section' id='features'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h1 className='title'>Some great features!</h1>
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
                  <p className='title is-4'>Unlimited fast mocking</p>
                  <p>
                    Create an unlimited number of mock local servers and routes,
                    and run them in parallel.
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
                <a href='features'>Complete list of features</a>
              </div>
            </div>
          </div>
        </section>

        <Donate />

        <Newsletter />

        <section className='section' id='feedback'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h1 className='title'>Feedback welcome!</h1>
                <div className='content'>
                  <p>
                    You have found a bug, you have an idea? Submit them on
                    Mockoon's{' '}
                    <a href='https://github.com/mockoon/mockoon'>
                      GitHub repository
                    </a>
                    .
                  </p>
                  <p>You like Mockoon? Spread the word :)</p>
                  <p>
                    <a
                      title='Share on Twitter'
                      href='http://twitter.com/share?url=https://mockoon.com&amp;text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.&amp;via=255kb&amp;'
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(
                          'http://twitter.com/share?url=https://mockoon.com&amp;text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.%20%23RestAPI%20%23Prototyping%20%23DeveloperTools&amp;via=GetMockoon&amp;',
                          'twitter-share',
                          'width=800,height=600'
                        );
                        return false;
                      }}
                      className='button is-primary is-outlined twitter'
                    >
                      <span className='icon'>
                        <i className='icon-twitter' aria-hidden='true'></i>
                      </span>
                      <span>Twitter</span>
                    </a>
                    <a
                      title='Share on Facebook'
                      href='http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com'
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(
                          'http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com',
                          'facebook-share',
                          'width=800,height=600'
                        );
                        return false;
                      }}
                      className='button is-primary is-outlined facebook'
                      style={{ marginLeft: 5 + 'px' }}
                    >
                      <span className='icon'>
                        <i className='icon-facebook' aria-hidden='true'></i>
                      </span>
                      <span>Facebook</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;
