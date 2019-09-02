import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import CustomersList from './features/customers/list/CustomersList';
import Home from './features/home/Home';
import AssetList from './features/assets/AssetList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" component={CustomersList} />
        <Route path="/inventory" component={AssetList} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
