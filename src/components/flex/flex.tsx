import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type FlexLayout = 'column' | 'row';

export interface FlexProps {
  align: string;
  basis: number;
  children: ReactNode;
  className: string;
  grow: boolean;
  hidden: boolean;
  hide: string;
  hideXs: boolean;
  hideSm: boolean;
  hideMd: boolean;
  hideLg: boolean;
  hideXl: boolean;
  layout: FlexLayout;
  overflow: boolean;
  show: string;
  shrink: boolean;
  wrap: boolean;
}

const Flex = ({
  align, basis, children, className,
  grow, hidden, hide, hideXs, hideSm,
  hideMd, hideLg, hideXl, layout,
  overflow, show, shrink, wrap,
}: FlexProps): JSX.Element => (
  <div className={
    classNames({
      'hd-flex': true,
      [`hd-align-${align}`]: Boolean(align),
      [`hd-basis-${basis}`]: Number.isInteger(basis),
      [className]: Boolean(className),
      'hd-column': layout === 'column',
      'hd-row': layout === 'row',
      'hd-grow': grow,
      'hd-hidden': hidden,
      [`hd-hide-${hide}`]: Boolean(hide),
      'hd-hide-xs': hideXs,
      'hd-hide-sm': hideSm,
      'hd-hide-md': hideMd,
      'hd-hide-lg': hideLg,
      'hd-hide-xl': hideXl,
      'hd-overflow': overflow,
      'hd-show': Boolean(show),
      [`hd-show-${show}`]: Boolean(show),
      'hd-shrink': shrink,
      'hd-wrap': wrap,
    })
  }
  >
    {children}
  </div>
);

export default Flex;
