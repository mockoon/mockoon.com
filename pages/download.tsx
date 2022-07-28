import { FunctionComponent } from 'react';
import DownloadSection from '../components/download-section';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { getDesktopLatestVersion } from '../utils/utils';

export async function getStaticProps() {
  return { props: { version: await getDesktopLatestVersion() } };
}

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
        title='Download Mockoon'
        subtitle='Mockoon is available on the three major OS.'
      />
      <section className='pb-8'>
        <div className='container'>
          <DownloadSection version={version} />
        </div>
      </section>
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='alert alert-dark' role='alert'>
                Learn how to use Mockoon in 5 minutes with our{' '}
                <a href='/tutorials/getting-started/' className='text-gray-500'>
                  getting started tutorial
                </a>
                !
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Download;
