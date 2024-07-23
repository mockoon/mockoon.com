import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: 'Verify your email address',
  description: 'Verify your email address to access your Mockoon Cloud account'
};

const EmailVerification: FunctionComponent = function () {
  const {
    applyEmailVerificationCode,
    emailVerification,
    reload,
    getIdToken,
    user,
    isAuth,
    isLoading: isAuthLoading
  } = useAuth();
  const router = useRouter();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState(null);
  let oobCode = router.query.oobCode?.toString();
  let mode = router.query.mode?.toString();

  const resendEmail = async () => {
    setError(null);

    try {
      await emailVerification();
    } catch (error) {
      if (error.code === 'auth/too-many-requests') {
        setError('Please wait a few minutes before trying again.');
      }
    }
  };

  const verify = async (code: string) => {
    setIsVerifying(true);

    try {
      await applyEmailVerificationCode(code);
      await reload();
      await getIdToken(true);
      setIsConfirmed(true);

      setTimeout(() => {
        const redirect = localStorage.getItem('redirect');

        if (redirect) {
          localStorage.removeItem('redirect');
          router.push(redirect);
        } else {
          router.push('/account/info/');
        }
      }, 3000);
    } catch (e) {
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (user && mode === 'verifyEmail' && oobCode && !isConfirmed) {
      verify(oobCode);
    }
  }, [mode, oobCode, isConfirmed, user]);

  useEffect(() => {
    if (!isAuthLoading && !isConfirmed && !isVerifying) {
      if (user && isAuth) {
        router.push('/account/info/');
      } else if (!user) {
        router.push('/login/');
      }
    }
  }, [isAuthLoading, user, isAuth, isConfirmed]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
                {isAuth && user?.emailVerified && (
                  <>
                    <h1 className='mb-0 fw-bold text-center'>
                      Email address verified
                    </h1>
                    <div className='alert alert-success mt-6 fs-5'>
                      <i className='icon-check me-2'></i>
                      <span className='fw-bold'>Success! </span> Your email
                      address is verified.
                    </div>
                    {isConfirmed && <p>Redirecting to your account...</p>}
                  </>
                )}
                {!isAuth && !user?.emailVerified && (
                  <>
                    <h1 className='mb-0 fw-bold text-center'>
                      Please verify your email address
                    </h1>
                    <p className='mt-6'>
                      We have sent you an email with a link to verify your email
                      address. If you do not receive the email, please check
                      your spam folder.
                    </p>
                    <p>
                      <button
                        type='button'
                        className='btn btn-link'
                        onClick={() => {
                          resendEmail();
                        }}
                      >
                        Resend verification email
                      </button>
                    </p>
                    {error && (
                      <div className='row justify-content-center'>
                        <div className='col-auto text-danger text-center fw-bold pb-4'>
                          {error}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default EmailVerification;
