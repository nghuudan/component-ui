import React, { StatelessComponent } from 'react';
import classNames from 'classnames';

export interface ToggleProps {
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  name: string;
  value?: string;
}

const Toggle: StatelessComponent<ToggleProps> = ({
  change,
  checked,
  className,
  disabled,
  name,
  value,
}) => (
  <label className={
    classNames({
      'hd-toggle': true,
      [`${className}`]: Boolean(className),
      'hd-disabled': disabled,
    })
  }
  >
    <input
      checked={checked}
      className="hd-toggle-input"
      disabled={disabled}
      name={name}
      onChange={change}
      type="checkbox"
      value={value}
    />
    <span className="hd-toggle-switch">
      <span className="hd-toggle-slider" />
    </span>
  </label>
);

Toggle.defaultProps = {
  change: undefined,
  checked: false,
  className: '',
  disabled: false,
  name: '',
  value: '',
};

export default Toggle;
