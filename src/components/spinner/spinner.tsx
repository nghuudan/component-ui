import React from 'react';
import classNames from 'classnames';

export interface SpinnerProps {
  className: string;
  overlay: boolean;
}

const Spinner = ({ className, overlay }: SpinnerProps): JSX.Element => (
  <div className={
    classNames({
      'hd-spinner': true,
      [className]: Boolean(className),
      'hd-spinner-overlay': overlay,
    })
  }
  >
    <div className="hd-spinner-disc">
      <div className="hd-spinner-disc-inner" />
    </div>
  </div>
);

export default Spinner;
