import { 
  CustomersState,
  CustomersActionTypes, 
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
  TOGGLE_FILTER,
  SET_FILTER,
  FetchCustomersAction,
  FetchCustomersSuccessAction,
  FetchCustomersFailedAction,
  ToggleFilterAction,
  SetFilterAction,
  CustomerStatus,
} from './types';

const initialState: CustomersState = {
  customerlist: {
    data: [],
    loading: false,
    error: null,
    filter: {
      status: CustomerStatus.All
    },
    showFilter: false,
  },
};

function fetchCustomers(state: CustomersState, action: FetchCustomersAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      data: [],
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

function toggleFilter(state: CustomersState, action: ToggleFilterAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      showFilter: state.customerlist.showFilter === false,
    },
  };
}

function setFilter(state: CustomersState, action: SetFilterAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      filter: action.filter,
    },
  };
}

export function reducer(state = initialState, action: CustomersActionTypes) {
  switch (action.type) {
    case FETCH_CUSTOMERS: return fetchCustomers(state, action);
    case FETCH_CUSTOMERS_SUCCESS: return fetchCustomersSuccess(state, action);
    case FETCH_CUSTOMERS_FAILED: return fetchCustomersFailed(state, action);
    case TOGGLE_FILTER: return toggleFilter(state, action);
    case SET_FILTER: return setFilter(state, action);
    /* case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action) */
    default: return state;
  }
};

export default reducer;
