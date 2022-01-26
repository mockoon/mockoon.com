import { FunctionComponent } from 'react';

const Share: FunctionComponent<{
  url: string;
  text: string;
  showLabel: boolean;
}> = function (props) {
  const url = encodeURIComponent(props.url);
  const text = encodeURIComponent(props.text);

  return (
    <div className='d-flex flex-column flex-lg-row p-2'>
      {props.showLabel && (
        <span className='align-self-center h6 text-center text-lg-start text-uppercase text-muted d-inline mb-0 me-lg-2'>
          Share:
        </span>
      )}

      <ul className='d-inline list-unstyled list-inline list-social align-self-center mb-0'>
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
              className=''
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
              className=''
              alt='Share on Linkedin'
            />
          </a>
        </li>
        <li className='list-inline-item list-social-item'>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${url}`}
            target='_blank'
            rel='noopener'
            aria-label=''
            className='text-decoration-none'
          >
            <img
              src='/images/icons/social/facebook.svg'
              className=''
              alt='Share on Facebook'
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;
