import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
constructor(props) {
	super(props)
}

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

        let zoom = 13;
        const center = new maps.LatLng(lat, lng);

        // make an object with map settings
        const mapObj = Object.assign({}, {
          center: center,
          zoom: zoom
        })

        this.map = new maps.Map(divMapElement, mapObj);
         
    }
}

render() {
    const style = { width: '100vw', height: '100vh' }
    return (
        <div ref='map' className="map-container" style={style}>
            Loading map...
        </div>
    )
    }
}

export default Map;
