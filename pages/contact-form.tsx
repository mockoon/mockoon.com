import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const ContactForm: FunctionComponent = function () {
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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/email`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }
        );

        if (response.status === 204) {
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
        title="Contact Mockoon's team"
        description='For all non-support inquiries (your Mockoon Cloud subscription, sponsoring, etc.) you can contact us using our contact form. We will get back to you shortly'
      />

      <Hero
        title='Contact us'
        subtitle='For all non-support inquiries (your Mockoon Cloud subscription, sponsoring, etc.), please contact us using the form below'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'>
                Send us an email to{' '}
                <a href='mailto:team@mockoon.com' className='h4'>
                  team@mockoon.com
                </a>{' '}
                or fill the form below. We will be glad to help you.
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
                      Full name*
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
                      Email*
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
                      Message*
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
                <FormHoneypot
                  inputRegister={registerFormField('work_address')}
                />
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

                {isSubmitting && <Spinner />}

                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <button
                      type='submit'
                      className='btn btn-primary-subtle lift'
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

export default ContactForm;
