import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextField = ({ name, value, onChange, label, error }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type="text"
      className={classNames('input', { 'input_error': error })}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool
};

export default TextField;
