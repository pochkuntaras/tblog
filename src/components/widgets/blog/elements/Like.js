import React, { PropTypes } from 'react';

const Like = ({ id, likes, action }) => (
  <div className="like">
    <span className="like__count">Count: {likes} </span>
    <button
     className="button button_blue like__button"
     onClick={() => action(id)}>like</button>
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  id: PropTypes.number,
  likes: PropTypes.number,
  action: PropTypes.func
};

export default Like;
