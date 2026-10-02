import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Meta from '../../components/meta';
import PaddleScript from '../../components/paddle';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';

const proYearlyPrice = 120;
const proTeamMinLicenses = 5;

export default function ProCheckout() {
  const router = useRouter();
  const isTrial = router.query.mode !== 'subscription';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [licenses, setLicenses] = useState<number | ''>(proTeamMinLicenses);

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

  const purchaseLicenses = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/pro/purchases/transaction`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, licenses })
        }
      );

      if (!response.ok) {
        throw new Error('Unable to create purchase transaction');
      }

      const payload: { email: string; transactionId: string } =
        await response.json();

      if (!payload.transactionId) {
        throw new Error('Missing transaction ID');
      }

      // @ts-ignore
      Paddle.Checkout.open({
        settings: {
          variant: 'one-page',
          theme: 'light',
          locale: 'en'
        },
        transactionId: payload.transactionId,
        customer: { email: payload.email }
      });
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = proYearlyPrice * (licenses || 0);
  const exceedsLicenseLimit = licenses !== '' && licenses > 100;
  const meta = isTrial
    ? {
        title: 'Start your Mockoon Pro trial',
        description: 'Request a 14-day self-hosted Mockoon Pro trial'
      }
    : {
        title: 'Purchase Mockoon Pro licenses',
        description: 'Purchase licenses for self-hosted Mockoon Pro'
      };

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <PaddleScript checkoutCompletedUrl='/pro/checkout/thank-you/' />
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
                      className='btn btn-sm btn-primary'
                      disabled={isSubmitting}
                    >
                      Email me a verification link
                    </button>
                    {isSubmitting && <Spinner small />}
                  </div>
                </form>
              ) : (
                <form onSubmit={purchaseLicenses}>
                  <div className='mb-4'>
                    <label
                      htmlFor='pro-purchase-email'
                      className='form-label fw-bold'
                    >
                      Email address
                    </label>
                    <input
                      id='pro-purchase-email'
                      type='email'
                      className='form-control'
                      autoComplete='email'
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder='you@example.com'
                    />
                    <small className='text-gray-700'>
                      Your license will be sent to this address after payment.
                    </small>
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='pro-licenses'
                      className='form-label fw-bold'
                    >
                      Number of licenses
                    </label>
                    <input
                      id='pro-licenses'
                      type='number'
                      className={`form-control ${
                        exceedsLicenseLimit ? 'is-invalid' : ''
                      }`}
                      min={proTeamMinLicenses}
                      max={100}
                      step={1}
                      required
                      value={licenses}
                      onChange={(event) => {
                        setLicenses(
                          event.target.value === ''
                            ? ''
                            : Number(event.target.value)
                        );
                      }}
                      onBlur={() => {
                        setLicenses((value) =>
                          value === '' || value > 100
                            ? value
                            : Math.max(proTeamMinLicenses, value)
                        );
                      }}
                    />
                    {exceedsLicenseLimit && (
                      <div className='invalid-feedback d-block'>
                        For more than 100 licenses, please{' '}
                        <Link href='/contact-form/'>contact us</Link>.
                      </div>
                    )}
                    <small className='text-gray-700'>
                      Each license can be assigned to one user or one running
                      mock instance. Minimum purchase: {proTeamMinLicenses}{' '}
                      licenses.
                    </small>
                  </div>
                  {hasError && (
                    <div className='alert alert-danger'>
                      Unable to start checkout. Please try again later.
                    </div>
                  )}
                  <div className='form-check mb-4'>
                    <input
                      id='pro-purchase-terms'
                      type='checkbox'
                      className='form-check-input'
                      required
                    />
                    <label
                      htmlFor='pro-purchase-terms'
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
                      className='btn btn-sm btn-primary'
                      disabled={isSubmitting}
                    >
                      Continue to secure checkout
                    </button>
                    {isSubmitting && <Spinner small />}
                  </div>
                </form>
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
                    <strong>{isTrial ? 'Free' : `€${totalPrice}/year`}</strong>
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
                    <span>{isTrial ? '5' : licenses}</span>
                  </div>
                  {!isTrial && (
                    <>
                      <div className='d-flex justify-content-between mt-2'>
                        <span>Billing</span>
                        <span>Yearly</span>
                      </div>
                      <p className='text-gray-700 fs-sm mt-4 mb-0'>
                        Prices exclude applicable taxes. Minimum purchase:{' '}
                        {proTeamMinLicenses} licenses.
                      </p>
                    </>
                  )}
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
