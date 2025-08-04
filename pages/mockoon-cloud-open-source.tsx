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
        title='Mockoon Cloud for <span class="text-primary">Open Source</span>'
        subtitle='We offer free Mockoon Cloud accounts to eligible open-source projects. If you are interested, please fill the form below'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'>
                To be eligible, your project must be{' '}
                <strong>open-source</strong> (
                <a href='https://opensource.org/licenses' target='_blank'>
                  OSI approved License
                </a>
                ), <strong>have a public repository</strong>, and{' '}
                <strong>not be backed by a company</strong>. It must also be an
                active project, not a portfolio, tutorial, or demo. We reserve
                the right to refuse any request that does not meet these
                criteria or that we deem inappropriate or misaligned with our
                values. We will review your request and get back to you as soon
                as possible.
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
