import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Flex = ({
  align, basis, children, className,
  grow, layout, overflow, shrink,
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
  layout: PropTypes.oneOf(['column', 'row']),
  overflow: PropTypes.bool,
  shrink: PropTypes.bool,
};

export default Flex;
