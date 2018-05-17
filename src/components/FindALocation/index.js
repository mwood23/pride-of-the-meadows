import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

const FindALocation = ({ locations }) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 36.71222, lng: -80.354193 }}
    >
      {locations.map(location => (
        <Marker key={location.address} position={location.geometry} />
      ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(FindALocation));
