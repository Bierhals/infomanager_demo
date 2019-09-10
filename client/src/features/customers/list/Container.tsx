import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import PageHeader from '../../shared/layout/DefaultListPageHeader';
import CustomersListFilter from './Filter';
import CustomerListComponent from './List';

import {
  CustomersActionTypes,
  CustomerShop,
  CustomerPerson,
  Filter,
} from '../../../store/customers/types';
import {
  fetchCustomers,
  toggleFilter,
  setFilter,
} from '../../../store/customers/actions'
import { RootState } from '../../../store/types';

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
  toggleFilter: () => void,
  setFilter: (filter: Filter) => void,
};

class CustomersListContainer extends Component<Props> {
  componentDidMount() {
    const { loadCustomers } = this.props;
    loadCustomers();
  }

  render() {
    let filterElement;
    if (this.props.customerlist.showFilter)
      filterElement = (<CustomersListFilter filter={this.props.customerlist.filter} setFilter={this.props.setFilter} />);

    return (
      <DefaultLayout pageHeader={<PageHeader name="Kunden" filter={this.props.customerlist.filter} toggleFilter={this.props.toggleFilter} setFilter={this.props.setFilter} />}>
        { filterElement }
        <div id="content" className="flex-grow-1">
          <CustomerListComponent loadCustomers={this.props.loadCustomers} customerlist={this.props.customerlist} />
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    customerlist: state.customers.customerlist
  };
}

function mapDispatchToProps(dispatch: Dispatch<CustomersActionTypes>) {
  return {
    loadCustomers: () => dispatch(fetchCustomers()),
    toggleFilter: () => dispatch(toggleFilter()),
    setFilter: (filter: Filter) => dispatch(setFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersListContainer);
