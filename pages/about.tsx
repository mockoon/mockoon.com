import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const SponsorUs: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='About Mockoon'
        description='Mockoon is an open source project built by a team of passionate volunteer maintainers.'
      />

      <Hero title='Meet the team' />

      <div className='container'>
        <div className='columns'>
          <div className='column is-6 is-offset-3'>
            <div className='content has-text-centered'>
              <p className='has-text-grey has-text-weight-semibold is-size-4 is-italic'>
                &#8220;We want to craft the best API tools on the
                market!&#8221;
              </p>
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-3 is-offset-3'>
            <div className='section'>
              <div className='content is-flex is-justify-content-center'>
                <figure className='image is-128x128'>
                  <img
                    className='is-rounded'
                    src='/images/about/guillaume.jpg'
                    alt='Mockoon maintainer'
                  />
                  <span className='title is-size-5'>Guillaume</span>
                  <br />
                  <a
                    href='https://github.com/255kb'
                    target='_blank'
                    rel='noopener'
                    className='has-text-grey'
                  >
                    <i className='icon-github'></i> 255kb
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className='column is-3'>
            <div className='section'>
              <div className='content is-flex is-justify-content-center'>
                <figure className='image is-128x128'>
                  <img
                    className='is-rounded'
                    src='/images/about/fabrice.jpg'
                    alt='Mockoon maintainer'
                  />
                  <span className='title is-size-5'>Fabrice</span>
                  <br />
                  <a
                    href='https://github.com/fabhoarau'
                    target='_blank'
                    rel='noopener'
                    className='has-text-grey'
                  >
                    <i className='icon-github'></i> fabhoarau
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-6 is-offset-3'>
            <div className='section'>
              <div className='content'>
                <div className='has-text-centered'></div>
                <p>
                  Mockoon is a free and open-source mock API tool created by
                  Guillaume in 2017. Passionate about APIs and great developer
                  tools, he spent a lot of time making Mockoon the easiest to
                  use and quickest mock API tool.
                </p>
                <p>
                  Recently joined by Fabrice, a long-time friend and full-stack
                  developer, together they plan to bring Mockoon to the next
                  level and deliver the best developer experience on the market.
                </p>
                <p>
                  They believe in simplicity and efficiency and work hard
                  every day to bring you a tool that is easy to set up yet
                  powerful. The goal is to save you tons of time, not waste it.
                </p>
                <p>
                  If you believe in what we are building, you can sponsor us in
                  this journey and join the dozens of{' '}
                  <a
                    href='https://github.com/mockoon/mockoon/blob/master/backers.md'
                    target='_blank'
                    rel='noopener'
                  >
                    backers and supporters
                  </a>
                  .
                </p>
              </div>

              <div className='has-text-centered'>
                <a href='/sponsor-us/' className='button is-link is-light'>
                  View sponsorship options
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SponsorUs;

/**
 *


 I'm Guillaume. Thank you for considering supporting my open-source software work through GitHub Sponsors.

I am a passionate full-stack web developer currently working on Mockoon in my spare time.

Mockoon is the easiest and quickest way to run mock APIs locally. No remote deployment or account required. And it's open-source!
I want Mockoon to be the best mocking tool out there! But this requires time. A lot of time.
By sponsoring me you can show your appreciation for all this hard work and also allow me to dedicate more time to this project in the future.

Thank you for considering support!
 */
