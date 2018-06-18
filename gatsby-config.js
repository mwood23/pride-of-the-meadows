module.exports = {
  siteMetadata: {
    title: 'Pride of the Meadows | Local Fruits and Vegetables from NC and VA',
    desc:
      'We work with farmers local to your area to source the freshest product possible, package it in our food safe facility, and send it to grocers near you. All within 72 hours.'
  },
  mapping: {
    'MarkdownRemark.frontmatter.product': 'ProductYaml'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/page-content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NN8X7NP',
      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false

      // Specify optional GTM environment details.
      // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
      // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pride of the Meadows',
        short_name: 'POTM',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#7ed321',
        display: 'minimal-ui',
        icon: 'public/assets/POTM-Brandmark.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};
