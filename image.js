const Image = ({ src, alt, width, height }) => (
  <img src={src} alt={alt} style={{ width: width, height: height }}/>
);

Image.defaultProps = {
  alt: 'Image',
  width: '100px',
  height: '100px'
};

Image.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};
