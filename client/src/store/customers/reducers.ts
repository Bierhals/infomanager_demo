import {
  CustomersState,
  CustomersActionTypes,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILED,
  TOGGLE_FILTER,
  SET_FILTER,
  PAGE_NEXT,
  PAGE_PREVIOUS,
  SORT_FIELD,
  FetchCustomersAction,
  FetchCustomersSuccessAction,
  FetchCustomersFailedAction,
  ToggleFilterAction,
  SetFilterAction,
  PageNextAction,
  PagePreviousAction,
  SortFieldAction,
  CustomerStatus,
} from './types';

const initialState: CustomersState = {
  customerlist: {
    items: [],
    totalCount: 0,
    offset: 0,
    limit: 15,
    filter: {
      status: CustomerStatus.All
    },
    sort: {
      field: 'address',
      direction: 'asc'
    },
    error: null,
    loading: false,
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
      ...action.data,
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
      offset: 0,
    },
  };
}

function pageNext(state: CustomersState, action: PageNextAction) {
  const newOffset = state.customerlist.offset + state.customerlist.limit;

  if (newOffset > state.customerlist.totalCount)
    return state;
  else
    return {
      ...state,
      customerlist: {
        ...state.customerlist,
        offset: newOffset,
      },
    };
}

function pagePrevious(state: CustomersState, action: PagePreviousAction) {
  const newOffset = state.customerlist.offset - state.customerlist.limit;

  if (newOffset < 0)
    return state;
  else
    return {
      ...state,
      customerlist: {
        ...state.customerlist,
        offset: newOffset,
      },
    };
}

function sortField(state: CustomersState, action: SortFieldAction) {
  return {
    ...state,
    customerlist: {
      ...state.customerlist,
      sort: {
        field: action.field,
        direction: state.customerlist.sort.field !== action.field ? 'asc' : state.customerlist.sort.direction === 'asc' ? 'desc' : 'asc'
      },
      offset: 0,
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
    case PAGE_NEXT: return pageNext(state, action);
    case PAGE_PREVIOUS: return pagePrevious(state, action);
    case SORT_FIELD: return sortField(state, action);
    /* case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action) */
    default: return state;
  }
};

export default reducer;
