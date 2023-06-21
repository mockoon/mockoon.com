import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, MouseEvent, useState } from 'react';
import { useAuth } from '../utils/auth';

const Nav: FunctionComponent = function () {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
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
    setAccountDropdownOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>
            <img
              src='/images/logo.svg'
              className='navbar-brand-img'
              alt='Logo'
            />
          </a>
        </Link>

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
                <Link href='/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
            )}
            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setAppsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                !show && setAppsDropdownOpen(false);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded={appsDropdownOpen}
              >
                Apps {!show && <i className='icon-arrow_drop_down'></i>}
              </a>
              <ul
                className={`dropdown-menu ${show ? 'text-center' : ''} ${
                  appsDropdownOpen ? 'show' : ''
                }`}
              >
                <h6 className='dropdown-header'>Main application</h6>
                <li className='dropdown-item mb-5 ps-lg-8'>
                  <Link href='/download/'>
                    <a className='dropdown-link'>Mockoon Desktop</a>
                  </Link>
                </li>
                <h6 className='dropdown-header'>Tools</h6>
                <li className='dropdown-item ps-lg-8'>
                  <Link href='/cli/'>
                    <a className='dropdown-link'>CLI</a>
                  </Link>
                </li>
                <li className='dropdown-item ps-lg-8'>
                  <Link href='/serverless/'>
                    <a className='dropdown-link'>Serveless package</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <Link href='/pro/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/pro' ? 'active' : ''
                  }`}
                >
                  Pro
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/features/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/features' ? 'active' : ''
                  }`}
                >
                  Features
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/docs/latest/about/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/docs/[...slug]' ? 'active' : ''
                  }`}
                >
                  Docs
                </a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/tutorials/'>
                <a
                  className={`nav-link ${
                    router.pathname === '/tutorials' ||
                    router.pathname === '/tutorials/[slug]'
                      ? 'active'
                      : ''
                  }`}
                >
                  Tutorials
                </a>
              </Link>
            </li>

            <li
              className='nav-item dropdown text-center'
              onMouseEnter={() => {
                !show && setAccountDropdownOpen(true);
              }}
              onMouseLeave={() => {
                !show && setAccountDropdownOpen(false);
              }}
            >
              <a
                className={`nav-link dropdown-toggle`}
                href='#'
                aria-haspopup='true'
                aria-expanded={accountDropdownOpen}
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
                  accountDropdownOpen ? 'show' : ''
                }`}
              >
                {!auth.isAuth && (
                  <>
                    <li className='dropdown-item'>
                      <Link href='/login/'>
                        <a className='dropdown-link'>Log in</a>
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <Link href='/signup/'>
                        <a className='dropdown-link'>Sign up</a>
                      </Link>
                    </li>
                  </>
                )}
                {auth.isAuth && (
                  <>
                    <li className='dropdown-item'>
                      <Link href='/account/info/'>
                        <a className='dropdown-link'>My account</a>
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <a
                        href=''
                        className='dropdown-link'
                        onClick={async (e) => logout(e)}
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
