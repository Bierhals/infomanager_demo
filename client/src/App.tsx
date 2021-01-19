import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import CustomersRouter from './features/customers/Router';
import Home from './features/home/Home';
import AssetList from './features/assets/AssetList';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" component={CustomersRouter} />
        <Route path="/inventory" component={AssetList} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
