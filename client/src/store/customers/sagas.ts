import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import {
  fetchCustomers,
  fetchCustomersSuccess,
  fetchCustomersFailed
} from './actions';
import { FETCH_CUSTOMERS, SET_FILTER } from './types';
import { fetchCustomers as ApifetchtCustomers } from './mock';

export function* fetchCustomersSaga() {
  try {
    yield put(fetchCustomersSuccess(yield call(ApifetchtCustomers)));
  } catch (err) {
    yield put(fetchCustomersFailed(err));
  }
}

export function* setFilterSaga() {
  yield put(fetchCustomers());
}

export default function* root() {
  yield all([
    takeLatest(FETCH_CUSTOMERS, fetchCustomersSaga),
    takeLatest(SET_FILTER, setFilterSaga),
  ]);
}
