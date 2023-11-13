import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CodeBlock from '../components/code-block';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: 'Desktop application login',
  description: 'Login to the Mockoon desktop application'
};

const AppAuth = function () {
  const { isAuth, user, isLoading: isAuthLoading, getIdToken } = useAuth();
  const router = useRouter();

  const { mutate, isPending, isSuccess, isError, data } = useMutation(

    {mutationFn:async () => {
      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/token`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${await getIdToken()}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      });
    },
      onSuccess: (data) => {
        window.location.assign(`mockoon://auth?token=${data.token}`);
      }
    }
  );

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  useEffect(
    function () {
      if (isAuth) {
        mutate();
      }
    },
    [isAuth]
  );

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row align-items-center justify-content-center gx-0'>
              <div className='col-12 col-lg-6 py-8 py-md-11 text-center'>
                <h1 className='mb-0 fw-bold text-center'>
                  Log in to the Mockoon app
                </h1>
                {isPending && <Spinner />}
                {isError && (
                  <div className='alert alert-danger mt-6 fs-5'>
                    An error occured. Please try again later.
                  </div>
                )}
                {isSuccess && (
                  <>
                    <div className='alert alert-success mt-6 fs-5'>
                      <i className='icon-check me-2'></i>
                      <span className='fw-bold'>Success! </span> You should now
                      be redirected to the app.
                    </div>
                    <p className='mt-12'>
                      If you are not redirected, you can copy this token and
                      enter it manually in the desktop application:
                    </p>
                    <pre>
                      <CodeBlock
                        code={data?.token}
                        dark
                        lineBreak
                        language='text'
                      />
                    </pre>
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

export default AppAuth;
