import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';

type TrialVerificationStatus = 'CREATED' | 'INELIGIBLE' | 'ALREADY_USED';

const meta = {
  title: 'Confirm your Mockoon Pro trial',
  description: 'Confirm your work email to start a Mockoon Pro trial'
};

export default function ProTrialVerification() {
  const router = useRouter();
  const requestId = router.query.requestId?.toString();
  const token = router.query.token?.toString();

  const {
    mutate: verifyTrial,
    data: status,
    isPending,
    isError
  } = useMutation<TrialVerificationStatus>({
    mutationFn: async () => {
      if (!requestId || !token) {
        throw new Error('Invalid verification link');
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/pro/trials/verify`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ requestId, token })
        }
      );

      if (!response.ok) {
        throw new Error('Unable to verify trial request');
      }

      const result = (await response.json()) as {
        status: TrialVerificationStatus;
      };

      return result.status;
    },
    onSuccess: (verificationStatus) => {
      if (
        verificationStatus === 'INELIGIBLE' ||
        verificationStatus === 'ALREADY_USED'
      ) {
        void router.replace('/pro/checkout/?mode=subscription');
      }
    }
  });

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row align-items-center justify-content-center gx-0'>
            <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
              <h1 className='fw-bold'>Confirm your Mockoon Pro trial</h1>

              {!status && !isError && (
                <>
                  <p className='lead text-gray-700 mt-4'>
                    Confirm your email to check company eligibility and request
                    your 14-day license.
                  </p>
                  <button
                    type='button'
                    className='btn btn-primary mt-3'
                    disabled={
                      !router.isReady || !requestId || !token || isPending
                    }
                    onClick={() => verifyTrial()}
                  >
                    {isPending
                      ? 'Activating trial...'
                      : 'Confirm and start trial'}
                  </button>
                  {isPending && (
                    <div className='mt-4'>
                      <Spinner />
                    </div>
                  )}
                </>
              )}

              {status === 'CREATED' && (
                <>
                  <div className='alert alert-success mt-6'>
                    Your company trial is active. We sent the license key to
                    your email address.
                  </div>
                  <p className='text-gray-700 mt-5 mb-3'>
                    Follow the installation guide to deploy Mockoon Pro on your
                    infrastructure.
                  </p>
                  <Link
                    href='/pro/docs/self-hosting/installation/'
                    className='btn btn-primary'
                  >
                    View installation guide
                  </Link>
                </>
              )}

              {isError && (
                <div className='alert alert-danger mt-6'>
                  This verification link is invalid or expired. Request a new
                  link from the{' '}
                  <Link href='/pro/checkout/?mode=trial'>Mockoon Pro page</Link>
                  .
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
