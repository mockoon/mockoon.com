import { Fragment, FunctionComponent, ReactElement } from 'react';

const ConditionalWrapper: FunctionComponent<{
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: JSX.Element | JSX.Element[];
}> = function ({ condition, wrapper, children }) {
  return condition ? (
    wrapper(<Fragment>{children}</Fragment>)
  ) : (
    <Fragment> {children}</Fragment>
  );
};

export default ConditionalWrapper;
