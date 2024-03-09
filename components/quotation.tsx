import { FunctionComponent } from 'react';
import { QuotationData } from '../models/common.model';

/**
 * Image must be 128x128
 *
 * @param param0
 * @returns
 */
const Quotation: FunctionComponent<{ quotation: QuotationData }> = function ({
  quotation
}) {
  return (
    <div className='mx-md-8 my-8'>
      <p className='quotation p-5 mb-0 text-gray-700 lead text-center'>
        {quotation.citation}
      </p>
      <div className='d-flex align-items-center'>
        {quotation.pictureUrl && (
          <img
            className='avatar avatar-xl img-thumbnail rounded-circle'
            src={`/images/${quotation.pictureUrl}`}
            alt={quotation.authorRole}
            width={128}
            height={128}
          />
        )}
        <div className='ms-5'>
          {quotation.author && (
            <div className='fw-bold fs-sm'>{quotation.author}</div>
          )}
          {quotation.authorRole && (
            <div className='text-gray-700 fs-sm'>{quotation.authorRole}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotation;
