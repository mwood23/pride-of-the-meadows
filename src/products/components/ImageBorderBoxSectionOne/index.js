import React from 'react';
import { SectionContainer } from '../../../shared/blocks/Container';
import InfoBoxWithImageBorder from '../InfoBoxWithImageBorder';
import Content from './components/Content';

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
