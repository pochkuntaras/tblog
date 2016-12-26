const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.defaultProps = {
  text: 'New post'
};

TextBox.propTypes = {
  text: React.PropTypes.string.isRequired
};
