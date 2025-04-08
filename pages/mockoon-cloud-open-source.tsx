import { FunctionComponent } from 'react';
import ContactForm from '../components/contact-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const OpenSourceContactFormPage: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta title="Contact Mockoon's team for Open Source" description='' />

      <Hero
        title='Mockoon Cloud for Open Source'
        subtitle='We offer free Mockoon Cloud accounts for open source projects. If you are interested, please fill the form below.'
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
                or fill the form below.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <ContactForm displayProject />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpenSourceContactFormPage;
