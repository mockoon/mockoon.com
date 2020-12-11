import { FunctionComponent } from 'react';

const ContactBanner: FunctionComponent<{
  title?: string;
  ctaText?: string;
}> = function (props) {
  return (
    <div className='section is-light'>
      <div className='has-text-centered'>
        <div className='title is-size-4'>
          {props.title || 'Feedback? Questions? We are always here to help.'}
        </div>
        <a href='/contact/' className='button is-link is-light'>
          {props.ctaText || 'Contact us'}
        </a>
      </div>
    </div>
  );
};

export default ContactBanner;
