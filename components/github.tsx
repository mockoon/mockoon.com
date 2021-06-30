import { FunctionComponent } from 'react';
import GitHubButton from 'react-github-btn';

const GitHub: FunctionComponent = function () {
  return (
    <GitHubButton
      href='https://github.com/mockoon/mockoon'
      data-size='large'
      data-show-count='true'
      aria-label='Star Mockoon on GitHub'
    >
      Star
    </GitHubButton>
  );
};

export default GitHub;
