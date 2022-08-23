import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Accordion from '../components/accordion';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const faq: AccordionData = [
  {
    title: 'Pro and Enterprise support plans',
    items: [
      {
        question: 'What is asynchronous priority support?',
        answer:
          'One of the official maintainers will join and be available through the platform of your choice (email, Slack, etc.) to answer support requests and any questions you may have about the project by writing. This line of support is subject to our response time policy (see below).'
      },
      {
        question: 'How does live video support works?',
        answer:
          'You will be able to schedule video meetings with one of the official maintainers through the platform of your choice (Zoom, Google Meet, etc.) to answer support requests and any questions you may have about the project. This line of support is subject to our response time and business hours policies (see below).'
      },
      {
        question: 'Priority handling of bug reports',
        answer:
          "Bug reports that you open, and confirmed as bugs, will be prioritized on the roadmap. However, this may not directly influence the rhythm of Mockoon's releases."
      },
      {
        question: 'Support business hours',
        answer:
          'Our enterprise support service is available 8 hours per day, from 9 am to 5 pm, Monday to Friday, Luxembourg time (GMT+1). We may accommodate different time zones on a case-by-case basis.'
      },
      {
        question: 'Response time',
        answer: 'Our initial response time is of one business day.'
      }
    ]
  },
  {
    title: 'Custom services',
    items: [
      {
        question: 'What type of custom services do you offer?',
        answer:
          'Our custom services can vary. Here is a brief overview of what type of service we provided in the past:<ul><li>Feature prioritization (the early version of the <a href="/cli/">CLI</a> was partially sponsored by a company).</li><li>Advice and help during Mockoon tools deployment or configuration.</li><li>Online training with live video conference.</li></ul>Contact us for more information.'
      }
    ]
  },
  {
    title: 'Misc',
    items: [
      {
        question: 'VAT',
        answer:
          "The VAT is not included in the current plan's pricing. VAT may or may not be charged depending on various criteria like your location and quality (individual or business)."
      },
      {
        question: 'Invoicing and contracting company',
        answer:
          'Our enterprise services are provided by <a href="https://1kb.software" rel="noopener"><strong>1kB SARL-S</strong></a>, a company incorporated in Luxembourg under the no. B257186.<br/>We can invoice in different currencies and provide quotes. Let us know your specific needs.<br/><br/>VAT number: LU33209738'
      }
    ]
  }
];

const Enterprise: FunctionComponent = function () {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          reset();
        } else {
          setApiError(true);
        }
      } catch {
        setApiError(true);
      }
    }
  };

  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title="Mockoon's enterprise services"
        description="Keep your infrastructure and workflows running smoothly with access to Mockoon's dedicated support and custom services."
        ogType='article'
      />

      <Hero
        title="Mockoon's enterprise services"
        subtitle="Keep your infrastructure and workflows running smoothly with access to Mockoon's dedicated support and custom services."
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row gx-4'>
            <div className='col-12 col-lg-3'>
              <div className='card shadow-lg mb-6 mb-lg-0'>
                <div className='card-body'>
                  <div className='text-center mb-3'>
                    <span className='badge rounded-pill bg-primary-soft'>
                      <span className='h6 text-uppercase'>
                        Community support
                      </span>
                    </span>
                  </div>

                  <div className='d-flex justify-content-center mb-4'>
                    <span className='price display-3 mb-0'>Free</span>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>
                      Available via{' '}
                      <a
                        href='https://github.com/mockoon/mockoon/discussions'
                        target='_blank'
                        rel='noopener'
                      >
                        GitHub
                      </a>{' '}
                      or{' '}
                      <a
                        href='https://discord.gg/MutRpsY5gE'
                        target='_blank'
                        rel='noopener'
                      >
                        Discord
                      </a>
                    </p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>
                      Access to the{' '}
                      <a href='/docs/latest/about/'>documentation</a> and{' '}
                      <a href='/tutorials/'>tutorials</a>
                    </p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-secondary-soft mt-1 me-4'>
                      <i className='icon-remove'></i>
                    </div>

                    <p className='mb-5'>
                      No guarantee of support or problem resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='card shadow-lg mb-6 mb-lg-0'>
                <div className='card-body'>
                  <div className='text-center mb-3'>
                    <span className='badge rounded-pill bg-primary-soft'>
                      <span className='h6 text-uppercase'>Pro support</span>
                    </span>
                  </div>

                  <div className='d-flex justify-content-center mb-4'>
                    <span className='h3 mb-0 mt-1'>$</span>
                    <span className='price display-3 mb-0'>99</span>
                    <span className='h3 align-self-end mb-1'>/mo</span>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>
                      Unlimited asynchronous priority support (email, Slack,
                      etc.)
                    </p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p className='mb-5'>
                      Supports our work on the open-source tools
                    </p>
                  </div>

                  <a href='#form' className='btn w-100 btn-primary'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='card shadow-lg mb-6 mb-lg-0'>
                <div className='card-body'>
                  <div className='text-center mb-3'>
                    <span className='badge rounded-pill bg-primary-soft'>
                      <span className='h6 text-uppercase'>
                        Enterprise support
                      </span>
                    </span>
                  </div>

                  <div className='d-flex justify-content-center mb-4'>
                    <span className='h3 mb-0 mt-1'>$</span>
                    <span className='price display-3 mb-0'>499</span>
                    <span className='h3 align-self-end mb-1'>/mo</span>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>Includes everything in the Pro support plan</p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>
                      Live support (video) and training (up to 4 hours per
                      month)
                    </p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p className='mb-5'>Priority handling of bug reports</p>
                  </div>

                  <a href='#form' className='btn w-100 btn-primary'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div className='card shadow-lg mb-6 mb-md-0'>
                <div className='card-body'>
                  <div className='text-center mb-3'>
                    <span className='badge rounded-pill bg-primary-soft'>
                      <span className='h6 text-uppercase'>Custom services</span>
                    </span>
                  </div>

                  <p className='text-center text-muted mb-5'>
                    Suited for your business
                  </p>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>Mockoon tools deployment and management</p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>Custom feature development</p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>Training</p>
                  </div>

                  <a href='#form' className='btn w-100 btn-primary'>
                    Get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-6 pt-md-8 pb-8 mb-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <div className='row mb-6 mb-md-8'>
                <div className='col text-center'>
                  <h2 className='fw-bold mb-0'>Enterprise services FAQ</h2>
                </div>
              </div>

              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>
      <section id='form' className='pt-8 pt-md-11 pb-8 pb-md-14'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <h2 className='fw-bold'>Mockoon enterprise services</h2>

              <p className='fs-lg text-muted mb-7 mb-md-9'>
                Send us an email to{' '}
                <a href='mailto:team@mockoon.com' className='h4'>
                  team@mockoon.com
                </a>{' '}
                or fill the form below, to get more information about our
                support plans or the custom services we offer. We will be glad
                to help you.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <form
                onSubmit={(e) => {
                  setSubmitSuccess(false);
                  setApiError(false);
                  handleSubmit(onSubmit)(e);
                }}
              >
                <div className='row'>
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='contactName'>
                      Full name
                    </label>

                    <input
                      className='form-control'
                      name='contactName'
                      id='contactName'
                      type='text'
                      placeholder='Full name'
                      required
                      {...registerFormField('contactName')}
                    />
                  </div>
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='contactEmail'>
                      Email
                    </label>

                    <input
                      className='form-control'
                      name='contactEmail'
                      id='contactEmail'
                      type='email'
                      placeholder='hello@domain.com'
                      required
                      {...registerFormField('contactEmail')}
                    />
                  </div>
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='contactCompany'>
                      Company name
                    </label>

                    <input
                      className='form-control'
                      name='contactCompany'
                      id='contactCompany'
                      type='text'
                      {...registerFormField('contactCompany')}
                    />
                  </div>
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='contactMessage'>
                      Message
                    </label>

                    <textarea
                      className='form-control'
                      name='contactMessage'
                      id='contactMessage'
                      rows={5}
                      placeholder='Tell us more about your project and your needs.'
                      required
                      {...registerFormField('contactMessage')}
                    ></textarea>
                  </div>
                </div>
                <label
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1
                  }}
                  htmlFor='work_address'
                ></label>
                <input
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1
                  }}
                  autoComplete='off'
                  type='text'
                  id='work_address'
                  name='work_address'
                  placeholder='Your address here'
                  {...registerFormField('work_address')}
                ></input>
                {apiError && (
                  <div className='row justify-content-center'>
                    <div className='col-auto text-danger text-center fw-bold pb-4'>
                      Something went wrong! We are sorry for the inconvenience.
                      You can contact us manually by email at team@mockoon.com
                    </div>
                  </div>
                )}
                {submitSuccess && (
                  <div className='row justify-content-center'>
                    <div className='col-auto text-success text-center fw-bold pb-4'>
                      Message sent! We will get back to you shortly.
                    </div>
                  </div>
                )}

                {isSubmitting && (
                  <div className='text-center mb-4'>
                    <div className='spinner-border text-primary' role='status'>
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                  </div>
                )}

                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <button
                      type='submit'
                      className='btn btn-primary-soft lift'
                      disabled={isSubmitting}
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enterprise;
