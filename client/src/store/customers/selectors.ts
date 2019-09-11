import {
  RootState
} from '../types';

export const customerRequestParams = (state: RootState) => {
  return {
    offset: state.customers.customerlist.offset,
    limit: state.customers.customerlist.limit,
    sort: state.customers.customerlist.sort
  }
};