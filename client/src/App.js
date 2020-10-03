// Packages
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Components
import Aux from './hoc/Aux/Aux';
import Cockpit from './components/Cockpit/Cockpit';

export default class App extends Component{
  componentDidMount() {
    const imgURLs = ["https://i.imgur.com/Sc7qASD.gif", "/assets/img/sdc_1.svg", "/assets/img/sdc_2.svg", "/assets/img/sdc_3.svg", "/assets/img/scratchtrack_demo.gif", "/assets/img/DK53A3i4.jpeg", "/assets/img/portfolioV2.png", "/assets/img/portfolioV1.gif"];
    imgURLs.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }

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