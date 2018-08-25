import React, { Component } from 'react';
import Map from './Map';
import ListPlaces from './ListPlaces';

export default class Container extends Component {

  render() {
    const { google, onChangeMarker, locationsGoogle } = this.props;

    return (
      <div>
        <main role="presentation" aria-label="Map of favourite places in Osijek" className="main-container">
          <Map google={google} onChangeMarker={onChangeMarker} />
        </main>
          <ListPlaces locationsGoogle={locationsGoogle} />
      </div>
    )
  }
}