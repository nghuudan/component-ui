import React, { ReactNode, StatelessComponent } from 'react';

export interface WhenProps {
  children: ReactNode;
  is: boolean;
}

const When: StatelessComponent<WhenProps> = ({ children, is }) => (
  <>
    {
      Boolean(is) ? children : null
    }
  </>
);

export default When;
