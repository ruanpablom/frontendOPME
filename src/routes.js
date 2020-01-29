import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/Users';
import Details from './pages/Details';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
