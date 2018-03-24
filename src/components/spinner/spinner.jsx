import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = ({ className, overlay }) => (
  <div className={
    classNames({
      'hd-spinner': true,
      [className]: className,
      'hd-spinner-overlay': overlay,
    })
  }
  >
    <div className="hd-spinner-disc">
      <div className="hd-spinner-disc-inner" />
    </div>
  </div>
);

Spinner.defaultProps = {
  className: '',
  overlay: false,
};

Spinner.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.bool,
};

export default Spinner;
