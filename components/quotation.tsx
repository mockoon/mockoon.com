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
    <div className='quotation p-6 m-8'>
      <p className='text-gray-700 lead'>{quotation.citation}</p>
      <div className='d-flex mt-5 align-items-center'>
        <img
          className='img-thumbnail avatar-xl avatar-img rounded-circle'
          src={`/images/${quotation.pictureUrl}`}
          alt={quotation.authorRole}
          width={128}
          height={128}
        />
        <div className='ms-5'>
          <div className='fw-bold fs-sm'>{quotation.author}</div>
          <div className='text-muted fs-sm'>{quotation.authorRole}</div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
