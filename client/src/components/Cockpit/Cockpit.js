// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';

export default class Cockpit extends Component{
  render() {
    return(
      <Aux>
        <Layout>
          <WebContent />
        </Layout>
      </Aux>
    );
  }
}