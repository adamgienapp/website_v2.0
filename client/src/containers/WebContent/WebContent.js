// Packages
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
//Components
import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
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
          <FadeIn>
            <div className="loader"></div>
          </FadeIn>
        </div>
        :
        <Aux>
          <Header />
          {this.props.maintenance ?
            <Maintenance/>
            :
            <Aux>
              <About />
              <Projects />
              <Resume />
              <ContactContainer />
              <Footer />
            </Aux>
          }
        </Aux>
      }
      </Aux>
    );
  }
}