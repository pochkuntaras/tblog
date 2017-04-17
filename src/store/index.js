import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middleware/API';
import reducers from 'reducers';
import DevTools from 'containers/DevTools';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
