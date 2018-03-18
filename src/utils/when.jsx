const When = ({ children, is }) => (
  Boolean(is) === true ? children : null
);

export default When;
