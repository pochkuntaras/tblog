import request from 'superagent';
import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionsTypes/PostActionsTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export const likePost = (id) => ({
  type: types.FETCH_POST_LIKE,
  id
});

export function fetchPost (id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request.get(`${API_ROOT}/posts/${id}`)
    .end((error, response) => {
      if (error) {
        dispatch(errorPost(id));
      } else {
        dispatch(receivePost(response.body.post));
      }
    });
  };
}
