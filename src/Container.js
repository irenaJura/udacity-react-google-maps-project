import React, { Component } from 'react';
import Map from './Map';

export default class Container extends Component {
  render() {
    return (
      <main className="main-container">
        <Map google={this.props.google} />
      </main>
    )
  }
}