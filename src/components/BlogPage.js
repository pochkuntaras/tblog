import React, { PropTypes } from 'react';
import { map } from 'lodash/collection';
import BlogItem from 'components/widgets/blog/BlogItem';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/elements/PieChart';

const BlogPage = ({ posts, like }) => {
  const columns = map(posts,
     (post) => [post.text, post.meta.likes || 0]);

  return (
    <div>
      <BlogList
        posts={posts}
        likePost={like}
      />
      <PieChart columns={columns}/>
    </div>
  );
};

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(BlogItem.propTypes)
  ),
  like: PropTypes.func
};

export default BlogPage;
