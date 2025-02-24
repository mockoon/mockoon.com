import React, { Fragment, FunctionComponent } from 'react';

/**
 * Image must be 64x64
 *
 * @param props
 * @returns
 */
const Testimonial: FunctionComponent<{
  imgSrc: string;
  name: string;
  small?: boolean;
  children: React.ReactNode;
}> = function (props) {
  return (
    <Fragment>
      <div
        className='card card-border shadow-light-lg my-3'
        style={{ borderTopColor: '#1DA1F2' }}
      >
        <div className={`card-body ${props.small ? 'p-3' : ''} my-auto`}>
          <p
            className={`mb-0 text-gray-700 text-left ${
              props.small ? 'fs-5' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: props.children.toString() }}
          ></p>
        </div>

        <div
          className={`card-meta justify-content-center ${
            props.small ? 'pb-3 px-3' : ''
          }`}
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
              width={64}
              height={64}
            />
          </div>

          <p className='h6 text-uppercase text-gray-700 mb-0'>{props.name}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
