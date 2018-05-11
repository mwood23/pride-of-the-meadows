import React from 'react';
import styled from 'styled-components';
import checkmark from '../../../static/assets/checkmark-icon.svg';

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  font-family: 'Lato';
  font-size: 14px;
  color: #666666;
  max-width: 280px;
  margin-top: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 1rem;
  padding: 0.5rem 0;
  position: relative;
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border: none;
  }

  img {
    width: 16px;
    height: 16px;
    margin: 0 0.5rem 0 0;
    position: absolute;
    left: -1.5rem;
  }

  span {
    display: block;
    line-height: 1;
  }
`;

const FeatureBox = ({ featureOne, featureTwo, featureThree }) => (
  <FeaturesList>
    <FeatureItem>
      <img alt="" src={checkmark} />
      <span>{featureOne}</span>
    </FeatureItem>
    <FeatureItem>
      <img alt="" src={checkmark} />
      <span>{featureTwo}</span>
    </FeatureItem>
    <FeatureItem>
      <img alt="" src={checkmark} />
      <span>{featureThree}</span>
    </FeatureItem>
  </FeaturesList>
);

export default FeatureBox;
