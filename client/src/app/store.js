import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import customerReducers from './customers/store/reducers';
import customerSagas from './customers/store/sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-unused-vars
export const configureStore = (initialState = {}) => {
  const middlewares = [sagaMiddleware];

  const enhancers = applyMiddleware(...middlewares);

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose);
  /* eslint-enable */

  const rootReducer = combineReducers({
    customers: customerReducers,
  });

  const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(enhancers),
  );

  sagaMiddleware.run(customerSagas);

  return store;
};

export default configureStore;
