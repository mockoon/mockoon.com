import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const CancellationSurvey: FunctionComponent = function () {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { isSubmitting, isValid }
  } = useForm();
  const router = useRouter();
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // get query param to fill userId
  let userId = router.query.userId?.toString();

  useEffect(() => {
    if (userId) {
      setValue('userId', userId);
      router.replace('/cancellation-survey', undefined, { shallow: true });
    }
  }, [userId]);
  setValue('formName', 'cancellation_survey');

  const onSubmit = async (data) => {
    if (!data['work_address'] && isValid && getValues().userId) {
      delete data['work_address'];

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/survey`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }
        );

        if (response.status === 204) {
          setSubmitSuccess(true);
          reset();
          setValue('userId', null);
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
        title="We'd Love Your Feedback"
        description="Help us improve Mockoon Cloud by sharing why you're leaving. It only takes a minute!"
      />

      <Hero
        title="We'd Love Your Feedback"
        subtitle="Help us improve Mockoon Cloud by sharing why you're leaving. It only takes a minute!"
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
                or fill the form below.{' '}
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
                  <input
                    className='form-control'
                    name='userId'
                    type='hidden'
                    required
                    {...registerFormField('userId')}
                  />
                  <input
                    className='form-control'
                    name='formName'
                    type='hidden'
                    required
                    {...registerFormField('formName')}
                  />
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='contactName'>
                      What's the main reason for your cancellation?
                    </label>

                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='reason'
                        id='reason1'
                        value='no longer needed'
                        required
                        {...registerFormField('reason')}
                      />
                      <label className='form-check-label' htmlFor='reason1'>
                        I no longer need the service
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='reason'
                        id='reason2'
                        value='too expensive'
                        required
                        {...registerFormField('reason')}
                      />
                      <label className='form-check-label' htmlFor='reason2'>
                        It's too expensive
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='reason'
                        id='reason3'
                        value='found alternative solution'
                        required
                        {...registerFormField('reason')}
                      />
                      <label className='form-check-label' htmlFor='reason3'>
                        I found an alternative solution
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='reason'
                        id='reason4'
                        value='technical issues'
                        required
                        {...registerFormField('reason')}
                      />
                      <label className='form-check-label' htmlFor='reason4'>
                        I experienced technical issues
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='reason'
                        id='reason5'
                        value='lack of features'
                        required
                        {...registerFormField('reason')}
                      />
                      <label className='form-check-label' htmlFor='reason5'>
                        The features didn't meet my needs
                      </label>
                    </div>
                  </div>
                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='feedback'>
                      Additional feedback:
                    </label>

                    <textarea
                      className='form-control'
                      name='feedback'
                      id='feedback'
                      rows={5}
                      placeholder=''
                      {...registerFormField('feedback')}
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
                      Message sent! Thank you for your feedback.
                    </div>
                  </div>
                )}

                {isSubmitting && <Spinner />}

                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <button
                      type='submit'
                      className='btn btn-primary-subtle lift'
                      disabled={isSubmitting || !isValid || !getValues().userId}
                    >
                      Send
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

export default CancellationSurvey;
