import React, { StatelessComponent } from 'react';
import classNames from 'classnames';

export enum TextboxType {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'tel',
  SEARCH = 'search',
  TEXT = 'text',
  URL = 'url',
}

export interface TextboxProps {
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
  defaultText?: string;
  disabled?: boolean;
  focus?(event: React.FocusEvent<HTMLInputElement>): void;
  labelText?: string;
  name: string;
  placeholder?: string;
  type?: TextboxType;
  value?: string;
}

const Textbox: StatelessComponent<TextboxProps> = ({
  change,
  className,
  defaultText,
  disabled,
  focus,
  labelText,
  name,
  placeholder,
  type,
  value,
}) => (
  <label className={
    classNames({
      'hd-textbox': true,
      [`${className}`]: Boolean(className),
      'hd-disabled': disabled,
    })
  }
  >
    {
      Boolean(labelText) ? (
        <span className="hd-textbox-label-text">{labelText}</span>
      ) : null
    }
    <input
      className="hd-textbox-input"
      defaultValue={defaultText}
      disabled={disabled}
      name={name}
      onChange={change}
      onFocus={focus}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </label>
);

Textbox.defaultProps = {
  change: undefined,
  className: '',
  defaultText: undefined,
  disabled: false,
  focus: undefined,
  labelText: '',
  placeholder: '',
  type: TextboxType.TEXT,
  value: '',
};

export default Textbox;
