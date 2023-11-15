import { FunctionComponent } from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Brand: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Mockoon logo and usage'
        description='We have created a set of logos and guidelines to help you use Mockoon brand in your projects.'
        ogType='article'
      />

      <Hero
        title='Mockoon <span class="text-primary">logo and usage</span>'
        subtitle='Please follow these guidelines when using Mockoon logos and brand.'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6 col-lg-4'>
              <Card
                data={{
                  title: 'Mockoon eyes logo for light or dark backgrounds',
                  imageSrc: '/images/logo-eyes.svg',
                  imageAlt: 'Mockoon eyes logo',
                  imagePaddingClasses: 'py-8',
                  links: [
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-eyes.svg?download=true',
                      text: 'SVG (light)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-eyes-sticker.svg?download=true',
                      text: 'SVG (dark)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-eyes.png?download=true',
                      text: 'PNG (light)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-eyes-sticker.png?download=true',
                      text: 'PNG (dark)'
                    }
                  ]
                }}
                vertical
                cover={false}
                border={true}
                borderColor={'var(--bs-body-color)'}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <Card
                data={{
                  title: 'Mockoon full logo for light or dark backgrounds',
                  imageSrc: '/images/logo.svg',
                  imageAlt: 'Mockoon full logo',
                  links: [
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-text.svg?download=true',
                      text: 'SVG (light)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-text-sticker.svg?download=true',
                      text: 'SVG (dark)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-text.png?download=true',
                      text: 'PNG (light)'
                    },
                    {
                      // keep URL absolute to go through Cloudflare rules and trigger download
                      src: 'https://mockoon.com/images/logo-text-sticker.png?download=true',
                      text: 'PNG (dark)'
                    }
                  ]
                }}
                vertical
                cover={false}
                border={true}
                borderColor={'var(--bs-body-color)'}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-5'>
              <h2>Dos</h2>
              <ul className='list'>
                <li>
                  <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                    <i className='icon-check'></i>
                  </div>
                  Use the logos above to link to Mockoon
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                    <i className='icon-check'></i>
                  </div>
                  Use the logos above to indicate that your project integrates
                  with Mockoon
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                    <i className='icon-check'></i>
                  </div>
                  Use the logos above in an article or blog post about Mockoon
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                    <i className='icon-check'></i>
                  </div>
                  Use the logos less prominently than your company or brand logo
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-5'>
              <h2>Don'ts</h2>
              <ul className='list'>
                <li>
                  <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                    <i className='icon-clear'></i>
                  </div>
                  Use Mockoon logos in a way that implies partnership,
                  sponsorship, or endorsement
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                    <i className='icon-clear'></i>
                  </div>
                  Use Mockoon logos in a way that confuses Mockoon with another
                  brand
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                    <i className='icon-clear'></i>
                  </div>
                  Use Mockoon logos as part of your own product, business, or
                  service's name
                </li>
                <li>
                  <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-4'>
                    <i className='icon-clear'></i>
                  </div>
                  Alter the logos in any way, or combine them with any other
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brand;
