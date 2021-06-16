import { FunctionComponent } from 'react';

const Share: FunctionComponent<{
  title: string;
  url: string;
  text: string;
}> = function (props) {
  const url = encodeURIComponent(props.url);
  const text = encodeURIComponent(props.text);

  return (
    <div>
      <span className='h6 text-uppercase text-muted d-none d-md-inline me-4'>
        Share:
      </span>

      <ul className='d-inline list-unstyled list-inline list-social'>
        <li className='list-inline-item list-social-item me-3'>
          <a
            href={`https://twitter.com/intent/tweet/?text=${text}&url=${url}`}
            target='_blank'
            rel='noopener'
            aria-label=''
            className='text-decoration-none'
          >
            <img
              src='/images/icons/social/twitter.svg'
              className='list-social-icon'
              alt='Share on Twitter'
            />
          </a>
        </li>
        <li className='list-inline-item list-social-item me-3'>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target='_blank'
            rel='noopener'
            aria-label=''
            className='text-decoration-none'
          >
            <img
              src='/images/icons/social/linkedin.svg'
              className='list-social-icon'
              alt='Share on Linkedin'
            />
          </a>
        </li>
        <li className='list-inline-item list-social-item me-3'>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${url}`}
            target='_blank'
            rel='noopener'
            aria-label=''
            className='text-decoration-none'
          >
            <img
              src='/images/icons/social/facebook.svg'
              className='list-social-icon'
              alt='Share on Facebook'
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;
