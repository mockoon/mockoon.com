import { FunctionComponent } from 'react';
import ContactForm from '../components/contact-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const RequestDemo: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta
        title='Request a Mockoon Pro demo'
        description='Book a demo with our team to see how Mockoon Pro can help you streamline your API development workflows'
      />

      <Hero
        title='Request a <span class="text-primary">demo</span>'
        subtitle='Book a demo with our team to see how Mockoon Pro can help you streamline your API development workflows'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'>
                Tell us about your API development challenges and your team's
                needs. We will get back to you shortly to arrange a personalized
                demo.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <ContactForm
                isCompanyRequired
                submitButtonLabel='Request a demo'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RequestDemo;
