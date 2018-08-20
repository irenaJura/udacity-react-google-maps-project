import { Component } from 'react';

class Marker extends Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }

  renderMarker() {
      if (this.marker) {
        this.marker.setMap(null);
      }

      let { map, google, position } = this.props;
      
      let pos = position;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const setMarker = {
        map: map,
        position: position,
        animation: google.maps.Animation.DROP
      };
      this.marker = new google.maps.Marker(setMarker);
  }

  render() {
    return null;
   
  }
}

export default Marker;