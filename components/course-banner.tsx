import { format, isFuture, min } from 'date-fns';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { courseDates } from '../constants/courses';

const CourseBanner: FunctionComponent<{
  closeBanner?: () => void;
  textAlign?: 'left' | 'center' | 'right';
}> = function ({ closeBanner, textAlign = 'center' }) {
  const dates = courseDates.filter((date) => isFuture(date));
  const nextCourse = min(dates);

  return (
    dates.length > 0 && (
      <div
        className={`bg-info-subtle text-info text-${textAlign} rounded-0 d-flex align-items-center mb-0 py-2 px-3 fw-bold`}
      >
        <p className='mb-0 flex-grow-1'>
          🎓 Join our next{' '}
          <Link href={'/training/'}>live training session</Link> on{' '}
          <strong>{format(nextCourse, 'PPPP')}</strong> to master Mockoon and
          elevate your API mocking skills!
        </p>
        {closeBanner && (
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={() => {
              closeBanner();
            }}
          ></button>
        )}
      </div>
    )
  );
};

export default CourseBanner;
