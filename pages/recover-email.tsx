import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: 'Recover your email address',
  description: 'Recover your email address to access your Mockoon Cloud account'
};

const RecoverEmail: FunctionComponent = function () {
  const { applyEmailLinkActionCode, reload, getIdToken } = useAuth();
  const router = useRouter();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  let code = router.query.code?.toString();

  const verify = async (code: string) => {
    setIsVerifying(true);

    try {
      await applyEmailLinkActionCode(code);
      // user will be logged out
      setIsConfirmed(true);

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (e) {
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (code && !isConfirmed) {
      verify(code);
    } else if (!code) {
      router.push('/');
    }
  }, [code, isConfirmed]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isVerifying && <LoadingPage />}

      {!isVerifying && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
                {isConfirmed && (
                  <>
                    <h1 className='mb-0 fw-bold text-center'>
                      Email address recovered
                    </h1>
                    <div className='alert alert-success mt-6 fs-5'>
                      <i className='icon-check me-2'></i>
                      <span className='fw-bold'>Success! </span> You have
                      successfully recovered your email address.
                    </div>
                    {isConfirmed && <p>Redirecting to the login page...</p>}
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

export default RecoverEmail;
