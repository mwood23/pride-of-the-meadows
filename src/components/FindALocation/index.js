import React, { Component } from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import styled from 'styled-components';
import { GEOCODE_URL } from '../../utils/const';
import locationData from '../../utils/locations.json';

const FindALocation = () => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 36.71222, lng: -80.354193 }}
    >
      {locationData.map(location => <Marker position={location.geometry} />)}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(FindALocation));
