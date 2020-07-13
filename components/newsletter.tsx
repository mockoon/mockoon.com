import { FunctionComponent } from 'react';

const Newsletter: FunctionComponent = function () {
  return (
    <section className='section is-light'>
      <div className='container has-text-centered has-text-weight-semibold'>
        <div id='mc_embed_signup'>
          <form
            action='https://mockoon.us17.list-manage.com/subscribe/post?u=a8822ec82cbe40c6dc5564bd4&amp;id=e054c8a3a4'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='_blank'
            noValidate
          >
            <div id='mc_embed_signup_scroll'>
              <label htmlFor='mce-EMAIL'>
                Enter your email address to receive Mockoon's latest updates:
              </label>
              <input
                type='email'
                name='EMAIL'
                className='email'
                id='mce-EMAIL'
                aria-required="true"
                required
              />
              <div
                style={{ position: 'absolute', left: -5000 + 'px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_a8822ec82cbe40c6dc5564bd4_e054c8a3a4'
                  tabIndex={-1}
                  defaultValue=''
                />
              </div>
              <div className='clear'>
                <input
                  type='submit'
                  defaultValue='Subscribe'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='button'
                />
              </div>
              <div
                id='mce-responses'
                className='clear'
                style={{ float: 'none' }}
              >
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                ></div>
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                ></div>
              </div>
            </div>
          </form>
        </div>
        <p>Or follow us on Twitter</p>
        <a
          href='https://twitter.com/GetMockoon?ref_src=twsrc%5Etfw'
          className='twitter-follow-button'
          data-size='large'
          data-show-screen-name='false'
          data-dnt='true'
          data-show-count='false'
        >
          Follow @GetMockoon
        </a>
      </div>
    </section>
  );
};

export default Newsletter;
