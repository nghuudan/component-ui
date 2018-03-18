import React from 'react';

const Each = ({ items, component }) => {
  const Component = component;
  return (
    Array.isArray(items) ? items.map((item, index) => (
      <Component key={new Date(index).getTime()} {...item} />
    )) : null
  );
};

export default Each;
