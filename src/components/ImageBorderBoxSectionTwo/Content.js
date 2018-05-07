import React from 'react';
import Button from '../../shared/elements/Button';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const CopyInfo = styled.div`
  margin-top: 15px;
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: 0.1px;
  text-align: left;
  color: #666666;
  ${ media.forSmallMediumOnly`
    width: 100%;
    text-align: center;
  `}
`

const FeaturedRecipe = styled.div`
  width: 845px;
  height: 40px;
  font-family: Montserrat;
  font-size: 46px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.65;
  letter-spacing: 0.3px;
  text-align: left;
  margin-bottom: 28px;
  margin-top: 72px;
  color: #333333;
  color: var(--blackish);
  ${ media.forSmallMediumOnly`
    width: 100%;
    text-align: center;
  `}
`
const RecipeName = styled.div`
  margin-bottom: 8px;
  width: 315.2px;
  height: 32px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.52;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
  color: var(--blackish);
  ${ media.forSmallMediumOnly`
    width: 100%;
    text-align: center;
  `}
`;

const RecipeTagline = styled.div`
  color: #33333;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1.5px;
  font-family: 'Montserrat'
  ${ media.forSmallMediumOnly`
    width: 100%;
    text-align: center;
  `}
`

const ImageContainer = styled.div`
  width: 400px;
  height: 100%;
  img {
		height: 100%;  
  }
  margin-right: 33px;
  position: absolute;
  top: 0;
  left:0;
  ${media.forSmallMediumOnly`
    width: calc(100vw - 160px);
		img {
      width: calc(100vw - 80px);
      height: 500px;
      margin: 0 auto;
		}
	`}
`

const CtaButton = Button.extend`
  background-color: transparent; 
  margin-top: 15px;
  color: var(--blackish);
  letter-spacing: 1.5px;
	height: 48px;
  &:hover {
    background-color: transparent;
  }
  ${media.forSmallMediumOnly`
    width: 100%;
    display: flex;
    justify-content: center;
  `}

`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 25px;
  ${ media.forSmallMediumOnly`
    padding-top: 25px;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  `}
`
const ContentContainer = styled.div`
 display: flex;
 justify-content: flex-start;
 width: calc( 100% - 420px );
 ${ media.forSmallMediumOnly`
  justify-content: flex-end;
  flex-direction: column;
  height: calc( 100% - 500px );
  width: 100%;
 `}
`

const ButtonContainer = styled.div`
  width: 250px
  ${ media.forSmallMediumOnly`
    width: 100%
  `}
`

const Content = props => (
  <ContentContainer>
    <ImageContainer>
      <img src={ 'https://i.imgur.com/qf1d8Oi.jpg' } />
    </ImageContainer>
    <InnerContainer>
			<FeaturedRecipe>Featured Recipe</FeaturedRecipe>
			<RecipeName>{ props.recipeName }</RecipeName><br />
			<RecipeTagline>RECIPES / { props.recipeDate }</RecipeTagline>
			<CopyInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer nec odio. Praesent libero. 
			</CopyInfo>
      <ButtonContainer>
			  <CtaButton children="OUR RECIPE"/>
      </ButtonContainer>
    </InnerContainer>
  </ContentContainer>
)

export default Content;

