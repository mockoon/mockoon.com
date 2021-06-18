import { FunctionComponent } from 'react';

const Donate: FunctionComponent = function () {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center mt-4'>
      <div className='me-4'>
        <a href='https://paypal.me/255kb' rel='noopener' target='_blank'>
          <img
            src='https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png'
            alt='Paypal'
          />
        </a>
      </div>
      <div>
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
  );
};

export default Donate;
