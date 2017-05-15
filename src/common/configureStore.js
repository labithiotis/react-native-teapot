import appReducer from './stores/reducer';
import createFetch from './createFetch';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';

// Dependency injection middleware. So simple that we don't need a lib.
// It's like mixed redux-thunk and redux-inject.
const injectMiddleware = d => s => n => a =>
  n(typeof a === 'function' ? a({ ...d, s }) : a);

export default function configureStore({ dependencies, initialState }) {
  const { SERVER_URL, IS_BROWSER, NODE_ENV } = process.env;
  const serverUrl = SERVER_URL || (IS_BROWSER ? '' : 'http://localhost:8000');

  const middleware = [
    injectMiddleware({
      ...dependencies,
      fetch: createFetch(serverUrl),
      now: () => Date.now(),
      autoRehydrate,
    }),
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    }),
  ];

  if (NODE_ENV !== 'production') {
    middleware.push(createLogger({ collapsed: true }));
  }

  const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  persistStore(store, { storage: AsyncStorage });

  return store;
}
