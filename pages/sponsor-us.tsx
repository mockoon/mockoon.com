import { FunctionComponent } from 'react';
import GitHub from '../components/github';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Share from '../components/share';
import Sponsors from '../components/sponsors';
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
              .
            </p>
            <p>
              Entirely free, Mockoon saves time for thousands of people around
              the world every day and recently crossed 300&nbsp;000 downloads!
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
            <div className='text-center mt-8'>
              <h4>
                Become a sponsor or make a one-time donation through GitHub
                Sponsors
              </h4>
              <p className='mt-4'>
                <a
                  href='https://github.com/sponsors/mockoon'
                  target='_blank'
                  rel='noopener'
                >
                  <img
                    src='/images/sponsor-btn.png'
                    alt='sponsor button'
                    width={300}
                    height={86}
                  />
                </a>
              </p>
            </div>

            <div className='text-center mt-8'>
              <p>
                If donating is not an option, you can still help us spread the
                word by starring the project on GitHub or sharing it with your
                peers!
              </p>
              <div className='m-4'>
                <GitHub />
              </div>
              <div className='d-flex align-items-center flex-column '>
                <Share
                  url={`https://mockoon.com/`}
                  text='Mockoon is the easiest and quickest way to run mock REST API servers. No remote deployment, no account required, free, open source and cross-platform.'
                  showLabel={false}
                />
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
