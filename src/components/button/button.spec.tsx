import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  const Child = () => <span />;

  it('should render its text', () => {
    const wrapper = shallow(<Button>Click Me!</Button>);
    expect(wrapper.text()).toBe('Click Me!');
  });

  it('should render its children', () => {
    const wrapper = shallow(<Button><Child /></Button>);
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should have the className from props', () => {
    const wrapper = shallow(<Button className="test-class" />);
    expect(wrapper.is('.test-class')).toBe(true);
  });

  it('should pass disabled from props', () => {
    const wrapper = shallow(<Button disabled />);
    expect(wrapper.prop('disabled')).toBe(true);
  });

  it('should have the className for confirm from props', () => {
    const wrapper = shallow(<Button confirm />);
    expect(wrapper.is('.hd-confirm')).toBe(true);
  });

  it('should have the className for primary from props', () => {
    const wrapper = shallow(<Button primary />);
    expect(wrapper.is('.hd-primary')).toBe(true);
  });

  it('should have the className for warning from props', () => {
    const wrapper = shallow(<Button warning />);
    expect(wrapper.is('.hd-warning')).toBe(true);
  });

  it('should be a submit button according to the type from props', () => {
    const wrapper = shallow(<Button submit />);
    expect(wrapper.prop('type')).toBe('submit');
  });

  it('should handle onClick with click from props', () => {
    const click = jest.fn();
    const wrapper = shallow(<Button click={click} />);
    wrapper.simulate('click');
    expect(click).toHaveBeenCalled();
  });
});
