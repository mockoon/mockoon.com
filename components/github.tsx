import { FunctionComponent } from 'react';
import GitHubButton from 'react-github-btn';

const GitHub: FunctionComponent = function () {
  return (
    <div className='mt-2'>
      <GitHubButton
        href='https://github.com/mockoon/mockoon'
        data-color-scheme='no-preference: light; light: light; dark: light;'
        data-size='large'
        data-show-count='true'
        aria-label='Star mockoon/mockoon on GitHub'
      >
        Star
      </GitHubButton>
    </div>
  );
};

export default GitHub;
