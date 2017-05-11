import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import TextField from 'components/react_form/TextField';

const EditPost = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit post</h1>
    <form onSubmit={handleSubmit} className="form">
      <Field label="Title:" component={TextField} name="title" />
      <Field label="Description:" component={TextField} name="description" />
      {
        (!pristine && !submitting) &&
        <button className="button button_green" onClick={reset}>Clear</button>
      }
      <div className="actions">
        <input type="submit" className="button button_blue" value="Update" />
      </div>
    </form>
  </div>
);

EditPost.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func
};

export default EditPost;
