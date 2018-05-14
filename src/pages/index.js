import React from 'react';
import VideoHero from '../components/VideoHero';
import IconBlurbRow from '../components/IconBlurbRow';
import TidyInfoBox from '../components/TidyInfoBox';
import ImageBorderInfoBox from '../components/ImageBorderInfoBox';
import ProductCarousel from '../components/ProductCarousel';
import PostCollection from '../components/PostCollection';
import BottomSection from '../components/BottomSection';
import SubHeading from '../shared/elements/SubHeading';

const IndexPage = ({ data }) => {
  return (
    <div>
      <VideoHero mobileHeroImage={data.mobileHero} />
      <IconBlurbRow blurbs={data.pageContentYaml.about_us_icon_blurb_row} />
      <ImageBorderInfoBox borderImage={data.infoBoxBorder}>
        <SubHeading>Pride of the Meadows</SubHeading>
        <h2 style={{ fontSize: '40px' }}>About Us</h2>
        <p>
          <span style={{ color: 'red' }}>
            Local tastes better. (make this our tagline?)
          </span>{' '}
          We work with farmers local to your area to source the freshest product
          possible, package it in our food safe facility, and send it to grocers
          near you. All of our products are:
          <span style={{ color: 'red' }}>
            Non-GMO?, Hand picked?, Gluten free?, From farm to store in 72
            hours?, Cold from source to your door?
          </span>
        </p>
        <p>
          You can find Pride of the Meadows branded fruits and vegetables in
          Virginia and North Carolina right now at Food Lions and independent
          grocery stores. If we're not in your area yet please{' '}
          <span style={{ color: 'red' }}>contact us </span>
          and we'll see what we can do!
        </p>
      </ImageBorderInfoBox>
      <ProductCarousel products={data.products.edges} />
      <PostCollection
        backgroundImage={data.recipeBackground}
        posts={data.recipes.edges}
      />
      <BottomSection />
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
    products: allProductYaml {
      edges {
        node {
          id
          tagline
          image
          featureOne
          featureTwo
          featureThree
          productDescription
          fields {
            slug
          }
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
