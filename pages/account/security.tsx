import { TotpSecret } from 'firebase/auth';
import { useRouter } from 'next/router';
import { QRCodeSVG } from 'qrcode.react';
import { FunctionComponent, useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import LoadingPage from '../../components/loading-page';
import Meta from '../../components/meta';
import ReAuthModal, {
  ReAuthModalProps
} from '../../components/mock-samples/re-auth-modal';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';
import { authProviderNames, useAuth } from '../../utils/auth';
import { useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - security',
  description:
    'Manage your Mockoon Cloud account information and subscription details'
};

const AccountSecurity: FunctionComponent = function () {
  const {
    isAuth,
    user,
    isLoading: isAuthLoading,
    changePassword,
    getTfaSecret,
    finalizeTfaEnrollment,
    unenrollTfa,
    updateEmailAddress
  } = useAuth();
  const { data: userData, refetch: refetchUserData } = useCurrentUser();
  const router = useRouter();
  const newPasswordForm = useForm();
  const totpForm = useForm();
  const changeEmailForm = useForm();
  const [tfaUri, setTfaUri] = useState('');
  const [tfaSecret, setTfaSecret] = useState<TotpSecret>(null);
  const [reAuthModalProps, setReAuthModalProps] =
    useState<ReAuthModalProps>(null);
  const [showTfaDisableSuccessToast, setShowTfaDisableSuccessToast] =
    useState(false);
  const [showTfaEnableSuccessToast, setShowTfaEnableSuccessToast] =
    useState(false);

  const toggleShowTfaDisableSuccessToast = () =>
    setShowTfaDisableSuccessToast(!showTfaDisableSuccessToast);

  const toggleShowTfaEnableSuccessToast = () =>
    setShowTfaEnableSuccessToast(!showTfaEnableSuccessToast);

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user) {
        router.push('/login/');
      } else if (user && !isAuth) {
        router.push('/email-verification/');
      }
    }
  }, [isAuthLoading, user, isAuth]);

  const onNewPasswordSubmit = async () => {
    newPasswordForm.clearErrors();

    try {
      await changePassword(newPasswordForm.getValues().newPassword);

      newPasswordForm.reset();
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        setReAuthModalProps({
          show: true,
          password: newPasswordForm.getValues().currentPassword,
          onSuccess: () => {
            newPasswordForm.clearErrors();
            onNewPasswordSubmit();
          }
        });
        newPasswordForm.setError('root.needsReauth', {
          type: 'custom'
        });
        return;
      }

      newPasswordForm.setError('root.wrongCredentials', {
        message: 'Wrong credentials',
        type: 'custom'
      });
    }
  };

  const onNewEmailSubmit = async () => {
    changeEmailForm.clearErrors();

    if (user.email === changeEmailForm.getValues().newEmail) {
      changeEmailForm.setError('root.sameEmail', {
        message: 'New email address is the same as the current one',
        type: 'custom'
      });
      return;
    }

    try {
      await updateEmailAddress(changeEmailForm.getValues().newEmail);

      changeEmailForm.reset();
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        setReAuthModalProps({
          show: true,
          onSuccess: () => {
            changeEmailForm.clearErrors();
            onNewEmailSubmit();
          }
        });
        changeEmailForm.setError('root.needsReauth', {
          type: 'custom'
        });
        return;
      }

      changeEmailForm.setError('root.wrongCredentials', {
        message: 'Wrong credentials',
        type: 'custom'
      });
    }
  };

  const onTotpSubmit = async (data) => {
    totpForm.clearErrors();

    try {
      await finalizeTfaEnrollment(tfaSecret, data.tfaCode);
      await refetchUserData();
      totpForm.reset();
      totpForm.clearErrors();
      setTfaSecret(null);
      setTfaUri('');
      setShowTfaEnableSuccessToast(true);
    } catch (error) {
      totpForm.setError('root.wrongOtpCode', {
        message: 'Wrong TOTP code',
        type: 'custom'
      });
    }
  };

  const enableTfa = async () => {
    const onSuccess = () => {
      if (process.env.NODE_ENV === 'development') {
        setTfaSecret({ secretKey: '123456' } as TotpSecret);
        setTfaUri('otpauth://totp/Mockoon:123456');
      } else {
        enableTfa();
      }
    };

    if (process.env.NODE_ENV === 'development') {
      setReAuthModalProps({
        show: true,
        onSuccess
      });
    }

    try {
      const secret = await getTfaSecret();
      setTfaSecret(secret);

      const uri = secret.generateQrCodeUrl(user.email, 'Mockoon');
      setTfaUri(uri);
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        setReAuthModalProps({
          show: true,
          onSuccess
        });
      }
    }
  };

  const disableTfa = async () => {
    const onSuccess = () => {
      disableTfa();
    };

    if (process.env.NODE_ENV === 'development') {
      setReAuthModalProps({
        show: true,
        onSuccess
      });
    }

    try {
      await unenrollTfa(userData.mfa.uid);
      setShowTfaDisableSuccessToast(true);
      await refetchUserData();
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        setReAuthModalProps({
          show: true,
          onSuccess
        });
      } else if (error.code === 'auth/user-token-expired') {
        setReAuthModalProps({
          show: true,
          onSuccess: () => {}
        });
      }
    }
  };
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && isAuth && (
        <>
          <AccountHeader title='My account' subtitle='Manage your password' />

          <ReAuthModal
            options={reAuthModalProps}
            setShow={setReAuthModalProps}
          ></ReAuthModal>
          <div className='toast-container position-fixed bottom-0 end-0 p-3'>
            <Toast
              show={showTfaDisableSuccessToast}
              onClose={toggleShowTfaDisableSuccessToast}
              autohide
              className='text-bg-success'
            >
              <Toast.Body>
                <i className='icon-check me-2'></i>
                <span className='fw-bold'>Success! </span> You have successfully
                disabled the two factor authentication on your account.
              </Toast.Body>
            </Toast>
            <Toast
              show={showTfaEnableSuccessToast}
              onClose={toggleShowTfaEnableSuccessToast}
              autohide
              className='text-bg-success'
            >
              <Toast.Body>
                <i className='icon-check me-2'></i>
                <span className='fw-bold'>Success! </span> You have successfully
                enabled the two factor authentication on your account.
              </Toast.Body>
            </Toast>
          </div>
          <main className='pb-8 pb-md-11 mt-md-n6'>
            <div className='container-md'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <AccountMenu />
                </div>
                <div className='col-12 col-md-9'>
                  {user?.providerData.find(
                    (providerData) => providerData.providerId === 'password'
                  ) === undefined && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <div className='row align-items-center'>
                          <div className='col'>
                            <h4 className='mb-0'>Authentication method</h4>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        {user &&
                          user.providerData &&
                          user.providerData.map((providerData) => (
                            <div
                              key={providerData.providerId}
                              className='d-flex'
                            >
                              <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                                <i className='icon-check'></i>
                              </div>

                              <p>
                                <small>
                                  {authProviderNames[providerData.providerId]}
                                </small>
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {user?.providerData.find(
                    (providerData) => providerData.providerId === 'password'
                  ) !== undefined && (
                    <>
                      <div className='card card-bleed shadow-light-lg mb-6'>
                        <div className='card-header'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <h4 className='mb-0'>
                                Change your email address
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className='card-body'>
                          <form
                            className='mb-6'
                            onSubmit={(event) => {
                              event.preventDefault();

                              // email change always requires re-authentication, otherwise the user will be logged out
                              setReAuthModalProps({
                                show: true,
                                onSuccess: () => {
                                  changeEmailForm.clearErrors();
                                  changeEmailForm.handleSubmit(
                                    onNewEmailSubmit
                                  )(event);
                                }
                              });
                            }}
                          >
                            <div className='form-group'>
                              <label className='form-label' htmlFor='newEmail'>
                                New email address
                              </label>
                              <input
                                className='form-control'
                                id='newEmail'
                                type='email'
                                autoComplete='email'
                                required
                                onInput={() => {
                                  changeEmailForm.clearErrors();
                                }}
                                {...changeEmailForm.register('newEmail')}
                              />
                            </div>

                            <div className='row'>
                              <div className='col-12 col-md-auto'>
                                <div className='d-flex align-items-center'>
                                  <button
                                    className='btn btn-xs btn-primary-subtle'
                                    type='submit'
                                    disabled={
                                      changeEmailForm.formState.isSubmitting
                                    }
                                  >
                                    Update email address
                                  </button>
                                  {changeEmailForm.formState.isSubmitting && (
                                    <div className='ms-2'>
                                      <Spinner small />
                                    </div>
                                  )}
                                  {changeEmailForm.formState.errors.root
                                    ?.wrongCredentials && (
                                    <span className='text-danger ms-2'>
                                      Wrong credentials
                                    </span>
                                  )}
                                  {changeEmailForm.formState.errors.root
                                    ?.sameEmail && (
                                    <span className='text-danger ms-2'>
                                      The new email address is the same as the
                                      current one
                                    </span>
                                  )}
                                  {changeEmailForm.formState
                                    .isSubmitSuccessful && (
                                    <span className='text-success ms-2'>
                                      Email address changed. Please check your
                                      inbox for a verification email.
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className='card card-bleed shadow-light-lg mb-6'>
                        <div className='card-header'>
                          <div className='row align-items-center'>
                            <div className='col'>
                              <h4 className='mb-0'>Change your password</h4>
                            </div>
                          </div>
                        </div>
                        <div className='card-body'>
                          <form
                            className='mb-6'
                            onSubmit={(e) => {
                              newPasswordForm.clearErrors();
                              newPasswordForm.handleSubmit(onNewPasswordSubmit)(
                                e
                              );
                            }}
                          >
                            <div className='form-group'>
                              <label
                                className='form-label'
                                htmlFor='currentPassword'
                              >
                                Current password
                              </label>
                              <input
                                className='form-control'
                                id='currentPassword'
                                type='password'
                                autoComplete='current-password'
                                required
                                {...newPasswordForm.register('currentPassword')}
                              />
                            </div>

                            <div className='form-group'>
                              <label
                                className='form-label'
                                htmlFor='newPassword'
                              >
                                New password
                              </label>
                              <input
                                className='form-control'
                                id='newPassword'
                                type='password'
                                autoComplete='new-password'
                                required
                                {...newPasswordForm.register('newPassword')}
                              />
                            </div>

                            <div className='form-group'>
                              <label
                                className='form-label'
                                htmlFor='confirmNewPassword'
                              >
                                Confirm new password
                              </label>
                              <input
                                className='form-control'
                                id='confirmNewPassword'
                                type='password'
                                autoComplete='new-password'
                                required
                                {...newPasswordForm.register(
                                  'confirmNewPassword'
                                )}
                              />
                            </div>

                            <div className='row'>
                              <div className='col-12 col-md-auto'>
                                <div className='d-flex align-items-center'>
                                  <button
                                    className='btn btn-xs btn-primary-subtle'
                                    type='submit'
                                    disabled={
                                      newPasswordForm.formState.isSubmitting
                                    }
                                  >
                                    Update Password
                                  </button>
                                  {newPasswordForm.formState.isSubmitting && (
                                    <div className='ms-2'>
                                      <Spinner small />
                                    </div>
                                  )}
                                  {newPasswordForm.formState.errors.root
                                    ?.wrongCredentials && (
                                    <span className='text-danger ms-2'>
                                      Wrong credentials
                                    </span>
                                  )}
                                  {newPasswordForm.formState
                                    .isSubmitSuccessful && (
                                    <span className='text-success ms-2'>
                                      Password changed
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  )}

                  {user?.providerData.find(
                    (providerData) => providerData.providerId === 'password'
                  ) !== undefined && (
                    <div className='card card-bleed shadow-light-lg mb-6'>
                      <div className='card-header'>
                        <div className='row align-items-center'>
                          <div className='col'>
                            <h4 className='mb-0'>
                              Two-factor authentication (using an authenticator
                              app)
                            </h4>
                          </div>
                          {userData?.mfa.enabled && (
                            <div className='col-auto'>
                              <span className='badge text-bg-success-subtle'>
                                <i className='icon-check me-2'></i>
                                <span className='fw-bold'>Enabled</span>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className='card-body'>
                        {userData?.mfa.enabled && (
                          <>
                            <p>
                              Two-factor authentication is{' '}
                              <span className='text-success fw-bold'>
                                enabled
                              </span>{' '}
                              on your account. You can disable it by clicking
                              the button below.
                            </p>
                            <button
                              onClick={() => {
                                disableTfa();
                              }}
                              className='btn btn-xs btn-primary-subtle'
                            >
                              Disable two-factor authentication
                            </button>
                          </>
                        )}
                        {!tfaUri && !userData?.mfa.enabled && (
                          <button
                            onClick={() => {
                              enableTfa();
                            }}
                            className='btn btn-xs btn-primary-subtle'
                          >
                            Enable two-factor authentication
                          </button>
                        )}
                        {tfaUri && !userData?.mfa.enabled && (
                          <>
                            <p>
                              1. <strong>Scan the QR code</strong> with your
                              authenticator (TOTP) app (e.g. Google
                              Authenticator, Authy, etc.) to enable two-factor
                              authentication. You can also use the secret below
                              to manually add the account in your app.
                            </p>
                            <p>
                              <QRCodeSVG
                                value={tfaUri}
                                size={128}
                                bgColor={'#ffffff'}
                                fgColor={'#242830'}
                              />
                            </p>
                            <p className='text-gray-700 fst-italic'>
                              Manually enter the secret in your authenticator
                              app if you cannot scan the QR code:
                              <code>
                                <span className='user-select-all fst-normal'>
                                  {tfaSecret.secretKey}
                                </span>
                              </code>
                            </p>
                            <p>
                              2.{' '}
                              <strong>
                                Enter the authentication (TOTP) code generated
                                by your app
                              </strong>{' '}
                              to confirm that you have successfully set it up:
                            </p>
                            <form
                              onSubmit={async (event) => {
                                totpForm.handleSubmit(onTotpSubmit)(event);
                              }}
                            >
                              <input
                                className='form-control mb-5'
                                placeholder='XXXXXX'
                                maxLength={6}
                                id='tfaCode'
                                type='text'
                                autoComplete='off'
                                required
                                {...totpForm.register('tfaCode')}
                              />

                              <div className='d-flex align-items-center'>
                                <button
                                  className='btn btn-xs btn-secondary'
                                  type='button'
                                  onClick={() => {
                                    setTfaUri('');
                                    setTfaSecret(null);
                                  }}
                                  disabled={totpForm.formState.isSubmitting}
                                >
                                  Cancel
                                </button>
                                <button
                                  className='btn btn-xs btn-primary ms-2 me-4'
                                  type='submit'
                                  disabled={totpForm.formState.isSubmitting}
                                >
                                  Verify
                                </button>
                                {totpForm.formState.isSubmitting && (
                                  <div className='ms-2'>
                                    <Spinner small />
                                  </div>
                                )}
                                {totpForm.formState.errors.root
                                  ?.wrongOtpCode && (
                                  <span className='text-danger ms-2'>
                                    Wrong TOTP code
                                  </span>
                                )}
                              </div>
                            </form>
                          </>
                        )}
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

export default AccountSecurity;
