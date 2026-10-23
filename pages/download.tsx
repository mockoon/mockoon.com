import { FunctionComponent } from 'react';
import DownloadSection from '../components/download-section';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { getDesktopLatestVersion } from '../utils/utils';

export async function getStaticProps() {
  return { props: { version: await getDesktopLatestVersion() } };
}

const benefits = [
  {
    title: 'Instant & Local-First',
    description:
      'Get working mock REST APIs in seconds with an intuitive interface. No account, no cloud, zero latency.',
    icon: 'icon-speed'
  },
  {
    title: 'Realistic Scenarios',
    description:
      'Simulate real-world conditions with dynamic templating, Faker.js data, route rules, and custom delays.',
    icon: 'icon-tune'
  },
  {
    title: 'Integrates with Your Workflow',
    description:
      'Compatible with OpenAPI specifications. Import specs, export mocks, and run everywhere with the CLI.',
    icon: 'icon-sync_alt'
  },
  {
    title: '100% Privacy Friendly',
    description:
      'Your data stays on your machine. Mockoon is offline-first with no tracking or telemetry on your mock traffic.',
    icon: 'icon-security'
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
        mainPicture='/images/home/home-hero.png'
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

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Why developers choose Mockoon Desktop
          </h2>
          <div className='row g-6 justify-content-center'>
            {benefits.map((benefit, index) => (
              <div key={index} className='col-lg-6 col-xl-3'>
                <div className='text-center'>
                  <div className='icon-wrapper mb-3'>
                    <i
                      className={`${benefit.icon} text-primary`}
                      style={{ fontSize: '2.5rem' }}
                    ></i>
                  </div>
                  <h4 className='fw-bold mb-2'>{benefit.title}</h4>
                  <p className='text-muted mb-0'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Download;
