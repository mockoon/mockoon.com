import { Fragment, FunctionComponent, useState } from 'react';
import GitHubButton from 'react-github-btn';
import { sendEvent } from '../utils/analytics';

const DownloadSection: FunctionComponent<{ version: string }> = function ({
  version
}) {
  const [showSupport, setShowSupport] = useState(false);

  const postDownload = (platform: 'win' | 'mac' | 'linux') => {
    sendEvent('event', 'download', platform);

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
                Mockoon tools are proudly offered as <strong>free</strong> and{' '}
                <strong>open-source</strong>, crafted with dedication by a team
                of passionate developers. We rely on your invaluable support to
                ensure their continued development and maintenance.
              </p>
              <div className='row mt-6'>
                <div className='col-6'>
                  <GitHubButton
                    href='https://github.com/mockoon/mockoon'
                    data-size='large'
                    data-show-count='true'
                    aria-label='Star mockoon/mockoon on GitHub'
                  >
                    Star
                  </GitHubButton>
                </div>
                <div className='col-6'>
                  <GitHubButton
                    href='https://github.com/sponsors/mockoon'
                    data-icon='octicon-heart'
                    data-size='large'
                    aria-label='Sponsor @mockoon on GitHub'
                  >
                    Sponsor
                  </GitHubButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='row'>
        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-windows'></i>
          </div>

          <div className='text-gray-700 mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.exe`}
                rel='noopener'
                onClick={() => postDownload('win')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>installer</span>
              </a>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.portable.${version}.exe`}
                rel='noopener'
                onClick={() => postDownload('win')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>portable</span>
              </a>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href='https://apps.microsoft.com/detail/9PK8DMSN00JJ?hl=en-us&gl=us'
                rel='noopener'
                target='_blank'
                onClick={() => postDownload('win')}
              >
                <span className='icon me-2'>
                  <i className='icon-windows'></i>
                </span>
                <span>store</span>
              </a>
            </div>
            <div className='content p-3'>
              <span className='user-select-none'>or </span>
              <br />
              <a
                href='https://community.chocolatey.org/packages/mockoon'
                className='text-decoration-none'
                target='_blank'
                rel='noopener'
              >
                {' '}
                <code>choco install mockoon</code>
                <i
                  className='text-gray-700 icon-open ps-2'
                  aria-hidden='true'
                ></i>
              </a>
              <br />
              <a
                href='https://apps.microsoft.com/detail/9PK8DMSN00JJ?hl=en-us&gl=us'
                className='text-decoration-none'
                target='_blank'
                rel='noopener'
              >
                <code>winget install mockoon</code>
                <i
                  className='text-gray-700 icon-open ps-2'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-linux'></i>
          </div>

          <div className='text-gray-700 mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
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
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
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
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
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
            <div className='content'>(x86 only)</div>
            <div className='content p-3'>
              <span className='user-select-none'>or </span>
              <br />
              <a
                href='https://snapcraft.io/mockoon'
                className='text-decoration-none'
                target='_blank'
                rel='noopener'
              >
                <code>sudo snap install mockoon</code>
                <i
                  className='text-gray-700 icon-open ps-2'
                  aria-hidden='true'
                ></i>
              </a>
              <br />
              <a
                href='https://aur.archlinux.org/packages/mockoon-bin'
                className='text-decoration-none'
                target='_blank'
                rel='noopener'
              >
                <code className='mt-1 user-select-text'>
                  yay -S mockoon-bin
                </code>
                <i
                  className='text-gray-700 icon-open ps-2'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-4 text-center py-2'>
          <div className='icon mb-3'>
            <i className='icon-apple'></i>
          </div>

          <div className='text-gray-700 mb-6 mb-lg-0'>
            <div className='btn-group'>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.universal.dmg`}
                rel='noopener'
                onClick={() => postDownload('mac')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>Universal</span>
              </a>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.x64.dmg`}
                rel='noopener'
                onClick={() => postDownload('mac')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>Intel</span>
              </a>
              <a
                className='btn btn-primary-subtle btn-sm d-flex align-items-center'
                href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.arm64.dmg`}
                rel='noopener'
                onClick={() => postDownload('mac')}
              >
                <span className='icon me-2'>
                  <i className='icon-download'></i>
                </span>
                <span>Silicon</span>
              </a>
            </div>
            <div className='content p-3'>
              <span className='user-select-none'>or </span>
              <br />
              <a
                href='https://formulae.brew.sh/cask/mockoon'
                className='text-decoration-none'
                target='_blank'
                rel='noopener'
              >
                <code>brew install --cask mockoon</code>
                <i
                  className='text-gray-700 icon-open ps-2'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 text-center'>
          <p className='text-center'>
            <a className='text-gray-700' href={`/releases/${version}/`}>
              See the v{version} changelog
            </a>
          </p>
        </div>
      </div>

      <div className='row mt-6'>
        <div className='text-center'>
          <p className='has-text-centered pt-4'>
            <a
              className='btn btn-secondary-subtle'
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
