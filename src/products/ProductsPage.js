import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  margin: auto;
  height: 669.1px;
`

export default class ProductsPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
		console.log('dat')
		console.log(data)
    return (
      <div>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>Recipe: {data.markdownRemark.frontmatter.title}</h1>
        <Container>
          <img alt="product" src={ data.markdownRemark.frontmatter.image } />
        </Container>
      </div>
    );
  }
}

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
