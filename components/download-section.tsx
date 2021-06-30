import { Fragment, FunctionComponent } from 'react';
const version = require('../package.json').version;

const DownloadSection: FunctionComponent = function () {
  return (
    <Fragment>
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
                onClick={() =>
                  ga('send', 'event', 'application', 'download', 'windows')
                }
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>exe installer</span>
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
                onClick={() =>
                  ga('send', 'event', 'application', 'download', 'linux')
                }
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
                onClick={() =>
                  ga('send', 'event', 'application', 'download', 'linux')
                }
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
                onClick={() =>
                  ga('send', 'event', 'application', 'download', 'linux')
                }
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
                onClick={() =>
                  ga('send', 'event', 'application', 'download', 'osx')
                }
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
      <div className='justify-content-center col-12 text-center my-5'>
        <h4 className='text-muted'>
          Mockoon is released under the MIT license.{' '}
          <a
            href={'https://github.com/mockoon/mockoon/releases/tag/v' + version}
            rel='noopener'
            target='_blank'
          >
            <span className='badge bg-secondary-soft'>v{version}</span>
          </a>
        </h4>
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
