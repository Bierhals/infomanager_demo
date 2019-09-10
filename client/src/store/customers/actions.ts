import {
  Customer,
  Filter,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_FAILED,
  FETCH_CUSTOMERS_SUCCESS,
  TOGGLE_FILTER,
  SET_FILTER,
  FetchCustomersAction,
  FetchCustomersFailedAction,
  FetchCustomersSuccessAction,
  ToggleFilterAction,
  SetFilterAction,
} from './types';

export function fetchCustomers(): FetchCustomersAction {
  return {
    type: FETCH_CUSTOMERS,
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

export function toggleFilter(): ToggleFilterAction {
  return {
    type: TOGGLE_FILTER,
  };
}

export function setFilter(filter: Filter): SetFilterAction {
  return {
    type: SET_FILTER,
    filter
  };
}