import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
 componentDidMount() {
    this.loadMap();
  }

  constructor(props) {
    super(props)
    this.places =    [
        {title: 'Zoo', location: {lat: 45.568721, lng: 18.667556}}, 
        {title: 'Mall', location: {lat: 45.546505,  lng: 18.656361  }},
        {title: 'Muzej okusa', location: {lat: 45.548297,  lng: 18.695243 }},
        {title: 'Kopika', location: {lat: 45.565273,  lng: 18.697384 }},
        {title: 'Old Bridge Pub', location: {lat: 45.559959,  lng: 18.697492 }}

    ]
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const mapConfig = Object.assign({}, {
        center: {lat: 45.5549624, lng: 18.6955144}, 
        zoom: 14
      })

      this.map = new maps.Map(node, mapConfig);

      this.places.forEach( place => { 
        const marker = new google.maps.Marker({
          position: {lat: place.location.lat, lng: place.location.lng}, 
          map: this.map, 
          title: place.name,
          animation: google.maps.Animation.DROP
        });        
      })

  }
}

render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }
        return (
            <div ref='map' className="map-container" style={style}>
                Loading map...
            </div>
        )
    }
}

export default Map;
