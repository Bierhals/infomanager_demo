import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import customersReducers from './customers/reducers';
import customersSagas  from './customers/sagas';


const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-unused-vars
export const configureStore = (initialState = {}) => {
  const middlewares = [sagaMiddleware];

  const enhancers = applyMiddleware(...middlewares);


  const rootReducer = combineReducers({
    customers: customersReducers,
  });

  const store = createStore(
    rootReducer, /* preloadedState, */
    composeWithDevTools(enhancers),
  );

  sagaMiddleware.run(customersSagas);

  return store;
};

export default configureStore;
