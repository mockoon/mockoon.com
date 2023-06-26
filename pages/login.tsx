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
  title: "Mockoon's cloud login",
  description: 'Log in to your Mockoon Cloud account'
};

const Login: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, signIn } = useAuth();
  const router = useRouter();
  const isInApp = router.query.inapp === 'true';
  const [error, setError] = useState(false);

  const {
    register: registerFormField,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    setError(false);

    if (!data['work_address']) {
      delete data['work_address'];

      try {
        await signIn(data.email, data.password);
      } catch (error) {
        setError(true);
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
  }, [isAuthLoading, user, isAuth, isInApp]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
                <h1 className='mb-0 fw-bold text-center'>Log in</h1>
                <p className='mb-6 text-center text-muted'>
                  Access your Mockoon Cloud account.
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
                    <label className='form-label' htmlFor='current-password'>
                      Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='current-password'
                      autoComplete='current-password'
                      placeholder='Enter your password'
                      required
                      {...registerFormField('password')}
                    />
                  </div>

                  <FormHoneypot
                    inputRegister={registerFormField('work_address')}
                  />
                  {error && (
                    <div className='row justify-content-center'>
                      <div className='col-auto text-danger text-center fw-bold pb-4'>
                        Wrong credentials
                      </div>
                    </div>
                  )}
                  {isSubmitting && <Spinner />}

                  {!isSubmitting && (
                    <button className='btn w-100 btn-primary' type='submit'>
                      Log in
                    </button>
                  )}
                </form>

                <p className='mb-0 fs-sm text-center text-muted'>
                  Don't have an account yet?{' '}
                  <Link href={'signup/'}>Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Login;
