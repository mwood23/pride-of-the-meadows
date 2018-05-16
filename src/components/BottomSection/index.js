import React from 'react';
import styled from 'styled-components';
import { Container } from '../../shared/blocks/Container';
import FancyButton from '../../shared/elements/FancyButton';
import FindALocation from '../FindALocation';

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

const BottomSection = () => {
  return (
    <BottomSectionContainer>
      <FindALocation
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiiKUwnN8nt9lc4xuY0mNkGHKUXHHawmU&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
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
};

export default BottomSection;
