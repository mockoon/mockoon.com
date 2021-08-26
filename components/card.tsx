import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { CardData } from '../models/common.model';

const Card: FunctionComponent<{
  data: CardData;
  vertical?: boolean;
  cover?: boolean;
}> = function (props) {
  let cover = props.cover !== undefined ? props.cover : true;

  return (
    <Fragment>
      <div
        className={`card d-flex ${
          props.vertical ? 'flex-column' : 'flex-column flex-lg-row'
        } flex-fill shadow-light-lg mb-6 text-center`}
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
          <h3 className='pb-3 h4'>{props.data.title}</h3>
          <p
            className='col-10 text-muted'
            dangerouslySetInnerHTML={{ __html: props.data.description }}
          ></p>
          {props.data.links &&
            props.data.links.map((link, linkIndex) => {
              return (
                <Link key={props.data.title + linkIndex} href={link.src}>
                  <a className='btn-xs btn btn-primary-soft mt-auto'>
                    {link.icon && (
                      <span className='icon me-2'>
                        <i className={link.icon}></i>
                      </span>
                    )}
                    {link.text}
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
