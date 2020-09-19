// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';

export default class WebContent extends Component{

  render() {
    return (
      <Aux>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </Aux>
    );
  }
}