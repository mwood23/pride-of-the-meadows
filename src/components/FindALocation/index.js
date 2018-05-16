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

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`;

class FindALocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log(locationData);
    return (
      <MapContainer>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 36.71222, lng: -80.354193 }}
        >
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
      </MapContainer>
    );
  }
}

export default withScriptjs(withGoogleMap(FindALocation));
