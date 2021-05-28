import { Fragment, FunctionComponent } from 'react';

const Testimonial: FunctionComponent<{
  link: string;
  imgSrc: string;
  name: string;
  username: string;
}> = function (props) {
  return (
    <Fragment>
      <div className='card shadow-light-lg'>
        <a
          className='card-body my-auto'
          href={props.link}
          rel='noopener'
          target='_blank'
        >
          <p className='mb-0 text-muted'>{props.children}</p>
        </a>

        <a
          className='card-meta'
          href={props.link}
          rel='noopener'
          target='_blank'
        >
          <hr className='card-meta-divider' />

          <div className='avatar avatar-sm me-2'>
            <img
              className='avatar-img rounded-circle'
              src={props.imgSrc}
              alt={props.username + ' profile picture'}
              loading='lazy'
            />
          </div>

          <p className='h6 text-uppercase text-muted me-2 mb-0'>{props.name}</p>
          <p className='h6 text-uppercase text-muted mb-0 ms-auto'>
            {props.username}
          </p>
        </a>
      </div>
    </Fragment>
  );
};

export default Testimonial;
