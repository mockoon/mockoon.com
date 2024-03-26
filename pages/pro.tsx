import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Plans from '../components/plans';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Pro plans",
  description:
    'Discover Mockoon Pro plans with our cloud platform: data synchronization, team collaboration and online mock API deployments'
};

const faq: AccordionData = [
  {
    title: 'Features availability',
    items: [
      {
        title: 'When will the "coming soon" services be available?',
        content:
          'We can only provide an approximate availability period. You can <a href="#product-updates-subscribe">subscribe to the product updates</a> below to be notified of new releases.'
      },
      {
        title: 'Can I give feedback or join a beta test?',
        content:
          'Sure! You can join us on our <a href="https://discord.gg/FtJjkejKGp" target="_blank">Discord server</a>. We will be happy to hear from you.'
      }
    ]
  },
  {
    title: 'Support and training',
    items: [
      {
        title: 'What is the "community support"?',
        content:
          "Community support is the free support channel for Mockoon users. It is available on our <a href='https://github.com/mockoon/mockoon/discussions' target='_blank' rel='noopener'>GitHub repository</a> or <a href='https://discord.gg/FtJjkejKGp' target='_blank' rel='noopener'>Discord server</a>."
      },
      {
        title: 'What is the "priority support" (Team and Enterprise plan)?',
        content:
          'We will provide a priority support channel for your team by email or through the platform of your choice (Slack, etc.). Our priority support service is provided during regular business hours and working days in Luxembourg (9 am to 5 pm, Monday to Friday, Luxembourg time (CET/CEST), excluding public holidays). Please refer to the <a href="/terms/">terms of service</a> for more information.'
      },
      {
        title: 'What is the "welcome online training" (Enterprise plan)?',
        content:
          'We will provide a 1-hour online video call by our founder to help you get started with Mockoon and answer any questions you may have. This training will be scheduled with your team after the purchase of the Enterprise plan. It is limited to 1 session per year and per company. Additional training sessions can be purchased separately. <a href="/contact-form/">Contact us</a> for more information.'
      }
    ]
  },
  {
    title: 'Billing',
    items: [
      {
        title: 'How does per-seat billing work?',
        content:
          'For Team and Enterprise plans, you can choose the number of seats you need. Each seat is billed monthly. You can <a href="/contact-form/">contact us</a> to add or remove seats at any time.'
      },
      {
        title: 'I received emails from Paddle.com, what is it?',
        content:
          'Paddle.com is our payment provider. You will receive emails from them when you purchase a plan, when your subscription is renewed or when you cancel your subscription.'
      },
      {
        title: 'What payment methods do you accept?',
        content:
          'We accept credit cards (Visa, Mastercard, etc.) through our payment provider Paddle. You can also pay by bank transfer for the Enterprise plan. <a href="/contact-form/">Contact us</a> before purchasing for more information.'
      },
      {
        title: 'Should I contact you before purchasing the "Enterprise" plan?',
        content:
          'The Enterprise plan can be purchased directly on our website or through a quote (should you need to pay by bank transfer for example). <a href="/contact-form/">Contact us</a> for more information.'
      },
      {
        title: 'Do you offer discounts for schools, bootcamps or students?',
        content:
          'We offer a discount for education purposes by providing educational institutions with a discount on the Solo plan. Do not hesitate to <a href="/contact-form/">contact us</a> to become a partner.'
      },
      {
        title: 'How can I cancel my subscription?',
        content:
          'You can manage your subscription using the links in the emails you received from Paddle.com. You can also <a href="/contact-form/">contact us</a> and we will help you cancel your subscription.'
      },
      {
        title: 'Can I get a refund?',
        content:
          'We may offer a refund on a case-by-case basis if you have not used the service yet (usage quotas, etc.). Please refer to the <a href="/terms/">terms of service</a> for more information. In any case, do not hesitate to <a href="/contact-form/">contact us</a>. We will be happy to help you.'
      },
      {
        title: 'VAT',
        content:
          'Prices are in USD and exclude VAT. VAT may or may not be charged during checkout depending on various criteria like your location and quality (individual or business).'
      }
    ]
  },
  {
    title: 'Misc',
    items: [
      {
        title: 'Do you offer custom services?',
        content:
          'Our custom services can vary. Here is a brief overview of what type of service we provided in the past:<ul><li>Feature prioritization on the roadmap.</li><li>Advanced support during Mockoon tools deployment or configuration.</li><li>Help with your API mock creation.</li><li>Online training with live video conference.</li></ul><a href="/custom-services/">Learn more</a> about our custom services.'
      },
      {
        title: 'Contracting company',
        content:
          'Our enterprise services are provided by <a href="https://1kb.software" rel="noopener"><strong>1kB SARL-S</strong></a>, a company incorporated in Luxembourg under the no. B257186.<br/>VAT number: LU33209738'
      }
    ]
  }
];

const Pro: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="Mockoon <span class='text-primary'>Pro</span>"
        subtitle='With advanced features for solo developers and teams, Mockoon Pro supercharges your API development. Upgrade today and take your API development to the next level.'
        mainPicture='/images/pro-hero.png'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <Plans showFree={true} showTagline={true} />

      <section
        className='py-6 py-md-8 border-top bg-gradient-light-white'
        id='faq'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold mb-6 text-center'>Pro plans FAQ</h2>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8' id='product-updates-subscribe'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold text-center mb-6'>
                Stay up-to-date with Mockoon Pro feature releases
              </h2>
              <div className='row align-items-center text-lg-start text-center'>
                <div className='col-12 justify-content-end'>
                  <EmailForm formType='productpreview' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pro;
