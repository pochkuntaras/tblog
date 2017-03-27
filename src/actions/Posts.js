import { decamelizeKeys } from 'humps';
import { API_CALL } from 'middleware/API';
import * as types from 'constants/actionsTypes/PostsActionsTypes';

export const likePost = (id) => ({
  type: types.FETCH_POSTS_LIKE,
  id
});

export function fetchPosts(page = 1) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      query: decamelizeKeys({ page, perPage: 3 }),
      method: 'GET',
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
