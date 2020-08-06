import { FunctionComponent } from 'react';

const Donate: FunctionComponent = function () {
  return (
    <section className='section is-light'>
      <div className='container has-text-centered has-text-weight-semibold'>
        <p className='title is-6'>
          If you like Mockoon you can support me with a one-time donation:
        </p>
        <div>
          <div className='donate-item'>
            <a href='https://paypal.me/255kb' rel='noopener' target='_blank'>
              <img
                src='https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png'
                alt='Paypal'
              />
            </a>
          </div>
          <div className='donate-item'>
            <a
              className='bmc-button'
              target='_blank'
              rel='noopener'
              href='https://www.buymeacoffee.com/255kb'
            >
              <img
                src='https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg'
                alt='Buy me a coffee'
              />
              <span style={{ marginLeft: 5 + 'px' }}>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
