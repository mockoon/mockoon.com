import { MultiFactorError } from 'firebase/auth';
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
  title: "Mockoon's cloud login",
  description: 'Log in to your Mockoon Cloud account'
};

const Login: FunctionComponent = function () {
  const {
    isAuth,
    user,
    isLoading: isAuthLoading,
    signInEmail,
    signInGoogle,
    verifyTfaCode
  } = useAuth();
  const router = useRouter();
  const isInApp = router.query.inapp === 'true';
  const isWebApp = router.query.webapp === 'true';
  const authCallback = router.query.authCallback as string;
  const [tfaStep, setTfaStep] = useState<MultiFactorError>(null);
  const credentialsForm = useForm();
  const totpForm = useForm();

  const onCredentialsSubmit = async (data) => {
    credentialsForm.clearErrors();

    if (!data['work_address']) {
      delete data['work_address'];

      try {
        await signInEmail(data.email, data.password);
        credentialsForm.reset();
      } catch (error) {
        // handle mfa
        if (error.code === 'auth/multi-factor-auth-required') {
          setTfaStep(error);
          return;
        }

        credentialsForm.setError('root.wrongCredentials', {
          type: 'manual',
          message: 'Wrong credentials'
        });
      }
    }
  };

  const onTotpSubmit = async (data) => {
    totpForm.clearErrors();

    try {
      await verifyTfaCode(tfaStep, data.tfaCode);
      totpForm.reset();
    } catch (error) {
      totpForm.setError('root.verifyTfaCode', {
        type: 'manual',
        message: 'Wrong TOTP code'
      });
    }
  };

  const onGoogleSignIn = async () => {
    try {
      await signInGoogle();
    } catch (error) {
      // handle mfa
      if (error.code === 'auth/multi-factor-auth-required') {
        setTfaStep(error);
        return;
      }
    }
  };

  useEffect(() => {
    if (isInApp || isWebApp || authCallback) {
      localStorage.setItem('redirect', '/app-auth/');
    }

    if (isWebApp) {
      window.parent.postMessage(
        `loaded`,
        `${process.env.NEXT_PUBLIC_WEBAPP_URL}`
      );
      localStorage.setItem('webAppRedirect', '1');
    }

    if (authCallback) {
      localStorage.setItem('authCallback', authCallback);
    }

    if (
      !credentialsForm.formState.isSubmitting &&
      !isAuthLoading &&
      user &&
      isAuth
    ) {
      const redirect = localStorage.getItem('redirect');

      if (redirect) {
        localStorage.removeItem('redirect');
        router.push(redirect);
      } else {
        router.push('/account/info/');
      }
    } else if (
      !credentialsForm.formState.isSubmitting &&
      !isAuthLoading &&
      user &&
      !isAuth
    ) {
      router.push('/email-verification/');
    }
  }, [isAuthLoading, user, isAuth, isInApp, isWebApp, authCallback]);

  return (
    <Layout footerBanner='contact' minimal={isWebApp}>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <>
          <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
            <div className='container'>
              <div className='row align-items-center justify-content-center gx-0'>
                <div
                  className={`col-12 col-md-5 col-lg-4 ${isWebApp ? '' : 'py-8 py-md-11'}`}
                >
                  <h1 className='mb-0 fw-bold text-center'>Log in</h1>
                  <p className='mb-6 text-center text-gray-700'>
                    Access your Mockoon Cloud account.
                  </p>
                  {tfaStep && (
                    <form
                      className='mb-6'
                      onSubmit={(e) => {
                        totpForm.handleSubmit(onTotpSubmit)(e);
                      }}
                    >
                      <div className='form-group'>
                        <label className='form-label' htmlFor='email'>
                          Authentication (TOTP) code
                        </label>
                        <input
                          className='form-control mb-5'
                          placeholder='XXXXXX'
                          maxLength={6}
                          id='tfaCode'
                          type='text'
                          autoComplete='off'
                          required
                          {...totpForm.register('tfaCode')}
                        />
                      </div>
                      {totpForm.formState.errors.root?.verifyTfaCode && (
                        <div className='row justify-content-center'>
                          <div className='col-auto text-danger text-center fw-bold pb-4'>
                            Wrong TOTP code
                          </div>
                        </div>
                      )}
                      {totpForm.formState.isSubmitting && <Spinner />}
                      <button
                        className='btn w-100 btn-primary'
                        type='submit'
                        disabled={totpForm.formState.isSubmitting}
                      >
                        Verify
                      </button>
                    </form>
                  )}

                  {!tfaStep && (
                    <>
                      <form
                        className='mb-6'
                        onSubmit={(e) => {
                          credentialsForm.handleSubmit(onCredentialsSubmit)(e);
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
                            {...credentialsForm.register('email')}
                          />
                        </div>

                        <div className='form-group mb-5'>
                          <label
                            className='form-label'
                            htmlFor='current-password'
                          >
                            Password
                          </label>
                          <input
                            type='password'
                            className='form-control'
                            id='current-password'
                            autoComplete='current-password'
                            placeholder='Enter your password'
                            required
                            {...credentialsForm.register('password')}
                          />
                        </div>

                        <FormHoneypot
                          inputRegister={credentialsForm.register(
                            'work_address'
                          )}
                        />

                        {credentialsForm.formState.errors.root
                          ?.wrongCredentials && (
                          <div className='row justify-content-center'>
                            <div className='col-auto text-danger text-center fw-bold pb-4'>
                              Wrong credentials
                            </div>
                          </div>
                        )}
                        {credentialsForm.formState.isSubmitting && <Spinner />}

                        {!credentialsForm.formState.isSubmitting && (
                          <button
                            className='btn w-100 btn-primary'
                            type='submit'
                          >
                            Log in
                          </button>
                        )}
                      </form>

                      <div className='or my-6'>OR</div>
                      <div className='text-center'>
                        <LoginProviders
                          googleCallback={() => {
                            onGoogleSignIn();
                          }}
                        />
                      </div>
                      <p className='my-4 fs-sm text-center text-gray-700'>
                        Don't have an account yet?{' '}
                        <Link
                          href={'signup/'}
                          target={`${isWebApp ? '_blank' : ''}`}
                        >
                          Sign up
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Login;
