import { FunctionComponent } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const InfoTooltip: FunctionComponent<{ text: string; className?: string }> =
  function ({ text, className }) {
    return (
      <OverlayTrigger placement='top' overlay={<Tooltip>{text}</Tooltip>}>
        <i className={`icon-info_outline text-gray-700 ${className}`}></i>
      </OverlayTrigger>
    );
  };

export default InfoTooltip;
