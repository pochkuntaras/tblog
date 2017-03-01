import { get, assign} from 'lodash/object';
import { cloneDeep } from 'lodash/lang';
import { findIndex } from 'lodash/array';
import * as types from 'constants/actionsTypes/PostsActionsTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.FETCH_POSTS_LIKE: {
      const entries = cloneDeep(state.entries);
      const index   = findIndex(entries, { id: action.id });

      entries[index].meta.likes = get(entries[index], 'meta.likes', 0) + 1;

      return assign({}, state, { entries });
    }
    default:
      return state;
  }
}
