import React from 'react'
import { SectionContainer } from '../../../shared/blocks/Container';
import InfoBoxWithImageBorder from '../InfoBoxWithImageBorder';
import Content from './components/Content';

const ImageBorderBoxSectionTwo = props => (
  <SectionContainer>
    <InfoBoxWithImageBorder 
      borderImage={ props.borderImage }
      backgroundColor={ props.backgroundColor }
      padding={ props.padding }>
      <Content 
				recipeName={ props.recipeName }
				recipeDate={ props.recipeDate }
			/>
    </InfoBoxWithImageBorder>
  </SectionContainer>
);

export default ImageBorderBoxSectionTwo;

