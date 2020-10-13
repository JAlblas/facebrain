import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';

class App extends Component {
  
    constructor() {
      super();
      this.state = {
        input: ''
      }
    }

    onInputChange = (event) => {
      console.log(event.target.value);
    }

    onButtonSubmit = () => {
      console.log('submit');
    }

    render() {
      return (
        <div className="App">
          <Particles className='particles'
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 5
                  }
                }, 
                number: {
                  value: 25,
                  density: {
                    enable: true,
                    value_area: 500
                  }
                }
              }
            }}
            />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          {/*
          <FaceRecognition />*/}
        </div>
      );
    }
}

export default App;
