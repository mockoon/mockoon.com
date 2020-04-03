import { FunctionComponent } from 'react';

const GitHub: FunctionComponent = function () {
  return (
    <a
      className='github-button'
      href='https://github.com/mockoon/mockoon'
      data-size='large'
      data-show-count='true'
      aria-label='Star Mockoon on GitHub'
    >
      Star
    </a>
  );
};

export default GitHub;
