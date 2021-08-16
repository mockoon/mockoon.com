import { Fragment, FunctionComponent, useState } from 'react';
import GitHub from './github';
const version = require('../package.json').version;
declare let gtag: Function;

const DownloadSection: FunctionComponent = function () {
  const [showSupport, setShowSupport] = useState(false);

  const postDownload = (platform: string) => {
    gtag('event', 'download', { event_category: platform });
    setTimeout(() => {
      setShowSupport(true);
    }, 500);
  };

  return (
    <Fragment>
      {showSupport && (
        <div className='row justify-content-center fade-in'>
          <div className='col-8 text-center pt-4 pb-8'>
            <div className='alert alert-light shadow-dark' role='alert'>
              <p className='h1'>🚀</p>
              <h4 className='alert-heading'>Thanks for downloading Mockoon!</h4>
              <p>
                Mockoon is an open-source developer tool created by a{' '}
                <a href='/about/'>team of passionate developers</a>.{' '}
              </p>
              <p>Support us by starring our GitHub repository!</p>
              <GitHub />
            </div>
          </div>
        </div>
      )}
      <div className='row'>
        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-windows'></i>
          </div>

          <div className='text-muted mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.exe`}
                rel='noopener'
                onClick={() => postDownload('windows')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>installer</span>
              </a>
              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.portable.${version}.exe`}
                rel='noopener'
                onClick={() => postDownload('windows')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>portable</span>
              </a>
            </div>
            <div className='content p-3'>
              or <code>choco install mockoon</code>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-linux'></i>
          </div>

          <div className='text-muted mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.deb`}
                rel='noopener'
                onClick={() => postDownload('linux')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>deb</span>
              </a>

              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.rpm`}
                rel='noopener'
                onClick={() => postDownload('linux')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>rpm</span>
              </a>

              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.AppImage`}
                rel='noopener'
                onClick={() => postDownload('linux')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>AppImage</span>
              </a>
            </div>
            <div className='content p-3'>
              or <code>sudo snap install mockoon</code>
              <br />
              <code className='mt-1'>yay -S mockoon-bin</code>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-apple'></i>
          </div>

          <div className='text-muted mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-soft btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.dmg`}
                rel='noopener'
                onClick={() => postDownload('osx')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>dmg</span>
              </a>
            </div>
            <div className='content p-3'>
              or <code>brew install --cask mockoon</code>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 text-center'>
          <p className='text-center'>
            <a
              className='text-gray-600'
              href={`https://github.com/mockoon/mockoon/releases/tag/v${version}`}
            >
              See all downloads
            </a>
          </p>
        </div>
      </div>

      <div className='row mt-6'>
        <div className='text-center'>
          <p className='has-text-centered pt-4'>
            <a
              className='btn btn-secondary-soft'
              href='/cli/'
              style={{
                fontFamily:
                  'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'
              }}
            >
              ~$ Looking for the CLI?
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DownloadSection;
