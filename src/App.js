import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import routes from 'routes';
import store from 'store';
import { Provider } from 'react-redux';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

function historyCallback(location) {
  match({ location, routes}, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </ Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('dev-tools')
);

export default App;
