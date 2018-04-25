import React from 'react';
import VegetableBackdrop from '../../../../static/assets/veggie-backdrop.jpg';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-top: 45px;
  position: relative;
  width: 100%;
`

const ProductDetailSection = props => (
  <SectionContainer>
    <div>
      <img alt="" src={VegetableBackdrop} />
    </div>
    <div style={{ 
      zIndex: '10',
      top: '25px',
      left: '25px', 
      position: 'absolute', 
      width: '95%', 
      height: '90%', 
      backgroundColor: '#fff' }}>
    </div>
  </SectionContainer>
)

export default ProductDetailSection

