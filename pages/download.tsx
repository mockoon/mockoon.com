import { FunctionComponent } from 'react';
import Card from '../components/card';
import DownloadSection from '../components/download-section';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { CardData } from '../models/common.model';
import { getDesktopLatestVersion } from '../utils/utils';

export async function getStaticProps() {
  return { props: { version: await getDesktopLatestVersion() } };
}

const features: CardData[] = [
  {
    title: 'API mocking that saves you time',
    description:
      'Get working mock REST APIs in seconds with an intuitive and easy-to-use interface. Run them everywhere with the CLI.',
    imageSrc: '/images/highlight1.png'
  },
  {
    title: 'Complete tooling',
    description:
      'Go beyond mocking with advanced features and tackle the most complex situation with HTTP requests recording, proxying, integration testing, etc.',
    imageSrc: '/images/highlight3.png'
  },
  {
    title: 'Integrates with your workflow',
    description:
      'Compatible with the OpenAPI specification, Mockoon integrates perfectly with your existing applications and API design workflow.',
    imageSrc: '/images/highlight2.png'
  }
];

const Download: FunctionComponent<{ version: string }> = function ({
  version
}) {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Download Mockoon, the best API mocking tool'
        description='Download Mockoon, the easiest and fastest way to create realistic mock REST APIs. No account required, free and open-source.'
      />

      <Hero
        title='<span class="text-primary">Design your mock API</span> with Mockoon desktop'
        subtitle="Don't let API dependencies slow you down. Design the perfect API mock with Mockoon Desktop and accelerate your development lifecycle"
        mainPicture='/images/desktop-stylized.png'
        mainPictureAlt='Mockoon desktop application screenshot'
      />

      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='alert alert-dark' role='alert'>
                🚀 Learn how to use Mockoon in 5 minutes with our{' '}
                <a href='/tutorials/getting-started/' className='text-gray-500'>
                  getting started tutorial
                </a>
                !
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='download-section'
        className='py-5 py-lg-10 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h2 className='fw-medium'>Application download</h2>
              <DownloadSection version={version} />
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-12'>
              <div className='text-center'>
                <h2 className='fw-medium'>
                  Design the perfect{' '}
                  <span className='text-primary'>mock API</span> with Mockoon
                </h2>
              </div>
            </div>
            <div className='col-12'>
              <div className='row'>
                {features.map((feature) => {
                  return (
                    <div
                      key={feature.title}
                      className='mx-auto my-lg-3 col-12 col-lg-4'
                    >
                      <Card data={feature} cover={false} border vertical />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Download;
