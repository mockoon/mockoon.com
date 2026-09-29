import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';

const meta = {
  title: 'Start your Mockoon Pro trial',
  description: 'Request a 14-day self-hosted Mockoon Pro trial'
};

export default function ProCheckout() {
  const router = useRouter();
  const isTrial = router.query.mode !== 'subscription';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const requestTrial = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/pro/trials/request`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        }
      );

      if (!response.ok) {
        throw new Error('Unable to request trial');
      }

      setIsSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <main className='py-8 py-md-11 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-6'>
            <div className='col-12 col-lg-6'>
              <p className='text-uppercase fw-bold text-primary mb-2'>
                Mockoon Pro
              </p>
              <h1 className='fw-bold mb-3'>
                {isTrial ? 'Start your free trial' : 'Purchase licenses'}
              </h1>
              <p className='lead text-gray-700 mb-6'>
                Run Mockoon Pro on your own infrastructure. No account is
                required.
              </p>

              {isSubmitted ? (
                <div className='alert alert-success'>
                  Check your inbox. We sent you a verification link to continue
                  your trial request. If you do not receive an email, please{' '}
                  <Link href='/contact-form/'>contact us</Link>.
                </div>
              ) : isTrial ? (
                <form onSubmit={requestTrial}>
                  <div className='mb-4'>
                    <label htmlFor='pro-email' className='form-label fw-bold'>
                      Work email address
                    </label>
                    <input
                      id='pro-email'
                      type='email'
                      className='form-control'
                      autoComplete='email'
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder='you@company.com'
                    />
                    <small className='text-gray-700'>
                      We will email you a link to verify your address.
                    </small>
                  </div>
                  {hasError && (
                    <div className='alert alert-danger'>
                      Unable to request a trial. Please try again later.
                    </div>
                  )}
                  <div className='form-check mb-4'>
                    <input
                      id='pro-trial-terms'
                      type='checkbox'
                      className='form-check-input'
                      required
                    />
                    <label
                      htmlFor='pro-trial-terms'
                      className='form-check-label text-gray-700 fs-sm'
                    >
                      I agree to the Mockoon{' '}
                      <Link href='/privacy/'>privacy policy</Link> and{' '}
                      <Link href='/terms/'>terms of service</Link>.
                    </label>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting}
                    >
                      Email me a verification link
                    </button>
                    {isSubmitting && <Spinner small />}
                  </div>
                </form>
              ) : (
                <div className='alert alert-info'>
                  Online license purchases are coming soon.
                </div>
              )}
            </div>

            <div className='col-12 col-lg-4'>
              <div className='card shadow-light-lg'>
                <div className='card-header'>
                  <h4 className='mb-0'>Order summary</h4>
                </div>
                <div className='card-body'>
                  <div className='d-flex justify-content-between mb-3'>
                    <span>
                      {isTrial ? 'Mockoon Pro trial' : 'Mockoon Pro licenses'}
                    </span>
                    <strong>{isTrial ? 'Free' : 'To be configured'}</strong>
                  </div>
                  <hr />
                  {isTrial && (
                    <div className='d-flex justify-content-between mb-2'>
                      <span>Duration</span>
                      <span>14 days</span>
                    </div>
                  )}
                  <div className='d-flex justify-content-between'>
                    <span>Licenses</span>
                    <span>{isTrial ? '10' : 'Choose during checkout'}</span>
                  </div>
                  {isTrial && (
                    <p className='text-gray-700 fs-sm mt-4 mb-0'>
                      One trial is available per eligible company.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
