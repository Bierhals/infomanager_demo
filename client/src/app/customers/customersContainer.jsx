import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import LayoutHOC from '../layout/layout.hoc';
import ListComponent from './list/listComponent';
import AddComponent from './add/addComponent';

type Props = {
  match: {
    path: string
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class CustomersContainer extends Component<Props> {
  render() {
    const { match: { path } } = this.props;
    return (
      <Switch>
        <Route path={`${path}/`} exact component={ListComponent} />
        <Route path={`${path}/add`} exact component={AddComponent} />
        <Redirect to={`${path}/`} />
      </Switch>
    );
  }
}

export default LayoutHOC(CustomersContainer);
