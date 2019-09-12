import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import CustomersRouter from './features/customers/Router';
import Home from './features/home/Home';
import AssetList from './features/assets/AssetList';
import { configureStore } from './store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/customers" component={CustomersRouter} />
          <Route path="/inventory" component={AssetList} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
