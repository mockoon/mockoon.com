import { FunctionComponent } from 'react';
import ContactForm from '../components/contact-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const ContactFormPage: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title="Contact Mockoon's team"
        description='For all non-support inquiries (your Mockoon Pro subscription, sponsoring, etc.) you can contact us using our contact form. We will get back to you shortly'
      />

      <Hero
        title='Contact us'
        subtitle='For all non-support inquiries (your Mockoon Pro subscription, sponsoring, etc.), please contact us using the form below'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'>
                Send us an email to{' '}
                <a href='mailto:team@mockoon.com' className='h4'>
                  team@mockoon.com
                </a>{' '}
                or fill the form below. We will be glad to help you.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactFormPage;
