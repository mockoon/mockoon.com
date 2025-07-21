import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { FunctionComponent, useEffect } from 'react';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const meta = {
  title: 'Unsubscribe from Mockoon emails',
  description: 'Unsubscribe from all our marketing emails and newsletters'
};

const EmailVerification: FunctionComponent = function () {
  const queryParams = useSearchParams();

  const {
    mutate: unsubscribe,
    isError: isUnsubscribeError,
    isPending: isUnsubscribing,
    isSuccess: isUnsubscribedSuccess
  } = useMutation({
    mutationFn: async (unsubToken: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/emailing?unsubToken=${unsubToken}`,
        {
          method: 'DELETE'
        }
      );

      if (response.status !== 204) {
        throw new Error();
      }
    }
  });

  useEffect(() => {
    if (queryParams.get('unsubToken')) {
      unsubscribe(queryParams.get('unsubToken'));
    }
  }, [queryParams]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row align-items-center justify-content-center gx-0'>
            <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
              <h1 className='mb-0 fw-bold text-center'>
                Unsubscribe from Mockoon emails
              </h1>
              {queryParams.get('unsubToken') && isUnsubscribing && <Spinner />}
              {!queryParams.get('unsubToken') && (
                <>
                  <p className='mt-6'>
                    To unsubscribe from our marketing emails and newsletters,
                    please use the link provided in the footer of the email you
                    received.
                  </p>
                  <p>
                    If you have a Mockoon account, you can also manage your
                    email preferences from your{' '}
                    <a href='/account/notifications/'>account settings</a>.
                  </p>
                  <p>
                    If you encounter any issue, please{' '}
                    <a href='/contact-form/'>contact us</a>. We will be happy to
                    help.
                  </p>
                </>
              )}
              {queryParams.get('unsubToken') &&
                !isUnsubscribing &&
                isUnsubscribedSuccess && (
                  <div className='alert alert-success mt-6 fs-5'>
                    <i className='icon-check me-2'></i>
                    You have been successfully unsubscribed from all our
                    marketing emails.
                  </div>
                )}
              {queryParams.get('unsubToken') &&
                !isUnsubscribing &&
                isUnsubscribeError && (
                  <div className='alert alert-warning mt-6 fs-5'>
                    An error occurred while trying to unsubscribe you from our
                    marketing emails. Please{' '}
                    <a href='/contact-form/'>contact us</a> for assistance.
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmailVerification;
