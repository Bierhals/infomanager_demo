import {
  RootState
} from '../types';

export const customerRequestParams = (state: RootState) => {
  return {
    offset: state.customerslist.offset,
    limit: state.customerslist.limit,
    sort: state.customerslist.sort,
    filter: state.customerslist.filter,
  }
};