import React from 'react';
import VideoHero from '../components/VideoHero';
import IconBlurbRow from '../components/IconBlurbRow';
import TidyInfoBox from '../components/TidyInfoBox';
import ImageBorderInfoBox from '../components/ImageBorderInfoBox';
import ProductCarousel from '../components/ProductCarousel';
import PostCollection from '../components/PostCollection';

const IndexPage = ({ data }) => {
  return (
    <div>
      <VideoHero mobileHeroImage={data.mobileHero} />
      <IconBlurbRow blurbs={data.pageContentYaml.about_us_icon_blurb_row} />
      <ImageBorderInfoBox borderImage={data.infoBoxBorder} />
      <ProductCarousel />
      <PostCollection
        backgroundImage={data.recipeBackground}
        posts={data.recipes.edges}
      />
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
    # posts: allMarkdownRemark(
    #   sort: { fields: [frontmatter___date], order: DESC }
    #   filter: { fields: { slug: { regex: "/posts/" } } }
    # ) {
    #   edges {
    #     node {
    #       id
    #       frontmatter {
    #         title
    #         date(formatString: "MMMM DD YYYY")
    #       }
    #       fields {
    #         slug
    #       }
    #       html
    #       excerpt
    #     }
    #   }
    # }
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
            image
            alt
            tag
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
    # allSrcYaml {
    #   site_title: distinct(field: site_title)
    #   front_posts_limit: distinct(field: posts___front_limit)
    #   posts_author: distinct(field: posts___site_author)
    # }
    pageContentYaml(id: { regex: "/home.yml/" }) {
      id
      intro_blurb
      about_us_icon_blurb_row {
        header
        icon_image
        text
      }
    }
    recipeBackground: imageSharp(id: { regex: "/carrots-food-fresh.jpg/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    infoBoxBorder: imageSharp(id: { regex: "/carrots-food-fresh.jpg/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    mobileHero: imageSharp(id: { regex: "/cabbage-mobile-hero.jpg/" }) {
      sizes(maxWidth: 700) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
