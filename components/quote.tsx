import { FunctionComponent, ReactNode } from 'react';

const Quote: FunctionComponent<{ content: ReactNode }> = function (props) {
  return <div className='alert quote'>{props.content}</div>;
};

export default Quote;
