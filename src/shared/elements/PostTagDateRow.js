import React from 'react';
import styled from 'styled-components';

const PostTagDateRowContainer = styled.div`
  margin-bottom: 0.75rem;
  font-family: Montserrat;
  font-size: 0.9rem;

  span:first-child {
    text-transform: uppercase;
    font-weight: bold;
  }

  span:last-child {
    color: #9b9b9b;
  }
`;

const PostTagDateRow = ({ textOne, textTwo }) => (
  <PostTagDateRowContainer>
    <span>{textOne} </span>
    <span>/ {textTwo}</span>
  </PostTagDateRowContainer>
);

export default PostTagDateRow;
