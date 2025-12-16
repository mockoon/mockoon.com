import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHoneypotFieldName } from '../utils/form-hooks';
import FormHoneypot from './form-honeypot';
import Spinner from './spinner';

const ContactForm: FunctionComponent<{
  displayProject?: boolean;
  isCompanyRequired?: boolean;
  submitButtonLabel?: string;
}> = function ({ displayProject, isCompanyRequired, submitButtonLabel }) {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [apiError, setApiError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { honeypotFieldName } = useHoneypotFieldName();

  const onSubmit = async (data) => {
    if (!data[honeypotFieldName]) {
      delete data[honeypotFieldName];

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/email`,
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
      <div className='row'>
        <div className='form-group mb-5'>
          <label className='form-label' htmlFor='name'>
            Full name*
          </label>
          <input
            className='form-control'
            name='name'
            id='name'
            type='text'
            placeholder='Full name'
            required
            {...registerFormField('name')}
          />
        </div>
        <div className='form-group mb-5'>
          <label className='form-label' htmlFor='email'>
            Email*
          </label>

          <input
            className='form-control'
            name='email'
            id='email'
            type='email'
            placeholder='hello@example.org'
            required
            {...registerFormField('email')}
          />
        </div>
        {!displayProject && (
          <div className='form-group mb-5'>
            <label className='form-label' htmlFor='company'>
              Company{isCompanyRequired ? '*' : ''}
            </label>

            <input
              className='form-control'
              name='company'
              id='company'
              placeholder='Dunder Mifflin, Inc.'
              type='text'
              required={isCompanyRequired}
              {...registerFormField('company')}
            />
          </div>
        )}
        {displayProject && (
          <div className='form-group mb-5'>
            <label className='form-label' htmlFor='project'>
              Project (GitHub handle, website, etc.)*
            </label>

            <input
              className='form-control'
              name='project'
              id='project'
              placeholder='e.g. @github_handle, https://example.org'
              type='text'
              required
              {...registerFormField('project')}
            />
          </div>
        )}
        <div className='form-group mb-5'>
          <label className='form-label' htmlFor='message'>
            Message*
          </label>

          <textarea
            className='form-control'
            name='message'
            id='message'
            rows={5}
            placeholder={
              displayProject
                ? 'Tell us more about your project and your needs.'
                : 'Tell us more about your project and your needs.'
            }
            required
            {...registerFormField('message')}
          ></textarea>
        </div>
      </div>
      <FormHoneypot inputRegister={registerFormField(honeypotFieldName)} />
      {apiError && (
        <div className='row justify-content-center'>
          <div className='col-auto text-danger text-center fw-bold pb-4'>
            Something went wrong! We are sorry for the inconvenience. You can
            contact us manually by email at team@mockoon.com
          </div>
        </div>
      )}
      {submitSuccess && (
        <div className='row justify-content-center'>
          <div className='col-auto text-success text-center fw-bold pb-4'>
            Message sent! We will get back to you shortly.
          </div>
        </div>
      )}

      {isSubmitting && <Spinner />}

      <div className='row justify-content-center'>
        <div className='col-auto'>
          <button
            type='submit'
            className='btn btn-primary-subtle lift'
            disabled={isSubmitting}
          >
            {submitButtonLabel ? submitButtonLabel : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
