import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export const services = [
  {
    label: 'Infrastructure',
    title: 'Mockoon setup and deployment',
    description:
      'We can help you set up and deploy Mockoon on your infrastructure, server, or CI/CD pipeline for all your use cases: development, integration testing, QA, etc.',
    imgSrc: '/images/custom-services/deployment-and-configuration.svg',
    imgAlt: 'one person checking tasks statuses'
  },
  {
    label: 'Code',
    title: 'API mock creation',
    description:
      'We can take care of creating and maintaining your API mocks for you. We can also help you migrate your existing mocks to Mockoon and advise on how to best handle your use cases.',
    imgSrc: '/images/custom-services/create-custom-mock-api.svg',
    imgAlt: 'a person looking at code'
  },
  {
    label: 'Training',
    title: 'Live training and workshops',
    description:
      'We can provide live training and workshops for your team to help you get started with Mockoon, learn how to make the most of it, or learn about API and API design in general.',
    imgSrc: '/images/custom-services/live-training.svg',
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
        title='Our custom services'
        subtitle='We can help you get started with Mockoon through training, support, and custom development. Contact us for more information about our custom services.'
        cta={[{ link: '/contact-form/', text: 'Contact us' }]}
      />

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          {services.map((service, serviceIndex) => {
            return (
              <div
                className='row py-5 py-lg-8 align-items-center justify-content-between'
                key={`service${serviceIndex}`}
              >
                <div
                  className={`col-12 col-lg-5 pb-sm-10 pb-lg-0 ${
                    serviceIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
                  }`}
                >
                  <span className='badge rounded-pill bg-primary-soft mb-3'>
                    <span className='h6 text-uppercase'>{service.label}</span>
                  </span>

                  <h3 className='h2 fw-bold'>{service.title}</h3>

                  <div className='fs-lg text-gray-700'>
                    {service.description}
                  </div>
                </div>
                <div
                  className={`col-12 col-lg-7 ${
                    serviceIndex % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
                  }`}
                >
                  <div className={`my-6 my-lg-0 text-center`}>
                    <img
                      src={service.imgSrc}
                      alt={service.imgAlt}
                      className='img-fluid w-lg-50'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
