import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import PaddleScript from '../../components/paddle';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Priority support',
  description: 'Get priority support with your Mockoon Cloud plan'
};

const AccountSubscription: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { isLoading: isUserLoading, data: userData } = useCurrentUser();

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <PaddleScript />
          <AccountHeader title='My account' subtitle='Get priority support' />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  {!isUserLoading && userData?.plan === 'SOLO' && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Email support</h4>
                        <small className='text-gray-700'>
                          You benefit from basic email support with your plan
                        </small>
                      </div>
                      <div className='card-body'>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <p className='mb-0'>
                              Contact us at{' '}
                              <a href='mailto:email-support@mockoon.com'>
                                email-support@mockoon.com
                              </a>
                            </p>
                            <small className='text-gray-700'>
                              Usual response time: one business day
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {!isUserLoading && userData?.plan === 'TEAM' && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Email support</h4>
                        <small className='text-gray-700'>
                          You benefit from priority email support with your plan
                        </small>
                      </div>
                      <div className='card-body'>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <p className='mb-0'>
                              Contact us at{' '}
                              <a href='mailto:priority-support@mockoon.com'>
                                priority-support@mockoon.com
                              </a>
                            </p>
                            <small className='text-gray-700'>
                              Usual response time: one business day, handled in
                              priority
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isUserLoading && userData?.plan === 'ENTERPRISE' && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <h4 className='mb-0'>Priority support</h4>
                        <small className='text-gray-700'>
                          You benefit from priority enterprise support with your
                          plan
                        </small>
                      </div>
                      <div className='card-body'>
                        <div className='list-group list-group-flush'>
                          <div className='list-group-item'>
                            <p className='mb-0'>
                              Contact us at{' '}
                              <a href='mailto:enterprise-support@mockoon.com'>
                                enterprise-support@mockoon.com
                              </a>
                            </p>
                            <small className='text-gray-700'>
                              Guaranteed response time of one business day (9 am
                              to 5 pm CET/CEST, Monday to Friday).
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountSubscription;
