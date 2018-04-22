import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 800px;
  height: 669.1px;
`;

const FoodHeader = styled.div`
  font-family: 'Sacramento';
  font-size: 64px;
  color: #7ed321;
`

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>Recipe: {data.markdownRemark.frontmatter.title}</h1>
        <Container>
          <img alt="product" src={ data.markdownRemark.frontmatter.image } />
        </Container>
        <FoodHeader>
          Just
        </FoodHeader>
      </div>
    );
  };
};

export const query = graphql`
  query ProductsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;
