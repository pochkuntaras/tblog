import React, { PropTypes } from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/elements/PieChart';
import Paginate from 'components/elements/Paginate';
import Helmet from 'react-helmet';

const Index = ({ posts, columns, like, pageCount }) => (
  <div>
    <Helmet
      title={'Posts list'}
      meta={
         [{name: 'description', content: 'List of interesting posts'}]
        }/>
    <BlogList posts={posts} likePost={like} />
    <PieChart columns={columns} />
    <Paginate pageCount={pageCount} />
  </div>
);

Index.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(BlogItem.propTypes)
  ),
  like: PropTypes.func,
  pageCount: PropTypes.number,
  columns: PropTypes.array
};

export default Index;
