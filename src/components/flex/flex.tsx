import React, { ReactNode, StatelessComponent } from 'react';
import classNames from 'classnames';
import { Align, Layout, Media } from '../enums';

export interface FlexProps {
  align?: Align;
  basis?: number;
  children?: ReactNode;
  className?: string;
  grow?: boolean;
  hidden?: boolean;
  hide?: Media;
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  layout?: Layout;
  overflow?: boolean;
  show?: Media;
  shrink?: boolean;
  wrap?: boolean;
}

const Flex: StatelessComponent<FlexProps> = ({
  align,
  basis,
  children,
  className,
  grow,
  hidden,
  hide,
  hideXs,
  hideSm,
  hideMd,
  hideLg,
  hideXl,
  layout,
  overflow,
  show,
  shrink,
  wrap,
}) => (
  <div className={
    classNames({
      'hd-flex': true,
      [`hd-align-${align}`]: Boolean(align),
      [`hd-basis-${basis}`]: Boolean(basis),
      [`${className}`]: Boolean(className),
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

Flex.defaultProps = {
  align: Align.NONE,
  basis: 0,
  children: null,
  className: '',
  grow: false,
  hidden: false,
  hide: Media.NONE,
  hideXs: false,
  hideSm: false,
  hideMd: false,
  hideLg: false,
  hideXl: false,
  layout: Layout.ROW,
  overflow: false,
  show: Media.NONE,
  shrink: false,
  wrap: false,
};

export default Flex;
