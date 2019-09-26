import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import customerslistReducers from './customerslist/reducers';
import customersSagas  from './customerslist/sagas';


const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-unused-vars
export const configureStore = (initialState = {}) => {
  const middlewares = [sagaMiddleware];

  const enhancers = applyMiddleware(...middlewares);


  const rootReducer = combineReducers({
    customerslist: customerslistReducers,
  });

  const store = createStore(
    rootReducer, /* preloadedState, */
    composeWithDevTools(enhancers),
  );

  sagaMiddleware.run(customersSagas);

  return store;
};

export default configureStore;
