import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  Auth,
  Registration,
} from '../../../pages';

const history = createBrowserHistory();
const Routs = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route exact path="/sign-in" component={Auth} />
      <Route exact path="/sign-up" component={Registration} />
    </Switch>
  </Router>
);
export default Routs;
