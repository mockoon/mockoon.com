import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CodeBlock from '../../components/code-block';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const EmbeddedButton: FunctionComponent = function () {
  const router = useRouter();
  const {
    register: register,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      btnText: 'Mock with Mockoon',
      dataURL: router.query.dataURL || ''
    }
  });
  const urlPrefix = 'mockoon://load-environment?url=';
  let btnStyles =
    '.mockoon-btn{display:inline-block;padding:5px;border-radius:5px;border:1px solid #d8dbdf;background-color:#5066901a;color:#506690;text-decoration:none;white-space:nowrap;}.mockoon-btn:hover{border:1px solid #d8dbdf;background-color:#50669026;color:#506690;text-decoration:none;}.mockoon-btn img{width:35px;margin: 0 5px}';
  let buttonCode = `<style>${btnStyles}</style><a href="${urlPrefix}${
    watch('dataURL') || '{data_URL}'
  }"><img src="https://mockoon.com/images/logo-eyes.svg" width="50" alt="Mockoon logo" />${watch(
    'btnText'
  )}</a>`;

  useEffect(() => {
    setValue('dataURL', router.query.dataURL);
  }, []);

  return (
    <Layout footerBanner='download'>
      <Meta
        title='One-click API mock launch button'
        description='Add a button to your API website or documentation to launch your mock API definitions in Mockoon desktop application or CLI in one click'
        ogType='article'
      />
      <Hero
        title='One-click API mock launch button'
        subtitle='Add a button to your API website or documentation to launch your mock API definitions in Mockoon desktop application or CLI in one click'
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
                      href={`${urlPrefix}${watch('dataURL') || '{data_URL}'}`}
                      className='mockoon-btn'
                    >
                      <img src='/images/logo-eyes.svg' alt='Mockoon logo' />
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
                    <code>
                      mockoon-cli start -d {watch('dataURL') || '{data_URL}'}
                    </code>
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
