import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import PageHeader from '../../shared/layout/DefaultListPageHeader';
import CustomersListFilter from './Filter';
import CustomerListComponent from './List';

import {
  CustomersActionTypes,
  Customer,
  Filter,
} from '../../../store/customers/types';
import {
  fetchCustomers,
  toggleFilter,
  setFilter,
  pagePrevious,
  pageNext,
  sortField
} from '../../../store/customers/actions'
import {
  Sort
} from '../../../store/shared/types';
import { RootState } from '../../../store/types';

type Props = {
  customerlist: {
    readonly items: Customer[],
    readonly loading: boolean,
    readonly showFilter: boolean,
    readonly filter: Filter
    readonly totalCount: number,
    readonly offset: number,
    readonly sort: Sort,
    readonly limit: number,  },
  fetchCustomers: () => void,
  toggleFilter: () => void,
  setFilter: (filter: Filter) => void,
  pagePrevious: () => void,
  pageNext: () => void,
  sortField: (field: string) => void,
};

class CustomersListContainer extends Component<Props> {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    let filterElement;
    if (this.props.customerlist.showFilter)
      filterElement = (<CustomersListFilter filter={this.props.customerlist.filter} setFilter={this.props.setFilter} />);

    return (
      <DefaultLayout pageHeader={<PageHeader name="Kunden" filter={this.props.customerlist.filter} toggleFilter={this.props.toggleFilter} setFilter={this.props.setFilter} pageNext={this.props.pageNext} pagePrevious={this.props.pagePrevious} totalCount={this.props.customerlist.totalCount} limit={this.props.customerlist.limit} offset={this.props.customerlist.offset} />}>
        { filterElement }
        <div id="content" className="flex-grow-1">
          <CustomerListComponent customerlist={this.props.customerlist} sortField={this.props.sortField} />
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
    fetchCustomers: () => dispatch(fetchCustomers()),
    toggleFilter: () => dispatch(toggleFilter()),
    setFilter: (filter: Filter) => dispatch(setFilter(filter)),
    pagePrevious: () => dispatch(pagePrevious()),
    pageNext: () => dispatch(pageNext()),
    sortField: (field: string) => dispatch(sortField(field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersListContainer);
