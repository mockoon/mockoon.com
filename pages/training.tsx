import { addHours, format, isFuture } from 'date-fns';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import CompanyLogos from '../components/company-logos';
import Hero from '../components/hero';
import Meta from '../components/meta';
import { courseDates } from '../constants/courses';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Live Training",
  description:
    'Get started with Mockoon applications (desktop and CLI), and learn how to make the most of API mocking. Training delivered by the creator of Mockoon!'
};

const keyPoints = [
  'Get started with Mockoon applications (desktop and CLI).',
  'Learn how to use advanced key features.',
  'Step-by-step progression from beginner to advanced user.',
  'Training delivered by the creator of Mockoon!'
];

const faq: AccordionData = [
  {
    items: [
      {
        title: 'How long does the training last?',
        content:
          'The training lasts 4 hours (see schedule above). We can also accommodate custom training schedules. <a href="/contact-form/">Contact us</a> for more information.'
      },
      {
        title: 'How many participants will attend the training?',
        content:
          'Ideal group size is below 10 participants. If you have a larger team, we can accommodate custom training schedules. <a href="/contact-form/">Contact us</a> for more information.'
      },
      {
        title: 'Do you provide a certificate of completion?',
        content:
          'Yes, we will provide you with a certificate of completion for the training.'
      },
      {
        title: 'Do I need to have any prior knowledge to attend the training?',
        content: 'Basic knowledge of programming and APIs is recommended.'
      },
      {
        title: 'Do you offer discounts?',
        content:
          'We offer a discount on the course price for students and non-profit organizations. Do not hesitate to <a href="/contact-form/">contact us</a> to get a discount.'
      }
    ]
  }
];

const courseContent: AccordionData = [
  {
    items: [
      {
        title: 'Hour 1: Getting started with Mockoon',
        content: [
          'Introduction to Mockoon and installation',
          'Discover the main features of the application',
          'Create your first mock API',
          'Configure your server settings',
          'Further configuration of your mock API (headers, query parameters, etc.)'
        ]
      },
      {
        title: 'Hour 2: Craft realistic scenarios',
        content: [
          'Use templating to create dynamic and realistic responses',
          'Create multiple responses for a route',
          'Chaos testing with random and sequential modes',
          'Add rules to serve the right response at the right time'
        ]
      },
      {
        title: 'Hour 3: Integrate into your workflow',
        content: [
          'Partial mocking with the proxy mode',
          'Record and replay requests to create mocks',
          'Import an OpenAPI or Swagger file to create mocks',
          'Deploy your mocks anywhere with the CLI',
          'Discover the Docker image and GitHub Actions integration'
        ]
      },
      {
        title: 'Hour 4: Advanced features',
        content: [
          'Create reusable mock data with the data buckets',
          'Create automated CRUD endpoints',
          'Trigger callbacks and webhooks',
          'Create global rules and route guards',
          'Simulate complex scenarios with variables'
        ]
      }
    ]
  }
];

const Training: FunctionComponent = function () {
  const dates = courseDates.filter((date) => isFuture(date));

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='🎓 Mockoon <span class="text-primary">Live Training</span>'
        subtitle='Schedule a live training session for yourself or your team and learn how to make the most of Mockoon applications'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-7'>
              <p>
                This <strong>live training</strong> is crafted to kickstart your
                journey with Mockoon applications (desktop and CLI), helping you{' '}
                <strong>harness the full potential of API mocking</strong>. It
                will guide you through every step of your progression, from
                novice to advanced user, teaching you to{' '}
                <strong>create, optimize, and deploy</strong> your first mock
                API effortlessly.
              </p>
              {keyPoints.map((keyPoint, keyPointIndex) => (
                <div key={`taskcomingsoon${keyPointIndex}`} className='d-flex'>
                  <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                    <i className='icon icon-check'></i>
                  </div>
                  <p className='text-gray-800'>{keyPoint}</p>
                </div>
              ))}
              <h3 className='my-6 fw-medium'>Training schedule</h3>

              <Accordion
                data={courseContent}
                openFirst
                counterSuffix={{ singular: 'topic', plural: 'topics' }}
              />
            </div>

            <div className='col-12 col-lg-5 sticky-top'>
              <div className='card shadow-light-lg mb-6 mb-md-0'>
                <div className='card-body'>
                  <img
                    src='/images/official-online-course/mockoon-official-online-course.png'
                    className='img-fluid mx-auto d-block rounded'
                    alt='screenshot of Mockoon desktop application'
                    width='1400'
                    height='797'
                  />
                  <div className='py-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div className='avatar avatar-xl'>
                        <img
                          className='avatar-img img-thumbnail rounded-circle mr-4'
                          src='/images/about/guillaume.jpg'
                          alt='Creator of Mockoon'
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className='ps-5'>
                        <p className='fs-sm fw-bold mb-0'>by Guillaume</p>
                        <p className='fs-sm text-gray-700 mb-0'>
                          Creator of Mockoon
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='text-center text-gray-700 mb-4'>
                    Next available sessions:
                  </p>

                  <p className='text-center text-gray-700 mb-4'>
                    {courseDates.map((date) => (
                      <>
                        <strong key={date.toISOString()}>
                          {format(date, 'PPP')} - from {format(date, 'HH:mm')}{' '}
                          to {format(addHours(date, 4), 'HH:mm OOOO')}
                        </strong>
                        <br />
                      </>
                    ))}
                  </p>

                  <div className='text-center'>
                    <a
                      href='https://book.stripe.com/28E9AT7rqaKZeI59gX7g404'
                      className='btn btn-primary'
                    >
                      Book
                    </a>
                  </div>
                  <p className='text-center text-gray-700 mt-4 mb-0 fs-sm'>
                    Price: 199 USD (excluding taxes) per participant (virtual
                    class)
                    <br />
                    Be sure to enter a valid email address as we will get in
                    touch with you after your booking to invite you to the
                    training session.
                    <br />
                    <br />
                    <Link href='/contact-form/'>Contact us</Link> for group
                    bookings or custom training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8'>
        <CompanyLogos />
      </section>

      <section
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
        id='faq'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold mb-6 text-center'>Training FAQ</h2>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
