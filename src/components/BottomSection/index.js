import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import FancyButton from '../../shared/elements/FancyButton';
import FindALocation from '../FindALocation';
import Subheading from '../../shared/elements/SubHeading';
import H2 from '../../shared/elements/H2';
import Button from '../../shared/elements/Button';
import locationData from '../../utils/locations.json';
import { getDistance, convertUnit } from 'geolib';
import { GEOCODE_URL } from '../../utils/const';
import { media } from '../../utils/theme';
import LazyLoad from 'react-lazy-load';

import brandmark from '../../images/POTM-Brandmark.png';

const BottomSectionContainer = styled.div``;

const SectionContent = Container.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem auto 6rem;

  img {
    width: 105px;
    height: 105px;
  }
`;

const WhereToFindUs = Subheading.extend`
  text-align: left;
`;

const LocationNearYou = styled.div`
  background-color: ${props => props.theme.potmWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  ${media.forLargeUp`
    width: 375px;
    height: 425px;
    position: absolute;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
  `};

  ${media.forSmallMediumOnly`
    position: relative;
  `};
  ${media.forSmallOnly`
    padding: 2rem 15px;
  `};
`;

const MapContainerWrapper = styled.div`
  position: relative;
`;

const MapContainerStyle = styled.div`
  width: 100%;

  ${media.forLargeUp`
    height: 500px;
  `};

  ${media.forSmallMediumOnly`
    height: 400px;
  `};
`;

const LocationFilters = styled.div`
  display: flex;
  ${media.forSmallOnly`
    font-size: 14px;
  `};

  ${Button} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 175px;
    height: 44px;
    margin-right: 1rem;

    svg {
      fill: rgba(0, 0, 0, 0.2);
      margin-right: 3px;
    }
  }
`;

const ZipCodeForm = styled.form`
  flex: 1;
  margin: 0;
  height: 44px;
  position: relative;
  max-width: 150px;

  input {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.2);
    padding-left: 5px;
  }

  button {
    position: absolute;
    border-radius: 0 6px 6px 0;
    right: 0;
    top: 0;
    height: 44px;
    border: none;
    width: 34px;
    background-color: #ff6d05;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      background-color: #ea6100;
    }

    svg {
      fill: #bb4e00;
    }
  }
`;

export default class BottomSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputvalue: '',
      closestLocation: null,
      usersLocation: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  filterLocations(latitude, longitude, fromCurrentLocation) {
    const userLocation = {
      latitude,
      longitude
    };

    let closestLocation = locationData
      .map(location => {
        const latLong = {
          latitude: location.geometry.lat,
          longitude: location.geometry.lng
        };

        location.distanceFromUser = convertUnit(
          'mi',
          getDistance(userLocation, latLong),
          0
        );

        return location;
      })
      .sort((a, b) => a.distanceFromUser - b.distanceFromUser)[0];

    closestLocation.directionsLink = `https://www.google.com/maps/dir/${
      userLocation.latitude
    },${userLocation.longitude}/${closestLocation.address}`;

    this.setState({
      closestLocation,
      usersLocation: {
        lat: userLocation.latitude,
        lng: userLocation.longitude
      },
      inputvalue: fromCurrentLocation ? '' : this.state.inputvalue
    });
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        this.filterLocations(latitude, longitude, true);
      },
      err => {
        console.log(err);
      }
    );
  }

  handleSubmit(event) {
    fetch(`${GEOCODE_URL}${this.state.inputvalue}`)
      .then(res => res.json())
      .then(res => {
        if (res.results.length > 0) {
          const geocodedLocation = res.results[0];

          this.filterLocations(
            geocodedLocation.geometry.location.lat,
            geocodedLocation.geometry.location.lng
          );
        }
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      inputvalue: event.target.value
    });
  }

  render() {
    const mapHeight =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 680px)').matches
        ? 400
        : 500;

    return (
      <BottomSectionContainer>
        <MapContainerWrapper>
          <LazyLoad height={mapHeight} offsetVertical={800}>
            <MapContainerStyle>
              <FindALocation
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiiKUwnN8nt9lc4xuY0mNkGHKUXHHawmU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                locations={locationData}
                closestLocation={this.state.closestLocation}
                usersLocation={this.state.usersLocation}
              />
            </MapContainerStyle>
          </LazyLoad>
          <LocationNearYou>
            <WhereToFindUs>Where to Find Us</WhereToFindUs>
            <H2>Near You</H2>
            <p>
              Pride of the Meadows is currently being sold in Food Lions across
              Southern Virginia and North Carolina, sourced from different farms
              dependent on the store’s location.
            </p>
            <LocationFilters>
              <Button onClick={this.getCurrentLocation}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" />
                </svg>
                USE MY LOCATION
              </Button>
              <ZipCodeForm onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  placeholder="Enter Zip"
                  value={this.state.inputvalue}
                  onChange={this.handleChange.bind(this)}
                />
                <button>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                  </svg>
                </button>
              </ZipCodeForm>
            </LocationFilters>
          </LocationNearYou>
        </MapContainerWrapper>
        <SectionContent>
          <img src={brandmark} alt="Pride of the Meadows logo" />
          <p>
            Pride of the Meadows is packaged and distributed by Wood's Produce
            company, local to Meadows of Dan, VA. We take great pride in
            supporting local growers and delivering only the most fresh, high
            quality fruits and vegetables.
          </p>
          <a
            href="https://woodsproduce.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FancyButton>Visit Wood's Produce</FancyButton>
          </a>
        </SectionContent>
      </BottomSectionContainer>
    );
  }
}
