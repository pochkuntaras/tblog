import React, { PropTypes } from 'react';
import BlogItem from 'components/widgets/blog/BlogItem';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/elements/PieChart';
import ReactPaginate from 'react-paginate';
import { postsPath } from 'helpers/routes';
import history from 'helpers/history';

const BlogPage = ({ posts, columns, like, pageCount }) => (
  <div>
    <BlogList posts={posts} likePost={like} />
    <PieChart columns={columns} />
    <ReactPaginate
       previousLabel={'previous'}
       pageCount={pageCount}
       marginPagesDisplayed={2}
       pageRangeDisplayed={5}
       onPageChange={(page) => history.push(postsPath(page.selected + 1))}
       hrefBuilder={(page) => postsPath(page)}
       containerClassName={'pagination'}
       pageClassName={'pagination__page'}
       previousClassName={'pagination__page'}
       nextClassName={'pagination__page'}
       activeClassName={'pagination__page_active'}
       disabledClassName={'pagination__page_disabled'}
       />
  </div>
);

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(BlogItem.propTypes)
  ),
  like: PropTypes.func,
  pageCount: PropTypes.number,
  columns: PropTypes.array
};

export default BlogPage;
