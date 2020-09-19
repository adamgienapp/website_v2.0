// Packages
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Components
import Aux from './hoc/Aux/Aux';
import Cockpit from './components/Cockpit/Cockpit';

export default class App extends Component{
  render() {
    return(
      <Aux>
        <Switch>
          <Route exact path="/" component={Cockpit} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Aux>
    );
  }
}