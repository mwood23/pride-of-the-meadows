import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import styled from 'styled-components';

import UserLocationIcon from '../../images/userLocation.png';

const MapMarkerInfoStore = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.1px;
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.defaultHeaderColor};
`;

const MapMarkerAddress = styled.p`
  font-size: 13px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const MapMarkerDistanceAway = MapMarkerAddress.extend`
  font-style: italic;
`;

const GetDirectionsLink = styled.a`
  display: block;
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
`;

const BottomTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
`;

const FindALocation = class extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate(prevProps) {
    console.log('did update called', prevProps);

    if (
      this.props.usersLocation &&
      this.props.closestLocation &&
      this.props.usersLocation.lat !==
        (prevProps.usersLocation && prevProps.usersLocation.lat) &&
      this.props.usersLocation.lng !==
        (prevProps.usersLocation && prevProps.usersLocation.lng) &&
      this.props.closestLocation.geometry.lat !==
        (prevProps.closestLocation && prevProps.closestLocation.geometry.lat) &&
      this.props.closestLocation.geometry.lng !==
        (prevProps.closestLocation && prevProps.closestLocation.geometry.lng)
    ) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(
        new window.google.maps.LatLng(
          this.props.usersLocation.lat,
          this.props.usersLocation.lng
        )
      );

      bounds.extend(
        new window.google.maps.LatLng(
          this.props.closestLocation.geometry.lat,
          this.props.closestLocation.geometry.lng
        )
      );

      this.refs.map.fitBounds(bounds);
    }
  }

  render() {
    const { locations, closestLocation, usersLocation } = this.props;

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 36.71222, lng: -80.354193 }}
        ref="map"
      >
        {locations.map(location => (
          <Marker key={location.address} position={location.geometry} />
        ))}

        {closestLocation ? (
          <Marker position={closestLocation.geometry}>
            <InfoBox
              options={{
                closeBoxURL: '',
                boxStyle: {
                  width: '250px',
                  height: '140px',
                  top: '0'
                },
                pixelOffset: new google.maps.Size(-125, -185),
                alignBottom: false
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '1rem 1.5rem',
                  position: 'relative',
                  height: '130px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div>
                  <MapMarkerInfoStore>FOOD LION</MapMarkerInfoStore>
                  <MapMarkerAddress>{closestLocation.address}</MapMarkerAddress>
                  <MapMarkerDistanceAway>
                    {closestLocation.distanceFromUser} miles away
                  </MapMarkerDistanceAway>
                  <GetDirectionsLink
                    href={closestLocation.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </GetDirectionsLink>
                </div>

                <BottomTriangle />
              </div>
            </InfoBox>
          </Marker>
        ) : null}
        {usersLocation ? (
          <Marker
            position={usersLocation}
            icon={{
              url: UserLocationIcon
            }}
          />
        ) : null}
      </GoogleMap>
    );
  }
};

export default withScriptjs(withGoogleMap(FindALocation));
