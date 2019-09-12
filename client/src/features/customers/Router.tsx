import React, { FunctionComponent } from 'react';
import {
  Route,
  Redirect,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';

import CustomersList from './list/Container';
import CustomersAdd from './add/Container';
import CustomersEdit from './edit/Container';

const CustomersRouter: FunctionComponent<RouteComponentProps> = props => (
  <Switch>
    <Route exact path={props.match.url} component={CustomersList}  />
    <Route path={`${props.match.url}/add`} component={CustomersAdd} />
    <Route path={`${props.match.url}/:customerId`} component={CustomersEdit} />
    <Redirect to="/" />
  </Switch>
)

export default CustomersRouter;