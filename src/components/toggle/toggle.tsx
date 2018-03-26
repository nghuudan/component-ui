import React, { StatelessComponent } from 'react';

export interface ToggleProps {
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
  name: string;
  value?: string;
}

const Toggle: StatelessComponent<ToggleProps> = ({
  change,
  className,
  name,
  value,
}) => (
  <label className={`hd-toggle ${className}`}>
    <input
      className="hd-toggle-input"
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
  className: '',
  name: '',
  value: '',
};

export default Toggle;
