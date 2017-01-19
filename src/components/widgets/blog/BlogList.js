import React, { PropTypes } from 'react';
import _ from 'lodash';
import BlogItem from 'components/widgets/blog/BlogItem';

const BlogList = ({ posts, likePost }) => (
  <div>
  {
    _.map(posts, (post) => (
      <BlogItem key={post.id} like={() => likePost(post.id)} {...post} />
    ))
  }
  </div>
);

BlogList.defaultProps = {
  posts: {
    meta: {
      author: 'Username',
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: 0
    },
    image: {
      alt: 'Image',
      width: '100px',
      height: '100px'
    },
    text: 'New post'
  }
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(BlogItem.propTypes)
  ),
  likePost: PropTypes.func.isRequired
};

export default BlogList;
