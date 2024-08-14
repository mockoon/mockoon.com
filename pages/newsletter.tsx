import { FunctionComponent } from 'react';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Newsletter: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Subscribe to our newsletter'
        description='Subscribe to our newsletter to receive news about Mockoon, its latest features, releases and tutorials.'
        ogType='article'
      />

      <Hero
        title='Subscribe to our <span class="text-primary">newsletter</span>'
        subtitle="Enter your email address to receive Mockoon's latest updates"
      />

      <section className='py-8 py-md-12' id='product-updates-subscribe'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <EmailForm type='newsletter' />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
