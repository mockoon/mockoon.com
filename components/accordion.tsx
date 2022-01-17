import { Fragment, FunctionComponent, useState } from 'react';
import { AccordionData } from '../models/common.model';

const Accordion: FunctionComponent<{ data: AccordionData }> = function (props) {
  const [accordionState, setAccordionState] = useState({});

  return (
    <Fragment>
      {props.data.map((dataGroup, dataGroupIndex) => {
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
                  {dataItem.question}
                </span>

                <div className='ms-auto'></div>
              </div>

              <div
                className={`accordion-collapse ${
                  accordionItemState ? '' : 'collapse'
                }`}
                id='helpOne'
                aria-labelledby={`accordionContent${dataGroupIndex}${dataItemIndex}`}
                data-bs-parent={`#accordion${dataGroupIndex}${dataItemIndex}`}
              >
                <div
                  className='accordion-body text-gray-700'
                  dangerouslySetInnerHTML={{ __html: dataItem.answer }}
                ></div>
              </div>
            </div>
          );
        });

        return [
          <div
            className='accordion shadow-light-lg mb-5 mb-md-6'
            key={`dataGroup${dataGroupIndex}`}
          >
            {header}
            {items}
          </div>
        ];
      })}
    </Fragment>
  );
};

export default Accordion;
