import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import {
  fetchCustomers,
  fetchCustomersSuccess,
  fetchCustomersFailed,
} from './actions';
import {
  FETCH_CUSTOMERS,
  SET_FILTER,
  PAGE_PREVIOUS,
  PAGE_NEXT,
  SORT_FIELD,
} from './types';
import { Sort } from '../shared/types';
import { customerRequestParams } from './selectors';
import { fetchCustomers as ApifetchtCustomers } from './mock';

export function* fetchCustomersSaga() {
  try {
    const params: { offset: number, limit: number, sort: Sort } = yield select(customerRequestParams);
    yield put(fetchCustomersSuccess(yield call(ApifetchtCustomers, params.limit, params.offset, params.sort)));
  } catch (err) {
    yield put(fetchCustomersFailed(err));
  }
}

export function* changePageSaga() {
  yield put(fetchCustomers());
}

export function* setFilterSaga() {
  yield call(() => new Promise(resolve => {
    setTimeout(_ => {
      resolve()
    }, 500)
  }));
  yield put(fetchCustomers());
}

export default function* root() {
  yield all([
    takeLatest(FETCH_CUSTOMERS, fetchCustomersSaga),
    takeLatest(SET_FILTER, setFilterSaga),
    takeLatest(SORT_FIELD, setFilterSaga),
    takeLatest(PAGE_NEXT, changePageSaga),
    takeLatest(PAGE_PREVIOUS, changePageSaga),
  ]);
}
