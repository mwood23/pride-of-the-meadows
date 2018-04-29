import React from 'react'
import { SectionContainer } from '../../../shared/blocks/Container';
import InfoBoxWithImageBorder from '../InfoBoxWithImageBorder';
import ContentTwo from '../ContentTwo';

const ImageBorderBoxSectionTwo = props => (
  <SectionContainer>
    <InfoBoxWithImageBorder 
      borderImage={ props.borderImage }
      backgroundColor={ props.backgroundColor }
      padding={ props.padding }>
      <ContentTwo />
    </InfoBoxWithImageBorder>
  </SectionContainer>
);

export default ImageBorderBoxSectionTwo;

