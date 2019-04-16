import { all, put, takeLatest } from 'redux-saga/effects';

import { getCustomersFail, getCustomersSuccess } from './actions';
import { actionTypes } from './constants';
import { customers } from './mock';

export function* getCustomers() {
  try {
    yield put(getCustomersSuccess(customers));
  } catch (err) {
    yield put(getCustomersFail({ name: err.name, message: err.message, stack: err.stack }));
  }
}

export default function* root() {
  yield all([
    takeLatest(actionTypes.GET_CUSTOMERS, getCustomers),
  ]);
}
