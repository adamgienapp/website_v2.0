// Packages
import React, { Component } from 'react';
//Components
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import Resume from '../../components/Resume/Resume';
import ContactContainer from '../ContactContainer/ContactContainer';
import Footer from '../../components/Footer/Footer';
import Maintenance from '../../components/Maintenance/Maintenance';

export default class WebContent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      img1Loaded: false,
      img2Loaded: false,
      loading: true,
    };
  }

  componentDidMount() {
    const images = ['/assets/img/bg1.jpg', '/assets/img/bg2.jpg'];
    const [ img1, img2 ] = [ new Image(), new Image() ];
    [ img1.src, img2.src ] = [ images[0], images[1] ];
    img1.onload = () => {
      this.setState({
        img1Loaded: true
      }, () => {
        if (this.state.img2Loaded) {
          this.setState({
            loading: false,
          });
        }
      });
    }
    img2.onload = () => {
      this.setState({
        img2Loaded: true
      }, () => {
        if (this.state.img1Loaded) {
          this.setState({
            loading: false,
          });
        }
      });
    }
  }

  render() {
    return (
      <Aux>
      {this.state.loading ?
        <div className="container">
          <div className="fade-in">
            <div className="loader"></div>
          </div>
        </div>
        :
        <main>
          <Header />
          {this.props.maintenance ?
            <Maintenance/>
            :
            <Aux>
              <About />
              <ProjectsContainer />
              <Resume />
              <ContactContainer />
              <Footer />
            </Aux>
          }
        </main>
      }
      </Aux>
    );
  }
}