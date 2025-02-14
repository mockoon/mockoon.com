import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
  const {
    isAuth,
    user,
    isLoading: isAuthLoading,
    getIdToken,
    logout
  } = useAuth();
  const router = useRouter();
  const isWebApp = router.query.webapp === 'true';
  const [callbackWorkflow, setCallbackWorkflow] = useState(false);

  const {
    mutate: appCallback,
    isPending: isAppCallbackPending,
    isSuccess: isAppCallbackSuccess,
    isError: isAppCallbackError
  } = useMutation({
    mutationFn: async (token: string) => {
      return fetch(`${localStorage.getItem('authCallback')}?token=${token}`, {
        method: 'GET'
      }).then((res) => {
        if (res.ok) {
          return;
        }

        throw new Error();
      });
    },
    onSuccess: async () => {
      localStorage.removeItem('authCallback');
    },
    onError: async (error, token) => {
      // revert to custom protocol if fails
      window.location.assign(`mockoon://auth?token=${token}`);
    }
  });

  const webAppRedirect = (token: string) => {
    localStorage.removeItem('webAppRedirect');

    window.parent.postMessage(
      `token=${token}`,
      `${process.env.NEXT_PUBLIC_WEBAPP_URL}`
    );
  };

  const {
    mutate: getToken,
    isPending: isGetTokenPending,
    isSuccess: isGetTokenSuccess,
    isError: isGetTokenError,
    data: getTokenData
  } = useMutation({
    mutationFn: async () => {
      return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/token`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${await getIdToken()}`
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        if (res.status === 401) {
          logout();
          router.push('/login/');

          return;
        }

        throw new Error();
      });
    },
    onSuccess: async (data) => {
      if (localStorage.getItem('webAppRedirect')) {
        webAppRedirect(data.token);
      } else if (localStorage.getItem('authCallback')) {
        // new workflow >= 9.0.0, using localhost callback
        setCallbackWorkflow(true);
        appCallback(data.token);
      } else {
        // old workflow < 9.0.0, using custom protocol
        window.location.assign(`mockoon://auth?token=${data.token}`);
      }
    }
  });

  useEffect(() => {
    if (isWebApp) {
      localStorage.setItem('webAppRedirect', '1');
    }

    if (!isAuthLoading) {
      if (!user) {
        router.push(`/login/${isWebApp ? '?webapp=true' : ''}`);
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth, isWebApp]);

  useEffect(
    function () {
      if (isAuth) {
        getToken();
      }
    },
    [isAuth]
  );

  return (
    <Layout footerBanner='download' minimal={isWebApp}>
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
                {(isGetTokenPending || isAppCallbackPending) && <Spinner />}
                {isGetTokenError && (
                  <div className='alert alert-danger mt-6 fs-5'>
                    An error occured. Please try again later.
                  </div>
                )}
                {isGetTokenSuccess && (
                  <>
                    {/* old workflow, and new workflow when the callback fails */}
                    {(!callbackWorkflow ||
                      (callbackWorkflow &&
                        isAppCallbackError &&
                        !isAppCallbackPending)) && (
                      <div className='alert alert-success mt-6 fs-5'>
                        <i className='icon-check me-2'></i>
                        <span className='fw-bold'>Success! </span> You should
                        now be redirected to the app.
                      </div>
                    )}
                    {/* new callback workflow */}
                    {callbackWorkflow &&
                      isAppCallbackSuccess &&
                      !isAppCallbackPending && (
                        <div className='alert alert-success mt-6 fs-5'>
                          <i className='icon-check me-2'></i>
                          <span className='fw-bold'>Success! </span> You should
                          now be automatically logged in to the desktop
                          application.
                        </div>
                      )}
                    <p className='mt-6'>
                      If anything goes wrong, you can copy this token and enter
                      it manually in the desktop application:
                    </p>
                    <pre>
                      <CodeBlock
                        code={getTokenData?.token}
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
