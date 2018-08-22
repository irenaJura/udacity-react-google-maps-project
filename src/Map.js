import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Marker from './Marker';
import * as places from './places';

class Map extends Component {

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
    }
    
    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const divMapElement = ReactDOM.findDOMNode(mapRef);

            const { lat, lng } = places.city;
            const center = new maps.LatLng(lat, lng);
            const mapObj = Object.assign({}, {
              center: center,
              zoom: 13
            })
                    
            this.map = new maps.Map(divMapElement, mapObj);
            // set bounds
            this.bounds = new google.maps.LatLngBounds();
            // infowindow pop up
            this.infoWindow = new google.maps.InfoWindow();
            this.forceUpdate();
        }
    }

    render() {
        const style = { width: '100vw', height: '85vh' }
        const { onChangeMarker } = this.props;
        return (
            <div ref='map' className="map-container" style={style}>
                Loading map...
                {places.locations.map( (location, index) => (
                    <Marker key={index} 
                        google={this.props.google}
                        map={this.map}
                        title={location.title}
                        position={location.location}
                        bounds={this.bounds}
                        infoWindow={this.infoWindow}
                        onChangeMarker={onChangeMarker}
                     />
                ))}
            </div>
        )
    }
}

export default Map;