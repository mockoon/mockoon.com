import { FunctionComponent } from 'react';

const Download: FunctionComponent = function () {
  return (
    <section className='section is-light'>
      <div className='container has-text-centered has-text-weight-semibold'>
        <p className='title is-6'>
          Get Mockoon latest version and start mocking!
        </p>
        <p>
          <a className='button is-primary' href='/#download'>
            <span>Download</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Download;
