import Link from 'next/link';
import { FunctionComponent } from 'react';
import GitHub from '../components/github';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Sponsors from '../components/sponsors';
import Layout from '../layout/layout';

const SponsorUs: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Support our work on Mockoon'
        description='Mockoon is an open-source project. You can help the maintainers by sponsoring the project through GitHub Sponsors or by subscribing to our Cloud plans.'
        ogType='article'
      />

      <Hero
        title='<span class="text-primary">Support our work</span> on Mockoon'
        subtitle='Mockoon is an open-source project. You can support our work by sponsoring the project or by subscribing to our Cloud plans.'
      />

      <div className='container pb-8'>
        <div className='row d-flex flex-column align-items-center '>
          <div className='col-12 col-lg-10 pt-5'>
            <p>
              Mockoon is an <strong>open-source</strong> project created in 2017
              by{' '}
              <a href='https://github.com/255kb' target='_blank' rel='noopener'>
                Guillaume
              </a>
              , a developer passionate about APIs, helped by{' '}
              <Link href='/about/'>
                <strong>dozens of amazing contributors</strong>
              </Link>
              .
            </p>
            <p>
              Entirely free, Mockoon saves time for{' '}
              <strong>thousands of people around the world</strong> every day
              and recently crossed <strong>800k downloads</strong>!
            </p>
            <p>
              Reaching this level of satisfaction requires a{' '}
              <strong>tremendous amount of time from the maintainers</strong>.
              If you like Mockoon and want it to propose always more great
              features, you can <strong>support us</strong> and join the dozens
              of{' '}
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
              By sponsoring us, you can show your appreciation for all this{' '}
              <strong>hard work</strong> and also allow us to{' '}
              <strong>dedicate more time</strong> to this project in the future.
              For higher sponsor tiers, this is the opportunity to show your
              brand in front of many developers interested in APIs and automated
              testing.
            </p>
            <div className='text-center my-8'>
              <p className='mt-4'>
                <a
                  href='https://github.com/sponsors/mockoon'
                  target='_blank'
                  rel='noopener'
                >
                  <img
                    src='/images/sponsor-btn-250.png'
                    alt='sponsor button'
                    width={250}
                    height={71}
                  />
                </a>
              </p>
            </div>

            <hr />

            <div className='col-lg-10 col-12 text-center text-lg-start mt-8'>
              <p>
                You can also support us by subscribing to our{' '}
                <strong>Cloud</strong> and enjoy a whole new level of
                capabilities: real-time collaboration, cloud deployments,
                AI-powered API mocks generation, enterprise-grade support, and
                more to come!
              </p>
            </div>
            <div className='text-center my-8'>
              <a href='/cloud/'>
                <img
                  src='/images/cloud-btn-250.png'
                  alt='discover mockoon cloud button'
                  width={250}
                  height={71}
                />
              </a>
            </div>

            <hr />

            <div className='text-center mt-8'>
              <p>
                If subscribing to the <strong>Cloud plans</strong> or{' '}
                <strong>donating</strong> is not an option, you can still help
                us <strong>spread the word</strong> by starring the project on
                GitHub or sharing it with your peers!
              </p>
              <div className='m-4'>
                <GitHub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='py-5 py-lg-10 border-top bg-gradient-light-white'>
        <Sponsors showLink={false} showHonorary={true} />
      </section>
    </Layout>
  );
};

export default SponsorUs;
