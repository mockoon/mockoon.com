import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const meta = {
  title: 'Email address confirmation',
  description: 'Verify your email address to subscribe to our newsletter'
};

export default function () {
  const router = useRouter();
  let confirmToken = router.query.confirmToken?.toString();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verify = async (confirmToken) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ confirmToken })
        }
      );

      if (response.status === 204) {
        setIsConfirmed(true);
      } else {
        setIsConfirmed(false);
      }

      setIsLoading(false);
    } catch {
      setIsConfirmed(false);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (confirmToken && !isConfirmed) {
      verify(confirmToken);
    } else if (!confirmToken) {
      setIsLoading(false);
    }
  }, [confirmToken, isConfirmed]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row align-items-center justify-content-center gx-0'>
            <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
              <h1 className='mb-0 fw-bold text-center'>
                Confirming your email address
              </h1>
              {!isLoading && isConfirmed && (
                <div className='alert alert-success mt-6 fs-5'>
                  <i className='icon-check me-2'></i>
                  <span className='fw-bold'>Success! </span> Your email address
                  is verified. You are now subscribed to our newsletter.
                </div>
              )}
              {!isLoading && !isConfirmed && (
                <div className='alert alert-danger mt-6 fs-5'>
                  <i className='icon-check me-2'></i>
                  <span className='fw-bold'>Error! </span> The email address
                  could not be verified. Please try again.
                </div>
              )}

              {isLoading && (
                <div className='my-8'>
                  <Spinner />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
