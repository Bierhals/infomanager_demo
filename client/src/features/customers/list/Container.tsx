import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import DefaultLayout from '../../shared/layout/DefaultLayout';
import PageHeader from '../../shared/layout/DefaultListPageHeader';
import CustomersListFilter from './Filter';
import CustomerListComponent from './List';

import {
  CustomersActionTypes,
  Filter,
  CustomersState,
} from '../../../store/customerslist/types';
import {
  fetchCustomers,
  toggleFilter,
  setFilter,
  pagePrevious,
  pageNext,
  sortField
} from '../../../store/customerslist/actions'
import { RootState } from '../../../store/types';

type Props = {
  customerslist: CustomersState,
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
    if (this.props.customerslist.showFilter)
      filterElement = (<CustomersListFilter filter={this.props.customerslist.filter} onFilterChange={this.props.onFilterChange} />);

    return (
      <DefaultLayout pageHeader={<PageHeader name="Kunden" filter={this.props.customerslist.filter} onFilterToggle={this.props.onFilterToggle} onFilterChange={this.props.onFilterChange} onPageNext={this.props.onPageNext} onPagePrevious={this.props.onPagePrevious} totalCount={this.props.customerslist.totalCount} limit={this.props.customerslist.limit} offset={this.props.customerslist.offset} />}>
        { filterElement }
        <div id="content" className="flex-grow-1">
          <CustomerListComponent customerlist={this.props.customerslist} onSortChange={this.props.onSortChange} />
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    customerslist: state.customerslist
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
