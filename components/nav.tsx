import Link from 'next/link';
import { Component } from 'react';

class Nav extends Component<any, {}> {
  constructor(props) {
    super(props);
  }

  render() {
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
                    <a className='nav-link'>Features</a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/docs/latest/about/'>
                    <a className='nav-link'>Docs</a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/cli/'>
                    <a className='nav-link d-flex align-items-center'>
                      <span className='badge bg-primary-soft'>New!</span>
                      <span>&nbsp;CLI</span>
                    </a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/tutorials/'>
                    <a className='nav-link'>Tutorials</a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/blog/'>
                    <a className='nav-link'>Blog</a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/faq/'>
                    <a className='nav-link'>FAQ</a>
                  </Link>
                </li>
                <li className='nav-item px-2'>
                  <Link href='/sponsor-us/'>
                    <a className='nav-link'>Sponsor us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
