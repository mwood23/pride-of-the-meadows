import React from "react";
// import Link from "gatsby-link";
import PostListing from "../components/PostListing/PostListing";
import VideoHero from "../components/VideoHero/ViewHero";

// import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <VideoHero />
      <h1>{data.allSrcYaml.site_title[0]}</h1>
      <h2>{data.pageContentYaml.intro_blurb}</h2>
      <p>{data.site.siteMetadata.desc}</p>
      <div>
        {data.pageContentYaml.about_us_icon_blurb_row.map(item => (
          <div key={item.header}>
            <img src={item.icon_image} alt="test" />
            <h4>{item.header}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <h2 style={{ margin: "2rem 0" }}>Posts</h2>
      {data.posts.edges
        .slice(0, parseInt(data.allSrcYaml.front_posts_limit[0], 10))
        .map(({ node }) => <PostListing key={node.id} post={node} />)}
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
    allSrcYaml {
      site_title: distinct(field: site_title)
      front_posts_limit: distinct(field: posts___front_limit)
      posts_author: distinct(field: posts___site_author)
    }
    pageContentYaml(id: { regex: "/home.yml/" }) {
      id
      intro_blurb
      about_us_icon_blurb_row {
        header
        icon_image
        text
      }
    }
    # background: imageSharp(id: { regex: "/bg.jpeg/" }) {
    #   sizes(maxWidth: 1240, grayscale: true) {
    #     ...GatsbyImageSharpSizes
    #   }
    # }
  }
`;
