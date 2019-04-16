import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import CustomersContainer from './customers/customersContainer';
import AssetsContainer from './assets/assetsContainer';
import IssuesContainer from './issues/issuesContainer';
import { configureStore } from './store';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route path="/customers" component={CustomersContainer} />
            <Route path="/assets" component={AssetsContainer} />
            <Route path="/issues" component={IssuesContainer} />
            <Redirect to="/customers" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
