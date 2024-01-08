import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { CardData } from '../models/common.model';
import ConditionalWrapper from './conditional-wrapper';

const Card: FunctionComponent<{
  data: CardData;
  vertical?: boolean;
  cover?: boolean;
  border?: boolean;
  borderColor?: string;
  // synchronize colors between border and link
  synchronizedColors?: boolean;
}> = function (props) {
  let cover = props.cover !== undefined ? props.cover : true;
  let border = props.border !== undefined ? props.border : false;
  let synchronizedColors =
    props.synchronizedColors !== undefined ? props.synchronizedColors : false;
  let padding = props.data.imagePaddingClasses
    ? props.data.imagePaddingClasses
    : 'px-8 py-4';

  return (
    <Fragment>
      <div
        className={`card ${border ? 'card-border' : ''} d-flex ${
          props.vertical ? 'flex-column' : 'flex-column flex-lg-row'
        } flex-fill shadow-light-lg text-center h-100`}
        style={{ borderTopColor: props.borderColor }}
      >
        {props.data.imageSrc && (
          <div
            className={`${props.vertical ? '' : 'w-100 w-lg-50'} ${
              cover ? 'bg-cover' : padding
            } ${props.vertical ? 'card-img-top' : 'card-img-start-lg'}`}
            style={{
              backgroundImage: `url('${props.data.imageSrc}')`,
              height: 'auto',
              minHeight: '200px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: cover ? 'cover' : 'contain',
              backgroundOrigin: 'content-box'
            }}
          ></div>
        )}

        <div
          className={`${
            props.vertical || !props.data.imageSrc ? '' : 'w-100 w-lg-50'
          } card-body flex-grow-1 d-flex flex-column align-items-center py-5`}
        >
          {props.data.topTag && (
            <span
              className={`badge badge-float badge-float-outside ${
                props.data.topTagClasses
                  ? props.data.topTagClasses
                  : 'text-bg-primary-subtle'
              }`}
            >
              {props.data.topTag}
            </span>
          )}

          <h3 className='pb-3 h4 col-10 fw-medium'>{props.data.title}</h3>

          {props.data.description && (
            <p
              className='col-10 text-gray-700'
              dangerouslySetInnerHTML={{ __html: props.data.description }}
            ></p>
          )}
          {props.data.links?.length && (
            <ConditionalWrapper
              condition={props.data.links?.length > 1}
              wrapper={(children) => (
                <div className='btn-group mt-auto'>{children}</div>
              )}
            >
              {props.data.links.map((link, linkIndex) => {
                return !link.src.includes('mockoon://') &&
                  !link.src.includes('clipboardcopy://') ? (
                  <Link
                    key={`link${linkIndex}`}
                    href={link.src}
                    className={`btn-xs btn btn-primary-subtle d-flex align-items-center ${
                      props.data.links?.length > 1 ? '' : 'mt-auto'
                    }`}
                    style={{
                      color: synchronizedColors ? props.borderColor : undefined
                    }}
                    target={link.blank ? '_blank' : undefined}
                  >
                    {link.icon && !link.iconAfter && (
                      <span className='icon me-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                    {link.text}
                    {link.icon && link.iconAfter && (
                      <span className='icon ms-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    key={`link${linkIndex}`}
                    className={`btn-xs btn btn-primary-subtle d-flex align-items-center ${
                      props.data.links?.length > 1 ? '' : 'mt-auto'
                    }`}
                    href={link.src}
                    target={link.blank ? '_blank' : undefined}
                  >
                    {link.icon && !link.iconAfter && (
                      <span className='icon me-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                    {link.text}
                    {link.icon && link.iconAfter && (
                      <span className='icon ms-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                  </a>
                );
              })}
            </ConditionalWrapper>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
