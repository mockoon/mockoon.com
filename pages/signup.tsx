import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import LoadingPage from '../components/loading-page';
import LoginProviders from '../components/login-providers';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: "Mockoon's cloud signup",
  description: 'Get access to the Mockoon Cloud service'
};

const Signup: FunctionComponent = function () {
  const emailTypos = {
    'gmai.com': 'gmail.com',
    'gamil.com': 'gmail.com',
    'gmal.com': 'gmail.com',
    'gmaill.com': 'gmail.com'
  };

  const {
    isAuth,
    user,
    isLoading: isAuthLoading,
    signUp,
    emailVerification,
    signInGoogle
  } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const isInApp = router.query.inapp === 'true';
  const authCallback = router.query.authCallback as string;
  const {
    register: registerFormField,
    watch,
    handleSubmit,
    getValues,
    formState: { isSubmitting }
  } = useForm();
  const [passwordStrength, setPasswordStrength] = useState(0);

  const onGoogleSignIn = async () => {
    try {
      await signInGoogle();
    } catch (error) {}
  };

  const onSubmit = async (data) => {
    setError(null);

    if (!data['work_address']) {
      delete data['work_address'];

      if (data['newsletter']) {
        localStorage.setItem('newsletter', 'true');
      }

      try {
        const userCredentials = await signUp(data.email, data.password);

        if (!userCredentials.user.emailVerified) {
          await emailVerification();
          router.push('/email-verification/');
        }
      } catch (error) {
        if (error.message.indexOf('unauthorized email') > -1) {
          setError(
            'Email provider not allowed. Please use another email address.'
          );
        } else {
          setError('An error occurred. Please try again.');
        }
      }
    }
  };

  useEffect(() => {
    if (isInApp || authCallback) {
      localStorage.setItem('redirect', '/app-auth/');
    }

    if (authCallback) {
      localStorage.setItem('authCallback', authCallback);
    }

    if (!isSubmitting && !isAuthLoading && user && isAuth) {
      const redirect = localStorage.getItem('redirect');

      if (redirect) {
        localStorage.removeItem('redirect');
        router.push(redirect);
      } else {
        router.push('/account/info/');
      }
    }
  }, [isSubmitting, isAuthLoading, user, isAuth, isInApp, authCallback]);

  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
                <h1 className='mb-0 fw-bold text-center'>Sign up</h1>

                <p className='mb-6 text-center text-gray-700'>
                  Get access to the Mockoon Cloud service.
                </p>

                <form
                  className='mb-6'
                  onSubmit={(e) => {
                    handleSubmit(onSubmit)(e);
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
                      placeholder='name@address.com'
                      required
                      {...registerFormField('email')}
                    />
                    {emailTypos[watch('email')?.split('@')[1]] && (
                      <p className='text-center text-gray-800'>
                        Did you mean{' '}
                        <span className='fw-bold'>
                          {emailTypos[watch('email')?.split('@')?.[1]]}
                        </span>
                        ?
                      </p>
                    )}
                  </div>

                  <div className='form-group mb-5'>
                    <label className='form-label' htmlFor='new-password'>
                      Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='new-password'
                      autoComplete='new-password'
                      placeholder='Enter your password'
                      required
                      {...registerFormField('password')}
                      onChange={(e) => {
                        // set password strength by calculating points, length should be the primary factor, 14 being a minimum, and upper lower symbols etc adding to the score
                        const password = e.target.value;
                        let points = 0;
                        points += password.length / 2;
                        points += password.length >= 8 ? 3 : 0;
                        points += password.length >= 14 ? 6 : 0;
                        points += /[a-z]/.test(password) ? 2 : 0;
                        points += /[A-Z]/.test(password) ? 2 : 0;
                        points += /\d/.test(password) ? 2 : 0;
                        points += /[^a-zA-Z0-9]/.test(password) ? 4 : 0;

                        setPasswordStrength((points / 25) * 100);
                      }}
                    />
                    <div className='ms-4 d-flex align-items-center'>
                      <label className='text-gray-700'>
                        <small>Strength</small>
                      </label>
                      <div
                        className='progress flex-grow-1 ms-4'
                        role='progressbar'
                        aria-label='password strength'
                        aria-valuenow={passwordStrength}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{
                          height: '2px'
                        }}
                      >
                        <div
                          className='progress-bar'
                          style={{
                            width:
                              (passwordStrength > 100
                                ? 100
                                : passwordStrength) + '%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {isSubmitting && <Spinner />}

                  <button
                    className='btn w-100 btn-primary mb-5'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Sign up
                  </button>

                  <div className='form-check mb-2'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='terms'
                      required
                      {...registerFormField('terms')}
                    />
                    <label className='form-check-label' htmlFor='terms'>
                      I agree to Mockoon's{' '}
                      <Link href={'/privacy/'}>privacy policy</Link> and{' '}
                      <Link href={'/terms/'}>terms of service</Link>.
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='newsletter'
                      {...registerFormField('newsletter')}
                    />
                    <label className='form-check-label' htmlFor='newsletter'>
                      I want to receive Mockoon's newsletter and product updates
                      (usually once a month or less). Your email will not be
                      shared with anyone or used for any other purpose.
                    </label>
                  </div>
                  <FormHoneypot
                    inputRegister={registerFormField('work_address')}
                  />
                  {error && (
                    <div className='row justify-content-center'>
                      <div className='col-auto text-danger text-center fw-bold pb-4'>
                        {error}
                      </div>
                    </div>
                  )}
                </form>
                <div className='or my-6'>OR</div>
                <div className='text-center'>
                  <LoginProviders
                    googleCallback={() => {
                      if (!getValues().terms) {
                        document
                          .querySelector<HTMLInputElement>('#terms')
                          .reportValidity();
                        return;
                      }
                      onGoogleSignIn();
                    }}
                  />
                </div>

                <p className='my-4 fs-sm text-center text-gray-700'>
                  Already have an account? <Link href={'login/'}>Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Signup;
