/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode
    });

    createNodeField({
      node,
      name: 'slug',
      value: `${slug}`
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.includes('/posts/')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/posts/PostPage.js'),
            context: {
              slug: node.fields.slug
            }
          });
        }

        if (node.fields.slug.includes('/recipes/')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/recipes/RecipePage.js'),
            context: {
              slug: node.fields.slug
            }
          });
        }
      });
      resolve();
    });
  });
};
