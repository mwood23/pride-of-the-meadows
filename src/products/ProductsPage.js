import React, { Component } from 'react';
import styled from 'styled-components';
import FancyFont from '../shared/elements/FancyFont';
import FeatureBox from '../shared/elements/FeatureBox';
import Button from '../shared/elements/Button';
import { Container, ContainerFluid, SectionContainer } from '../shared/blocks/Container';
import InfoBoxWithImageBorder from './components/InfoBoxWithImageBorder';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import BorderImage from '../../public/assets/carrots-food-fresh.jpg';
import BorderImageAlt from '../../public/assets/cauliflower-food-fresh.jpg';

const CtaButton = Button.extend`
  background-color: #66bd4d;
  color: white;
  letter-spacing: 1.5px;
	height: 48px;
	margin-top: 35px;
  &:hover {
    background-color: #338a1a;
  }
`;

const ImageContainer = styled.div`
	display: inline-block
  width: 65%;
  margin-left: 4rem;
  img {
    width: 100%;
    align-self: center;
  }
`

const ProductTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 25%
	font-family: 'Montserrat';
  line-height: 0.65;
	font-size: 46px;
  margin-left: 1rem;
	h2 {
		font-family: 'Sacramento';
		font-size: 64px;
    margin-bottom: 0;
		color: #7ed321;
	}
`

const SubHeading = styled.div`
	width: 280px;
  height: 40px;
	margin-top: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: 3.2px;
  text-align: left;
  color: #333333;
  color: var(--blackish);
`

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <Container style={{ marginTop: '10%' }}>
          <SectionContainer>
            <ImageContainer>
              <img alt="product" src={ data.markdownRemark.frontmatter.image } />
            </ImageContainer>
            <ProductTitle>
              <FancyFont>Just</FancyFont><br />
              <span>Jalapeños</span><br />
              <SubHeading leftAlign>CRISP AND SAVORY</SubHeading><br />
              <FeatureBox 
                featureOne={ data.markdownRemark.frontmatter.featureOne}
                featureTwo={ data.markdownRemark.frontmatter.featureTwo }
                featureThree={ data.markdownRemark.frontmatter.featureThree } />
              <CtaButton children="OUR RECIPE" />
            </ProductTitle>
            </SectionContainer>
          </Container>
          <ContainerFluid>
          <SectionContainer style={{ padding: '0 36px' }}>
            <InfoBoxWithImageBorder 
              padding={20} 
              withNutritionDetails={true}
              borderImage={ BorderImage }>
              <ContentOne />
            </InfoBoxWithImageBorder>
          </SectionContainer>
					<SectionContainer>
						<InfoBoxWithImageBorder 
							padding={65}
							backgroundColor='rgba(103, 190, 77, 0.6)' 
							borderImage={ BorderImageAlt }>
							<ContentTwo />
						</InfoBoxWithImageBorder>
					</SectionContainer>
        </ContainerFluid>
      </div>
    );
  };
};

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featureOne
        featureTwo
        featureThree
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;
