import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({
  children, className,
  container, xs, sm,
  md, lg, xl,
}) => (
  <div className={
    classNames({
      'hd-grid': true,
      [className]: className,
      'hd-container': container,
      [`hd-xs-${xs}`]: xs,
      [`hd-sm-${sm}`]: sm,
      [`hd-md-${md}`]: md,
      [`hd-lg-${lg}`]: lg,
      [`hd-xl-${xl}`]: xl,
    })
  }
  >
    {children}
  </div>
);

Grid.defaultProps = {
  children: null,
  className: '',
  container: false,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
