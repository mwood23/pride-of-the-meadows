import React from 'react';
import styled from 'styled-components';

const CopyInfo = styled.div`
  margin-top: 15px;
  height: 169px;
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
`

const Content = () => (
  <div style={{ display: 'flex' }}>
  <ImageContainer>
  </ImageContainer>
  <div style={{ flexDirection: 'column', width: '50%' }}>
    <FeaturedRecipe>Featured Recipe</FeaturedRecipe>
    <RecipeName>Jalepeno Poppers</RecipeName><br />
    <RecipeTagline>RECIPES <span style={{ color: '#9b9b9b' }}>/ 24 JUN 2018</span></RecipeTagline>
    <CopyInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer nec odio. Praesent libero. 
      Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
      Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</CopyInfo>
  </div>
  </div>
)

export default Content;
