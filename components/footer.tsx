import { FunctionComponent } from 'react';
import GitHub from './github';
import Spectrum from './spectrum';

const Footer: FunctionComponent = function () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            &copy; Mockoon 2017 - present by{' '}
            <a href='https://github.com/255kb' rel='noopener'>255kb</a>
          </p>
          <p>
            <a href='https://spectrum.chat/mockoon' rel='noopener'>
              <Spectrum />
            </a>
          </p>
          <GitHub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
