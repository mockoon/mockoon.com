import { MultiFactorError } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import LoadingPage from '../components/loading-page';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';
import { useAuth } from '../utils/auth';

const meta = {
  title: "Mockoon's cloud password reset",
  description: 'Reset your Mockoon Cloud account password'
};

const ResetPassword: FunctionComponent = function () {
  const {
    isLoading: isAuthLoading,
    signInEmail,
    verifyTfaCode,
    verifyPasswordResetCode,
    confirmPasswordReset
  } = useAuth();
  const router = useRouter();
  const [tfaStep, setTfaStep] = useState<MultiFactorError>(null);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const newPasswordForm = useForm();
  const totpForm = useForm();
  let code = router.query.code?.toString();
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);

  const finalize = () => {
    localStorage.removeItem('resetPasswordEmail');
    newPasswordForm.reset();
    setIsPasswordChanged(true);
    setTimeout(() => {
      router.push('/account/info/');
    }, 3000);
  };

  const onNewPasswordSubmit = async (data) => {
    newPasswordForm.clearErrors();
    const userEmail = localStorage.getItem('resetPasswordEmail');

    if (!data['work_address']) {
      delete data['work_address'];

      try {
        await confirmPasswordReset(code, data.newPassword);
        if (userEmail) {
          await signInEmail(
            localStorage.getItem('resetPasswordEmail'),
            data.newPassword
          );
        }
        finalize();
      } catch (error) {
        // handle mfa
        if (error.code === 'auth/multi-factor-auth-required') {
          setTfaStep(error);
          return;
        }

        newPasswordForm.setError('root.wrongCredentials', {
          type: 'manual',
          message: 'Wrong credentials'
        });
      }
    }
  };

  const onTotpSubmit = async (data) => {
    totpForm.clearErrors();

    try {
      await verifyTfaCode(tfaStep, data.tfaCode);
      totpForm.reset();
      setTfaStep(null);
      finalize();
    } catch (error) {
      if (error.code === 'auth/invalid-verification-code') {
        totpForm.setError('root.verifyTfaCode', {
          type: 'manual',
          message: 'Wrong TOTP code'
        });
      } else if (error.code === 'auth/totp-challenge-timeout') {
        setTfaStep(null);
        totpForm.reset();
      } else {
        totpForm.setError('root.verifyTfaCode', {
          type: 'manual',
          message: 'An error occurred while verifying the TOTP code'
        });
      }
    }
  };

  const verifyCode = async (code: string) => {
    setIsVerifyingCode(true);

    try {
      await verifyPasswordResetCode(code);
      setIsCodeVerified(true);
    } catch (e) {
    } finally {
      setIsVerifyingCode(false);
    }
  };

  useEffect(() => {
    if (code && !isCodeVerified) {
      verifyCode(code);
    }
  }, [code, isCodeVerified]);

  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      {isAuthLoading && <LoadingPage />}

      {!isAuthLoading && (
        <>
          <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
            <div className='container'>
              <div className='row align-items-center justify-content-center gx-0'>
                <div className='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
                  <h1 className='mb-0 fw-bold text-center'>
                    Reset your password
                  </h1>
                  <p className='mb-6 text-center text-gray-700'>
                    Please enter your new password below.
                  </p>
                  {tfaStep && (
                    <form
                      className='mb-6'
                      onSubmit={(e) => {
                        totpForm.handleSubmit(onTotpSubmit)(e);
                      }}
                    >
                      <div className='form-group'>
                        <label className='form-label' htmlFor='email'>
                          Authentication (TOTP) code
                        </label>
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
                      </div>
                      {totpForm.formState.errors.root?.verifyTfaCode && (
                        <div className='row justify-content-center'>
                          <div className='col-auto text-danger text-center fw-bold pb-4'>
                            {
                              totpForm.formState.errors.root?.verifyTfaCode
                                .message
                            }
                          </div>
                        </div>
                      )}
                      {totpForm.formState.isSubmitting && <Spinner />}
                      <button
                        className='btn w-100 btn-primary'
                        type='submit'
                        disabled={totpForm.formState.isSubmitting}
                      >
                        Verify
                      </button>
                    </form>
                  )}

                  {!tfaStep && isCodeVerified && !isPasswordChanged && (
                    <form
                      className='mb-6'
                      onSubmit={(e) => {
                        newPasswordForm.handleSubmit(onNewPasswordSubmit)(e);
                      }}
                    >
                      <input
                        type='hidden'
                        autoComplete='username'
                        value={(() => {
                          return (
                            localStorage.getItem('resetPasswordEmail') || ''
                          );
                        })()}
                      />
                      <div className='form-group'>
                        <label className='form-label' htmlFor='newPassword'>
                          New password
                        </label>
                        <input
                          className='form-control'
                          id='newPassword'
                          type='password'
                          autoComplete='new-password'
                          maxLength={1024}
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
                          maxLength={1024}
                          required
                          {...newPasswordForm.register('confirmNewPassword')}
                        />
                      </div>

                      <FormHoneypot
                        inputRegister={newPasswordForm.register('work_address')}
                      />

                      {newPasswordForm.formState.errors.root
                        ?.wrongCredentials && (
                        <div className='row justify-content-center'>
                          <div className='col-auto text-danger text-center fw-bold pb-4'>
                            Wrong credentials
                          </div>
                        </div>
                      )}
                      {newPasswordForm.formState.isSubmitting && <Spinner />}

                      {!newPasswordForm.formState.isSubmitting && (
                        <button className='btn w-100 btn-primary' type='submit'>
                          Reset password
                        </button>
                      )}
                    </form>
                  )}

                  {!tfaStep &&
                    !isVerifyingCode &&
                    !isCodeVerified &&
                    !isPasswordChanged && (
                      <div className='alert alert-warning mt-6 fs-5'>
                        The password reset link is invalid or has expired.
                        Please try again or{' '}
                        <a href='/contact-form/'>contact us</a> for assistance.
                      </div>
                    )}

                  {!tfaStep &&
                    !isVerifyingCode &&
                    isCodeVerified &&
                    isPasswordChanged && (
                      <div className='alert alert-success mt-6 fs-5'>
                        <i className='icon-check me-2'></i>
                        <span className='fw-bold'>Success! </span> Your password
                        has been changed successfully. You will be redirected to
                        your account shortly.
                      </div>
                    )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default ResetPassword;
