import { FunctionComponent } from 'react';
import AlternatedFeatures from '../components/alternated-features';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export const services = [
  {
    title: 'Mockoon <span class="text-primary">setup and deployment</span>',
    description:
      'We can help you set up and deploy Mockoon on your infrastructure, server, or CI/CD pipeline for all your use cases: development, integration testing, QA, etc.',
    imgSrc: '/images/custom-services/api-mock-deployment.svg',
    imgAlt: 'one person checking tasks statuses'
  },
  {
    title: 'API mock <span class="text-primary">creation</span>',
    description:
      'We can take care of creating and maintaining your API mocks for you. We can also help you migrate your existing mocks to Mockoon and advise on how to best handle your use cases.',
    imgSrc: '/images/custom-services/api-mock-creation-maintenance.svg',
    imgAlt: 'a person looking at code'
  },
  {
    title:
      'Live <span class="text-primary">training</span> and <span class="text-primary">workshops</span>',
    description:
      'We can provide live training and workshops for your team to help you get started with Mockoon, learn how to make the most of it, or learn about API and API design in general.',
    imgSrc: '/images/custom-services/api-training-and-workshops.svg',
    imgAlt: 'multiple persons taking a live training session'
  },
  {
    title: 'Priority <span class="text-primary">enterprise support</span>',
    description:
      'We can provide priority support for your team, including guaranteed response times, dedicated support channels, and custom SLAs.',
    imgSrc: '/images/custom-services/enterprise-priority-support.svg',
    imgAlt: 'multiple persons taking a live training session'
  }
];

const Services: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Our custom services'
        description='We can help you get started with Mockoon through training, support, and custom development. Contact us for more information about our custom services'
        ogType='article'
      />
      <Hero
        title='Our <span class="text-primary">custom services</span>'
        subtitle='We can help you get started with Mockoon through training, support, and custom development. Contact us for more information about our custom services.'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={services} imgClassName='w-lg-50' />
        </div>
      </section>

      <section className='pb-6 pb-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center'>
              <a href='/contact-form/' className='btn btn-primary mb-6 lift'>
                Contact us
                <i className='icon-arrow_forward ms-2'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
