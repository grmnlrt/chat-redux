// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import rootReducer from './reducers/root_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// initialState
const initialState = {
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ]
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(rootReducer, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
