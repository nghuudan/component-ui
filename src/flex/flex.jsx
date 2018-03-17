import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Flex = ({
  align, basis, children,
  className, grow, hidden,
  hideXs, hideSm, hideMd,
  hideLg, hideXl, layout,
  overflow, shrink,
}) => (
  <div className={
    classNames({
      'hd-flex': true,
      [`hd-align-${align}`]: align,
      [`hd-basis-${basis}`]: basis,
      [className]: className,
      'hd-column': layout === 'column',
      'hd-row': layout === 'row',
      'hd-grow': grow,
      'hd-hidden': hidden,
      'hd-hide-xs': hideXs,
      'hd-hide-sm': hideSm,
      'hd-hide-md': hideMd,
      'hd-hide-lg': hideLg,
      'hd-hide-xl': hideXl,
      'hd-overflow': overflow,
      'hd-shrink': shrink,
    })
  }
  >
    {children}
  </div>
);

Flex.defaultProps = {
  align: '',
  basis: 0,
  children: null,
  className: '',
  grow: false,
  hidden: false,
  hideXs: false,
  hideSm: false,
  hideMd: false,
  hideLg: false,
  hideXl: false,
  layout: 'row',
  overflow: false,
  shrink: false,
};

Flex.propTypes = {
  align: PropTypes.string,
  basis: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  grow: PropTypes.bool,
  hidden: PropTypes.bool,
  hideXs: PropTypes.bool,
  hideSm: PropTypes.bool,
  hideMd: PropTypes.bool,
  hideLg: PropTypes.bool,
  hideXl: PropTypes.bool,
  layout: PropTypes.oneOf(['column', 'row']),
  overflow: PropTypes.bool,
  shrink: PropTypes.bool,
};

export default Flex;
