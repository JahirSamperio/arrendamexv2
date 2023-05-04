import React, { Component } from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  state = {
    markers: [],
  };

  handleMapClick = (event) => {
    const { latLng } = event;
    this.setState((prevState) => ({
      markers: [...prevState.markers, { lat: latLng.lat(), lng: latLng.lng() }],
    }));
  };

  render() {
    const { markers } = this.state;

    return (
      <GoogleMap onClick={this.handleMapClick}>
        {markers.map((marker) => (
          <Marker position={marker} />
        ))}
      </GoogleMap>
    );
  }
}

export default Map;