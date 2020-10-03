import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import classes from './ProjectsContainer.css';
import Projects from '../../components/Projects/Projects';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';


export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: false,
      projects: [
        {
          title: 'ScratchTrack Web App',
          blurb: 'A web companion to the mobile app',
          image: '/assets/img/scratchtrack_demo.gif',
          stack: 'React, SASS, Firebase',
          info: (
            <ul className="list-spacing">
              <li>A web companion to the mobile app - allows users to access song library and perform account maintenance</li>
              <li>Fully owned web app development, built from provided UI mockups and feature specifications</li>
              <li>Integrated existing Firebase back end to handle authentication, storage, and hosting</li>
              <li>Notable features: responsive layout, scratch-built media player</li>
            </ul>
          ),
          link: "https://scratchtrack.co",
          github: null,
        },
        {
          title: 'REI Search Bar System Design',
          blurb: 'Web-scaling a search bar microservice',
          image: ['/assets/img/sdc_1.svg', '/assets/img/sdc_2.svg', '/assets/img/sdc_3.svg'],
          stack: 'React, Node, MongoDB, PostgreSQL, Nginx, AWS EC2, Loader.io',
          info: (
            <ul className="list-spacing">
              <li>Redesigned and scaled the back end of a pre-existing search bar microservice</li>
              <li>Modelled application data in PostgreSQL, utilized GIN indexing to reduce query time in a data pool of 10M entries (worst-case latency reduced from 31s to 2s)</li>
              <li>Horizontally scaled to 4 EC2 micro instances behind a Nginx load balancer to increase throughput from 750 RPS to 3750 RPS with an average latency of 71ms and 0.1% error rate</li>
            </ul>
          ),
          link: null,
          github: "https://github.com/10-Million-Dog-Goggles/search-bar-service",
        },
        {
          title: 'All Day I Dream About Servers',
          blurb: "A mockup of adidas' product detail page",
          image: 'https://i.imgur.com/Sc7qASD.gif',
          stack: 'React, Node, MySQL, Jest + Enzyme, CircleCI',
          info: (
            <ul className="list-spacing">
              <li>A mockup of adidas' product detail page</li>
              <li>Created the 'Ratings &amp; Reviews' microservice using React, Node/Express, and MySQL</li>
              <li>Utilized service-oriented architecture, built a proxy server to merge all 4 micro services into one cohesive web app</li>
              <li>Continuous integration testing accomplished using Jest/Enzyme and CircleCI</li>
            </ul>
          ),
          link: "http://3.101.29.112/1/",
          github: "https://github.com/All-Day-I-Dream-About-Servers/review-service",
        },
        {
          title: 'Portfolio v2',
          blurb: 'A ground-up redesign of my portfolio website',
          image: '/assets/img/portfolioV2.png',
          stack: 'React, Nodemailer, Firebase',
          info: (
            <ul className="list-spacing">
              <li>A ground-up redesign of my portfolio website</li>
              <li>Changed from pagination to scroll, and removed use of superfluous frameworks (e.g. Bootstrap, jQuery)</li>
              <li>Built with React, vanilla JS, and CSS3, hosted on Firebase</li>
              <li>Email forwarding accomplished using Nodemailer and Firebase Cloud Functions</li>
            </ul>
          ),
          link: null,
          github: "https://github.com/adamgienapp/website_v2.0",
        },
        {
          title: 'Portfolio v1',
          blurb: 'The initial build of my portfolio website',
          image: '/assets/img/portfolioV1.gif',
          stack: 'React, Bootstrap, Nodemailer, Firebase',
          info: (
            <ul className="list-spacing">
              <li>The initial build of my portfolio website</li>
              <li>A self-motivated opportunity for continued learning: first exposures to React Router, Bootstrap, and Nodemailer</li>
              <li>Built using React, Bootstrap and CSS3, hosted on AWS</li>
              <li>Email forwarding accomplished with Nodemailer</li>
            </ul>
          ),
          link: "https://adamgienapp.github.io/",
          github: "https://github.com/adamgienapp/website_v1.0",
        }
      ],
      detail: {
        title: null,
        image: null,
        info: null,
        link: null,
        github: null,
      },
    };

    this.shiftHandler = this.shiftHandler.bind(this);
    this.setDetail = this.setDetail.bind(this);
  }

  shiftHandler() {
    const element = document.getElementById("projects");
    const y = element.getBoundingClientRect().top + window.pageYOffset - 50;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
    this.setState((prevState) => {
      return {
        shift: !prevState.shift,
      }
    });
  }

  setDetail(data) {
    if (this.state.shift) {
      setTimeout(() => {
        this.setState({
          detail: data,
        });
      }, 300);
    } else {
      this.setState({
        detail: data,
      });
    }

    this.shiftHandler();
  }

  render() {
    smoothscroll.polyfill();

    return (
      <section id="projects"
        className={classes.ProjectsContainer}
        style={{ transform: this.state.shift ? 'translateX(-100vw)' : 'translateX(0)' }}>
        <Projects projects={this.state.projects} clicked={this.setDetail} />
        <ProjectDetail data={this.state.detail} shift={this.setDetail} />
      </section>
    );
  }
}