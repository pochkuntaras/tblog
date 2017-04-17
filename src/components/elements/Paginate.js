import React, { PropTypes } from 'react';
import ReactPaginate from 'react-paginate';
import history from 'helpers/history';
import { postsPath } from 'helpers/routes';

const Paginate = ({ pageCount }) => (
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
);
Paginate.propTypes = {
  pageCount: PropTypes.number.required
};

export default Paginate;
