import React, { PropTypes } from 'react';

const TextAreaField = ({ name, value, onChange, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <textarea id={name} name={name} value={value} onChange={onChange} />
  </div>
);

TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool
};

export default TextAreaField;
