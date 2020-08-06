import { FunctionComponent } from 'react';

const Newsletter: FunctionComponent = function () {
  return (
    <section className='section is-light'>
      <div className='container has-text-centered has-text-weight-semibold'>
        <div>
          <form
            action='https://mockoon.us17.list-manage.com/subscribe/post?u=a8822ec82cbe40c6dc5564bd4&amp;id=e054c8a3a4'
            method='post'
            target='_blank'
            noValidate
          >
            <label className='label' htmlFor='newsletter-email'>
              Enter your email address to receive Mockoon's latest updates:
            </label>
            <div className='field has-addons has-addons-centered'>
              <div className='control'>
                <input
                  className='input'
                  type='email'
                  id='newsletter-email'
                  name='EMAIL'
                />
              </div>
              <div className='control'>
                <button type='submit' className='button is-info'>
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

        <p>Or follow us on Twitter</p>
        <a
          title='Follow us on Twitter'
          rel='noopener'
          href='https://twitter.com/intent/follow?screen_name=GetMockoon'
          className='button is-primary twitter'
          target='_blank'
        >
          <span className='icon'>
            <i className='icon-twitter' aria-hidden='true'></i>
          </span>
          <span>Follow @GetMockoon</span>
        </a>
      </div>
    </section>
  );
};

export default Newsletter;
