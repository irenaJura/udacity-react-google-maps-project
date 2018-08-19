import React, { Component } from 'react';
import {Map, Marker} from 'google-maps-react';

export default class Container extends Component {

  render() {
      const city = { lat: 45.555422, lng: 18.69539 };

      const locations = [
        {title: 'Zoo', location: {lat: 45.568721, lng: 18.667556}}, 
        {title: 'Mall', location: {lat: 45.546505,  lng: 18.656361  }},
        {title: 'Muzej okusa', location: {lat: 45.548297,  lng: 18.695243 }},
        {title: 'Kopika', location: {lat: 45.565273,  lng: 18.697384 }},
        {title: 'Old Bridge Pub', location: {lat: 45.559959,  lng: 18.697492 }}
      ];

      return (
        <div>
          <Map google={this.props.google} initialCenter={city} zoom={14}>
            {locations.map( (location, index) => (
                <Marker key={index} title={'Marker info'} position={location.location} />
            ))}
          </Map>
        </div>
      )
  }
}