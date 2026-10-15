import { DocSearch } from '@docsearch/react';
import { isBefore } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { useAuth } from '../utils/auth';
import { useCurrentUser } from '../utils/queries';
import GitHub from './github';

enum Dropdowns {
  NONE = 'NONE',
  PRODUCT = 'PRODUCT',
  SOLUTIONS = 'SOLUTIONS',
  ACCOUNT = 'ACCOUNT',
  RESOURCES = 'RESOURCES'
}

const Nav: FunctionComponent<{
  topBanner?: { topBannerTimeEnd: Date; content: React.ReactNode };
}> = function ({ topBanner }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(Dropdowns.NONE);
  const auth = useAuth();
  const { data: userData } = useCurrentUser();
  const canOpenWebapp =
    userData?.plan !== 'FREE' &&
    userData?.teamRole !== 'billing' &&
    userData?.teamRole !== 'team_admin';
  const toggler = (
    <button
      className='navbar-toggler'
      type='button'
      aria-controls='navbar'
      aria-expanded={show}
      aria-label='Toggle navigation'
      onClick={() => setShow(!show)}
    >
      <span className='navbar-toggler-icon'></span>
    </button>
  );

  const logout = async (e: MouseEvent) => {
    e.preventDefault();

    await auth.logout();
    setDropdownOpen(Dropdowns.NONE);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {topBanner &&
        showBanner &&
        isBefore(new Date(), topBanner.topBannerTimeEnd) && (
          <div className='top-banner text-center'>
            {topBanner.content}
            <button className='close-banner' onClick={closeBanner}>
              &times;
            </button>
          </div>
        )}
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container-fluid'>
          <a
            className='navbar-brand w-100'
            href='/'
            onContextMenu={(e) => {
              e.preventDefault();
              router.push('/brand/');
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
          >
            <img
              src='/images/logo-text-sticker.svg'
              className='navbar-brand-img'
              alt='Logo'
            />
          </a>

          {toggler}

          <div
            className={
              show
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
          >
            <ul className='navbar-nav align-items-center ms-auto'>
              {show && toggler}
              {show && (
                <li className='nav-item'>
                  <Link
                    href='/'
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </Link>
                </li>
              )}

              <li className='nav-item'>
                <GitHub />
              </li>

              <li className='nav-item px-4'>
                <DocSearch
                  appId='HV1IDAB8IU'
                  indexName='mockoon'
                  apiKey='c3396e739c9949cf6ccf7305b8da46aa'
                />
              </li>

              <li
                className='nav-item dropdown text-center'
                onMouseEnter={() => {
                  !show && setDropdownOpen(Dropdowns.PRODUCT);
                }}
                onMouseLeave={() => {
                  !show && setDropdownOpen(Dropdowns.NONE);
                }}
              >
                <a
                  className={`nav-link dropdown-toggle`}
                  href='#'
                  aria-haspopup='true'
                  aria-expanded={dropdownOpen === Dropdowns.PRODUCT}
                >
                  Platform {!show && <i className='icon-arrow_drop_down'></i>}
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-lg ${
                    show ? 'text-center' : ''
                  } ${dropdownOpen === Dropdowns.PRODUCT ? 'show' : ''}`}
                >
                  <div className='row gx-0 gx-md-6'>
                    <div className='col-md-6 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>Open Source</h6>
                          <Link
                            href='/what-is-mockoon/'
                            className={`dropdown-item ${
                              router.pathname === '/what-is-mockoon'
                                ? 'active'
                                : ''
                            }`}
                          >
                            What is Mockoon?
                          </Link>

                          <Link
                            href='/download/'
                            className={`dropdown-item ${
                              router.pathname === '/download' ? 'active' : ''
                            }`}
                          >
                            Desktop application
                          </Link>

                          <Link
                            href='/cli/'
                            className={`dropdown-item ${
                              router.pathname === '/cli' ? 'active' : ''
                            }`}
                          >
                            CLI
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          {' '}
                          <h6 className='dropdown-header'>Pro</h6>
                          <Link
                            href='/pro/'
                            className={`dropdown-item ${
                              router.pathname === '/pro' ? 'active' : ''
                            }`}
                          >
                            Mockoon Pro
                          </Link>
                          <Link
                            href='/pricing/'
                            className={`dropdown-item ${
                              router.pathname === '/pricing' ? 'active' : ''
                            }`}
                          >
                            Pricing
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                <Link
                  href='/pricing/'
                  className={`nav-link ${
                    router.pathname === '/pricing' ? 'active' : ''
                  }`}
                >
                  Pricing
                </Link>
              </li>

              <li
                className='nav-item dropdown text-center'
                onMouseEnter={() => {
                  !show && setDropdownOpen(Dropdowns.SOLUTIONS);
                }}
                onMouseLeave={() => {
                  !show && setDropdownOpen(Dropdowns.NONE);
                }}
              >
                <a
                  className={`nav-link dropdown-toggle`}
                  href='#'
                  aria-haspopup='true'
                  aria-expanded={dropdownOpen === Dropdowns.SOLUTIONS}
                >
                  Solutions {!show && <i className='icon-arrow_drop_down'></i>}
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-lg ${
                    show ? 'text-center' : ''
                  } ${dropdownOpen === Dropdowns.SOLUTIONS ? 'show' : ''}`}
                >
                  <div className='row gx-0 gx-md-6'>
                    <div className='col-md-4 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>Capabilities</h6>

                          <Link
                            href='/use-cases/api-mocking/'
                            className={`dropdown-item ${
                              router.pathname === '/use-cases/api-mocking'
                                ? 'active'
                                : ''
                            }`}
                          >
                            API Mocking
                          </Link>

                          <Link
                            href='/use-cases/api-virtualization/'
                            className={`dropdown-item ${
                              router.pathname ===
                              '/use-cases/api-virtualization'
                                ? 'active'
                                : ''
                            }`}
                          >
                            API Virtualization
                          </Link>

                          <Link
                            href='/use-cases/api-sandboxing/'
                            className={`dropdown-item ${
                              router.pathname === '/use-cases/api-sandboxing'
                                ? 'active'
                                : ''
                            }`}
                          >
                            API Sandboxing
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>By Industry</h6>

                          <Link
                            href='/use-cases/fintech/'
                            className={`dropdown-item ${
                              router.pathname === '/use-cases/fintech'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Banking & Financial Services
                          </Link>

                          <Link
                            href='/use-cases/insurance/'
                            className={`dropdown-item ${
                              router.pathname === '/use-cases/insurance'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Insurance
                          </Link>

                          <Link
                            href='/use-cases/automotive/'
                            className={`dropdown-item ${
                              router.pathname === '/use-cases/automotive'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Automotive
                          </Link>

                          <Link
                            href='/use-cases/industrial-automation/'
                            className={`dropdown-item ${
                              router.pathname ===
                              '/use-cases/industrial-automation'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Industrial Automation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className='nav-item dropdown text-center'
                onMouseEnter={() => {
                  !show && setDropdownOpen(Dropdowns.RESOURCES);
                }}
                onMouseLeave={() => {
                  !show && setDropdownOpen(Dropdowns.NONE);
                }}
              >
                <a
                  className={`nav-link dropdown-toggle`}
                  href='#'
                  aria-haspopup='true'
                  aria-expanded={dropdownOpen === Dropdowns.RESOURCES}
                >
                  Resources {!show && <i className='icon-arrow_drop_down'></i>}
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-xl dropdown-menu-end ${
                    show ? 'text-center' : ''
                  } ${dropdownOpen === Dropdowns.RESOURCES ? 'show' : ''}`}
                >
                  <div className='row gx-0 gx-md-6'>
                    <div className='col-md-4 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>Learn</h6>

                          <Link
                            href='/docs/latest/about/'
                            className={`dropdown-item ${
                              router.pathname === '/docs/[...slug]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Docs
                          </Link>
                          <Link
                            href='/pro/docs/discover-mockoon-pro/'
                            className={`dropdown-item ${
                              router.pathname === '/pro/docs/[...slug]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Pro Docs
                          </Link>

                          <Link
                            href='/tutorials/'
                            className={`dropdown-item ${
                              router.pathname === '/tutorials' ||
                              router.pathname === '/tutorials/[slug]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Tutorials
                          </Link>

                          <Link
                            href='/training/'
                            className={`dropdown-item ${
                              router.pathname === '/training' ? 'active' : ''
                            }`}
                          >
                            Live Training
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>Tools</h6>

                          <Link
                            href='/playground/'
                            className={`dropdown-item ${
                              router.pathname === '/playground' ? 'active' : ''
                            }`}
                          >
                            API Playground
                          </Link>
                          <Link
                            href='/mock-samples/category/all/'
                            className={`dropdown-item ${
                              router.pathname === '/mock-samples/[slug]' ||
                              router.pathname ===
                                '/mock-samples/category/[category]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Mock samples
                          </Link>
                          <Link
                            href='/templates/'
                            className={`dropdown-item ${
                              router.pathname === '/templates' ? 'active' : ''
                            }`}
                          >
                            Templates
                          </Link>
                          <Link
                            href='/tools/'
                            className={`dropdown-item ${
                              router.pathname.includes('/tools') ? 'active' : ''
                            }`}
                          >
                            Useful tools
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4 mb-4 mb-md-0'>
                      <div className='row gx-0'>
                        <div className='col-12 col-lg-6'>
                          <h6 className='dropdown-header'>Misc</h6>

                          <Link
                            href='/blog/'
                            className={`dropdown-item ${
                              router.pathname === '/blog' ||
                              router.pathname === '/blog/[slug]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Blog
                          </Link>
                          <a
                            href='/releases/9.10.0/'
                            className={`dropdown-item ${
                              router.pathname === '/releases' ||
                              router.pathname === '/releases/[version]'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Releases
                          </a>
                          <Link
                            href='/features/'
                            className={`dropdown-item ${
                              router.pathname === '/features' ? 'active' : ''
                            }`}
                          >
                            Features
                          </Link>
                          <Link
                            href='/faq/'
                            className={`dropdown-item ${
                              router.pathname === '/faq' ? 'active' : ''
                            }`}
                          >
                            FAQ
                          </Link>
                          <Link
                            href='/public-roadmap/'
                            className={`dropdown-item ${
                              router.pathname === '/public-roadmap'
                                ? 'active'
                                : ''
                            }`}
                          >
                            Roadmap
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className='nav-item dropdown text-center'
                onMouseEnter={() => {
                  !show && setDropdownOpen(Dropdowns.ACCOUNT);
                }}
                onMouseLeave={() => {
                  !show && setDropdownOpen(Dropdowns.NONE);
                }}
              >
                <a
                  className={`nav-link dropdown-toggle`}
                  href='#'
                  aria-haspopup='true'
                  aria-expanded={dropdownOpen === Dropdowns.ACCOUNT}
                >
                  <span
                    className={`me-2 vertical-bottom ${
                      auth.isAuth ? 'with-indicator' : ''
                    }`}
                  >
                    <i className='icon-account_circle'></i>
                  </span>
                  {!show && <i className='icon-arrow_drop_down'></i>}
                </a>
                <ul
                  className={`dropdown-menu ${show ? 'text-center' : ''} ${
                    dropdownOpen === Dropdowns.ACCOUNT ? 'show' : ''
                  }`}
                >
                  {!auth.isAuth && (
                    <>
                      <li className='dropdown-item'>
                        <Link href='/login/' className='dropdown-link'>
                          Log in
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link href='/signup/' className='dropdown-link'>
                          Sign up
                        </Link>
                      </li>
                    </>
                  )}
                  {auth.isAuth && (
                    <>
                      <li className='dropdown-item'>
                        {canOpenWebapp && (
                          <Link
                            href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}`}
                            className='dropdown-link'
                            target='_blank'
                          >
                            Open web app
                            <i
                              className='icon-open ps-2'
                              aria-hidden='true'
                            ></i>
                          </Link>
                        )}
                      </li>
                      <li className='dropdown-item'>
                        <Link href='/account/info/' className='dropdown-link'>
                          My account
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <a
                          href=''
                          className='dropdown-link'
                          onClick={async (e: any) => logout(e)}
                        >
                          Log out
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
