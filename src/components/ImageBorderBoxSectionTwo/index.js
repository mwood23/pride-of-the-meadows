import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import InfoBoxWithImageBorderTwo from '../InfoBoxWithImageBorderTwo';
import Content from './Content';

const SectionContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  padding: 15px 0;

  ${media.forSmallMediumOnly`
    height: 800px;
    margin-bottom: 100px;
  `}
  
`
const ImageBorderBoxSectionTwo = props => (
  <SectionContainer style={{ marginTop: '250px', marginBottom: '250px' }}>
    <InfoBoxWithImageBorderTwo 
      borderImage={ props.borderImage }
      backgroundColor={ props.backgroundColor }
      padding={ props.padding }>
      <Content 
				recipeName={ props.recipeName }
				recipeDate={ props.recipeDate }
			/>
    </InfoBoxWithImageBorderTwo>
  </SectionContainer>
);

export default ImageBorderBoxSectionTwo;

