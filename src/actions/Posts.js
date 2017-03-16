import request from 'superagent';
import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionsTypes/PostsActionsTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

export const likePost = (id) => ({
  type: types.FETCH_POSTS_LIKE,
  id
});

export function fetchPosts() {
  return (dispatsh) => {
    dispatsh(requestPosts());

    return request.get(`${API_ROOT}/`)
    .end((error, response) => {
      if (error) {
        dispatsh(errorPosts());
      } else {
        dispatsh(receivePosts(response.body));
      }
    });
  };
}
