import {
  Customer,
  CustomerShop,
  CustomerPerson,
} from './types';
import {
  DefaultListMetadata,
  Sort
} from '../shared/types';

let customers: (CustomerPerson | CustomerShop)[] = [
  {
    id: 25000348,
    type: 'Person',
    name: 'Haberland',
    firstname: 'Carsten',
    company: 'Nordwind AG',
    department: 'EDV',
    position: 'Teamleiter',
    supervisor: 'Braun, Gerlinde',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'carsten.haberland@nordwind.test',
    phone: '030-123456-1221',
    status: 'Aktiv',
  },
  {
    id: 25005387,
    type: 'Person',
    name: 'Luther',
    firstname: 'Gabriele',
    company: 'Nordwind AG',
    department: 'Personal',
    position: 'Teamleiter',
    supervisor: 'Wenig, Sylvia',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'gabriele.luther@nordwind.test',
    phone: '030-123456-1311',
    status: 'Aktiv',
  },
  {
    id: 25004388,
    type: 'Person',
    name: 'Wilms',
    firstname: 'Cedric',
    company: 'Nordwind AG',
    department: 'EK/M',
    position: 'Bereichsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'cedric.wilms@nordwind.test',
    phone: '030-123456-2100',
    status: 'Aktiv',
  },
  {
    id: 25004387,
    type: 'Person',
    name: 'Wenig',
    firstname: 'Sylvia',
    company: 'ACME GmbH',
    department: 'Finanzen',
    position: 'Bereichsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'sylvia.wenig@nordwind.test',
    phone: '030-123456-1400',
    status: 'Aktiv',
  },
  {
    id: 25004386,
    type: 'Person',
    name: 'Gessler',
    firstname: 'Antonio',
    company: 'ACME GmbH',
    department: 'Finanzen',
    position: 'Sachbearbeiter',
    supervisor: 'Wenig, Sylvia',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'antonio.gessler@nordwind.test',
    phone: '030-123456-1412',
    status: 'Aktiv',
  },
  {
    id: 25002386,
    type: 'Person',
    name: 'Reis',
    firstname: 'Kristof',
    company: 'Nordwind AG',
    department: 'Gebiet West',
    position: 'Vertriebsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'kristof.reis@nordwind.test',
    mobile: '0175-8471830',
    status: 'Aktiv',
  },
  {
    id: 25002385,
    type: 'Person',
    name: 'Hillmann',
    firstname: 'Danny',
    company: 'Nordwind AG',
    department: 'Gebiet Süd-Ost',
    position: 'Vertriebsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'danny.hillmann@nordwind.test',
    mobile: '0151-7475797',
    status: 'Aktiv',
  },
  {
    id: 25002379,
    type: 'Person',
    name: 'Braun',
    firstname: 'Gerlinde',
    company: 'Nordwind AG',
    department: 'EDV',
    position: 'Bereichsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'gerlinde.braun@nordwind.test',
    mobile: '030-123456-1200',
    status: 'Aktiv',
  },
  {
    id: 25002779,
    type: 'Person',
    name: 'Engelmann',
    firstname: 'Svea',
    company: 'Nordwind AG',
    department: 'Gebiet Süd-Ost',
    position: 'Vertriebsmanager',
    supervisor: 'Hillmann, Danny',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'svea.engelmann@nordwind.test',
    mobile: '0170-2475587',
    status: 'Aktiv',
  },
  {
    id: 25008657,
    type: 'Person',
    name: 'Neuhaus',
    firstname: 'Moritz',
    company: 'Nordwind AG',
    department: 'Gebiet West',
    position: 'Vertriebsmanager',
    supervisor: 'Reis, Kristof',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'moritz.neuhaus@nordwind.test',
    mobile: '0170-5408286',
    status: 'Aktiv',
  },
  {
    id: 25008496,
    type: 'Person',
    name: 'Spies',
    firstname: 'Celine',
    company: 'Nordwind AG',
    department: 'Gebiet Süd-Ost',
    position: 'Vertriebsleiter',
    supervisor: 'Taube, Gregor',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'celine.spies@nordwind.test',
    mobile: '0160-4157758',
    status: 'Aktiv',
  },
  {
    id: 25005487,
    type: 'Person',
    name: 'Kruse',
    firstname: 'Erich',
    company: 'Nordwind AG',
    department: 'Gebiet West',
    position: 'Vertriebsmanager',
    supervisor: 'Reis, Kristof',
    address: {
      addition: 'Zentrale',
      street: 'Kaiserdamm 111',
      zip: '11111',
      city: 'Berlin'
    },
    eMail: 'erich.kruse@nordwind.test',
    mobile: '0171-1384326',
    status: 'Aktiv',
  },
  {
    id: 5012,
    type: 'Filiale',
    name: '5012',
    company: 'Nordwind AG',
    department: 'Gebiet Ost',
    supervisor: 'Luke, Gregor',
    address: {
      street: 'Steinfurter Str. 111',
      zip: '13748',
      city: 'Berlin'
    },
    phone: '030-76143619',
    status: 'Eröffnet',
  },
  {
    id: 5520,
    type: 'Filiale',
    name: '5520',
    company: 'Nordwind AG',
    department: 'Gebiet Ost',
    supervisor: 'Luke, Gregor',
    address: {
      street: 'Ringelnatzstr. 112',
      zip: '06108',
      city: 'Halle'
    },
    phone: '0345-6208918',
    status: 'Eröffnet',
  },
  {
    id: 9001,
    type: 'Filiale',
    name: '9001',
    company: 'Nordwind AG',
    department: 'Gebiet West',
    supervisor: 'Neuhaus, Moritz',
    address: {
      addition: 'Nordwest Zentrum',
      street: 'Athener Str. 2-8',
      zip: '60325',
      city: 'Frankfurt am Main'
    },
    phone: '069-43611916',
    status: 'Eröffnet',
  },
  {
    id: 9524,
    type: 'Filiale',
    name: '9524',
    company: 'Nordwind AG',
    department: 'Gebiet West',
    supervisor: 'Neuhaus, Moritz',
    address: {
      street: 'Athener Str. 2-8',
      zip: '60325',
      city: 'Frankfurt am Main'
    },
    phone: '069-13488290',
    status: 'Eröffnet',
  },
];

export const fetchCustomers = (limit = 15, offset = 0, sort: Sort = { field: 'id', direction: 'asc' }): Promise<DefaultListMetadata<Customer[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [...customers];
      items.sort((a: any, b: any) => {
        return a[sort.field] as any < b[sort.field] as any ? -1 : 1
      });

      resolve({
        items: [...customers]
          .sort((a: any, b: any) => {
            let valueA: any;
            let valueB: any;

            if (sort.field === 'phone') {
              valueA = a['phone'] || a['mobile'] || '' as any;
              valueB = b['phone'] || b['mobile'] || '' as any;
            } else if (sort.field === 'address') {
              valueA = a['address']['city'] + ',' + (a['address']['addition'] || '') + a['address']['street'] || '' as any;
              valueB = b['address']['city'] + ',' + (b['address']['addition'] || '') + b['address']['street'] || '' as any;
            } else {
              valueA = a[sort.field];
              valueB = b[sort.field];  
            }

            if (sort.direction === 'asc')
              return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
            else
              return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
          })
          .slice(offset, offset + limit),
        offset,
        limit,
        totalCount: customers.length,
        sort
      })
    }, 400);
  });
};
