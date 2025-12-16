import { FunctionComponent } from 'react';
import ContactForm from '../components/contact-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const CloudRequestTrial: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Request a Cloud trial'
        description='Evaluate Mockoon Cloud with a free trial for your team for 14 days. No credit card required.'
      />

      <Hero
        title='Request a <span class="text-primary">Mockoon Cloud Team trial</span>'
        subtitle='Evaluate Mockoon Cloud with a free trial for your team for 14 days. No credit card required.'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'>
                Fill out the form below to request your free trial of Mockoon
                Cloud. A member of our team will get back to you shortly with
                your trial details.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <ContactForm
                isCompanyRequired
                submitButtonLabel='Request free trial'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudRequestTrial;
