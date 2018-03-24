import { ReactNode } from 'react';

export interface WhenProps {
  children: ReactNode;
  is: boolean;
}

const When = ({ children, is }: WhenProps): ReactNode => (
  Boolean(is) === true ? children : null
);

export default When;
