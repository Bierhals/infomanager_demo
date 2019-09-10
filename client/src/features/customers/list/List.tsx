import React, { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {
  CustomerShop,
  CustomerPerson,
  Filter,
} from '../../../store/customers/types';

const styles = {
  th_pointer: {
    cursor: "pointer"
  }
}

type Props = {
  customerlist: {
    readonly data: (CustomerPerson | CustomerShop)[],
    readonly showFilter: boolean,
    readonly filter: Filter
  },
  loadCustomers: () => void,
};

const CustomersListComponent: FunctionComponent<Props> = props => {
  const customerName = (item: CustomerPerson | CustomerShop): string => {
    let name = item.name;
    if (item.type === 'Person') {
      const itemP = item as CustomerPerson;
      if (itemP.firstname)
        name = name + ", " + itemP.firstname;
    }

    return name;
  }

  const customerPhone = (item: CustomerPerson | CustomerShop): string => {
    let phone = '';
    if (item.phone)
      phone = item.phone;
    else if (item.mobile)
      phone = item.mobile;

    return phone;
  }

  const customerAddress = (item: CustomerPerson | CustomerShop): string => {
    let address = '';
    if (item.address) {
      address = item.address.city;
      if (item.address.addition)
        address = address + ', ' + item.address.addition;
      else
        address = address + ', ' + item.address.street;
    }

    return address;
  }

  return (
    <Table striped bordered hover responsive className="mb-0">
      <thead className="table-dark bg-primary text-nowrap">
        <tr>
          <th style={styles.th_pointer}># <i className="fas fa-sort-up"></i></th>
          <th style={styles.th_pointer}>Name <i className="fas fa-sort"></i></th>
          <th style={styles.th_pointer}>Firma <i className="fas fa-sort"></i></th>
          <th style={styles.th_pointer}>Abteilung <i className="fas fa-sort"></i></th>
          <th style={styles.th_pointer}>Adresse <i className="fas fa-sort"></i></th>
          <th style={styles.th_pointer}>Telefon <i className="fas fa-sort"></i></th>
        </tr>
      </thead>
      <tbody className="text-nowrap">
        {props.customerlist.data.map((customer) =>
          <tr key={customer.id}>
            <td>
              <Link to={'/customers/' + customer.id.toString()}>
                {customer.id}
              </Link>
            </td>
            <td>{customerName(customer)}</td>
            <td>{customer.company}</td>
            <td>{customer.department}</td>
            <td>{customerAddress(customer)}</td>
            <td>{customerPhone(customer)}</td>
          </tr>
        )}
      </tbody>
    </Table>)
}

export default CustomersListComponent;
