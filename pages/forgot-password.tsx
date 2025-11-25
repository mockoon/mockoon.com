import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';
import { honeypotFieldName } from '../utils/utils';

const meta = {
  title: "Mockoon's cloud password reset",
  description: 'Reset your Mockoon Cloud account password'
};

const ForgotPassword: FunctionComponent = function () {
  const { isLoading: isAuthLoading, initiatePasswordReset } = useAuth();
  const emailForm = useForm();

  const onEmailSubmit = async (data) => {
    emailForm.clearErrors();

    if (!data[honeypotFieldName]) {
      delete data[honeypotFieldName];

      try {
        await initiatePasswordReset(data.email);
        emailForm.reset();
        localStorage.setItem('resetPasswordEmail', data.email);
      } catch (error) {}
    }
  };

  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <>
          <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
            <div className='container'>
              <div className='row align-items-center justify-content-center gx-0'>
                <div className='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
                  <h1 className='mb-0 fw-bold text-center'>Password Reset</h1>
                  <p className='mb-6 text-center text-gray-700'>
                    Enter your email address to receive a password reset link.
                  </p>

                  <form
                    className='mb-6'
                    onSubmit={(e) => {
                      emailForm.handleSubmit(onEmailSubmit)(e);
                    }}
                  >
                    <div className='form-group'>
                      <label className='form-label' htmlFor='email'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        autoComplete='username'
                        placeholder='name@example.com'
                        required
                        {...emailForm.register('email')}
                      />
                    </div>

                    <FormHoneypot
                      inputRegister={emailForm.register(honeypotFieldName)}
                    />

                    {emailForm.formState.isSubmitted && (
                      <div className='row justify-content-center'>
                        <div className='col-auto text-success text-center fw-bold pb-4'>
                          If an account with that email exists, you will receive
                          a password reset link shortly.
                        </div>
                      </div>
                    )}
                    {emailForm.formState.isSubmitting && <Spinner />}

                    {!emailForm.formState.isSubmitting && (
                      <button className='btn w-100 btn-primary' type='submit'>
                        Send Reset Link
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default ForgotPassword;
