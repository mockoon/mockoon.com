import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import CompanyLogos from '../components/company-logos';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Official Course",
  description:
    'We will soon offer an online course to help you get started with Mockoon applications and learn how to make the most of them.'
};

const keyPoints = [
  'Step-by-step progression from beginner to advanced user',
  'Course delivered by the creator of Mockoon!',
  'Learn to use all Mockoon features',
  'Apply your knowledge with practical exercises'
];

const faq: AccordionData = [
  {
    items: [
      {
        title: 'When will the course be available?',
        content:
          'The course is currently in production and will be available in Q1 2024. You can subscribe to our newsletter to be notified when the course is released.'
      },
      {
        title: 'How long do I have access to the course?',
        content:
          'You will have lifetime access to the course. You will also have access to all future updates to the course.'
      },
      {
        title: 'Can I share my course with my team or someone else?',
        content:
          'Each course purchase is for a single user. If you want to share the course with your team, you can purchase a team license. <a href="/contact-form/">Contact us</a> for more information.'
      },
      {
        title: 'Do you offer discounts?',
        content:
          'We offer a discount on the course price for students, teams and non-profit organizations. Do not hesitate to <a href="/contact-form/">contact our support</a> to get a discount.'
      }
    ]
  }
];

const courseContent: AccordionData = [
  {
    items: [
      {
        title: 'Getting started',
        content: [
          'Introduction to Mockoon',
          'Installing Mockoon desktop application',
          'Create your first mock API'
        ]
      },
      {
        title: 'Creating responses',
        content: [
          'Adding a JSON body',
          'Serving external files',
          'Create reusable mock data with the data buckets',
          'Adding environment and route headers',
          'Adding delays'
        ]
      },
      {
        title: 'Create more realistic responses with templating',
        content: [
          'Introduction to Handlebars templating',
          'Templating helpers support',
          'Using Mockoon helpers',
          'Using Faker.js helpers',
          'Defining global variables',
          'Using the AI assistant'
        ]
      },
      {
        title: 'Dynamic responses with rules',
        content: [
          'Create multiple responses for a route',
          'Identifying the default response',
          'Random and sequential modes',
          'Add rules to serve the right response at the right time',
          'Create global rules to apply to all routes'
        ]
      },
      {
        title: 'Create fully automated CRUD mock endpoints',
        content: [
          'Overview of the CRUD endpoints',
          'Creating a CRUD endpoint',
          'Filtering and searching',
          'Sorting and pagination'
        ]
      },
      {
        title: 'Partial mocking with the proxy mode',
        content: ['Configure the proxy mode', 'Create a partial mock API']
      },
      {
        title: 'Logging and recording',
        content: [
          'Overview of the logs',
          'Record entering requests to create mocks'
        ]
      },
      {
        title: 'Deploy your mocks anywhere with the CLI',
        content: [
          'Installing the CLI',
          'Deploying your mocks to a server',
          'Using the CLI with CI/CD: GitHub Actions'
        ]
      }
    ]
  }
];

const Course: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='🎓 Mockoon <span class="text-primary">Official Course</span> <span class="badge text-bg-gray-300 fs-4 align-text-top ms-2"><i class="icon-new_releases pe-2 text-warning"></i>Coming soon</span>'
        subtitle='We will soon offer an online course to help you get started with Mockoon applications and learn how to make the most of them.'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-7'>
              <p>
                This course has been designed to help you{' '}
                <strong>get started</strong> with Mockoon applications (desktop
                and CLI), and learn{' '}
                <strong>how to use all their features</strong>. It will also
                help you <strong>master API mocking</strong> and many{' '}
                <strong>API concepts</strong>.
              </p>
              <p>This course will be available in 2024 as a video course.</p>

              <div className='mt-6'>
                {keyPoints.map((keyPoint, keyPointIndex) => (
                  <div
                    key={`taskcomingsoon${keyPointIndex}`}
                    className='d-flex'
                  >
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-check'></i>
                    </div>
                    <p className='text-gray-800'>{keyPoint}</p>
                  </div>
                ))}
              </div>

              <h3 className='my-6 fw-medium'>What's inside the course...</h3>

              <Accordion
                data={courseContent}
                openFirst
                counterSuffix={{ singular: 'lesson', plural: 'lessons' }}
              />
            </div>

            <div className='col-12 col-lg-5 sticky-top'>
              <div className='card shadow-light-lg mb-6 mb-md-0'>
                <div className='card-body'>
                  <img
                    src='/images/official-online-course/mockoon-official-online-course.png'
                    className='img-fluid mx-auto d-block rounded'
                    alt='select generate from template in the route creation menu to create a AI-generated mock API endpoint'
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
                        <p className='fs-sm fw-bold mb-0'>Guillaume</p>
                        <p className='fs-sm text-gray-700 mb-0'>
                          Creator of Mockoon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <span className='h2 mb-0 mt-2'>$</span>
                    <span className='price display-2 mb-0'>49</span>
                    <span className='h3 mb-0 mt-2'>*</span>
                  </div>
                  <p className='text-center text-body-secondary mb-5'>
                    One-time payment - Individual license
                  </p>
                  <p className='text-center'>
                    Get informed when the course is available and get a{' '}
                    <strong>25% discount</strong> on the regular course price.
                  </p>
                  <EmailForm formType='coursepreview' />
                </div>
                <div className='card-footer'>
                  <p className='mb-0 text-center h6 text-gray-700'>
                    * Price in USD excluding VAT or sales tax where applicable.
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
              <h2 className='fw-bold mb-6 text-center'>Official course FAQ</h2>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Course;
