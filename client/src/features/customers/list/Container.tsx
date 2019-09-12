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
    readonly limit: number,
  },
  onFetchCustomers: () => void,
  onFilterToggle: () => void,
  onFilterChange: (filter: Filter) => void,
  onPagePrevious: () => void,
  onPageNext: () => void,
  onSortChange: (field: string) => void,
};

class CustomersListContainer extends Component<Props> {
  componentDidMount() {
    this.props.onFetchCustomers();
  }

  render() {
    let filterElement;
    if (this.props.customerlist.showFilter)
      filterElement = (<CustomersListFilter filter={this.props.customerlist.filter} onFilterChange={this.props.onFilterChange} />);

    return (
      <DefaultLayout pageHeader={<PageHeader name="Kunden" filter={this.props.customerlist.filter} onFilterToggle={this.props.onFilterToggle} onFilterChange={this.props.onFilterChange} onPageNext={this.props.onPageNext} onPagePrevious={this.props.onPagePrevious} totalCount={this.props.customerlist.totalCount} limit={this.props.customerlist.limit} offset={this.props.customerlist.offset} />}>
        { filterElement }
        <div id="content" className="flex-grow-1">
          <CustomerListComponent customerlist={this.props.customerlist} onSortChange={this.props.onSortChange} />
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
    onFetchCustomers: () => dispatch(fetchCustomers()),
    onFilterToggle: () => dispatch(toggleFilter()),
    onFilterChange: (filter: Filter) => dispatch(setFilter(filter)),
    onPagePrevious: () => dispatch(pagePrevious()),
    onPageNext: () => dispatch(pageNext()),
    onSortChange: (field: string) => dispatch(sortField(field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersListContainer);
