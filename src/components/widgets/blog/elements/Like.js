import React, { PropTypes } from 'react';

const Like = ({ likes, action }) => (
  <div className="like">
    <span className="like__count">Count: {likes} </span>
    <button
     className="button button_blue like__button"
     onClick={action}>like</button>
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number,
  action: PropTypes.func
};

export default Like;
