import { FunctionComponent, ReactNode } from 'react';

const Quote: FunctionComponent<{ content: ReactNode }> = function (props) {
  console.log(props.content);
  return <div className='alert quote'>{props.content[0].props.children}</div>;
};

export default Quote;
