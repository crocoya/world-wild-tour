import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetail from '../components/country-detail/CountryDetail';
import HomePage from '../pages/HomePage';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={CountryDetail} />
      </Switch>
    </Router>
  );
}
