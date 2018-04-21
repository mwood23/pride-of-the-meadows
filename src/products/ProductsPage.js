import React, { Component } from 'react';

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
      }
    }
  }
`;
