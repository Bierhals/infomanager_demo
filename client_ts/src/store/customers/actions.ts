import {
  Customer,
  Filter,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_FAILED,
  FETCH_CUSTOMERS_SUCCESS,
  FetchCustomersAction,
  FetchCustomersFailedAction,
  FetchCustomersSuccessAction
} from './types';

export function fetchCustomers(filter: Filter): FetchCustomersAction {
  return {
    type: FETCH_CUSTOMERS,
    filter
  };
}

export function fetchCustomersSuccess(customers: Customer[]): FetchCustomersSuccessAction {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    data: customers
  };
}

export function fetchCustomersFailed(error: Error | string): FetchCustomersFailedAction {
  return {
    type: FETCH_CUSTOMERS_FAILED,
    error,
  };
}
