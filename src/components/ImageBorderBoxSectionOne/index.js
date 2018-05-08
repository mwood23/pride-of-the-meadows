import React from 'react';
import InfoBoxWithImageBorder from '../InfoBoxWithImageBorder';
import Content from './Content';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const SectionContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  padding: 15px 0;
  margin-top: 150px;
  ${media.forSmallMediumOnly`
    height: 1000px;
    marginBottom: 100px;
  `}
  
`

const ImageBorderBoxSectionOne = props => (
  <SectionContainer style={{ padding: '0 36px' }}>
    <InfoBoxWithImageBorder 
      padding={ props.padding } 
      nutritionReceiptImage={ props.nutritionReceiptImage }
      borderImage={ props.borderImage }>
      <Content 
        productName={ props.productName }      
				tagline={ props.tagline }         
      />
    </InfoBoxWithImageBorder>
  </SectionContainer>
)

export default ImageBorderBoxSectionOne;
