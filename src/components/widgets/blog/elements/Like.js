import React, { PropTypes } from 'react';

const Like = ({ likes, action }) => (
  <p>
    <span>Count: {likes} </span>
    <button onClick={action}>like</button>
  </p>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number,
  action: PropTypes.func
};

export default Like;
