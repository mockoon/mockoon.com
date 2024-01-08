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
              <div className='card card-border my-5 shadow-light-lg'>
                <div className='card-body d-flex flex-column h-100'>
                  <img
                    src='/images/illustrations/chat.svg'
                    alt='support forums'
                    className='w-25 mb-6 align-self-center'
                  />
                  <h3 className='text-center fw-medium'>Community support</h3>
                  <p className='px-2 text-center text-gray-700'>
                    You can ask for help or discuss ideas and improvements on
                    our GitHub Discussion forum. You are also welcome on our
                    Discord server.
                  </p>
                  <div className='mt-auto text-center'>
                    <a
                      href='https://github.com/mockoon/mockoon/discussions'
                      target='_blank'
                      rel='noopener'
                    >
                      GitHub
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href='https://discord.gg/FtJjkejKGp'
                      target='_blank'
                      rel='noopener'
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <div className='card card-border my-5 shadow-light-lg'>
                <div className='card-body d-flex flex-column h-100'>
                  <span className='badge text-bg-warning badge-float badge-float-outside'>
                    PRO
                  </span>
                  <img
                    src='/images/illustrations/visio.svg'
                    alt='dedicated support'
                    className='w-25 mb-6 align-self-center'
                  />
                  <h3 className='text-center fw-medium'>Enterprise support</h3>
                  <p className='px-2 text-center text-gray-700'>
                    Get enterprise-grade support with help from an official
                    maintainer to answer support requests or any questions you
                    may have about the project.
                  </p>
                  <div className='mt-auto text-center'>
                    <a href='/pro/'>Get enterprise support</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-lg-4 d-flex'>
              <div className='card card-border my-5 shadow-light-lg'>
                <div className='card-body d-flex flex-column h-100'>
                  <img
                    src='/images/illustrations/form.svg'
                    alt='other enquiries'
                    className='w-25 mb-6 align-self-center'
                  />
                  <h3 className='text-center fw-medium'>Other inquiries</h3>
                  <p className='px-2 text-center text-gray-700'>
                    If you have any other non-support inquiries (sponsoring, pro
                    plans, etc.), please contact us using our contact form.
                  </p>
                  <div className='mt-auto text-center'>
                    <a href='/contact-form/'>Contact us</a>
                  </div>
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
