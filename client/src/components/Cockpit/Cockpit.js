// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';
import Layout from '../../hoc/Layout/Layout';
import WebContent from '../../containers/WebContent/WebContent';

export default class Cockpit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      maintenance: false,
    };
  }

  render() {
    return(
      <Aux>
        <Layout maintenance={this.state.maintenance}>
          <WebContent maintenance={this.state.maintenance}/>
        </Layout>
      </Aux>
    );
  }
}
