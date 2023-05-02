import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const handleMapClick = ({ lat, lng }) => {
    setCoordinates({ lat, lng });
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'TU_API_KEY_DE_GOOGLE_MAPS' }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={15}
        onClick={handleMapClick}
      >
        <Marker lat={coordinates.lat} lng={coordinates.lng} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => <div className="marker">Marcador</div>;

export default Map;
