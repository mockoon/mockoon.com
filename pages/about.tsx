import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const SponsorUs: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title="About Mockoon's team"
        description='Mockoon is the fastest and easiest way to create mock API servers. It is a free and open-source project built by a team of passionate developers.'
      />

      <Hero
        title='Meet the team'
        subtitle='&#8220;We want to craft the best API tools on the market!&#8221;'
      />

      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-6 col-lg-4'>
            <div className='row gx-0 d-flex align-items-center justify-content-center flex-column'>
              <div className='col-12 col-lg-7'>
                <img
                  src='/images/about/guillaume.jpg'
                  alt='Mockoon maintainer'
                  className='img-fluid rounded-circle mb-3 img-thumbnail shadow'
                  width={440}
                  height={440}
                />
              </div>
              <div className='col-12 order-lg-1 d-flex justify-content-center'>
                <div className='align-items-center pb-0 d-flex flex-column flex-lg-row'>
                  <h6 className='text-uppercase text-muted me-lg-2 mb-lg-0 mb-1'>
                    Guillaume
                  </h6>

                  <a
                    href='https://github.com/255kb'
                    target='_blank'
                    rel='noopener'
                    className='text-decoration-none'
                  >
                    <i className='icon-github fs-3 text-muted'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-4'>
            <div className='gx-0 d-flex align-items-center justify-content-center flex-column'>
              <div className='col-12 col-lg-7'>
                <img
                  src='/images/about/fabrice.jpg'
                  alt='Mockoon maintainer'
                  className='img-fluid rounded-circle mb-3 img-thumbnail shadow'
                  width={440}
                  height={440}
                />
              </div>
              <div className='col-12 order-lg-1 d-flex justify-content-center'>
                <div className='align-items-center pb-0 d-flex flex-column flex-lg-row'>
                  <h6 className='text-uppercase text-muted me-lg-2 mb-lg-0 mb-1'>
                    Fabrice
                  </h6>

                  <a
                    href='https://github.com/fabhoarau'
                    target='_blank'
                    rel='noopener'
                    className='text-decoration-none'
                  >
                    <i className='icon-github fs-3 text-muted'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center flex-column pt-4 pb-8 py-lg-8'>
          <div className='col-lg-10 col-12 text-center text-lg-start'>
            <p>
              Mockoon is a free and open-source mock API tool created by
              Guillaume in 2017. Passionate about APIs and great developer
              tools, he spent a lot of time making Mockoon the easiest to use
              and quickest mock API tool.
            </p>
            <p>
              Recently joined by Fabrice, a long-time friend and full-stack
              developer, together they plan to bring Mockoon to the next level
              and deliver the best developer experience on the market.
            </p>
            <p>
              They believe in simplicity and efficiency and work hard every day
              to bring you a tool that is easy to set up yet powerful. The goal
              is to save you tons of time, not waste it.
            </p>
            <p>
              If you believe in what we are building, you can sponsor us in this
              journey and join the dozens of{' '}
              <a
                href='https://github.com/mockoon/mockoon/blob/main/backers.md'
                target='_blank'
                rel='noopener'
              >
                backers and supporters
              </a>
              .
            </p>
          </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default SponsorUs;
