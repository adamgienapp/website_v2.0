// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layout/Layout';
import WebContent from '../../containers/WebContent/WebContent';

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