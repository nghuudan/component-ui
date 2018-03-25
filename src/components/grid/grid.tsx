import React, { ReactNode, StatelessComponent } from 'react';
import classNames from 'classnames';
import Media from '../enums/media.enum';

export interface GridProps {
  children?: ReactNode;
  className?: string;
  container?: boolean;
  hidden?: boolean;
  hide?: Media;
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  show?: Media;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Grid: StatelessComponent<GridProps> = ({
  children,
  className,
  container,
  hidden,
  hide,
  hideXs,
  hideSm,
  hideMd,
  hideLg,
  hideXl,
  show,
  xs,
  sm,
  md,
  lg,
  xl,
}) => (
  <div className={
    classNames({
      'hd-grid': true,
      [`${className}`]: Boolean(className),
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
      [`hd-xs-${xs}`]: Boolean(xs),
      [`hd-sm-${sm}`]: Boolean(sm),
      [`hd-md-${md}`]: Boolean(md),
      [`hd-lg-${lg}`]: Boolean(lg),
      [`hd-xl-${xl}`]: Boolean(xl),
    })
  }
  >
    {children}
  </div>
);

Grid.defaultProps = {
  children: null,
  className: '',
  container: false,
  hidden: false,
  hide: Media.NONE,
  hideXs: false,
  hideSm: false,
  hideMd: false,
  hideLg: false,
  hideXl: false,
  show: Media.NONE,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};

export default Grid;
