import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

const Nav: FunctionComponent = function () {
  const router = useRouter();
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-white pt-0'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand pt-0 mt-0 me-auto'>
              <img
                src='/images/logo.svg'
                className='logo'
                alt='Logo'
                width='150'
              />
            </a>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbar'
            aria-controls='navbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='navbar-collapse d-flex justify-content-end collapse'
            id='navbar'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item px-2'>
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
              <li className='nav-item px-2'>
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
              <li className='nav-item px-2'>
                <Link href='/cli/'>
                  <a
                    className={`nav-link d-flex align-items-center ${
                      router.pathname === '/cli' ? 'active' : ''
                    }`}
                  >
                    <span className='badge bg-primary-soft'>New!</span>
                    <span>&nbsp;CLI</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item px-2'>
                <Link href='/tutorials/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/tutorials' ? 'active' : ''
                    }`}
                  >
                    Tutorials
                  </a>
                </Link>
              </li>
              <li className='nav-item px-2'>
                <Link href='/blog/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/blog' ||
                      router.pathname === '/blog/[slug]'
                        ? 'active'
                        : ''
                    }`}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className='nav-item px-2'>
                <Link href='/faq/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/faq' ? 'active' : ''
                    }`}
                  >
                    FAQ
                  </a>
                </Link>
              </li>
              <li className='nav-item px-2'>
                <Link href='/sponsor-us/'>
                  <a
                    className={`nav-link ${
                      router.pathname === '/sponsor-us' ? 'active' : ''
                    }`}
                  >
                    Sponsor us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
