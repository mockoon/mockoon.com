import { Fragment, FunctionComponent } from 'react';

const Testimonial: FunctionComponent<{
  link: string;
  imgSrc: string;
  name: string;
  small?: boolean;
}> = function (props) {
  return (
    <Fragment>
      <div className='card shadow-light-lg my-3'>
        <a
          className={`card-body ${props.small ? 'p-3' : ''} my-auto`}
          href={props.link}
          rel='noopener'
          target='_blank'
        >
          <p
            className={`mb-0 text-muted text-left ${props.small ? 'fs-5' : ''}`}
            dangerouslySetInnerHTML={{ __html: props.children.toString() }}
          ></p>
        </a>

        <a
          className={`card-meta ${props.small ? 'pb-3 px-3' : ''}`}
          href={props.link}
          rel='noopener'
          target='_blank'
        >
          <hr
            className={`card-meta-divider ${props.small ? 'mb-3 px-3' : ''}`}
          />

          <div className='avatar me-2'>
            <img
              className='avatar-img rounded-circle'
              src={props.imgSrc}
              alt={props.name + ' profile picture'}
              loading='lazy'
            />
          </div>

          <p className='h6 text-uppercase text-muted mb-0'>{props.name}</p>
        </a>
      </div>
    </Fragment>
  );
};

export default Testimonial;
