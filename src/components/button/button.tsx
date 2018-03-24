import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  children: ReactNode;
  className: string;
  click(event: React.MouseEvent<HTMLButtonElement>): void;
  confirm: boolean;
  disabled: boolean;
  primary: boolean;
  submit: boolean;
  warning: boolean;
}

const Button = ({
  children, className,
  click, confirm,
  disabled, primary,
  submit, warning,
}: ButtonProps): JSX.Element => (
  <button
    className={
      classNames({
        'hd-button': true,
        [className]: Boolean(className),
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

export default Button;
