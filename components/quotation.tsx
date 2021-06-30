import { FunctionComponent } from 'react';
import { QuotationData } from '../models/common.model';

const Quotation: FunctionComponent<{ quotation: QuotationData }> = function ({
  quotation
}) {
  return (
    <div className='quotation'>
      {quotation.citation}
      <div className='quotation-metadata'>
        <img
          className='quotation-picture'
          src={`/images/${quotation.pictureUrl}`}
        />
        <div className='quotation-author'>
          <div>{quotation.author}</div>
          <div>{quotation.authorRole}</div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
