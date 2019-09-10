import {
  Customer,
  Filter,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_FAILED,
  FETCH_CUSTOMERS_SUCCESS,
  TOGGLE_FILTER,
  SET_FILTER,
  PAGE_NEXT,
  PAGE_PREVIOUS,
  FetchCustomersAction,
  FetchCustomersFailedAction,
  FetchCustomersSuccessAction,
  ToggleFilterAction,
  SetFilterAction,
  PageNextAction,
  PagePreviousAction,
} from './types';
import { DefaultListMetadata } from '../shared/types';

export function fetchCustomers(): FetchCustomersAction {
  return {
    type: FETCH_CUSTOMERS,
  };
}

export function fetchCustomersSuccess(customers: DefaultListMetadata<Customer[]>): FetchCustomersSuccessAction {
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

export function pageNext(): PageNextAction {
  return {
    type: PAGE_NEXT
  };
}

export function pagePrevious(): PagePreviousAction {
  return {
    type: PAGE_PREVIOUS
  };
}