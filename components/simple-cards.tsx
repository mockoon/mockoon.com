import Link from 'next/link';
import { Fragment, FunctionComponent } from 'react';
import { ItemCard } from '../models/common.model';

const SimpleCards: FunctionComponent<{
  items: ItemCard;
}> = function (props) {
  const numberOfRows = Math.ceil(props.items.length / 3);
  const featuresContent = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    featuresContent.push(
      <div key={'featureRow' + rowIndex} className='row'>
        {props.items
          .slice(rowIndex * 3, rowIndex * 3 + 3)
          .map((item, itemIndex) => {
            return (
              <div className='col-md-4 py-3' key={'feature' + itemIndex}>
                <div className='card card-border shadow-light-lg'>
                  <div className='card-body text-center simple-card-min d-flex align-content-end flex-wrap justify-content-center '>
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
                              <span className='btn btn-primary-soft btn-xs mb-0 mt-3 pb-0'>
                                {item.linkText || 'Documentation'} →
                              </span>
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
              </div>
            );
          })}
      </div>
    );
  }

  return <Fragment>{featuresContent}</Fragment>;
};

export default SimpleCards;
