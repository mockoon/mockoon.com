import { FunctionComponent, MouseEvent } from 'react';

const cliLinkHandler =
  (target: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const command = target.split('clipboardcopy://')[1];

    navigator.clipboard
      .writeText(command)
      .then(() => {
        (event.target as HTMLLinkElement).childNodes[1].textContent = 'Copied!';

        setTimeout(() => {
          (event.target as HTMLLinkElement).childNodes[1].textContent =
            'Copy CLI command';
        }, 5000);
      })
      .catch(() => {});
  };

export const MockSamplesOpenButton: FunctionComponent<{
  href?: string;
  disabled?: boolean;
  className?: string;
}> = function ({ href, disabled, className }) {
  return (
    <a
      className={`btn-xs btn btn-primary-subtle ${className} ${
        disabled ? 'disabled' : ''
      }`}
      style={{ backgroundColor: '#383944', color: 'white', opacity: 1 }}
      href={href}
    >
      <span className='icon me-2'>
        <i className='icon-open'></i>
      </span>
      Open in the application
    </a>
  );
};

export const MockSamplesCLIButton: FunctionComponent<{
  href?: string;
  disabled?: boolean;
  className?: string;
}> = function ({ href, disabled, className }) {
  return (
    <button
      type='button'
      className={`btn-xs btn btn-primary-subtle text-gray-200 ${className}`}
      style={{ backgroundColor: '#22232a', opacity: 1 }}
      onClick={href ? cliLinkHandler(href) : undefined}
      disabled={disabled}
    >
      <span className='icon me-2 text-success'>
        <i className='icon-copy'></i>
      </span>
      Copy the CLI command
    </button>
  );
};

export const MockSamplesDownloadButton: FunctionComponent<{
  href?: string;
  disabled?: boolean;
  className?: string;
}> = function ({ href, disabled, className }) {
  return (
    <a
      className={`btn-xs btn btn-secondary-subtle ${className} ${
        disabled ? 'disabled' : ''
      }`}
      href={href}
      style={{ opacity: 1 }}
    >
      <span className='icon me-2'>
        <i className='icon-download'></i>
      </span>
      Download mock API file
    </a>
  );
};

export const MockSamplesHelpButton: FunctionComponent<{
  onClick: () => void;
}> = function ({ onClick }) {
  return (
    <a
      href='#!'
      className='fw-bold fs-sm text-decoration-none'
      onClick={onClick}
    >
      📖 How to use?
    </a>
  );
};
