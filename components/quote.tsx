import { FunctionComponent } from 'react';
import { QuoteData } from '../models/common.model';

const Quote: FunctionComponent<{ quote: QuoteData }> = function ({ quote }) {
  return (
    <div className='quote'>
      {quote.citation}
      <div className='quote-metadata'>
        <img className='quote-picture' src={`/images/${quote.pictureUrl}`} />
        <div className='quote-author'>
          <div>{quote.author}</div>
          <div>{quote.authorRole}</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
