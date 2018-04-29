import React from 'react';
import { SectionContainer } from '../../../shared/blocks/Container';
import InfoBoxWithImageBorder from '../InfoBoxWithImageBorder';
import ContentOne from '../ContentOne';

const ImageBorderBoxSectionOne = props => (
  <SectionContainer style={{ padding: '0 36px' }}>
    <InfoBoxWithImageBorder 
      padding={20} 
      withNutritionDetails={true}
      borderImage={ props.borderImage }>
      <ContentOne />
    </InfoBoxWithImageBorder>
  </SectionContainer>
)

export default ImageBorderBoxSectionOne;
