import React from 'react';
import Button from '../../../../shared/elements/Button';
import styled from 'styled-components';

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
`;

const RecipeTagline = styled.div`
  color: #33333;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1.5px;
  font-family: 'Montserrat'
`

const ImageContainer = styled.div`
  width: 400px;
  height: 100%;
  background-image: url("https://i.imgur.com/qf1d8Oi.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 33px;
  position: absolute;
  top: 0;
  left:0;
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
`;

const Content = props => (
  <div>
		<ImageContainer />
		<div style={{ position: 'absolute', zIndex: 30, width: '400px', left: '450px', top: '-50px', display: 'flex', flexDirection: 'column' }}>
			<FeaturedRecipe>Featured Recipe</FeaturedRecipe>
			<RecipeName>{ props.recipeName }</RecipeName><br />
			<RecipeTagline>RECIPES <span style={{ color: '#9b9b9b' }}>/ { props.recipeDate }</span></RecipeTagline>
			<CopyInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer nec odio. Praesent libero. 
			</CopyInfo>
      <div style={{ width: '250px' }}>
			  <CtaButton children="OUR RECIPE"/>
      </div>
  </div>
  </div>
)

export default Content;

