import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Pro plans",
  description:
    'Discover Mockoon Pro plans with our cloud platform: data synchronization, team collaboration and online mock API deployments'
};

const faq: AccordionData = [
  {
    title: 'Pro plans FAQ',
    items: [
      {
        question: 'What services will be available?',
        answer:
          '<p>We plan to provide the following services:</p><ul><li>Data synchronization for individual developers (2023).</li><li>IA-powered API mocks generation (2023).</li><li>Data synchronization for teams (no ETA).</li><li>Cloud deployment of mock APIs (no ETA).</li></ul>'
      },
      {
        question: 'When will these services be available?',
        answer:
          "We don't have a release date yet, but we would like to make the first service (data synchronization for individual developers) available later this year. Subscribe above to be notified when it is released."
      },
      {
        question: 'Will there be a beta test?',
        answer:
          'We plan to have a closed beta phase later this year. Join our Discord channel or subscribe above if you want to participate.'
      },
      {
        question: 'Can I give feedback on the features?',
        answer:
          'Sure! You can join us on our <a href="https://discord.gg/MutRpsY5gE" target="_blank">Discord server</a>. We will be happy to hear from you.'
      }
    ]
  }
];
const Pro: FunctionComponent = function () {
  return (
    <Layout footerBanner='newsletter'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="Mockoon's <span class='text-primary'>Pro plans</span>"
        subtitle="We are building a cloud platform for Mockoon with some exciting features such as data synchronization and IA-powered API mocks generation. Join the waitlist for our beta program and we'll let you know when the services are generally available."
        ctaContent={<EmailForm formType='productpreview' />}
        mainPicture='/images/pro-hero.png'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
        <div className='row mt-6'>
          <div className='text-center'>
            <p className='has-text-centered pt-4'>
              <a className='btn btn-secondary-soft' href='/enterprise/'>
                Looking for enterprise support?
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pro;
