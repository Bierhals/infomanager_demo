import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import {
  fetchCustomersSuccess,
  fetchCustomersFailed
} from './actions';
import { FETCH_CUSTOMERS } from './types';
import { fetchCustomers as ApifetchtCustomers } from './mock';

export function* fetchCustomers<Promise>() {
  try {
    yield put(fetchCustomersSuccess(yield call(ApifetchtCustomers)));
  } catch (err) {
    yield put(fetchCustomersFailed(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(FETCH_CUSTOMERS, fetchCustomers),
  ]);
}
