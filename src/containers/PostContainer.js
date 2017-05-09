import { connect } from 'react-redux';
import Post from 'components/views/Post';
import { likePost } from 'actions/Post';
import { flowRight } from 'lodash';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const actionsToProps = (dispatch) => ({
  like: flowRight(dispatch, likePost)
});

export default connect(stateToProps, actionsToProps)(Post);
