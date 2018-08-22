import React, { Component } from 'react'

class ListPlaces extends Component {
    closeList() {
        let listPlaces = document.getElementsByTagName('aside');
        listPlaces[0].classList.remove('show')
    }

    setMarker(place) {
        place.showInfoWindow(place.marker, place.props.infoWindow)
    }

    render() {
        const { locationsGoogle } = this.props;
        console.log(locationsGoogle);

        return (
            <aside className="list-box" >
                <button id="close-btn" className="close-list-box-btn" onClick={() => this.closeList()}>
                    Close X
                </button>
                <div className="list-box-content">
                    <ul id="list-of-places">
                        {locationsGoogle.filter(location => location.marker.visible === true).map((location, index) => (
                            <li key={index} onClick={(e) => this.setMarker(location)}>{location.props.title} </li>
                        ))}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListPlaces;