import Card from '../components/card';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export default function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={'Page not found'} description='' />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row align-items-center justify-content-center gx-0'>
            <div className='col text-center'>
              <img src='/images/logo-weep.svg' alt='' width='250' />
              <h1 className='mb-0 fw-bold text-center'>Page not found!</h1>

              <p className='mb-6 text-center text-gray-700'></p>
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
                  links: [
                    {
                      src: '/tutorials/self-host-mock-api-server-cli/',
                      text: 'Discover the CLI'
                    }
                  ]
                }}
                cover={false}
                border
              />
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <Card
                data={{
                  topTag: 'cloud',
                  topTagClasses: 'text-bg-warning',
                  title: '☁️ Achieve more with our Cloud',
                  description:
                    'Mockoon Cloud is a powerful API mocking platform that allows you to collaborate and share your mock APIs easily.',
                  links: [{ src: '/cloud/', text: 'Learn more' }]
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
}
