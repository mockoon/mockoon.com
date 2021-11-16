import { FunctionComponent } from 'react';
import Donate from '../components/donate';
import GitHub from '../components/github';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const SponsorUs: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Sponsor Mockoon'
        description='Mockoon is an open source project. You can help the maintainers by sponsoring the project through GitHub Sponsors or by making a one-time donation.'
        ogType='article'
      />

      <Hero title='Sponsor Mockoon' />

      <div className='container pb-8'>
        <div className='row d-flex flex-column align-items-center '>
          <div className='col-12 col-lg-10 pt-5'>
            <p>
              Mockoon is an open-source project created in 2017 by{' '}
              <a href='https://github.com/255kb' target='_blank' rel='noopener'>
                Guillaume
              </a>
              , a developer passionate about APIs. Recently joined by{' '}
              <a
                href='https://github.com/fabhoarau'
                target='_blank'
                rel='noopener'
              >
                Fabrice
              </a>
              , they both work on the project during their free time.
            </p>
            <p>
              Entirely free, Mockoon saves time for thousands of people around
              the world every day and recently crossed 150&nbsp;000 downloads!
            </p>
            <p>
              Reaching this level of satisfaction requires a tremendous amount
              of time from the maintainers. If you like Mockoon and want it to
              propose always more great features, you can support us and join
              the dozens of{' '}
              <a
                href='https://github.com/mockoon/mockoon/blob/main/backers.md'
                target='_blank'
                rel='noopener'
              >
                backers and supporters
              </a>
              .
            </p>
            <p>
              By sponsoring us, you can show your appreciation for all this hard
              work and also allow us to dedicate more time to this project in
              the future.
            </p>
            <h3 className='h4 fw-bold text-center mt-8'>
              Whatever option you choose we are grateful for your support!
            </h3>
            <div className='text-center mt-8'>
              <h4>Become a sponsor through GitHub Sponsors</h4>
              <iframe
                src='https://github.com/sponsors/255kb/button'
                title='Sponsor 255kb'
                height='35'
                width='116'
                style={{ border: 0 }}
              ></iframe>
            </div>
            <div className='text-center mt-8'>
              <h4>Make a one-time donation</h4>
              <Donate />
            </div>
            <div className='text-center mt-8'>
              <p>
                If you cannot donate, you can still star the project on GitHub
                or help spread the word!
              </p>
              <div className='m-4'>
                <GitHub />
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
