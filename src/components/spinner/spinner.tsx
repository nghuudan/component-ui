import React, { StatelessComponent } from 'react';
import classNames from 'classnames';

export interface SpinnerProps {
  className?: string;
  overlay?: boolean;
}

const Spinner: StatelessComponent<SpinnerProps> = ({
  className,
  overlay,
}: SpinnerProps) => (
  <div className={
    classNames({
      'hd-spinner': true,
      [`${className}`]: Boolean(className),
      'hd-spinner-overlay': overlay,
    })
  }
  >
    <div className="hd-spinner-disc">
      <div className="hd-spinner-disc-inner">
        <div className="hd-spinner-disc-core" />
      </div>
    </div>
  </div>
);

Spinner.defaultProps = {
  className: '',
  overlay: false,
};

export default Spinner;
