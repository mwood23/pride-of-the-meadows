import React from "react";
import Link from "gatsby-link";
import PostListing from "../components/PostListing/PostListing";

import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>Hi I'm the Home Page</h1>
      <p>{data.site.siteMetadata.desc}</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Img sizes={data.background.sizes} />
      <h2 style={{ margin: "2rem 0" }}>Posts</h2>
      {data.posts.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
      <h2 style={{ margin: "2rem 0" }}>Recipes</h2>
      {data.recipes.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
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
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/posts/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
    recipes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/recipes/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
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
