import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';

const storageKey = 'aws-marketplace-claim';
const isClaim = (value: string | null) =>
  value &&
  value.length <= 16384 &&
  /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(value);

export default function AwsMarketplace() {
  const [claim, setClaim] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.slice(1)).get(
      'claim'
    );
    const failed = new URLSearchParams(window.location.search).has('error');
    try {
      if (failed) sessionStorage.removeItem(storageKey);
      else if (isClaim(token)) sessionStorage.setItem(storageKey, token!);
      const saved = sessionStorage.getItem(storageKey);
      setClaim(!failed && isClaim(saved) ? saved : null);
    } catch {
      setClaim(!failed && isClaim(token) ? token : null);
    }
    if (token !== null)
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    if (failed)
      setError(
        'Unable to verify your purchase. Open Set up your account in AWS Marketplace again.'
      );
    setReady(true);
  }, []);

  const activate = async (event: FormEvent) => {
    event.preventDefault();
    if (!claim || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/marketplace/aws/claim`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ claim, email }),
          cache: 'no-store',
          referrerPolicy: 'no-referrer'
        }
      );
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          typeof result.message === 'string'
            ? result.message
            : 'Unable to activate your purchase. Please retry.'
        );
      if (result.status !== 'QUEUED')
        throw new Error(
          'Unable to confirm license delivery. Please contact us.'
        );
      setSubmitted(true);
      setClaim(null);
      try {
        sessionStorage.removeItem(storageKey);
      } catch {}
    } catch (failure) {
      setError(
        failure instanceof Error
          ? failure.message
          : 'Unable to activate your purchase. Please retry.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout footerBanner='contact'>
      <Meta
        title='Activate Mockoon Pro | AWS Marketplace'
        description='Receive your Mockoon Pro license purchased through AWS Marketplace.'
      />
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <meta name='referrer' content='no-referrer' />
      </Head>
      <main className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6'>
              <p className='text-primary fw-bold mb-2'>AWS Marketplace</p>
              <h1 className='h2 mb-4'>Activate Mockoon Pro</h1>
              {!ready && <Spinner />}
              {error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )}
              {submitted && (
                <div className='alert alert-success mb-5' role='status'>
                  Your license is queued for delivery to{' '}
                  <strong className='text-break'>{email.trim()}</strong>. Check
                  your inbox for your license key and setup details.
                </div>
              )}
              {ready && claim && !submitted && (
                <form onSubmit={activate} className='mb-5'>
                  <label htmlFor='marketplace-email' className='form-label'>
                    Delivery email
                  </label>
                  <input
                    id='marketplace-email'
                    type='email'
                    className='form-control mb-4'
                    autoComplete='email'
                    required
                    maxLength={254}
                    value={email}
                    disabled={submitting}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <div className='d-flex align-items-center gap-3'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={submitting}
                    >
                      Email my license
                    </button>
                    {submitting && <Spinner small />}
                  </div>
                </form>
              )}
              {ready && !claim && !submitted && !error && (
                <p className='mb-5'>
                  Open this page using Set up your account from your AWS
                  Marketplace purchase.
                </p>
              )}
              <p className='text-gray-700 mb-0'>
                For activation or deployment help,{' '}
                <Link href='/contact-form/'>contact the Mockoon team</Link>.
                Manage your subscription through AWS Marketplace.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
