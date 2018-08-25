import React, { Component } from 'react'

class ListPlaces extends Component {

    closeList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.remove('show')
    }

    setMarker(place) {
        place.showInfoWindow(place.marker, place.props.infoWindow)
    }

    handlerKeyPress(event, location) {
        if (event.key === " " || event.key === "Enter") {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            this.setMarker(location);
        }
    }

    render() {
        const { locationsGoogle } = this.props;

        return (
            <aside className="list-box" >
                <button aria-label="Close button of the filter list"  id="close-btn" onClick={() => this.closeList()}>
                    CLOSE X
                </button>
                <div className="list-box-content">
                    <ul tabIndex="0" role="tablist" aria-label="List of favorites places" id="list-of-places">
                        {locationsGoogle.filter( location => location.marker.visible === true).map((location, index) => (
                            <li tabIndex="0" 
                                role="button" 
                                key={index} 
                                onKeyPress={(event) => this.handlerKeyPress(event, location)} 
                                onClick={(e) => this.setMarker(location)}> 
                                {location.props.title} 
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListPlaces;