/* globals window */

import { createStore, combineReducers, compose } from 'redux';
import { state } from 'losen';
import { persistStore, autoRehydrate } from 'redux-persist';
import schema from './api/tek-trapp.json';

/**
 * Create the store with middleware
 */
const store = createStore(
  combineReducers({ [state.NAME]: state.reducer(schema) }),
  undefined,
  compose(autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : f => f),
);

persistStore(store);

export default store;
