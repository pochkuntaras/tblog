import React, { PropTypes } from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import Helmet from 'react-helmet';

const Post = ({ item, like }) => (
  <div className="post">
    <Helmet title={item.title}
     meta={
        [{name: item.description, content: 'description'}]
       } />
    {item && <BlogItem {...item} like={like} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object,
  like: PropTypes.func
};

export default Post;
