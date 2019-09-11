import React, { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faSort,
  faSortUp,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';

import {
  Customer,
  CustomerPerson,
  CustomerShop,
  Filter,
} from '../../../store/customers/types';
import {
  Sort
} from '../../../store/shared/types';

const styles = {
  th_pointer: {
    cursor: "pointer"
  }
}

type Props = {
  customerlist: {
    readonly items: Customer[],
    readonly showFilter: boolean,
    readonly filter: Filter,
    readonly loading: boolean,
    readonly sort: Sort
  },
  sortField: (field: string) => void,
};

const CustomersListComponent: FunctionComponent<Props> = props => {
  const customerName = (item: Customer): string => {
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

  const TableRows = () => {
    if (props.customerlist.loading) {
      return (
        <tr>
          <td colSpan={7} className="text-center">
            <h1><FontAwesomeIcon icon={faSpinner} spin /></h1>
          </td>
        </tr>
      )
    } else {
      return (
        <>
          {props.customerlist.items.map((customer) =>
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
              <td>{customer.status}</td>
            </tr>
          )}
        </>
      )
    }
  }

  const handleHeaderClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    event.preventDefault();

    props.sortField(event.currentTarget.title);
  }

  const ColumnHeader = (name: string, field: string) => {
    let sortIcon = faSort;

    if (field === props.customerlist.sort.field) {
      if (props.customerlist.sort.direction === 'asc')
        sortIcon = faSortUp;
      else 
        sortIcon = faSortDown;
    }

    return (
      <th title={field} style={styles.th_pointer} onClick={handleHeaderClick}>
        {name}&nbsp;
        <FontAwesomeIcon icon={sortIcon} />
      </th>
    );
  }

  return (
    <Table striped bordered hover responsive className="mb-0">
      <thead className="table-dark bg-primary text-nowrap">
        <tr>
          {ColumnHeader('#','id')}
          {ColumnHeader('Name', 'name')}
          {ColumnHeader('Firma', 'company')}
          {ColumnHeader('Abteilung', 'department')}
          {ColumnHeader('Adresse', 'address')}
          {ColumnHeader('Telefon', 'phone')}
          {ColumnHeader('Status', 'status')}
        </tr>
      </thead>
      <tbody className="text-nowrap">
        <TableRows />
      </tbody>
    </Table>)
}

export default CustomersListComponent;
