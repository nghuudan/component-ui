import React from 'react';
import { shallow } from 'enzyme';
import Grid from './grid';

describe('Grid', () => {
  const Child = () => <div />;

  const wrapper = shallow((
    <Grid
      className="test-class"
      xs={5}
      sm={6}
      md={7}
      lg={8}
      xl={9}
    >
      <Child />
    </Grid>
  ));

  it('should render its children', () => {
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should have the className from props', () => {
    expect(wrapper.find('.test-class')).toHaveLength(1);
  });

  it('should have the className according to xs from props', () => {
    expect(wrapper.find('.hd-xs-5')).toHaveLength(1);
  });

  it('should have the className according to sm from props', () => {
    expect(wrapper.find('.hd-sm-6')).toHaveLength(1);
  });

  it('should have the className according to md from props', () => {
    expect(wrapper.find('.hd-md-7')).toHaveLength(1);
  });

  it('should have the className according to lg from props', () => {
    expect(wrapper.find('.hd-lg-8')).toHaveLength(1);
  });

  it('should have the className according to xl from props', () => {
    expect(wrapper.find('.hd-xl-9')).toHaveLength(1);
  });
});
