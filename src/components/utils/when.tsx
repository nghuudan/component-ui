import { ReactNode } from 'react';

export interface WhenProps {
  children: ReactNode;
  is: boolean;
}

const When = ({ children, is }: WhenProps) => (
  Boolean(is) ? children : null
);

export default When;
