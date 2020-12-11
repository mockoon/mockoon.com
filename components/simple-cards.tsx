import { Fragment, FunctionComponent } from 'react';
import { ItemCard } from '../models/common.model';

const SimpleCards: FunctionComponent<{
  items: ItemCard;
}> = function (props) {
  const numberOfRows = Math.ceil(props.items.length / 3);
  const featuresContent = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    featuresContent.push(
      <div key={'featureRow' + rowIndex} className='columns'>
        {props.items
          .slice(rowIndex * 3, rowIndex * 3 + 3)
          .map((item, itemIndex) => {
            return (
              <div className='column is-4' key={'feature' + itemIndex}>
                <div className='card simple-card'>
                  <div className='card-content'>
                    <p className='title is-size-5'>{item.title}</p>
                    <p
                      className='mb-2'
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    {(item.link || (item.disabledLink && item.linkText)) && (
                      <p className={`card-link ${item.disabledLink ? 'has-text-centered has-text-weight-bold': ''}`}>
                        <span>
                          {!item.disabledLink && (
                            <a href={item.link}>
                              {item.linkText || 'Documentation'} →
                            </a>
                          )}
                          {item.disabledLink && (
                            <Fragment>{item.linkText}</Fragment>
                          )}
                        </span>
                      </p>
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
