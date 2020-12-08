import { FunctionComponent, ReactNode } from 'react';

const Blockquote: FunctionComponent<{ content: ReactNode }> = function (props) {
  return (
    <div className='message is-info'>
      <div className='message-body'>{props.content}</div>
    </div>
  );
};

export default Blockquote;
