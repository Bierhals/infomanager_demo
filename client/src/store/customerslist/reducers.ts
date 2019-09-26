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
import {
  SortDirection
} from '../shared/types';

const initialState: CustomersState = {
  items: [],
  totalCount: 0,
  offset: 0,
  limit: 15,
  filter: {
    status: CustomerStatus.All
  },
  sort: {
    field: 'name',
    direction: SortDirection.asc,
  },
  error: null,
  loading: false,
  showFilter: false,
};

function fetchCustomers(state: CustomersState, action: FetchCustomersAction) {
  return {
    ...state,
      data: [],
      error: null,
      loading: true,
  };
}

function fetchCustomersSuccess(state: CustomersState, action: FetchCustomersSuccessAction) {
  return {
    ...state,
      ...action.data,
      error: null,
      loading: false,
  };
}

function fetchCustomersFailed(state: CustomersState, action: FetchCustomersFailedAction) {
  return {
    ...state,
      error: action.error,
      loading: false,
  };
}

function toggleFilter(state: CustomersState, action: ToggleFilterAction) {
  return {
    ...state,
      showFilter: state.showFilter === false,
  };
}

function setFilter(state: CustomersState, action: SetFilterAction) {
  return {
    ...state,
      filter: action.filter,
      offset: 0,
  };
}

function pageNext(state: CustomersState, action: PageNextAction) {
  const newOffset = state.offset + state.limit;

  if (newOffset + 1 > state.totalCount)
    return state;
  else
    return {
      ...state,
        offset: newOffset,
    };
}

function pagePrevious(state: CustomersState, action: PagePreviousAction) {
  const newOffset = state.offset - state.limit;

  if (newOffset < 0)
    return state;
  else
    return {
      ...state,
        offset: newOffset,
    };
}

function sortField(state: CustomersState, action: SortFieldAction) {
  return {
    ...state,
      sort: {
        field: action.field,
        direction: state.sort.field !== action.field ? SortDirection.asc : state.sort.direction === SortDirection.asc ? SortDirection.desc : SortDirection.asc
      },
      offset: 0,
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
