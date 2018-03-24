import React, { ReactNode } from 'react';

export interface EachProps {
  component(): JSX.Element;
  items: object[];
}

const Each = ({ component, items }: EachProps): ReactNode => {
  const EachComponent = component;
  return (
    Array.isArray(items) ? items.map((item, index) => (
      <EachComponent key={new Date(index).getTime()} {...item} />
    )) : null
  );
};

export default Each;
