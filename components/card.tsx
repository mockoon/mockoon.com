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

  return (
    <Fragment>
      <div
        className={`card ${border ? 'card-border' : ''} d-flex ${
          props.vertical ? 'flex-column' : 'flex-column flex-lg-row'
        } flex-fill shadow-light-lg mb-6 text-center`}
        style={{ borderTopColor: props.borderColor }}
      >
        {props.data.imageSrc && (
          <div
            className={`${props.vertical ? '' : 'w-100 w-lg-50'} ${
              cover ? 'bg-cover' : 'px-8 py-4'
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
          } flex-grow-1 text-gray-700 d-flex flex-column align-items-center py-5`}
        >
          <h3 className='pb-3 h4 col-10'>{props.data.title}</h3>
          {props.data.description && (
            <p
              className='col-10 text-muted'
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
                  <Link key={`link${linkIndex}`} href={link.src}>
                    <a
                      className={`btn-xs btn btn-primary-soft d-flex align-items-center ${
                        props.data.links?.length > 1 ? '' : 'mt-auto'
                      }`}
                      style={{
                        color: synchronizedColors
                          ? props.borderColor
                          : undefined
                      }}
                    >
                      {link.icon && (
                        <span className='icon me-2'>
                          <i className={link.icon}></i>
                        </span>
                      )}
                      {link.text}
                    </a>
                  </Link>
                ) : (
                  <a
                    key={`link${linkIndex}`}
                    className={`btn-xs btn btn-primary-soft d-flex align-items-center ${
                      props.data.links?.length > 1 ? '' : 'mt-auto'
                    }`}
                    href={link.src}
                  >
                    {link.icon && (
                      <span className='icon me-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                    {link.text}
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
