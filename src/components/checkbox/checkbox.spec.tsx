import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './checkbox';

describe('Checkbox', () => {
  const wrapper = shallow(
    <Checkbox
      className="test-class"
      name="testName"
      value="testValue"
    />,
  );

  it('should be a label', () => {
    expect(wrapper.is('label')).toBe(true);
  });

  it('should have the className from props', () => {
    expect(wrapper.find('.test-class')).toHaveLength(1);
  });

  it('should have the name from props', () => {
    expect(wrapper.find('input').prop('name')).toBe('testName');
  });

  it('should have the type of checkbox', () => {
    expect(wrapper.find('input').prop('type')).toBe('checkbox');
  });

  it('should have the value from props', () => {
    expect(wrapper.find('input').prop('value')).toBe('testValue');
  });
});
