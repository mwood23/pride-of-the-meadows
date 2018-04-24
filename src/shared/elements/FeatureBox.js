import React from 'react';
import styled from 'styled-components';
import checkmark from '../../../static/assets/checkmark-icon.svg';;

const FeaturesList = styled.div`
  display: flex;
  flex-flow: column;
  border: 1px solid #dbdbdb;
  font-family: 'Lato';
  font-size: 14px;
  color: #666666;
  max-width: 280px;
  height: 100px;
	img {
    position: relative;
    top: 14px;
    right: 26px;
	}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; 
  margin: 0px 18px;
  border-bottom: 1px solid #dbdbdb;
`

const FeatureBox = ({ featureOne, featureTwo, featureThree }) => (
	<FeaturesList>
    <FeatureItem><img alt= "" width="16px" height="16px" src={checkmark} /><span style={{ position: 'relative', right: '18px' }}>{featureOne}</span></FeatureItem>
    <FeatureItem><img alt="" width="16px" height="16px" src={checkmark} /><span style={{ position: 'relative', right: '18px' }}>{ featureTwo }</span></FeatureItem>
    <FeatureItem style={{ borderBottom: 'none' }}><img alt="" width="16px" height="16px" src={checkmark} /><span style={{ position: 'relative', right: '18px' }}>{ featureThree }</span></FeatureItem>
	</FeaturesList>
);

export default FeatureBox;
