import { FunctionComponent } from 'react';

const Breadcrumb: FunctionComponent<{
  parentTitle: string;
  parentLink: string;
  currentTitle: string;
}> = function ({ parentTitle, parentLink, currentTitle }) {
  return (
    <nav className='bg-gradient-light-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <ol className='breadcrumb breadcrumb-scroll'>
              <li className='breadcrumb-item'>
                <a href={parentLink} className='text-gray-700'>
                  {parentTitle}
                </a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                {currentTitle}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
