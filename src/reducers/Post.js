import { get, assign} from 'lodash/object';
import { cloneDeep } from 'lodash/lang';
import * as types from 'constants/actionsTypes/PostActionsTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response.post });
    case types.FETCH_POST_LIKE: {
      const entry = cloneDeep(state.entry);

      entry.meta.likes = get(entry, 'meta.likes', 0) + 1;

      return assign({}, state, { entry });
    }
    default:
      return state;
  }
}
