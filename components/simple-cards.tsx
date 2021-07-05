import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { ItemCard } from '../models/common.model';

const SimpleCards: FunctionComponent<{
  items: ItemCard;
}> = function (props) {
  const numberOfColumns = 3;
  const featuresContent = [];
  for (let rowIndex = 0; rowIndex < numberOfColumns; rowIndex++) {
    featuresContent.push(
      <div key={'featureRow' + rowIndex} className='col-lg-4 col-12 py-lg-3'>
        {props.items
          .filter((item, itemIndex) => {
            return itemIndex % 3 === rowIndex;
          })
          .map((item, itemIndex) => {
            return (
              <div
                key={'feature' + itemIndex}
                className={`card card-border shadow-light-lg my-lg-2 my-1`}
              >
                <div className='card-body text-center simple-card-min d-flex align-content-center flex-wrap flex-column justify-content-center '>
                  <h4 className=''>{item.title}</h4>
                  <p
                    className='text-muted'
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  {(item.link || (item.disabledLink && item.linkText)) && (
                    <div
                      className={`${item.disabledLink ? 'text-center' : ''}`}
                    >
                      <span>
                        {!item.disabledLink && (
                          <Link href={item.link}>
                            <a className='btn btn-primary-soft btn-xs mb-0 mt-3'>
                              {item.linkText || 'Documentation'} →
                            </a>
                          </Link>
                        )}
                        {item.disabledLink && (
                          <Fragment>{item.linkText}</Fragment>
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return <Fragment>{featuresContent}</Fragment>;
};

export default SimpleCards;
