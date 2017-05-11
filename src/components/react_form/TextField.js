import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextField = ({ input, label, type,
   meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <input
      {...input}
      type={type}
      className={classNames('input', { 'input_error': error })}
    />
    {touched && (error && (
      <div className="error">
        {error}
      </div>
    ) || warning && (
      <div className="warning">
        {warning}
      </div>
    ))}
  </div>
);

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool
  })
};

TextField.defaultProps = {
  type: 'text',
  className: 'input'
};

export default TextField;
