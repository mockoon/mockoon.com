import { FunctionComponent } from 'react';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import PlansView from '../components/plans';
import SocialProof from '../components/social-proof';
import Layout from '../layout/layout';

const meta = {
  title: 'Mockoon Pro pricing',
  description:
    'Mockoon Pro pricing for self-hosted deployments, with managed cloud available for Enterprise customers'
};

const Pricing: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='Mockoon Pro <span class="text-primary">pricing</span>'
        subtitle='Collaborate on mock APIs with self-hosted Mockoon Pro, with a managed cloud option for Enterprise customers'
        mainPicture='/images/pro-hero.png'
        mainPictureAlt='Mockoon Pro deployment and collaboration'
        mainPictureWidth={1200}
        mainPictureHeight={783}
        mainPictureSkewed={false}
      >
        <SocialProof />
        <p className='text-gray-600 mb-0 mt-6'>
          <img
            src='/images/eu-flag.svg'
            alt='EU'
            width={30}
            className='me-2 align-middle'
          />
          Proudly built and operated in Europe, with privacy and transparency at
          the core.
        </p>
      </Hero>

      <PlansView showTagline={true} />

      <section className='py-6 py-md-8' id='product-updates-subscribe'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold text-center mb-6'>
                Stay up-to-date with Mockoon Pro feature releases
              </h2>
              <div className='row align-items-center text-lg-start text-center'>
                <div className='col-12 justify-content-end'>
                  <EmailForm type='update' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
