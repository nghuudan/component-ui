import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './toggle';

describe('Toggle', () => {
  const wrapper = shallow(
    <Toggle
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

  it('should handle onChange with change from props', () => {
    const change = jest.fn();
    wrapper.setProps({ change });
    wrapper.find('input').simulate('change');
    expect(change).toHaveBeenCalled();
  });

  it('should pass to the input checked from props', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('should disable the toggle according to disabled from props', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('should have the className according to disabled from props', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.hd-disabled')).toHaveLength(1);
  });
});
