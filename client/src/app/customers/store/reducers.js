import { actionTypes } from './constants';

const initialState = {
  customerlist: {
    data: [],
    filter: null,
    loading: false,
    error: null,
  },
};

function getCustomers(state, action) {
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

function getCustomersSuccess(state, action) {
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

function getCustomersFail(state, action) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      error: action.error,
      loading: false,
    },
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMERS: return getCustomers(state, action);
    case actionTypes.GET_CUSTOMERS_SUCCESS: return getCustomersSuccess(state, action);
    case actionTypes.GET_CUSTOMERS_FAILURE: return getCustomersFail(state, action);
    /* case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action) */
    default: return state;
  }
};

export default reducer;
