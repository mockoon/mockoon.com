import { FunctionComponent } from 'react';

const Spinner: FunctionComponent<{ small?: boolean }> = function ({ small }) {
  return (
    <div className='text-center align-self-center'>
      <div
        className={`spinner-border ${small ? 'spinner-border-sm' : ''} text-primary`}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
