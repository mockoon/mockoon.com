import { FunctionComponent } from 'react';
import Spinner from './spinner';

const LoadingPage: FunctionComponent = function () {
  return (
    <section className='py-15 border-top bg-gradient-light-white'>
      <Spinner />
    </section>
  );
};

export default LoadingPage;
