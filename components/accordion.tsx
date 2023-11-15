import { Fragment, FunctionComponent, useState } from 'react';
import { AccordionData } from '../models/common.model';

const Accordion: FunctionComponent<{
  data: AccordionData;
  openFirst?: boolean;
  counterSuffix?: { singular: string; plural: string };
}> = function ({ data, openFirst, counterSuffix }) {
  const [accordionState, setAccordionState] = useState(
    openFirst
      ? {
          '0-0': true
        }
      : {}
  );

  return (
    <Fragment>
      {data.map((dataGroup, dataGroupIndex) => {
        const header = (
          <div
            className='accordion-item'
            key={`dataGroupHeader${dataGroupIndex}`}
          >
            <div className='accordion-button' role='button'>
              <div className='me-auto'>
                <h4 className='fw-bold mb-0'>{dataGroup.title}</h4>
              </div>
            </div>
          </div>
        );

        const items = dataGroup.items.map((dataItem, dataItemIndex) => {
          const accordionItemState =
            accordionState[`${dataGroupIndex}-${dataItemIndex}`];

          return (
            <div
              className='accordion-item'
              key={`dataGroup${dataGroupIndex}dataItem${dataItemIndex}`}
            >
              <div
                className={`accordion-button ${
                  accordionItemState ? '' : 'collapsed'
                }`}
                role='button'
                data-bs-toggle='collapse'
                data-bs-target={`#accordion${dataGroupIndex}${dataItemIndex}`}
                aria-expanded={accordionItemState ? true : false}
                aria-controls={`accordion${dataGroupIndex}${dataItemIndex}`}
                onClick={() =>
                  setAccordionState({
                    ...accordionState,
                    [`${dataGroupIndex}-${dataItemIndex}`]: !accordionItemState
                  })
                }
              >
                <span
                  className='me-4'
                  id={`accordionContent${dataGroupIndex}${dataItemIndex}`}
                >
                  {dataItem.title}
                </span>

                <div className='ms-auto'>
                  {Array.isArray(dataItem.text) && (
                    <span className='badge text-bg-gray-200 rounded-pill'>
                      {dataItem.text.length}{' '}
                      {dataItem.text.length > 1
                        ? counterSuffix.plural
                        : counterSuffix.singular}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`accordion-collapse ${
                  accordionItemState ? '' : 'collapse'
                }`}
                id='helpOne'
                aria-labelledby={`accordionContent${dataGroupIndex}${dataItemIndex}`}
                data-bs-parent={`#accordion${dataGroupIndex}${dataItemIndex}`}
              >
                {Array.isArray(dataItem.text) && (
                  <ol className='accordion-body text-gray-700 list-group-numbered'>
                    {dataItem.text.map((textItem, textItemIndex) => {
                      return (
                        <li
                          key={`dataGroup${dataGroupIndex}dataItem${dataItemIndex}textItem${textItemIndex}`}
                          className='list-group-item ps-4 py-4'
                          dangerouslySetInnerHTML={{ __html: textItem }}
                        ></li>
                      );
                    })}
                  </ol>
                )}
                {!Array.isArray(dataItem.text) && (
                  <div
                    className='accordion-body text-gray-700'
                    dangerouslySetInnerHTML={{ __html: dataItem.text }}
                  ></div>
                )}
              </div>
            </div>
          );
        });

        return [
          <div
            className='accordion shadow-light-lg mb-5 mb-md-6'
            key={`dataGroup${dataGroupIndex}`}
          >
            {dataGroup.title ? header : undefined}
            {items}
          </div>
        ];
      })}
    </Fragment>
  );
};

export default Accordion;
