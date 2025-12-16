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
        subtitle='Mockoon is an independent open-source project. You can support our work by sponsoring the project or by subscribing to our Cloud plans.'
      />

      <div className='container pb-8'>
        <div className='row d-flex flex-column align-items-center '>
          <div className='col-12 col-lg-10 pt-5'>
            <p>
              Mockoon is an <strong>open-source project</strong> launched in
              2017 by{' '}
              <a href='https://github.com/255kb' target='_blank' rel='noopener'>
                Guillaume
              </a>
              , a developer passionate about APIs, with the help of{' '}
              <Link href='/about/'>
                <strong>dozens of amazing contributors</strong>
              </Link>
              .
            </p>
            <p>
              Completely <strong>free</strong> to use, Mockoon saves time for
              thousands of developers around the world every day, and has been{' '}
              <strong>downloaded over 900,000 times</strong>.
            </p>
            <p>
              {' '}
              Maintaining and improving a tool at this scale takes a lot of time
              and effort. If you find Mockoon useful and want to see it continue
              to grow, you can <strong>
                support us by becoming a sponsor
              </strong>{' '}
              and joining the many{' '}
              <a
                href='https://github.com/mockoon/mockoon/blob/main/backers.md'
                target='_blank'
                rel='noopener'
              >
                backers
              </a>{' '}
              who help make this possible.{' '}
            </p>
            <p>
              By sponsoring us, you're not only showing appreciation, you're
              enabling us to <strong>dedicate more time to development</strong>,{' '}
              <strong>new features</strong>, and{' '}
              <strong>long-term maintenance</strong>. For higher sponsorship
              tiers, it's also a great way to get your brand in front of a
              developer audience that cares about APIs, testing, and
              productivity.
            </p>
            <p className='text-center m-8'>
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
            <p>
              You can also{' '}
              <strong>
                support Mockoon by subscribing to our Cloud offering
              </strong>
              , a powerful, hosted version of the tool that includes:{' '}
              <strong>real-time team collaboration</strong>,
              <strong> cloud deployments</strong>,{' '}
              <strong>AI-powered mock generation</strong>,
              <strong>enterprise-grade support</strong> ... and more to come!
            </p>
            <p className='text-center m-8'>
              <a href='/cloud/'>
                <img
                  src='/images/cloud-btn-250.png'
                  alt='discover mockoon cloud button'
                  width={250}
                  height={71}
                />
              </a>
            </p>
            <p>
              Not in a position to sponsor or subscribe? You can still help!
              <strong>Star us on GitHub</strong>,{' '}
              <strong>share Mockoon with your peers</strong>, or{' '}
              <strong>talk about us</strong>
              in your company, every bit helps!
            </p>
            <div className='text-center m-8'>
              <GitHub />
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
