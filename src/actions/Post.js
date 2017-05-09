import { API_CALL } from 'middleware/API';
import * as types from 'constants/actionsTypes/PostActionsTypes';

export const likePost = (id) => ({
  type: types.FETCH_POST_LIKE,
  id
});

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      query: {},
      method: 'GET',
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}

export function updatePost(values) {
  const { id } = values;

  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      payload: { post: values },
      method: 'PATCH',
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
