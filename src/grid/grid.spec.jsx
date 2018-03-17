import React from 'react';
import { shallow } from 'enzyme';
import Grid from './grid';

describe('Grid', () => {
  const Child = () => <div />;

  const wrapper = shallow((
    <Grid
      className="test-class"
      hidden
      hideXs
      hideSm
      hideMd
      hideLg
      hideXl
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

  it('should have the className according to hidden from props', () => {
    expect(wrapper.find('.hd-hidden')).toHaveLength(1);
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
});
