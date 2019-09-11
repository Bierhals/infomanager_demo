import { DefaultListMetadata, Sort } from '../shared/types';

// actionTypes
export const FETCH_CUSTOMERS = '@@customers/FETCH_CUSTOMERS';
export const FETCH_CUSTOMERS_SUCCESS = '@@customers/FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILED = '@@customers/FETCH_CUSTOMERS_FAILED';
export const PAGE_NEXT = '@@customers/PAGE_NEXT';
export const PAGE_PREVIOUS = '@@customers/PAGE_PREVIOUS';
export const TOGGLE_FILTER = '@@customers/TOGGLE_FILTER';
export const SET_FILTER = '@@customers/SET_FILTER';
export const SORT_FIELD = '@@customers/SORT_FIELD';

export interface Customer {
  id: number,
  type: 'Person' | 'Filiale',
  name: string,
  company?: string,
  department?: string,
  supervisor?: string,
  address?: {
    addition?: string,
    street: string,
    zip: string,
    city: string,
  }
  eMail?: string,
  phone?: string,
  mobile?: string,
  status: string
}

export interface CustomerShop extends Customer {
  type: 'Filiale',
  openingHours?: [{
    day: number,
    from: string,
    to: string,
    afternoonFrom: string,
    afternoonTo: string
  }]
}

export interface CustomerPerson extends Customer {
  type: 'Person',
  firstname?: string,
  position?: string
}

export enum CustomerStatus {
  Active = "Aktiv",
  Inactive = "Inaktiv",
  All = "Alle"
}

export interface Filter {
  status: CustomerStatus,
  name?: string,
  firstname?: string,
  company?: string,
  department?: string,
  phone?: string,
  zip?: string,
  city?: string,
  street?: string
}

export interface CustomersState {
  readonly customerlist: {
    readonly items: Customer[],
    readonly totalCount: number,
    readonly offset: number,
    readonly limit: number,
    readonly filter: Filter,
    readonly sort: Sort,
    readonly error: Error | string | null,
    readonly loading: boolean,
    readonly showFilter: boolean,
  }
};

export interface FetchCustomersAction {
  type: typeof FETCH_CUSTOMERS
}

export interface FetchCustomersSuccessAction {
  type: typeof FETCH_CUSTOMERS_SUCCESS,
  data:  DefaultListMetadata<Customer[]>
}

export interface FetchCustomersFailedAction {
  type: typeof FETCH_CUSTOMERS_FAILED,
  error: Error | string
}

export interface ToggleFilterAction {
  type: typeof TOGGLE_FILTER
}

export interface SetFilterAction {
  type: typeof SET_FILTER,
  filter: Filter
}

export interface PageNextAction {
  type: typeof PAGE_NEXT
}

export interface PagePreviousAction {
  type: typeof PAGE_PREVIOUS
}

export interface SortFieldAction {
  type: typeof SORT_FIELD,
  field: string
}

export type CustomersActionTypes = FetchCustomersAction | FetchCustomersSuccessAction | FetchCustomersFailedAction | ToggleFilterAction | SetFilterAction | PageNextAction | PagePreviousAction | SortFieldAction;