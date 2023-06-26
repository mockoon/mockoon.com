import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: "Mockoon's cloud signup",
  description: 'Get access to the Mockoon Cloud service'
};

const Signup: FunctionComponent = function () {
  const {
    isAuth,
    user,
    isLoading: isAuthLoading,
    signUp,
    emailVerification
  } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const isInApp = router.query.inapp === 'true';

  const {
    register: registerFormField,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    setError(null);

    if (!data['work_address']) {
      delete data['work_address'];

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
    if (isInApp) {
      localStorage.setItem('redirect', '/app-auth/');
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
  }, [isSubmitting, isAuthLoading, user, isAuth, isInApp]);

  return (
    <Layout footerBanner='newsletter'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
                <h1 className='mb-0 fw-bold text-center'>Sign up</h1>

                <p className='mb-6 text-center text-muted'>
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
                    />
                  </div>
                  <div className='form-check mb-5'>
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
                  {isSubmitting && <Spinner />}

                  <button
                    className='btn w-100 btn-primary'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Sign up
                  </button>
                </form>

                <p className='mb-0 fs-sm text-center text-muted'>
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
