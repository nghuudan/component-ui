import React from 'react';
import { shallow } from 'enzyme';
import Textbox, { TextboxType } from './textbox';

describe('Textbox', () => {
  const wrapper = shallow(
    <Textbox
      className="test-class"
      name="testName"
      placeholder="Test Placeholder"
    />,
  );

  it('should have the className from props', () => {
    expect(wrapper.find('.test-class')).toHaveLength(1);
  });

  it('should have the input name from props', () => {
    expect(wrapper.find('input').prop('name')).toBe('testName');
  });

  it('should default the input type to text', () => {
    expect(wrapper.find('input').prop('type')).toBe('text');
  });

  it('should have the input type from props', () => {
    wrapper.setProps({ type: TextboxType.EMAIL });
    expect(wrapper.find('input').prop('type')).toBe(TextboxType.EMAIL);
  });

  it('should not have label text when not in props', () => {
    expect(wrapper.find('.hd-textbox-label-text')).toHaveLength(0);
  });

  it('should have the label text from props', () => {
    wrapper.setProps({ labelText: 'Test Label' });
    expect(wrapper.find('.hd-textbox-label-text').text()).toBe('Test Label');
  });

  it('should have the placeholder text from props', () => {
    expect(wrapper.find('input').prop('placeholder')).toBe('Test Placeholder');
  });

  it('should disable input according to disabled from props', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('should have the disabled className when disabled', () => {
    expect(wrapper.find('.hd-disabled')).toHaveLength(1);
  });
});
