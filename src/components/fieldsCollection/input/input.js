import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  type,
  customClass,
  idKey,
  placeholder,
  value,
  defaultValue,
  required,
  disabled,
}) => (
  <div className="col-12">
    <label htmlFor="validationServer01">{label}</label>
    <input
      type={type}
      className="form-control"
      id={idKey}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      disabled={disabled}
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.element,
  type: PropTypes.string,
  customClass: PropTypes.string,
  idKey: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,

};
Input.defaultProps = {
  required: false,
  type: 'text',
  disabled: false,
};
export default Input;
