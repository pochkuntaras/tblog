import { connect } from 'react-redux';
import BlogPage from 'components/BlogPage';
import { likePost } from 'actions/Posts';
import { flowRight } from 'lodash';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  like: flowRight(dispatch, likePost)
});

export default connect(stateToProps, actionsToProps)(BlogPage);
