import React, { PropTypes } from 'react';

const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.defaultProps = {
  text: 'New post'
};

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextBox;
