import { FunctionComponent } from 'react';

const Quote: FunctionComponent<{
  colorScheme: 'secondary' | 'warning';
  children: React.ReactNode;
}> = function ({ colorScheme, children }) {
  return (
    <div
      className={`quote bg-${colorScheme}-subtle border-start border-${colorScheme} border-4 p-4 my-4`}
      role='alert'
    >
      {children}
    </div>
  );
};

export default Quote;
