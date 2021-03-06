import React from 'react';
import { shallow } from 'enzyme';
import Flex from './flex';
import { Align, Layout, Media } from '../enums';

describe('Flex', () => {
  const Child = () => <div />;

  const wrapper = shallow((
    <Flex
      align={Align.CENTER}
      basis={32}
      className="test-class"
      grow
      layout={Layout.COLUMN}
      overflow
      shrink
      hidden
      hide={Media.GT_MEDIUM}
      hideXs
      hideSm
      hideMd
      hideLg
      hideXl
      show={Media.LT_SMALL}
      wrap
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

  it('should have the className according to align from props', () => {
    expect(wrapper.find('.hd-align-center')).toHaveLength(1);
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

  it('should have the className according to hide from props', () => {
    expect(wrapper.find('.hd-hide-gt-md')).toHaveLength(1);
  });

  it('should have the className according to hideXs from props', () => {
    expect(wrapper.find('.hd-hide-xs')).toHaveLength(1);
  });

  it('should have the className according to hideSm from props', () => {
    expect(wrapper.find('.hd-hide-sm')).toHaveLength(1);
  });

  it('should have the className according to hideMd from props', () => {
    expect(wrapper.find('.hd-hide-md')).toHaveLength(1);
  });

  it('should have the className according to hideLg from props', () => {
    expect(wrapper.find('.hd-hide-lg')).toHaveLength(1);
  });

  it('should have the className according to hideXl from props', () => {
    expect(wrapper.find('.hd-hide-xl')).toHaveLength(1);
  });

  it('should have the base className according to show from props', () => {
    expect(wrapper.find('.hd-show')).toHaveLength(1);
  });

  it('should have the className according to show from props', () => {
    expect(wrapper.find('.hd-show-lt-sm')).toHaveLength(1);
  });

  it('should have the className according to wrap from props', () => {
    expect(wrapper.find('.hd-wrap')).toHaveLength(1);
  });
});
