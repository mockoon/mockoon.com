import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from './form-honeypot';
import Spinner from './spinner';

const EmailForm: FunctionComponent<{
  formType: 'newsletter' | 'productUpdates' | 'coursePreview';
}> = function ({ formType }) {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      if (formType === 'newsletter') {
        data = {
          ...data,
          ...{
            newsletter: true,
            productUpdates: true,
            coursePreview: true
          }
        };
      } else {
        data = {
          ...data,
          ...{
            [formType]: true
          }
        };
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }
        );

        if (response.status === 204) {
          setSubmitSuccess(true);
          reset();
        } else {
          setApiError(true);
        }
      } catch {
        setApiError(true);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        setSubmitSuccess(false);
        setApiError(false);
        handleSubmit(onSubmit)(e);
      }}
    >
      <div className='d-flex align-items-center'>
        <div className='input-group'>
          <input
            className='form-control'
            type='email'
            id='email'
            placeholder='Email address'
            required
            {...registerFormField('email')}
          />
          <FormHoneypot inputRegister={registerFormField('work_address')} />
          <button
            className='btn btn-primary-subtle'
            type='submit'
            disabled={isSubmitting}
          >
            {formType === 'newsletter' ? 'Subscribe' : 'Keep me posted'}
          </button>
        </div>
        {isSubmitting && (
          <div className='ms-2'>
            <Spinner />
          </div>
        )}
      </div>
      <p className='text-gray-700 text-center h6 pt-2'>
        Your email will not be shared or used for any other purpose.
      </p>
      {apiError && (
        <div className='text-danger text-center fw-bold pb-4'>
          Something went wrong! Please try again later.
        </div>
      )}
      {submitSuccess && (
        <div className='text-success text-center fw-bold'>
          Thank you for subscribing! Please check your inbox to confirm your
          subscription.
        </div>
      )}
    </form>
  );
};

export default EmailForm;
