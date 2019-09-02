// actionTypes
export const FETCH_CUSTOMERS = '@@customers/FETCH_CUSTOMERS';
export const FETCH_CUSTOMERS_SUCCESS = '@@customers/FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILED = '@@customers/FETCH_CUSTOMERS_FAILED';


export interface Customer {
  id: number,
  type: 'Person' | 'Filiale',
  name: string,
  firstname: string,
  status: string
}

export interface Filter {
  status: string | null,
  firstname: string | null,
  lastname: string | null
}

export type CustomersState = Readonly<{
  customerlist: Readonly<{
    data: ReadonlyArray<Readonly<Customer>>,
    filter: Filter | null,
    error: Error | string | null,
    loading: boolean
  }>
}>;

export interface FetchCustomersAction {
  type: typeof FETCH_CUSTOMERS
  filter: Filter | null
}

export interface FetchCustomersSuccessAction {
  type: typeof FETCH_CUSTOMERS_SUCCESS
  data: Customer[]
}

export interface FetchCustomersFailedAction {
  type: typeof FETCH_CUSTOMERS_FAILED
  error: Error | string
}
export type CustomersActionTypes = FetchCustomersAction | FetchCustomersSuccessAction | FetchCustomersFailedAction;