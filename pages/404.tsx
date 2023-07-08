import { FunctionComponent } from 'react';
import Card from '../components/card';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Custom404: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={'Page not found'} description='' />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row align-items-center justify-content-center gx-0'>
            <div className='col text-center'>
              <img src='/images/logo-weep.svg' alt='' width='250' />
              <h1 className='mb-0 fw-bold text-center'>Page not found!</h1>

              <p className='mb-6 text-center text-muted'></p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-4 d-flex'>
              <Card
                data={{
                  title: '🚀 Create your first mock API',
                  description:
                    'Follow our getting started tutorial to learn how to create your first mock REST API with Mockoon.',
                  links: [
                    { src: '/tutorials/getting-started/', text: 'Get started' }
                  ]
                }}
                cover={false}
                border
              />
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <Card
                data={{
                  title: '🚢 Run your mocks anywhere',
                  description:
                    'Deploy your mock servers in your CI environment with a simple and easy to use NPM package and Docker image.',
                  links: [{ src: '/cli/', text: 'Discover the CLI' }]
                }}
                cover={false}
                border
              />
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <Card
                data={{
                  topTag: 'pro',
                  topTagClasses: 'text-bg-warning',
                  title: '🤖 Use our templates and AI assistant',
                  description:
                    'Mockoon AI assistant helps you create realistic mock APIs in seconds for fast prototyping and learning.',
                  links: [
                    { src: '/ai-powered-api-mocking/', text: 'Learn more' }
                  ]
                }}
                cover={false}
                border
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Custom404;
