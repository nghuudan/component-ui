import React from 'react';
import { shallow } from 'enzyme';
import When from './when';

describe('When', () => {
  const Child = () => <div />;

  it('should render its children when is has a truthy value', () => {
    const value = 'test';
    const wrapper = shallow(<When is={value === 'test'}><Child /></When>);
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should NOT render its children when is has a falsey value', () => {
    const value = null;
    const wrapper = shallow(<When is={value === 'test'}><Child /></When>);
    expect(wrapper.find(Child)).toHaveLength(0);
  });
});
