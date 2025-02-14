import { FunctionComponent, ReactElement } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CustomTooltip: FunctionComponent<{
  text: string;
  className?: string;
  children?: ReactElement;
}> = function ({ text, className, children }) {
  return (
    <OverlayTrigger placement='top' overlay={<Tooltip>{text}</Tooltip>}>
      {children || (
        <i className={`${className || 'icon-info_outline text-gray-700'}`}></i>
      )}
    </OverlayTrigger>
  );
};

export default CustomTooltip;
