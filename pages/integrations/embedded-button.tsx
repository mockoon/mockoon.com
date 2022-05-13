import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import CodeBlock from '../../components/code-block';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const EmbeddedButton: FunctionComponent = function () {
  const {
    register: register,
    handleSubmit,
    setError,
    reset,
    getValues,
    getFieldState,
    clearErrors,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: { btnText: 'Mock with Mockoon', dataURL: '' }
  });
  const urlPrefix = 'mockoon://load-environment?url=';
  let btnStyles =
    '.mockoon-btn{display:inline-block;padding:5px;border-radius:5px;border:1px solid #d8dbdf;background-color:#5066901a;color:#506690;text-decoration:none;white-space:nowrap;}.mockoon-btn:hover{border:1px solid #d8dbdf;background-color:#50669026;color:#506690;text-decoration:none;}.mockoon-btn img{width:35px;margin: 0 5px}';
  let buttonCode = `<style>${btnStyles}</style><a href="${urlPrefix}${watch(
    'dataURL'
  )}"><img src="https://mockoon.com/images/logo-eyes.svg" width="50" />${watch(
    'btnText'
  )}</a>`;

  const onSubmit = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      try {
        await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        reset();
      } catch {}
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title='Mockoon button'
        description='Add a button to your API website or documentation to launch your mock API in Mockoon in one click'
        ogType='article'
      />
      <Hero
        title='Mockoon button'
        subtitle='Add a one-click API mocking button to your API documentation'
      />

      <section className='py-8 py-md-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-5'>
              <h2 className='fw-bold'>
                Let your user{' '}
                <span className='text-primary'>
                  launch your API mocks in one click
                </span>
                .
              </h2>

              <p className='fs-lg text-gray-700'>
                Using our embedded button, you can offer your users a convenient
                way to launch your API mocks in one click. The button uses
                Mockoon's custom protocol <code>mockoon://</code> to open your
                mock API directly in the desktop application. You can also
                provide your user with a ready-to-use CLI command (see below).
              </p>
            </div>
            <div className='col-12 col-md-6 col-lg-6 offset-lg-1'>
              <div className='card card-border border-secondary-soft shadow-lg mb-5'>
                <div className='card-body'>
                  <label className='form-label text-gray-700' htmlFor='dataURL'>
                    Mockoon{' '}
                    <Link href='/docs/latest/mockoon-data-files/data-storage-location/'>
                      <a>data file</a>
                    </Link>{' '}
                    URL
                  </label>{' '}
                  <input
                    type='text'
                    id='dataURL'
                    className='form-control'
                    placeholder='Enter the URL of your Mockoon data file'
                    {...register('dataURL')}
                  />
                </div>
              </div>
              <div className='card card-border border-primary shadow-lg mb-5'>
                <div className='card-body'>
                  <div>
                    <label
                      className='form-label text-gray-700'
                      htmlFor='btnText'
                    >
                      Button's text
                    </label>
                    <input
                      type='text'
                      id='btnText'
                      className='form-control'
                      {...register('btnText')}
                    />
                  </div>
                  <p className='text-gray-700 mb-2 pt-6'>Preview:</p>
                  <div className='ps-4'>
                    <style>{btnStyles}</style>
                    <a
                      href={`${urlPrefix}${watch('dataURL')}`}
                      className='mockoon-btn'
                    >
                      <img src='/images/logo-eyes.svg' />
                      {watch('btnText')}
                    </a>
                  </div>
                  <p className='text-gray-700 mb-2 pt-6'>
                    Copy the following code:
                  </p>
                  <div className='ps-4'>
                    <CodeBlock
                      code={buttonCode}
                      language='html'
                      maxHeight='100px'
                    />
                    <p className='fs-6 text-muted'>
                      Feel free to modify this code!
                    </p>
                  </div>
                </div>
              </div>
              <div className='card card-border border-black shadow-lg mt-8'>
                <div className='card-body'>
                  <p className='text-gray-700 mb-2'>
                    Run a mock with the{' '}
                    <Link href={'/cli/'}>
                      <a>CLI</a>
                    </Link>
                    :
                  </p>
                  <div className='ps-4'>
                    <code>mockoon-cli start -d {watch('dataURL')}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmbeddedButton;
