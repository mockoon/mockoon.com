import { DocSearch } from '@docsearch/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { useAuth } from '../utils/auth';

enum Dropdowns {
  NONE = 'NONE',
  APPS = 'APPS',
  ACCOUNT = 'ACCOUNT',
  RESOURCES = 'RESOURCES'
}

const Nav: FunctionComponent = function () {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(Dropdowns.NONE);
  const auth = useAuth();

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

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
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
          <img src='/images/logo.svg' className='navbar-brand-img' alt='Logo' />
        </a>

        {toggler}

        <div
          className={
            show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
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
              <DocSearch
                appId='HV1IDAB8IU'
                indexName='mockoon'
                apiKey='c3396e739c9949cf6ccf7305b8da46aa'
              />
            </li>

            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setDropdownOpen(Dropdowns.APPS);
              }}
              onMouseLeave={() => {
                !show && setDropdownOpen(Dropdowns.NONE);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded={dropdownOpen === Dropdowns.APPS}
              >
                Apps {!show && <i className='icon-arrow_drop_down'></i>}
              </a>
              <ul
                className={`dropdown-menu ${show ? 'text-center' : ''} ${
                  dropdownOpen === Dropdowns.APPS ? 'show' : ''
                }`}
              >
                <h6 className='dropdown-header'>Main application</h6>
                <li className='dropdown-item mb-5'>
                  <Link href='/download/' className='dropdown-link'>
                    Mockoon Desktop
                  </Link>
                </li>
                <h6 className='dropdown-header'>Libs</h6>
                <li className='dropdown-item'>
                  <Link href='/cli/' className='dropdown-link'>
                    CLI
                  </Link>
                </li>
                <li className='dropdown-item'>
                  <Link href='/serverless/' className='dropdown-link'>
                    Serverless package
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <Link
                href='/pro/'
                className={`nav-link ${
                  router.pathname === '/pro' ? 'active' : ''
                }`}
              >
                Pro
              </Link>
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
                className={`dropdown-menu dropdown-menu-lg ${
                  show ? 'text-center' : ''
                } ${dropdownOpen === Dropdowns.RESOURCES ? 'show' : ''}`}
              >
                <div className='row gx-0 gx-md-4'>
                  <div className='col-md-4 mb-4 mb-md-0'>
                    <div className='row gx-0'>
                      <div className='col-12 col-lg-6'>
                        <h6 className='dropdown-header'>Learn</h6>

                        <Link
                          href='/course/'
                          className={`dropdown-item ${
                            router.pathname === '/course' ? 'active' : ''
                          }`}
                        >
                          Course{' '}
                          <i className='icon-new_releases text-warning'></i>
                        </Link>
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
                          API Playground{' '}
                          <i className='icon-new_releases text-warning'></i>
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
                          href='/releases/8.0.0/'
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
  );
};

export default Nav;
