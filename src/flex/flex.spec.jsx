import React from 'react';
import { shallow } from 'enzyme';
import Flex from './flex';

describe('Flex', () => {
  const Child = () => <div />;

  const wrapper = shallow((
    <Flex
      basis={32}
      className="test-class"
      grow
      layout="column"
      overflow
      shrink
      hidden
    >
      <Child />
    </Flex>
  ));

  it('should render its children', () => {
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should have the className from props', () => {
    expect(wrapper.find('.test-class')).toHaveLength(1);
  });

  it('should have the className according to layout from props', () => {
    expect(wrapper.find('.hd-column')).toHaveLength(1);
  });

  it('should have the className according to the basis from props', () => {
    expect(wrapper.find('.hd-basis-32')).toHaveLength(1);
  });

  it('should have the className according to grow from props', () => {
    expect(wrapper.find('.hd-grow')).toHaveLength(1);
  });

  it('should have the className according to overflow from props', () => {
    expect(wrapper.find('.hd-overflow')).toHaveLength(1);
  });

  it('should have the className according to shrink from props', () => {
    expect(wrapper.find('.hd-shrink')).toHaveLength(1);
  });

  it('should have the className according to hidden from props', () => {
    expect(wrapper.find('.hd-hidden')).toHaveLength(1);
  });
});
