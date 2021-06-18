import { FunctionComponent } from 'react';

const Newsletter: FunctionComponent = function () {
  return (
    <div className='bg-gray-200 pt-4'>
      <div className='container pb-7 border-bottom border-gray-300'>
        <div className='row align-items-center text-lg-start text-center'>
          <div className='col-12 col-lg-7'>
            <h4 className='mb-1 fw-bold'>Get our stories delivered</h4>

            <p className='fs-lg text-muted mb-4 mb-lg-0'>
              Enter your email address to receive Mockoon's latest updates
            </p>
          </div>
          <div className='col-12 col-lg-5'>
            <form
              action='https://mockoon.us17.list-manage.com/subscribe/post?u=a8822ec82cbe40c6dc5564bd4&amp;id=e054c8a3a4'
              method='post'
              target='_blank'
              noValidate
            >
              <div className='row'>
                <div className='col-12 col-lg-7'>
                  <input
                    className='form-control'
                    type='email'
                    id='newsletter-email'
                    name='EMAIL'
                    placeholder='Email address'
                  />
                </div>
                <div className='col-12 col-lg-5 pt-lg-0 pt-4'>
                  <button className='btn btn-primary col-12' type='submit'>
                    Subscribe
                  </button>
                </div>
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_a8822ec82cbe40c6dc5564bd4_e054c8a3a4'
                  tabIndex={-1}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
