import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryPage from '../pages/CountryPage';
import HomePage from '../pages/HomePage';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/countries/:name" component={CountryPage} />
      </Switch>
    </Router>
  );
}
