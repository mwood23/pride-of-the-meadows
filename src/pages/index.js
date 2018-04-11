import React from "react";
import Link from "gatsby-link";

import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>Hi people</h1>
      <p>{data.site.siteMetadata.desc}</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Img sizes={data.background.sizes} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD YYYY")
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
    background: imageSharp(id: { regex: "/bg.jpeg/" }) {
      sizes(maxWidth: 1240, grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
