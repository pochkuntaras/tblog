import { connect } from 'react-redux';
import Index from 'components/views/Index';
import { likePost } from 'actions/Posts';
import { flowRight } from 'lodash';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  pageCount: state.posts.meta.totalPages,
  columns: state.posts.columns
});

const actionsToProps = (dispatch) => ({
  like: flowRight(dispatch, likePost)
});

export default connect(stateToProps, actionsToProps)(Index);
