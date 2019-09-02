import { Customer } from './types';

export const customers: Customer[] = [
  {
    id: 1,
    type: 'Person',
    name: 'Bierhals, Sven-Uwe',
    firstname: 'test',
    status: 'Aktiv',
  },
  {
    id: 2,
    type: 'Person',
    name: 'Doe, John',
    firstname: 'test',
    status: 'Inaktiv',
  },
  {
    id: 3,
    type: 'Filiale',
    name: '5012 Berlin, Turmstr. 9',
    firstname: 'test',
    status: 'Aktiv',
  },
];

export const fetchCustomers = (): Promise<Customer[]> => {
  return Promise.resolve(customers);
};
