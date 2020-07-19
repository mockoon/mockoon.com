import { FunctionComponent } from 'react';
import Download from '../components/download';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';

const meta = { title: 'Frequently asked questions' };

const Faq: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title={meta.title}
        description='Find the most frequently asked question about Mockoon, the free desktop server mocking application.'
        ogType='article'
      />
      <Hero title={meta.title} />

      <Download />

      <section className='section'>
        <div className='columns'>
          <div className='column is-6 is-offset-3'>
            <div className='content'>
              <h3>How does Mockoon mocking works?</h3>
              <p>
                Unlike many other mocking tools, Mockoon uses a local server to
                avoid latency and the hassle of deploying through a remote
                service.
              </p>
              <h3>Does Mockoon require an active internet connection?</h3>
              <p>
                No, you don't need an internet connection to use Mockoon,
                everything runs locally.
              </p>
              <h3>Does Mockoon require an account?</h3>
              <p>
                No, you don't need to sign up or create an account to use
                Mockoon.
              </p>
              <h3>Is Mockoon free and/or open source?</h3>
              <p>Mockoon is 100% free AND open source (MIT license).</p>
              <h3>Where are my data stored?</h3>
              <p>
                Locally, in your operating system user data folder.{' '}
                <code>c:/.../Users/xxx/AppData/Roaming</code> on Windows,{' '}
                <code>~/.config</code> on Linux and{' '}
                <code>~/Library/Application Support</code> on macOS.
              </p>
              <h3>Are you collecting usage data?</h3>
              <p>
                Yes, but only anonymous data through Google Analytics. Besides
                Google Analytics standard collected data (OS, screen size, etc.)
                we are also collecting some events happening in the application.
                A typical event includes the following JSON{' '}
                <code>
                  {'{'}category: 'delete', action: 'environment'{'}'}
                </code>
                ,{' '}
                <code>
                  {'{'}category: 'server', action: 'start' {'}'}
                </code>
                , etc.
                <br />
                None of your mock data, routes or URLs are collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Faq;
