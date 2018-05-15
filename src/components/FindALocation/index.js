import React, { Component } from 'react';
import ReactMapboxGl, {
  Marker,
  ZoomControl,
  RotationControl
  // GeoJSONLayer,
  // Layer,
  // Source
} from 'react-mapbox-gl';
import styled from 'styled-components';
import { GEOCODE_URL } from '../../utils/const';
import locationData from '../../utils/locations.json';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFyY3Vzd29vZDIzIiwiYSI6ImNqaDNsZnZpMzBjN2Uyd24yd3lnbHpndWgifQ.a9tKInJ_RE0d98pU_g05dw',

  scrollZoom: false
});

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export default class FindALocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log(locationData);
    return (
      <MapContainer>
        <Map
          style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
          zoom={[12]}
          center={[-80.354193, 36.71222]}
        />
      </MapContainer>
    );
  }
}
