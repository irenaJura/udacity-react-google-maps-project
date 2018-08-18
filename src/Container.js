import React, { Component } from 'react';
import Map from './Map';

export default class Container extends Component {

  render() {
   const style = { width: '100vw', height: '100vh', margin: '0 auto' }

    return (
      <div ref="map" style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}