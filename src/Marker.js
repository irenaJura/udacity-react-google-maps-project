import React, { Component } from 'react';

class Marker extends Component {

    componentDidMount() {
        this.renderMarker();
      }

      renderMarker() {
          let { map, google, position, mapCenter } = this.props;
          let defaultIcon = this.makeMarkerIcon('0091ff');
          let pos = position;
          position = new google.maps.LatLng(pos.lat, pos.lng);

         const markerObj = { position: position, icon: defaultIcon };
         this.marker = new google.maps.Marker(markerObj);
      }
      
      makeMarkerIcon(markerColor) {
        const markerImage = new this.props.google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'
        + markerColor +'|40|_|%E2%80%A2',
        return markerImage;
      }

      render() {
        return null;
       
      }
}

export default Marker;
