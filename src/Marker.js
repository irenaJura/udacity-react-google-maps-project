import { Component } from 'react';
import './App.css';

class Marker extends Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }

  renderMarker() {
      if (this.marker) {
        this.marker.setMap(null);
      }

      let { map, google, position, bounds, infoWindow } = this.props;
      
      let pos = position;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const setMarker = {
        map: map,
        position: position,
        animation: google.maps.Animation.DROP
      };
      this.marker = new google.maps.Marker(setMarker);
      const marker = this.marker;
      // on click event handler for info window 
      let self = this;
      marker.addListener('click', function() {
        self.showInfoWindow(this, infoWindow);
      });

      bounds.extend(marker.position);
      map.fitBounds(bounds); 
  }

  showInfoWindow(marker, infowindow) {
    if (infowindow.marker !== marker) {
      let { map, google, title, bounds } = this.props;
  
      marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 600);

  
      infowindow.setContent('Loading');

        // fetch info from Foursquare API
        let placeID = null;
        let tipList = null;
        fetch(`https://api.foursquare.com/v2/venues/search?ll=45.555422,18.69539&v=20180518&query=${title}&limit=1&client_id=QXAZZTUZGR0IZ1I1VBUQIXJWWVQSX43HND5TNR25IXWGNS4N&client_secret=I0RPLG3XJILJMPF4BFMCAULOPYI5EJWP5UUCO2VIKBSKNRDP`)
            .then(response => response.json())
            .then(data => {
              console.log(data.response);
              placeID = data.response.venues[0].id;
              return fetch(`https://api.foursquare.com/v2/venues/${placeID}/tips?v=20180518&limit=4&client_id=QXAZZTUZGR0IZ1I1VBUQIXJWWVQSX43HND5TNR25IXWGNS4N&client_secret=I0RPLG3XJILJMPF4BFMCAULOPYI5EJWP5UUCO2VIKBSKNRDP`);
            })
            .then(response => response.json())
            .then(dataTips => {
              tipList = dataTips;
              return fetch(`https://api.foursquare.com/v2/venues/${placeID}/photos?v=20180518&limit=2&client_id=QXAZZTUZGR0IZ1I1VBUQIXJWWVQSX43HND5TNR25IXWGNS4N&client_secret=I0RPLG3XJILJMPF4BFMCAULOPYI5EJWP5UUCO2VIKBSKNRDP`);
            })
            .then(response => response.json())
            .then(dataPhotos => addInfo(tipList, dataPhotos))
            .catch(err => requestFail(err, 'Foursquare'));


            function addInfo(tipList, dataPhotos) {
              let innerHTML = '';
              
              if (tipList && tipList.response.tips.items) {
                const tipsData = tipList.response.tips.items;
                const photosData = dataPhotos.response.photos.items;
                  innerHTML = '<div class="info"><h3>' + title + '</h3>';
                  
                  //Photos
                  innerHTML += '<div class="place-photo">';
                  for(let i = 0; i < photosData.length; i++) {
                    const photo = photosData[i];
                    innerHTML += `<img alt="${title}, visitor's photo ${i + 1}" src="${photo.prefix}200x180${photo.suffix}" />`;
                  }

                  //Tips
                  innerHTML += '<div class="place-tips">';
                  tipsData.forEach( tip => {
                    innerHTML += '<p>' + tip.text + '</p>';
                  })
                  innerHTML += '</div> <p><i>by Foursquare</i></p> </div>';
              } else {
                  innerHTML = '<p class="warning">Sorry, we found no tips for this place.</p>';
              }
              infowindow.setContent(innerHTML);
            }
            //if Error in Request
            function requestFail(err, part) {
              console.log(err);
              infowindow.setContent(`<p class="warning">An error occured by ${part}.</p>`);
            }            
      infowindow.marker = marker;
  
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
  
      // Open the infowindow on the correct marker.
      // google.maps.event.addDomListener(window, 'resize', function() {
      //   infowindow.open(map, marker);
      // });
      infowindow.open(map, marker);
      map.fitBounds(bounds);
      map.panTo(marker.getPosition());
    }
  }
  render() {
    return null; 
  }
}

export default Marker;
