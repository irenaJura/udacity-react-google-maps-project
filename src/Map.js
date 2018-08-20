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
            this.forceUpdate();
        }
    }

    render() {
        const style = { width: '100vw', height: '100vh' }
         
        return (
            <div ref='map' className="map-container" style={style}>
                Loading map...
                {places.locations.map( (location, index) => (
                    <Marker key={index} 
                        google={this.props.google}
                        map={this.map}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={location.location}
                     />
                ))}
            </div>
        )
    }
}

export default Map;