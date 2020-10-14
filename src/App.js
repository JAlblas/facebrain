import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'f803d879151f418d8b8cc694f77b5685'
});

class App extends Component {
  
    constructor() {
      super();
      this.state = {
        input: '',
        imageUrl: ''
      }
    }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
        function(response) {
          // do something with response
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          // there was an error
          console.log(err);
        }
      );
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
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
      );
    }
}

export default App;
