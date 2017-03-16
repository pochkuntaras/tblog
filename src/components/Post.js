import React, { PropTypes } from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';

const Post = ({ item, like }) => (
  <div className="post">
    {item && <BlogItem {...item} like={like} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  like: PropTypes.func
};

export default Post;
