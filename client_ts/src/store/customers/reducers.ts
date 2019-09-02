import { 
  CustomersState,
  CustomersActionTypes, 
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
  FetchCustomersAction,
  FetchCustomersSuccessAction,
  FetchCustomersFailedAction
} from './types';

const initialState: CustomersState = {
  customerlist: {
    data: [],
    filter: null,
    loading: false,
    error: null
  },
};

function fetchCustomers(state: CustomersState, action: FetchCustomersAction) {
  return {
    ...state,
    customerlist: {
      data: [],
      filter: action.filter,
      error: null,
      loading: true,
    },
  };
}

function fetchCustomersSuccess(state: CustomersState, action: FetchCustomersSuccessAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      data: action.data,
      error: null,
      loading: false,
    },
  };
}

function fetchCustomersFailed(state: CustomersState, action: FetchCustomersFailedAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      error: action.error,
      loading: false,
    },
  };
}

export function reducer(state = initialState, action: CustomersActionTypes) {
  switch (action.type) {
    case FETCH_CUSTOMERS: return fetchCustomers(state, action);
    case FETCH_CUSTOMERS_SUCCESS: return fetchCustomersSuccess(state, action);
    case FETCH_CUSTOMERS_FAILED: return fetchCustomersFailed(state, action);
    /* case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action) */
    default: return state;
  }
};

export default reducer;
