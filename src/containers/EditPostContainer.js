import { connect } from 'react-redux';
import { flowRight } from 'lodash';
import { updatePost } from 'actions/Post';
import { reduxForm } from 'redux-form';
import EditPost from 'components/views/EditPost';

export default connect(
  (state) => {
    const entry = state.post.entry;

    return {
      initialValues: {
        id: entry ? entry.id : '',
        title: entry ? entry.title : '',
        description: entry ? entry.description : ''
      }
    };
  },
  (dispatch) => ({
    onSubmit: flowRight(dispatch, updatePost)
  })
)(reduxForm({
  form: 'editPost',
  enableReinitialize: true,
})(EditPost));
