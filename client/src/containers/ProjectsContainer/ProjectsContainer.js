import React, { Component } from 'react';

import classes from './ProjectsContainer.css';
import Projects from '../../components/Projects/Projects';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';


export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: false,
    };

    this.shiftHandler = this.shiftHandler.bind(this);
  }

  shiftHandler() {
    this.setState((prevState) => {
      return {
        shift: !prevState.shift,
      }
    });
  }

  render() {
    return (
      <section id="projects"
        className={classes.ProjectsContainer}
        style={{ transform: this.state.shift ? 'translateX(-100vw)' : 'translateX(0)' }}>
        <Projects shift={this.shiftHandler} />
        <ProjectDetail shift={this.shiftHandler} />
      </section>
    );
  }
}