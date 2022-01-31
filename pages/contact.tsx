import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Contact: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Request support'
        description='Found an issue? Wondering how to use Mockoon for your specific use case or how to create awesome mock APIs? Contact us!'
      />

      <Hero
        title='Feedback? Questions?'
        subtitle='We are always here to help.'
      />
      <section className='pb-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-4 d-flex'>
              <div className='card p-5 my-5 shadow-light-lg'>
                <div className='col-12 text-center'>
                  <img
                    src='/images/illustrations/chat.svg'
                    alt='support forums'
                    className='w-25 mb-4'
                  />
                </div>
                <h3 className='text-center'>Forums and Discord Server</h3>
                <p className='px-2 text-center text-muted'>
                  You can ask for help or discuss ideas and improvements on our
                  GitHub Discussions forums. You are also welcome on our Discord
                  server.
                </p>
                <div className='justify-content-center align-items-center d-flex flex-row '>
                  <a
                    href='https://github.com/mockoon/mockoon/discussions'
                    target='_blank'
                    rel='noopener'
                  >
                    App forum
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href='https://github.com/mockoon/cli/discussions'
                    target='_blank'
                    rel='noopener'
                  >
                    CLI forum
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href='https://discord.gg/MutRpsY5gE'
                    target='_blank'
                    rel='noopener'
                  >
                    Discord
                  </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <div className='card p-5 my-5 shadow-light-lg'>
                <div className='col-12 text-center '>
                  <img
                    src='/images/illustrations/visio.svg'
                    alt='dedicated support'
                    className='w-25 mb-4'
                  />
                </div>
                <h3 className='text-center'>Enterprise support</h3>
                <p className='px-2 text-center text-muted'>
                  Get an official maintainer to join your team on the platform
                  of your choice (Slack, Zoom, etc.) to answer support requests
                  or any questions you may have about the project.
                </p>
                <div className='justify-content-center align-items-center d-flex flex-row '>
                  <a href='/enterprise/'>Get enterprise support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
