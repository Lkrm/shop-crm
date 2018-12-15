import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  handlerClick,
  customClass,
}) => (
  <button onClick={() => handlerClick()} className={`btn btn-primary ${customClass}`}>{children}</button>
);
Button.propTypes = {
  label: PropTypes.string,
  handlerClick: PropTypes.func,
  customClass: PropTypes.string,
};
Button.defaultProps = {
  children: 'Submit',
  handlerClick: () => {},
};
export default Button;
