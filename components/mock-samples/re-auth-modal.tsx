import { MultiFactorError } from 'firebase/auth';
import { FunctionComponent, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/auth';
import Spinner from '../spinner';

export type ReAuthModalProps = {
  show: boolean;
  password?: string;
  onSuccess: () => void;
};

const ReAuthModal: FunctionComponent<{
  options: {
    show: boolean;
    password?: string;
    onSuccess: () => void;
  };
  setShow: React.Dispatch<React.SetStateAction<ReAuthModalProps>>;
}> = function ({ options, setShow }) {
  const { reAuthenticate, verifyTfaCode } = useAuth();
  const passwordForm = useForm();
  const totpForm = useForm();
  const [tfaStep, setTfaStep] = useState<MultiFactorError>(null);

  const onPasswordSubmit = async (data) => {
    try {
      await reAuthenticate(data.password);
      passwordForm.reset();
      setShow(null);
      options?.onSuccess();
    } catch (error) {
      // handle mfa
      if (error.code === 'auth/multi-factor-auth-required') {
        options.password = null;
        setTfaStep(error);
        return;
      }

      passwordForm.setError('root.wrongCredentials', {
        type: 'manual',
        message: 'Wrong credentials'
      });
    }
  };

  const onTotpSubmit = async (data) => {
    totpForm.clearErrors();

    try {
      await verifyTfaCode(tfaStep, data.tfaCode);
      totpForm.reset();
      setShow(null);
      options?.onSuccess();
    } catch (error) {
      totpForm.setError('root.wrongTotpCode', {
        type: 'manual',
        message: 'Wrong TOTP code'
      });
    }
  };

  useEffect(() => {
    if (options?.password) {
      onPasswordSubmit({ password: options.password });
    }
  }, [options?.password]);

  return (
    <Modal
      // only show if we are not passing a password to the modal
      show={options?.show && !options?.password}
      onHide={() => setShow(null)}
      centered
      scrollable={false}
    >
      <Modal.Header closeButton className='p-6'>
        <Modal.Title>Re-authentication required</Modal.Title>
      </Modal.Header>

      <Modal.Body className='p-6'>
        <p>
          For security reasons, you need to re-authenticate to perform this
          action. Please enter your password to continue.
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
            {totpForm.formState.errors.root?.wrongTotpCode && (
              <div className='row justify-content-center'>
                <div className='col-auto text-danger text-center fw-bold pb-4'>
                  Wrong TOTP code
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

        {!tfaStep && (
          <form
            onSubmit={async (event) => {
              passwordForm.clearErrors();
              passwordForm.handleSubmit(onPasswordSubmit)(event);
            }}
          >
            <div className='form-group'>
              <label className='form-label' htmlFor='currentPassword'>
                Password
              </label>
              <input
                className='form-control'
                id='currentPassword'
                type='password'
                autoComplete='current-password'
                required
                {...passwordForm.register('password')}
              />
            </div>

            <div className='d-flex align-items-center'>
              <button
                className='btn btn-xs btn-secondary'
                type='button'
                onClick={() => {
                  setShow(null);
                }}
                disabled={
                  passwordForm.formState.isSubmitting ||
                  passwordForm.formState.isSubmitSuccessful
                }
              >
                Cancel
              </button>
              <button
                className='btn btn-xs btn-primary ms-2 me-4'
                type='submit'
                disabled={
                  passwordForm.formState.isSubmitting ||
                  passwordForm.formState.isSubmitSuccessful
                }
              >
                Re-authenticate
              </button>
              {passwordForm.formState.isSubmitting && (
                <div className='ms-2'>
                  <Spinner small />
                </div>
              )}
              {passwordForm.formState.errors.root?.wrongCredentials && (
                <span className='text-danger ms-2'>Wrong credentials</span>
              )}
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ReAuthModal;
