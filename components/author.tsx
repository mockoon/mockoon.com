import { FunctionComponent } from 'react';
import { authors } from '../constants/authors';

const Author: FunctionComponent<{ author: keyof typeof authors }> = function ({
  author
}) {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='avatar avatar-lg'>
        <img
          className='avatar-img img-thumbnail rounded-circle mr-4'
          src={`/images/about/${author}.jpg`}
          alt={authors[author]}
          width={64}
          height={64}
        />
      </div>
      <div className='fs-sm ps-2'>
        Posted by <span className='fw-bold'>{authors[author]}</span>
      </div>
    </div>
  );
};

export default Author;
