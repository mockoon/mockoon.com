import { FunctionComponent } from 'react';
import { SponsoringMessageData } from '../models/common.model';

/**
 * Image must be 128x128
 *
 * @param param0
 * @returns
 */
const SponsoringMessage: FunctionComponent<{
  sponsoringMessage: SponsoringMessageData;
}> = function ({ sponsoringMessage }) {
  return (
    <div className='sponsoring-message'>
      <a href={sponsoringMessage.link} target='_blank' rel='noopener'>
        <div className='alert alert-light p-6 m-8 mt-10 position-relative shadow-light lift border'>
          <p className='m-0'>{sponsoringMessage.text}</p>
          <span className='position-absolute top-0 start-0 badge translate-middle rounded-pill text-bg-secondary'>
            Sponsored
          </span>
        </div>
      </a>
    </div>
  );
};

export default SponsoringMessage;
