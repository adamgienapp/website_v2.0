import React, { Component } from 'react';

import classes from './ProjectsContainer.css';
import Projects from '../../components/Projects/Projects';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';


export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: false,
      fec: {
        title: 'All Day I Dream About Servers',
        image: 'https://i.imgur.com/Sc7qASD.gif',
        blurb: (
          <ul>
            <li>A mockup of adidas' product detail page</li>
            <li>Created the 'Ratings &amp; Reviews' microservice using React, Node/Express, and MySQL</li>
            <li>Created a seed script to generate simulated product review data</li>
            <li>Utilized service-oriented architecture, built a proxy server to merge all 4 micro services into one cohesive web app</li>
          </ul>
        ),
        link: null,
        github: null,
      },
      sdc: {
        title: 'REI Search Bar System Design',
        image: ['/assets/img/sdc_1.svg', '/assets/img/sdc_2.svg', '/assets/img/sdc_3.svg'],
        blurb: (
          <ul>
            <li></li>
          </ul>
        ),
        link: null,
        github: null,
      },
      scratchTrack: {
        title: 'ScratchTrack Web App',
        image: '/assets/img/scratchtrack_demo.gif',
        blurb: (
          <ul>
            <li>Fully owned web app development, built from provided UI mockups and feature specifications</li>
            <li>Web companion to the mobile app - allows users to access song library, perform account maintenance</li>
            <li>Integrated existing Firebase back end to handle authentication, storage, and hosting</li>
            <li>Notable features: responsive layout, smooth loading, and a scratch-built media player</li>
          </ul>
        ),
        link: "https://scratchtrack.co",
        github: null,
      },
      portfolioV1: {
        title: 'Portfolio Website v1',
        image: null,
        blurb: (
          <ul>
            <li></li>
          </ul>
        ),
        link: null,
        github: null,
      },
      portfolioV2: {
        title: 'Portfolio Website v2',
        image: null,
        blurb: (
          <ul>
            <li></li>
          </ul>
        ),
        link: null,
        github: null,
      },
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