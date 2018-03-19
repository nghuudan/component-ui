import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({
  children, className,
  container, hidden, hide,
  hideXs, hideSm, hideMd,
  hideLg, hideXl, show,
  xs, sm, md, lg, xl,
}) => (
  <div className={
    classNames({
      'hd-grid': true,
      [className]: className,
      'hd-container': container,
      'hd-hidden': hidden,
      [`hd-hide-${hide}`]: hide,
      'hd-hide-xs': hideXs,
      'hd-hide-sm': hideSm,
      'hd-hide-md': hideMd,
      'hd-hide-lg': hideLg,
      'hd-hide-xl': hideXl,
      'hd-show': show,
      [`hd-show-${show}`]: show,
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
  hidden: false,
  hide: '',
  hideXs: false,
  hideSm: false,
  hideMd: false,
  hideLg: false,
  hideXl: false,
  show: '',
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
  hidden: PropTypes.bool,
  hide: PropTypes.string,
  hideXs: PropTypes.bool,
  hideSm: PropTypes.bool,
  hideMd: PropTypes.bool,
  hideLg: PropTypes.bool,
  hideXl: PropTypes.bool,
  show: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
