import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface GridProps {
  children: ReactNode;
  className: string;
  container: boolean;
  hidden: boolean;
  hide: string;
  hideXs: boolean;
  hideSm: boolean;
  hideMd: boolean;
  hideLg: boolean;
  hideXl: boolean;
  show: string;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const Grid = ({
  children, className,
  container, hidden, hide,
  hideXs, hideSm, hideMd,
  hideLg, hideXl, show,
  xs, sm, md, lg, xl,
}: GridProps): JSX.Element => (
  <div className={
    classNames({
      'hd-grid': true,
      [className]: Boolean(className),
      'hd-container': container,
      'hd-hidden': hidden,
      [`hd-hide-${hide}`]: Boolean(hide),
      'hd-hide-xs': hideXs,
      'hd-hide-sm': hideSm,
      'hd-hide-md': hideMd,
      'hd-hide-lg': hideLg,
      'hd-hide-xl': hideXl,
      'hd-show': Boolean(show),
      [`hd-show-${show}`]: Boolean(show),
      [`hd-xs-${xs}`]: Number.isInteger(xs),
      [`hd-sm-${sm}`]: Number.isInteger(sm),
      [`hd-md-${md}`]: Number.isInteger(md),
      [`hd-lg-${lg}`]: Number.isInteger(lg),
      [`hd-xl-${xl}`]: Number.isInteger(xl),
    })
  }
  >
    {children}
  </div>
);

export default Grid;
