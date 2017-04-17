import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { compact } from 'lodash/array';
import prepareData from 'helpers/prepareData';
import createStore from 'store';
import routes from 'routes';
import helmet from 'react-helmet';

const store = createStore();

export default (request, response) => {
  match({ routes, location: request.url }, (error, redirectLocation, renderProps) =>
      Promise.all(compact(prepareData(store, renderProps))).then(() => {
        const initialState = JSON.stringify(store.getState());

        const content = ReactDOMServer.renderToString(
          React.createElement(
            Provider,
            { store },
            React.createElement(RouterContext, renderProps)
          )
        );

        const head = helmet.rewind();

        response.status(200);
        response.render(
          'index',
          { initialState, content, head }
        );
      })
  );
};
