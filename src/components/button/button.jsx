import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children, className, click, confirm,
  disabled, primary, submit, warning,
}) => (
  <button
    className={
      classNames({
        'hd-button': true,
        [className]: className,
        'hd-confirm': confirm,
        'hd-disabled': disabled,
        'hd-primary': primary,
        'hd-warning': warning,
      })
    }
    disabled={disabled}
    onClick={click}
    type={submit ? 'submit' : 'button'}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: null,
  className: '',
  click: null,
  confirm: false,
  disabled: false,
  primary: false,
  submit: false,
  warning: false,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  click: PropTypes.func,
  confirm: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  submit: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;
