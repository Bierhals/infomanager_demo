import { actionTypes } from './constants';

// actionCreators
export const addCustomer = newCustomer => ({
  type: actionTypes.ADD_CUSTOMER,
  newCustomer,
});

export const addCustomerSuccess = customerId => ({
  type: actionTypes.ADD_CUSTOMERS_SUCCESS,
  customerId,
});

export const addCustomerFail = error => ({
  type: actionTypes.ADD_CUSTOMERS_FAILURE,
  error,
});

export const getCustomers = () => ({
  type: actionTypes.GET_CUSTOMERS,
});

export const getCustomersSuccess = customers => ({
  type: actionTypes.GET_CUSTOMERS_SUCCESS,
  data: customers,
});

export function getCustomersFail(error) {
  return {
    type: actionTypes.GET_CUSTOMERS_FAILURE,
    error,
  };
}
