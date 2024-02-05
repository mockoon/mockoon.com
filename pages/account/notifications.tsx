import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { EmailingStatuses } from '../../models/user.model';
import { useAuth } from '../../utils/auth';
import { useCurrentUserEmailing } from '../../utils/queries';

const meta = {
  title: 'My account - Notifications',
  description: 'Manage your Mockoon Cloud account notification parameters'
};

const AccountNotifications: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, getIdToken } = useAuth();
  const router = useRouter();
  const { data: emailingData } = useCurrentUserEmailing();
  const {
    register: registerFormField,
    setValue,
    control,
    formState: { touchedFields, isDirty }
  } = useForm();
  const data = useWatch({ control });

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  useEffect(() => {
    if (emailingData) {
      setValue('newsletter', emailingData.newsletter, {
        shouldDirty: false,
        shouldTouch: false
      });
      setValue('productUpdates', emailingData.productUpdates, {
        shouldDirty: false,
        shouldTouch: false
      });
      setValue('coursePreview', emailingData.coursePreview, {
        shouldDirty: false,
        shouldTouch: false
      });
    }
  }, [emailingData]);

  const { mutate: updateEmailing } = useMutation({
    mutationFn: async (data: {
      newsletter: boolean;
      productUpdates: boolean;
      coursePreview: boolean;
    }) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/emailing`,
        {
          body: JSON.stringify(data),
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${await getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    }
  });

  useEffect(() => {
    console.log(isDirty);
    if (data && isDirty) {
      updateEmailing(data as EmailingStatuses);
    }
  }, [data, isDirty]);

  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader
            title='My account'
            subtitle='Manage your notifications settings'
          />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <h4 className='mb-0'>Email communications</h4>
                    </div>
                    <div className='card-body'>
                      <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Account information</p>

                              <small className='text-gray-700'>
                                Receive account related information and updates
                                (e.g. billing, account changes, etc.). You
                                cannot unsubscribe from these emails.
                              </small>
                            </div>
                            <div className='col-auto'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='newsletter'
                                  readOnly
                                  checked
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Newsletter</p>

                              <small className='text-gray-700'>
                                Receive our newsletter (once a month or less)
                              </small>
                            </div>
                            <div className='col-auto'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='newsletter'
                                  {...registerFormField('newsletter')}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Mockoon Pro updates</p>

                              <small className='text-gray-700'>
                                Be notified when new{' '}
                                <Link href={'/pro/'}>Pro</Link> features are
                                released
                              </small>
                            </div>
                            <div className='col-auto'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='productUpdates'
                                  {...registerFormField('productUpdates')}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='list-group-item'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>Online course release</p>

                              <small className='text-gray-700'>
                                Be notified when the{' '}
                                <Link href={'/course/'}>online course</Link> is
                                available or updated
                              </small>
                            </div>
                            <div className='col-auto'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='coursePreview'
                                  {...registerFormField('coursePreview')}
                                />
                              </div>
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

export default AccountNotifications;
