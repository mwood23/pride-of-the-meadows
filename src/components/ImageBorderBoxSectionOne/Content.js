import React from 'react';
import FancyFont from '../../shared/elements/FancyFont';
import styled from 'styled-components';
import { media } from '../../utils/theme';

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
  ${ media.forSmallMediumOnly`
    width: 100%;
  `}
`

const ProductTitle = styled.div`
  display: inline-block;
  vertical-align: top;
	font-family: 'Montserrat';
  line-height: 0.65;
	font-size: 46px;
  ${ media.forSmallMediumOnly`
    width: 100%;
  `}
`

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
  ${ media.forSmallMediumOnly`
    width: 100%;
  `}
`

const ContentContainer = styled.div`
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${ media.forSmallMediumOnly`
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  `}
`

const Content = props => (
  <ContentContainer>
    <SubHeading leftAlign>{ props.tagline.toUpperCase() }</SubHeading>
    <FancyFont>Just</FancyFont><br />
    <ProductTitle>{ props.productName }</ProductTitle>
    <CopyInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Integer nec odio. Praesent libero. 
      Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
      Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</CopyInfo>
  </ContentContainer>
)

export default Content;
