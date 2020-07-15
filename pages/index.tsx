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
                    src='/images/feature1.jpg'
                    alt='Mockoon routes list view'
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
                  <img src='/images/feature2.jpg' alt='Routes configuration' />
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
                  <img src='/images/feature3.jpg' alt='Routes JSON body' />
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

        <section className='section' id='testimonials'>
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <h1 className='title'>What developers say</h1>
              </div>
            </div>

            <div className='columns'>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    I can wholeheartedly recommend{' '}
                    <a href='https://twitter.com/GetMockoon?ref_src=twsrc%5Etfw'>
                      @GetMockoon
                    </a>{' '}
                    if you&#39;re looking for an easy way to{' '}
                    <a href='https://twitter.com/hashtag/mock?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #mock
                    </a>{' '}
                    Http-Endpoints locally.
                    <br />
                    This tool just works, it&#39;s super intuitive. Love it.❤️
                  </p>
                  &mdash; Alexandros (@KechaAlex){' '}
                  <a href='https://twitter.com/KechaAlex/status/1283134297067618306?ref_src=twsrc%5Etfw'>
                    July 14, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    Mockoon is the best! It&#39;s the easiest and quickest way
                    to mock APIs locally.
                  </p>
                  &mdash; Chuma Umenze (@chumaumenze){' '}
                  <a href='https://twitter.com/chumaumenze/status/1276429472057765888?ref_src=twsrc%5Etfw'>
                    June 26, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    I’ve used Mockoon to mock the API of a mobile app and it is
                    so useful for edge scenarios.
                  </p>
                  &mdash; Bruno Dias (@brunoald){' '}
                  <a href='https://twitter.com/brunoald/status/1276317161200418816?ref_src=twsrc%5Etfw'>
                    June 26, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    OMG its a life saving tool for FrontEnd and FullStack
                    developer. Mockoon is the easiest and quickest way to run
                    mock APIs locally. No remote deployment, no account
                    required, open source.{' '}
                    <a href='https://t.co/8tuILwL0cI'>
                      https://t.co/8tuILwL0cI
                    </a>{' '}
                    via{' '}
                    <a href='https://twitter.com/255kb?ref_src=twsrc%5Etfw'>
                      @255kb
                    </a>
                  </p>
                  &mdash; Rubesh Gain (@rubeshgain){' '}
                  <a href='https://twitter.com/rubeshgain/status/1243557172988051456?ref_src=twsrc%5Etfw'>
                    March 27, 2020
                  </a>
                </blockquote>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    Forgot to mention an important part of this article. I am
                    leveraging{' '}
                    <a href='https://twitter.com/GetMockoon?ref_src=twsrc%5Etfw'>
                      @GetMockoon
                    </a>{' '}
                    to implement the APIs! <br />
                    All credit to{' '}
                    <a href='https://twitter.com/255kb?ref_src=twsrc%5Etfw'>
                      @255kb
                    </a>{' '}
                    who developed this wonderful tool.
                  </p>
                  &mdash; Nabil Kazi (@nQaze){' '}
                  <a href='https://twitter.com/nQaze/status/1239577212883554310?ref_src=twsrc%5Etfw'>
                    March 16, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    Did I already say that Mockoon is awesome?
                    <br />
                    Mockoon is the easiest and quickest way I found to run mock
                    APIs locally.{' '}
                    <a href='https://twitter.com/hashtag/RestAPI?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #RestAPI
                    </a>{' '}
                    <a href='https://twitter.com/hashtag/Prototyping?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #Prototyping
                    </a>{' '}
                    <a href='https://twitter.com/hashtag/DeveloperTools?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #DeveloperTools
                    </a>{' '}
                    <a href='https://twitter.com/hashtag/OpenSource?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #OpenSource
                    </a>{' '}
                    <a href='https://t.co/GlIPxThfu8'>
                      https://t.co/GlIPxThfu8
                    </a>{' '}
                    di{' '}
                    <a href='https://twitter.com/GetMockoon?ref_src=twsrc%5Etfw'>
                      @GetMockoon
                    </a>
                    <br />
                    <br />
                    P.S. It&#39;s made with{' '}
                    <a href='https://twitter.com/hashtag/Electron?src=hash&amp;ref_src=twsrc%5Etfw'>
                      #Electron
                    </a>{' '}
                    and this is a huge bonus in my eyes.
                  </p>
                  &mdash; Nicola Orritos (@nicola_orritos){' '}
                  <a href='https://twitter.com/nicola_orritos/status/1227168377275371520?ref_src=twsrc%5Etfw'>
                    February 11, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    <a href='https://twitter.com/255kb?ref_src=twsrc%5Etfw'>
                      @255kb
                    </a>{' '}
                    Thanks for Mockoon ! such a handy tool !
                  </p>
                  &mdash; Axel (@Axel_V_py){' '}
                  <a href='https://twitter.com/Axel_V_py/status/1214821739613560832?ref_src=twsrc%5Etfw'>
                    January 8, 2020
                  </a>
                </blockquote>
              </div>
              <div className='column is-one-quarter'>
                <blockquote
                  className='twitter-tweet'
                  data-cards='hidden'
                  data-dnt='true'
                  data-conversation='none'
                  data-lang='en'
                >
                  <p lang='en' dir='ltr'>
                    If you’re a mobile/frontend developer and you’re suffering
                    with DEV environment, start mocking your APIs with{' '}
                    <a href='https://twitter.com/GetMockoon?ref_src=twsrc%5Etfw'>
                      @GetMockoon
                    </a>{' '}
                    . It’s amazing! Thanks,{' '}
                    <a href='https://twitter.com/255kb?ref_src=twsrc%5Etfw'>
                      @255kb
                    </a>{' '}
                    for creating this! I’m using every time that I develop new
                    iOS projects!
                  </p>
                  &mdash; Sr. Décio Montanhani (@deciomontanhani){' '}
                  <a href='https://twitter.com/deciomontanhani/status/1211713659824754689?ref_src=twsrc%5Etfw'>
                    December 30, 2019
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

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
