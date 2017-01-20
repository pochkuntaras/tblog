import React, { PropTypes } from 'react';

const Image = ({ src, alt, width, height }) => (
  <img
   src={src} alt={alt} style={{ width, height }}
   className="blog-item__image"
  />
);

Image.defaultProps = {
  alt: 'Image',
  width: '100px',
  height: '100px'
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Image;
