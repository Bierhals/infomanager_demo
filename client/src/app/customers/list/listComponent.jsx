import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Input,
  FormGroup,
} from 'reactstrap';

import { getCustomers } from '../store/actions';

type Props = {
  onLoadCustomers: () => void,
};

class ListComponent extends Component<Props> {
  componentDidMount() {
    const { onLoadCustomers } = this.props;
    onLoadCustomers();
  }

  render() {
    return (
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <h3>Kundenliste</h3>
          <Table responsive size="sm" hover>
            <thead>
              <tr>
                <th>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                  </FormGroup>
                </th>
                <th>Typ</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                  </FormGroup>
                </td>
                <td>Mitarbeiter</td>
                <td>Bierhals, Sven-Uwe</td>
                <td>Aktiv</td>
              </tr>
              <tr>
                <td>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                  </FormGroup>
                </td>
                <td>Mitarbeiter</td>
                <td>Doe, Johm</td>
                <td>Inaktiv</td>
              </tr>
              <tr>
                <td>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                  </FormGroup>
                </td>
                <td>Filiale</td>
                <td>5012 Berlin, Turmstr. 9</td>
                <td>Aktiv</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="p-2">
          <h3>Filter</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Email address
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </label>
            <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customerlist: state.customers.customerlist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadCustomers: () => dispatch(getCustomers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
