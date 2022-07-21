import { Fragment, FunctionComponent, ReactElement } from 'react';

const ConditionalWrapper: FunctionComponent<{
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: React.ReactNode;
}> = function ({ condition, wrapper, children }) {
  return condition ? (
    wrapper(<Fragment>{children}</Fragment>)
  ) : (
    <Fragment> {children}</Fragment>
  );
};

export default ConditionalWrapper;
