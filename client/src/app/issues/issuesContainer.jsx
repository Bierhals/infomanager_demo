import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import LayoutHOC from '../layout/layout.hoc';
import ListComponent from './list/listComponent';

type Props = {
  match: {
    path: string
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class IssuesContainer extends Component<Props> {
  render() {
    const { match: { path } } = this.props;
    return (
      <Switch>
        <Route path={`${path}/`} exact component={ListComponent} />
        <Redirect to={`${path}/`} />
      </Switch>
    );
  }
}

export default LayoutHOC(IssuesContainer);
