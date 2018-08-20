import React, { Component } from 'react';
import Map from './Map';

export default class MapContainer extends Component {
  render() {
    return (
      <main className="main-container">
        <Map google={this.props.google} />
      </main>
    )
  }
}