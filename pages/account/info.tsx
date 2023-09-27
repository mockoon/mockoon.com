import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import { planNames } from '../../constants/plans';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account',
  description:
    'Manage your Mockoon Cloud account information and subscription details'
};

const AccountInfo: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { data: userData } = useCurrentUser();

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
          <AccountHeader />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <h4 className='mb-0'>Basic Information</h4>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Email address</p>

                              <small className='text-gray-700'>
                                {user?.email}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Mockoon Pro Subscription</p>

                              <small className='text-gray-700'>
                                <span className='text-primary'>
                                  {planNames[userData?.plan]}
                                </span>{' '}
                                plan
                              </small>
                            </div>
                            <div className='col-auto'>
                              <Link
                                href={'/account/subscription/'}
                                className='btn btn-xs btn-primary-soft'
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Misc</h4>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Delete account</p>

                              <small className='text-gray-700'>
                                To delete your account, please contact us at{' '}
                                <a href='mailto:support@mockoon.com'>
                                  support@mockoon.com
                                </a>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default AccountInfo;
