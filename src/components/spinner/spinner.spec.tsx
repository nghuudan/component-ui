import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './spinner';

describe('Spinner', () => {
  const wrapper = shallow(<Spinner className="test-class" overlay />);

  it('should be a div', () => {
    expect(wrapper.is('div')).toBe(true);
  });

  it('should have the className from props', () => {
    expect(wrapper.find('.test-class')).toHaveLength(1);
  });

  it('should have the className according to overlay from props', () => {
    expect(wrapper.find('.hd-spinner-overlay')).toHaveLength(1);
  });
});
