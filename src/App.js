import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import Container from './Container';
import Nav from './Nav';
import * as places from './places';

//Handling when  Google's API have any Problem on the request
document.addEventListener("DOMContentLoaded", function(e) {
  let googleScript = document.getElementsByTagName('SCRIPT').item(1);
  googleScript.onerror = function(e) {
    console.log('Ops! We cant access Google Maps API for now!')
    let container = document.querySelector('map-container');
    let message = document.createElement('div');
    message.innerHTML = '<div class="error-msg">Sorry, we can not access to Google Maps API right now! Please try again later</div>'
    container.appendChild(message)
  }
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationsGoogle: []
    }
    this.markersGoogle = [];
    this.onChangeMarker = this.onChangeMarker.bind(this);
    this.handleQuery = this.handleQuery.bind(this);

  }

  onChangeMarker(marker) {
    this.markersGoogle.push(marker);

    if(this.markersGoogle.length === places.locations.length) {
     this.setState({locationsGoogle: this.markersGoogle})
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/setVisible
  handleQuery(query) {
    let result = this.state.locationsGoogle.map( location => {
      let matched = location.props.title.toLowerCase().indexOf(query) === 0;
      if (location.marker) {
        location.marker.setVisible(matched);
      }
      console.log(location);
      return location;
    })
    
    this.setState({ locationsGoogle: result })
    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <Nav handleQuery={this.handleQuery} />
        <Container google={this.props.google} 
          onChangeMarker={this.onChangeMarker}
          locationsGoogle={this.state.locationsGoogle}
        />
      </div>
    );
  }
}

// API key from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
export default GoogleApiWrapper({
  apiKey: 'AIzaSyARC-a63vxOWRRAgpjnDYOndn_2fFLYhAo',
})(App)
  
 