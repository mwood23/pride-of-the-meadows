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

  componentDidMount() {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAC623ko-6vnoU6NSpWRvhvogB9xQiv-vk'
    ).then(function(res) {
      const response = res.json().results;
      console.log(res, response);
      return response;
    });
  }

  render() {
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
