import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';

const meta = {
  title: 'My account - security',
  description:
    'Manage your Mockoon Cloud account information and subscription details'
};

const AccountSecurity: FunctionComponent = function () {
  const { isAuth, user, isLoading: isAuthLoading, changePassword } = useAuth();
  const router = useRouter();
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm();

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  const onSubmit = async (data) => {
    clearErrors();

    try {
      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      });

      reset();
    } catch (error) {
      setError('root.wrongCredentials', {
        message: 'Wrong credentials',
        type: 'custom'
      });
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='Manage your password' />

          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card card-bleed shadow-light-lg mb-6'>
                    <div className='card-header'>
                      <div className='row align-items-center'>
                        <div className='col'>
                          <h4 className='mb-0'>Change password</h4>
                        </div>
                        {false && (
                          <div className='col-auto'>
                            <a className='small text-gray-700' href='#!'>
                              Forgot your password?
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='card-body'>
                      {isSubmitSuccessful && (
                        <div className='row justify-content-center'>
                          <div className='col-auto text-success text-center fw-bold pb-4'>
                            Password changed
                          </div>
                        </div>
                      )}
                      <form
                        className='mb-6'
                        onSubmit={(e) => {
                          clearErrors();
                          handleSubmit(onSubmit)(e);
                        }}
                      >
                        <div className='form-group'>
                          <label
                            className='form-label'
                            htmlFor='currentPassword'
                          >
                            Current Password
                          </label>
                          <input
                            className='form-control'
                            id='currentPassword'
                            type='password'
                            autoComplete='current-password'
                            required
                            {...registerFormField('currentPassword')}
                          />
                        </div>

                        <div className='form-group'>
                          <label className='form-label' htmlFor='newPassword'>
                            New Password
                          </label>
                          <input
                            className='form-control'
                            id='newPassword'
                            type='password'
                            autoComplete='new-password'
                            required
                            {...registerFormField('newPassword')}
                          />
                        </div>

                        <div className='form-group'>
                          <label
                            className='form-label'
                            htmlFor='confirmNewPassword'
                          >
                            Confirm Password
                          </label>
                          <input
                            className='form-control'
                            id='confirmNewPassword'
                            type='password'
                            autoComplete='new-password'
                            required
                            {...registerFormField('confirmNewPassword')}
                          />
                        </div>

                        <div className='row'>
                          <div className='col-12 col-md-auto'>
                            {errors.root?.wrongCredentials && (
                              <div className='row justify-content-center'>
                                <div className='col-auto text-danger text-center fw-bold pb-4'>
                                  Wrong credentials
                                </div>
                              </div>
                            )}

                            <div className='d-flex'>
                              <button
                                className='btn w-100 btn-primary me-4'
                                type='submit'
                                disabled={isSubmitting}
                              >
                                Update Password
                              </button>
                              {isSubmitting && <Spinner />}
                            </div>
                          </div>
                        </div>
                      </form>
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

export default AccountSecurity;
