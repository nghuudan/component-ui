import React, { StatelessComponent } from 'react';

export interface CheckboxProps {
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
  name: string;
  value?: string;
}

const Checkbox: StatelessComponent<CheckboxProps> = ({
  change,
  className,
  name,
  value,
}) => (
  <label className={`hd-checkbox ${className}`}>
    <input
      className="hd-checkbox-input"
      name={name}
      onChange={change}
      type="checkbox"
      value={value}
    />
    <span className="hd-checkbox-switch">
      <span className="hd-checkbox-toggle" />
    </span>
  </label>
);

Checkbox.defaultProps = {
  change: undefined,
  className: '',
  name: '',
  value: 'yes',
};

export default Checkbox;
