import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import Accordion from '../components/accordion';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const faq: AccordionData = [
  {
    title: 'Enterprise support',
    items: [
      {
        question: 'What dedicated support means?',
        answer:
          'One of the official maintainers will join and be available on the platform of your choice (email, Slack, etc.) to answer support requests and any questions you may have about the project.'
      },
      {
        question: 'Bug reports prioritization',
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
        question: 'Invoicing and contracting company',
        answer:
          'Our enterprise services are provided by <strong>1kB SARL-S</strong>, a company incorporated in Luxembourg under the no. B257186.<br/>We can invoice in different currencies and provide quotes. Let us know your specific needs.<br/><br/>VAT number: LU33209738'
      }
    ]
  }
];

const Enterprise: FunctionComponent = function () {
  const {
    register: registerFormField,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const onSubmit = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      try {
        await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        reset();
      } catch {
        setError('error', {
          type: 'manual',
          message:
            'Something went wrong! We are sorry for the inconvenience. You can contact us manually by email at team@mockoon.com.'
        });
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
            <div className='col-12 col-lg-4 offset-lg-2'>
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
                    <span
                      className='price display-3 mb-0'
                      data-annual='0'
                      data-monthly='0'
                    >
                      500
                    </span>
                    <span className='h3 align-self-end mb-1'>/mo</span>
                  </div>

                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p>Dedicated support</p>
                  </div>
                  <div className='d-flex'>
                    <div className='badge badge-rounded-circle bg-success-soft mt-1 me-4'>
                      <i className='icon-check'></i>
                    </div>

                    <p className='mb-5'>Prioritized bug reports</p>
                  </div>

                  <a href='#form' className='btn w-100 btn-primary'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
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

                    <p>Mockoon's tool deployment and management</p>
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
                Contact us to get more information about our Enterprise support
                plan or the custom services we offer. We will be glad to help
                you.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <form
                onSubmit={(e) => {
                  clearErrors();
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
                {errors.error && (
                  <div className='row justify-content-center'>
                    <div className='col-auto text-danger text-center fw-bold pb-4'>
                      {errors.error.message}
                    </div>
                  </div>
                )}
                {isSubmitSuccessful && (
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
