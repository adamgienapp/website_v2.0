// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Resume from '../../components/Resume/Resume';
import Contact from '../../components/Contact/Contact';

export default class WebContent extends Component{

  render() {
    return (
      <Aux>
        <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </Aux>
    );
  }
}