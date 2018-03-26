import React, { StatelessComponent } from 'react';

export interface EachProps {
  component: StatelessComponent<any>;
  items?: object[];
}

const Each: StatelessComponent<EachProps> = ({ component, items }) => {
  const EachComponent = component;
  const now = Date.now();
  return (
    <>
      {
        Array.isArray(items) ? items.map((item, index) => (
          <EachComponent key={`${now}_${index}`} {...item} />
        )) : null
      }
    </>
  );
};

export default Each;
